const target = 'http://127.0.0.1:3000';

module.exports = {
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
}