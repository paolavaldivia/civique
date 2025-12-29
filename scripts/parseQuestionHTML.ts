/**
 * Parse Official Question List HTML
 *
 * This script parses the HTML files you've saved from:
 * - https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/
 * - https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/
 *
 * Since the questions don't include answers in the HTML, this script:
 * 1. Extracts all questions and their options
 * 2. Saves them in a format that can be manually completed
 * 3. Provides a template for adding correct answers
 *
 * Usage:
 *   1. Save the HTML files to scripts/data/
 *   2. Run: npm run parse:questions-html
 *   3. Review and complete the output files
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { JSDOM } from 'jsdom';
import type { QuestionSource } from '../app/types';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ParsedQuestion {
  number: number;
  source: QuestionSource;
  question: string;
  options: string[];
  correctAnswer?: number; // To be filled in manually
  needsAnswer: boolean;
}

/**
 * Parse questions from HTML
 * This function needs to be customized based on the actual HTML structure
 */
function parseQuestionsFromHTML(html: string, source: QuestionSource): ParsedQuestion[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const questions: ParsedQuestion[] = [];

  console.log(`\n🔍 Analyzing HTML structure for ${source} questions...\n`);

  // Try multiple possible selectors
  const possibleSelectors = [
    '.question',
    '.question-block',
    '.question-item',
    'article.question',
    'div[class*="question"]',
    'section[class*="question"]',
  ];

  let questionElements: Element[] = [];

  for (const selector of possibleSelectors) {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length > 0) {
      console.log(`   ✅ Found ${elements.length} elements with selector: ${selector}`);
      questionElements = elements;
      break;
    }
  }

  if (questionElements.length === 0) {
    console.log('   ⚠️  Could not find questions with standard selectors.');
    console.log('   📋 HTML Structure Analysis:\n');

    // Analyze the structure
    const allDivs = Array.from(document.querySelectorAll('div'));
    const classNames = new Set<string>();
    allDivs.forEach(div => {
      const classes = div.className.split(' ').filter(c => c.trim());
      classes.forEach(c => classNames.add(c));
    });

    console.log('   Common class names found:');
    Array.from(classNames).slice(0, 20).forEach(className => {
      console.log(`      - ${className}`);
    });

    console.log('\n   Please inspect scripts/data/_structure.html');
    console.log('   and update the parseQuestionsFromHTML function.\n');

    // Save a sample of the HTML for inspection
    const sample = document.body?.innerHTML?.slice(0, 5000) || '';
    fs.writeFileSync(
      path.join(__dirname, 'data', '_structure.html'),
      sample
    );

    return questions;
  }

  // Parse each question
  questionElements.forEach((element, index) => {
    try {
      // Try to extract question text
      const questionText =
        element.querySelector('h3, h4, .question-text, [class*="question-text"]')?.textContent?.trim() ||
        element.querySelector('p')?.textContent?.trim() ||
        element.textContent?.trim() ||
        '';

      // Try to extract options
      const optionElements = Array.from(
        element.querySelectorAll('li, .option, [class*="option"], p')
      );

      const options = optionElements
        .map(el => el.textContent?.trim() || '')
        .filter(text => text.length > 0 && text.length < 200) // Filter out too long or empty
        .slice(0, 4); // Assume 4 options per question

      if (questionText && options.length === 4) {
        questions.push({
          number: index + 1,
          source,
          question: questionText,
          options,
          needsAnswer: true,
        });
      }
    } catch (error) {
      console.log(`   ⚠️  Error parsing question ${index + 1}: ${error}`);
    }
  });

  return questions;
}

/**
 * Save questions in a format ready for manual completion
 */
function saveQuestionsForCompletion(questions: ParsedQuestion[], source: QuestionSource) {
  const outputDir = path.join(__dirname, 'output');
  fs.mkdirSync(outputDir, { recursive: true });

  // Save as JSON for programmatic use
  const jsonPath = path.join(outputDir, `questions-${source.toLowerCase()}-incomplete.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2));

  // Save as easy-to-edit text format
  const txtPath = path.join(outputDir, `questions-${source.toLowerCase()}-to-complete.txt`);
  let txtContent = `# Questions ${source} - À compléter\n\n`;
  txtContent += `Total: ${questions.length} questions\n`;
  txtContent += `Format: Ajoutez "CORRECT: A/B/C/D" après chaque question\n\n`;
  txtContent += `${'='.repeat(80)}\n\n`;

  questions.forEach((q, index) => {
    txtContent += `Q${index + 1}: [${q.source}] ${q.question}\n`;
    txtContent += `A) ${q.options[0]}\n`;
    txtContent += `B) ${q.options[1]}\n`;
    txtContent += `C) ${q.options[2]}\n`;
    txtContent += `D) ${q.options[3]}\n`;
    txtContent += `CORRECT: ___  (← Remplissez A, B, C, ou D)\n`;
    txtContent += `\n`;
  });

  fs.writeFileSync(txtPath, txtContent);

  console.log(`\n   💾 Saved JSON: ${jsonPath}`);
  console.log(`   📝 Saved text: ${txtPath}`);
}

/**
 * Main function
 */
async function parseQuestionHTML() {
  console.log('📋 Official Question List Parser\n');

  const dataDir = path.join(__dirname, 'data');

  // Look for HTML files
  const files = fs.existsSync(dataDir)
    ? fs.readdirSync(dataDir).filter(f => f.endsWith('.html'))
    : [];

  if (files.length === 0) {
    console.log('❌ No HTML files found in scripts/data/\n');
    console.log('Please save the question list HTML files to scripts/data/');
    console.log('Expected files:');
    console.log('  - questions-cr.html');
    console.log('  - questions-csp.html\n');
    return;
  }

  console.log(`Found ${files.length} HTML file(s):\n`);
  files.forEach(f => console.log(`  - ${f}`));

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const source: QuestionSource = file.toLowerCase().includes('csp') ? 'CSP' :
                                    file.toLowerCase().includes('cr') ? 'CR' : 'custom';

    console.log(`\n${'='.repeat(80)}`);
    console.log(`Processing: ${file} (Source: ${source})`);
    console.log('='.repeat(80));

    const html = fs.readFileSync(filePath, 'utf-8');
    const questions = parseQuestionsFromHTML(html, source);

    if (questions.length > 0) {
      console.log(`\n✅ Extracted ${questions.length} questions from ${file}`);
      saveQuestionsForCompletion(questions, source);
    } else {
      console.log(`\n⚠️  No questions extracted from ${file}`);
      console.log('The HTML structure may need custom parsing.');
    }
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log('✨ Processing complete!\n');
  console.log('Next steps:');
  console.log('1. Check scripts/output/ for the extracted questions');
  console.log('2. Complete the CORRECT answers in the .txt files');
  console.log('3. Use scripts/manualImport.ts to import them\n');
}

if (require.main === module) {
  parseQuestionHTML().catch(console.error);
}

export { parseQuestionsFromHTML, parseQuestionHTML };
