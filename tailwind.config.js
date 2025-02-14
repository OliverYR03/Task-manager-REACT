/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        createtask: '600px 200px',
        mytaskp: '536px 611px',
        dashboard: '536px 466px'
      },
      backgroundImage: {
        "login1" : "url('./img/back.png')",
        "login2" : "url('./img/loginpic.png')",
        "register": "url('./img/registerpic.png')",
        "uLastname": "url('./img/user-lastname.svg')",
      }
    },
   
  },
  plugins: [],
}

