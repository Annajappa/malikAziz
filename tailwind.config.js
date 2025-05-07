/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'diagonal-slide': {
          '0%': { transform: 'translate(20%, -20%)', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '1' },
        },
      },
      animation: {
        'diagonal-slide': 'diagonal-slide 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

