/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        fadeOut: "fadeOut 0.5s ease-in-out forwards",
        slideDown: "slideDown .5s ease-in-out forwards",
      },
      
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
      'aurora':['Aurora Regular','san-serif'],
      // sans: ['Inter', 'Poppins', ...fontFamily.sans],
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    }
    },
  },
  plugins: ['@tailwindcss/typography'],
}

