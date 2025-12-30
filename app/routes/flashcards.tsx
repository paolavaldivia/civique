import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { SourceFilter } from '@/components/SourceFilter';
import { questions } from '@/data/questions';
import { useProgressStore } from '@/store/useProgressStore';
import { usePreferencesStore } from '@/store/usePreferencesStore';
import { filterQuestionsBySource } from '@/lib/filterQuestions';
import { Question } from '@/types';

export const Route = createFileRoute('/flashcards')({
  component: FlashcardsPage,
});

function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showingAnswer, setShowingAnswer] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);

  const recordAnswer = useProgressStore((state) => state.recordAnswer);
  const getDueQuestions = useProgressStore((state) => state.getDueQuestions);
  const sourceFilter = usePreferencesStore((state) => state.sourceFilter);

  useEffect(() => {
    // Filter questions by source first
    const filteredQuestions = filterQuestionsBySource(questions, sourceFilter);

    // Get questions that are due for review from filtered set
    const allQuestionIds = filteredQuestions.map((q) => q.id);
    const dueIds = getDueQuestions(allQuestionIds);

    // If no questions are due, use all filtered questions
    const questionsToStudy = dueIds.length > 0
      ? filteredQuestions.filter((q) => dueIds.includes(q.id))
      : filteredQuestions;

    // Shuffle questions
    const shuffled = [...questionsToStudy].sort(() => Math.random() - 0.5);
    setSessionQuestions(shuffled);

    // Reset state when filter changes
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowingAnswer(false);
    setSessionComplete(false);
  }, [getDueQuestions, sourceFilter]);

  const currentQuestion = sessionQuestions[currentIndex];
  const progress = ((currentIndex + 1) / sessionQuestions.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setShowingAnswer(!showingAnswer);
  };

  const handleAnswer = (quality: number) => {
    if (!currentQuestion) return;

    const isCorrect = quality >= 3;
    recordAnswer(currentQuestion.id, isCorrect, quality);

    // Move to next question
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowingAnswer(false);
    } else {
      setSessionComplete(true);
    }
  };

  if (sessionQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-red-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center p-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Session terminée !
            </h2>
            <p className="text-gray-600 mb-6">
              Vous avez étudié {sessionQuestions.length} questions.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => {
                  setCurrentIndex(0);
                  setSessionComplete(false);
                  setIsFlipped(false);
                  setShowingAnswer(false);
                }}
                className="w-full"
              >
                Recommencer
              </Button>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="container mx-auto max-w-3xl py-8">
        {/* Header */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              ← Retour
            </Button>
          </Link>
        </div>

        {/* Source Filter */}
        <div className="mb-6">
          <SourceFilter />
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Question {currentIndex + 1} sur {sessionQuestions.length}</span>
            <span className="font-medium">{currentQuestion.theme}</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Flashcard */}
        <div className="perspective-1000 mb-6">
          <motion.div
            className="relative w-full"
            style={{ minHeight: '400px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleFlip}
                className="cursor-pointer"
              >
                <Card className="h-full min-h-100 flex items-center justify-center p-8 bg-linear-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    {!showingAnswer ? (
                      <>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
                          Question
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                          {currentQuestion.question}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Cliquez pour voir la réponse
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="text-sm text-green-600 dark:text-green-400 mb-4 uppercase tracking-wide font-semibold">
                          Réponse
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                          {currentQuestion.options[currentQuestion.correctAnswer]}
                        </h3>
                        {currentQuestion.explanation && (
                          <p className="text-gray-600 dark:text-gray-300 text-base mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                            {currentQuestion.explanation}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Answer Buttons */}
        {showingAnswer && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-3"
          >
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
              Comment avez-vous trouvé cette question ?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => handleAnswer(2)}
                variant="outline"
                className="py-6 border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <div>
                  <div className="font-bold">Difficile</div>
                  <div className="text-xs">Revoir bientôt</div>
                </div>
              </Button>
              <Button
                onClick={() => handleAnswer(3)}
                variant="outline"
                className="py-6 border-yellow-300 dark:border-yellow-600 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950"
              >
                <div>
                  <div className="font-bold">Moyen</div>
                  <div className="text-xs">Revoir plus tard</div>
                </div>
              </Button>
              <Button
                onClick={() => handleAnswer(4)}
                variant="outline"
                className="py-6 border-green-300 dark:border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950"
              >
                <div>
                  <div className="font-bold">Facile</div>
                  <div className="text-xs">Bonne maîtrise</div>
                </div>
              </Button>
              <Button
                onClick={() => handleAnswer(5)}
                variant="outline"
                className="py-6 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                <div>
                  <div className="font-bold">Très facile</div>
                  <div className="text-xs">Parfaitement su</div>
                </div>
              </Button>
            </div>
          </motion.div>
        )}

        {!showingAnswer && (
          <div className="text-center">
            <Button onClick={handleFlip} size="lg" className="px-8">
              Voir la réponse
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
