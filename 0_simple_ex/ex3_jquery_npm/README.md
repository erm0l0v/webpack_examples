# Add dependency from npm to your modules

Ok how to use a other libraries in this code? Let's say jquery.

The easiest way to use some library - install it like a npm dependency. Right now most of the biggest js libraries (like jquery) have a npm package.

It easy to install command: `npm install jquery --save-dev`
and easy to use `var $ = require('jquery')` in your code.

Please pay attention that config file didn't change. npm packages supported by default.
