const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')
const WebpackDayjsPlugin = require('antd-dayjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /^node_modules$/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /^node_modules$/,
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset',
        generator: {
          filename: 'images/[contenthash:8][ext]',
          // publicPath: path.posix.join('static', 'img'),
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[contenthash:8][ext]',
          // publicPath: path.posix.join('static', 'fonts'),
        },
      },
    ],
  },
  plugins: [
    new WebpackDayjsPlugin(),
    new HtmlWebpackPlugin({
      title: '创客',
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new SpritesmithPlugin({
      // 目标小图标
      src: {
        //下面的路径，根据自己的实际路径配置
        cwd: path.resolve(__dirname, '../src/assets/icons'),
        glob: '*.png',
      },
      // 输出雪碧图文件及样式文件
      target: {
        //下面的路径，根据自己的实际路径配置
        image: path.resolve(__dirname, '../public/sprites/sprite.png'),
        css: path.resolve(__dirname, '../public/sprites/sprite.css'),
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
        // 这个路径根据自己页面配置
        cssImageRef: './sprite.png',
      },
      spritesmithOptions: {
        algorithm: 'top-down',
        padding: 4,
      },
    }),
    new SpritesmithPlugin({
      // 目标小图标
      src: {
        //下面的路径，根据自己的实际路径配置
        cwd: path.resolve(__dirname, '../src/assets/flags'),
        glob: '*.png',
      },
      // 输出雪碧图文件及样式文件
      target: {
        //下面的路径，根据自己的实际路径配置
        image: path.resolve(__dirname, '../public/sprites/flags.png'),
        css: path.resolve(__dirname, '../public/sprites/flags.css'),
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
        // 这个路径根据自己页面配置
        cssImageRef: './flags.png',
      },
      spritesmithOptions: {
        algorithm: 'top-down',
        padding: 4,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.stage': JSON.stringify(process.env.stage),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
}
