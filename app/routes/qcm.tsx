import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowPathIcon, CheckCircleIcon, HandThumbUpIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { SourceFilter } from '@/components/SourceFilter';
import { questions } from '@/data/questions';
import { useProgressStore } from '@/store/useProgressStore';
import { usePreferencesStore } from '@/store/usePreferencesStore';
import { filterQuestionsBySource } from '@/lib/filterQuestions';
import { Question } from '@/types';

export const Route = createFileRoute('/qcm')({
  component: QCMPage,
});

function QCMPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const recordAnswer = useProgressStore((state) => state.recordAnswer);
  const sourceFilter = usePreferencesStore((state) => state.sourceFilter);

  useEffect(() => {
    // Filter and shuffle questions for QCM
    const filtered = filterQuestionsBySource(questions, sourceFilter);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setSessionQuestions(shuffled);
    // Reset state when filter changes
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setSessionComplete(false);
  }, [sourceFilter]);

  const currentQuestion = sessionQuestions[currentIndex];
  const progress = ((currentIndex + 1) / sessionQuestions.length) * 100;

  const handleSelectAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    recordAnswer(currentQuestion.id, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setSessionComplete(true);
    }
  };

  if (sessionQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ArrowPathIcon className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600 animate-spin" />
          <p className="text-xl text-gray-600 dark:text-gray-300">Chargement...</p>
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    const percentage = Math.round((score.correct / score.total) * 100);

    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center p-8">
            {percentage >= 80 ? (
              <CheckCircleIcon className="w-16 h-16 mx-auto mb-4 text-green-600 dark:text-green-400" />
            ) : percentage >= 60 ? (
              <HandThumbUpIcon className="w-16 h-16 mx-auto mb-4 text-yellow-600 dark:text-yellow-400" />
            ) : (
              <BookOpenIcon className="w-16 h-16 mx-auto mb-4 text-red-600 dark:text-red-400" />
            )}
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              QCM terminé !
            </h2>
            <div className="mb-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {percentage}%
              </div>
              <p className="text-gray-600">
                {score.correct} / {score.total} réponses correctes
              </p>
            </div>
            <div className="space-y-3">
              <Button
                onClick={() => {
                  setCurrentIndex(0);
                  setSessionComplete(false);
                  setSelectedAnswer(null);
                  setShowResult(false);
                  setScore({ correct: 0, total: 0 });
                  const filtered = filterQuestionsBySource(questions, sourceFilter);
                  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
                  setSessionQuestions(shuffled);
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
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
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
            <span className="font-medium">
              Score: {score.correct} / {score.total}
            </span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 mb-6">
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {currentQuestion.theme}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-md border-2 text-left transition-all duration-200 ${
                      selectedAnswer === index
                        ? showResult
                          ? index === currentQuestion.correctAnswer
                            ? 'bg-green-100 border-green-500 text-green-900'
                            : 'bg-red-100 border-red-500 text-red-900'
                          : 'bg-blue-50 border-blue-500 text-blue-900'
                        : showResult && index === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-900'
                        : 'border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-100'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showResult && index === currentQuestion.correctAnswer && (
                        <span className="text-green-600">✓</span>
                      )}
                      {showResult &&
                        selectedAnswer === index &&
                        index !== currentQuestion.correctAnswer && (
                          <span className="text-red-600">✗</span>
                        )}
                    </div>
                  </button>
                ))}
              </div>

              {showResult && currentQuestion.explanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-md"
                >
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Explication
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{currentQuestion.explanation}</p>
                </motion.div>
              )}
            </Card>

            <div className="flex justify-center gap-3">
              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="px-8"
                >
                  Valider
                </Button>
              ) : (
                <Button onClick={handleNext} size="lg" className="px-8">
                  {currentIndex < sessionQuestions.length - 1
                    ? 'Question suivante'
                    : 'Voir les résultats'}
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
