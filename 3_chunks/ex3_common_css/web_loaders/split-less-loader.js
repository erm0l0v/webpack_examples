var path = require("path");
var fs = require("fs");
var loaderUtils = require("loader-utils");

function lessDependencyResolver (source) {
    this.cacheable && this.cacheable();

    var query = loaderUtils.parseQuery(this.query);
    var importLoaders = parseInt(query.importLoaders, 10) || 0;
    var reDependency = /\s*@import\s+["']\s*([^'"]+?)['"];/g;
    var dependencies = [];
    var match;
    while ((match = reDependency.exec(source)) !== null) {
        dependencies.push(match[1]);
    }

//    var result = "exports = module.exports = require(" + loaderUtils.stringifyRequest(this, require.resolve("css-loader/lib/css-base.js")) + ")();\n";

    var result = "";

    dependencies.forEach(function (name) {
        var fullName = path.resolve(this.context, name);
        this.addDependency(fullName);
        var loadersRequest = this.loaders.map(function(x) { return x.request; }).join("!");
        var importUrl = loadersRequest + "!" +
            loaderUtils.urlToRequest(name);
        result += 'require(' + loaderUtils.stringifyRequest(this, importUrl) + ');\n';
    }.bind(this));

//    this.exec(result);
    var body = JSON.stringify(source.replace(/\s*@import\s+["']\s*([^'"]+?)['"];/gm, '@import (reference) "$1"'));
    result += 'exports.push([module.id, '+body+', ""]);';
    return source.replace(/\s*@import\s+["']\s*([^'"]+?)['"];/gm, '@import (reference) "$1";')
}

module.exports = lessDependencyResolver;