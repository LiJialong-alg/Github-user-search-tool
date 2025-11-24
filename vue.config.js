const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 当请求路径以 /api 开头时，代理到 http://localhost:3000
    proxy:
    {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,    // 修改 origin 为目标地址，通常需要
        secure: false,         // 如果目标是自签名证书，可设为 false
        ws: true,              // 代理 websocket
        pathRewrite: { '^/api': '' }, // 去掉前缀（可选）
        logLevel: 'debug'      // 调试用，生产可删
      },
      '/demo': {
        target: 'http://localhost:5001'
        ,
        pathRewrite: { '/demo': '' }
      }

    }
  }
})
