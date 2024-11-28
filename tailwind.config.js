/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #331A15',
        secondary:'#D2B48C',
        dark: '#1B1A1A',
        dark2: '#5C5B5B',
        dark3:'#374151',
        dark4:'#3C393B',
        red1:'#EA4744',
        dark4:'rgba(27, 26, 26, 0.7)',
        light: '#F5F4F1'


      },
      backgroundImage: {
        'header-bg': "url('/src/assets/header.png')",
        'banner-bg': "url('/src/assets/banner.png')",
        
      },
      fontFamily: {
        rancho: "Rancho",
        raleway: "Raleway",
      }
    },
  },
  plugins: [require('daisyui'),],
}

