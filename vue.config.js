const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');


module.exports = {
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  },
  devServer: {
    open: true,
    port: 8866,
    // proxy: ''
  }
};