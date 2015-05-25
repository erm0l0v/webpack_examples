var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack');

module.exports = {
    entry: {
        page1: './js/page1.js',
        page2: './js/page2.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
            { test: /(\.eot$|\.svg$|\.ttf$|\.woff$)/, loader: 'url-loader?limit=10000' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new ExtractTextPlugin("[name].css")
    ]
};