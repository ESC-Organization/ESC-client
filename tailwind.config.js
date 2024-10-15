/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        40: '9rem',
      },
      screens: {
        '500px': '500px',
      },
      boxShadow: {
        strong: '10px 60px 200px rgba(0, 0, 0, 0.9)',
      },
    },
    fontFamily: {
      sans: ['DNFBitBitv2', 'sans-serif'],
    },
  },
  plugins: [],
};
