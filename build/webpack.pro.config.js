const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },

        {
            test: /.less$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
            // use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
            test: /\.(scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 10
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist/'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css'
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
})