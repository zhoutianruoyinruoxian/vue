const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),//文件将输出到指定目录下
		publicPath: '/dist/',//静态资源输出位置
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),//用于每次构建钱清理/dist文件
		new ExtractTextPlugin({//分离css文件
			filename: '/static/css/[name].css'
		}),
		new HtmlWebpackPlugin({//插件地址https://github.com/jantimon/html-webpack-plugin#configuration
			title: '我的VUE',
			filename: 'index.html',
			template: 'index.html',
			favicon: path.resolve(__dirname, './src/assets/logo.png'),//将给定的图标路径添加到输出html
			inject: true,//将true | 'head' | 'body' | false所有资产注入给定的template或templateContent- 当通过true或'body'所有JavaScript资源将被放置在body元素的底部时。'head'将脚本放在头元素中。
			minify: {//输出最小化
				removeComments: true,//剥离HTML注释
				collapseWhitespace: true,//折叠对文档树中的文本节点有贡献的空白空间
				removeAttributeQuotes: true//尽可能删除属性的引号
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
		}),
    	new webpack.HotModuleReplacementPlugin()//模块热替换（运行时更新各种模块，而无需进行完全刷新）
	],
	resolve: {//模块路径
		extensions:['.js','.jsx','.vue','.json'],//此选项告诉解析器在解析中能够接受哪些扩展名
		alias: {//创建一个别名
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		port:8080,
		hot: true//模块热替换
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
