/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      ...colors,
      'primary': {
        600: '#B8E2E6',
        700: '#66C4CC',
        800: '#2E9099',
        900: '#00656E',
      },
      'secondary': {
        600: '#E5E6E5',
        700: '#CCCCCC',
        800: '#999999',
        900: '#666666',
      },
      'danger': {
        600: '#FFCCD8',
        700: '#FA7D9A',
        800: '#E64564',
        900: '#D30030',
      },
      'warning': {
        600: '#FFF6CD',
        700: '#FFE780',
        800: '#FFDC4D',
        900: '#FFC000',
      },
      'success': {
        600: '#B7E5C4',
        700: '#66CC83',
        800: '#2E994D',
        900: '#337D4C',
      },
      'info': {
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
      'raleway': ['Raleway', 'sans-serif']
    }
  }
}
