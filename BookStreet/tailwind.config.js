// import daisyui from 'daisyui';
import { Flowbite } from 'flowbite-react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  // plugins: [daisyui]
  plugins: [Flowbite],
}

