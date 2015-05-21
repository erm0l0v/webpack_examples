var I18nPlugin = require("i18n-webpack-plugin");

var languages = {
    "en": null,
    "ru": require("./ru.json")
};

module.exports = Object.keys(languages).map(function(language) {
    return {
        entry: {
            result: './js/app.js'
        },
        output: {
            filename: '[name].' + language +'.js'
        },
        plugins: [
            new I18nPlugin(
                languages[language]
            )
        ]
    }
});