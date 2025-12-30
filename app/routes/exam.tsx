import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  AcademicCapIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { questions } from '@/data/questions';
import { useProgressStore } from '@/store/useProgressStore';
import { usePreferencesStore } from '@/store/usePreferencesStore';
import { filterQuestionsBySource } from '@/lib/filterQuestions';
import { Question, Theme, ExamSession } from '@/types';

export const Route = createFileRoute('/exam')({
  component: ExamPage,
});

const EXAM_DURATION = 60 * 60; // 60 minutes in seconds
const EXAM_QUESTIONS_COUNT = 65;
const PASSING_SCORE = 0.6; // 60%

function ExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION);
  const [examComplete, setExamComplete] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const startTimeRef = useRef<Date | null>(null);

  const saveExamSession = useProgressStore((state) => state.saveExamSession);
  const sourceFilter = usePreferencesStore((state) => state.sourceFilter);

  // Timer effect
  useEffect(() => {
    if (!examStarted || examComplete) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examStarted, examComplete]);

  const startExam = () => {
    const filtered = filterQuestionsBySource(questions, sourceFilter);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const examSet = shuffled.slice(0, EXAM_QUESTIONS_COUNT);

    setExamQuestions(examSet);
    setExamStarted(true);
    startTimeRef.current = new Date();
    setAnswers({});
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTimeRemaining(EXAM_DURATION);
    setExamComplete(false);
  };

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleSaveAndNext = () => {
    if (selectedAnswer === null) return;

    // Save the answer
    const currentQuestion = examQuestions[currentIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer,
    }));

    // Move to next question or show warning if it's the last one
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const nextQuestion = examQuestions[currentIndex + 1];
      setSelectedAnswer(answers[nextQuestion.id] ?? null);
    } else {
      setShowWarning(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      // Save current answer first
      if (selectedAnswer !== null) {
        const currentQuestion = examQuestions[currentIndex];
        setAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: selectedAnswer,
        }));
      }

      setCurrentIndex(currentIndex - 1);
      const prevQuestion = examQuestions[currentIndex - 1];
      setSelectedAnswer(answers[prevQuestion.id] ?? null);
    }
  };

  const handleSubmitExam = () => {
    // Save current answer if any
    if (selectedAnswer !== null) {
      const currentQuestion = examQuestions[currentIndex];
      const finalAnswers = {
        ...answers,
        [currentQuestion.id]: selectedAnswer,
      };
      setAnswers(finalAnswers);
      calculateAndSaveResults(finalAnswers);
    } else {
      calculateAndSaveResults(answers);
    }
  };

  const calculateAndSaveResults = (finalAnswers: Record<string, number>) => {
    const endTime = new Date();
    const durationSeconds = startTimeRef.current
      ? Math.floor((endTime.getTime() - startTimeRef.current.getTime()) / 1000)
      : EXAM_DURATION - timeRemaining;

    let correctCount = 0;
    const themeBreakdown: Record<Theme, { correct: number; total: number }> = {} as any;

    examQuestions.forEach((question) => {
      const userAnswer = finalAnswers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;

      if (isCorrect) correctCount++;

      // Track per-theme stats
      if (!themeBreakdown[question.theme]) {
        themeBreakdown[question.theme] = { correct: 0, total: 0 };
      }
      themeBreakdown[question.theme].total++;
      if (isCorrect) {
        themeBreakdown[question.theme].correct++;
      }
    });

    const score = correctCount;
    const totalQuestions = examQuestions.length;
    const percentage = score / totalQuestions;
    const passed = percentage >= PASSING_SCORE;

    const examSession: ExamSession = {
      id: `exam-${Date.now()}`,
      startedAt: startTimeRef.current || new Date(),
      completedAt: endTime,
      questions: examQuestions,
      answers: finalAnswers,
      score,
      totalQuestions,
      durationSeconds,
      themeBreakdown,
      passed,
    };

    saveExamSession(examSession);
    setExamComplete(true);
    setShowWarning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = examQuestions[currentIndex];
  const progress = examQuestions.length > 0 ? ((currentIndex + 1) / examQuestions.length) * 100 : 0;
  const answeredCount = Object.keys(answers).length + (selectedAnswer !== null ? 1 : 0);

  // Start screen
  if (!examStarted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="p-8">
            <div className="text-center mb-6">
              <AcademicCapIcon className="w-20 h-20 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Examen Blanc
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Testez vos connaissances dans les conditions réelles de l'examen
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <ClockIcon className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    Durée : 60 minutes
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Le chronomètre démarre dès que vous commencez l'examen
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    {EXAM_QUESTIONS_COUNT} questions
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Questions à choix multiples couvrant toutes les thématiques
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AcademicCapIcon className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    Score minimum : 60%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Vous devez obtenir au moins 60% de bonnes réponses pour réussir
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important :</strong> Vous ne pourrez pas revenir en arrière après avoir
                soumis l'examen. Assurez-vous d'avoir suffisamment de temps devant vous.
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={startExam} size="lg" className="flex-1">
                Commencer l'examen
              </Button>
              <Link to="/" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Retour
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (examComplete) {
    const finalAnswers = answers;
    const results = examQuestions.map((q) => ({
      question: q,
      userAnswer: finalAnswers[q.id],
      correct: finalAnswers[q.id] === q.correctAnswer,
    }));

    const correctCount = results.filter((r) => r.correct).length;
    const percentage = Math.round((correctCount / examQuestions.length) * 100);
    const passed = percentage >= PASSING_SCORE * 100;

    // Calculate theme breakdown
    const themeStats: Record<string, { correct: number; total: number }> = {};
    results.forEach((r) => {
      const theme = r.question.theme;
      if (!themeStats[theme]) {
        themeStats[theme] = { correct: 0, total: 0 };
      }
      themeStats[theme].total++;
      if (r.correct) themeStats[theme].correct++;
    });

    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="container mx-auto max-w-4xl py-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {/* Results Header */}
            <Card className="p-8 mb-6 text-center">
              {passed ? (
                <CheckCircleIcon className="w-20 h-20 mx-auto mb-4 text-green-600 dark:text-green-400" />
              ) : (
                <XCircleIcon className="w-20 h-20 mx-auto mb-4 text-red-600 dark:text-red-400" />
              )}
              <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {passed ? 'Félicitations !' : 'Continuez à étudier'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {passed
                  ? 'Vous avez réussi l\'examen blanc !'
                  : 'Vous n\'avez pas atteint le score minimum requis'}
              </p>

              <div className="inline-block">
                <div className={`text-6xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
                  {percentage}%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {correctCount} / {examQuestions.length} réponses correctes
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Temps écoulé : {formatTime(EXAM_DURATION - timeRemaining)}
              </div>
            </Card>

            {/* Theme Breakdown */}
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Résultats par thématique
              </h3>
              <div className="space-y-3">
                {Object.entries(themeStats).map(([theme, stats]) => {
                  const themePercentage = Math.round((stats.correct / stats.total) * 100);
                  return (
                    <div key={theme}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">
                          {theme.replace('-', ' ')}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {stats.correct} / {stats.total} ({themePercentage}%)
                        </span>
                      </div>
                      <Progress value={themePercentage} />
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Detailed Review */}
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Révision détaillée
              </h3>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={result.question.id}
                    className={`p-4 rounded-lg border-2 ${
                      result.correct
                        ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {result.correct ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                      ) : (
                        <XCircleIcon className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          Question {index + 1} • {result.question.theme}
                        </div>
                        <div className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                          {result.question.question}
                        </div>
                        <div className="text-sm space-y-1">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Votre réponse : </span>
                            <span
                              className={
                                result.correct
                                  ? 'text-green-700 dark:text-green-300 font-medium'
                                  : 'text-red-700 dark:text-red-300 font-medium'
                              }
                            >
                              {result.userAnswer !== undefined
                                ? result.question.options[result.userAnswer]
                                : 'Non répondu'}
                            </span>
                          </div>
                          {!result.correct && (
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Bonne réponse : </span>
                              <span className="text-green-700 dark:text-green-300 font-medium">
                                {result.question.options[result.question.correctAnswer]}
                              </span>
                            </div>
                          )}
                          {result.question.explanation && (
                            <div className="mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
                              <span className="text-gray-600 dark:text-gray-400 font-medium">
                                Explication :{' '}
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {result.question.explanation}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Actions */}
            <div className="flex gap-3">
              <Button onClick={startExam} size="lg" className="flex-1">
                <ArrowPathIcon className="w-5 h-5 mr-2" />
                Refaire un examen
              </Button>
              <Link to="/" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Exam in progress
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="container mx-auto max-w-3xl py-8">
        {/* Timer and Progress */}
        <div className="mb-6 sticky top-4 z-10">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ClockIcon className={`w-5 h-5 ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-600'}`} />
                <span
                  className={`font-mono text-lg font-bold ${
                    timeRemaining < 300
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-gray-800 dark:text-gray-100'
                  }`}
                >
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Question {currentIndex + 1} / {examQuestions.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Répondu : {answeredCount} / {examQuestions.length}
              </div>
            </div>
            <Progress value={progress} />
          </Card>
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
                    className={`w-full p-4 rounded-md border-2 text-left transition-all duration-200 ${
                      selectedAnswer === index
                        ? 'bg-blue-50 dark:bg-blue-950 border-blue-500 text-blue-900 dark:text-blue-100'
                        : 'border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-100'
                    } cursor-pointer`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between gap-3">
              <Button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                variant="outline"
                size="lg"
              >
                ← Précédent
              </Button>

              {currentIndex < examQuestions.length - 1 ? (
                <Button onClick={handleSaveAndNext} disabled={selectedAnswer === null} size="lg">
                  Suivant →
                </Button>
              ) : (
                <Button
                  onClick={() => setShowWarning(true)}
                  disabled={selectedAnswer === null}
                  size="lg"
                >
                  Terminer l'examen
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Submit Warning Modal */}
        {showWarning && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-md w-full"
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  Êtes-vous sûr(e) ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Vous êtes sur le point de soumettre votre examen. Vous ne pourrez plus modifier
                  vos réponses après la soumission.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Vous avez répondu à {answeredCount} question(s) sur {examQuestions.length}.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button onClick={() => setShowWarning(false)} variant="outline" className="flex-1">
                    Continuer à réviser
                  </Button>
                  <Button onClick={handleSubmitExam} className="flex-1">
                    Soumettre l'examen
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
