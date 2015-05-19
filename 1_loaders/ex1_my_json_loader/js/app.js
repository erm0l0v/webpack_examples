var str = require('./str'),
    world = require('./world.json');

console.log(str.format('Hello {0}!', world.world));