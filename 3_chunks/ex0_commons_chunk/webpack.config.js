var webpack = require('webpack');

module.exports = {
    entry: {
        page1: './js/page1.js',
        page2: './js/page2.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
};