import { UserProgress } from '@/types';

/**
 * SM-2 Algorithm for spaced repetition
 * Based on SuperMemo 2 algorithm
 */

export function calculateNextReview(
  progress: UserProgress,
  quality: number // 0-5, where 3+ means correct
): UserProgress {
  const newProgress = { ...progress };

  if (quality >= 3) {
    // Correct answer
    newProgress.timesCorrect += 1;

    if (progress.interval === 0) {
      newProgress.interval = 1;
    } else if (progress.interval === 1) {
      newProgress.interval = 6;
    } else {
      newProgress.interval = Math.round(progress.interval * progress.easeFactor);
    }

    newProgress.easeFactor = Math.max(
      1.3,
      progress.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );
  } else {
    // Incorrect answer
    newProgress.timesIncorrect += 1;
    newProgress.interval = 1;
    newProgress.easeFactor = Math.max(1.3, progress.easeFactor - 0.2);
  }

  newProgress.lastReviewed = new Date();
  newProgress.nextReview = new Date(
    Date.now() + newProgress.interval * 24 * 60 * 60 * 1000
  );

  return newProgress;
}

export function initializeProgress(questionId: string): UserProgress {
  return {
    questionId,
    lastReviewed: new Date(),
    timesCorrect: 0,
    timesIncorrect: 0,
    nextReview: new Date(),
    easeFactor: 2.5,
    interval: 0,
  };
}

export function isDue(progress: UserProgress): boolean {
  return new Date() >= new Date(progress.nextReview);
}

export function getQuestionsForReview(
  allProgress: Record<string, UserProgress>,
  allQuestionIds: string[]
): string[] {
  return allQuestionIds.filter((id) => {
    const progress = allProgress[id];
    if (!progress) return true; // Never seen before
    return isDue(progress);
  });
}
