const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary:{
          100: '#e2e2d5',
          200: '#888883',
          300: '#0477be', 
          400: '#86badd',
          500: '#e52819',
          600: '#f1978d'
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

