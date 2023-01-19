const { maxWidth } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend:{
    screens:{
      'ssm':'990px'
    }
   }
  },
  plugins: [],
}
