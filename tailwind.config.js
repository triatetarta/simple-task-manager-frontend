/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': 'rgba(168, 85, 247, 0.80)',
        'primary-main': 'rgba(168, 85, 247, 0.28)',
        'primary-dark': 'rgba(168, 85, 247, 0.28)',
        'background-paper': '#151515',
        'background-default': 'rgba(0, 0, 0, 0.96)',
        'nice-gray': 'rgba(255, 255, 255, 0.12);',
        'alert-light': '#e57373',
        'warning-light': '#ffb74d',
        'success-light': '#81c784',
      },
    },
  },
  plugins: [],
};
