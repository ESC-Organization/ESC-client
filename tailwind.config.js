/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        40: '9rem',
      },
      screens: {
        '500px': '500px',
      },
      keyframes: {
        'rotate-axis': {
          '0%': { transform: 'perspective(800px) rotateY(0deg)' },
          '100%': { transform: 'perspective(800px) rotateY(360deg)' },
        },
      },
      animation: {
        'rotate-axis': 'rotate-axis 1.8s linear infinite',
      },
    },
    fontFamily: {
      sans: ['DNFBitBitv2', 'sans-serif'],
      sans: ['DNFBitBitv2', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  plugins: [require('tailwind-scrollbar-hide')],
};
