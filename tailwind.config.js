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
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6'
      },
      'secondary': {
        main: '#f1f2f6',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'success': {
        main: '#2ecc71',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'error': {
        main: '#e74c3c',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'warning': {
        main: '#f1c40f',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'info': {
        main: '#3498db',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'success': {
        main: '#2ecc71',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'error': {
        main: '#e74c3c',
        light: '#f8f9fa',
        dark: '#e9ecef',
        hover: '#dee2e6',
      },
      'gray': {
        main: '#4b6584',
        100: '#95afc0',
        200: '#a5b1c2',
        300: '#b2bec3',
        400: '#dfe4ea',
        500: '#f1f2f6',
      },
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
