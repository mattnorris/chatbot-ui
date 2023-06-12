/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const themeColors = require('./styles/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'chatbar-chat-highlighted': themeColors['chatbar-chat-highlighted'],
        'chatbar-folder-highlighted': themeColors['chatbar-folder-highlighted'],
        'chatbar-settings-item-highlighted': colors.gray[500],
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
