function format(string, obj) {
    var result = string;
    if (!(obj instanceof Object) || arguments.length > 2) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        obj = args;
    }
    for (var name in obj) {
        if (obj.hasOwnProperty(name)) {
            result = replaceToken(result, name, obj[name]);
        }
    }
    return result;
}

function replaceToken(string, tokenName, value) {
    var pattern = new RegExp("{\\s*?" + tokenName + "\\s*?\\}", "ig");
    if (string && pattern.test(string)) {
        string = string.replace(pattern, value);
    }
    return string
}


module.exports = {
    format: format
};