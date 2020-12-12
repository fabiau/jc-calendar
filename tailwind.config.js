module.exports = {
  darkMode: 'class',
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'negative-md':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  variants: {
    extend: {
      translate: ['motion-safe'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
