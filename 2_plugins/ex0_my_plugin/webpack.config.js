var MyPlugin = require('./plugins/MyPlugin');

module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new MyPlugin()
    ]
};