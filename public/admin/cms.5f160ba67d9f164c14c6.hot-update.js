webpackHotUpdate("cms",{

/***/ "./src/templates/SinglePost.js":
/*!*************************************!*\
  !*** ./src/templates/SinglePost.js ***!
  \*************************************/
/*! exports provided: SinglePostTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostTemplate", function() { return SinglePostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _SinglePost_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SinglePost.css */ "./src/templates/SinglePost.css");
/* harmony import */ var _SinglePost_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SinglePost_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\SinglePost.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();









var SinglePostTemplate = function SinglePostTemplate(_ref) {
  var title = _ref.title,
      date = _ref.date,
      body = _ref.body,
      nextPostURL = _ref.nextPostURL,
      prevPostURL = _ref.prevPostURL,
      _ref$categories = _ref.categories,
      categories = _ref$categories === void 0 ? [] : _ref$categories;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    className: "SinglePost section light",
    itemScope: true,
    itemType: "http://schema.org/BlogPosting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container skinny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: "SinglePost--BackButton",
    to: "/blog/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["ChevronLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), " BACK"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "SinglePost--Content relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "SinglePost--Meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, date && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("time", {
    className: "SinglePost--Meta--Date",
    itemProp: "dateCreated pubdate datePublished",
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(date, 'MMMM Do, YYYY')), categories && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "|"), categories.map(function (cat, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: cat.category,
      className: "SinglePost--Meta--Category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, cat.category, index !== categories.length - 1 ? ',' : '');
  }))), title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "SinglePost--Title",
    itemProp: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "SinglePost--InnerContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
    source: body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "SinglePost--Pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, prevPostURL && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: "SinglePost--Pagination--Link prev",
    to: prevPostURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Previous Post"), nextPostURL && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: "SinglePost--Pagination--Link next",
    to: nextPostURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Next Post"))))));
}; // Export Default SinglePost for front-end

var SinglePost = function SinglePost(_ref2) {
  var _ref2$data = _ref2.data,
      post = _ref2$data.post,
      allPosts = _ref2$data.allPosts;
  var thisEdge = allPosts.edges.find(function (edge) {
    return edge.node.id === post.id;
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    meta: post.frontmatter.meta || false,
    title: post.frontmatter.title || false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SinglePostTemplate, Object.assign({}, post, post.frontmatter, {
    body: post.html,
    nextPostURL: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(thisEdge, 'next.fields.slug'),
    prevPostURL: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(thisEdge, 'previous.fields.slug'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })));
};

var _default = SinglePost;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "489415552";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SinglePostTemplate, "SinglePostTemplate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\SinglePost.js");
  reactHotLoader.register(SinglePost, "SinglePost", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\SinglePost.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\SinglePost.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\SinglePost.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.5f160ba67d9f164c14c6.hot-update.js.map