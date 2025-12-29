/**
 * Recursive Multi-Layer Crawler for Formation Civique Content
 *
 * This script intelligently crawls ALL layers of the thematic content structure.
 * It automatically detects whether a page is a listing page or a content page,
 * and recursively crawls until it reaches actual educational content.
 *
 * Features:
 * - Automatic layer detection (handles 2, 3, or more layers)
 * - Respectful delays (2-5 seconds between requests)
 * - Resume capability (skips already crawled pages)
 * - Progress tracking
 *
 * Usage:
 *   npm run crawl:all
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { JSDOM } from 'jsdom';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://formation-civique.interieur.gouv.fr';
const THEMES_URL = `${BASE_URL}/fiches-par-thematiques/`;
const OUTPUT_DIR = path.join(__dirname, 'data', 'themes');
const DELAY_MIN = 2000; // 2 seconds
const DELAY_MAX = 5000; // 5 seconds

interface PageLink {
  title: string;
  url: string;
  path: string[]; // Path segments for directory structure
}

interface PageContent {
  title: string;
  url: string;
  path: string[];
  html: string;
  textContent: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
  subPages: PageLink[]; // Links to sub-pages (if this is a listing page)
  isContentPage: boolean; // true if this is actual content, false if it's a listing
  fetchedAt: string;
}

// Track statistics
const stats = {
  totalPages: 0,
  contentPages: 0,
  listingPages: 0,
  newlyCrawled: 0,
  skipped: 0,
};

/**
 * Sleep for a random duration between min and max
 */
function sleep(min: number, max: number): Promise<void> {
  const duration = Math.floor(Math.random() * (max - min) + min);
  console.log(`   ⏱️  Waiting ${(duration / 1000).toFixed(1)}s...`);
  return new Promise(resolve => setTimeout(resolve, duration));
}

/**
 * Fetch a URL with proper headers and error handling
 */
async function fetchWithRetry(url: string, retries = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`   📡 Fetching: ${url}`);
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Educational Content Crawler (contact: educational-study-tool)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const html = await response.text();
      console.log(`   ✅ Fetched ${html.length} bytes`);
      return html;
    } catch (error) {
      console.log(`   ⚠️  Attempt ${i + 1}/${retries} failed: ${error}`);
      if (i < retries - 1) {
        await sleep(5000, 10000);
      } else {
        throw error;
      }
    }
  }
  throw new Error('All retries failed');
}

/**
 * Extract sub-page links from HTML
 * Returns links that are deeper in the URL hierarchy
 */
function extractSubPageLinks(html: string, currentUrl: string): PageLink[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const links: PageLink[] = [];

  // Parse current URL to understand the path
  const currentPath = new URL(currentUrl).pathname;
  const currentSegments = currentPath.split('/').filter(Boolean);

  // Find all links
  const allLinks = document.querySelectorAll('a[href]');

  allLinks.forEach((element) => {
    const href = element.getAttribute('href');
    let title = element.textContent?.trim() || '';

    // Skip empty titles, navigation links, external links
    if (!href || !title || href.startsWith('#') || href.startsWith('http') && !href.includes(BASE_URL)) {
      return;
    }

    // Normalize href
    const fullUrl = href.startsWith('http') ? href : `${BASE_URL}${href}`;
    const urlPath = new URL(fullUrl).pathname;
    const urlSegments = urlPath.split('/').filter(Boolean);

    // Only include links that:
    // 1. Start with /fiches-par-thematiques/
    // 2. Are deeper than the current page (more segments)
    // 3. Are within the same hierarchy
    if (urlPath.startsWith('/fiches-par-thematiques/') &&
        urlSegments.length > currentSegments.length) {

      // Check if this is a child of the current page
      const isChild = currentSegments.every((seg, i) => urlSegments[i] === seg);

      if (isChild || currentPath === '/fiches-par-thematiques/') {
        // Avoid duplicates
        if (!links.find(l => l.url === fullUrl)) {
          // Clean up the title (sometimes has extra whitespace)
          title = title.replace(/\s+/g, ' ').trim();

          // Skip if title is too generic or empty
          if (title.length > 3 && !title.match(/^(Accueil|Menu|Contenu)$/i)) {
            links.push({
              title,
              url: fullUrl,
              path: urlSegments.slice(1), // Remove 'fiches-par-thematiques'
            });
          }
        }
      }
    }
  });

  return links;
}

/**
 * Extract content sections from HTML
 */
function extractSections(html: string): Array<{ heading: string; content: string }> {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const sections: Array<{ heading: string; content: string }> = [];

  const headings = document.querySelectorAll('h1, h2, h3, h4');

  headings.forEach((heading) => {
    const headingText = heading.textContent?.trim() || '';
    let content = '';

    let nextElement = heading.nextElementSibling;
    while (nextElement && !['H1', 'H2', 'H3', 'H4'].includes(nextElement.tagName)) {
      const text = nextElement.textContent?.trim();
      if (text) {
        content += text + '\n\n';
      }
      nextElement = nextElement.nextElementSibling;
    }

    if (headingText && content.trim()) {
      sections.push({
        heading: headingText,
        content: content.trim(),
      });
    }
  });

  return sections;
}

/**
 * Determine if a page is a content page or a listing page
 * Content pages have substantial text content in sections
 * Listing pages mainly have links to other pages
 */
function isContentPage(sections: Array<{ heading: string; content: string }>, subPages: PageLink[]): boolean {
  // If there are no sub-pages and we have sections, it's content
  if (subPages.length === 0 && sections.length > 0) {
    return true;
  }

  // If we have substantial content (multiple sections with good content), it's content
  const totalContentLength = sections.reduce((sum, s) => sum + s.content.length, 0);
  if (totalContentLength > 500 && sections.length >= 2) {
    return true;
  }

  // Otherwise, it's likely a listing page
  return false;
}

/**
 * Parse a page and extract all relevant information
 */
function parsePage(html: string, url: string, pagePath: string[], title: string): PageContent {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Extract text content
  const mainContent = document.querySelector('main, article, .content, #content');
  const textContent = mainContent?.textContent?.trim() || '';

  // Extract sections
  const sections = extractSections(html);

  // Extract sub-page links
  const subPages = extractSubPageLinks(html, url);

  // Determine page type
  const isContent = isContentPage(sections, subPages);

  return {
    title,
    url,
    path: pagePath,
    html,
    textContent,
    sections,
    subPages,
    isContentPage: isContent,
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Save page content to disk
 */
function savePage(page: PageContent): void {
  const pageDir = path.join(OUTPUT_DIR, ...page.path);
  fs.mkdirSync(pageDir, { recursive: true });

  // Save full HTML
  fs.writeFileSync(path.join(pageDir, 'full.html'), page.html);

  // Save structured JSON
  const jsonContent = {
    title: page.title,
    url: page.url,
    path: page.path,
    textContent: page.textContent,
    sections: page.sections,
    subPages: page.subPages.map(sp => ({ title: sp.title, url: sp.url, path: sp.path })),
    isContentPage: page.isContentPage,
    fetchedAt: page.fetchedAt,
  };

  fs.writeFileSync(
    path.join(pageDir, 'content.json'),
    JSON.stringify(jsonContent, null, 2)
  );

  // Save readable markdown
  let markdown = `# ${page.title}\n\n`;
  markdown += `**Source:** ${page.url}\n`;
  markdown += `**Type:** ${page.isContentPage ? 'Content Page' : 'Listing Page'}\n`;
  markdown += `**Fetched:** ${new Date(page.fetchedAt).toLocaleString('fr-FR')}\n\n`;

  if (page.subPages.length > 0) {
    markdown += `## Sub-pages (${page.subPages.length})\n\n`;
    page.subPages.forEach(sp => {
      markdown += `- [${sp.title}](${sp.url})\n`;
    });
    markdown += `\n`;
  }

  if (page.sections.length > 0) {
    markdown += `---\n\n## Content\n\n`;
    page.sections.forEach(section => {
      markdown += `### ${section.heading}\n\n`;
      markdown += `${section.content}\n\n`;
    });
  }

  fs.writeFileSync(path.join(pageDir, 'content.md'), markdown);

  console.log(`   💾 Saved: ${page.path.join('/')} (${page.isContentPage ? 'content' : 'listing'})`);
}

/**
 * Recursively crawl a page and all its sub-pages
 */
async function crawlPage(link: PageLink, depth: number = 0): Promise<void> {
  const indent = '  '.repeat(depth);
  console.log(`\n${indent}📄 [${link.path.join('/')}] ${link.title}`);

  // Check if already crawled
  const outputPath = path.join(OUTPUT_DIR, ...link.path, 'content.json');
  if (fs.existsSync(outputPath)) {
    console.log(`${indent}   ⏭️  Already exists, skipping...`);
    stats.skipped++;
    return;
  }

  try {
    // Fetch the page
    if (stats.totalPages > 0) {
      await sleep(DELAY_MIN, DELAY_MAX);
    }

    const html = await fetchWithRetry(link.url);
    stats.totalPages++;

    // Parse the page
    const page = parsePage(html, link.url, link.path, link.title);

    // Save it
    savePage(page);
    stats.newlyCrawled++;

    if (page.isContentPage) {
      console.log(`${indent}   ✅ Content page (${page.sections.length} sections)`);
      stats.contentPages++;
    } else {
      console.log(`${indent}   📋 Listing page (${page.subPages.length} sub-pages)`);
      stats.listingPages++;

      // Recursively crawl sub-pages
      for (const subPage of page.subPages) {
        await crawlPage(subPage, depth + 1);
      }
    }
  } catch (error) {
    console.log(`${indent}   ❌ Failed: ${error}`);
  }
}

/**
 * Main crawler function
 */
async function crawlAll() {
  console.log('🚀 Recursive Multi-Layer Crawler\n');
  console.log('This crawler automatically detects and crawls all layers.\n');

  // Start from the main themes page
  const rootLink: PageLink = {
    title: 'Fiches par thématiques',
    url: THEMES_URL,
    path: [],
  };

  await crawlPage(rootLink, 0);

  // Save summary
  const summaryPath = path.join(OUTPUT_DIR, '_crawl-summary.json');
  const summary = {
    crawledAt: new Date().toISOString(),
    statistics: stats,
  };

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  console.log('\n' + '='.repeat(60));
  console.log('✨ Crawling Complete!\n');
  console.log('📊 Statistics:');
  console.log(`   Total pages: ${stats.totalPages}`);
  console.log(`   Content pages: ${stats.contentPages}`);
  console.log(`   Listing pages: ${stats.listingPages}`);
  console.log(`   Newly crawled: ${stats.newlyCrawled}`);
  console.log(`   Already existed: ${stats.skipped}`);
  console.log(`\n📁 Content saved to: ${OUTPUT_DIR}`);
  console.log(`📋 Summary: ${summaryPath}\n`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    crawlAll().catch(console.error);
}

export { crawlAll };
