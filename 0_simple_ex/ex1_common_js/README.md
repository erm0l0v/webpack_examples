# CommonJs modules with webpack config

Let's create config file for [previous](../ex0_common_js) example.

Usually configuration stored in file `webpack.config.js`. We added path to source file into `entry` and added path to output assets into `output`.

``` javascript
module.exports = {
    entry: {
        result: './js/app.js'
    },
    output: {
        filename: '[name].js'
    }
};
```

And now just run a command `webpack` in order to build js.
