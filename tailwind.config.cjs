/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        lightYellow: '#F9C503',
        darkYellow: '#F49805',
        darkGray: '#262626',
        lightGray: '#BABABA'
      },
      colors: {
        darkGray: '#262626',
        lightGray: '#BABABA',
        lightYellow: '#F9C503'
      },
      animation: {
        active: 'active .3s ease-in-out'
      },
      keyframes: {
        active: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1)' }
        }
      }
    },
    screens: {
      // Mid large
      ml: '1170px'
    }
  },
  plugins: []
}
