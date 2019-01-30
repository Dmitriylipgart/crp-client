// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    resolve:{
        extensions:['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.jpg|\.svg$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ],
    watch: true,
    watchOptions:{
        aggregateTimeout: 10
    }
};