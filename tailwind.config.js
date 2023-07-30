/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#131220',
        secondary:{
            100: '#1C1A2E',
            200: '#014F62',
            300: '#62A6AF',
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