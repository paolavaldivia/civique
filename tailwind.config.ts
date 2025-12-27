import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-france': '#000091',
        'red-france': '#e1000f',
        'white-france': '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config;
