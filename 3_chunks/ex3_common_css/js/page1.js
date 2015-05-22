var str = require('./str'),
    $ = require('jquery');

require('../css/page1.css');

for (var i = 0; i <= 10; i++) {
    $('.js-my-div').append(str.format('<p><span class="star star--s{0}"></span></p>', i));
}
