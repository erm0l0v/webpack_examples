# Add dependency from cdn to your modules

Let's see how to use a jquery from CDN: `https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js`

All that we need: 2 simple steps.
1. add jquery dependency in a html file `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>`
2. Add `externals` option into your config `externals: { "jquery": "jQuery" }`
