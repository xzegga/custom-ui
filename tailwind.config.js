/** @type {import('tailwindcss').Config} */

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
      'primary': {
        main: '#2f3542',
        100: '#f8f9fa',
        200: '#e9ecef',
        300: '#dee2e6',
      },
      'secondary': '#5352ed',
      'danger': '#ff4757',
      'success': '#20bf6b',
      'warning': '#ff6348',
      'info': '#34e7e4',      
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  }
}
