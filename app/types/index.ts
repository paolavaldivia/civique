export type QuestionSource = 'CR' | 'CSP' | 'SUPP' | 'custom';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  theme: Theme;
  explanation?: string;
  source?: QuestionSource; // CR = Connaissance Réfugiés, CSP = Connaissance Statut Personnel
  officialId?: string; // Official question number from the source
}

export type Theme =
  | 'principes-valeurs'
  | 'institutions'
  | 'symboles'
  | 'histoire'
  | 'geographie'
  | 'culture'
  | 'vie-quotidienne';

export interface ThemeInfo {
  id: Theme;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export interface UserProgress {
  questionId: string;
  lastReviewed: Date;
  timesCorrect: number;
  timesIncorrect: number;
  nextReview: Date;
  easeFactor: number;
  interval: number;
}

export interface StudySession {
  mode: 'flashcard' | 'qcm' | 'study';
  theme?: Theme;
  questions: Question[];
  currentIndex: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

export type StudyMode = 'flashcard' | 'qcm' | 'study' | 'all';
