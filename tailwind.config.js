const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      coolgray: colors.coolGray,
      gray: colors.warmGray,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      'eaglestack-black': '#151A1E',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
