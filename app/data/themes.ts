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
    id: 'symboles',
    name: 'Symboles',
    description: 'Les symboles de la République française',
    icon: FlagIcon,
    color: 'from-red-700 to-red-800',
  },
  {
    id: 'histoire',
    name: 'Histoire',
    description: 'L\'histoire de France et de la République',
    icon: BookOpenIcon,
    color: 'from-amber-700 to-amber-800',
  },
  {
    id: 'geographie',
    name: 'Géographie',
    description: 'La géographie de la France',
    icon: MapIcon,
    color: 'from-teal-700 to-teal-800',
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'La culture française',
    icon: PaintBrushIcon,
    color: 'from-rose-700 to-rose-800',
  },
  {
    id: 'vie-quotidienne',
    name: 'Vie quotidienne',
    description: 'La vie quotidienne en France',
    icon: HomeIcon,
    color: 'from-cyan-700 to-cyan-800',
  },
];
