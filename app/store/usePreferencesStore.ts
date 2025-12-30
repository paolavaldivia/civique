import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { QuestionSource } from '@/types';

export type SourceFilter = QuestionSource | 'all';
export type Theme = 'light' | 'dark' | 'system';

interface PreferencesStore {
  // Question source filter
  sourceFilter: SourceFilter;
  setSourceFilter: (filter: SourceFilter) => void;

  // Theme preference
  theme: Theme;
  setTheme: (theme: Theme) => void;

  // Future: other preferences like language, etc.
}

export const usePreferencesStore = create<PreferencesStore>()(
  persist(
    (set) => ({
      sourceFilter: 'all',
      theme: 'system',

      setSourceFilter: (filter) => {
        set({ sourceFilter: filter });
      },

      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: 'civique-preferences',
    }
  )
);
