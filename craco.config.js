const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins:[
    {plugin: CracoLessPlugin}
  ],
  webpack: {
    alias: {
      '@': resolve('./src'),
      componerts: resolve('src/components')
    }
  }
}

/*
    day1.1 配置路径别名@
        下载craco插件
            npm install @craco/craco@alpha -D
        根目录建立craco.config.js文件并加入上述代码
        在tsconfig.json中配置baseURL和paths用来告诉ts路径转换
        在package.json中的scripts属性中更改为用craco启动
 */
