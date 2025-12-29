import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { themes } from '@/data/themes';
import { questions } from '@/data/questions';
import { Theme } from '@/types';

export const Route = createFileRoute('/study')({
  component: StudyPage,
});

function StudyPage() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  if (!selectedTheme) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 p-4">
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
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Mode Étude</h1>
            <p className="text-lg text-gray-600">
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
                      className={`bg-gradient-to-r ${theme.color} text-white rounded-t-xl`}
                    >
                      <div className="text-5xl mb-3">{theme.icon}</div>
                      <h3 className="text-2xl font-semibold">{theme.name}</h3>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 mb-3">{theme.description}</p>
                      <p className="text-sm text-gray-500">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 p-4">
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
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{themeInfo?.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{themeInfo?.name}</h1>
              <p className="text-gray-600">{themeInfo?.description}</p>
            </div>
          </div>
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
                  <span className="text-sm font-semibold text-blue-600">
                    Question {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">
                    {question.question}
                  </h3>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-green-800 mb-1">Réponse</p>
                  <p className="text-green-900 font-medium">
                    {question.options[question.correctAnswer]}
                  </p>
                </div>

                {question.explanation && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Explication
                    </p>
                    <p className="text-gray-600">{question.explanation}</p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Toutes les réponses:</p>
                  <ul className="mt-2 space-y-1">
                    {question.options.map((option, optIndex) => (
                      <li
                        key={optIndex}
                        className={`text-sm ${
                          optIndex === question.correctAnswer
                            ? 'text-green-700 font-semibold'
                            : 'text-gray-600'
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
