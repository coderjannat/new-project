module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./component/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-img': "url(images/HeroHeader.png)",
        'cata-1' : "url(images/cata1.png)",
        'cata-2' : "url(images/cata2.png)",
        'cata-3' : "url(images/cata3.png)",
        'cata-4' : "url(images/cata4.png)",
      }),
    },
  },
  plugins: [],
}