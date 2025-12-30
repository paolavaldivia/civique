import { usePreferencesStore, type SourceFilter } from '@/store/usePreferencesStore';

interface SourceFilterOption {
  value: SourceFilter;
  label: string;
  description: string;
}

const filterOptions: SourceFilterOption[] = [
  {
    value: 'all',
    label: 'Toutes les questions',
    description: 'Toutes les sources (383 questions)',
  },
  {
    value: 'CR',
    label: 'Questions CR',
    description: 'Connaissance Réfugiés (169 questions)',
  },
  {
    value: 'CSP',
    label: 'Questions CSP',
    description: 'Connaissance Statut Personnel (154 questions)',
  },
  {
    value: 'SUPP',
    label: 'Questions SUPP',
    description: 'Questions supplémentaires (60 questions)',
  },
];

export function SourceFilter() {
  const { sourceFilter, setSourceFilter } = usePreferencesStore();

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Type de questions</div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {filterOptions.map((option) => {
          const isActive = sourceFilter === option.value;
          return (
            <button
              key={option.value}
              onClick={() => setSourceFilter(option.value)}
              className={`
                rounded-lg border-2 p-3 text-left transition-all
                ${
                  isActive
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-400'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-400'
                }
              `}
            >
              <div
                className={`
                  text-sm font-semibold
                  ${isActive ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-gray-100'}
                `}
              >
                {option.label}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {option.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
