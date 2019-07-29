const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/main.js")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /^node_modules$/
            },
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10240,
                        name: path.posix.join("static", "img/[name].[hash:8].[ext]")
                    }
                }]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: path.posix.join("static", "fonts/[name].[hash:8].[ext]")
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "创客",
            filename: path.resolve(__dirname, "../dist/index.html"),
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js",".jsx",".ts",".tsx", ".json"]
    }
}