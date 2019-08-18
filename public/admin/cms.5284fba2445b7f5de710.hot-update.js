webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/Slider.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/components/Slider/Slider.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Hammersmith+One&subset=latin,latin-ext);", ""]);

// module
exports.push([module.i, "@font-face {\r\n\tfont-family: \"speedcontrols\";\r\n\tsrc: url(" + escape(__webpack_require__(/*! ./speedcontrols.eot */ "./src/components/Slider/speedcontrols.eot")) + ");\r\n\tsrc: url(" + escape(__webpack_require__(/*! ./speedcontrols.eot */ "./src/components/Slider/speedcontrols.eot")) + "#iefix?cssslidertheme=speed) format(\"embedded-opentype\"),\r\n\t\t\turl(" + escape(__webpack_require__(/*! ./speedcontrols.woff */ "./src/components/Slider/speedcontrols.woff")) + ") format(\"woff\"),\r\n\t\t\turl(" + escape(__webpack_require__(/*! ./speedcontrols.ttf */ "./src/components/Slider/speedcontrols.ttf")) + ") format(\"truetype\"),\r\n\t\t\turl(" + escape(__webpack_require__(/*! ./speedcontrols.svg */ "./src/components/Slider/speedcontrols.svg")) + "#speed?cssslidertheme=speed) format(\"svg\");\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n}\r\n\r\n.csslider1 {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tmax-width: 830px;\r\n\t\r\n\twidth: 100%;\r\n\tmargin-top: 10px;\r\n}\r\n.csslider1 > .cs_anchor {\r\n\tdisplay: none;\r\n}\r\n.csslider1 > ul {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tfont-size: 0;\r\n\tline-height: 0;\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\t\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n}\r\n.csslider1 > ul > li.img img {\r\n\twidth: 100%;\r\n}\r\n.csslider1 > ul > li.img {\r\n\tfont-size: 0pt;\r\n\t-moz-user-select: none;\r\n\t-webkit-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n}\r\n.csslider1 > ul > li {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfont-size: 15px;\r\n\tfont-size: initial;\r\n\tline-height: normal;\r\n\twhite-space: normal;\r\n\tvertical-align: top;\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n.csslider1 .cs_lnk{\r\n\tposition: absolute;\r\n\ttop: -9999px;\r\n\tleft: -9999px;\r\n\tfont-size: 0pt;\r\n\topacity: 0;\r\n\tfilter: alpha(opacity=0);\r\n}.csslider1 > .cs_arrowprev,\r\n.csslider1 > .cs_arrownext {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-box-sizing: content-box;\r\n\tbox-sizing: content-box;\r\n\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tz-index: 5;\r\n}\r\n.csslider1 > .cs_arrowprev > label,\r\n.csslider1 > .cs_arrownext > label {\r\n\tposition: absolute;\r\n\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n\topacity: 0;\r\n\tz-index: -1;\r\n}\r\n.csslider1 > .cs_arrowprev {\r\n\tleft: 0;\r\n}\r\n.csslider1 > .cs_arrownext {\r\n\tright: 0;\r\n}\r\n\r\n.csslider1 > .cs_arrowprev > label.num3,\r\n.csslider1 > .cs_arrownext > label.num1 {\r\n\topacity: 1;\r\n\tz-index: 5;\r\n}\r\n.csslider1 > .slide:checked ~ .cs_arrowprev > label,\r\n.csslider1 > .slide:checked ~ .cs_arrownext > label {\r\n\topacity: 0;\r\n\tz-index: -1;\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_arrowprev > label.num3,\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_arrownext > label.num1, \r\n.csslider1 > #cs_slide1_1:checked ~ .cs_arrowprev > label.num0,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_arrownext > label.num2, \r\n.csslider1 > #cs_slide1_2:checked ~ .cs_arrowprev > label.num1,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_arrownext > label.num3, \r\n.csslider1 > #cs_slide1_3:checked ~ .cs_arrowprev > label.num2,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_arrownext > label.num0 {\r\n\topacity: 1;\r\n\tz-index: 5;\r\n}\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n@keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num3,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num1,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num3,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num1 {\r\n\t-webkit-animation: arrow 16000ms infinite -2000ms;\r\n\tanimation: arrow 16000ms infinite -2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num0,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num2,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num0,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num2 {\r\n\t-webkit-animation: arrow 16000ms infinite 2000ms;\r\n\tanimation: arrow 16000ms infinite 2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num1,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num3,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num1,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num3 {\r\n\t-webkit-animation: arrow 16000ms infinite 6000ms;\r\n\tanimation: arrow 16000ms infinite 6000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num2,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num0,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num2,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num0 {\r\n\t-webkit-animation: arrow 16000ms infinite 10000ms;\r\n\tanimation: arrow 16000ms infinite 10000ms;\r\n\t\r\n}\r\n\r\n\r\n.csslider1.cs_pauseHover:hover > .cs_arrowprev > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label,\r\n.csslider1.cs_pauseHover:hover > .cs_arrownext > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label {\r\n\t-webkit-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n.csslider1 > .slide:checked ~ .cs_arrowprev > label,\r\n.csslider1 > .slide:checked ~ .cs_arrownext > label {\r\n\t-webkit-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n\r\n/* /calculate autoplay */\r\n.csslider1 > .cs_bullets {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\tz-index: 6;\r\n\tfont-size: 0;\r\n\tline-height: 8pt;\r\n\ttext-align: center;\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n.csslider1 > .cs_bullets > div {\r\n\tmargin-left: -50%;\r\n\twidth: 100%;\r\n}\r\n.csslider1 > .cs_bullets > label {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tcursor: pointer;\r\n}\r\n.csslider1 > .cs_bullets > label > .cs_thumb {\r\n\tvisibility: hidden;\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n\tline-height: 0;\r\n\tleft: -55px;\r\n\ttop: -48px;\r\n}.csslider1 > .cs_description {\r\n\tz-index: 3;\r\n}\r\n.csslider1 > .cs_description a,\r\n.csslider1 > .cs_description a:visited,\r\n.csslider1 > .cs_description a:active {\r\n\tcolor: inherit;\r\n}\r\n.csslider1 > .cs_description a:hover {\r\n\ttext-decoration: none;\r\n}\r\n.csslider1 > .cs_description > label {\r\n\tposition: absolute;\r\n\tword-wrap: break-word;\r\n\twhite-space: normal;\r\n\ttext-align: left;\r\n\tmax-width: 50%;\r\n\tleft: 0;\r\n}\r\n.csslider1 > .cs_description > label > span {\r\n\tvertical-align: top;\r\n}\r\n.csslider1 > .cs_description > label span {\r\n\tdisplay: inline-block;\r\n}.csslider1 > ul > li.num0 {\r\n\tleft: 0%;\r\n}\r\n.csslider1 > ul > li.num1 {\r\n\tleft: 100%;\r\n}\r\n.csslider1 > ul > li.num2 {\r\n\tleft: 200%;\r\n}\r\n.csslider1 > ul > li.num3 {\r\n\tleft: 300%;\r\n}\r\n \r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ ul > li {\r\n\t-webkit-transform: translateX(0%);\r\n\ttransform: translateX(0%);\r\n\t\r\n}\r\n.csslider1 > #cs_slide1_1:checked ~ ul > li {\r\n\t-webkit-transform: translateX(-100%);\r\n\ttransform: translateX(-100%);\r\n\t\r\n}\r\n.csslider1 > #cs_slide1_2:checked ~ ul > li {\r\n\t-webkit-transform: translateX(-200%);\r\n\ttransform: translateX(-200%);\r\n\t\r\n}\r\n.csslider1 > #cs_slide1_3:checked ~ ul > li {\r\n\t-webkit-transform: translateX(-300%);\r\n\ttransform: translateX(-300%);\r\n\t\r\n}\r\n \r\n\r\n\r\n.csslider1 > ul > li {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tdisplay: inline-block;\r\n\topacity: 1;\r\n\r\n\t-webkit-transition: -webkit-transform 2000ms;\r\n\ttransition: -webkit-transform 2000ms;\r\n\ttransition: transform 2000ms;\r\n\ttransition: transform 2000ms, -webkit-transform 2000ms;\r\n\t\r\n}\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes slide {\r\n\t0%, 12.5%\t{ -webkit-transform: translateX(0%); }\r\n\t25%, 37.5%\t{ -webkit-transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ -webkit-transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ -webkit-transform: translateX(-300%); }\r\n\t\r\n}\r\n@keyframes slide {\r\n\t0%, 12.5%\t{ -webkit-transform: translateX(0%); transform: translateX(0%); }\r\n\t25%, 37.5%\t{ -webkit-transform: translateX(-100%); transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ -webkit-transform: translateX(-200%); transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ -webkit-transform: translateX(-300%); transform: translateX(-300%); }\r\n\t\r\n}\r\n\r\n\r\n.csslider1  > #cs_play1:checked ~ ul > li,\r\n.csslider1  > #cs_pause1:checked ~ ul > li {\r\n\t-webkit-animation: slide 16000ms infinite;\r\n\tanimation: slide 16000ms infinite;\r\n\t\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ ul > li,\r\n.csslider1 > #cs_pause1:checked ~ ul > li {\r\n\t-webkit-transition: none;\r\n\ttransition: none;\r\n\t\r\n}\r\n\r\n.csslider1.cs_pauseHover:hover > ul > li,\r\n.csslider1 > #cs_pause1:checked ~ ul > li {\r\n\t-webkit-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n\r\n.csslider1 > .slide:checked ~ ul > li {\r\n\t-webkit-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n/* /calculate autoplay */\r\n\r\n/* frame/shadow */\r\n.csslider1 {\r\n\t-webkit-box-shadow: 0 0 0 3px #fff;\r\n\tbox-shadow: 0 0 0 3px #fff;\r\n\tmargin-top: 13px;\r\n}\r\n\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {-webkit-transform: scale(1);}\r\n    100% {-webkit-transform: scale(1.2);}\r\n}\r\n@keyframes pulse {\r\n    0% {-webkit-transform: scale(1);transform: scale(1);}\r\n    100% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n}\r\n.csslider1 > .cs_arrowprev {\r\n  \t-webkit-transition: .5s -webkit-transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-webkit-transition: .5s transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: .5s transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_play_pause {\r\n  \t-webkit-transition: .5s -webkit-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-webkit-transition: .5s transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: .5s transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_arrownext {\r\n  \t-webkit-transition: .5s -webkit-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-webkit-transition: .5s transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: .5s transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_arrowprev,\r\n.csslider1 > .cs_arrownext,\r\n.csslider1 > .cs_play_pause {\r\n\t-webkit-transform: scale(0) rotate(180deg);\r\n\ttransform: scale(0) rotate(180deg);\r\n\t\r\n}\r\n\r\n.csslider1:hover > .cs_arrowprev,\r\n.csslider1:hover > .cs_arrownext,\r\n.csslider1:hover > .cs_play_pause {\r\n\t-webkit-transform: scale(1) rotate(0);\r\n\ttransform: scale(1) rotate(0);\r\n\t\r\n}.csslider1 > .cs_arrowprev > label,\r\n.csslider1 > .cs_arrownext > label {\r\n\tmargin-top: -22px; \r\n\tmargin-left: -22px; \r\n\r\n\toverflow: hidden;\r\n\twidth: 45px;\r\n\theight: 45px;\r\n\tborder-radius: 50%;\r\n\r\n\t-webkit-box-shadow: 0 0 0 2px #fff;\r\n\tbox-shadow: 0 0 0 2px #fff;\r\n\r\n  \t-webkit-transition: -webkit-box-shadow .4s ease, background-color .4s ease;\r\n  \t-webkit-transition: background-color .4s ease, -webkit-box-shadow .4s ease;\r\n  \ttransition: background-color .4s ease, -webkit-box-shadow .4s ease;\r\n  \ttransition: box-shadow .4s ease, background-color .4s ease;\r\n  \ttransition: box-shadow .4s ease, background-color .4s ease, -webkit-box-shadow .4s ease;\r\n  \t\r\n}\r\n.csslider1 > .cs_arrowprev {\r\n\tmargin-left: 10px;\r\n\tleft: 35px;\r\n}\r\n.csslider1 > .cs_arrownext {\r\n\tmargin-right: 10px;\r\n\tright: 35px;\r\n}\r\n.csslider1 > .cs_arrowprev > label:after {\r\n\tcontent: '\\E800';\r\n}\r\n.csslider1 > .cs_arrownext > label:after {\r\n\tcontent: '\\E801';\r\n}\r\n.csslider1 > .cs_arrowprev > label:after,\r\n.csslider1 > .cs_arrownext > label:after {\r\n\tdisplay: block;\r\n\tfont: 28px \"speedcontrols\";\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tcolor: #fff;\r\n  \t-webkit-transition: color .4s ease;\r\n  \ttransition: color .4s ease;\r\n  \t\r\n}\r\n\r\n.csslider1 > .cs_arrowprev:hover > label,\r\n.csslider1 > .cs_arrownext:hover > label {\r\n\tbackground-color: #fff;\r\n\t-webkit-box-shadow: 0 0 0 6px rgba(255,255,255,0.3);\r\n\tbox-shadow: 0 0 0 6px rgba(255,255,255,0.3);\r\n  \t-webkit-animation: pulse 1s alternate infinite ease-in-out !important;\r\n  \tanimation: pulse 1s alternate infinite ease-in-out !important;\r\n  \t\r\n}\r\n\r\n@-webkit-keyframes nextArrow {\r\n\t49% { -webkit-transform: translate(100%); }\r\n\t50% { opacity: 0; -webkit-transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@keyframes nextArrow {\r\n\t49% { -webkit-transform: translate(100%); transform: translate(100%); }\r\n\t50% { opacity: 0; -webkit-transform: translate(-100%); transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes prevArrow {\r\n\t49% { -webkit-transform: translate(-100%); }\r\n\t50% { opacity: 0; -webkit-transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@keyframes prevArrow {\r\n\t49% { -webkit-transform: translate(-100%); transform: translate(-100%); }\r\n\t50% { opacity: 0; -webkit-transform: translate(100%); transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n\r\n\r\n.csslider1 > .cs_arrownext:hover > label:after {\r\n\tcolor: #6D90D0;\r\n\t-webkit-animation: nextArrow 0.3s forwards;\r\n\tanimation: nextArrow 0.3s forwards;\r\n\t\r\n}\r\n.csslider1 > .cs_arrowprev:hover > label:after {\r\n\tcolor: #6D90D0;\r\n\t-webkit-animation: prevArrow 0.3s forwards;\r\n\tanimation: prevArrow 0.3s forwards;\r\n\t\r\n}.csslider1 > .cs_bullets {\r\n\tbottom: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n\r\n.csslider1 > .cs_bullets > label > .cs_thumb {\r\n\t-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\t-webkit-transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\ttransition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\ttransition: transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\ttransition: transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\t\r\n\tborder: 3px solid #fff;\r\n\tmargin-top: -13px;\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n}\r\n.csslider1 > .cs_bullets > label > .cs_thumb:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\twidth: 0; \r\n\theight: 0; \r\n\tleft: 50%;\r\n\tmargin-left: -3px;\r\n\tbottom: -10px;\r\n\tborder-left: 7px solid transparent;\r\n\tborder-right: 7px solid transparent;\r\n\t\r\n\tborder-top: 7px solid #fff;\r\n}\r\n.csslider1 > .cs_bullets > label:hover > .cs_thumb {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n\t\r\n}\r\n\r\n\r\n.csslider1 > .cs_bullets > label {\r\n\tmargin: 0 10px;\r\n\tpadding: 7px;\r\n\tborder-radius: 50%;\r\n\t-webkit-box-shadow: 0 0 0 2px #fff;\r\n\tbox-shadow: 0 0 0 2px #fff;\r\n\t\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\t\r\n}\r\n\r\n.csslider1 > .cs_bullets > label > .cs_point {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 50%;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\t\r\n\r\n\tbackground-color: #fff;\r\n\t-webkit-transform:scale(0.4);\r\n\ttransform:scale(0.4);\r\n}\r\n\r\n.csslider1 > .cs_bullets > label:hover > .cs_point,\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_bullets > label.num0 > .cs_point,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_bullets > label.num1 > .cs_point,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_bullets > label.num2 > .cs_point,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_bullets > label.num3 > .cs_point {\r\n\tbackground-color: #6D90D0;\r\n}\r\n\r\n.csslider1 > .cs_bullets > label:hover,\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_bullets > label.num0,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_bullets > label.num1,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_bullets > label.num2,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_bullets > label.num3 {\r\n\tbackground-color: #fff;\r\n\t-webkit-box-shadow: 0 0 0 3px rgba(255,255,255,0.3);\r\n\tbox-shadow: 0 0 0 3px rgba(255,255,255,0.3);\r\n}\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; -webkit-box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; -webkit-box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; -webkit-box-shadow: 0 0 0 3px rgba(255,255,255,0.3); box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; -webkit-box-shadow: 0 0 0 2px #fff; box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@-webkit-keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n@keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num0,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num0 {\r\n\t-webkit-animation: bullet 16000ms infinite -2000ms;\r\n\tanimation: bullet 16000ms infinite -2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num1,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num1 {\r\n\t-webkit-animation: bullet 16000ms infinite 2000ms;\r\n\tanimation: bullet 16000ms infinite 2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num2,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num2 {\r\n\t-webkit-animation: bullet 16000ms infinite 6000ms;\r\n\tanimation: bullet 16000ms infinite 6000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num3,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num3 {\r\n\t-webkit-animation: bullet 16000ms infinite 10000ms;\r\n\tanimation: bullet 16000ms infinite 10000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num0 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num0 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite -2000ms;\r\n\tanimation: bulletPoint 16000ms infinite -2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num1 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num1 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite 2000ms;\r\n\tanimation: bulletPoint 16000ms infinite 2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num2 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num2 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite 6000ms;\r\n\tanimation: bulletPoint 16000ms infinite 6000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num3 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num3 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite 10000ms;\r\n\tanimation: bulletPoint 16000ms infinite 10000ms;\r\n\t\r\n}\r\n\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label {\r\n  \t-webkit-transition: none;\r\n  \ttransition: none;\r\n  \t\r\n}\r\n\r\n.csslider1.cs_pauseHover:hover > .cs_bullets > label > .cs_point,\r\n.csslider1.cs_pauseHover:hover > .cs_bullets > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label {\r\n\t-webkit-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n\r\n.csslider1 > .slide:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > .slide:checked ~ .cs_bullets > label {\r\n\t-webkit-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n/* /calculate autoplay */\r\n\r\n\r\n.csslider1 > .cs_description > label {\r\n\tfont: 18px 'Hammersmith One', sans-serif;\r\n\tline-height: normal;\r\n\tleft: 15px;\r\n\tbottom: 35px;\r\n\ttop: auto;\r\n\tz-index: 1;\r\n\topacity: 1;\r\n}\r\n.csslider1 > .cs_description > label > span {\r\n\tcolor: #fff;\r\n\tpadding: 10px;\r\n\tborder-radius: 10px;\r\n\tvisibility: hidden;\r\n\r\n\tmargin: 5px 10px;\r\n\topacity: 0;\r\n}\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 {\r\n\tz-index: 2;\r\n}\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 > .cs_title,\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 > .cs_descr,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 > .cs_title,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 > .cs_descr,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 > .cs_title,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 > .cs_descr,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 > .cs_title,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 > .cs_descr {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n\t\r\n}\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 .cs_wrapper,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 .cs_wrapper,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 .cs_wrapper,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 .cs_wrapper {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n\t\r\n}\r\n.csslider1 > .cs_description > label > .cs_title {\r\n\tbackground-color: #fff;\r\n\tcolor: #6D90D0;\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n  \t-webkit-transition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-webkit-transition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_description > label > .cs_descr {\r\n\tfont-size: 0.8em;\r\n\t-webkit-box-shadow: inset 0 0 0 2px #fff;\r\n\tbox-shadow: inset 0 0 0 2px #fff;\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n  \t-webkit-transition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-webkit-transition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n\r\n\r\n.csslider1 > .cs_description > label > .cs_title > .cs_wrapper {\r\n\topacity: 0;\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n\t-webkit-transition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t\r\n}\r\n.csslider1 > .cs_description > label > .cs_descr > .cs_wrapper {\r\n\topacity: 0;\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n\t-webkit-transition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t\r\n}\r\n\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n}\r\n\r\n\r\n@-webkit-keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -webkit-transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -webkit-transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; -webkit-transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -webkit-transform: scale(1.1); transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -webkit-transform: scale(1); transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; -webkit-transform: scale(0); transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite -1400ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite -1400ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 2600ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 2600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 6600ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 6600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 10600ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 10600ms ease;\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite -1150ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite -1150ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 2850ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 2850ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 6850ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 6850ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 10850ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 10850ms ease;\r\n}\r\n\r\n\r\n\r\n\r\n@-webkit-keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -webkit-transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -webkit-transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; -webkit-transform: scale(0); }\r\n}\r\n@keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -webkit-transform: scale(1.1); transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -webkit-transform: scale(1); transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; -webkit-transform: scale(0); transform: scale(0); }\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n}\r\n\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_title,\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_descr,\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper {\r\n  \t-webkit-transition: none;\r\n  \ttransition: none;\r\n  \t\r\n}\r\n\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_title,\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_descr,\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper {\r\n\t-webkit-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n.csslider1 > .slide:checked ~ .cs_description > label {\r\n\t-webkit-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n\r\n\r\n/* /calculate autoplay *//* hide description & bullets on mobile devices */\r\n@media\r\nonly screen and (max-width: 480px),\r\nonly screen and (-webkit-max-device-pixel-ratio: 2)      and (max-width: 480px),\r\nonly screen and (   max--moz-device-pixel-ratio: 2)      and (max-width: 480px),\r\nonly screen and (        max-device-pixel-ratio: 2)      and (max-width: 480px),\r\nonly screen and (                -webkit-max-device-pixel-ratio: 2) and (max-width: 480px),\r\nonly screen and (                max-resolution: 192dpi) and (max-width: 480px),\r\nonly screen and (                -webkit-max-device-pixel-ratio: 2)  and (max-width: 480px),\r\nonly screen and (                max-resolution: 2dppx)  and (max-width: 480px) { \r\n\t.csslider1 > .cs_description,\r\n\t.csslider1 > .cs_bullets {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n", "", {"version":3,"sources":["D:/gatsby/Vertex/gatsby-website/src/components/Slider/D:/gatsby/Vertex/gatsby-website/src/components/Slider/Slider.css"],"names":[],"mappings":"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","file":"Slider.css","sourcesContent":["@import url(http://fonts.googleapis.com/css?family=Hammersmith+One&subset=latin,latin-ext);\r\n@font-face {\r\n\tfont-family: \"speedcontrols\";\r\n\tsrc: url(\"speedcontrols.eot\");\r\n\tsrc: url(\"speedcontrols.eot#iefix?cssslidertheme=speed\") format(\"embedded-opentype\"),\r\n\t\t\turl(\"speedcontrols.woff\") format(\"woff\"),\r\n\t\t\turl(\"speedcontrols.ttf\") format(\"truetype\"),\r\n\t\t\turl(\"speedcontrols.svg#speed?cssslidertheme=speed\") format(\"svg\");\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n}\r\n\r\n.csslider1 {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tmax-width: 830px;\r\n\t\r\n\twidth: 100%;\r\n\tmargin-top: 10px;\r\n}\r\n.csslider1 > .cs_anchor {\r\n\tdisplay: none;\r\n}\r\n.csslider1 > ul {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tfont-size: 0;\r\n\tline-height: 0;\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\t\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n}\r\n.csslider1 > ul > li.img img {\r\n\twidth: 100%;\r\n}\r\n.csslider1 > ul > li.img {\r\n\tfont-size: 0pt;\r\n\r\n\t-khtml-user-select: none;\r\n\t-moz-user-select: none;\r\n\tuser-select: none;\r\n}\r\n.csslider1 > ul > li {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfont-size: 15px;\r\n\tfont-size: initial;\r\n\tline-height: normal;\r\n\twhite-space: normal;\r\n\tvertical-align: top;\r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\t-moz-transform: translate3d(0,0,0);\r\n\t-ms-transform: translate3d(0,0,0);\r\n\t-o-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n.csslider1 .cs_lnk{\r\n\tposition: absolute;\r\n\ttop: -9999px;\r\n\tleft: -9999px;\r\n\tfont-size: 0pt;\r\n\topacity: 0;\r\n\tfilter: alpha(opacity=0);\r\n}.csslider1 > .cs_arrowprev,\r\n.csslider1 > .cs_arrownext {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-box-sizing: content-box;\r\n\t-moz-box-sizing: content-box;\r\n\tbox-sizing: content-box;\r\n\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-khtml-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tz-index: 5;\r\n}\r\n.csslider1 > .cs_arrowprev > label,\r\n.csslider1 > .cs_arrownext > label {\r\n\tposition: absolute;\r\n\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n\topacity: 0;\r\n\tz-index: -1;\r\n}\r\n.csslider1 > .cs_arrowprev {\r\n\tleft: 0;\r\n}\r\n.csslider1 > .cs_arrownext {\r\n\tright: 0;\r\n}\r\n\r\n.csslider1 > .cs_arrowprev > label.num3,\r\n.csslider1 > .cs_arrownext > label.num1 {\r\n\topacity: 1;\r\n\tz-index: 5;\r\n}\r\n.csslider1 > .slide:checked ~ .cs_arrowprev > label,\r\n.csslider1 > .slide:checked ~ .cs_arrownext > label {\r\n\topacity: 0;\r\n\tz-index: -1;\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_arrowprev > label.num3,\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_arrownext > label.num1, \r\n.csslider1 > #cs_slide1_1:checked ~ .cs_arrowprev > label.num0,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_arrownext > label.num2, \r\n.csslider1 > #cs_slide1_2:checked ~ .cs_arrowprev > label.num1,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_arrownext > label.num3, \r\n.csslider1 > #cs_slide1_3:checked ~ .cs_arrowprev > label.num2,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_arrownext > label.num0 {\r\n\topacity: 1;\r\n\tz-index: 5;\r\n}\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n@-moz-keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n@-ms-keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n@-o-keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n@keyframes arrow {\r\n\t0%, 24.99% { opacity: 1; z-index: 5; }\r\n\t25%, 100%\t{ opacity: 0; z-index: -1; }\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num3,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num1,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num3,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num1 {\r\n\t-webkit-animation: arrow 16000ms infinite -2000ms;\r\n\t-moz-animation: arrow 16000ms infinite -2000ms;\r\n\t-ms-animation: arrow 16000ms infinite -2000ms;\r\n\t-o-animation: arrow 16000ms infinite -2000ms;\r\n\tanimation: arrow 16000ms infinite -2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num0,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num2,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num0,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num2 {\r\n\t-webkit-animation: arrow 16000ms infinite 2000ms;\r\n\t-moz-animation: arrow 16000ms infinite 2000ms;\r\n\t-ms-animation: arrow 16000ms infinite 2000ms;\r\n\t-o-animation: arrow 16000ms infinite 2000ms;\r\n\tanimation: arrow 16000ms infinite 2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num1,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num3,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num1,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num3 {\r\n\t-webkit-animation: arrow 16000ms infinite 6000ms;\r\n\t-moz-animation: arrow 16000ms infinite 6000ms;\r\n\t-ms-animation: arrow 16000ms infinite 6000ms;\r\n\t-o-animation: arrow 16000ms infinite 6000ms;\r\n\tanimation: arrow 16000ms infinite 6000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num2,\r\n.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num0,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num2,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num0 {\r\n\t-webkit-animation: arrow 16000ms infinite 10000ms;\r\n\t-moz-animation: arrow 16000ms infinite 10000ms;\r\n\t-ms-animation: arrow 16000ms infinite 10000ms;\r\n\t-o-animation: arrow 16000ms infinite 10000ms;\r\n\tanimation: arrow 16000ms infinite 10000ms;\r\n\t\r\n}\r\n\r\n\r\n.csslider1.cs_pauseHover:hover > .cs_arrowprev > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label,\r\n.csslider1.cs_pauseHover:hover > .cs_arrownext > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label {\r\n\t-webkit-animation-play-state: paused !important;\r\n\t-moz-animation-play-state: paused !important;\r\n\t-ms-animation-play-state: paused !important;\r\n\t-o-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n.csslider1 > .slide:checked ~ .cs_arrowprev > label,\r\n.csslider1 > .slide:checked ~ .cs_arrownext > label {\r\n\t-webkit-animation: none;\r\n\t-moz-animation: none;\r\n\t-ms-animation: none;\r\n\t-o-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n\r\n/* /calculate autoplay */\r\n.csslider1 > .cs_bullets {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\tz-index: 6;\r\n\tfont-size: 0;\r\n\tline-height: 8pt;\r\n\ttext-align: center;\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-khtml-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n.csslider1 > .cs_bullets > div {\r\n\tmargin-left: -50%;\r\n\twidth: 100%;\r\n}\r\n.csslider1 > .cs_bullets > label {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tcursor: pointer;\r\n}\r\n.csslider1 > .cs_bullets > label > .cs_thumb {\r\n\tvisibility: hidden;\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n\tline-height: 0;\r\n\tleft: -55px;\r\n\ttop: -48px;\r\n}.csslider1 > .cs_description {\r\n\tz-index: 3;\r\n}\r\n.csslider1 > .cs_description a,\r\n.csslider1 > .cs_description a:visited,\r\n.csslider1 > .cs_description a:active {\r\n\tcolor: inherit;\r\n}\r\n.csslider1 > .cs_description a:hover {\r\n\ttext-decoration: none;\r\n}\r\n.csslider1 > .cs_description > label {\r\n\tposition: absolute;\r\n\tword-wrap: break-word;\r\n\twhite-space: normal;\r\n\ttext-align: left;\r\n\tmax-width: 50%;\r\n\tleft: 0;\r\n}\r\n.csslider1 > .cs_description > label > span {\r\n\tvertical-align: top;\r\n}\r\n.csslider1 > .cs_description > label span {\r\n\tdisplay: inline-block;\r\n}.csslider1 > ul > li.num0 {\r\n\tleft: 0%;\r\n}\r\n.csslider1 > ul > li.num1 {\r\n\tleft: 100%;\r\n}\r\n.csslider1 > ul > li.num2 {\r\n\tleft: 200%;\r\n}\r\n.csslider1 > ul > li.num3 {\r\n\tleft: 300%;\r\n}\r\n \r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ ul > li {\r\n\t-webkit-transform: translateX(0%);\r\n\t-moz-transform: translateX(0%);\r\n\t-ms-transform: translateX(0%);\r\n\t-o-transform: translateX(0%);\r\n\ttransform: translateX(0%);\r\n\t\r\n}\r\n.csslider1 > #cs_slide1_1:checked ~ ul > li {\r\n\t-webkit-transform: translateX(-100%);\r\n\t-moz-transform: translateX(-100%);\r\n\t-ms-transform: translateX(-100%);\r\n\t-o-transform: translateX(-100%);\r\n\ttransform: translateX(-100%);\r\n\t\r\n}\r\n.csslider1 > #cs_slide1_2:checked ~ ul > li {\r\n\t-webkit-transform: translateX(-200%);\r\n\t-moz-transform: translateX(-200%);\r\n\t-ms-transform: translateX(-200%);\r\n\t-o-transform: translateX(-200%);\r\n\ttransform: translateX(-200%);\r\n\t\r\n}\r\n.csslider1 > #cs_slide1_3:checked ~ ul > li {\r\n\t-webkit-transform: translateX(-300%);\r\n\t-moz-transform: translateX(-300%);\r\n\t-ms-transform: translateX(-300%);\r\n\t-o-transform: translateX(-300%);\r\n\ttransform: translateX(-300%);\r\n\t\r\n}\r\n \r\n\r\n\r\n.csslider1 > ul > li {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tdisplay: inline-block;\r\n\topacity: 1;\r\n\r\n\t-webkit-transition: -webkit-transform 2000ms;\r\n\t-moz-transition: -moz-transform 2000ms;\r\n\t-ms-transition: -ms-transform 2000ms;\r\n\t-o-transition: -o-transform 2000ms;\r\n\ttransition: transform 2000ms;\r\n\t\r\n}\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes slide {\r\n\t0%, 12.5%\t{ -webkit-transform: translateX(0%); }\r\n\t25%, 37.5%\t{ -webkit-transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ -webkit-transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ -webkit-transform: translateX(-300%); }\r\n\t\r\n}\r\n@-moz-keyframes slide {\r\n\t0%, 12.5%\t{ -moz-transform: translateX(0%); }\r\n\t25%, 37.5%\t{ -moz-transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ -moz-transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ -moz-transform: translateX(-300%); }\r\n\t\r\n}\r\n@-ms-keyframes slide {\r\n\t0%, 12.5%\t{ -ms-transform: translateX(0%); }\r\n\t25%, 37.5%\t{ -ms-transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ -ms-transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ -ms-transform: translateX(-300%); }\r\n\t\r\n}\r\n@-o-keyframes slide {\r\n\t0%, 12.5%\t{ -o-transform: translateX(0%); }\r\n\t25%, 37.5%\t{ -o-transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ -o-transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ -o-transform: translateX(-300%); }\r\n\t\r\n}\r\n@keyframes slide {\r\n\t0%, 12.5%\t{ transform: translateX(0%); }\r\n\t25%, 37.5%\t{ transform: translateX(-100%); }\r\n\t50%, 62.5%\t{ transform: translateX(-200%); }\r\n\t75%, 87.5%\t{ transform: translateX(-300%); }\r\n\t\r\n}\r\n\r\n\r\n.csslider1  > #cs_play1:checked ~ ul > li,\r\n.csslider1  > #cs_pause1:checked ~ ul > li {\r\n\t-webkit-animation: slide 16000ms infinite;\r\n\t-moz-animation: slide 16000ms infinite;\r\n\t-ms-animation: slide 16000ms infinite;\r\n\t-o-animation: slide 16000ms infinite;\r\n\tanimation: slide 16000ms infinite;\r\n\t\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ ul > li,\r\n.csslider1 > #cs_pause1:checked ~ ul > li {\r\n\t-webkit-transition: none;\r\n\t-moz-transition: none;\r\n\t-ms-transition: none;\r\n\t-o-transition: none;\r\n\ttransition: none;\r\n\t\r\n}\r\n\r\n.csslider1.cs_pauseHover:hover > ul > li,\r\n.csslider1 > #cs_pause1:checked ~ ul > li {\r\n\t-webkit-animation-play-state: paused !important;\r\n\t-moz-animation-play-state: paused !important;\r\n\t-ms-animation-play-state: paused !important;\r\n\t-o-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n\r\n.csslider1 > .slide:checked ~ ul > li {\r\n\t-webkit-animation: none;\r\n\t-moz-animation: none;\r\n\t-ms-animation: none;\r\n\t-o-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n/* /calculate autoplay */\r\n\r\n/* frame/shadow */\r\n.csslider1 {\r\n\t-webkit-box-shadow: 0 0 0 3px #fff;\r\n\t-moz-box-shadow: 0 0 0 3px #fff;\r\n\tbox-shadow: 0 0 0 3px #fff;\r\n\tmargin-top: 13px;\r\n}\r\n\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {-webkit-transform: scale(1);}\r\n    100% {-webkit-transform: scale(1.2);}\r\n}\r\n@-moz-keyframes pulse {\r\n    0% {-moz-transform: scale(1);}\r\n    100% {-moz-transform: scale(1.2);}\r\n}\r\n@-ms-keyframes pulse {\r\n    0% {-ms-transform: scale(1);}\r\n    100% {-ms-transform: scale(1.2);}\r\n}\r\n@-o-keyframes pulse {\r\n    0% {-o-transform: scale(1);}\r\n    100% {-o-transform: scale(1.2);}\r\n}\r\n@keyframes pulse {\r\n    0% {transform: scale(1);}\r\n    100% {transform: scale(1.2);}\r\n}\r\n.csslider1 > .cs_arrowprev {\r\n  \t-webkit-transition: .5s -webkit-transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-moz-transition: .5s -moz-transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-ms-transition: .5s -ms-transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-o-transition: .5s -o-transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: .5s transform 0s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_play_pause {\r\n  \t-webkit-transition: .5s -webkit-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-moz-transition: .5s -moz-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-ms-transition: .5s -ms-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-o-transition: .5s -o-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: .5s transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_arrownext {\r\n  \t-webkit-transition: .5s -webkit-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-moz-transition: .5s -moz-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-ms-transition: .5s -ms-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-o-transition: .5s -o-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: .5s transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_arrowprev,\r\n.csslider1 > .cs_arrownext,\r\n.csslider1 > .cs_play_pause {\r\n\t-webkit-transform: scale(0) rotate(180deg);\r\n\t-moz-transform: scale(0) rotate(180deg);\r\n\t-ms-transform: scale(0) rotate(180deg);\r\n\t-o-transform: scale(0) rotate(180deg);\r\n\ttransform: scale(0) rotate(180deg);\r\n\t\r\n}\r\n\r\n.csslider1:hover > .cs_arrowprev,\r\n.csslider1:hover > .cs_arrownext,\r\n.csslider1:hover > .cs_play_pause {\r\n\t-webkit-transform: scale(1) rotate(0);\r\n\t-moz-transform: scale(1) rotate(0);\r\n\t-ms-transform: scale(1) rotate(0);\r\n\t-o-transform: scale(1) rotate(0);\r\n\ttransform: scale(1) rotate(0);\r\n\t\r\n}.csslider1 > .cs_arrowprev > label,\r\n.csslider1 > .cs_arrownext > label {\r\n\tmargin-top: -22px; \r\n\tmargin-left: -22px; \r\n\r\n\toverflow: hidden;\r\n\twidth: 45px;\r\n\theight: 45px;\r\n\t-webkit-border-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\tborder-radius: 50%;\r\n\r\n\t-webkit-box-shadow: 0 0 0 2px #fff;\r\n\t-moz-box-shadow: 0 0 0 2px #fff;\r\n\tbox-shadow: 0 0 0 2px #fff;\r\n\r\n  \t-webkit-transition: -webkit-box-shadow .4s ease, background-color .4s ease;\r\n  \t-moz-transition: -moz-box-shadow .4s ease, background-color .4s ease;\r\n  \t-ms-transition: -ms-box-shadow .4s ease, background-color .4s ease;\r\n  \t-o-transition: -o-box-shadow .4s ease, background-color .4s ease;\r\n  \ttransition: box-shadow .4s ease, background-color .4s ease;\r\n  \t\r\n}\r\n.csslider1 > .cs_arrowprev {\r\n\tmargin-left: 10px;\r\n\tleft: 35px;\r\n}\r\n.csslider1 > .cs_arrownext {\r\n\tmargin-right: 10px;\r\n\tright: 35px;\r\n}\r\n.csslider1 > .cs_arrowprev > label:after {\r\n\tcontent: '\\e800';\r\n}\r\n.csslider1 > .cs_arrownext > label:after {\r\n\tcontent: '\\e801';\r\n}\r\n.csslider1 > .cs_arrowprev > label:after,\r\n.csslider1 > .cs_arrownext > label:after {\r\n\tdisplay: block;\r\n\tfont: 28px \"speedcontrols\";\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tcolor: #fff;\r\n  \t-webkit-transition: color .4s ease;\r\n  \t-moz-transition: color .4s ease;\r\n  \t-ms-transition: color .4s ease;\r\n  \t-o-transition: color .4s ease;\r\n  \ttransition: color .4s ease;\r\n  \t\r\n}\r\n\r\n.csslider1 > .cs_arrowprev:hover > label,\r\n.csslider1 > .cs_arrownext:hover > label {\r\n\tbackground-color: #fff;\r\n\t-webkit-box-shadow: 0 0 0 6px rgba(255,255,255,0.3);\r\n\t-moz-box-shadow: 0 0 0 6px rgba(255,255,255,0.3);\r\n\tbox-shadow: 0 0 0 6px rgba(255,255,255,0.3);\r\n  \t-webkit-animation: pulse 1s alternate infinite ease-in-out !important;\r\n  \t-moz-animation: pulse 1s alternate infinite ease-in-out !important;\r\n  \t-ms-animation: pulse 1s alternate infinite ease-in-out !important;\r\n  \t-o-animation: pulse 1s alternate infinite ease-in-out !important;\r\n  \tanimation: pulse 1s alternate infinite ease-in-out !important;\r\n  \t\r\n}\r\n\r\n@-webkit-keyframes nextArrow {\r\n\t49% { -webkit-transform: translate(100%); }\r\n\t50% { opacity: 0; -webkit-transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@-moz-keyframes nextArrow {\r\n\t49% { -moz-transform: translate(100%); }\r\n\t50% { opacity: 0; -moz-transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@-ms-keyframes nextArrow {\r\n\t49% { -ms-transform: translate(100%); }\r\n\t50% { opacity: 0; -ms-transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@-o-keyframes nextArrow {\r\n\t49% { -o-transform: translate(100%); }\r\n\t50% { opacity: 0; -o-transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@keyframes nextArrow {\r\n\t49% { transform: translate(100%); }\r\n\t50% { opacity: 0; transform: translate(-100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes prevArrow {\r\n\t49% { -webkit-transform: translate(-100%); }\r\n\t50% { opacity: 0; -webkit-transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@-moz-keyframes prevArrow {\r\n\t49% { -moz-transform: translate(-100%); }\r\n\t50% { opacity: 0; -moz-transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@-ms-keyframes prevArrow {\r\n\t49% { -ms-transform: translate(-100%); }\r\n\t50% { opacity: 0; -ms-transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@-o-keyframes prevArrow {\r\n\t49% { -o-transform: translate(-100%); }\r\n\t50% { opacity: 0; -o-transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n@keyframes prevArrow {\r\n\t49% { transform: translate(-100%); }\r\n\t50% { opacity: 0; transform: translate(100%); }\r\n\t51% { opacity: 1; }\r\n}\r\n\r\n\r\n.csslider1 > .cs_arrownext:hover > label:after {\r\n\tcolor: #6D90D0;\r\n\t-webkit-animation: nextArrow 0.3s forwards;\r\n\t-moz-animation: nextArrow 0.3s forwards;\r\n\t-ms-animation: nextArrow 0.3s forwards;\r\n\t-o-animation: nextArrow 0.3s forwards;\r\n\tanimation: nextArrow 0.3s forwards;\r\n\t\r\n}\r\n.csslider1 > .cs_arrowprev:hover > label:after {\r\n\tcolor: #6D90D0;\r\n\t-webkit-animation: prevArrow 0.3s forwards;\r\n\t-moz-animation: prevArrow 0.3s forwards;\r\n\t-ms-animation: prevArrow 0.3s forwards;\r\n\t-o-animation: prevArrow 0.3s forwards;\r\n\tanimation: prevArrow 0.3s forwards;\r\n\t\r\n}.csslider1 > .cs_bullets {\r\n\tbottom: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n\r\n.csslider1 > .cs_bullets > label > .cs_thumb {\r\n\t-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\t-moz-transition: -moz-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\t-ms-transition: -ms-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\t-o-transition: -o-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\ttransition: transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n\t\r\n\tborder: 3px solid #fff;\r\n\tmargin-top: -13px;\r\n\t-webkit-transform: scale(0);\r\n\t-moz-transform: scale(0);\r\n\t-ms-transform: scale(0);\r\n\t-o-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n}\r\n.csslider1 > .cs_bullets > label > .cs_thumb:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\twidth: 0; \r\n\theight: 0; \r\n\tleft: 50%;\r\n\tmargin-left: -3px;\r\n\tbottom: -10px;\r\n\tborder-left: 7px solid transparent;\r\n\tborder-right: 7px solid transparent;\r\n\t\r\n\tborder-top: 7px solid #fff;\r\n}\r\n.csslider1 > .cs_bullets > label:hover > .cs_thumb {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\r\n\t-webkit-transform: scale(1);\r\n\t-moz-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\t-o-transform: scale(1);\r\n\ttransform: scale(1);\r\n\t\r\n}\r\n\r\n\r\n.csslider1 > .cs_bullets > label {\r\n\tmargin: 0 10px;\r\n\tpadding: 7px;\r\n\t-webkit-border-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\tborder-radius: 50%;\r\n\t-webkit-box-shadow: 0 0 0 2px #fff;\r\n\t-moz-box-shadow: 0 0 0 2px #fff;\r\n\tbox-shadow: 0 0 0 2px #fff;\r\n\t\r\n\t-webkit-transition: all 0.3s;\r\n\t-moz-transition: all 0.3s;\r\n\t-ms-transition: all 0.3s;\r\n\t-o-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\t\r\n}\r\n\r\n.csslider1 > .cs_bullets > label > .cs_point {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-border-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\tborder-radius: 50%;\r\n\t-webkit-transition: all 0.3s;\r\n\t-moz-transition: all 0.3s;\r\n\t-ms-transition: all 0.3s;\r\n\t-o-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\t\r\n\r\n\tbackground-color: #fff;\r\n\t-webkit-transform:scale(0.4);\r\n\t-moz-transform:scale(0.4);\r\n\t-o-transform:scale(0.4);\r\n\ttransform:scale(0.4);\r\n}\r\n\r\n.csslider1 > .cs_bullets > label:hover > .cs_point,\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_bullets > label.num0 > .cs_point,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_bullets > label.num1 > .cs_point,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_bullets > label.num2 > .cs_point,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_bullets > label.num3 > .cs_point {\r\n\tbackground-color: #6D90D0;\r\n}\r\n\r\n.csslider1 > .cs_bullets > label:hover,\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_bullets > label.num0,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_bullets > label.num1,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_bullets > label.num2,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_bullets > label.num3 {\r\n\tbackground-color: #fff;\r\n\t-webkit-box-shadow: 0 0 0 3px rgba(255,255,255,0.3);\r\n\t-moz-box-shadow: 0 0 0 3px rgba(255,255,255,0.3);\r\n\tbox-shadow: 0 0 0 3px rgba(255,255,255,0.3);\r\n}\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; -webkit-box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; -webkit-box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@-moz-keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; -moz-box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; -moz-box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@-ms-keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; -ms-box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; -ms-box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@-o-keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; -o-box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; -o-box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@keyframes bullet {\r\n\t0%, 24.99%\t{ background-color: #fff; box-shadow: 0 0 0 3px rgba(255,255,255,0.3); }\r\n\t25%, 100% { background-color: transparent; box-shadow: 0 0 0 2px #fff; }\r\n}\r\n@-webkit-keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n@-moz-keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n@-ms-keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n@-o-keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n@keyframes bulletPoint {\r\n\t0%, 24.99%\t{ background-color: #6D90D0; }\r\n\t25%, 100% { background-color: #fff; }\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num0,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num0 {\r\n\t-webkit-animation: bullet 16000ms infinite -2000ms;\r\n\t-moz-animation: bullet 16000ms infinite -2000ms;\r\n\t-ms-animation: bullet 16000ms infinite -2000ms;\r\n\t-o-animation: bullet 16000ms infinite -2000ms;\r\n\tanimation: bullet 16000ms infinite -2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num1,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num1 {\r\n\t-webkit-animation: bullet 16000ms infinite 2000ms;\r\n\t-moz-animation: bullet 16000ms infinite 2000ms;\r\n\t-ms-animation: bullet 16000ms infinite 2000ms;\r\n\t-o-animation: bullet 16000ms infinite 2000ms;\r\n\tanimation: bullet 16000ms infinite 2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num2,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num2 {\r\n\t-webkit-animation: bullet 16000ms infinite 6000ms;\r\n\t-moz-animation: bullet 16000ms infinite 6000ms;\r\n\t-ms-animation: bullet 16000ms infinite 6000ms;\r\n\t-o-animation: bullet 16000ms infinite 6000ms;\r\n\tanimation: bullet 16000ms infinite 6000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num3,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num3 {\r\n\t-webkit-animation: bullet 16000ms infinite 10000ms;\r\n\t-moz-animation: bullet 16000ms infinite 10000ms;\r\n\t-ms-animation: bullet 16000ms infinite 10000ms;\r\n\t-o-animation: bullet 16000ms infinite 10000ms;\r\n\tanimation: bullet 16000ms infinite 10000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num0 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num0 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite -2000ms;\r\n\t-moz-animation: bulletPoint 16000ms infinite -2000ms;\r\n\t-ms-animation: bulletPoint 16000ms infinite -2000ms;\r\n\t-o-animation: bulletPoint 16000ms infinite -2000ms;\r\n\tanimation: bulletPoint 16000ms infinite -2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num1 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num1 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite 2000ms;\r\n\t-moz-animation: bulletPoint 16000ms infinite 2000ms;\r\n\t-ms-animation: bulletPoint 16000ms infinite 2000ms;\r\n\t-o-animation: bulletPoint 16000ms infinite 2000ms;\r\n\tanimation: bulletPoint 16000ms infinite 2000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num2 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num2 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite 6000ms;\r\n\t-moz-animation: bulletPoint 16000ms infinite 6000ms;\r\n\t-ms-animation: bulletPoint 16000ms infinite 6000ms;\r\n\t-o-animation: bulletPoint 16000ms infinite 6000ms;\r\n\tanimation: bulletPoint 16000ms infinite 6000ms;\r\n\t\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num3 > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num3 > .cs_point {\r\n\t-webkit-animation: bulletPoint 16000ms infinite 10000ms;\r\n\t-moz-animation: bulletPoint 16000ms infinite 10000ms;\r\n\t-ms-animation: bulletPoint 16000ms infinite 10000ms;\r\n\t-o-animation: bulletPoint 16000ms infinite 10000ms;\r\n\tanimation: bulletPoint 16000ms infinite 10000ms;\r\n\t\r\n}\r\n\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > #cs_play1:checked ~ .cs_bullets > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label {\r\n  \t-webkit-transition: none;\r\n  \t-moz-transition: none;\r\n  \t-ms-transition: none;\r\n  \t-o-transition: none;\r\n  \ttransition: none;\r\n  \t\r\n}\r\n\r\n.csslider1.cs_pauseHover:hover > .cs_bullets > label > .cs_point,\r\n.csslider1.cs_pauseHover:hover > .cs_bullets > label,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > #cs_pause1:checked ~ .cs_bullets > label {\r\n\t-webkit-animation-play-state: paused !important;\r\n\t-moz-animation-play-state: paused !important;\r\n\t-ms-animation-play-state: paused !important;\r\n\t-o-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n\r\n.csslider1 > .slide:checked ~ .cs_bullets > label > .cs_point,\r\n.csslider1 > .slide:checked ~ .cs_bullets > label {\r\n\t-webkit-animation: none;\r\n\t-moz-animation: none;\r\n\t-ms-animation: none;\r\n\t-o-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n/* /calculate autoplay */\r\n\r\n\r\n.csslider1 > .cs_description > label {\r\n\tfont: 18px 'Hammersmith One', sans-serif;\r\n\tline-height: normal;\r\n\tleft: 15px;\r\n\tbottom: 35px;\r\n\ttop: auto;\r\n\tz-index: 1;\r\n\topacity: 1;\r\n}\r\n.csslider1 > .cs_description > label > span {\r\n\tcolor: #fff;\r\n\tpadding: 10px;\r\n\t-webkit-border-radius: 10px;\r\n\t-moz-border-radius: 10px;\r\n\tborder-radius: 10px;\r\n\tvisibility: hidden;\r\n\r\n\tmargin: 5px 10px;\r\n\topacity: 0;\r\n}\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 {\r\n\tz-index: 2;\r\n}\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 > .cs_title,\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 > .cs_descr,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 > .cs_title,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 > .cs_descr,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 > .cs_title,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 > .cs_descr,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 > .cs_title,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 > .cs_descr {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\t-webkit-transform: scale(1);\r\n\t-moz-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\t-o-transform: scale(1);\r\n\ttransform: scale(1);\r\n\t\r\n}\r\n\r\n\r\n.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 .cs_wrapper,\r\n.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 .cs_wrapper,\r\n.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 .cs_wrapper,\r\n.csslider1 > #cs_slide1_3:checked ~ .cs_description > .num3 .cs_wrapper {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\t-moz-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\t-o-transform: scale(1);\r\n\ttransform: scale(1);\r\n\t\r\n}\r\n.csslider1 > .cs_description > label > .cs_title {\r\n\tbackground-color: #fff;\r\n\tcolor: #6D90D0;\r\n\t-webkit-transform: scale(0);\r\n\t-moz-transform: scale(0);\r\n\t-ms-transform: scale(0);\r\n\t-o-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n  \t-webkit-transition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-moz-transition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -moz-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-ms-transition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -ms-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-o-transition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -o-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n.csslider1 > .cs_description > label > .cs_descr {\r\n\tfont-size: 0.8em;\r\n\t-webkit-box-shadow: inset 0 0 0 2px #fff;\r\n\t-moz-box-shadow: inset 0 0 0 2px #fff;\r\n\tbox-shadow: inset 0 0 0 2px #fff;\r\n\t-webkit-transform: scale(0);\r\n\t-moz-transform: scale(0);\r\n\t-ms-transform: scale(0);\r\n\t-o-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n  \t-webkit-transition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-moz-transition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -moz-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-ms-transition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -ms-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t-o-transition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -o-transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \ttransition: 950ms opacity 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms visibility 850ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n  \t\r\n}\r\n\r\n\r\n.csslider1 > .cs_description > label > .cs_title > .cs_wrapper {\r\n\topacity: 0;\r\n\t-webkit-transform: scale(0);\r\n\t-moz-transform: scale(0);\r\n\t-ms-transform: scale(0);\r\n\t-o-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n\t-webkit-transition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t-moz-transition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -moz-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t-ms-transition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -ms-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t-o-transition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -o-transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t\r\n}\r\n.csslider1 > .cs_description > label > .cs_descr > .cs_wrapper {\r\n\topacity: 0;\r\n\t-webkit-transform: scale(0);\r\n\t-moz-transform: scale(0);\r\n\t-ms-transform: scale(0);\r\n\t-o-transform: scale(0);\r\n\ttransform: scale(0);\r\n\t\r\n\t-webkit-transition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -webkit-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t-moz-transition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -moz-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t-ms-transition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -ms-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t-o-transition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms -o-transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\ttransition: 950ms opacity 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 950ms transform 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550);\r\n\t\r\n}\r\n\r\n\r\n/* calculate autoplay */\r\n@-webkit-keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@-moz-keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@-ms-keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@-o-keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@keyframes cs_descrWrapper {\r\n\t2.49375%, 28.5625%\t{ z-index: 2; }\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n\t-moz-animation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n\t-ms-animation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n\t-o-animation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite -1400ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n\t-moz-animation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n\t-ms-animation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n\t-o-animation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite 2600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n\t-moz-animation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n\t-ms-animation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n\t-o-animation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite 6600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3 {\r\n\t-webkit-animation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n\t-moz-animation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n\t-ms-animation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n\t-o-animation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n\tanimation: cs_descrWrapper 16000ms infinite 10600ms ease;\r\n}\r\n\r\n\r\n@-webkit-keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -webkit-transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -webkit-transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; -webkit-transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@-moz-keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -moz-transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -moz-transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; -moz-transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@-ms-keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -ms-transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -ms-transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; -ms-transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@-o-keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -o-transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -o-transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; -o-transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n@keyframes cs_title_descr {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; transform: scale(1.1); z-index: 2; visibility: visible;}\r\n\t3.5625%, 21.4275%\t{ opacity: 1; transform: scale(1); z-index: 2; visibility: visible;}\r\n\t28.5625%\t{ opacity: 0; transform: scale(0); z-index: 2; visibility: hidden;}\r\n\t28.5725%, 100%\t{ z-index: 0; }\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite -1400ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite -1400ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite -1400ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite -1400ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite -1400ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 2600ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite 2600ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite 2600ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite 2600ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 2600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 6600ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite 6600ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite 6600ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite 6600ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 6600ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3  > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3  > .cs_title {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 10600ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite 10600ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite 10600ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite 10600ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 10600ms ease;\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite -1150ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite -1150ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite -1150ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite -1150ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite -1150ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 2850ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite 2850ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite 2850ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite 2850ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 2850ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 6850ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite 6850ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite 6850ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite 6850ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 6850ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3  > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3  > .cs_descr {\r\n\t-webkit-animation: cs_title_descr 16000ms infinite 10850ms ease;\r\n\t-moz-animation: cs_title_descr 16000ms infinite 10850ms ease;\r\n\t-ms-animation: cs_title_descr 16000ms infinite 10850ms ease;\r\n\t-o-animation: cs_title_descr 16000ms infinite 10850ms ease;\r\n\tanimation: cs_title_descr 16000ms infinite 10850ms ease;\r\n}\r\n\r\n\r\n\r\n\r\n@-webkit-keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -webkit-transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -webkit-transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; -webkit-transform: scale(0); }\r\n}\r\n@-moz-keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -moz-transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -moz-transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; -moz-transform: scale(0); }\r\n}\r\n@-ms-keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -ms-transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -ms-transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; -ms-transform: scale(0); }\r\n}\r\n@-o-keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; -o-transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; -o-transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; -o-transform: scale(0); }\r\n}\r\n@keyframes cs_title_descr_text {\r\n\t2.49375%, 22.49625%\t{ opacity: 1; transform: scale(1.1); }\r\n\t3.5625%, 21.4275%\t{ opacity: 1; transform: scale(1); }\r\n\t28.5625%\t{ opacity: 0; transform: scale(0); }\r\n}\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite -1250ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 2750ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 6750ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3 .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3 .cs_title > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 10750ms ease;\r\n}\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num0 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num0 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite -1000ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num1 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num1 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 3000ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num2 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num2 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 7000ms ease;\r\n}\r\n.csslider1 > #cs_play1:checked ~ .cs_description > .num3 .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > .num3 .cs_descr > .cs_wrapper {\r\n\t-webkit-animation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n\t-moz-animation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n\t-ms-animation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n\t-o-animation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n\tanimation: cs_title_descr_text 16000ms infinite 11000ms ease;\r\n}\r\n\r\n\r\n\r\n\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_title,\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_descr,\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper {\r\n  \t-webkit-transition: none;\r\n  \t-moz-transition: none;\r\n  \t-ms-transition: none;\r\n  \t-o-transition: none;\r\n  \ttransition: none;\r\n  \t\r\n}\r\n\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_title,\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_descr,\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_descr > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,\r\n.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper {\r\n\t-webkit-animation-play-state: paused !important;\r\n\t-moz-animation-play-state: paused !important;\r\n\t-ms-animation-play-state: paused !important;\r\n\t-o-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n\r\n/* stop */\r\n.csslider1 > .slide:checked ~ .cs_description > label {\r\n\t-webkit-animation: none;\r\n\t-moz-animation: none;\r\n\t-ms-animation: none;\r\n\t-o-animation: none;\r\n\tanimation: none;\r\n}\r\n\r\n\r\n\r\n/* /calculate autoplay *//* hide description & bullets on mobile devices */\r\n@media\r\nonly screen and (max-width: 480px),\r\nonly screen and (-webkit-max-device-pixel-ratio: 2)      and (max-width: 480px),\r\nonly screen and (   max--moz-device-pixel-ratio: 2)      and (max-width: 480px),\r\nonly screen and (     -o-max-device-pixel-ratio: 2/1)    and (max-width: 480px),\r\nonly screen and (        max-device-pixel-ratio: 2)      and (max-width: 480px),\r\nonly screen and (                max-resolution: 192dpi) and (max-width: 480px),\r\nonly screen and (                max-resolution: 2dppx)  and (max-width: 480px) { \r\n\t.csslider1 > .cs_description,\r\n\t.csslider1 > .cs_bullets {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/components/Slider.js":
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Slider_Slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider/Slider.css */ "./src/components/Slider/Slider.css");
/* harmony import */ var _Slider_Slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_Slider_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Slider = function Slider() {
  // console.log(data)
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "csslider1 autoplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "cs_anchor1",
    id: "cs_slide1_0",
    type: "radio",
    class: "cs_anchor slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "cs_anchor1",
    id: "cs_slide1_1",
    type: "radio",
    class: "cs_anchor slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "cs_anchor1",
    id: "cs_slide1_2",
    type: "radio",
    class: "cs_anchor slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "cs_anchor1",
    id: "cs_slide1_3",
    type: "radio",
    class: "cs_anchor slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "cs_anchor1",
    id: "cs_play1",
    type: "radio",
    class: "cs_anchor",
    checked: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "cs_anchor1",
    id: "cs_pause1",
    type: "radio",
    class: "cs_anchor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: "width: 100%; visibility: hidden; font-size: 0px; line-height: 0;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/buns.jpg",
    style: "width: 100%;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "num0 img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/buns.jpg",
    alt: "Buns",
    title: "Buns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "num1 img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/croissant.jpg",
    alt: "Croissant",
    title: "Croissant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "num2 img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/lemonpie.jpg",
    alt: "Lemon pie",
    title: "Lemon pie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "num3 img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/teaandcake.jpg",
    alt: "Breakfast",
    title: "Breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "cs_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Buns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_descr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Curd buns"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Croissant")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_descr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Chocolate croissant"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Lemon pie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_descr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Two pieces of lemon pie"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Breakfast")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_descr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Chocolate croissant")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "cs_arrowprev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num0",
    for: "cs_slide1_0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num1",
    for: "cs_slide1_1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num2",
    for: "cs_slide1_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num3",
    for: "cs_slide1_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "cs_arrownext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num0",
    for: "cs_slide1_0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num1",
    for: "cs_slide1_1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num2",
    for: "cs_slide1_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num3",
    for: "cs_slide1_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "cs_bullets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num0",
    for: "cs_slide1_0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_point",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_thumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/buns.jpg",
    alt: "Buns",
    title: "Buns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num1",
    for: "cs_slide1_1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_point",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_thumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/croissant.jpg",
    alt: "Croissant",
    title: "Croissant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num2",
    for: "cs_slide1_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_point",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_thumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/lemonpie.jpg",
    alt: "Lemon pie",
    title: "Lemon pie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "num3",
    for: "cs_slide1_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_point",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "cs_thumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/teaandcake.jpg",
    alt: "Breakfast",
    title: "Breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))))));
};

var _default = Slider;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Slider, "Slider", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider.js");
  reactHotLoader.register(_default, "default", "D:\\gatsby\\Vertex\\gatsby-website\\src\\components\\Slider.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Slider/Slider.css":
/*!******************************************!*\
  !*** ./src/components/Slider/Slider.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./Slider.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/Slider.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./Slider.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/Slider.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--12-oneOf-1-1!../../../node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./Slider.css */ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Slider/Slider.css");

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

/***/ "./src/components/Slider/speedcontrols.eot":
/*!*************************************************!*\
  !*** ./src/components/Slider/speedcontrols.eot ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "./src/components/Slider/speedcontrols.svg":
/*!*************************************************!*\
  !*** ./src/components/Slider/speedcontrols.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTQgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0iY29udHJvbHMiIGhvcml6LWFkdi14PSIxMDAwIiA+Cjxmb250LWZhY2UgZm9udC1mYW1pbHk9ImNvbnRyb2xzIiBmb250LXdlaWdodD0iNDAwIiBmb250LXN0cmV0Y2g9Im5vcm1hbCIgdW5pdHMtcGVyLWVtPSIxMDAwIiBhc2NlbnQ9Ijg1MCIgZGVzY2VudD0iLTE1MCIgLz4KPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjEwMDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJsZWZ0LXNtYWxsIiB1bmljb2RlPSImI3hlODAwOyIgZD0ibTU5NSA0MDNxMjEgMCAzNi0xNnQxNS0zN3QtMTUtMzd0LTM2LTE1bC0zOTUgMGwxMTktMTE5cTE1LTE1IDE1LTM3dC0xNS0zN3QtMzYtMTVxLTIzIDAtMzggMTVsLTI0NSAyNDVsMjQ1IDI0NXExNSAxNSAzNyAxNXQzNy0xNXQxNS0zN3QtMTUtMzdsLTExOS0xMThsMzk1IDB6IiBob3Jpei1hZHYteD0iNjQ2IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0icmlnaHQtc21hbGwiIHVuaWNvZGU9IiYjeGU4MDE7IiBkPSJtMzI4IDU5NXExNSAxNSAzNiAxNXQzNy0xNWwyNDUtMjQ1bC0yNDUtMjQ1cS0xNS0xNS0zNi0xNXEtMjIgMC0zNyAxNXQtMTUgMzd0MTUgMzdsMTIwIDExOWwtMzk1IDBxLTIyIDAtMzcgMTV0LTE2IDM3dDE2IDM3dDM3IDE2bDM5NSAwbC0xMjAgMTE4cS0xNSAxNS0xNSAzN3QxNSAzN3oiIGhvcml6LWFkdi14PSI2NDYiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlODAyOyIgZD0ibTE3OCAxNXEtMzAtMzAtNzQtMzBxLTQzIDAtNzMgMzF0LTMxIDc0bDAgNTIwcTAgNDQgMzEgNzR0NzMgMzFxNDQgMCA3NC0zMGwzNDMtMzM1cS0yMDYtMjAxLTM0My0zMzV6IiBob3Jpei1hZHYteD0iNTIxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGU4MDM7IiBkPSJtMTA0IDY2M3E0NCAwIDc0LTMxdDMxLTczbDAtNDE4cTAtNDItMzEtNzN0LTc0LTMxdC03NCAzMHQtMzAgNzRsMCA0MThxMCA0NCAzMCA3NHQ3NCAzMHogbTM2NSAwcTQ0IDAgNzQtMzB0MzAtNzRsMC00MThxMC00My0zMC03M3QtNzQtMzB0LTc0IDMwdC0zMCA3M2wwIDQxOHEwIDQ0IDMwIDc0dDc0IDMweiIgaG9yaXotYWR2LXg9IjU3MyIgLz4KPC9mb250Pgo8L2RlZnM+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/components/Slider/speedcontrols.ttf":
/*!*************************************************!*\
  !*** ./src/components/Slider/speedcontrols.ttf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,AAEAAAAOAIAAAwBgT1MvMj2hR7AAAADsAAAAVmNtYXDQFBm3AAABRAAAAUpjdnQgBcoAFAAACBgAAAAcZnBnbYoKeDsAAAg0AAAJkWdhc3AAAAAQAAAIEAAAAAhnbHlmpLLYFQAAApAAAAHCaGVhZAA/igkAAARUAAAANmhoZWEGNgNXAAAEjAAAACRobXR4DToAAAAABLAAAAAUbG9jYQDeAVsAAATEAAAADG1heHAAxgnGAAAE0AAAACBuYW1l9a9XLAAABPAAAALNcG9zdBNiUK0AAAfAAAAAUHByZXCSoZr/AAARyAAAAFYAAQKlAZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6ADoAwNS/2oAWgLLAA8AAAABAAAAAAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQACAADoA///AAAAAOgA//8AABgBAAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAChgJiABQAM0AwDQEBAAFCAAMAA2oAAgECawQBAAEBAE8EAQAAAVQAAQABSAEAEA8LCgYEABQBFAUPKwEyFhQGJyEXFhQGIi8BNzYyFhQPAQJTFR4eFf51dw8eLA/19Q8sHg93AZMgKiABdw8sHg/19Q8eLA92AAH//wAAAoYCYgAVAClAJgQBAgMBQgAAAwBqAAECAWsAAwICA08AAwMCVAACAwJIIyQUEQQTKwE2Mh8BBwYiJjQ/ASEiLgE2NyEnJjQBSA8qEPX1DyseD3j+dRYeAiIUAYt4DwJTDw/19Q8eLA93HiweAXYPLAAAAAEAAP/xAgkCywALABhAFQsBAAEBQgABAQpDAAAACwBEJRECESs3BiImJxE0NjcyFwGyHlc8AT4qLB4BVw8ePisCCCw8AR7+sQAAAAAC//8AAAI9ApcADAAZACxAKQUCBAMAAQEATwUCBAMAAAFTAwEBAAFHDg0BABQTDRkOGQcGAAwBDAYPKxMyFhcRFAYiJjcRNDYhMhYVERQGIiY1ETQ2aCw8AT5WPgE8AZksPDxYPDwClz4q/l4qPjwsAaIsPDws/l4rPDwrAaIsPAAAAAABAAAAAQAAHVJ6Ol8PPPUACwPoAAAAAM9Nv1QAAAAAz02HFP////EChgLLAAAACAACAAAAAAAAAAEAAANS/2oAWgPoAAD//wKHAAEAAAAAAAAAAAAAAAAAAAAFA+gAAAKGAAAChgAAAgkAAAI9AAAAAAAAAD4AegCgAOEAAQAAAAUAGgACAAAAAAACAAwAGQBuAAAARAmRAAAAAAAAABIA3gABAAAAAAAAADUAAAABAAAAAAABAAgANQABAAAAAAACAAcAPQABAAAAAAADAAgARAABAAAAAAAEAAgATAABAAAAAAAFAAsAVAABAAAAAAAGAAgAXwABAAAAAAAKACsAZwABAAAAAAALABMAkgADAAEECQAAAGoApQADAAEECQABABABDwADAAEECQACAA4BHwADAAEECQADABABLQADAAEECQAEABABPQADAAEECQAFABYBTQADAAEECQAGABABYwADAAEECQAKAFYBcwADAAEECQALACYByUNvcHlyaWdodCAoQykgMjAxNCBieSBvcmlnaW5hbCBhdXRob3JzIEAgZm9udGVsbG8uY29tY29udHJvbHNSZWd1bGFyY29udHJvbHNjb250cm9sc1ZlcnNpb24gMS4wY29udHJvbHNHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADEANAAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AYwBvAG4AdAByAG8AbABzAFIAZQBnAHUAbABhAHIAYwBvAG4AdAByAG8A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"

/***/ }),

/***/ "./src/components/Slider/speedcontrols.woff":
/*!**************************************************!*\
  !*** ./src/components/Slider/speedcontrols.woff ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

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
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Slider */ "./src/components/Slider.js");

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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Our gallery component"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: gallery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "BackgroundVideo-section section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BackgroundVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    poster: videoPoster,
    videoTitle: videoTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, video && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: video,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: accordion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: section1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
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
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomePageTemplate, Object.assign({}, page, page.frontmatter, {
    body: page.html,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
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
//# sourceMappingURL=cms.5284fba2445b7f5de710.hot-update.js.map