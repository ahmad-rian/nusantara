/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', 
        secondary: '#15803D', 
        accent: '#B45309', 
        danger: '#DC2626',
      },
      fontFamily: {
        javanese: ['Noto Sans Javanese', 'serif'],
      },
    },
  },
  plugins: [],
}