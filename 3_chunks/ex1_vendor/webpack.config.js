var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['jquery'],
        page1: './js/page1.js',
        page2: './js/page2.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        })
    ]
};