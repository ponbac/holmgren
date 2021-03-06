module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'house': "url('/images/house-bg.jpg')",
        'house-min': "url('/images/house-bg-min.jpg')",
       }),
       colors: {
         navy: '#001220',
       }
    }
  }
}
