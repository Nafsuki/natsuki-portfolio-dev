const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
