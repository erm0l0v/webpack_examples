var str = require('./str'),
    $ = require('jquery');

require('../less/review_widget_fonts.less');
require('../less/page2.less');

['facebook', 'linkedin'].map(function (mod) {
    return str.format('<div class="social-button social-button--{0}"><div class="social-button__logo"></div><a class="social-button__control" href="#" target="_blank">Sign up with {0}</a></div>', mod);
}).forEach(function (html) {
    $('.js-my-div').append(html);
});
