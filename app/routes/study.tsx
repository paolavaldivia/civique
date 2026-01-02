import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, ArrowTopRightOnSquareIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { themes } from '@/data/themes';
import { questions } from '@/data/questions';
import { Theme } from '@/types';

export const Route = createFileRoute('/study')({
  component: StudyPage,
  validateSearch: (search: Record<string, unknown>): { theme?: Theme; question?: number } => {
    return {
      theme: search.theme as Theme | undefined,
      question: typeof search.question === 'number' ? search.question :
                typeof search.question === 'string' ? parseInt(search.question, 10) :
                undefined,
    };
  },
});

function StudyPage() {
  const navigate = useNavigate({ from: '/study' });
  const { theme: urlTheme, question: urlQuestion } = Route.useSearch();
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(urlTheme || null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get theme questions
  const themeQuestions = selectedTheme ? questions.filter((q) => q.theme === selectedTheme) : [];

  // Current question is simply the URL param or 1
  const currentQuestion = urlQuestion && urlQuestion > 0 && urlQuestion <= themeQuestions.length
    ? urlQuestion
    : 1;

  // Update URL when theme changes
  useEffect(() => {
    if (selectedTheme) {
      navigate({ search: { theme: selectedTheme }, replace: true });
    } else {
      navigate({ search: {}, replace: true });
    }
  }, [selectedTheme, navigate]);

  // Scroll to question when URL question param changes
  useEffect(() => {
    if (!selectedTheme || !urlQuestion) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const ref = questionRefs.current[urlQuestion - 1];
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [urlQuestion, selectedTheme, themeQuestions.length]);

  // Show/hide floating nav based on scroll position
  useEffect(() => {
    if (!selectedTheme) return;

    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedTheme]);

  const goToQuestion = useCallback((questionNumber: number) => {
    if (questionNumber >= 1 && questionNumber <= themeQuestions.length && selectedTheme) {
      navigate({
        search: { theme: selectedTheme, question: questionNumber },
        replace: true,
      });
    }
  }, [selectedTheme, themeQuestions.length, navigate]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
              ref={(el) => {
                questionRefs.current[index] = el;
              }}
              data-question-index={index}
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

        {/* Floating Navigation */}
        <AnimatePresence>
          {showFloatingNav && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 right-8 flex flex-col gap-3"
            >
              {/* Jump to Question Input */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="question-jump"
                    className="text-xs font-semibold text-gray-600 dark:text-gray-400 text-center"
                  >
                    Question {currentQuestion} / {themeQuestions.length}
                  </label>
                  <div className="flex gap-1">
                    <Button
                      onClick={() => goToQuestion(currentQuestion - 1)}
                      disabled={currentQuestion <= 1}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Question précédente"
                    >
                      ←
                    </Button>
                    <input
                      type="number"
                      id="question-jump"
                      min="1"
                      max={themeQuestions.length}
                      value={currentQuestion}
                      onChange={(e) => {
                        const num = parseInt(e.target.value, 10);
                        if (!isNaN(num)) {
                          goToQuestion(num);
                        }
                      }}
                      className="w-16 text-sm text-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      onClick={() => goToQuestion(currentQuestion + 1)}
                      disabled={currentQuestion >= themeQuestions.length}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Question suivante"
                    >
                      →
                    </Button>
                  </div>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                aria-label="Retour en haut"
              >
                <ChevronUpIcon className="w-6 h-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
