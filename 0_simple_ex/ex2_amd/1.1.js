webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
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

	    return {
	        format: format
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);