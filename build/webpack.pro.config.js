const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const SwRegisterWebpackPlugin = require('sw-register-webpack-plugin')

const publicPath = process.env.stage === 'github' ? '/reactDemo/' : 'https://files.zhiqiuge.com/website/react/'
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 10,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'async',
      // minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 3,
      maxInitialRequests: 3,
      // name: true,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          // maxSize: 500 * 1024,
          priority: 0,
        },
        antd: {
          name: 'antd',
          test: /[\\/]antd[\\/]/,
          // maxSize: 500 * 1024,
          priority: 10,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      directoryIndex: './dist', // 缓存的目录
      // globPatterns: ['**/*.{html,js,css}'], //缓存的静态文件类型, 可以是html，js，css等
      swDest: path.join(__dirname, '../dist/sw.js'), // sw生成后路径
      clientsClaim: true, // sw立即接管网页
      skipWaiting: true, // 新旧sw更新等待
    }),
    new SwRegisterWebpackPlugin({
      filePath: path.resolve(__dirname, '../src/sw-register.js'),
      // filePath 文件路径
      // prefix 文件前缀，解决cdn路径问题
      // output sw-register输出文件
      // excludes 排除某些不需要sw的页面
    }),
    // new CompressionPlugin({
    //     algorithm: "gzip",
    // })
  ],
})
