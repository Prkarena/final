webpackHotUpdate("cms",{

/***/ "./src/components/ProductCard/ProductCard.js":
/*!***************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.js ***!
  \***************************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCard; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-photoswipe */ "./node_modules/react-photoswipe/lib/index.js");
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image */ "./src/components/Image.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProductCard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductCard.css */ "./src/components/ProductCard/ProductCard.css");
/* harmony import */ var _ProductCard_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-photoswipe/lib/photoswipe.css */ "./node_modules/react-photoswipe/lib/photoswipe.css");
/* harmony import */ var react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\gatsby\\fefar\\briota\\src\\components\\ProductCard\\ProductCard.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var query = "1675154412";

var ProductCard =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ProductCard, _Component);

  function ProductCard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      loaded: false,
      isOpen: false,
      sliderImages: [],
      index: 0
    };

    _this.getImageInfo = function (img, index) {
      return fetch(img.image + '-/json/').then(function (res) {
        return res.json();
      }).then(function (result) {
        var newImagesArr = [].concat(_this.state.sliderImages);
        newImagesArr[index] = {
          src: img.image,
          title: img.title,
          w: result.width,
          h: result.height
        };

        _this.setState({
          sliderImages: newImagesArr
        });

        return true;
      }, function (error) {
        console.log(error);
        return false;
      });
    };

    return _this;
  }

  var _proto = ProductCard.prototype;

  _proto.isOpen = function isOpen(_isOpen, index) {
    if (typeof index === 'undefined') index = 0;
    this.setState({
      isOpen: _isOpen,
      index: index
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    var images = this.props.images,
        maxCount = images.length;
    var loopCount = 1;

    for (var i in images) {
      if (this.getImageInfo(images[i], i)) {
        this.setState({
          loaded: loopCount === maxCount
        });
        loopCount++;
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var images = this.props.images;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, images && images.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row Gallery",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-8 Gallery--Item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
        key: lodash_kebabCase__WEBPACK_IMPORTED_MODULE_5___default()(image.alt) + '-' + index,
        onClick: function onClick() {
          return _this2.isOpen(true, index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        resolutions: "small",
        src: image.image,
        alt: image.alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), image.title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figcaption", {
        className: "figcaptions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, image.title)));
    }))), this.state.loaded && this.state.sliderImages.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_photoswipe__WEBPACK_IMPORTED_MODULE_3__["PhotoSwipe"], {
      isOpen: this.state.isOpen,
      items: this.state.sliderImages,
      options: {
        index: this.state.index,
        history: false
      },
      onClose: function onClose() {
        return _this2.isOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


ProductCard.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "D:\\gatsby\\fefar\\briota\\src\\components\\ProductCard\\ProductCard.js");
  reactHotLoader.register(ProductCard, "ProductCard", "D:\\gatsby\\fefar\\briota\\src\\components\\ProductCard\\ProductCard.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.f7344215dc605d607980.hot-update.js.map