const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: false,
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/reactDemo/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 3,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    maxSize: 500 * 1024,
                    priority: 0,
                },
                antd: {
                    name: "antd",
                    test: /[\\/]antd[\\/]/,
                    maxSize: 500 * 1024,
                    priority: 10,
                }
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                preset: ["default", { discardComments: { removeAll: true } }],
            },
            canPrint: true,
        }),
        // new CompressionPlugin({
        //     algorithm: "gzip",
        // })
    ],
});
