var path = require('path');

var jquery_path = path.join(__dirname, 'vendor/jquery-1.7.js');

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: jquery_path, loader: 'exports?window.jQuery' }
        ]
    },
    resolve:{
        alias: {
            'jquery': jquery_path
        }
    }
};