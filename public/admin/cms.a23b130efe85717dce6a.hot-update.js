webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderTemplate/slidertemplate.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/components/Slider/SliderTemplate/slidertemplate.css ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".image{\n    width: 100%;\n    text-align: center;\n    margin-top: 50px;\n}\n\n.image img{\n    width: 90%;\n    height: 500px;\n}\n\n@media only screen and (max-width: 1024px){\n    .image{\n        margin-top: 300px;\n    }\n    .image img{\n        width: 85%;\n        height: auto;\n        max-height: 500px;\n    } \n}\n\n@media only screen and (max-width: 800px){\n    .image{\n        margin-top: 300px;\n    }\n    .image img{\n        width: 85%;\n        height: auto;\n        max-height: 400px;\n    }   \n}\n\n@media only screen and (max-width: 500px){\n    .image{\n        margin-top: 200px;\n    }\n    .image img{\n        width: 80%;\n        height: auto;\n        max-height: 200px;\n    } \n    \n}\n\n", "", {"version":3,"sources":["D:/gatsby/Vertex/gatsby-website/src/components/Slider/SliderTemplate/D:/gatsby/Vertex/gatsby-website/src/components/Slider/SliderTemplate/slidertemplate.css"],"names":[],"mappings":"AAAA;IACI,YAAW;IACX,mBAAkB;IAClB,iBAAgB;CACpB;;AAEA;IACI,WAAU;IACV,cAAa;CACjB;;AAEA;IACI;QACI,kBAAiB;KACrB;IACA;QACI,WAAU;QACV,aAAY;QACZ,kBAAiB;KACrB;CACJ;;AAEA;IACI;QACI,kBAAiB;KACrB;IACA;QACI,WAAU;QACV,aAAY;QACZ,kBAAiB;KACrB;CACJ;;AAEA;IACI;QACI,kBAAiB;KACrB;IACA;QACI,WAAU;QACV,aAAY;QACZ,kBAAiB;KACrB;;CAEJ","file":"slidertemplate.css","sourcesContent":[".image{\n    width: 100%;\n    text-align: center;\n    margin-top: 50px;\n}\n\n.image img{\n    width: 90%;\n    height: 500px;\n}\n\n@media only screen and (max-width: 1024px){\n    .image{\n        margin-top: 300px;\n    }\n    .image img{\n        width: 85%;\n        height: auto;\n        max-height: 500px;\n    } \n}\n\n@media only screen and (max-width: 800px){\n    .image{\n        margin-top: 300px;\n    }\n    .image img{\n        width: 85%;\n        height: auto;\n        max-height: 400px;\n    }   \n}\n\n@media only screen and (max-width: 500px){\n    .image{\n        margin-top: 200px;\n    }\n    .image img{\n        width: 80%;\n        height: auto;\n        max-height: 200px;\n    } \n    \n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderWithGallery/sliderwithgallery.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/components/Slider/SliderWithGallery/sliderwithgallery.css ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".slider{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    opacity: 1;\n    display: none;\n}\n\n.slider_background{\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n    position: absolute;\n    background: blue;\n    z-index: -1;\n}\n\n.sliderButton{\n    width: 98%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    top: 280px;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.sliderButton button{\n    background: rgb(66, 10, 199);\n    color: white;\n    opacity: 0.8;\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    border-width: 1px;\n}\n.close_button  button{\n    position: relative;\n    float: right;\n    margin-right: 5px;\n    margin-top: 5px;\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    background: rgb(66, 10, 199);\n    color: white;\n    opacity: 0.8;\n    border-width: 1px;\n\n}\n\n.buttonPrew{\n    margin-left: 29px;\n   \n}\n\n@media only screen and (max-width: 1024px){\n\n    .sliderButton{\n        top: 550px;\n    }   \n\n\n}\n\n@media only screen and (max-width: 800px){\n    .sliderButton{\n        top: 500px;\n    }    \n    .buttonPrew{\n        margin-left: 15px;\n    }\n}\n\n@media only screen and (max-width: 500px){\n    .sliderButton{\n        top:280px;\n    } \n\n    .sliderButton button{\n        height: 20px;\n        width: 20px;\n    }\n    .buttonPrew{\n        margin-left: 10px;\n    }\n    .buttonNext{\n        margin-right: 3px;\n    }    \n}\n", "", {"version":3,"sources":["D:/gatsby/Vertex/gatsby-website/src/components/Slider/SliderWithGallery/D:/gatsby/Vertex/gatsby-website/src/components/Slider/SliderWithGallery/sliderwithgallery.css"],"names":[],"mappings":"AAAA;IACI,mBAAkB;IAClB,YAAW;IACX,aAAY;IACZ,cAAa;IACb,WAAU;IACV,cAAa;CACjB;;AAEA;IACI,YAAW;IACX,aAAY;IACZ,aAAY;IACZ,mBAAkB;IAClB,iBAAgB;IAChB,YAAW;CACf;;AAEA;IACI,WAAU;IACV,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,mBAAkB;IAClB,0BAA8B;QAA9B,uBAA8B;YAA9B,+BAA8B;IAC9B,WAAU;IACV,yBAAkB;QAAlB,sBAAkB;YAAlB,mBAAkB;IAClB,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;CACvB;;AAEA;IACI,6BAA4B;IAC5B,aAAY;IACZ,aAAY;IACZ,aAAY;IACZ,YAAW;IACX,mBAAkB;IAClB,kBAAiB;CACrB;AACA;IACI,mBAAkB;IAClB,aAAY;IACZ,kBAAiB;IACjB,gBAAe;IACf,aAAY;IACZ,YAAW;IACX,mBAAkB;IAClB,6BAA4B;IAC5B,aAAY;IACZ,aAAY;IACZ,kBAAiB;;CAErB;;AAEA;IACI,kBAAiB;;CAErB;;AAEA;;IAEI;QACI,WAAU;KACd;;;CAGJ;;AAEA;IACI;QACI,WAAU;KACd;IACA;QACI,kBAAiB;KACrB;CACJ;;AAEA;IACI;QACI,UAAS;KACb;;IAEA;QACI,aAAY;QACZ,YAAW;KACf;IACA;QACI,kBAAiB;KACrB;IACA;QACI,kBAAiB;KACrB;CACJ","file":"sliderwithgallery.css","sourcesContent":[".slider{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    opacity: 1;\n    display: none;\n}\n\n.slider_background{\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n    position: absolute;\n    background: blue;\n    z-index: -1;\n}\n\n.sliderButton{\n    width: 98%;\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    top: 280px;\n    align-items:center;\n    flex-direction: row;\n}\n\n.sliderButton button{\n    background: rgb(66, 10, 199);\n    color: white;\n    opacity: 0.8;\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    border-width: 1px;\n}\n.close_button  button{\n    position: relative;\n    float: right;\n    margin-right: 5px;\n    margin-top: 5px;\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    background: rgb(66, 10, 199);\n    color: white;\n    opacity: 0.8;\n    border-width: 1px;\n\n}\n\n.buttonPrew{\n    margin-left: 29px;\n   \n}\n\n@media only screen and (max-width: 1024px){\n\n    .sliderButton{\n        top: 550px;\n    }   \n\n\n}\n\n@media only screen and (max-width: 800px){\n    .sliderButton{\n        top: 500px;\n    }    \n    .buttonPrew{\n        margin-left: 15px;\n    }\n}\n\n@media only screen and (max-width: 500px){\n    .sliderButton{\n        top:280px;\n    } \n\n    .sliderButton button{\n        height: 20px;\n        width: 20px;\n    }\n    .buttonPrew{\n        margin-left: 10px;\n    }\n    .buttonNext{\n        margin-right: 3px;\n    }    \n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/components/Slider.js":
false,

/***/ "./src/components/Slider/SliderTemplate/slidertemplate.css":
/*!*****************************************************************!*\
  !*** ./src/components/Slider/SliderTemplate/slidertemplate.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./slidertemplate.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderTemplate/slidertemplate.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./slidertemplate.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderTemplate/slidertemplate.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./slidertemplate.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderTemplate/slidertemplate.css");

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

/***/ "./src/components/Slider/SliderTemplate/slidertemplate.js":
/*!****************************************************************!*\
  !*** ./src/components/Slider/SliderTemplate/slidertemplate.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slidertemplate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slidertemplate.css */ "./src/components/Slider/SliderTemplate/slidertemplate.css");
/* harmony import */ var _slidertemplate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slidertemplate_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider\\SliderTemplate\\slidertemplate.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 
 * SliderTemplate : take one object and set it to slider 
 * 
 */

/*------- slidertemplate.css : For Style ---------- */



var SliderTemplate = function SliderTemplate(_ref) {
  var property = _ref.property;
  var download_url = property.download_url,
      author = property.author;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/banner.jpeg",
    className: "responsive",
    alt: "dummeys",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

var _default = SliderTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SliderTemplate, "SliderTemplate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider\\SliderTemplate\\slidertemplate.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider\\SliderTemplate\\slidertemplate.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Slider/SliderWithGallery/sliderwithgallery.css":
/*!***********************************************************************!*\
  !*** ./src/components/Slider/SliderWithGallery/sliderwithgallery.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./sliderwithgallery.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderWithGallery/sliderwithgallery.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./sliderwithgallery.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderWithGallery/sliderwithgallery.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./sliderwithgallery.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/SliderWithGallery/sliderwithgallery.css");

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
      dataItem: _this.props.data[0],
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

/***/ }),

/***/ "./src/templates/HomePage.js":
/*!***********************************!*\
  !*** ./src/templates/HomePage.js ***!
  \***********************************/
/*! exports provided: HomePageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageTemplate", function() { return HomePageTemplate; });
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
/* harmony import */ var _components_Slider_SliderWithGallery_sliderwithgallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Slider/SliderWithGallery/sliderwithgallery */ "./src/components/Slider/SliderWithGallery/sliderwithgallery.js");

var _jsxFileName = "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\HomePage.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();









 // Export Template for use in CMS preview

var HomePageTemplate = function HomePageTemplate(_ref) {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Slider_SliderWithGallery_sliderwithgallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Our gallery component"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: gallery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "BackgroundVideo-section section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BackgroundVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    poster: videoPoster,
    videoTitle: videoTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, video && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: video,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: accordion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))));
};

var HomePage = function HomePage(_ref2) {
  var page = _ref2.data.page;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomePageTemplate, Object.assign({}, page, page.frontmatter, {
    body: page.html,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })));
};

var _default = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3942651711";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePageTemplate, "HomePageTemplate", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\HomePage.js");
  reactHotLoader.register(HomePage, "HomePage", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\HomePage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\HomePage.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\templates\\HomePage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.a23b130efe85717dce6a.hot-update.js.map