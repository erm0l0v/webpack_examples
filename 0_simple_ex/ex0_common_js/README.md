# CommonJS modules

Please check this [site](http://www.commonjs.org/) for more information.

In this example module `str.js` is required in the module `app.js`. Node Js automatically supports commonjs modules. You may use this console command to run the code `node app.js`.

So ok it cool. But how to use this script in browsers? 
You may use webpack command `webpack app.js result.js` and you get a javascript file (`result.js`) that you may use in browser.