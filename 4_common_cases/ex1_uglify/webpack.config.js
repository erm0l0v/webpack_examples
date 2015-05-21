var webpack = require('webpack');

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};