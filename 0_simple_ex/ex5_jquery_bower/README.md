# Add dependency from bower to your modules

If you would like use packages only from *bower*, or if some library provide installation only via this package manager, you may do it.

Let's add jquery as a *bower* dependency.

`bower init` - to generate json config file.

`bower install jquery --save-dev` - install *jquery* and change *bower* config file.

`npm install bower-webpack-plugin --save-dev` - install special webpack [plugin](https://github.com/lpiepiora/bower-webpack-plugin).

And change your configuration:


```
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
```
