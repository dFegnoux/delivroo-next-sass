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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/blocks/RestaurantBlock.js":
/*!**********************************************!*\
  !*** ./components/blocks/RestaurantBlock.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restaurantBlock_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurantBlock.scss */ "./components/blocks/restaurantBlock.scss");
/* harmony import */ var _restaurantBlock_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_restaurantBlock_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RestaurantBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RestaurantBlock, _PureComponent);

  function RestaurantBlock() {
    _classCallCheck(this, RestaurantBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(RestaurantBlock).apply(this, arguments));
  }

  _createClass(RestaurantBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          description = _this$props.description,
          picture = _this$props.picture;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurantBlockWrapper centerContent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restaurantBlockContent resetTextAlign"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "texts"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newsTitle"
      }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newsDescription"
      }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newsPictureWrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: picture,
        alt: name
      }))));
    }
  }]);

  return RestaurantBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(RestaurantBlock, "propTypes", {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(RestaurantBlock, "defaultProps", {
  name: "That restaurant",
  description: "I sure you which one, as it is well described here",
  picture: "//www.placekitten.com/g/700/300"
});

/* harmony default export */ __webpack_exports__["default"] = (RestaurantBlock);

/***/ }),

/***/ "./components/blocks/restaurantBlock.scss":
/*!************************************************!*\
  !*** ./components/blocks/restaurantBlock.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/forms/PaymentForm.js":
/*!*****************************************!*\
  !*** ./components/forms/PaymentForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paymentFormFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentFormFields */ "./components/forms/paymentFormFields.json");
var _paymentFormFields__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./paymentFormFields */ "./components/forms/paymentFormFields.json", 1);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextInput */ "./components/forms/TextInput.js");
/* harmony import */ var _paymentForm_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentForm.scss */ "./components/forms/paymentForm.scss");
/* harmony import */ var _paymentForm_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_paymentForm_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PaymentForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PaymentForm, _Component);

  function PaymentForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      formFields: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validate", function (values) {
      var required = ["street_address", "postcode", "city", "phone"];
      var errors = {};
      Object.keys(values).forEach(function (key) {
        if (!values[key] && required.includes(key)) {
          errors[key] = "Required";
        }
      });
      return errors;
    });

    return _this;
  }

  _createClass(PaymentForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // fetch(
      //   "https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json",
      //   {
      //     mode: "no-cors"
      //   }
      // ).then(response => {
      //   console.log(response);
      // });
      this.setState(function () {
        return {
          formFields: _paymentFormFields__WEBPACK_IMPORTED_MODULE_2__.map(function (field) {
            return _objectSpread({}, field, {
              initialValue: ""
            });
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var formFields = this.state.formFields;
      var initialValues = {};
      formFields.forEach(function (field) {
        initialValues[field.name] = field.initialValue;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
        initialValues: initialValues,
        validate: this.validate,
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting;
          setTimeout(function () {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
      }, function (_ref2) {
        var isSubmitting = _ref2.isSubmitting,
            handleSubmit = _ref2.handleSubmit;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: handleSubmit,
          className: "paymentForm"
        }, formFields.map(function (field) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
            key: field.name,
            type: "text",
            name: field.name,
            placeholder: field.placeholder,
            className: field.col,
            label: field.title,
            component: _TextInput__WEBPACK_IMPORTED_MODULE_3__["default"]
          });
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          disabled: isSubmitting
        }, "Valider"));
      });
    }
  }]);

  return PaymentForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PaymentForm);

/***/ }),

/***/ "./components/forms/TextInput.js":
/*!***************************************!*\
  !*** ./components/forms/TextInput.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var TextInput = function TextInput(_ref) {
  var field = _ref.field,
      _ref$form = _ref.form,
      touched = _ref$form.touched,
      errors = _ref$form.errors,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["field", "form", "label", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input col-".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "text"
  }, field, props)), touched[field.name] && errors[field.name] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, errors[field.name]));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./components/forms/paymentForm.scss":
/*!*******************************************!*\
  !*** ./components/forms/paymentForm.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/forms/paymentFormFields.json":
/*!*************************************************!*\
  !*** ./components/forms/paymentFormFields.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = [{"title":"Etage et numéro d'appartement","name":"flat","placeholder":"ex : Appartement n°15","col":6},{"title":"Digicode","name":"code","placeholder":"ex : B123","col":6},{"title":"Adresse","name":"street_address","placeholder":"ex : 100 Rue de Rivoli","hint":"Inclut le nom de votre rue et le numéro de votre bâtiment","col":12},{"title":"Code postal","name":"postcode","placeholder":"ex : 75001","col":6},{"title":"Ville","name":"city","placeholder":"ex : Paris","col":6},{"title":"Numéro de téléphone","name":"phone","placeholder":"+33 9 77 55 03 30","col":12},{"title":"Instructions pour votre livreur ?","name":"instructions","placeholder":"ex : C'est la porte noire près de l'animalerie. Merci d'appeler lorsque vous arrivez.","col":12}];

/***/ }),

/***/ "./components/menu/Cart.js":
/*!*********************************!*\
  !*** ./components/menu/Cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuantityModifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuantityModifier */ "./components/menu/QuantityModifier.js");
/* harmony import */ var _helpers_cartHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/cartHelpers */ "./helpers/cartHelpers.js");
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.scss */ "./components/menu/cart.scss");
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cart_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Cart =
/*#__PURE__*/
function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cart).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          menus = _this$props.menus,
          updateCart = _this$props.updateCart,
          disableButtons = _this$props.disableButtons;
      var selectedMenus = Object.entries(menus);
      var isBtnDisabled = !selectedMenus.length ? "disabled" : null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cartWrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart roundedItem"
      }, !disableButtons && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/cart/validation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn",
        disabled: isBtnDisabled
      }, "Valider mon panier")), selectedMenus.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, selectedMenus.map(function (menu) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: menu[0]
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuantityModifier__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: menu[1],
          updateCart: updateCart,
          disabled: disableButtons
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "itemName"
        }, menu[1].name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "total"
        }, Object(_helpers_cartHelpers__WEBPACK_IMPORTED_MODULE_4__["formatToPriceString"])(menu[1].price * menu[1].quantity)));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mainTotal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_helpers_cartHelpers__WEBPACK_IMPORTED_MODULE_4__["calculateCartTotalPrice"])(menus)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Votre panier est vide")));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Cart, "propTypes", {
  menus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  updateCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disableButtons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});

_defineProperty(Cart, "defaultProps", {
  disableButtons: true,
  updateCart: function updateCart() {
    console.warning("Trying to update with the default updateCart function, you may want to use a real function ;)");
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/menu/Menu.js":
/*!*********************************!*\
  !*** ./components/menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuCategory */ "./components/menu/MenuCategory.js");
/* harmony import */ var _forms_PaymentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/PaymentForm */ "./components/forms/PaymentForm.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ "./components/menu/Cart.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.scss */ "./components/menu/menu.scss");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_menu_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var MenuCategories =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuCategories, _PureComponent);

  function MenuCategories() {
    _classCallCheck(this, MenuCategories);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuCategories).apply(this, arguments));
  }

  _createClass(MenuCategories, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          categories = _this$props.categories,
          updateCart = _this$props.updateCart,
          cart = _this$props.cart,
          showPayment = _this$props.showPayment;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuLayout"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuContentWrapper"
      }, categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuCategory__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: category[0],
          title: category[0],
          menus: category[1],
          updateCart: updateCart
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_4__["default"], {
        menus: cart,
        updateCart: updateCart,
        disableButtons: showPayment
      }));
    }
  }]);

  return MenuCategories;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(MenuCategories, "propTypes", {
  categories: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  updateCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

_defineProperty(MenuCategories, "defaultProps", {
  categories: []
});

/* harmony default export */ __webpack_exports__["default"] = (MenuCategories);

/***/ }),

/***/ "./components/menu/MenuCard.js":
/*!*************************************!*\
  !*** ./components/menu/MenuCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menuCard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuCard.scss */ "./components/menu/menuCard.scss");
/* harmony import */ var _menuCard_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menuCard_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MenuCard =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuCard, _PureComponent);

  function MenuCard() {
    _classCallCheck(this, MenuCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuCard).apply(this, arguments));
  }

  _createClass(MenuCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          _this$props$item = _this$props.item,
          title = _this$props$item.title,
          description = _this$props$item.description,
          picture = _this$props$item.picture,
          price = _this$props$item.price,
          popular = _this$props$item.popular,
          updateCart = _this$props.updateCart;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuCard",
        onClick: function onClick() {
          updateCart(item, "add");
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content roundedItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "texts"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cardTitle"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, description.substr(0, 50)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, price, " \u20AC"), popular && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "popular"
      }, "Populaire"))), picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pictureWrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: picture,
        alt: title
      }))));
    }
  }]);

  return MenuCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(MenuCard, "propTypes", {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    popular: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }),
  updateCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

_defineProperty(MenuCard, "defaultProps", {
  item: {
    id: "Default id",
    title: "Default Menu item",
    description: "Default menu item description",
    picture: "//www.placekitten.com/300/300",
    price: "0.00",
    popular: false
  }
});

/* harmony default export */ __webpack_exports__["default"] = (MenuCard);

/***/ }),

/***/ "./components/menu/MenuCategory.js":
/*!*****************************************!*\
  !*** ./components/menu/MenuCategory.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuCard */ "./components/menu/MenuCard.js");
/* harmony import */ var _menuCategory_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuCategory.scss */ "./components/menu/menuCategory.scss");
/* harmony import */ var _menuCategory_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menuCategory_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MenuCategory =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuCategory, _PureComponent);

  function MenuCategory() {
    _classCallCheck(this, MenuCategory);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuCategory).apply(this, arguments));
  }

  _createClass(MenuCategory, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          menus = _this$props.menus,
          updateCart = _this$props.updateCart;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuCategory"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, title), menus.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "itemsList"
      }, menus.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          updateCart: updateCart,
          key: item.id,
          item: item
        });
      })));
    }
  }]);

  return MenuCategory;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(MenuCategory, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  menus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  updateCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

_defineProperty(MenuCategory, "defaultProps", {
  title: "Default category title",
  menus: []
});

/* harmony default export */ __webpack_exports__["default"] = (MenuCategory);

/***/ }),

/***/ "./components/menu/QuantityModifier.js":
/*!*********************************************!*\
  !*** ./components/menu/QuantityModifier.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var QuantityModifier =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(QuantityModifier, _PureComponent);

  function QuantityModifier() {
    _classCallCheck(this, QuantityModifier);

    return _possibleConstructorReturn(this, _getPrototypeOf(QuantityModifier).apply(this, arguments));
  }

  _createClass(QuantityModifier, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          quantity = _this$props.item.quantity,
          updateCart = _this$props.updateCart,
          disabled = _this$props.disabled;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quantityModifier"
      }, !disabled && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "remove",
        onClick: function onClick() {
          updateCart(item, "remove");
        }
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "quantity"
      }, quantity), !disabled && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "add",
        onClick: function onClick() {
          updateCart(item, "add");
        }
      }, "+"));
    }
  }]);

  return QuantityModifier;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(QuantityModifier, "propTypes", {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  updateCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});

_defineProperty(QuantityModifier, "defaultProps", {
  disabled: false
});

/* harmony default export */ __webpack_exports__["default"] = (QuantityModifier);

/***/ }),

/***/ "./components/menu/cart.scss":
/*!***********************************!*\
  !*** ./components/menu/cart.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/menu/menu.scss":
/*!***********************************!*\
  !*** ./components/menu/menu.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/menu/menuCard.scss":
/*!***************************************!*\
  !*** ./components/menu/menuCard.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/menu/menuCategory.scss":
/*!*******************************************!*\
  !*** ./components/menu/menuCategory.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./helpers/cartHelpers.js":
/*!********************************!*\
  !*** ./helpers/cartHelpers.js ***!
  \********************************/
/*! exports provided: formatToPriceString, calculateCartTotalPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToPriceString", function() { return formatToPriceString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCartTotalPrice", function() { return calculateCartTotalPrice; });
/**
 * Format a number to a price standard string
 * @param {Number} number
 * @returns {String}
 */
function formatToPriceString(number) {
  return "".concat(number.toFixed(2).replace(".", ","), " \u20AC");
}
/**
 * Get a simple addition of every elements of cart to get the totalRaw
 * @param {Object} objCartMenus : The cart menus object
 * @returns {Number}
 */

function calculateCartTotalPrice(objCartMenus) {
  var cartMenus = Object.entries(objCartMenus);
  var totalRaw = 0;
  cartMenus.forEach(function (menu) {
    totalRaw += menu[1].price * menu[1].quantity;
  });
  return formatToPriceString(totalRaw);
}

/***/ }),

/***/ "./helpers/menuHelpers.js":
/*!********************************!*\
  !*** ./helpers/menuHelpers.js ***!
  \********************************/
/*! exports provided: formatMenus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMenus", function() { return formatMenus; });
/**
 * Format menus from delivroo into an array of categories
 * @param {Object} categories : Categories of the menus
 * @returns a collection of categories
 */
var formatMenus = function formatMenus(categories) {
  return Object.entries(categories).filter(function (category) {
    return category[1].length;
  });
};

/***/ }),

/***/ "./pages/MenusCtn.js":
/*!***************************!*\
  !*** ./pages/MenusCtn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_blocks_RestaurantBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks/RestaurantBlock */ "./components/blocks/RestaurantBlock.js");
/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PacmanLoader */ "react-spinners/PacmanLoader");
/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu/Menu */ "./components/menu/Menu.js");
/* harmony import */ var _helpers_menuHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/menuHelpers */ "./helpers/menuHelpers.js");
/* harmony import */ var _components_menu_menu_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/menu/menu.scss */ "./components/menu/menu.scss");
/* harmony import */ var _components_menu_menu_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_menu_menu_scss__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var CartValidationCtn =
/*#__PURE__*/
function (_Component) {
  _inherits(CartValidationCtn, _Component);

  function CartValidationCtn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CartValidationCtn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CartValidationCtn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      cart: {},
      showPayment: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveCartToStorage", function () {
      localStorage.setItem("cart", JSON.stringify(_this.state.cart));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCart", function (menu, action) {
      // Get previous item if it already exists
      var previousItem = _this.state.cart.hasOwnProperty(menu.id) ? _this.state.cart[menu.id] : null;
      var newQuantity = previousItem ? previousItem.quantity : 0;

      if (action === "remove") {
        newQuantity--;
      } else {
        newQuantity++;
      }

      if (newQuantity) {
        _this.setState(function () {
          return {
            cart: _objectSpread({}, _this.state.cart, _defineProperty({}, menu.id, _objectSpread({}, menu, {
              name: menu.title,
              quantity: newQuantity
            })))
          };
        }, _this.saveCartToStorage);
      } else {
        var newCart = _objectSpread({}, _this.state.cart);

        delete newCart[menu.id];

        _this.setState(function () {
          return {
            cart: newCart
          };
        }, _this.saveCartToStorage);
      }
    });

    return _this;
  }

  _createClass(CartValidationCtn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var savedCard = localStorage.getItem("cart");

      if (savedCard) {
        this.setState(function () {
          return {
            cart: JSON.parse(savedCard)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          cart = _this$state.cart,
          showPayment = _this$state.showPayment;
      var _this$props = this.props,
          menu = _this$props.menu,
          restaurant = _this$props.restaurant;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object.keys(restaurant).length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_blocks_RestaurantBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: restaurant.name,
        description: restaurant.description,
        picture: restaurant.picture
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "layoutPageContent layoutLimitedWidth"
      }, !menu.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4___default.a, null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        categories: menu,
        updateCart: this.updateCart,
        cart: cart,
        showPayment: showPayment
      })));
    }
  }], [{
    key: "getInitialProps",
    // Server side et avant le premier render
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://deliveroo-api.now.sh/menu");

              case 2:
                response = _context.sent;

                if (!(response.data instanceof Object)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  menu: Object(_helpers_menuHelpers__WEBPACK_IMPORTED_MODULE_6__["formatMenus"])(response.data.menu) || [],
                  restaurant: response.data.restaurant || {}
                });

              case 5:
                return _context.abrupt("return", {
                  menu: [],
                  restaurant: {}
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
    /**
     * Save the cart to local storage,
     * cart item is provided by the component's state
     */

  }]);

  return CartValidationCtn;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CartValidationCtn);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/MenusCtn.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/MenusCtn.js */"./pages/MenusCtn.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spinners/PacmanLoader":
/*!**********************************************!*\
  !*** external "react-spinners/PacmanLoader" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners/PacmanLoader");

/***/ })

/******/ });
//# sourceMappingURL=MenusCtn.js.map