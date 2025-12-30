import { useEffect } from 'react';
import { usePreferencesStore } from '@/store/usePreferencesStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = usePreferencesStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      // Use system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      // Use user preference
      root.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    // Listen for system theme changes when in system mode
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return <>{children}</>;
}
