/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#f97316',
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

src/app/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
}

body {
  background-color: black;
  color: white;
  -webkit-font-smoothing: antialiased;
}
