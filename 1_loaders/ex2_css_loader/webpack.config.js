module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
};