import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { RectangleStackIcon, ClipboardDocumentListIcon, BookOpenIcon, FlagIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { themes } from '@/data/themes';
import { useProgressStore } from '@/store/useProgressStore';
import { useShallow } from "zustand/react/shallow";

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const stats = useProgressStore(useShallow((state) => state.getStats()));

  const features = [
    {
      icon: RectangleStackIcon,
      title: 'Mode Flashcards',
      description: 'Apprenez avec des cartes mémo et la répétition espacée pour une mémorisation optimale.',
      href: '/flashcards',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'Mode QCM',
      description: 'Entraînez-vous avec des questions à choix multiples comme le vrai examen.',
      href: '/qcm',
      color: 'from-indigo-700 to-indigo-800',
    },
    {
      icon: BookOpenIcon,
      title: 'Mode Étude',
      description: 'Parcourez le contenu par thématique pour approfondir vos connaissances.',
      href: '/study',
      color: 'from-slate-700 to-slate-800',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3">
            <div className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center p-3">
              <FlagIcon className="w-full h-full text-slate-600 dark:text-slate-400" />
            </div>
            <span className="text-gray-800 dark:text-gray-200">
              Mon Test Civique
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Préparez votre test civique gratiuitement
          </p>
        </motion.div>

        {/* Stats Section */}
        {stats.totalQuestions > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <Card className="bg-linear-to-r from-slate-700 to-slate-800 text-white">
              <CardContent className="py-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">{stats.totalQuestions}</div>
                    <div className="text-sm opacity-90">Questions étudiées</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stats.masteredQuestions}</div>
                    <div className="text-sm opacity-90">Questions maîtrisées</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stats.reviewsDue}</div>
                    <div className="text-sm opacity-90">À réviser</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Study Modes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            Choisissez votre mode d'étude
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link to={feature.href}>
                  <Card hover className="h-full cursor-pointer transition-transform hover:scale-105">
                    <CardHeader className={`bg-linear-to-r ${feature.color} text-white rounded-t-lg`}>
                      <feature.icon className="w-12 h-12 mb-3 text-white" />
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Themes Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            Thématiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <motion.div key={theme.id} variants={itemVariants}>
                <Link to="/study" search={{ theme: theme.id }}>
                  <Card hover className="cursor-pointer transition-transform hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <theme.icon className="w-12 h-12 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{theme.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{theme.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-500 dark:text-gray-400"
        >
          <p className="mb-2">
            Plateforme 100% gratuite et open source
          </p>
          <p className="text-sm">
            Basé sur les questions officielles du test civique français
          </p>
        </motion.div>
      </div>
    </div>
  );
}
