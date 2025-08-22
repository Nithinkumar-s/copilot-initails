/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#b3d3ff',
          300: '#80b6ff',
          400: '#4d9aff',
          500: '#1d7fff',
          600: '#0d63d6',
          700: '#0a4ea8',
          800: '#0e417f',
          900: '#0f3766',
        },
        navy: {
          900: '#052c57',
          800: '#06386d',
          700: '#07407b'
        },
        accent: {
          yellow: '#f9d249'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
