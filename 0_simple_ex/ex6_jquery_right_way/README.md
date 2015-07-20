# Add a simple js file like a commonJs module.

This example shows how to add dependency to the simple javascript file.

Let it be *jquery* 1.3 (this version not support AMD/CommonJS modules)

First you need to export objects/functions via *exports* loader:

```javascript
var jquery_path = path.join(__dirname, 'vendor/jquery-1.3.js');

// in config:
  module: {
        loaders: [
            { test: jquery_path, loader: 'exports?window.jQuery' }
        ]
    },
```

It's absolutely the same if we add this code at the end of *jquery* file:

```javascript
module.exports = window.jQuery;
```

Second: just add alias for *jquery*:

```javascript
    resolve:{
        alias: {
            'jquery': jquery_path
        }
    }
```

And now you may use `var $ = require('jquery');` in your code.
