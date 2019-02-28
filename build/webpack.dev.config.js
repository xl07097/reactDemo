const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader','postcss-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use:['style-loader','css-loader','sass-loader','postcss-loader']
            }
        ]
    },
    devServer:{
        port: '9000',
        open: true,
        hot: true
    }
})
