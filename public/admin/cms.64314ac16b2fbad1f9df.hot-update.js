webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/templates/ContactPage.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/templates/ContactPage.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Contact {\r\n}\r\n\r\n.Contact--Details {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.Contact--Details--Item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 2rem 0;\r\n  border-top: 1px solid whitesmoke;\r\n  border-top: 1px solid var(--lightGrey);\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  -webkit-transition: color 0.2s ease-in-out;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\n.Contact--Details--Item:hover,\r\n.Contact--Details--Item:focus {\r\n  color: #00c2bd;\r\n  color: var(--primary);\r\n}\r\n\r\n.Contact--Details--Item svg {\r\n  margin-right: 1.5rem;\r\n  color: #00c2bd;\r\n  color: var(--primary);\r\n}\r\n\r\n@media (min-width: 750px) {\r\n  .Contact--Section1--Container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n  }\r\n\r\n  .Contact--Section1--Container > * {\r\n    width: calc(50% - 2rem);\r\n  }\r\n}\r\n", "", {"version":3,"sources":["D:/gatsby/Vertex/gatsby-website/src/templates/D:/gatsby/Vertex/gatsby-website/src/templates/ContactPage.css"],"names":[],"mappings":"AAAA;CACA;;AAEA;EACE,iBAAgB;CAClB;;AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,gBAAe;EACf,iCAAsC;EAAtC,uCAAsC;EACtC,iBAAgB;EAChB,sBAAqB;EACrB,eAAc;EACd,2CAAkC;EAAlC,mCAAkC;CACpC;;AAEA;;EAEE,eAAqB;EAArB,sBAAqB;CACvB;;AAEA;EACE,qBAAoB;EACpB,eAAqB;EAArB,sBAAqB;CACvB;;AAEA;EACE;IACE,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,0BAA8B;QAA9B,uBAA8B;YAA9B,+BAA8B;IAC9B,yBAAuB;QAAvB,sBAAuB;YAAvB,wBAAuB;GACzB;;EAEA;IACE,wBAAuB;GACzB;CACF","file":"ContactPage.css","sourcesContent":[".Contact {\r\n}\r\n\r\n.Contact--Details {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.Contact--Details--Item {\r\n  display: flex;\r\n  padding: 2rem 0;\r\n  border-top: 1px solid var(--lightGrey);\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\n.Contact--Details--Item:hover,\r\n.Contact--Details--Item:focus {\r\n  color: var(--primary);\r\n}\r\n\r\n.Contact--Details--Item svg {\r\n  margin-right: 1.5rem;\r\n  color: var(--primary);\r\n}\r\n\r\n@media (min-width: 750px) {\r\n  .Contact--Section1--Container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .Contact--Section1--Container > * {\r\n    width: calc(50% - 2rem);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

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
/* harmony import */ var _templates_ServicesPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/ServicesPage */ "./src/templates/ServicesPage.js");
/* harmony import */ var _templates_ContactPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/ContactPage */ "./src/templates/ContactPage.js");
/* harmony import */ var _templates_AboutPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/AboutPage */ "./src/templates/AboutPage.js");
/* harmony import */ var _templates_CareersPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../templates/CareersPage */ "./src/templates/CareersPage.js");
/* harmony import */ var _templates_DefaultPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../templates/DefaultPage */ "./src/templates/DefaultPage.js");
/* harmony import */ var _templates_BlogIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../templates/BlogIndex */ "./src/templates/BlogIndex.js");
/* harmony import */ var _templates_SinglePost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../templates/SinglePost */ "./src/templates/SinglePost.js");














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
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('services-page', function (_ref3) {
  var entry = _ref3.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_ServicesPage__WEBPACK_IMPORTED_MODULE_6__["ServicesPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('components-page', function (_ref4) {
  var entry = _ref4.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_ComponentsPage__WEBPACK_IMPORTED_MODULE_4__["ComponentsPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('contact-page', function (_ref5) {
  var entry = _ref5.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_ContactPage__WEBPACK_IMPORTED_MODULE_7__["ContactPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('careers-page', function (_ref6) {
  var entry = _ref6.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_CareersPage__WEBPACK_IMPORTED_MODULE_13__["CareersPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('about-page', function (_ref7) {
  var entry = _ref7.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_AboutPage__WEBPACK_IMPORTED_MODULE_8__["AboutPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('infoPages', function (_ref8) {
  var entry = _ref8.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_DefaultPage__WEBPACK_IMPORTED_MODULE_10__["DefaultPageTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('blog-page', function (_ref9) {
  var entry = _ref9.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_BlogIndex__WEBPACK_IMPORTED_MODULE_11__["BlogIndexTemplate"], entry.toJS().data);
});
netlify_cms__WEBPACK_IMPORTED_MODULE_1___default.a.registerPreviewTemplate('posts', function (_ref10) {
  var entry = _ref10.entry;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_SinglePost__WEBPACK_IMPORTED_MODULE_12__["SinglePostTemplate"], entry.toJS().data);
});

/***/ }),

/***/ "./src/templates/CareersPage.js":
/*!**************************************!*\
  !*** ./src/templates/CareersPage.js ***!
  \**************************************/
/*! exports provided: ContactPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageTemplate", function() { return ContactPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormSimpleAjax */ "./src/components/FormSimpleAjax.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_GoogleMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GoogleMap */ "./src/components/GoogleMap.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContactPage.css */ "./src/templates/ContactPage.css");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ContactPage_css__WEBPACK_IMPORTED_MODULE_8__);


(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








 // Export Template for use in CMS preview

var ContactPageTemplate = function ContactPageTemplate(_ref) {
  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      address = _ref.address,
      phone = _ref.phone,
      email = _ref.email,
      locations = _ref.locations;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "Contact"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section Contact--Section1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container Contact--Section1--Container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: body
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Contact--Details"
  }, address && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.google.com.au/maps/search/" + encodeURI(address),
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MapPin"], null), " ", address), phone && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "tel:" + phone
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Smartphone"], null), " ", phone), email && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "mailto:" + email
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Mail"], null), " ", email))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Simple Form Ajax"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GoogleMap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    locations: locations
  }));
};

var ContactPage = function ContactPage(_ref2) {
  var page = _ref2.data.page;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactPageTemplate, Object.assign({}, page.frontmatter, {
    body: page.html
  })));
};

var _default = ContactPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3855609909";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\CareersPage.js");
  reactHotLoader.register(ContactPage, "ContactPage", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\CareersPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\CareersPage.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\CareersPage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.64314ac16b2fbad1f9df.hot-update.js.map