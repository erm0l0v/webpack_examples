var path = require('path'),
    notifier = require('node-notifier');

var logos = {
    error: path.join(__dirname, 'webpack_error.png'),
    warning: path.join(__dirname, 'webpack_warning.png'),
    ok: path.join(__dirname, 'webpack_ok.png')
};

function toMessage(error) {
    var result = {
        message: "",
        title: ""
    };
    if (error.module && error.module.rawRequest)
        result.title = error.module.rawRequest;

    if (error.error)
        result.message += error.error.toString();
    else if (error.warning)
        result.message += error.warning.toString();

    return result;
}

function WebpackNotify () {
    this.successIsLastMessage = false;
}

WebpackNotify.prototype.apply = function(compiler) {
    compiler.plugin('done', this.handleDone.bind(this));
};

WebpackNotify.prototype.handleDone = function (stats) {
    var success = true;
    if (stats.hasErrors()) {
        stats.compilation.errors.map(toMessage).forEach(function (msg) {
            var title = 'Webpack: Error';
            if (msg.title) {
                title += ' in: ' + msg.title
            }
            this.notify({
                title: title,
                message: msg.message,
                icon: logos.error
            });
        }.bind(this));
        success = false;
        this.successIsLastMessage = false;
    }
    if (stats.hasWarnings()) {
        stats.compilation.warnings.map(toMessage).forEach(function (msg) {
            var title = 'Webpack: Warning';
            if (msg.title) {
                title += ' in: ' + msg.title
            }
            this.notify({
                title: title,
                message: msg.message,
                icon: logos.warning
            });
        }.bind(this));
        success = false;
        this.successIsLastMessage = false;
    }
    if (success && !this.successIsLastMessage) {
        this.notify({
            title: 'Webpack: Success',
            message: 'Good job, Boss',
            icon: logos.ok
        });
        this.successIsLastMessage = true;
    }
};

WebpackNotify.prototype.notify = function (message) {
    notifier.notify(message);
};


module.exports = WebpackNotify;