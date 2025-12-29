/**
 * HTML Parser for Official Civic Education Questions
 *
 * This script parses locally saved HTML files from:
 * - https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/
 * - https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/
 *
 * Usage:
 * 1. Manually save the HTML pages from your browser (Right-click > Save As > Webpage, Complete)
 * 2. Place them in the scripts/data/ directory
 * 3. Run: npx tsx scripts/parseQuestions.ts
 *
 * The script will:
 * - Parse the HTML structure
 * - Extract questions, options, and correct answers
 * - Map to appropriate themes
 * - Output JSON files ready to import
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import type { Question, Theme, QuestionSource } from '../app/types';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ParsedQuestion {
  officialId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  source: QuestionSource;
  theme?: Theme;
}

/**
 * Map keywords to themes based on content analysis
 */
function inferTheme(question: string, officialId: string): Theme {
  const text = question.toLowerCase();

  // Keywords for each theme
  if (text.includes('devise') || text.includes('laïcité') || text.includes('égalité') ||
      text.includes('liberté') || text.includes('fraternité') || text.includes('droits de l\'homme') ||
      text.includes('principe') || text.includes('valeur')) {
    return 'principes-valeurs';
  }

  if (text.includes('président') || text.includes('ministre') || text.includes('assemblée') ||
      text.includes('sénat') || text.includes('conseil') || text.includes('constitution') ||
      text.includes('élection') || text.includes('mandat') || text.includes('gouvernement')) {
    return 'institutions';
  }

  if (text.includes('drapeau') || text.includes('hymne') || text.includes('marseillaise') ||
      text.includes('marianne') || text.includes('symbole') || text.includes('coq')) {
    return 'symboles';
  }

  if (text.includes('révolution') || text.includes('république') || text.includes('guerre') ||
      text.includes('histoire') || text.includes('siècle') || /\d{4}/.test(text)) {
    return 'histoire';
  }

  if (text.includes('capitale') || text.includes('région') || text.includes('département') ||
      text.includes('océan') || text.includes('montagne') || text.includes('fleuve') ||
      text.includes('géographie')) {
    return 'geographie';
  }

  if (text.includes('artiste') || text.includes('écrivain') || text.includes('peintre') ||
      text.includes('littérature') || text.includes('musée') || text.includes('culture') ||
      text.includes('œuvre')) {
    return 'culture';
  }

  // Default to vie-quotidienne
  return 'vie-quotidienne';
}

/**
 * Parse HTML file - this is a template that needs to be customized
 * based on the actual HTML structure of the saved pages
 */
function parseHTMLFile(filePath: string, source: QuestionSource): ParsedQuestion[] {
  const html = fs.readFileSync(filePath, 'utf-8');
  const questions: ParsedQuestion[] = [];

  console.log(`\n⚠️  IMPORTANT: Manual parsing required for ${path.basename(filePath)}`);
  console.log('Please inspect the HTML structure and implement the parsing logic.');
  console.log('Common patterns to look for:');
  console.log('  - Questions might be in <div class="question"> or <p> tags');
  console.log('  - Options might be in <ol>, <ul>, or <div> with specific classes');
  console.log('  - Correct answers might be marked with a class like "correct" or in a separate section');
  console.log('\nExample structure to implement:');
  console.log('  1. Find all question containers');
  console.log('  2. Extract question text');
  console.log('  3. Extract all options (usually 4 per question)');
  console.log('  4. Identify the correct answer index (0-3)');
  console.log('  5. Assign a unique ID\n');

  // TODO: Implement actual HTML parsing based on structure
  // This is a placeholder that you'll need to customize

  // Example parsing logic (uncomment and customize based on actual HTML):
  /*
  const questionBlocks = html.match(/<div class="question-block">.*?<\/div>/gs) || [];

  questionBlocks.forEach((block, index) => {
    const questionMatch = block.match(/<h3>(.*?)<\/h3>/);
    const optionsMatch = block.match(/<li>(.*?)<\/li>/g);
    const correctAnswerMatch = block.match(/data-correct="(\d+)"/);

    if (questionMatch && optionsMatch && correctAnswerMatch) {
      questions.push({
        officialId: `${source}-${index + 1}`,
        question: questionMatch[1].trim(),
        options: optionsMatch.map(opt => opt.replace(/<\/?li>/g, '').trim()),
        correctAnswer: parseInt(correctAnswerMatch[1]),
        source,
      });
    }
  });
  */

  return questions;
}

/**
 * Parse all HTML files in the data directory
 */
function parseAllFiles() {
  const dataDir = path.join(__dirname, 'data');

  if (!fs.existsSync(dataDir)) {
    console.log('❌ Data directory not found. Creating it...');
    fs.mkdirSync(dataDir, { recursive: true });
    console.log('✅ Created scripts/data/ directory');
    console.log('\n📝 Next steps:');
    console.log('1. Open https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/');
    console.log('2. Right-click > Save As > "Webpage, Complete"');
    console.log('3. Save as "questions-cr.html" in scripts/data/');
    console.log('4. Repeat for CSP questions, save as "questions-csp.html"');
    console.log('5. Run this script again\n');
    return;
  }

  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.html'));

  if (files.length === 0) {
    console.log('❌ No HTML files found in scripts/data/');
    console.log('\n📝 Next steps:');
    console.log('1. Open https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/');
    console.log('2. Right-click > Save As > "Webpage, Complete"');
    console.log('3. Save as "questions-cr.html" in scripts/data/');
    console.log('4. Repeat for CSP questions, save as "questions-csp.html"');
    console.log('5. Run this script again\n');
    return;
  }

  let allQuestions: ParsedQuestion[] = [];

  files.forEach(file => {
    const filePath = path.join(dataDir, file);
    const source: QuestionSource = file.includes('csp') ? 'CSP' :
                                    file.includes('cr') ? 'CR' : 'custom';

    console.log(`\n📄 Processing: ${file}`);
    const questions = parseHTMLFile(filePath, source);
    allQuestions = [...allQuestions, ...questions];
  });

  // Infer themes for all questions
  allQuestions = allQuestions.map(q => ({
    ...q,
    theme: inferTheme(q.question, q.officialId),
  }));

  // Convert to app format
  const appQuestions: Question[] = allQuestions.map(q => ({
    id: q.officialId.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    theme: q.theme!,
    source: q.source,
    officialId: q.officialId,
  }));

  // Save output
  const outputPath = path.join(__dirname, 'output', 'parsed-questions.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(appQuestions, null, 2));

  console.log(`\n✅ Parsed ${appQuestions.length} questions`);
  console.log(`📁 Output saved to: ${outputPath}`);

  // Stats
  const stats = {
    total: appQuestions.length,
    bySou: appQuestions.reduce((acc, q) => {
      acc[q.source!] = (acc[q.source!] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    byTheme: appQuestions.reduce((acc, q) => {
      acc[q.theme] = (acc[q.theme] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  };

  console.log('\n📊 Statistics:');
  console.log(`   Total: ${stats.total} questions`);
  console.log('   By Source:', stats.bySou);
  console.log('   By Theme:', stats.byTheme);

  console.log('\n📝 Next step: Review the parsed questions in scripts/output/parsed-questions.json');
  console.log('   Then run: npm run import-questions\n');
}

// Run if called directly
if (require.main === module) {
  console.log('🔍 Civic Education Question Parser\n');
  parseAllFiles();
}

export { parseHTMLFile, parseAllFiles, inferTheme };
