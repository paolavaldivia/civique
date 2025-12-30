import { ThemeInfo } from '@/types';

export const themes: ThemeInfo[] = [
  {
    id: 'principes-valeurs',
    name: 'Principes et valeurs',
    description: 'Les principes et valeurs de la République française',
    icon: 'scales', // Icon placeholder: scales of justice
    color: 'from-blue-700 to-blue-800',
  },
  {
    id: 'institutions',
    name: 'Institutions',
    description: 'Les institutions de la République française',
    icon: 'building', // Icon placeholder: government building/columns
    color: 'from-indigo-700 to-indigo-800',
  },
  {
    id: 'symboles',
    name: 'Symboles',
    description: 'Les symboles de la République française',
    icon: 'flag', // Icon placeholder: flag
    color: 'from-red-700 to-red-800',
  },
  {
    id: 'histoire',
    name: 'Histoire',
    description: 'L\'histoire de France et de la République',
    icon: 'book-open', // Icon placeholder: open book
    color: 'from-amber-700 to-amber-800',
  },
  {
    id: 'geographie',
    name: 'Géographie',
    description: 'La géographie de la France',
    icon: 'map', // Icon placeholder: map
    color: 'from-teal-700 to-teal-800',
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'La culture française',
    icon: 'palette', // Icon placeholder: artist palette
    color: 'from-rose-700 to-rose-800',
  },
  {
    id: 'vie-quotidienne',
    name: 'Vie quotidienne',
    description: 'La vie quotidienne en France',
    icon: 'home', // Icon placeholder: house/home
    color: 'from-cyan-700 to-cyan-800',
  },
];
