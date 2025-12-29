/**
 * Respectful Web Crawler for Formation Civique Content
 *
 * This script crawls the thematic educational content from
 * https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/
 *
 * IMPORTANT: This script is designed to be RESPECTFUL:
 * - Uses delays between requests (2-5 seconds)
 * - Includes proper User-Agent header
 * - Saves content locally to avoid repeated requests
 * - Can resume from where it left off
 * - Shows progress to user
 *
 * Usage:
 *   npm run crawl:themes
 *
 * The crawled content will be saved in scripts/data/themes/
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

interface ThemeLink {
  title: string;
  url: string;
  slug: string;
}

interface ThemeContent {
  title: string;
  url: string;
  slug: string;
  html: string;
  textContent: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
  fetchedAt: string;
}

/**
 * Sleep for a random duration between min and max
 */
function sleep(min: number, max: number): Promise<void> {
  const duration = Math.floor(Math.random() * (max - min) + min);
  console.log(`   ⏱️  Waiting ${(duration / 1000).toFixed(1)}s to be respectful...`);
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
      console.log(`   ✅ Successfully fetched (${html.length} bytes)`);
      return html;
    } catch (error) {
      console.log(`   ⚠️  Attempt ${i + 1}/${retries} failed: ${error}`);
      if (i < retries - 1) {
        await sleep(5000, 10000); // Longer wait on retry
      } else {
        throw error;
      }
    }
  }
  throw new Error('All retries failed');
}

/**
 * Extract theme links from the main themes page
 */
function extractThemeLinks(html: string): ThemeLink[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const links: ThemeLink[] = [];

  // Find all links to theme pages
  // Adjust selectors based on actual HTML structure
  const themeElements = document.querySelectorAll('a[href*="/fiches-par-thematiques/"]');

  themeElements.forEach((element) => {
    const href = element.getAttribute('href');
    const title = element.textContent?.trim() || '';

    if (href && title && href !== '/fiches-par-thematiques/') {
      const fullUrl = href.startsWith('http') ? href : `${BASE_URL}${href}`;
      const slug = href.split('/').filter(Boolean).pop() || '';

      // Avoid duplicates
      if (!links.find(l => l.url === fullUrl)) {
        links.push({ title, url: fullUrl, slug });
      }
    }
  });

  return links;
}

/**
 * Extract content from a theme page
 */
function extractThemeContent(html: string, themeLink: ThemeLink): ThemeContent {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Extract text content
  const mainContent = document.querySelector('main, article, .content, #content');
  const textContent = mainContent?.textContent?.trim() || '';

  // Extract sections with headings
  const sections: Array<{ heading: string; content: string }> = [];
  const headings = document.querySelectorAll('h1, h2, h3, h4');

  headings.forEach((heading) => {
    const headingText = heading.textContent?.trim() || '';
    let content = '';

    // Get content until next heading
    let nextElement = heading.nextElementSibling;
    while (nextElement && !['H1', 'H2', 'H3', 'H4'].includes(nextElement.tagName)) {
      content += nextElement.textContent?.trim() + '\n';
      nextElement = nextElement.nextElementSibling;
    }

    if (headingText && content.trim()) {
      sections.push({
        heading: headingText,
        content: content.trim(),
      });
    }
  });

  return {
    title: themeLink.title,
    url: themeLink.url,
    slug: themeLink.slug,
    html,
    textContent,
    sections,
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Save theme content to disk
 */
function saveThemeContent(theme: ThemeContent): void {
  const themeDir = path.join(OUTPUT_DIR, theme.slug);
  fs.mkdirSync(themeDir, { recursive: true });

  // Save full HTML
  fs.writeFileSync(
    path.join(themeDir, 'full.html'),
    theme.html
  );

  // Save structured JSON
  const jsonContent = {
    title: theme.title,
    url: theme.url,
    slug: theme.slug,
    textContent: theme.textContent,
    sections: theme.sections,
    fetchedAt: theme.fetchedAt,
  };

  fs.writeFileSync(
    path.join(themeDir, 'content.json'),
    JSON.stringify(jsonContent, null, 2)
  );

  // Save readable markdown
  let markdown = `# ${theme.title}\n\n`;
  markdown += `**Source:** ${theme.url}\n`;
  markdown += `**Fetched:** ${new Date(theme.fetchedAt).toLocaleString('fr-FR')}\n\n`;
  markdown += `---\n\n`;

  theme.sections.forEach(section => {
    markdown += `## ${section.heading}\n\n`;
    markdown += `${section.content}\n\n`;
  });

  fs.writeFileSync(
    path.join(themeDir, 'content.md'),
    markdown
  );

  console.log(`   💾 Saved to: ${themeDir}`);
}

/**
 * Main crawler function
 */
async function crawlThemes() {
  console.log('🚀 Formation Civique Theme Crawler\n');
  console.log('This script will crawl educational content respectfully.');
  console.log('It uses 2-5 second delays between requests.\n');

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  try {
    // Step 1: Fetch the main themes page
    console.log('📋 Step 1: Fetching main themes page...\n');
    const mainPageHtml = await fetchWithRetry(THEMES_URL);

    // Save the main page for reference
    fs.writeFileSync(
      path.join(OUTPUT_DIR, '_main-page.html'),
      mainPageHtml
    );

    // Step 2: Extract theme links
    console.log('\n🔍 Step 2: Extracting theme links...\n');
    const themeLinks = extractThemeLinks(mainPageHtml);

    console.log(`   Found ${themeLinks.length} theme links:\n`);
    themeLinks.forEach((link, i) => {
      console.log(`   ${i + 1}. ${link.title}`);
    });

    if (themeLinks.length === 0) {
      console.log('\n⚠️  No theme links found. The HTML structure may have changed.');
      console.log('   Please check scripts/data/themes/_main-page.html');
      console.log('   and update the extractThemeLinks() function.\n');
      return;
    }

    // Step 3: Crawl each theme page
    console.log(`\n📚 Step 3: Crawling ${themeLinks.length} theme pages...\n`);

    for (let i = 0; i < themeLinks.length; i++) {
      const link = themeLinks[i];
      console.log(`\n[${i + 1}/${themeLinks.length}] Processing: ${link.title}`);

      // Check if already crawled
      const outputPath = path.join(OUTPUT_DIR, link.slug, 'content.json');
      if (fs.existsSync(outputPath)) {
        console.log(`   ⏭️  Already crawled, skipping...`);
        continue;
      }

      try {
        // Be respectful: wait before each request (except first)
        if (i > 0) {
          await sleep(DELAY_MIN, DELAY_MAX);
        }

        // Fetch the theme page
        const html = await fetchWithRetry(link.url);

        // Extract content
        const content = extractThemeContent(html, link);

        // Save content
        saveThemeContent(content);

        console.log(`   ✅ Completed (${content.sections.length} sections found)`);
      } catch (error) {
        console.log(`   ❌ Failed: ${error}`);
        console.log(`   You can retry later, progress is saved.`);
      }
    }

    // Step 4: Generate summary
    console.log('\n📊 Step 4: Generating summary...\n');

    const summary = {
      crawledAt: new Date().toISOString(),
      totalThemes: themeLinks.length,
      themes: themeLinks.map(link => ({
        title: link.title,
        slug: link.slug,
        url: link.url,
      })),
    };

    fs.writeFileSync(
      path.join(OUTPUT_DIR, '_summary.json'),
      JSON.stringify(summary, null, 2)
    );

    console.log('✨ Crawling complete!\n');
    console.log(`📁 Content saved to: ${OUTPUT_DIR}`);
    console.log(`📋 Summary saved to: ${path.join(OUTPUT_DIR, '_summary.json')}\n`);

    console.log('Next steps:');
    console.log('1. Review the content in scripts/data/themes/');
    console.log('2. Use this content to create questions and answers');
    console.log('3. Run npm run parse:themes to extract questions\n');

  } catch (error) {
    console.error('\n❌ Error:', error);
    console.error('\nIf you see a 403 error, try:');
    console.error('1. Manually downloading the pages in your browser');
    console.error('2. Saving them to scripts/data/themes/');
    console.error('3. Running the parser on local files instead\n');
  }
}

// Run if called directly
if (require.main === module) {
  crawlThemes().catch(console.error);
}

export { crawlThemes, extractThemeLinks, extractThemeContent };
