webpackHotUpdate("cms",{

/***/ "./src/cms/cms.js":
/*!************************!*\
  !*** ./src/cms/cms.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! netlify-cms */ "./node_modules/netlify-cms/dist/netlify-cms.js");
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(netlify_cms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cms_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cms-utils */ "./src/cms/cms-utils.js");
/* harmony import */ var _cms_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cms_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/HomePage */ "./src/templates/HomePage.js");
/* harmony import */ var _templates_ComponentsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/ComponentsPage */ "./src/templates/ComponentsPage.js");
/* harmony import */ var _templates_ProductsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/ProductsPage */ "./src/templates/ProductsPage.js");
/* harmony import */ var _templates_ContactPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/ContactPage */ "./src/templates/ContactPage.js");
/* harmony import */ var _templates_AboutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/AboutPage */ "./src/templates/AboutPage.js");
/* harmony import */ var _templates_DefaultPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/DefaultPage */ "./src/templates/DefaultPage.js");
/* harmony import */ var _templates_BlogIndex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../templates/BlogIndex */ "./src/templates/BlogIndex.js");
/* harmony import */ var _templates_SinglePost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../templates/SinglePost */ "./src/templates/SinglePost.js");












if (window.location.hostname === 'localhost' && window.localStorage.getItem('netlifySiteURL')) {
  netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewStyle(window.localStorage.getItem('netlifySiteURL') + '/styles.css');
} else {
  netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewStyle('/styles.css');
}

netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('home-page', function (_ref) {
  var entry = _ref.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_HomePage__WEBPACK_IMPORTED_MODULE_3__["HomePageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('products-page', function (_ref2) {
  var entry = _ref2.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_ProductsPage__WEBPACK_IMPORTED_MODULE_5__["ProductsPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('components-page', function (_ref3) {
  var entry = _ref3.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_ComponentsPage__WEBPACK_IMPORTED_MODULE_4__["ComponentsPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('contact-page', function (_ref4) {
  var entry = _ref4.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_ContactPage__WEBPACK_IMPORTED_MODULE_6__["ContactPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('about-page', function (_ref5) {
  var entry = _ref5.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_AboutPage__WEBPACK_IMPORTED_MODULE_7__["AboutPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('infoPages', function (_ref6) {
  var entry = _ref6.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_DefaultPage__WEBPACK_IMPORTED_MODULE_8__["DefaultPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('blog-page', function (_ref7) {
  var entry = _ref7.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_BlogIndex__WEBPACK_IMPORTED_MODULE_9__["BlogIndexTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('posts', function (_ref8) {
  var entry = _ref8.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_SinglePost__WEBPACK_IMPORTED_MODULE_10__["SinglePostTemplate"], entry.toJS().data);
});

/***/ })

})
//# sourceMappingURL=cms.3c97646841757d2eac35.hot-update.js.map