/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.55rem',
    },
  
      spacing: {
        '62': '15.75rem',
      },
    },
},
  plugins: [],
}

