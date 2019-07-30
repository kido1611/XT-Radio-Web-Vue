var webpack = require('webpack');
module.exports = {
  productionSourceMap: false,
  pwa: {
    themeColor: '#F68C1E',
    workboxOptions: {
      skipWaiting: true
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /id/)
    ]
  }
}