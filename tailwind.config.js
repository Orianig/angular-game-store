/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#9DB2BF',
        secondary:{
          100: '#FAF2F4',
          200: '#DDE6ED',
        }
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
    },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}