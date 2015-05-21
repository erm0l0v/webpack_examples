var str = require('./str'),
    $ = require('jquery');

require('../less/review_widget_fonts.less');
require('../less/ratings.less');
require('../less/page1.less');

for (var i = 0; i <= 10; i++) {
    $('.js-my-div').append(str.format('<p><span class="star star--s{0}"></span></p>', i));
}
