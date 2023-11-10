/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      customClasses: {
        "neumorphismButton": 'rounded-lg bg-teal-900 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]',
      },
    },
  },
  plugins: [],
}