module.exports = {
    outputDir:"dist",
    devServer: {
        port:8990,
        hotOnly: true
        // proxy: {
        //     '/api':{
        //         target: 'http://music.163.com',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api':""
        //         }
        //     }
        // }
    },
    css:{
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
                rules: [{
                    test: /\.less$/,
                    use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'less-loader' // compiles Less to CSS
                    }]
                }]
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    }
}