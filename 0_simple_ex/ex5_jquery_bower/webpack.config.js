var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new BowerWebpackPlugin()
    ]
};