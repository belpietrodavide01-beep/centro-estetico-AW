/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Aggiungi qui i keyframes dei componenti React Bits
        // Esempio:
        // fadeIn: {
        //   '0%': { opacity: '0' },
        //   '100%': { opacity: '1' },
        // },
      },
      animation: {
        // Aggiungi qui le animazioni custom dei componenti React Bits
        // Esempio:
        // 'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
