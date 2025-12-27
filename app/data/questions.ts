import { Question } from '@/types';

export const questions: Question[] = [
  // Principes et valeurs
  {
    id: 'pv-1',
    question: 'Quelle est la devise de la République française ?',
    options: [
      'Travail, Famille, Patrie',
      'Liberté, Égalité, Fraternité',
      'Honneur et Patrie',
      'Unité et Indivisibilité',
    ],
    correctAnswer: 1,
    theme: 'principes-valeurs',
    explanation:
      'La devise "Liberté, Égalité, Fraternité" est inscrite dans la Constitution et figure sur les bâtiments publics.',
  },
  {
    id: 'pv-2',
    question: 'Qu\'est-ce que la laïcité ?',
    options: [
      'L\'interdiction de toute religion',
      'La séparation de l\'Église et de l\'État',
      'L\'obligation d\'être catholique',
      'La liberté de critiquer les religions',
    ],
    correctAnswer: 1,
    theme: 'principes-valeurs',
    explanation:
      'La laïcité garantit la liberté de conscience et sépare les pouvoirs religieux et politiques.',
  },
  {
    id: 'pv-3',
    question: 'Quel principe garantit que tous les citoyens sont traités de la même manière par la loi ?',
    options: [
      'La fraternité',
      'L\'égalité',
      'La liberté',
      'La solidarité',
    ],
    correctAnswer: 1,
    theme: 'principes-valeurs',
    explanation:
      'Le principe d\'égalité garantit que tous les citoyens ont les mêmes droits et devoirs devant la loi.',
  },

  // Institutions
  {
    id: 'inst-1',
    question: 'Qui est le chef de l\'État en France ?',
    options: [
      'Le Premier ministre',
      'Le Président de la République',
      'Le Président du Sénat',
      'Le Président de l\'Assemblée nationale',
    ],
    correctAnswer: 1,
    theme: 'institutions',
    explanation:
      'Le Président de la République est élu au suffrage universel direct pour 5 ans.',
  },
  {
    id: 'inst-2',
    question: 'Combien de temps dure le mandat présidentiel ?',
    options: ['3 ans', '4 ans', '5 ans', '7 ans'],
    correctAnswer: 2,
    theme: 'institutions',
    explanation:
      'Depuis 2000, le mandat présidentiel est de 5 ans (quinquennat). Il était de 7 ans avant.',
  },
  {
    id: 'inst-3',
    question: 'Quelle est la plus haute juridiction de l\'ordre judiciaire français ?',
    options: [
      'Le Conseil constitutionnel',
      'Le Conseil d\'État',
      'La Cour de cassation',
      'Le Tribunal administratif',
    ],
    correctAnswer: 2,
    theme: 'institutions',
    explanation:
      'La Cour de cassation est la plus haute juridiction de l\'ordre judiciaire.',
  },

  // Symboles
  {
    id: 'symb-1',
    question: 'Quelles sont les couleurs du drapeau français ?',
    options: [
      'Rouge, blanc, vert',
      'Bleu, blanc, rouge',
      'Bleu, jaune, rouge',
      'Rouge, blanc, bleu',
    ],
    correctAnswer: 1,
    theme: 'symboles',
    explanation:
      'Le drapeau tricolore bleu, blanc, rouge est le symbole de la République depuis 1789.',
  },
  {
    id: 'symb-2',
    question: 'Quel est l\'hymne national français ?',
    options: [
      'Le Chant des Partisans',
      'La Marseillaise',
      'La Carmagnole',
      'Ça Ira',
    ],
    correctAnswer: 1,
    theme: 'symboles',
    explanation:
      'La Marseillaise, composée par Rouget de Lisle en 1792, est l\'hymne national français.',
  },
  {
    id: 'symb-3',
    question: 'Qui est Marianne ?',
    options: [
      'Une héroïne de la Révolution',
      'Le symbole de la République française',
      'La première femme élue présidente',
      'Une sainte patronne de la France',
    ],
    correctAnswer: 1,
    theme: 'symboles',
    explanation:
      'Marianne est la figure symbolique de la République française, représentant la liberté.',
  },

  // Histoire
  {
    id: 'hist-1',
    question: 'En quelle année a eu lieu la Révolution française ?',
    options: ['1789', '1792', '1799', '1804'],
    correctAnswer: 0,
    theme: 'histoire',
    explanation:
      'La Révolution française a commencé en 1789 avec la prise de la Bastille le 14 juillet.',
  },
  {
    id: 'hist-2',
    question: 'Quelle République est actuellement en vigueur en France ?',
    options: [
      'La IIIe République',
      'La IVe République',
      'La Ve République',
      'La VIe République',
    ],
    correctAnswer: 2,
    theme: 'histoire',
    explanation:
      'La Ve République a été fondée en 1958 par le général de Gaulle.',
  },
  {
    id: 'hist-3',
    question: 'Quelle date commémore la fête nationale française ?',
    options: [
      'Le 1er mai',
      'Le 14 juillet',
      'Le 8 mai',
      'Le 11 novembre',
    ],
    correctAnswer: 1,
    theme: 'histoire',
    explanation:
      'Le 14 juillet commémore la prise de la Bastille en 1789 et la Fête de la Fédération en 1790.',
  },

  // Géographie
  {
    id: 'geo-1',
    question: 'Quelle est la capitale de la France ?',
    options: ['Lyon', 'Marseille', 'Paris', 'Toulouse'],
    correctAnswer: 2,
    theme: 'geographie',
    explanation:
      'Paris est la capitale de la France et compte environ 2,2 millions d\'habitants.',
  },
  {
    id: 'geo-2',
    question: 'Combien la France compte-t-elle de régions (hors outre-mer) ?',
    options: ['13', '18', '22', '27'],
    correctAnswer: 0,
    theme: 'geographie',
    explanation:
      'Depuis 2016, la France métropolitaine compte 13 régions.',
  },
  {
    id: 'geo-3',
    question: 'Quel océan borde la France à l\'ouest ?',
    options: [
      'L\'océan Atlantique',
      'L\'océan Pacifique',
      'L\'océan Indien',
      'La Méditerranée',
    ],
    correctAnswer: 0,
    theme: 'geographie',
    explanation:
      'L\'océan Atlantique borde la côte ouest de la France.',
  },

  // Culture
  {
    id: 'cult-1',
    question: 'Qui a peint "La Liberté guidant le peuple" ?',
    options: [
      'Claude Monet',
      'Eugène Delacroix',
      'Édouard Manet',
      'Auguste Renoir',
    ],
    correctAnswer: 1,
    theme: 'culture',
    explanation:
      'Eugène Delacroix a peint cette œuvre en 1830 pour commémorer les Trois Glorieuses.',
  },
  {
    id: 'cult-2',
    question: 'Quel écrivain français a écrit "Les Misérables" ?',
    options: [
      'Victor Hugo',
      'Émile Zola',
      'Alexandre Dumas',
      'Gustave Flaubert',
    ],
    correctAnswer: 0,
    theme: 'culture',
    explanation:
      'Victor Hugo a publié "Les Misérables" en 1862.',
  },

  // Vie quotidienne
  {
    id: 'vq-1',
    question: 'À quel âge peut-on voter en France ?',
    options: ['16 ans', '18 ans', '21 ans', '25 ans'],
    correctAnswer: 1,
    theme: 'vie-quotidienne',
    explanation:
      'Le droit de vote est accordé à tous les citoyens français à partir de 18 ans.',
  },
  {
    id: 'vq-2',
    question: 'Quel est le numéro d\'urgence unique en Europe ?',
    options: ['15', '17', '18', '112'],
    correctAnswer: 3,
    theme: 'vie-quotidienne',
    explanation:
      'Le 112 est le numéro d\'urgence unique européen, accessible dans tous les pays de l\'UE.',
  },
  {
    id: 'vq-3',
    question: 'Quelle est la durée légale du travail en France ?',
    options: [
      '30 heures par semaine',
      '35 heures par semaine',
      '40 heures par semaine',
      '45 heures par semaine',
    ],
    correctAnswer: 1,
    theme: 'vie-quotidienne',
    explanation:
      'La durée légale du travail en France est de 35 heures par semaine depuis 2000.',
  },
];
