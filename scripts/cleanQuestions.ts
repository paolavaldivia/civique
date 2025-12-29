/**
 * Clean Questions Extractor
 *
 * This script extracts clean question data from the official question list HTML.
 * Note: The official lists don't include answers, so this creates templates.
 *
 * Input: scripts/data/*.html (CR and CSP question lists)
 * Output: scripts/data/clean/questions/ (clean JSON and text templates)
 *
 * What it does:
 * - Extracts all questions and their 4 options
 * - Creates clean JSON format
 * - Creates text templates for manual answer completion
 * - Creates an index of all questions
 *
 * Usage:
 *   npm run clean:questions
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { JSDOM } from 'jsdom';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = path.join(__dirname, 'data');
const OUTPUT_DIR = path.join(__dirname, 'data', 'clean', 'questions');

type QuestionSource = 'CR' | 'CSP';

interface CleanQuestion {
  id: string;
  number: number;
  source: QuestionSource;
  question: string;
  options: string[];
  correctAnswer?: string; // To be filled manually (A, B, C, or D)
}

interface QuestionIndex {
  totalQuestions: number;
  bySource: Record<QuestionSource, number>;
  questions: Array<{
    id: string;
    source: QuestionSource;
    question: string;
    hasAnswer: boolean;
  }>;
  createdAt: string;
}

/**
 * Clean and normalize text
 */
function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\u00A0/g, ' ') // Replace non-breaking spaces
    .trim();
}

/**
 * Extract questions from HTML
 * This tries multiple patterns to find questions
 */
function extractQuestions(html: string, source: QuestionSource): CleanQuestion[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const questions: CleanQuestion[] = [];

  console.log(`\n🔍 Analyzing HTML structure for ${source} questions...`);

  // Remove navigation, headers, footers
  ['nav', 'header', 'footer', 'script', 'style'].forEach(tag => {
    document.querySelectorAll(tag).forEach(el => el.remove());
  });

  // Strategy 1: Look for numbered questions in paragraphs or divs
  const allElements = Array.from(document.querySelectorAll('p, div, li, h3, h4'));
  let currentQuestion: Partial<CleanQuestion> | null = null;
  let questionNumber = 0;

  allElements.forEach((element) => {
    const text = cleanText(element.textContent || '');

    // Skip empty or very short text
    if (text.length < 5) return;

    // Check if this looks like a question number/start
    const questionMatch = text.match(/^(\d+)[.\s:-]\s*(.+\?)\s*$/);
    if (questionMatch) {
      // Save previous question if it has 4 options
      if (currentQuestion && currentQuestion.options?.length === 4) {
        questions.push(currentQuestion as CleanQuestion);
      }

      // Start new question
      questionNumber++;
      currentQuestion = {
        id: `${source.toLowerCase()}-${questionNumber}`,
        number: questionNumber,
        source,
        question: cleanText(questionMatch[2]),
        options: [],
      };
      return;
    }

    // Check if this looks like an option (A), B), C), D) or a), b), c), d)
    const optionMatch = text.match(/^([A-Da-d])[).]\s*(.+)$/);
    if (optionMatch && currentQuestion) {
      const optionText = cleanText(optionMatch[2]);
      if (optionText.length > 2) {
        currentQuestion.options = currentQuestion.options || [];
        if (currentQuestion.options.length < 4) {
          currentQuestion.options.push(optionText);
        }
      }
      return;
    }

    // If we have a question but no options yet, this might be the question text
    if (currentQuestion && !currentQuestion.options?.length && text.endsWith('?')) {
      currentQuestion.question = text;
    }
  });

  // Save last question
  if (currentQuestion && currentQuestion.options?.length === 4) {
    questions.push(currentQuestion as CleanQuestion);
  }

  console.log(`   Found ${questions.length} questions`);

  // If we didn't find many questions, show diagnostic info
  if (questions.length === 0) {
    console.log('\n⚠️  No questions found with standard patterns.');
    console.log('   The HTML structure may be different than expected.');
    console.log('   First 500 chars of cleaned text:');
    console.log('   ' + document.body.textContent?.slice(0, 500).replace(/\n/g, ' '));
  }

  return questions;
}

/**
 * Save questions as JSON and text template
 */
function saveQuestions(questions: CleanQuestion[], source: QuestionSource): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Save as JSON
  const jsonPath = path.join(OUTPUT_DIR, `${source.toLowerCase()}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2));
  console.log(`\n   💾 Saved JSON: ${jsonPath}`);

  // Save as text template for manual completion
  const txtPath = path.join(OUTPUT_DIR, `${source.toLowerCase()}-template.txt`);
  let txtContent = `# Questions ${source}\n\n`;
  txtContent += `Total: ${questions.length} questions\n\n`;
  txtContent += `Instructions:\n`;
  txtContent += `Fill in the correct answer (A, B, C, or D) for each question.\n`;
  txtContent += `Then use the import script to load them into the app.\n\n`;
  txtContent += `${'='.repeat(80)}\n\n`;

  questions.forEach((q) => {
    txtContent += `Q${q.number}: ${q.question}\n`;
    txtContent += `A) ${q.options[0]}\n`;
    txtContent += `B) ${q.options[1]}\n`;
    txtContent += `C) ${q.options[2]}\n`;
    txtContent += `D) ${q.options[3]}\n`;
    txtContent += `CORRECT: ___\n\n`;
  });

  fs.writeFileSync(txtPath, txtContent);
  console.log(`   📝 Saved template: ${txtPath}`);
}

/**
 * Main cleaning function
 */
async function cleanQuestions() {
  console.log('🧹 Clean Questions Extractor\n');
  console.log('Processing official question lists...\n');

  const index: QuestionIndex = {
    totalQuestions: 0,
    bySource: { CR: 0, CSP: 0 },
    questions: [],
    createdAt: new Date().toISOString(),
  };

  // Look for question HTML files
  const files = fs.readdirSync(INPUT_DIR)
    .filter(f => f.endsWith('.html') && !f.startsWith('_'));

  console.log(`📁 Found ${files.length} HTML files:\n`);
  files.forEach(f => console.log(`   - ${f}`));

  for (const file of files) {
    const source: QuestionSource = file.toLowerCase().includes('csp') ? 'CSP' :
                                    file.toLowerCase().includes('cr') ? 'CR' :
                                    null as any;

    if (!source) {
      console.log(`\n⏭️  Skipping ${file} (not a question file)`);
      continue;
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Processing: ${file} (${source})`);
    console.log('='.repeat(60));

    const htmlPath = path.join(INPUT_DIR, file);
    const html = fs.readFileSync(htmlPath, 'utf-8');

    const questions = extractQuestions(html, source);

    if (questions.length > 0) {
      saveQuestions(questions, source);

      index.totalQuestions += questions.length;
      index.bySource[source] = questions.length;

      questions.forEach(q => {
        index.questions.push({
          id: q.id,
          source: q.source,
          question: q.question,
          hasAnswer: !!q.correctAnswer,
        });
      });
    }
  }

  // Save index
  const indexPath = path.join(OUTPUT_DIR, '_index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

  // Create readable summary
  let summaryMd = `# Questions Index\n\n`;
  summaryMd += `**Created:** ${new Date(index.createdAt).toLocaleString('fr-FR')}\n\n`;
  summaryMd += `## Statistics\n\n`;
  summaryMd += `- Total questions: ${index.totalQuestions}\n`;
  summaryMd += `- CR questions: ${index.bySource.CR}\n`;
  summaryMd += `- CSP questions: ${index.bySource.CSP}\n\n`;
  summaryMd += `## Next Steps\n\n`;
  summaryMd += `1. Review the generated template files\n`;
  summaryMd += `2. Fill in the correct answers (A, B, C, or D)\n`;
  summaryMd += `3. Use the clean educational content to find answers\n`;
  summaryMd += `4. Import completed questions into the app\n\n`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '_README.md'), summaryMd);

  console.log('\n' + '='.repeat(60));
  console.log('✨ Questions Extraction Complete!\n');
  console.log('📊 Statistics:');
  console.log(`   Total questions: ${index.totalQuestions}`);
  console.log(`   CR: ${index.bySource.CR}`);
  console.log(`   CSP: ${index.bySource.CSP}`);
  console.log(`\n📁 Clean data saved to: ${OUTPUT_DIR}`);
  console.log(`📋 Index: ${indexPath}\n`);
  console.log('📝 Next: Fill in answers in the *-template.txt files\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  cleanQuestions().catch(console.error);
}

export { cleanQuestions };
