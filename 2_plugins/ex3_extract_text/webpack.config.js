var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
            { test: /(\.eot$|\.svg$|\.ttf$|\.woff$)/, loader: 'url-loader?limit=10000' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};