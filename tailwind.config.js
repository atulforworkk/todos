/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#F8FAFC",
        "orange-color": "#FA6D22",
        "header-color": "#C8DBE9",
        "green-color": "#15D500",
        "dark-blue-color": "#1f3f6f",
        "row-color": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
