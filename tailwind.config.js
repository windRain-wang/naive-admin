const colors = require('tailwindcss/colors');

// function withOpacity(variableName) {
//   return ({ opacity: opacityValue}) => {
//     if (opacityValue) {
//       return `rgba(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   }
// }

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        lime: colors.lime,
        rose: colors.rose,
        orange: colors.orange
      }
    },
    backgroundColor: {
      base: 'var(--color-base)',
      'off-base': 'var(--color-off-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secoqndary)',
      muted: 'var(--color-muted)'
    },
    textColor: {
      base: 'var(--color-text-base)',
      muted: 'var(--color-text-muted)',
      'muted-hover': 'var(--color-text-muted',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
