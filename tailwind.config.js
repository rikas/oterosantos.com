/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'flex-col',
    'flex-row',
    {
      pattern: /^gap-/,
    },
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050708',
          800: '#0e1116',
          700: '#171b21',
        },
        github: '#181717',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
      },
      fontFamily: {
        wotfard: ['Wotfard', 'Wotfard-fallback', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
