/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E31B23',
          'red-dark': '#C41219',
          'red-light': '#FF4D55',
          gold: '#F5B400',
          'gold-light': '#FFD159',
          dark: '#111111',
          surface: '#1A1A1A',
          card: '#222222',
          border: '#333333',
          'warm-white': '#FFFDF8',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(227, 27, 35, 0.45)',
        'glow-gold': '0 0 25px rgba(245, 180, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
