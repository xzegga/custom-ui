/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
      extend: {
        spacing: {
          13: '3.25rem',
          15: '3.75rem',
          128: '32rem',
          144: '36rem',
        },
        fontFamily: {
          'raleway': ['Raleway', 'sans-serif']
        }
      },
    },
  },
  plugins: [require("daisyui")],
};
