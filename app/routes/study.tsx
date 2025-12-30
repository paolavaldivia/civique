import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { themes } from '@/data/themes';
import { questions } from '@/data/questions';
import { Theme } from '@/types';

export const Route = createFileRoute('/study')({
  component: StudyPage,
  validateSearch: (search: Record<string, unknown>): { theme?: Theme } => {
    return {
      theme: search.theme as Theme | undefined,
    };
  },
});

function StudyPage() {
  const navigate = useNavigate({ from: '/study' });
  const { theme: urlTheme } = Route.useSearch();
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(urlTheme || null);

  // Update URL when theme changes
  useEffect(() => {
    if (selectedTheme) {
      navigate({ search: { theme: selectedTheme }, replace: true });
    } else {
      navigate({ search: {}, replace: true });
    }
  }, [selectedTheme, navigate]);

  if (!selectedTheme) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="container mx-auto max-w-4xl py-8">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm">
                ← Retour
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Mode Étude</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choisissez une thématique pour approfondir vos connaissances
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((theme, index) => {
              const themeQuestions = questions.filter((q) => q.theme === theme.id);

              return (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    hover
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <CardHeader
                      className={`bg-linear-to-r ${theme.color} text-white rounded-t-lg`}
                    >
                      <theme.icon className="w-12 h-12 mb-3 text-white" />
                      <h3 className="text-2xl font-semibold">{theme.name}</h3>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{theme.description}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {themeQuestions.length} question{themeQuestions.length > 1 ? 's' : ''}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const themeInfo = themes.find((t) => t.id === selectedTheme);
  const themeQuestions = questions.filter((q) => q.theme === selectedTheme);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" onClick={() => setSelectedTheme(null)}>
            ← Retour aux thématiques
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center p-3">
              {themeInfo && <themeInfo.icon className="w-full h-full text-gray-600 dark:text-gray-400" />}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">{themeInfo?.name}</h1>
              <p className="text-gray-600 dark:text-gray-300">{themeInfo?.description}</p>
            </div>
          </div>

          {/* Info Card with Resources */}
          <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <BookOpenIcon className="w-8 h-8 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {themeQuestions.length} questions disponibles
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Explorez toutes les questions de cette thématique avec leurs explications détaillées.
                  </p>
                  <a
                    href="https://formation-civique.interieur.gouv.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium underline"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    Ressources officielles sur formation-civique.gouv.fr
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-6">
          {themeQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Question {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">
                    {question.question}
                  </h3>
                </div>

                <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 dark:border-green-600 p-4 mb-4">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">Réponse</p>
                  <p className="text-green-900 dark:text-green-200 font-medium">
                    {question.options[question.correctAnswer]}
                  </p>
                </div>

                {question.explanation && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Explication
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">{question.explanation}</p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Toutes les réponses:</p>
                  <ul className="mt-2 space-y-1">
                    {question.options.map((option, optIndex) => (
                      <li
                        key={optIndex}
                        className={`text-sm ${
                          optIndex === question.correctAnswer
                            ? 'text-green-700 dark:text-green-400 font-semibold'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {optIndex === question.correctAnswer && '✓ '}
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
