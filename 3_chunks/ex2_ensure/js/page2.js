require.ensure(['./str'], function(require) {
    var str = require('./str');

    console.log(str.format('Hello {0}!', 'Page2'));
});