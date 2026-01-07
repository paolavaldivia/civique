import {
  ScaleIcon,
  BuildingLibraryIcon,
  FlagIcon,
  BookOpenIcon,
  MapIcon,
  PaintBrushIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import { ThemeInfo } from '@/types';

export const themes: ThemeInfo[] = [
  {
    id: 'principes-valeurs',
    name: 'Principes et valeurs',
    description: 'Les principes et valeurs de la République française',
    icon: ScaleIcon,
    color: 'from-blue-700 to-blue-800',
  },
  {
    id: 'institutions',
    name: 'Institutions',
    description: 'Les institutions de la République française',
    icon: BuildingLibraryIcon,
    color: 'from-indigo-700 to-indigo-800',
  },
  {
    id: 'histoire-geo-culture',
    name: 'Histoire, Géographie et Culture',
    description: 'L\'histoire, la géographie et la culture de la France',
    icon: BookOpenIcon,
    color: 'from-amber-700 to-amber-800',
  },
  {
    id: 'vie-quotidienne',
    name: 'Vie quotidienne',
    description: 'La vie quotidienne en France',
    icon: HomeIcon,
    color: 'from-cyan-700 to-cyan-800',
  },
];
