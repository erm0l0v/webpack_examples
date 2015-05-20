module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /(\.jpe?g$|\.png$)/, loader: 'url-loader?limit=10000' }
        ]
    }
};