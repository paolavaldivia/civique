import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, StudySession, StudyMode, Theme } from '@/types';
import {
  calculateNextReview,
  initializeProgress,
  getQuestionsForReview,
} from '@/lib/spaced-repetition';

interface ProgressStore {
  progress: Record<string, UserProgress>;
  currentSession: StudySession | null;

  // Actions
  recordAnswer: (questionId: string, correct: boolean, quality?: number) => void;
  getProgress: (questionId: string) => UserProgress | undefined;
  getDueQuestions: (allQuestionIds: string[]) => string[];
  resetProgress: () => void;
  startSession: (mode: StudyMode, theme?: Theme, questionIds?: string[]) => void;
  endSession: () => void;
  getStats: () => {
    totalQuestions: number;
    masteredQuestions: number;
    reviewsDue: number;
  };
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      progress: {},
      currentSession: null,

      recordAnswer: (questionId, correct, quality = correct ? 4 : 1) => {
        const currentProgress =
          get().progress[questionId] || initializeProgress(questionId);
        const newProgress = calculateNextReview(currentProgress, quality);

        set((state) => ({
          progress: {
            ...state.progress,
            [questionId]: newProgress,
          },
        }));
      },

      getProgress: (questionId) => {
        return get().progress[questionId];
      },

      getDueQuestions: (allQuestionIds) => {
        return getQuestionsForReview(get().progress, allQuestionIds);
      },

      resetProgress: () => {
        set({ progress: {}, currentSession: null });
      },

      startSession: (_mode, _theme, _questionIds) => {
        // Session will be managed by components
        // This is a placeholder for future session tracking
      },

      endSession: () => {
        set({ currentSession: null });
      },

      getStats: () => {
        const progress = get().progress;
        const entries = Object.values(progress);

        return {
          totalQuestions: entries.length,
          masteredQuestions: entries.filter(
            (p) => p.timesCorrect >= 3 && p.timesIncorrect === 0
          ).length,
          reviewsDue: entries.filter(
            (p) => new Date() >= new Date(p.nextReview)
          ).length,
        };
      },
    }),
    {
      name: 'civique-progress',
    }
  )
);
