/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    colors: {
      accent: '#7c94f4',
      'accent-lighter': 'rgb(177,190,238)',
      'accent-lighter-hover' : 'rgb(167,179,224)',
      'hover-accent' : '#5676f6',
      'accent-transparent': 'rgba(100, 128, 242, .3)',
       background: '#e7eeee',
      'border-color' : 'rgba(162,162,162,0.4)',
      'border-color-lighter' : 'rgba(187,186,186,0.4)',
      'text-color': 'rgba(19,26,27,0.75)',
      'secondary-text-color' : 'rgba(108,117,125,0.7)',
      'primary-button': '#6480f2',
      'secondary-button': '#f3f6f7',
       red: '#f00',
       gray: '#ccc',
       'gray-darker' : '#bbbaba',
       white: '#fff',
       'white-darker' : '#efefef',
       black: '#222',
       transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
}

