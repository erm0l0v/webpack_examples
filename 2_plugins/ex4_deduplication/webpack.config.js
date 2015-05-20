var webpack = require('webpack');

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ]
};