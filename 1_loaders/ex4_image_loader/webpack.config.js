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
            { test: /(\.jpe?g$|\.png$)/,
                loaders:[
                    'url-loader?limit=10000',
                    'image-webpack?optimizationLevel=7&progressive=true'
                ]}
        ]
    }
};