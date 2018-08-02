'use strict'
const utils = require('./utils')
//判断是否为生产环境
const isProduction = process.env.NODE_ENV === 'production'
//判断sourceMap
const sourceMapEnabled = isProduction
  ? true
  : false

module.exports = {
  loaders: utils.cssLoaders({
    //是否生成sourceMap
    sourceMap: sourceMapEnabled,
    // 生产环境下就会把css文件抽取到一个独立的文件中
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
