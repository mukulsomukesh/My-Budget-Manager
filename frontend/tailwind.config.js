module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbfbfe',
          100:"#f5f4ff",
          200:"#dfe4fb",
          300:"#8e9ef4",
          400:"#768bfa",
        },
        glowing_red:{
          50:"#ffdbd5",
          100:"#ff9d91"
        },
        glowing_green:{
          50:"#e3fad6",
          100:"#96dc8d"
        },
        glowing_blue:{
          50:"#d0e8fa",
          100:"#85d7e6"
        },
        50: '#f9d9a2',
        100: '#f2b36f',
      },
      glowing_yellow: {
        50: '#fff6d7', 
        100: '#ffe47c',
      },
    },
  },
  plugins: [],
};

