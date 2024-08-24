/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['roboto', 'sans-serif'],
      },
      colors: {
        dashboardBlue: '#7FA1C3',
        dashboardDeepBlue: '#6482AD',
        dashboardPink: '#F5EDED',
        dashboardKhakiLight:'#E2DAD6'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]

}

