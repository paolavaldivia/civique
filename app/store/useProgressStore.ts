import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, StudySession, StudyMode, Theme, ExamSession } from '@/types';
import {
  calculateNextReview,
  initializeProgress,
  getQuestionsForReview,
} from '@/lib/spaced-repetition';

interface ProgressStore {
  progress: Record<string, UserProgress>;
  currentSession: StudySession | null;
  examSessions: ExamSession[];

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

  // Exam actions
  saveExamSession: (session: ExamSession) => void;
  getExamSessions: () => ExamSession[];
  getLatestExam: () => ExamSession | null;
  getExamStats: () => {
    totalExams: number;
    averageScore: number;
    bestScore: number;
    passRate: number;
  };
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      progress: {},
      currentSession: null,
      examSessions: [],

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

      // Exam methods
      saveExamSession: (session) => {
        set((state) => ({
          examSessions: [session, ...state.examSessions].slice(0, 50), // Keep last 50 exams
        }));
      },

      getExamSessions: () => {
        return get().examSessions;
      },

      getLatestExam: () => {
        const sessions = get().examSessions;
        return sessions.length > 0 ? sessions[0] : null;
      },

      getExamStats: () => {
        const sessions = get().examSessions;

        if (sessions.length === 0) {
          return {
            totalExams: 0,
            averageScore: 0,
            bestScore: 0,
            passRate: 0,
          };
        }

        const totalExams = sessions.length;
        const scores = sessions.map((s) => (s.score / s.totalQuestions) * 100);
        const averageScore = Math.round(
          scores.reduce((a, b) => a + b, 0) / totalExams
        );
        const bestScore = Math.round(Math.max(...scores));
        const passedExams = sessions.filter((s) => s.passed).length;
        const passRate = Math.round((passedExams / totalExams) * 100);

        return {
          totalExams,
          averageScore,
          bestScore,
          passRate,
        };
      },
    }),
    {
      name: 'civique-progress',
    }
  )
);
