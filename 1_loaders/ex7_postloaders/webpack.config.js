module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        postLoaders: [ {
            test: /\.js$/,
            exclude: /\/(node_modules|bower_components)\//,
            loader: 'autopolyfiller-loader',
            query: { browsers: [ 'last 2 versions', 'ie >= 8' ] }
        } ]
    }
};