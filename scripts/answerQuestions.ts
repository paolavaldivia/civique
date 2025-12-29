/**
 * AI-Powered Answer Completion for Questions
 *
 * This script uses the cleaned educational content to determine
 * the correct answers for CR and CSP questions.
 *
 * Input:
 * - scripts/data/clean/ (educational content)
 * - scripts/data/clean/questions/cr.json and csp.json (questions without answers)
 *
 * Output:
 * - scripts/data/clean/questions/cr-completed.json (with answers)
 * - scripts/data/clean/questions/csp-completed.json (with answers)
 *
 * Usage:
 *   npm run answer:questions
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
  options: string[];
  correctAnswer?: string;
}

interface CompletedQuestion extends CleanQuestion {
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
 * Search content for relevant information about a question
 */
function findRelevantContent(question: string, options: string[], allContent: Map<string, CleanContent>): string {
  const searchTerms = [
    ...question.toLowerCase().split(/\s+/).filter(w => w.length > 3),
    ...options.flatMap(opt => opt.toLowerCase().split(/\s+/).filter(w => w.length > 3))
  ];

  const uniqueTerms = [...new Set(searchTerms)];
  let relevantText = '';

  for (const content of allContent.values()) {
    const text = content.allText.toLowerCase();

    // Count how many search terms appear in this content
    const matchCount = uniqueTerms.filter(term => text.includes(term)).length;

    if (matchCount >= 2) {
      // This content seems relevant
      relevantText += `\n\n=== ${content.breadcrumb} ===\n`;
      relevantText += content.allText.slice(0, 2000); // First 2000 chars
    }
  }

  return relevantText || 'No directly relevant content found.';
}

/**
 * Analyze a question and determine the correct answer
 * This will be filled by the LLM (you!)
 */
function analyzeQuestion(
  question: CleanQuestion,
  relevantContent: string
): { answer: string; confidence: 'high' | 'medium' | 'low'; reasoning: string } {
  // This function will be filled manually with LLM analysis
  // For now, return placeholder
  return {
    answer: '?',
    confidence: 'low',
    reasoning: 'Manual analysis required'
  };
}

/**
 * Process all questions
 */
async function answerQuestions() {
  console.log('🤖 AI-Powered Answer Completion\n');

  // Load educational content
  console.log('📚 Loading educational content...');
  const allContent = loadAllContent();
  console.log(`   Found ${allContent.size} content pages\n`);

  // Process each source
  for (const source of ['cr', 'csp']) {
    const questionsPath = path.join(QUESTIONS_DIR, `${source}.json`);

    if (!fs.existsSync(questionsPath)) {
      console.log(`⚠️  No questions found for ${source.toUpperCase()}`);
      continue;
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Processing ${source.toUpperCase()} Questions`);
    console.log('='.repeat(60));

    const questions: CleanQuestion[] = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
    const completed: CompletedQuestion[] = [];

    // Create analysis file for manual review
    let analysisText = `# ${source.toUpperCase()} Questions Analysis\n\n`;
    analysisText += `Total questions: ${questions.length}\n\n`;
    analysisText += `${'='.repeat(80)}\n\n`;

    for (const question of questions) {
      console.log(`\nQ${question.number}: ${question.question.slice(0, 60)}...`);

      // Find relevant content
      const relevantContent = findRelevantContent(question.question, question.options, allContent);

      // Create detailed analysis for manual review
      analysisText += `## Question ${question.number}\n\n`;
      analysisText += `**Question:** ${question.question}\n\n`;
      analysisText += `**Options:**\n`;
      question.options.forEach((opt, idx) => {
        analysisText += `${String.fromCharCode(65 + idx)}) ${opt}\n`;
      });
      analysisText += `\n**Relevant Content:**\n`;
      analysisText += `${relevantContent.slice(0, 1500)}\n`;
      analysisText += `\n**Suggested Answer:** ___ (Fill this in manually)\n\n`;
      analysisText += `**Reasoning:** \n\n`;
      analysisText += `${'='.repeat(80)}\n\n`;

      // For now, mark as needing manual review
      const analysis = analyzeQuestion(question, relevantContent);

      completed.push({
        ...question,
        correctAnswer: analysis.answer,
        confidence: analysis.confidence,
        reasoning: analysis.reasoning,
        sourceContent: relevantContent.slice(0, 500),
      });

      console.log(`   Found ${relevantContent.length} chars of relevant content`);
    }

    // Save analysis file for manual completion
    const analysisPath = path.join(QUESTIONS_DIR, `${source}-analysis.md`);
    fs.writeFileSync(analysisPath, analysisText);
    console.log(`\n📝 Analysis saved: ${analysisPath}`);

    // Save preliminary completion (with placeholders)
    const completedPath = path.join(QUESTIONS_DIR, `${source}-for-review.json`);
    fs.writeFileSync(completedPath, JSON.stringify(completed, null, 2));
    console.log(`📄 Template saved: ${completedPath}`);
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ Analysis Complete!\n');
  console.log('📋 Next steps:');
  console.log('1. Review the *-analysis.md files');
  console.log('2. Read the relevant content for each question');
  console.log('3. Fill in the correct answers');
  console.log('4. The LLM will then complete the final answers\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  answerQuestions().catch(console.error);
}

export { answerQuestions };
