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
        chat: themeColors.chat,
        'chat-input-generate-button': themeColors['chat-input-generate-button'],
        'chat-input-generate-button-working':
          themeColors['chat-input-generate-button-working'],
        'chat-input-plugin-select': themeColors['chat-input-plugin-select'],
        'chat-message-assistant': themeColors['chat-message-assistant'],
        'chat-message-user': themeColors['chat-message-user'],
        'chatbar-chat-highlighted': colors.indigo[800],
        'sidebar-button': colors.neutral[400],
        'sidebar-folder-highlighted': colors.indigo[800],
        'chatbar-settings-item-highlighted': colors.gray[500],
        'promptbar-prompt-highlighted': colors.indigo[800],
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
