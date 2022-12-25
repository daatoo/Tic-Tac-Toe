/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
    extend: {
      colors: {
        'LightBlue': '#31C3BD',
        'LightBlueHover': '#65E9E4',
        'LightYellow': '#F2B137',
        'LightYellowHover': '#FFC860',
        'DarkNavy': '#1A2A33',
        'SemiDarkNavy': '#1F3641',
        'Silver': '#A8BFC9',
        'SilverHover': '#DBE8ED',
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'],
      },
      screens: {
        'des': '1440px',
      },
      boxShadow: {
        'main': ' 0px 8px 0px  #10212A',
        'secondary': ' 0px 4px 0px #10212A',
      },
    },
  },
  plugins: [],
}
