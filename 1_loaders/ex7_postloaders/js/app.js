var str = require('./str');

var sayHello = str.format.bind(null, 'Hello {0}!');

console.log(sayHello('World'));