require.ensure(['./str', "jquery"], function(require) {
    var str = require('./str'),
        $ = require('jquery');

    $('.js-my-div').text(str.format('Hello {0}!', 'Page1'));
});


