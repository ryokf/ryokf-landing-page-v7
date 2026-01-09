/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        light: {
          DEFAULT: '#FFFFFF',
          100: '#F8F9FA',
          200: '#F0F2F5',
          300: '#E8EAED',
          400: '#D8DCE3',
          500: '#C8CDD4',
          600: '#A8B0B8',
          700: '#7E8590',
          800: '#545B6B',
          900: '#2C3142',
        },
        gray: {
          50: '#FAFBFC',
          100: '#F3F5F7',
          150: '#EEF1F5',
          200: '#E8ECEF',
          300: '#D8DCE3',
          400: '#C8CDD4',
          500: '#A8B0B8',
          600: '#8B92A1',
          700: '#5E6670',
          800: '#3C444F',
          900: '#1F2937',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};