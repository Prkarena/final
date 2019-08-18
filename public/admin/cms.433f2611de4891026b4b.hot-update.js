webpackHotUpdate("cms",{

/***/ "./src/components/Slider/SliderWithGallery/sliderwithgallery.js":
/*!**********************************************************************!*\
  !*** ./src/components/Slider/SliderWithGallery/sliderwithgallery.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sliderwithgallery_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliderwithgallery.css */ "./src/components/Slider/SliderWithGallery/sliderwithgallery.css");
/* harmony import */ var _sliderwithgallery_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sliderwithgallery_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SliderTemplate_slidertemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SliderTemplate/slidertemplate */ "./src/components/Slider/SliderTemplate/slidertemplate.js");

var _jsxFileName = "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider\\SliderWithGallery\\sliderwithgallery.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 
 * SliderWithGallery
 *  1. sliderwithgallery.css : for style
 *  2. Components : 
 *     2.1 SliderTemplate : takes one object of our data and set it to slider
 *     2.2 Gallery : takes data and setIndex method and gave us image gallery 
 *  3. state : 
 *     3.1 data : data from props
 *     3.2 dataItem : store dataItem from our data
 *     3.3 show : bollen - true : for show slider and false for hide slider
 *  4. nextDataItem : function which set next data item to state
 *  5. prewDataItem : function which set previous data item to state
 *  6. showSlider : function which handle slider show or not using state variable show
 *  7. setIndex : function which set Index of dataitem to be shown in slider
 * 
 */

/*------- slider.css : For Style ---------- */


/*-------- Components ---------------------*/



var SliderWithGallery =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SliderWithGallery, _Component);

  function SliderWithGallery() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      data: _this.props.data,
      dataItem: _this.props.data,
      show: false
    };

    _this.nextDataItem = function () {
      var newIndex = _this.state.data.indexOf(_this.state.dataItem) + 1;

      _this.setState({
        dataItem: _this.props.data[newIndex]
      });
    };

    _this.prewDataItem = function () {
      var newIndex = _this.state.data.indexOf(_this.state.dataItem) - 1;

      _this.setState({
        dataItem: _this.props.data[newIndex]
      });
    };

    _this.setIndex = function (i) {
      _this.setState({
        dataItem: _this.state.data[i]
      });
    };

    return _this;
  }

  var _proto = SliderWithGallery.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        data = _this$state.data,
        dataItem = _this$state.dataItem,
        show = _this$state.show;
    {
      /*---- style of slider ---*/
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sliderWithGallery",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "slider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sliderButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return _this2.prewDataItem();
      },
      disabled: data.indexOf(dataItem) === 0,
      className: "buttonPrew",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "P"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return _this2.nextDataItem();
      },
      disabled: data.indexOf(dataItem) === data.length - 1,
      className: "buttonNext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "N")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SliderTemplate_slidertemplate__WEBPACK_IMPORTED_MODULE_3__["default"], {
      property: dataItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return SliderWithGallery;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = SliderWithGallery;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SliderWithGallery, "SliderWithGallery", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider\\SliderWithGallery\\sliderwithgallery.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider\\SliderWithGallery\\sliderwithgallery.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.433f2611de4891026b4b.hot-update.js.map