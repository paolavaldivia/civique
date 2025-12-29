#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Theme mapping from clean questions to app themes
const themeMapping: Record<string, string> = {
  // CR and CSP themes
  'Principes et valeurs de la République': 'principes-valeurs',
  'Système institutionnel et politique': 'institutions',
  'Histoire géographie et culture': 'histoire',
  'Droits et devoirs': 'vie-quotidienne',

  // SUPP themes
  'Valeurs fondamentales': 'principes-valeurs',
  'Engagement citoyen': 'principes-valeurs',
  'Nationalité et intégration': 'principes-valeurs',
  'Démarches administratives': 'vie-quotidienne',
  'Vie pratique': 'vie-quotidienne',
  'Travail et emploi': 'vie-quotidienne',
  'Protection sociale': 'vie-quotidienne',
  'Famille et couple': 'vie-quotidienne',
  'Droits et recours': 'vie-quotidienne',
  'Droits numériques': 'vie-quotidienne',
  'Fiscalité': 'vie-quotidienne',
  'Environnement': 'vie-quotidienne',
};

interface CleanQuestion {
  id: string;
  number: number;
  source: string;
  question: string;
  theme: string;
  options: string[];
  correctAnswer: number;
  confidence: string;
  reasoning: string;
}

interface AppQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  theme: string;
  source: string;
  explanation: string;
}

function transformQuestion(q: CleanQuestion): AppQuestion {
  const mappedTheme = themeMapping[q.theme] || 'vie-quotidienne';

  return {
    id: q.id,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    theme: mappedTheme,
    source: q.source,
    explanation: q.reasoning,
  };
}

function main() {
  const dataDir = join(__dirname, 'data/clean/questions');

  // Read all completed question files
  const crQuestions: CleanQuestion[] = JSON.parse(
    readFileSync(join(dataDir, 'cr-completed.json'), 'utf-8')
  );
  const cspQuestions: CleanQuestion[] = JSON.parse(
    readFileSync(join(dataDir, 'csp-completed.json'), 'utf-8')
  );
  const suppQuestions: CleanQuestion[] = JSON.parse(
    readFileSync(join(dataDir, 'supp-completed.json'), 'utf-8')
  );

  // Combine all questions
  const allQuestions = [
    ...crQuestions,
    ...cspQuestions,
    ...suppQuestions,
  ];

  // Transform to app format
  const appQuestions = allQuestions.map(transformQuestion);

  // Generate TypeScript file content
  const fileContent = `import { Question } from '@/types';

/**
 * Official questions from civic education test
 * Total: ${appQuestions.length} questions
 * - CR (Connaissance Réfugiés): ${crQuestions.length} questions
 * - CSP (Connaissance Statut Personnel): ${cspQuestions.length} questions
 * - SUPP (Supplementary): ${suppQuestions.length} questions
 */
export const questions: Question[] = ${JSON.stringify(appQuestions, null, 2)};
`;

  // Write to app/data/questions.ts
  const outputPath = join(__dirname, '../app/data/questions.ts');
  writeFileSync(outputPath, fileContent, 'utf-8');

  console.log(`✅ Successfully integrated ${appQuestions.length} questions!`);
  console.log(`   - CR: ${crQuestions.length}`);
  console.log(`   - CSP: ${cspQuestions.length}`);
  console.log(`   - SUPP: ${suppQuestions.length}`);
  console.log(`\nOutput: ${outputPath}`);

  // Show theme distribution
  const themeCount: Record<string, number> = {};
  appQuestions.forEach(q => {
    themeCount[q.theme] = (themeCount[q.theme] || 0) + 1;
  });

  console.log('\n📊 Questions by theme:');
  Object.entries(themeCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([theme, count]) => {
      console.log(`   ${theme}: ${count}`);
    });
}

main();
