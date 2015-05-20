var str = require('./str'),
    $ = require('jquery');

require('../css/app.css');

$('.js-my-div').text(str.format('Hello {0}!', 'World'));
