const DIRECTORIES = [
  'app',
  'components',
]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: DIRECTORIES.map(directory => `./${directory}/**/*.{js,jsx,ts,tsx}`),
  theme: {
    extend: {},
  },
  plugins: [],
}

