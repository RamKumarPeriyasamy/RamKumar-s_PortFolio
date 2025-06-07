/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7cc5fb',
          400: '#36a3f5',
          500: '#0c87e0',
          600: '#0068bf',
          700: '#00529a',
          800: '#03457f',
          900: '#073a6b',
          950: '#05244d',
        },
        secondary: {
          50: '#f0f9f9',
          100: '#dcf3f3',
          200: '#bfe8e9',
          300: '#91d8d9',
          400: '#5bbfc2',
          500: '#38a2a5',
          600: '#2d8386',
          700: '#27686c',
          800: '#245559',
          900: '#21474a',
          950: '#0f2c2e',
        },
        accent: {
          50: '#fff7ed',
          100: '#feecd3',
          200: '#fdd8a7',
          300: '#fbbc70',
          400: '#f99639',
          500: '#f67415',
          600: '#e65909',
          700: '#bf400b',
          800: '#993310',
          900: '#7c2d10',
          950: '#43130a',
        },
        success: {
          50: '#edfcf4',
          100: '#d3f8e2',
          200: '#aaeeca',
          300: '#73e0ab',
          400: '#39c785',
          500: '#16ad69',
          600: '#0c8b53',
          700: '#0c6f45',
          800: '#0e5838',
          900: '#0c482f',
          950: '#04291b',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef4c7',
          200: '#fee989',
          300: '#fed54a',
          400: '#fdc01d',
          500: '#f79a09',
          600: '#db7106',
          700: '#b74c09',
          800: '#943c0f',
          900: '#7a3310',
          950: '#431806',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2c2c2c',
          600: '#232323',
          700: '#1a1a1a',
          800: '#121212',
          900: '#090909',
        },
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      }
    },
  },
  plugins: [],
};