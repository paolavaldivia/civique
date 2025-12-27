import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { themes } from '@/data/themes';
import { useProgressStore } from '@/store/useProgressStore';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const stats = useProgressStore((state) => state.getStats());

  const features = [
    {
      icon: '🎴',
      title: 'Mode Flashcards',
      description: 'Apprenez avec des cartes mémo et la répétition espacée pour une mémorisation optimale.',
      href: '/flashcards',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: '📝',
      title: 'Mode QCM',
      description: 'Entraînez-vous avec des questions à choix multiples comme le vrai examen.',
      href: '/qcm',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: '📚',
      title: 'Mode Étude',
      description: 'Parcourez le contenu par thématique pour approfondir vos connaissances.',
      href: '/study',
      color: 'from-green-500 to-green-600',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <span className="text-6xl">🇫🇷</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
            Civique
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Préparez votre test civique gratuitement
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Une plateforme moderne et gratuite pour maîtriser les valeurs de la République française.
            Flashcards, QCM et révisions intelligentes.
          </p>
        </motion.div>

        {/* Stats Section */}
        {stats.totalQuestions > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Choisissez votre mode d'étude
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link to={feature.href}>
                  <Card hover className="h-full cursor-pointer transition-transform hover:scale-105">
                    <CardHeader className={`bg-gradient-to-r ${feature.color} text-white rounded-t-xl`}>
                      <div className="text-5xl mb-3">{feature.icon}</div>
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600">{feature.description}</p>
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Thématiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <motion.div key={theme.id} variants={itemVariants}>
                <Card hover className="cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-2">{theme.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{theme.name}</h3>
                    <p className="text-sm text-gray-500">{theme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-500"
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
