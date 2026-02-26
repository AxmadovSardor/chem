/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nucleophile: '#4ea8ff',
        electrophile: '#f55555',
        addition: '#3ecf8e',
        substitution: '#ff9f43'
      }
    }
  },
  plugins: []
};
