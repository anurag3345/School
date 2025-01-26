/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont' : ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#96BB7C',
        danger: '#E74040',
        darkBg: '#2D4059',
        text: '#252B42',
        secondary: '#FFAB71',
        lightBg: '#FFFFFF',
        lightGray: '#FAFAFA',
        muted: '#BDBDBD',
        lightTextGray1: '#F5F5F5',
        fadedSecondary2: '#FFF2F3',
        secondText: '#737373',
        fadedPrimary: '#EFF8ED',
        alert: '#E77C40',
        secondary2: '#FF7171',
        success: '#2DC071',
        disabled: '#8EC2F2',
        fadedSecondary1: '#DDF4FF',
        hover: '#2A7CC7',
        lightGray2: '#ECECEC',
      }
    },
  },
  plugins: [],
}

