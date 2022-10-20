const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementUiResolver } = require('unplugin-vue-components/resolvers');
const url = 'https://api.apiopen.top'
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementUiResolver()]
      }),
      Components({
        resolvers: [ElementUiResolver()]
      })
    ]
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 全局变量路径
        path.resolve(__dirname, "./src/css/theme/index.less"),
      ],
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: "dist",
  // assetsDir:"static",
  indexPath:'index.html',
  devServer: {
    proxy: {
      "/api": {//代理标识，一般是每个接口前的相同部分
        target: url,// 这里写的是访问接口的域名和端口号
        changeOrigin:true,// 允许跨域请求
        ws: false,
        pathRewrite: { // 重写路径，替换请求地址中的指定路径
          '^/api': ''
        }
      }
    }
  }
})
