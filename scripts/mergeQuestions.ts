/**
 * Merge Questions Script
 *
 * Merges parsed questions from JSON files into the main questions.ts file
 * - Removes duplicates based on question text
 * - Preserves existing questions
 * - Updates the source field for existing questions
 */

import * as fs from 'fs';
import * as path from 'path';
import type { Question } from '../app/types';

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function mergeQuestions() {
  // Read existing questions from app/data/questions.ts
  const questionsPath = path.join(__dirname, '..', 'app', 'data', 'questions.ts');
  const questionsContent = fs.readFileSync(questionsPath, 'utf-8');

  // Extract the questions array using regex
  const match = questionsContent.match(/export const questions: Question\[\] = (\[[\s\S]*?\]);/);
  if (!match) {
    console.log('❌ Could not parse existing questions.ts file');
    return;
  }

  // Parse existing questions (this is a simple eval - in production, use a proper parser)
  let existingQuestions: Question[];
  try {
    existingQuestions = eval(match[1]);
  } catch (e) {
    console.log('❌ Could not parse existing questions array');
    return;
  }

  // Mark all existing questions as 'custom' if they don't have a source
  existingQuestions = existingQuestions.map(q => ({
    ...q,
    source: q.source || 'custom',
  }));

  console.log(`📚 Found ${existingQuestions.length} existing questions`);

  // Read parsed questions from output directory
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    console.log('❌ No output directory found. Run the parser first.');
    return;
  }

  const jsonFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.json'));
  if (jsonFiles.length === 0) {
    console.log('❌ No parsed question files found in scripts/output/');
    return;
  }

  let newQuestions: Question[] = [];
  jsonFiles.forEach(file => {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const questions: Question[] = JSON.parse(content);
    newQuestions = [...newQuestions, ...questions];
    console.log(`📄 Loaded ${questions.length} questions from ${file}`);
  });

  console.log(`\n📥 Total new questions to merge: ${newQuestions.length}`);

  // Merge: remove duplicates based on normalized question text
  const questionMap = new Map<string, Question>();

  // Add existing questions first
  existingQuestions.forEach(q => {
    const key = normalizeText(q.question);
    questionMap.set(key, q);
  });

  let addedCount = 0;
  let skippedCount = 0;

  // Add new questions, skip duplicates
  newQuestions.forEach(q => {
    const key = normalizeText(q.question);
    if (!questionMap.has(key)) {
      questionMap.set(key, q);
      addedCount++;
    } else {
      skippedCount++;
    }
  });

  const mergedQuestions = Array.from(questionMap.values());

  console.log(`\n✅ Added ${addedCount} new questions`);
  console.log(`⏭️  Skipped ${skippedCount} duplicates`);
  console.log(`📊 Total questions: ${mergedQuestions.length}`);

  // Sort by theme, then by id
  mergedQuestions.sort((a, b) => {
    if (a.theme !== b.theme) return a.theme.localeCompare(b.theme);
    return a.id.localeCompare(b.id);
  });

  // Generate the new questions.ts file content
  const newContent = `import { Question } from '@/types';

export const questions: Question[] = ${JSON.stringify(mergedQuestions, null, 2)};
`;

  // Backup the original file
  const backupPath = questionsPath + '.backup';
  fs.copyFileSync(questionsPath, backupPath);
  console.log(`\n💾 Backed up original to: ${backupPath}`);

  // Write the new file
  fs.writeFileSync(questionsPath, newContent);
  console.log(`✅ Updated: ${questionsPath}`);

  // Show statistics
  const stats = {
    bySource: mergedQuestions.reduce((acc, q) => {
      const source = q.source || 'custom';
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    byTheme: mergedQuestions.reduce((acc, q) => {
      acc[q.theme] = (acc[q.theme] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  };

  console.log('\n📊 Final Statistics:');
  console.log('   By Source:');
  Object.entries(stats.bySource).forEach(([source, count]) => {
    console.log(`      ${source}: ${count}`);
  });
  console.log('   By Theme:');
  Object.entries(stats.byTheme).forEach(([theme, count]) => {
    console.log(`      ${theme}: ${count}`);
  });

  console.log('\n✨ Done! Start the dev server to see the new questions.\n');
}

if (require.main === module) {
  console.log('🔀 Question Merge Tool\n');
  mergeQuestions();
}

export { mergeQuestions };
