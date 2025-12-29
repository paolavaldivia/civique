/**
 * Clean Data Extractor for Crawled Content
 *
 * This script processes all crawled HTML files and extracts clean, structured data.
 *
 * Input: scripts/data/themes/ (raw HTML from crawler)
 * Output: scripts/data/clean/ (structured JSON and Markdown)
 *
 * What it does:
 * - Reads all crawled HTML files recursively
 * - Extracts clean text content, sections, and structure
 * - Removes navigation, menus, and other noise
 * - Outputs clean JSON for programmatic use
 * - Outputs readable Markdown for human review
 * - Creates an index of all content
 *
 * Usage:
 *   npm run clean:content
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { JSDOM } from 'jsdom';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = path.join(__dirname, 'data', 'themes');
const OUTPUT_DIR = path.join(__dirname, 'data', 'clean');

interface CleanSection {
  heading: string;
  level: number; // 1-4 for h1-h4
  content: string;
  subsections?: CleanSection[];
}

interface CleanContent {
  title: string;
  url: string;
  path: string[];
  breadcrumb: string;
  sections: CleanSection[];
  allText: string; // All text combined for search
  wordCount: number;
  createdAt: string;
}

interface ContentIndex {
  totalPages: number;
  contentPages: number;
  totalWordCount: number;
  pages: Array<{
    title: string;
    path: string;
    breadcrumb: string;
    wordCount: number;
    sections: number;
  }>;
  createdAt: string;
}

/**
 * Clean HTML and extract meaningful text content
 */
function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/\n\s*\n/g, '\n\n') // Normalize line breaks
    .trim();
}

/**
 * Extract sections from HTML with proper hierarchy
 */
function extractCleanSections(html: string): CleanSection[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Remove script, style, nav, header, footer elements
  ['script', 'style', 'nav', 'header', 'footer', '.fr-header', '.fr-footer', '.fr-breadcrumb'].forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });

  const sections: CleanSection[] = [];
  const main = document.querySelector('main, article, .content, #content') || document.body;

  if (!main) return sections;

  const headings = main.querySelectorAll('h1, h2, h3, h4');

  headings.forEach((heading) => {
    const level = parseInt(heading.tagName[1]);
    const headingText = cleanText(heading.textContent || '');

    if (!headingText || headingText.length < 3) return;

    let content = '';
    let nextElement = heading.nextElementSibling;

    // Collect content until next heading of same or higher level
    while (nextElement) {
      const isHeading = ['H1', 'H2', 'H3', 'H4'].includes(nextElement.tagName);

      if (isHeading) {
        const nextLevel = parseInt(nextElement.tagName[1]);
        if (nextLevel <= level) break;
      }

      const text = nextElement.textContent || '';
      if (text.trim() && !isHeading) {
        content += cleanText(text) + '\n\n';
      }

      nextElement = nextElement.nextElementSibling;
    }

    if (content.trim()) {
      sections.push({
        heading: headingText,
        level,
        content: content.trim(),
      });
    }
  });

  return sections;
}

/**
 * Extract clean content from a page
 */
function extractCleanContent(htmlPath: string, contentJsonPath: string): CleanContent | null {
  try {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const contentJson = JSON.parse(fs.readFileSync(contentJsonPath, 'utf-8'));

    const sections = extractCleanSections(html);
    const allText = sections.map(s => `${s.heading}\n${s.content}`).join('\n\n');
    const wordCount = allText.split(/\s+/).length;

    // Create breadcrumb from path
    const breadcrumb = contentJson.path?.join(' > ') || contentJson.title;

    return {
      title: contentJson.title,
      url: contentJson.url,
      path: contentJson.path || [],
      breadcrumb,
      sections,
      allText,
      wordCount,
      createdAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error processing ${htmlPath}:`, error);
    return null;
  }
}

/**
 * Save clean content as JSON and Markdown
 */
function saveCleanContent(content: CleanContent, outputPath: string): void {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // Save JSON
  fs.writeFileSync(
    outputPath.replace('.md', '.json'),
    JSON.stringify(content, null, 2)
  );

  // Save Markdown
  let markdown = `# ${content.title}\n\n`;
  markdown += `**Path:** ${content.breadcrumb}\n`;
  markdown += `**Source:** ${content.url}\n`;
  markdown += `**Words:** ${content.wordCount}\n\n`;
  markdown += `---\n\n`;

  content.sections.forEach(section => {
    markdown += `${'#'.repeat(section.level + 1)} ${section.heading}\n\n`;
    markdown += `${section.content}\n\n`;
  });

  fs.writeFileSync(outputPath, markdown);
}

/**
 * Recursively find all content.json files
 */
function findAllContentFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir);

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findAllContentFiles(fullPath, files);
    } else if (entry === 'content.json') {
      files.push(fullPath);
    }
  });

  return files;
}

/**
 * Main cleaning function
 */
async function cleanContent() {
  console.log('🧹 Clean Data Extractor\n');
  console.log('Processing all crawled content...\n');

  // Find all content files
  const contentFiles = findAllContentFiles(INPUT_DIR);
  console.log(`📁 Found ${contentFiles.length} pages to process\n`);

  const index: ContentIndex = {
    totalPages: 0,
    contentPages: 0,
    totalWordCount: 0,
    pages: [],
    createdAt: new Date().toISOString(),
  };

  // Process each file
  for (const contentJsonPath of contentFiles) {
    const dir = path.dirname(contentJsonPath);
    const htmlPath = path.join(dir, 'full.html');

    if (!fs.existsSync(htmlPath)) {
      console.log(`⚠️  No HTML found for ${contentJsonPath}, skipping...`);
      continue;
    }

    const contentJson = JSON.parse(fs.readFileSync(contentJsonPath, 'utf-8'));

    // Skip listing pages, only process content pages
    if (!contentJson.isContentPage && contentJson.isContentPage !== undefined) {
      console.log(`⏭️  Skipping listing page: ${contentJson.title}`);
      index.totalPages++;
      continue;
    }

    console.log(`📄 Processing: ${contentJson.title}`);

    const cleanData = extractCleanContent(htmlPath, contentJsonPath);

    if (cleanData && cleanData.sections.length > 0) {
      // Determine output path
      const relativePath = path.relative(INPUT_DIR, dir);
      const outputPath = path.join(OUTPUT_DIR, relativePath, 'content.md');

      saveCleanContent(cleanData, outputPath);

      index.pages.push({
        title: cleanData.title,
        path: relativePath,
        breadcrumb: cleanData.breadcrumb,
        wordCount: cleanData.wordCount,
        sections: cleanData.sections.length,
      });

      index.contentPages++;
      index.totalWordCount += cleanData.wordCount;

      console.log(`   ✅ ${cleanData.sections.length} sections, ${cleanData.wordCount} words`);
    }

    index.totalPages++;
  }

  // Save index
  const indexPath = path.join(OUTPUT_DIR, '_index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

  // Create readable index markdown
  let indexMd = `# Content Index\n\n`;
  indexMd += `**Created:** ${new Date(index.createdAt).toLocaleString('fr-FR')}\n\n`;
  indexMd += `## Statistics\n\n`;
  indexMd += `- Total pages crawled: ${index.totalPages}\n`;
  indexMd += `- Content pages: ${index.contentPages}\n`;
  indexMd += `- Total words: ${index.totalWordCount.toLocaleString()}\n\n`;
  indexMd += `## Pages\n\n`;

  index.pages
    .sort((a, b) => a.breadcrumb.localeCompare(b.breadcrumb))
    .forEach(page => {
      indexMd += `### ${page.title}\n\n`;
      indexMd += `- **Path:** ${page.breadcrumb}\n`;
      indexMd += `- **Sections:** ${page.sections}\n`;
      indexMd += `- **Words:** ${page.wordCount}\n\n`;
    });

  fs.writeFileSync(path.join(OUTPUT_DIR, '_index.md'), indexMd);

  console.log('\n' + '='.repeat(60));
  console.log('✨ Content Cleaning Complete!\n');
  console.log('📊 Statistics:');
  console.log(`   Total pages: ${index.totalPages}`);
  console.log(`   Content pages: ${index.contentPages}`);
  console.log(`   Total words: ${index.totalWordCount.toLocaleString()}`);
  console.log(`\n📁 Clean data saved to: ${OUTPUT_DIR}`);
  console.log(`📋 Index: ${indexPath}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  cleanContent().catch(console.error);
}

export { cleanContent };
