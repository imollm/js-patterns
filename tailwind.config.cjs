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
        lightGray: '#BABABA',
        lightYellow: '#F9C503'
      }
    }
  },
  plugins: []
}
