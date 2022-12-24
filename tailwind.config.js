/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        lightDarkGray: 'hsl(200, 15%, 8%)',
        lightBG: 'hsl(0, 0%, 98%)',
        neutral: 'hsl(0, 0%, 100%)',
        darkBlue: 'hsl(209, 23%, 22%)',
        darkBlueBg: 'hsl(207, 26%, 17%)',
        darkBlueText: 'hsl(200, 15%, 8%)'
      }
    },
    screens: {
      'sm':'768px',
      'md': "992px",
      'lg': "1024px",
      'xl': '1200px'
    }
    
  },
  plugins: [],
}
