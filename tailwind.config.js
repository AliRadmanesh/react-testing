/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
  plugins: [],
  prefix: 'tw-',
};
