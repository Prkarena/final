webpackHotUpdate("cms",{

/***/ "./src/templates/ProductsPage.js":
/*!***************************************!*\
  !*** ./src/templates/ProductsPage.js ***!
  \***************************************/
/*! exports provided: byDate, byCategory, ProductsPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byDate", function() { return byDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byCategory", function() { return byCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageTemplate", function() { return ProductsPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_PostCategoriesNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PostCategoriesNav */ "./src/components/PostCategoriesNav.js");
/* harmony import */ var _components_PostSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PostSection */ "./src/components/PostSection.js");






(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */

var byDate = function byDate(posts) {
  var now = Date.now();
  return posts.filter(function (post) {
    return Date.parse(post.date) <= now;
  });
};
/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */

var byCategory = function byCategory(posts, title, contentType) {
  var isCategory = contentType === 'postCategories';

  var byCategory = function byCategory(post) {
    return post.categories && post.categories.filter(function (cat) {
      return cat.category === title;
    }).length;
  };

  return isCategory ? posts.filter(byCategory) : posts;
}; // Export Template for use in CMS preview

var ProductsPageTemplate = function ProductsPageTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts,
      _ref$postCategories = _ref.postCategories,
      postCategories = _ref$postCategories === void 0 ? [] : _ref$postCategories,
      _ref$enableSearch = _ref.enableSearch,
      enableSearch = _ref$enableSearch === void 0 ? true : _ref$enableSearch,
      contentType = _ref.contentType;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Location"], null, function (_ref2) {
    var location = _ref2.location;
    var filteredPosts = posts && !!posts.length ? byCategory(byDate(posts), title, contentType) : [];
    var queryObj = location.search.replace('?', '');
    queryObj = qs__WEBPACK_IMPORTED_MODULE_7___default.a.parse(queryObj);

    if (enableSearch && queryObj.s) {
      var searchTerm = queryObj.s.toLowerCase();
      filteredPosts = filteredPosts.filter(function (post) {
        return post.frontmatter.title.toLowerCase().includes(searchTerm);
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
      className: "Blog"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: title,
      subtitle: subtitle,
      backgroundImage: featuredImage
    }), !!postCategories.length && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
      className: "section thin"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PostCategoriesNav__WEBPACK_IMPORTED_MODULE_10__["default"], {
      enableSearch: true,
      categories: postCategories
    }))), !!posts.length && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PostSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
      posts: filteredPosts
    }))));
  });
}; // Export Default BlogIndex for front-end

var ProductsPage = function ProductsPage(_ref3) {
  var _ref3$data = _ref3.data,
      page = _ref3$data.page,
      posts = _ref3$data.posts,
      postCategories = _ref3$data.postCategories;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ProductsPageTemplate, Object.assign({}, page, page.fields, page.frontmatter, {
    posts: posts.edges.map(function (post) {
      return Object.assign({}, post.node, post.node.frontmatter, post.node.fields);
    }),
    postCategories: postCategories.edges.map(function (post) {
      return Object.assign({}, post.node, post.node.frontmatter, post.node.fields);
    })
  })));
};

var _default = ProductsPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "2362709800";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(byDate, "byDate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\ProductsPage.js");
  reactHotLoader.register(byCategory, "byCategory", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\ProductsPage.js");
  reactHotLoader.register(ProductsPageTemplate, "ProductsPageTemplate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\ProductsPage.js");
  reactHotLoader.register(ProductsPage, "ProductsPage", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\ProductsPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\ProductsPage.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\ProductsPage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.d52241e57e9d1c6c2ed9.hot-update.js.map