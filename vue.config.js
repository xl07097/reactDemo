module.exports = {
    outputDir:"dist",
    devServer: {
        port:9089,
        // proxy: {
        //     '/api':{
        //         target: 'http://163.music.com',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api':"/"
        //         }
        //     }
        // }
    }
}