/**
 * Manual Question Import Tool
 *
 * This is a simpler alternative if you want to manually copy-paste questions.
 *
 * Format your questions in a text file like this:
 *
 * Q1: [CR] Question text here?
 * A) First option
 * B) Second option
 * C) Third option
 * D) Fourth option
 * CORRECT: B
 *
 * Q2: [CSP] Another question?
 * A) Option 1
 * B) Option 2
 * C) Option 3
 * D) Option 4
 * CORRECT: A
 *
 * Save as scripts/data/manual-questions.txt and run this script
 */

import * as fs from 'fs';
import * as path from 'path';
import type { Question, QuestionSource } from '../app/types';
import { inferTheme } from './parseQuestions';

interface ManualQuestion {
  number: number;
  source: QuestionSource;
  question: string;
  options: string[];
  correctAnswer: number;
}

function parseManualFormat(content: string): ManualQuestion[] {
  const questions: ManualQuestion[] = [];
  const blocks = content.split(/Q\d+:/).filter(b => b.trim());

  blocks.forEach((block, index) => {
    const lines = block.trim().split('\n').filter(l => l.trim());
    if (lines.length < 6) return; // Need at least question + 4 options + correct answer

    // Extract source from [CR] or [CSP] tag
    const firstLine = lines[0];
    const sourceMatch = firstLine.match(/\[(CR|CSP)\]/i);
    const source: QuestionSource = sourceMatch ? (sourceMatch[1].toUpperCase() as QuestionSource) : 'custom';

    // Extract question (remove source tag)
    const question = firstLine.replace(/\[(CR|CSP)\]/i, '').trim();

    // Extract options (A), B), C), D))
    const options: string[] = [];
    const optionLines = lines.filter(l => /^[A-D]\)/.test(l.trim()));

    optionLines.forEach(line => {
      options.push(line.replace(/^[A-D]\)\s*/, '').trim());
    });

    // Extract correct answer
    const correctLine = lines.find(l => l.toUpperCase().includes('CORRECT'));
    if (!correctLine || options.length !== 4) return;

    const correctMatch = correctLine.match(/[A-D]/i);
    if (!correctMatch) return;

    const correctLetter = correctMatch[0].toUpperCase();
    const correctAnswer = correctLetter.charCodeAt(0) - 'A'.charCodeAt(0);

    questions.push({
      number: index + 1,
      source,
      question,
      options,
      correctAnswer,
    });
  });

  return questions;
}

function importManualQuestions() {
  const inputPath = path.join(__dirname, 'data', 'manual-questions.txt');

  if (!fs.existsSync(inputPath)) {
    console.log('❌ File not found: scripts/data/manual-questions.txt');
    console.log('\n📝 Create the file with this format:\n');
    console.log('Q1: [CR] Question text here?');
    console.log('A) First option');
    console.log('B) Second option');
    console.log('C) Third option');
    console.log('D) Fourth option');
    console.log('CORRECT: B');
    console.log('\nQ2: [CSP] Another question?');
    console.log('A) Option 1');
    console.log('B) Option 2');
    console.log('C) Option 3');
    console.log('D) Option 4');
    console.log('CORRECT: A\n');
    return;
  }

  const content = fs.readFileSync(inputPath, 'utf-8');
  const manualQuestions = parseManualFormat(content);

  if (manualQuestions.length === 0) {
    console.log('❌ No questions found. Check the format.');
    return;
  }

  // Convert to app format
  const appQuestions: Question[] = manualQuestions.map(q => {
    const theme = inferTheme(q.question, `${q.source}-${q.number}`);
    return {
      id: `${q.source.toLowerCase()}-${q.number}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      theme,
      source: q.source,
      officialId: `${q.source}-${q.number}`,
    };
  });

  // Save output
  const outputPath = path.join(__dirname, 'output', 'manual-questions.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(appQuestions, null, 2));

  console.log(`✅ Imported ${appQuestions.length} questions`);
  console.log(`📁 Output saved to: ${outputPath}`);

  // Stats
  const stats = {
    CR: appQuestions.filter(q => q.source === 'CR').length,
    CSP: appQuestions.filter(q => q.source === 'CSP').length,
    custom: appQuestions.filter(q => q.source === 'custom').length,
  };

  console.log('\n📊 By source:');
  console.log(`   CR: ${stats.CR}`);
  console.log(`   CSP: ${stats.CSP}`);
  console.log(`   Custom: ${stats.custom}`);

  console.log('\n📝 Next step: Review and run npm run merge-questions\n');
}

if (require.main === module) {
  console.log('📥 Manual Question Import Tool\n');
  importManualQuestions();
}

export { parseManualFormat, importManualQuestions };
