/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        mytaskp: '536px 611px'
      },
      backgroundImage: {
        "login1" : "url('./src/assets/login/back.png')",
        "login2" : "url('./src/assets/login/loginpic.png')",
        "register": "url('./src/assets/login/registerpic.png')",
        "uLastname": "url('./src/assets/icons/register/user-lastname.svg')",
      }
    },
   
  },
  plugins: [],
}

