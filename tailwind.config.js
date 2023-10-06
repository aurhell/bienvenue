/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        marker: ['Permanent Marker', 'cursive'],
        handwrite: ['Nanum Pen Script', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: '#fbbf24',
          hover: '#facc15',
          active: '#fde68a',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
    },
  },
}
