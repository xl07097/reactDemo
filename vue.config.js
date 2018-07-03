const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    outputDir: "dist",
    devServer: {
        open: true,
        port: 8990,
        hotOnly: true,
        proxy: {
            '/api': {
                target: 'http://163.music.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    },
    // configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    //     if (debug) { // 开发环境配置
    //         config.devtool = 'cheap-module-eval-source-map'
    //     } else { // 生产环境配置
    //     }
    //     Object.assign(config, { // 开发生产共同配置
    //         resolve: {
    //             alias: {
    //                 '@': path.resolve(__dirname, './src'),
    //                 'vue$': 'vue/dist/vue.esm.js'
    //             }
    //         }
    //     })
    // },
    css: {
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