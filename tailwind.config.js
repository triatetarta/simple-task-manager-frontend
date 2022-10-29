/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#a855f6',
        'primary-main': 'rgba(168, 85, 247, 0.28)',
        'primary-dark': 'rgba(168, 85, 247, 0.28)',
        'background-paper': '#151515',
        'background-default': 'rgba(0, 0, 0, 0.96)',
        'nice-gray': 'rgba(255, 255, 255, 0.12);',
        'alert-dark': '#f44336',
        'alert-light': '#e57373',
        'warning-light': '#ffb74d',
        'warning-deep': '#ffa726',
        'warning-text': '#ffe2b7',
        'warning-bg': '#191207',
        'success-light': '#81c784',
        'success-bg': '#0c130d',
        'success-deep': '#66BB72',
        'success-text': '#cce8cd',
        'info-light': '#4fc3f7',
        'error-bg': '#160B0B',
        'error-text': '#f4c7c7',
      },
    },
  },
  plugins: [],
};
