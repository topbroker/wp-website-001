const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './resources/views/**/*.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.serif],
        open: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '14px': '14px',
        '30px': '30px',
        '38px': '38px',
        '40px': '40px',
        '60px': '60px',
        '70px': '70px',
      },
      colors: {
        black: {
          1: '#1f1f21',
        },
        red: {
          1: '#f1525c',
          2: '#f06770',
        },
        gray: {
          1: '#f0f0f0',
          2: '#dedede',
          3: '#e4e4e4',
        },
        blue: {
          1: '#465bf2',
        },
        yellow: {
          1: '#f2d36b',
        },
        brown: {
          1: '#454142',
        },
      },
      fontSize: {
        '12px': '0.75rem',
        '13px': '0.812rem',
        '14px': '0.875rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '30px': '1.875rem',
        '40px': '2.5rem',
        '60px': '3.75rem',
      },
      minHeight: {
        '140px': '140px',
      },
      height: {
        '160px': '160px',
        '200px': '200px',
      },
      maxWidth: {
        '200px': '200px',
        '300px': '300px',
        '485px': '485px',
        '537px': '537px',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
}
