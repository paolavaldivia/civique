import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getThemeServerFn } from '@/lib/theme';
import '@/styles.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Civique - Préparez votre test civique gratuitement',
      },
      {
        name: 'description',
        content:
          "Plateforme gratuite et moderne pour réviser le test d'évaluation du français et des valeurs de la République. Flashcards, QCM et mode étude avec répétition espacée.",
      },
    ],
  }),
  loader: () => getThemeServerFn(),
  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const theme = Route.useLoaderData();
  const initialClass = theme === 'system' ? 'light' : theme;

  return (
    <html lang="fr" className={initialClass} suppressHydrationWarning>
      <head >
        <title> Civique - Préparez votre test civique gratuitement</title>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
