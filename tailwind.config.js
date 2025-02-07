/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        500: "500px",
        1440: '1440px',
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        medium: 500,
        semibold: 600,
      },
      lineHeight: {
        '24': '24px',
        '52':'52px',
        '30':'30px',
        '48':'48px',
        '36':'36px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
