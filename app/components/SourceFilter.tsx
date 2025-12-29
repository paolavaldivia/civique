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
    description: 'Questions officielles et personnalisées',
  },
  {
    value: 'CR',
    label: 'Questions CR',
    description: 'Connaissance Réfugiés',
  },
  {
    value: 'CSP',
    label: 'Questions CSP',
    description: 'Connaissance Statut Personnel',
  },
  {
    value: 'custom',
    label: 'Questions personnalisées',
    description: 'Questions ajoutées manuellement',
  },
];

export function SourceFilter() {
  const { sourceFilter, setSourceFilter } = usePreferencesStore();

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-gray-700">Type de questions</div>
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
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }
              `}
            >
              <div
                className={`
                  text-sm font-semibold
                  ${isActive ? 'text-blue-700' : 'text-gray-900'}
                `}
              >
                {option.label}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                {option.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
