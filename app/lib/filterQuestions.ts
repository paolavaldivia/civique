import type { Question } from '@/types';
import type { SourceFilter } from '@/store/usePreferencesStore';

/**
 * Filter questions based on source preference
 */
export function filterQuestionsBySource(
  questions: Question[],
  sourceFilter: SourceFilter
): Question[] {
  if (sourceFilter === 'all') {
    return questions;
  }

  return questions.filter((q) => {
    // Default to 'custom' if no source is specified (backwards compatibility)
    const questionSource = q.source || 'custom';
    return questionSource === sourceFilter;
  });
}

/**
 * Get counts by source
 */
export function getQuestionCounts(questions: Question[]) {
  return questions.reduce(
    (acc, q) => {
      const source = q.source || 'custom';
      acc[source] = (acc[source] || 0) + 1;
      acc.all += 1;
      return acc;
    },
    { all: 0, CR: 0, CSP: 0, SUPP: 0, custom: 0 } as Record<string, number>
  );
}
