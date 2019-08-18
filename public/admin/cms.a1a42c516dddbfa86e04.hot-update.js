webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/templates/AboutPage.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/templates/AboutPage.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AboutPage.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/templates/AboutPage.css":
/*!*************************************!*\
  !*** ./src/templates/AboutPage.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--12-oneOf-1-1!../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./AboutPage.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/templates/AboutPage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--12-oneOf-1-1!../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./AboutPage.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/templates/AboutPage.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--12-oneOf-1-1!../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./AboutPage.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/templates/AboutPage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/templates/AboutPage.js":
/*!************************************!*\
  !*** ./src/templates/AboutPage.js ***!
  \************************************/
/*! exports provided: AboutPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageTemplate", function() { return AboutPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content.js */ "./src/components/Content.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout.js */ "./src/components/Layout.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Accordion */ "./src/components/Accordion.js");
/* harmony import */ var _components_BackgroundVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BackgroundVideo */ "./src/components/BackgroundVideo.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Gallery */ "./src/components/Gallery.js");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Popup */ "./src/components/Popup.js");
/* harmony import */ var _AboutPage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AboutPage.css */ "./src/templates/AboutPage.css");
/* harmony import */ var _AboutPage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AboutPage_css__WEBPACK_IMPORTED_MODULE_9__);


(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();









/*----------- css -----------*/

 // Export Template for use in CMS preview

var AboutPageTemplate = function AboutPageTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      section1 = _ref.section1,
      section2 = _ref.section2,
      video = _ref.video,
      videoPoster = _ref.videoPoster,
      videoTitle = _ref.videoTitle,
      accordion = _ref.accordion,
      body = _ref.body,
      gallery = _ref.gallery;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section1
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Our gallery component"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: gallery
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section2
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "BackgroundVideo-section section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BackgroundVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    poster: videoPoster,
    videoTitle: videoTitle
  }, video && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: video,
    type: "video/mp4"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: accordion
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section1
  })))));
};

var AboutPage = function AboutPage(_ref2) {
  var page = _ref2.data.page;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AboutPageTemplate, Object.assign({}, page, page.frontmatter, {
    body: page.html
  })));
};

var _default = AboutPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "993121753";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AboutPageTemplate, "AboutPageTemplate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\AboutPage.js");
  reactHotLoader.register(AboutPage, "AboutPage", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\AboutPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\AboutPage.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\AboutPage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.a1a42c516dddbfa86e04.hot-update.js.map