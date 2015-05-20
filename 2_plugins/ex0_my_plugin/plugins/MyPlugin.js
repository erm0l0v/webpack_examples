function logEvent (compiler, eventName) {
    compiler.plugin(eventName, function() {
        console.log('MyMyPlugin - ' + eventName);
    });
}

function MyPlugin() {

}

MyPlugin.prototype.apply = function(compiler) {
    var log = logEvent.bind(null, compiler);
    log('watch-run');
    log('compilation');
    log('normal-module-factory');
    log('context-module-factory');
    log('compile');
    log('done');
    log('failed');
    log('invalid');
    log('after-plugins');
    log('after-resolvers');
};

module.exports = MyPlugin;