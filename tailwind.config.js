const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kalameh: ['kalameh'],
      yekan: ['IRANYekan'],
    },
    extend: {
      screens: {
        '3xl': '1920',
      },
      width: {
        100: '25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
};
