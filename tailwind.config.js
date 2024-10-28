/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        login:{
          'bgc':'#1E1E1E',
          'btn':'#464DB1',
          'border':'#000000',

        }
        
      },
      fontFamilyb: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Thay đổi font sans-serif mặc định
        serif: ['Merriweather', 'serif'], // Thay đổi font serif
        custom: ['CustomFont', 'sans-serif'], // Thêm font tùy chỉnh
      },
      spacing :{
        'px':'1px'
      }
    },
    // colors:{
    //   "blue":"#464DB1"
    // }
   
  },
  plugins: [],
}