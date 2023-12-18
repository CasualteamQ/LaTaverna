/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    extend: {},
    fontFamily:{
      'avenger':['AVENGER'],
      'mangal':['manga'],
    },
    
    textShadow: ({ theme }) => ({
      ...theme('textShadowing'),
  }),
    textShadowing:{
     'text-shadow': ['2px 5px 8px rgba(17, 17, 17, 0.822)'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
