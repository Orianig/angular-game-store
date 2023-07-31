/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary:'#202334',
        secondary:{
            100: '#1C1A2E',
            200: '#78ae15',
            300: '#a9ba86',
        }
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
    },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}