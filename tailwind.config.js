 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#0f766e',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}