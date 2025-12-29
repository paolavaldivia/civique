/**
 * Generate Multiple Choice Options and Answers for Questions
 *
 * This script uses the cleaned educational content to:
 * 1. Generate 4 plausible multiple choice options for each question
 * 2. Determine the correct answer
 * 3. Provide explanation/reasoning
 *
 * Input:
 * - scripts/data/clean/ (educational content)
 * - scripts/data/clean/questions/cr.json and csp.json (questions without answers)
 *
 * Output:
 * - scripts/data/clean/questions/cr-completed.json (with options and answers)
 * - scripts/data/clean/questions/csp-completed.json (with options and answers)
 *
 * Usage:
 *   npm run generate:answers
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CLEAN_DIR = path.join(__dirname, 'data', 'clean');
const QUESTIONS_DIR = path.join(CLEAN_DIR, 'questions');

interface CleanQuestion {
  id: string;
  number: number;
  source: 'CR' | 'CSP';
  question: string;
  theme?: string;
  options: string[];
  correctAnswer?: string;
}

interface CompletedQuestion extends CleanQuestion {
  options: string[]; // 4 multiple choice options
  correctAnswer: string; // A, B, C, or D
  confidence: 'high' | 'medium' | 'low';
  reasoning: string;
  sourceContent?: string; // Relevant content snippet
}

interface CleanContent {
  title: string;
  breadcrumb: string;
  sections: Array<{
    heading: string;
    level: number;
    content: string;
  }>;
  allText: string;
}

/**
 * Load all clean educational content
 */
function loadAllContent(): Map<string, CleanContent> {
  const contentMap = new Map<string, CleanContent>();

  function scanDirectory(dir: string) {
    const entries = fs.readdirSync(dir);

    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !entry.startsWith('_') && entry !== 'questions') {
        scanDirectory(fullPath);
      } else if (entry === 'content.json') {
        try {
          const content: CleanContent = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
          contentMap.set(content.breadcrumb, content);
        } catch (error) {
          console.error(`Error loading ${fullPath}:`, error);
        }
      }
    }
  }

  scanDirectory(CLEAN_DIR);
  return contentMap;
}

/**
 * Extract keywords from question for searching
 */
function extractKeywords(question: string): string[] {
  // Remove common words and extract meaningful keywords
  const commonWords = new Set(['est', 'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'que', 'qui', 'quoi', 'quand', 'où', 'comment', 'quel', 'quelle', 'quels', 'quelles', 'peut', 'doit', 'a', 'ont', 'dans', 'sur', 'pour', 'par', 'avec', 'sans', 'à', 'au', 'aux', 'ce', 'cette', 'ces', 'son', 'sa', 'ses', 'leur', 'leurs']);

  const words = question.toLowerCase()
    .replace(/[?.,!;:]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !commonWords.has(w));

  return [...new Set(words)];
}

/**
 * Search content for relevant information about a question
 */
function findRelevantContent(question: string, allContent: Map<string, CleanContent>): Array<{ breadcrumb: string; score: number; content: string }> {
  const keywords = extractKeywords(question);
  const matches: Array<{ breadcrumb: string; score: number; content: string }> = [];

  for (const [breadcrumb, content] of allContent.entries()) {
    const text = content.allText.toLowerCase();

    // Count how many keywords appear in this content
    let score = 0;
    for (const keyword of keywords) {
      const count = (text.match(new RegExp(keyword, 'g')) || []).length;
      score += count;
    }

    if (score >= 2) {
      matches.push({
        breadcrumb,
        score,
        content: content.allText,
      });
    }
  }

  // Sort by relevance score (highest first)
  matches.sort((a, b) => b.score - a.score);

  return matches.slice(0, 3); // Return top 3 most relevant
}

/**
 * Prepare analysis for a batch of questions
 */
function prepareQuestionAnalysis(
  questions: CleanQuestion[],
  allContent: Map<string, CleanContent>,
  source: 'CR' | 'CSP'
): void {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Processing ${source} Questions for Analysis`);
  console.log('='.repeat(60));

  let analysisText = `# ${source} Questions - LLM Analysis Required\n\n`;
  analysisText += `Total questions: ${questions.length}\n\n`;
  analysisText += `For each question below:\n`;
  analysisText += `1. Read the question and relevant content\n`;
  analysisText += `2. Generate 4 plausible multiple choice options (A, B, C, D)\n`;
  analysisText += `3. Determine the correct answer\n`;
  analysisText += `4. Provide reasoning\n\n`;
  analysisText += `${'='.repeat(80)}\n\n`;

  const completedQuestions: CompletedQuestion[] = [];

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    console.log(`\nProcessing Q${question.number}/${questions.length}: ${question.question.slice(0, 60)}...`);

    // Find relevant content
    const relevantMatches = findRelevantContent(question.question, allContent);

    const relevantContent = relevantMatches.map(m =>
      `**Source: ${m.breadcrumb}** (relevance: ${m.score})\n${m.content.slice(0, 1000)}\n`
    ).join('\n---\n\n');

    // Add to analysis file
    analysisText += `## Question ${question.number}: ${question.id}\n\n`;
    analysisText += `**Theme:** ${question.theme || 'N/A'}\n\n`;
    analysisText += `**Question:** ${question.question}\n\n`;
    analysisText += `**Relevant Educational Content:**\n\n`;
    analysisText += relevantContent || 'No highly relevant content found.\n';
    analysisText += `\n\n**TODO: Generate 4 Options:**\n`;
    analysisText += `A) ___\n`;
    analysisText += `B) ___\n`;
    analysisText += `C) ___\n`;
    analysisText += `D) ___\n\n`;
    analysisText += `**TODO: Correct Answer:** ___ (A, B, C, or D)\n\n`;
    analysisText += `**TODO: Confidence:** ___ (high, medium, or low)\n\n`;
    analysisText += `**TODO: Reasoning:** \n\n`;
    analysisText += `${'='.repeat(80)}\n\n`;

    // Create placeholder completed question
    completedQuestions.push({
      ...question,
      options: [], // To be filled
      correctAnswer: '', // To be filled
      confidence: 'low',
      reasoning: 'Pending LLM analysis',
      sourceContent: relevantMatches[0]?.content.slice(0, 500),
    });

    console.log(`   Found ${relevantMatches.length} relevant content sources`);
  }

  // Save analysis file
  const analysisPath = path.join(QUESTIONS_DIR, `${source.toLowerCase()}-analysis.md`);
  fs.writeFileSync(analysisPath, analysisText);
  console.log(`\n📝 Analysis file saved: ${analysisPath}`);

  // Save template completed file
  const completedPath = path.join(QUESTIONS_DIR, `${source.toLowerCase()}-for-completion.json`);
  fs.writeFileSync(completedPath, JSON.stringify(completedQuestions, null, 2));
  console.log(`📄 Template saved: ${completedPath}`);
}

/**
 * Main function
 */
async function generateAnswers() {
  console.log('🤖 Generate Multiple Choice Options and Answers\n');

  // Load educational content
  console.log('📚 Loading educational content...');
  const allContent = loadAllContent();
  console.log(`   Found ${allContent.size} content pages\n`);

  // Process each source
  for (const source of ['cr', 'csp'] as const) {
    const questionsPath = path.join(QUESTIONS_DIR, `${source}.json`);

    if (!fs.existsSync(questionsPath)) {
      console.log(`⚠️  No questions found for ${source.toUpperCase()}`);
      continue;
    }

    const questions: CleanQuestion[] = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));

    prepareQuestionAnalysis(questions, allContent, source.toUpperCase() as 'CR' | 'CSP');
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ Analysis Preparation Complete!\n');
  console.log('📋 Next steps:');
  console.log('1. Review the *-analysis.md files');
  console.log('2. For each question, use the relevant content to:');
  console.log('   - Generate 4 plausible multiple choice options');
  console.log('   - Determine the correct answer');
  console.log('   - Provide reasoning');
  console.log('3. Update the *-for-completion.json files with the answers\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateAnswers().catch(console.error);
}

export { generateAnswers };
