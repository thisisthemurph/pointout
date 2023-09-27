/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      keyframes: {
        splash1: {
          '0%': {transform: 'translateX(-100vw)'},
          '50%': {transform: 'translateX(0)'},
        },
        splash2: {
          '0%': {transform: 'translateX(100vw)'},
          '100%': {transform: 'translateX(0)'},
        }
      },
      animation: {
        splash1: 'splash1 1s ease-in-out',
        splash2: 'splash2 1s ease-in-out'
      }
    },
  },
  plugins: [],
}

