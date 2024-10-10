/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       spacing: {
        '40': '9rem'
      },
    },
    fontFamily: {
      sans: ["DNFBitBitv2", "sans-serif"],
    },
  },
  plugins: [],
};
