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
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "number":
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(null, [a,b,c].concat(args));
					};
				}(modules[i]));
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var str = __webpack_require__(1),
	    str2 = __webpack_require__(2);

	console.log(str.format('Hello {0}!', 'str'));
	console.log(str.format('Hello {0}!', 'str2'));

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

/***/ },
/* 2 */
1
/******/ ])));