/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'agrandir': ['Agrandir', 'sans-serif'],
      },
      colors: {
        'brand-beige': '#F0EBE3',
        'brand-orange': '#FF6B00',
        'brand-black': '#1A1A1A',
      },
      fontWeight: {
        '100': '100',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '900': '900',
      },
    },
  },
  plugins: [],
}