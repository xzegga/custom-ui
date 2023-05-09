/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      ...colors,
      'teal': {
        100: '#E6F6F7',
        300: '#66C4CC',      
        600: '#00A0AF',
        700: '#2E7899',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif']
    }
  }
}
