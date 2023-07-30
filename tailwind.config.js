/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#201E33',
        secondary:{
          100: '#585B78',
          200: '#25BDD7',
        }
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
    },
    },
  },
  plugins: [
  ],
}