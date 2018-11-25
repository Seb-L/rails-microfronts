var ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new ManifestPlugin()
    ]
  }
}
