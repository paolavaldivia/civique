interface ProgressProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
}

export function Progress({ value, className = '', showLabel = false }: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-300">
          <span>Progression</span>
          <span>{Math.round(clampedValue)}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
