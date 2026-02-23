/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thriv-bg': '#0c0d10',
        'thriv-frame': '#111216',
        'thriv-blue': '#2563eb',
        'thriv-secondary': '#2d2e35',
        'thriv-text-sec': '#9499ad',
        'Primary-text': '#2663FF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
