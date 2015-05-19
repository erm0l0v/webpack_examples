module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    externals: {
        "jquery": "jQuery"
    }
};