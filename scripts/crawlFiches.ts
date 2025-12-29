/**
 * Enhanced Crawler for Individual Fiches (Second Layer)
 *
 * This script crawls the individual educational fiches within each theme category.
 *
 * Structure:
 * Layer 1 (already crawled): Theme categories (droits-et-devoirs, histoire-geographie-et-culture, etc.)
 * Layer 2 (this script): Individual fiches within each category
 *
 * Usage:
 *   npm run crawl:fiches
 *
 * The crawled fiches will be saved in scripts/data/themes/{category}/{fiche-slug}/
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
const OUTPUT_DIR = path.join(__dirname, 'data', 'themes');
const DELAY_MIN = 2000; // 2 seconds
const DELAY_MAX = 5000; // 5 seconds

interface FicheLink {
  title: string;
  url: string;
  slug: string;
  category: string;
}

interface FicheContent {
  title: string;
  url: string;
  slug: string;
  category: string;
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
 * Extract fiche links from a category page HTML
 */
function extractFicheLinks(html: string, categorySlug: string): FicheLink[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const links: FicheLink[] = [];

  // Find all links that are sub-pages of this category
  const allLinks = document.querySelectorAll('a[href]');

  allLinks.forEach((element) => {
    const href = element.getAttribute('href');
    const title = element.textContent?.trim() || '';

    if (href && href.startsWith(`/fiches-par-thematiques/${categorySlug}/`)) {
      // Extract the fiche slug (last part of the URL)
      const parts = href.split('/').filter(Boolean);
      const ficheSlug = parts[parts.length - 1];

      // Make sure it's a sub-page (not the category page itself)
      if (ficheSlug !== categorySlug && title) {
        const fullUrl = `${BASE_URL}${href}`;

        // Avoid duplicates
        if (!links.find(l => l.url === fullUrl)) {
          links.push({
            title,
            url: fullUrl,
            slug: ficheSlug,
            category: categorySlug,
          });
        }
      }
    }
  });

  return links;
}

/**
 * Extract content from a fiche page
 */
function extractFicheContent(html: string, ficheLink: FicheLink): FicheContent {
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
    title: ficheLink.title,
    url: ficheLink.url,
    slug: ficheLink.slug,
    category: ficheLink.category,
    html,
    textContent,
    sections,
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Save fiche content to disk
 */
function saveFicheContent(fiche: FicheContent): void {
  const ficheDir = path.join(OUTPUT_DIR, fiche.category, fiche.slug);
  fs.mkdirSync(ficheDir, { recursive: true });

  // Save full HTML
  fs.writeFileSync(
    path.join(ficheDir, 'full.html'),
    fiche.html
  );

  // Save structured JSON
  const jsonContent = {
    title: fiche.title,
    url: fiche.url,
    slug: fiche.slug,
    category: fiche.category,
    textContent: fiche.textContent,
    sections: fiche.sections,
    fetchedAt: fiche.fetchedAt,
  };

  fs.writeFileSync(
    path.join(ficheDir, 'content.json'),
    JSON.stringify(jsonContent, null, 2)
  );

  // Save readable markdown
  let markdown = `# ${fiche.title}\n\n`;
  markdown += `**Category:** ${fiche.category}\n`;
  markdown += `**Source:** ${fiche.url}\n`;
  markdown += `**Fetched:** ${new Date(fiche.fetchedAt).toLocaleString('fr-FR')}\n\n`;
  markdown += `---\n\n`;

  fiche.sections.forEach(section => {
    markdown += `## ${section.heading}\n\n`;
    markdown += `${section.content}\n\n`;
  });

  fs.writeFileSync(
    path.join(ficheDir, 'content.md'),
    markdown
  );

  console.log(`   💾 Saved to: ${ficheDir}`);
}

/**
 * Main crawler function
 */
async function crawlFiches() {
  console.log('🚀 Individual Fiches Crawler (Layer 2)\n');
  console.log('This script crawls individual educational fiches within each theme.\n');

  // Read the category directories
  const categories = fs.readdirSync(OUTPUT_DIR)
    .filter(name => {
      const stat = fs.statSync(path.join(OUTPUT_DIR, name));
      return stat.isDirectory() && !name.startsWith('_');
    });

  console.log(`📋 Found ${categories.length} category directories:\n`);
  categories.forEach(cat => console.log(`   - ${cat}`));

  let totalFiches = 0;
  const allFiches: FicheLink[] = [];

  // Extract fiche links from each category
  console.log(`\n🔍 Extracting fiche links from categories...\n`);

  for (const category of categories) {
    const categoryHtmlPath = path.join(OUTPUT_DIR, category, 'full.html');

    if (!fs.existsSync(categoryHtmlPath)) {
      console.log(`   ⚠️  No HTML found for ${category}, skipping...`);
      continue;
    }

    const html = fs.readFileSync(categoryHtmlPath, 'utf-8');
    const ficheLinks = extractFicheLinks(html, category);

    console.log(`   📚 ${category}: found ${ficheLinks.length} fiches`);
    ficheLinks.forEach(link => {
      console.log(`      - ${link.title}`);
    });

    allFiches.push(...ficheLinks);
    totalFiches += ficheLinks.length;
  }

  console.log(`\n📊 Total fiches to crawl: ${totalFiches}\n`);

  if (totalFiches === 0) {
    console.log('❌ No fiches found to crawl.\n');
    return;
  }

  // Crawl each fiche
  console.log(`📖 Crawling individual fiches...\n`);

  let crawled = 0;
  let skipped = 0;

  for (let i = 0; i < allFiches.length; i++) {
    const fiche = allFiches[i];
    console.log(`\n[${i + 1}/${allFiches.length}] ${fiche.category} > ${fiche.title}`);

    // Check if already crawled
    const outputPath = path.join(OUTPUT_DIR, fiche.category, fiche.slug, 'content.json');
    if (fs.existsSync(outputPath)) {
      console.log(`   ⏭️  Already crawled, skipping...`);
      skipped++;
      continue;
    }

    try {
      // Be respectful: wait before each request (except first)
      if (i > 0) {
        await sleep(DELAY_MIN, DELAY_MAX);
      }

      // Fetch the fiche page
      const html = await fetchWithRetry(fiche.url);

      // Extract content
      const content = extractFicheContent(html, fiche);

      // Save content
      saveFicheContent(content);

      console.log(`   ✅ Completed (${content.sections.length} sections found)`);
      crawled++;
    } catch (error) {
      console.log(`   ❌ Failed: ${error}`);
      console.log(`   You can retry later, progress is saved.`);
    }
  }

  // Update summary
  const summaryPath = path.join(OUTPUT_DIR, '_summary.json');
  let summary: any = {};

  if (fs.existsSync(summaryPath)) {
    summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
  }

  summary.lastFicheCrawl = new Date().toISOString();
  summary.totalFiches = totalFiches;
  summary.fichesCrawled = crawled;
  summary.fichesSkipped = skipped;

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  console.log('\n✨ Fiche crawling complete!\n');
  console.log(`📊 Statistics:`);
  console.log(`   New fiches crawled: ${crawled}`);
  console.log(`   Already existed: ${skipped}`);
  console.log(`   Total fiches: ${totalFiches}`);
  console.log(`\n📁 Content saved to: ${OUTPUT_DIR}\n`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  crawlFiches().catch(console.error);
}

export { crawlFiches, extractFicheLinks, extractFicheContent };
