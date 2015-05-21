/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var str = __webpack_require__(1);

	console.log(str.format("Привет {0}!", "Мир"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ }
/******/ ]);