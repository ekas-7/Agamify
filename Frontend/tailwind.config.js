/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      fontFamily: {
        jura: ['var(--font-jura)', 'sans-serif'],
        fustat: ['var(--font-fustat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true
  }
}