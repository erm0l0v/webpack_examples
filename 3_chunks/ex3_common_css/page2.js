webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var str = __webpack_require__(2),
	    $ = __webpack_require__(1);

	__webpack_require__(5);

	['facebook', 'linkedin'].map(function (mod) {
	    return str.format('<div class="social-button social-button--{0}"><div class="social-button__logo"></div><a class="social-button__control" href="#" target="_blank">Sign up with {0}</a></div>', mod);
	}).forEach(function (html) {
	    $('.js-my-div').append(html);
	});


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }

});