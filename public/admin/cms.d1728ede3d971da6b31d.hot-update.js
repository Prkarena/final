webpackHotUpdate("cms",{

/***/ "./src/components/PageHeader.js":
/*!**************************************!*\
  !*** ./src/components/PageHeader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./src/components/Image.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _PageHeader_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageHeader.css */ "./src/components/PageHeader.css");
/* harmony import */ var _PageHeader_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PageHeader_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\PageHeader.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var PageHeader = function PageHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      backgroundImage = _ref.backgroundImage,
      large = _ref.large,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  if (large) className += ' PageHeader-large';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PageHeader relative " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, backgroundImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    background: true,
    resolutions: "large",
    src: backgroundImage,
    alt: title,
    size: "cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "PageHeader--Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, title), subtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "PageHeader--Subtitle",
    src: subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
};

PageHeader.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var _default = PageHeader;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageHeader, "PageHeader", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\PageHeader.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\PageHeader.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.d1728ede3d971da6b31d.hot-update.js.map