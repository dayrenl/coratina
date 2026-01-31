/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        olive: {
          deep: '#3D5A3C',
          golden: '#9B8B4F',
          light: '#A8B89F',
        },
        terracotta: {
          DEFAULT: '#C47B5C',
          light: '#D99B84',
        },
        stone: {
          DEFAULT: '#D4CFC4',
          dark: '#A8A39A',
        },
        cream: '#F5F1E8',
        charcoal: '#2B2B2B',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Crimson Pro', 'serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      clipPath: {
        hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      },
    },
  },
  plugins: [],
}
