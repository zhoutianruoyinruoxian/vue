const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'), //文件将输出到指定目录下
    publicPath: '/dist/', //静态资源输出位置
    filename: '[name].js', //打包后文件的名字
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), //用于每次构建前清理/dist文件
    new ExtractTextPlugin({//分离css文件
      filename: '/static/css/[name].css',
    }),
    new HtmlWebpackPlugin({//插件地址https://github.com/jantimon/html-webpack-plugin#configuration
      title: '我的VUE',
      filename: 'index.html',
      template: 'index.html', //html文件所在位置（带查证）
      favicon: path.resolve(__dirname, './src/assets/logo.png'), //将给定的图标路径添加到输出html
      inject: true, //将true | 'head' | 'body' | false所有资产注入给定的template或templateContent- 当通过true或'body'所有JavaScript资源将被放置在body元素的底部时。'head'将脚本放在头元素中。
      minify: {//输出最小化
        removeComments: true, //剥离HTML注释
        collapseWhitespace: true, //折叠对文档树中的文本节点有贡献的空白空间
        removeAttributeQuotes: true, //尽可能删除属性的引号
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
    new webpack.HotModuleReplacementPlugin(), //模块热替换（运行时更新各种模块，而无需进行完全刷新）
  ],
  resolve: {//模块路径
    extensions: ['.js', '.jsx', '.vue', '.json'], //此选项告诉解析器在解析中能够接受哪些扩展名
    alias: {//创建一个别名
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  devServer: {//https://www.webpackjs.com/configuration/dev-server/
    contentBase: path.join(__dirname, 'dist'), //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    hot: true, //模块热替换,请注意，需要webpack.HotModuleReplacementPlugin才能完全启用HMR。 如果使用--hot选项启动webpack或webpack-dev-server，则会自动添加此插件，
    port: 8080,
    noInfo: true,
    overlay: false, //false将会把变异的错误满屏显示在浏览器上
    compres: true, //是否压缩（gzip）
    clientLogLevel: 'none', //在开发工具(DevTools)的控制台(console)是否显示消息
    lazy: false, //是否开启惰性模式
    filename: 'bundle.js', //在惰性模式中，此选项可减少编译。 默认在惰性模式，每个请求结果都会产生全新的编译。使用 filename，可以只在某个文件被请求时编译
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html(任意的 404 响应都可能需要被替代为 index.html.)
    disableHostCheck: false, //设置为true时，此选项会绕过主机检查。 不建议这样做，因为不检查主机的应用程序容易受到DNS重新绑定攻击。
    headers: {//在所有响应中添加首部内容
      'X-Custom-Foo': 'bar',
    },
    allowedHost: [ //host白名单
      'aa.com', // 允许所有aa.com子域通过
    ],
    before(app) { //服务器内部的所有其他中间件之前执行的自定义中间件
      app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
      });
    },
    after(app) { //middleware 服务器内部的所有其他中间件之后执行的自定义中间件

    },
  },
  performance: {
    hints: false,
  },
  devtool: 'eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}

