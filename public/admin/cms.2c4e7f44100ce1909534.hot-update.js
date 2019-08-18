webpackHotUpdate("cms",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav.css */ "./src/components/Nav.css");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Nav_css__WEBPACK_IMPORTED_MODULE_8__);




(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var Navigation =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Navigation, _Component);

  function Navigation() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      active: false,
      activeSubNav: false,
      currentPath: false
    };

    _this.componentDidMount = function () {
      return _this.setState({
        currentPath: _this.props.location.pathname
      });
    };

    _this.handleMenuToggle = function () {
      return _this.setState({
        active: !_this.state.active
      });
    };

    _this.handleLinkClick = function () {
      return _this.state.active && _this.handleMenuToggle();
    };

    _this.toggleSubNav = function (subNav) {
      return _this.setState({
        activeSubNav: _this.state.activeSubNav === subNav ? false : subNav
      });
    };

    return _this;
  }

  var _proto = Navigation.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var active = this.state.active,
        subNav = this.props.subNav,
        NavLink = function NavLink(_ref) {
      var to = _ref.to,
          className = _ref.className,
          children = _ref.children,
          props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["to", "className", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], Object.assign({
        to: to,
        className: "NavLink " + (to === _this2.state.currentPath ? 'active' : '') + " " + className,
        onClick: _this2.handleLinkClick
      }, props), children);
    };

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: "Nav " + (active ? 'Nav-active' : '')
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "Nav--Container container"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/",
      onClick: this.handleLinkClick
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "Nav--Links"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/"
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/about/"
    }, "About-Us"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/products/"
    }, "Products"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/services/"
    }, "Services"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/contact/"
    }, "Contact-Us"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/blog/"
    }, "Blog"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NavLink, {
      to: "/careers/"
    }, "Careers")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: "Button-blank Nav--MenuButton",
      onClick: this.handleMenuToggle
    }, active ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["X"], null) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["Menu"], null))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var _default = function _default(_ref2) {
  var subNav = _ref2.subNav;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_4__["Location"], null, function (route) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Navigation, Object.assign({
      subNav: subNav
    }, route));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Nav.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Nav.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.2c4e7f44100ce1909534.hot-update.js.map