/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  theme: {
    extend: {
      colors:{
        shade1: '#41436A',
        shade2: '#984063',
        shade3: '#f64668',
        shade4: '#fe9677',
        // shade1: '#9a9cea',
        // shade2: '#a2b9ee',
        // shade3: '#a2dcee',
        // shade4: '#adeee2',
      },
      fontFamily:{
        Roboto: ['Roboto Flex', 'sans-serif'],
      },
      screens:{
        xs:'310px',
        sm:'640px',
        md:'1024px',
        lg:'1280px',
        xl:'1536px',
      }
    },
  },
  plugins: [],
}
