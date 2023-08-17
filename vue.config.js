module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave: true
  // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。
  // 默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
}