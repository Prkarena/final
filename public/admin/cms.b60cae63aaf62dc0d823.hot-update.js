webpackHotUpdate("cms",{

/***/ "./src/components/PostCategoriesNav.js":
/*!*********************************************!*\
  !*** ./src/components/PostCategoriesNav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _BlogSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogSearch */ "./src/components/BlogSearch.js");
/* harmony import */ var _PostCategoriesNav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostCategoriesNav.css */ "./src/components/PostCategoriesNav.css");
/* harmony import */ var _PostCategoriesNav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostCategoriesNav_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var PostCategoriesNav = function PostCategoriesNav(_ref) {
  var categories = _ref.categories,
      enableSearch = _ref.enableSearch,
      slug = _ref.slug;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PostCategoriesNav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "NavLink",
    exact: "true",
    to: "/" + slug + "/"
  }, "All"), console.log(categories), categories.map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      exact: "true",
      className: "NavLink",
      key: category.title + index,
      to: slug
    }, category.title);
  }), enableSearch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogSearch__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

var _default = PostCategoriesNav;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PostCategoriesNav, "PostCategoriesNav", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\PostCategoriesNav.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\PostCategoriesNav.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.b60cae63aaf62dc0d823.hot-update.js.map