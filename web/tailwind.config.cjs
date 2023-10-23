/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme
        'immich-primary': '#1565c0',
        'immich-bg': '#FAF9F6',
        'immich-fg': 'black',
        'immich-gray': '#F6F6F4',
        'immich-error': '#e57373',
        'immich-success': '#81c784',
        'immich-warning': '#ffb74d',

        // Dark Theme
        'immich-dark-primary': '#649fe3',
        'immich-dark-bg': '#1e1f22',
        'immich-dark-fg': '#e5e7eb',
        'immich-dark-gray': '#2b2d31',
        'immich-dark-error': '#d32f2f',
        'immich-dark-success': '#388e3c',
        'immich-dark-warning': '#f57c00',
      },
      fontFamily: {
        'immich-title': ['Snowburst One', 'cursive'],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
};
