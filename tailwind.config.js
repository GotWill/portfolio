/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': '#2e313e',
        'secondary': '#222222',
        'about': '#2a2a2a',
        'btn1': '#8257e5',
        'btn1-hover': '#633bbc',
        'cards': '#2f2f2f',
        'services-icon': 'rgba(255, 255, 255, 0.1)'
      },

      colors: {
        'primary':'#8257e5',
        'secondary': '#b0aac0'
      },
      borderColor: {
        'primary': '#8257e5',
        'secondary': '#474747',
      },

      transformOrigin: {
        'cards-services': 'transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      },
      screens: {
        'md-mobile': {
          'max': '768px',
        },
        'md-note': {
          'max': '1050px',
        },
        
      }
    },
  },
  plugins: [],
}
