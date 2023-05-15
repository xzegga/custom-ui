/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin.cjs')],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: {
          main: '#00a0af',
          100: '#cdfffd',
          200: '#a1fffe',
          300: '#60feff',
          400: '#18f2f8',
          500: '#00d5de',
          600: '#00a0af',
          700: '#088696',
          800: '#106b7a',
          900: '#125967',
        },
        secondary: {
          main: '#666666',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
        danger: {
          main: '#d30030',
          100: '#ffe1e3',
          200: '#ffc8ce',
          300: '#ff9ba6',
          400: '#ff6378',
          500: '#ff2c4e',
          600: '#f60838',
          700: '#d30030',
          800: '#ae032f',
          900: '#940730',
        },
        warning: {
          main: '#ffc000',
          100: '#fffbc5',
          200: '#fff885',
          300: '#ffee46',
          400: '#ffdf1b',
          500: '#ffc000',
          600: '#e29400',
          700: '#bb6902',
          800: '#985108',
          900: '#7c420b',
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
  },
  safelist: [
    'bg-primary',
    {
      pattern:
        /bg-(primary|secondary|danger|warning|success|info)-(main|600|500)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
};
