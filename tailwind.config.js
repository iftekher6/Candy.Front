/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ccbg: '#fdf7f1',
        cclev: '#d6b9cb',
        ccpink: '#f8c4ec',
        ccpurple: '#7d3261',
        cclgreen: '#d7f589',
        ccdgreen: '#4ba992',
        ccbblue: '#dcecff',
        ccdblue: '#c0d1f4',
      },
      screens: {
        hsm: '480px',
        hmd: '930px',
        hlg: '976px',
        hxl: '1440px',

        hhsm: '480px',
        hhmd: '888px',
        hhlg: '1080px',
        hhxl: '1440px',
    },
    fontFamily:{
      'aurora':['Aurora Regular','san-serif']
    }
    },
  },
  plugins: [],
}

