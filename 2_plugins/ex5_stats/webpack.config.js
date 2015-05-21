var StatsPlugin = require('stats-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new StatsPlugin(path.join(__dirname, 'stats.json'))
    ]
};