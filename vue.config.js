module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave: true,
  // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。
  // 默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。

  // 配置代理服务器方式1：
  // devServer: {
  //   proxy: "http://localhost:5000"
  // }

  // 配置代理服务器方式2：
  devServer: {
    proxy: {
      '/api': {  // 请求前缀，控制是否走代理;前缀是紧跟端口号的 
        target: 'http://localhost:5000',  // 如果有请求前缀，那么请求的地址是target的地址
        pathRewrite: { '^/api': '' }, // 将/api换成空：让代理服务器拿到地址后，不带/api这部分
        ws: true,  // 用于支持webSocket
        changeOrigin: true // 默认true，决定服务器收到的端口号是多少；用于控制请求头中的host值
        // 为true时，代理服务器告诉服务器的端口号为5000，和服务器一致（说谎了，实际8080）
      },
      'api222': {
        target: 'http://localhost:5001',
        pathRewrite: { '/api222': '' }
      }
    }
  }
}