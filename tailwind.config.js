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
        'chatbar-chat-highlighted': themeColors['chatbar-chat-highlighted'],
        'sidebar-folder-highlighted': themeColors['sidebar-folder-highlighted'],
        'chatbar-settings-item-highlighted': colors.gray[500],
        'promptbar-prompt-highlighted':
          themeColors['promptbar-prompt-highlighted'],
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
