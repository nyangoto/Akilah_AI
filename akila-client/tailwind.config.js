/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-white-color': '#fff',
        'secondary-color': '#1198f5',
        'light-color': '#2E323A',
        'dark-color': '#282c34',
        'icon-color': '#89c24a',
        'input-backcolor': '#DFE8F1',
        'post-text-color': '#f0f8ff',
        'reaction-icons-color': '#545a5f',
        'background-color': ' #f3f2ef',
        'icon-hover-bg': '#E1EEF6',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.1s ease-in',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
