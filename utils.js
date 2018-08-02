'use strict'
// 主要用于生成css loader和style loader的一些方法
// const path = require('path')
// const config = require('../config')
// 提取特定文件的插件，比如把css文件提取到一个文件中去
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 加载package.json文件
// const packageConfig = require('../package.json')
// 生成编译输出的二级目录
// exports.assetsPath = function (_path) {
//   const assetsSubDirectory = process.env.NODE_ENV === 'production'
//     ? config.build.assetsSubDirectory
//     : config.dev.assetsSubDirectory
//   // path.posix是path模块跨平台的实现（不同平台的路径表示是不一样的）
//   return path.posix.join(assetsSubDirectory, _path)
// }
// 为不同的css预处理器提供一个统一的生成方式，也就是统一处理各种css类型的打包问题。
exports.cssLoaders = function (options) {
  options = options || {}
  // 打包css模块
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
 // 编译postcss模块
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
// 创建loader加载器字符串，结合extract text插件使用
  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
     // 通过usePostCSS 来标明是否使用了postcss
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        // loader加载器的名称
        loader: loader + '-loader',
        // 对应的加载器的配置对象
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
     // 如果明确指定了需要提取静态文件，则使用
    // ExtractTextPlugin.extract({})来包裹我们的各种css处理器。
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        // fallback这个选项我们可以这样理解
        // webpack默认会按照loaders中的加载器从右向左调用编译各种css类型文件。如果一切顺利，在loaders中的
        // 各个加载器运行结束之后就会把css文件导入到规定的文件中去，如果不顺利，则继续使用vue-style-loader来处理
        // css文件
        fallback: 'vue-style-loader'
      })
    } else {
      
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
//使用这个函数，为那些独立的style文件创建加载器配置
exports.styleLoaders = function (options) {
  const output = []
  // 获取所有css文件类型的loaders
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    // 生成对应的loader配置
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

// exports.createNotifierCallback = () => {
//     // node-notifier是一个跨平台的包，以类似浏览器的通知的形式展示信息。
//   const notifier = require('node-notifier')

//   return (severity, errors) => {
//      // 只展示错误的信息
//     if (severity !== 'error') return

//     const error = errors[0]
//     const filename = error.file && error.file.split('!').pop()
//     // 需要展示的错误信息的内容
//     notifier.notify({
//       title: packageConfig.name,
//       message: severity + ': ' + error.name,
//       subtitle: filename || '',
//       icon: path.join(__dirname, 'logo.png')
//     })
//   }
// }
