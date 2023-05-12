/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  // plugins: [require('tw-elements/dist/plugin.cjs')],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      ...colors,
      primary: {
        50: '#f0fbfb',
        100: '#d9f3f4',
        200: '#b7e8ea',
        300: '#85d6db',
        400: '#66c4cc',
        500: '#319ea9',
        600: '#2b808f',
        700: '#296975',
        800: '#295761',
        900: '#264953',
        950: '#143038',
      },
      secondary: {
        600: '#E5E6E5',
        700: '#CCCCCC',
        800: '#999999',
        900: '#666666',
      },
      danger: {
        50: '#ffefef',
        100: '#ffdcdc',
        200: '#ffbfbf',
        300: '#ff9292',
        400: '#ff5454',
        500: '#ff1f1f',
        600: '#ff0000',
        700: '#db0000',
        800: '#af0000',
        900: '#940808',
        950: '#520000',
      },
      warning: {
        600: '#FFF6CD',
        700: '#FFE780',
        800: '#FFDC4D',
        900: '#FFC000',
      },
      success: {
        600: '#B7E5C4',
        700: '#66CC83',
        800: '#2E994D',
        900: '#337D4C',
      },
      info: {
        600: '#B8D7E6',
        700: '#66ACCC',
        800: '#2E7899',
        900: '#154D66',
      },
      'gray-scale': {
        600: '#aaaaaa',
        700: '#888888',
        800: '#444444',
        900: '#000000',
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  safelist: [
    'bg-primary',
    {
      pattern: /bg-(primary|secondary|danger|warning|success|info)-(400|700)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
};
