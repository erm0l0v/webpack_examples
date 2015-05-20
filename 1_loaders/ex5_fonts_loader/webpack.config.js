module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /(\.eot$|\.svg$|\.ttf$|\.woff$)/, loader: 'url-loader?limit=10000' }
        ]
    }
};