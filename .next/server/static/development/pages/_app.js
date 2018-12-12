module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_DelivrooLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/DelivrooLogo */ "./components/images/DelivrooLogo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resetTextAlign"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layoutLimitedWidth"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_DelivrooLogo__WEBPACK_IMPORTED_MODULE_2__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layoutContent"
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/images/DelivrooLogo.js":
/*!*******************************************!*\
  !*** ./components/images/DelivrooLogo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DelivrooLogo =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DelivrooLogo, _PureComponent);

  function DelivrooLogo() {
    _classCallCheck(this, DelivrooLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(DelivrooLogo).apply(this, arguments));
  }

  _createClass(DelivrooLogo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        id: "Calque_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        width: "519.2px",
        height: "174.2px",
        viewBox: "-37 211.1 519.2 174.2",
        style: {
          enableBackground: "new -37 211.1 519.2 174.2"
        },
        xmlSpace: "preserve"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_88_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_89_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_90_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_91_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_92_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_93_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_94_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_95_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_96_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_97_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_98_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_99_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_100_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_101_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "XMLID_102_"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "st0",
        d: "M156.5,330.9h11.2l-1.9-8.7v-51.7h-10.7v23.6c-3.2-3.7-7.7-5.9-12.9-5.9c-10.7,0-19,8.9-19,21.8\r c0,13,8.3,21.8,19,21.8c5.3,0,9.9-2.3,13.1-6.2L156.5,330.9L156.5,330.9z M368.1,299.8c2.2,0,4.2,0.6,6,1.9l5.1-11.4\r c-2.4-1.5-5.1-2.1-7.8-2.1c-4.8,0-8.9,2.2-11.4,6.3l-1.1-5.3h-11l1.8,8.2v33.6h10.7v-26.7C361.8,301.5,364.5,299.8,368.1,299.8\r L368.1,299.8L368.1,299.8L368.1,299.8z M399.4,320.6c-6.2,0-10.8-4.1-10.8-10.5c0-6.5,4.6-10.5,10.8-10.5c6.3,0,10.8,4,10.8,10.5\r C410.2,316.4,405.7,320.6,399.4,320.6L399.4,320.6z M133.6,310c0-6.5,4.6-10.5,10.8-10.5c6.3,0,10.8,4,10.8,10.5\r c0,6.4-4.5,10.5-10.8,10.5C138.2,320.6,133.6,316.4,133.6,310z M446.9,320.6c-6.2,0-10.8-4.1-10.8-10.5c0-6.5,4.6-10.5,10.8-10.5\r c6.3,0,10.8,4,10.8,10.5C457.6,316.4,453.1,320.6,446.9,320.6z M193.7,298.9c5.5,0,9.1,2.6,10.3,7.4h-20.6\r C184.5,301.4,188.2,298.9,193.7,298.9L193.7,298.9z M321.6,298.9c5.5,0,9.1,2.6,10.3,7.4h-20.6C312.6,301.4,316.2,298.9,321.6,298.9\r L321.6,298.9z M269.4,330.9h17.2l11.2-41.9h-11.7L278,323l-8.2-33.9h-11.5L269.4,330.9L269.4,330.9z M241.9,330.9h10.7V289h-10.7\r V330.9z M195.3,331.7c6,0,11.8-1.7,16.7-4.8l-4.1-9.2c-3.8,2.1-8.2,3.2-12.5,3.2c-5.6,0-9.5-2.2-11.3-6.3h30.2\r c0.3-1.6,0.5-3,0.5-4.9c0-13-9-21.6-20.9-21.6c-12.1,0-20.9,8.8-20.9,21.8C172.9,323.2,181.7,331.7,195.3,331.7L195.3,331.7z\r M468,310c0-13-9-21.8-21.1-21.8c-12.2,0-21.1,8.9-21.1,21.8s9,21.8,21.1,21.8S468,323,468,310L468,310z M323.1,331.8\r c6,0,11.8-1.6,16.7-4.8l-4.1-9.2c-3.8,2.1-8.2,3.2-12.5,3.2c-5.6,0-9.5-2.2-11.3-6.3h30.2c0.3-1.6,0.5-3,0.5-4.9\r c0-13-9-21.6-20.9-21.6c-12.1,0-20.9,8.8-20.9,21.8C300.8,323.4,309.5,331.8,323.1,331.8L323.1,331.8L323.1,331.8z M399.4,331.8\r c12.2,0,21.1-8.9,21.1-21.8s-9-21.8-21.1-21.8c-12.2,0-21.1,8.9-21.1,21.8S387.2,331.8,399.4,331.8L399.4,331.8z M221.6,330.9h10.7\r v-60.4h-10.7V330.9L221.6,330.9z M247.3,283.3c3.7,0,6.7-3,6.7-6.8s-2.9-6.8-6.7-6.8c-3.8,0-6.8,3-6.8,6.8S243.4,283.3,247.3,283.3\r L247.3,283.3z M63.4,232.4l-6.1,58l-10.4-48.9l-32.8,6.9l10.3,48.9l-47.2,10l8.4,39L68.7,364l19-42.5l9-85.6L63.4,232.4L63.4,232.4\r L63.4,232.4z M37.1,316.6c-1.7,1.6-3.9,1.4-6.4,0.6c-2.4-0.8-3.4-3.6-2.6-7.2c0.7-2.6,3.8-3,5.5-3c0.6,0,1.2,0.1,1.8,0.4\r c1.1,0.5,3,1.6,3.4,3.2C39.4,313,38.8,315,37.1,316.6L37.1,316.6L37.1,316.6L37.1,316.6z M61.2,319.2c-1.3,2.2-4.5,2.5-7.8,0.9\r c-2.2-1.1-2.2-3.7-1.9-5.4c0.1-0.9,0.5-1.8,1.1-2.5c0.8-1,2.1-2.3,3.5-2.3c2.5-0.1,4.5,1,5.7,3C63,314.9,62.4,317.1,61.2,319.2\r L61.2,319.2L61.2,319.2z"
      }));
    }
  }]);

  return DelivrooLogo;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (DelivrooLogo);

/***/ }),

/***/ "./components/layout.scss":
/*!********************************!*\
  !*** ./components/layout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map