import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import type { Theme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: 'sun' },
    { value: 'system', label: 'System', icon: 'monitor' },
    { value: 'dark', label: 'Dark', icon: 'moon' },
  ];

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`
            relative px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${
              theme === t.value
                ? 'text-gray-800 dark:text-gray-100'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }
          `}
          aria-label={`Switch to ${t.label} theme`}
          aria-pressed={theme === t.value}
        >
          {theme === t.value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-white dark:bg-gray-700 rounded-md shadow-sm"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            <div className="w-4 h-4 bg-current opacity-20 rounded-sm" title={`Icon: ${t.icon}`}></div>
            <span className="hidden sm:inline">{t.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
