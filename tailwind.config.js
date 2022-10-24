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
      },
    },
  },
  plugins: [],
};
