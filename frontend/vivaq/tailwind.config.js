const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //  colors: {
    //   // Build your palette her
    // },
    extend: {},
  },

  
  variants: {
    extend: {},
  },
  plugins: [],
}
