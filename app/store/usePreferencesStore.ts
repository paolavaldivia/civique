import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { QuestionSource } from '@/types';

export type SourceFilter = QuestionSource | 'all';

interface PreferencesStore {
  // Question source filter
  sourceFilter: SourceFilter;
  setSourceFilter: (filter: SourceFilter) => void;

  // Future: other preferences like theme, language, etc.
}

export const usePreferencesStore = create<PreferencesStore>()(
  persist(
    (set) => ({
      sourceFilter: 'all',

      setSourceFilter: (filter) => {
        set({ sourceFilter: filter });
      },
    }),
    {
      name: 'civique-preferences',
    }
  )
);
