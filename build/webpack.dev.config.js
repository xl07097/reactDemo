const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(base, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerPort: 8881,
    }),
  ],
  devServer: {
    port: "9000",
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/note": {
        target: "https://note.zhiqiuge.com",
        changeOrigin: true,
        pathRewrite: {
          "/note": "",
        },
      },
    },
  },
});
