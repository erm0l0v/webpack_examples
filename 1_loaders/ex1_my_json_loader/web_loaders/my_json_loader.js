function my_json_loader(source) {
    return 'module.exports = ' + source + ';';
}

module.exports = my_json_loader;