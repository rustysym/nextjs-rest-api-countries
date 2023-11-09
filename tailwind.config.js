/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue-elements": "hsl(209, 23%, 22%)",
        "dark-blue-background": "hsl(207, 26%, 17%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-gray-input": "hsl(0, 0%, 52%)",
        "light-background": "hsl(0, 0%, 98%)",
        "elements-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
