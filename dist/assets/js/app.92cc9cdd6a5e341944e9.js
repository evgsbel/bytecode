/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/svg sync recursive \\.svg$":
/*!****************************************!*\
  !*** ./src/assets/img/svg sync \.svg$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./footer-logo.svg": "./src/assets/img/svg/footer-logo.svg",
	"./h-01.svg": "./src/assets/img/svg/h-01.svg",
	"./h-02.svg": "./src/assets/img/svg/h-02.svg",
	"./h-03.svg": "./src/assets/img/svg/h-03.svg",
	"./h-04.svg": "./src/assets/img/svg/h-04.svg",
	"./hamburger-close.svg": "./src/assets/img/svg/hamburger-close.svg",
	"./hamburger-open.svg": "./src/assets/img/svg/hamburger-open.svg",
	"./input-file.svg": "./src/assets/img/svg/input-file.svg",
	"./logo.svg": "./src/assets/img/svg/logo.svg",
	"./modal-close.svg": "./src/assets/img/svg/modal-close.svg",
	"./modal-result.svg": "./src/assets/img/svg/modal-result.svg",
	"./social-01.svg": "./src/assets/img/svg/social-01.svg",
	"./social-02.svg": "./src/assets/img/svg/social-02.svg",
	"./social-03.svg": "./src/assets/img/svg/social-03.svg",
	"./social-04.svg": "./src/assets/img/svg/social-04.svg",
	"./social-05.svg": "./src/assets/img/svg/social-05.svg",
	"./text-look.svg": "./src/assets/img/svg/text-look.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/img/svg sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/img/svg/footer-logo.svg":
/*!********************************************!*\
  !*** ./src/assets/img/svg/footer-logo.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "footer-logo-usage",
      viewBox: "0 0 213 38",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#footer-logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-01.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-01.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-01-usage",
      viewBox: "0 0 265 279",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-01",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-02.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-02.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-02-usage",
      viewBox: "0 0 276 287",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-02",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-03.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-03.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-03-usage",
      viewBox: "0 0 268 286",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-03",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-04.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-04.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-04-usage",
      viewBox: "0 0 297 236",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-04",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/hamburger-close.svg":
/*!************************************************!*\
  !*** ./src/assets/img/svg/hamburger-close.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "hamburger-close-usage",
      viewBox: "0 0 18 18",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#hamburger-close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/hamburger-open.svg":
/*!***********************************************!*\
  !*** ./src/assets/img/svg/hamburger-open.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "hamburger-open-usage",
      viewBox: "0 0 22 19",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#hamburger-open",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/input-file.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/svg/input-file.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "input-file-usage",
      viewBox: "0 0 18 19",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#input-file",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/logo.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-usage",
      viewBox: "0 0 224 47",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/modal-close.svg":
/*!********************************************!*\
  !*** ./src/assets/img/svg/modal-close.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "modal-close-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#modal-close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/modal-result.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/svg/modal-result.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "modal-result-usage",
      viewBox: "0 0 64 65",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#modal-result",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-01.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-01.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-01-usage",
      viewBox: "0 0 9 20",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-01",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-02.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-02.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-02-usage",
      viewBox: "0 0 21 21",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-02",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-03.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-03.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-03-usage",
      viewBox: "0 0 18 18",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-03",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-04.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-04.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-04-usage",
      viewBox: "0 0 22 16",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-04",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-05.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-05.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-05-usage",
      viewBox: "0 0 20 12",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-05",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/text-look.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/text-look.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "text-look-usage",
      viewBox: "0 0 182 17",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#text-look",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/media.sass":
/*!************************************!*\
  !*** ./src/assets/sass/media.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2/dist/js/select2.min */ "./node_modules/select2/dist/js/select2.min.js");
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min */ "./node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sass/app.sass */ "./src/assets/sass/app.sass");
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sass/media.sass */ "./src/assets/sass/media.sass");
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__);
// JS





 // SCSS



 // svg sprite

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/img/svg sync recursive \\.svg$"));
fetch("./assets/img/svg//sprite.svg").then(function (res) {
  return res.text();
}).then(function (data) {
  document.getElementById('svg-icons').innerHTML = data;
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//preloader
$(function () {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
  });
}); //sliders arrow

var arrow_next = "<svg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L11.5 11.5L2 21' stroke-width='3'/></svg>",
    arrow_prev = "<svg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2L2.5 11.5L12 21' stroke-width='3'/></svg>";
$(function () {
  //ancors
  $("a.js-ancor-link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
$(function () {
  $('.js-header__menu-btn').on('click', function headerHambClick() {
    $('body').toggleClass('menu-open');
  });
}); //tabs

var tabLinks = document.querySelectorAll(".tabs a");
var tabPanels = document.querySelectorAll(".tabs-panel");

var _iterator = _createForOfIteratorHelper(tabLinks),
    _step;

try {
  var _loop = function _loop() {
    var el = _step.value;
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".tabs div.is-active").classList.remove("is-active");
      document.querySelector(".tabs-panel.is-active").classList.remove("is-active");
      var parentListItem = el.parentElement;
      parentListItem.classList.add("is-active");

      var index = _toConsumableArray(parentListItem.parentElement.children).indexOf(parentListItem);

      var panel = _toConsumableArray(tabPanels).filter(function (el) {
        return el.getAttribute("data-index") == index;
      });

      panel[0].classList.add("is-active");
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } //checkbox

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

$('.js-package__input').change(function () {
  if ($(this).is(':checked')) {
    $(this).parent().removeClass('unchecked');
    $(this).parent().addClass('checked');
  } else {
    $(this).parent().removeClass('checked');
    $(this).parent().addClass('unchecked');
  }
}); // input file

var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function (e) {
    var fileName = '';
    if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('\\').pop();
    if (fileName) label.querySelector('span').innerHTML = fileName;else label.innerHTML = labelVal;
  });
});
$('[data-fancybox]').fancybox({
  btnTpl: {
    smallBtn: '<button type="button" data-fancybox-close class="modal__close" title="{{CLOSE}}">' + 'закрыть' + '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<use xlink:href="#modal-close"></use>' + '</svg>' + "</button>"
  }
});
$(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth();

    if (windowWidth < 769) {
      var _$$owlCarousel;

      //remove scrollbar on mobile
      $('js-scrollbar').mCustomScrollbar("destroy"); //service slider

      var sync1 = $('.js-service-slider-top');
      var sync2 = $('.js-service-slider-bottom');
      var thumbnailItemClass = '.owl-item';

      function syncPosition(el) {
        var $owlSlider = $(this).data('owl.carousel');
        var loop = $owlSlider.options.loop;
        var current = el.item.index;

        if (loop) {
          var count = el.item.count - 1;
          current = Math.round(el.item.index - el.item.count / 2 - 0.5);

          if (current < 0) {
            current = count;
          }

          if (current > count) {
            current = 0;
          }
        }

        var owlThumbnail = sync2.data('owl.carousel');
        var itemClass = ".".concat(owlThumbnail.options.itemClass);
        var thumbnailCurrentItem = sync2.find(itemClass).removeClass('synced').eq(current);
        thumbnailCurrentItem.addClass('synced');

        if (!thumbnailCurrentItem.hasClass('active')) {
          var duration = 300;
          sync2.trigger('to.owl.carousel', [current, duration, true]);
        }
      }

      sync1.owlCarousel({
        startPosition: 0,
        items: 1,
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        smartSpeed: 500,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false
      }).on('changed.owl.carousel', syncPosition);
      sync2.owlCarousel({
        startPosition: 0,
        items: 1,
        loop: false,
        margin: 15,
        autoplay: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red"],
        navContainerClass: 'slider-arrow__wrp',
        dots: false,
        onInitialized: function onInitialized(e) {
          // eslint-disable-next-line no-underscore-dangle
          var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
          thumbnailCurrentItem.addClass('synced');
        }
      }).on('click', thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 10000;
        var itemIndex = $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
      }).on('changed.owl.carousel', function (el) {
        var number = el.item.index;
        var $owlSlider = sync1.data('owl.carousel');
        $owlSlider.to(number, 100, true);
      });
      $('.service__monitor').find('.tabs-panel').removeClass('tabs-panel');
      $('.js-packages-slider').owlCarousel((_$$owlCarousel = {
        loop: true,
        items: 1,
        nav: true
      }, _defineProperty(_$$owlCarousel, "nav", true), _defineProperty(_$$owlCarousel, "autoHeight", true), _defineProperty(_$$owlCarousel, "navText", [arrow_prev, arrow_next]), _defineProperty(_$$owlCarousel, "navClass", ["slider-arrow slider-arrow_prev slider-arrow_white", "slider-arrow slider-arrow_next slider-arrow_white"]), _defineProperty(_$$owlCarousel, "navContainerClass", 'slider-arrow__wrp  slider-arrow__wrp_packages'), _defineProperty(_$$owlCarousel, "dots", false), _$$owlCarousel));
      $('.js-methodology-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 10,
        nav: true,
        autoHeight: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_prev_methodology slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red slider-arrow_next_methodology"],
        navContainerClass: 'slider-arrow__wrp slider-arrow__wrp_methodology',
        dots: false
      });
      $('.js-soft-mobile-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 120,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_prev_soft-mobile slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red slider-arrow_next_soft-mobile"],
        navContainerClass: 'slider-arrow__wrp slider-arrow__wrp_soft-mobile',
        dots: false
      });
    } else {
      //scroll bar
      $('.js-scrollbar').mCustomScrollbar(_defineProperty({
        axis: 'y',
        theme: 'dark-thick',
        scrollInertia: '330',
        setHeight: 570,
        scrollButtons: true
      }, "scrollButtons", {
        enable: true
      })); //remove slider on desktop

      $('.js-service-slider-top').trigger('destroy.owl.carousel').removeClass('js-service-slider-top owl-carousel owl-theme');
      $('.js-service-slider-bottom').trigger('destroy.owl.carousel').removeClass('js-service-slider-bottom owl-carousel owl-theme');
      $('.js-packages-slider').trigger('destroy.owl.carousel').removeClass('js-packages-slider owl-carousel owl-theme');
      $('.js-soft-mobile-slider').trigger('destroy.owl.carousel').removeClass('js-soft-mobile-slider owl-carousel owl-theme');
      $('.js-methodology-slider').trigger('destroy.owl.carousel').removeClass('js-methodology-slider owl-carousel owl-theme');
    }
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
}); //scroll bar
// $('.js-scrollbar').mCustomScrollbar({
//     axis: 'y',
//     theme: 'dark-thick',
//     scrollInertia: '330',
//     setHeight: 570,
//     scrollButtons: true,
//     scrollButtons: {enable: true}
// });

$(function () {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=app.92cc9cdd6a5e341944e9.js.map