/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --varblack : rgb(42, 54, 59);\n}\n\n*{\n    box-sizing: border-box;\n}\n\nhtml{\n    font-family: 'Maven Pro';\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n\n    font-size: 12px;\n    background-color: rgb(244, 247, 247);\n\n    display: flex;\n    align-items: stretch;\n    justify-content: space-between;\n\n    flex-direction: column;\n}\n\n\n\n\n/* Start header section  */\nheader{\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n    color: var(--varblack);\n}\n\nheader > span{\n    font-size: 22px;\n    font-weight: bold;\n    border-bottom: 5px solid var(--varblack);\n}\n/* End header section */\n\n\n\n\n/* Start body section  */\n#body{\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n}\n\n#playground{\n    grid-column-start: 1;\n    grid-column-end: 4;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Start result section  */\n#result{\n    grid-column-start: 4;\n    grid-column-end: 6;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 30px;\n\n    color: var(--varblack);\n}\n\n#instruction{\n    font-size: 16px;\n    border-bottom: 3px solid var(--varblack);\n}\n\n#resulttext{\n    font-size: 14px;\n}\n\n#resultnum{\n    font-size: 16px;\n    font-weight: bold;\n\n    border: 3px solid grey;\n    padding: 5px 7px;\n    border-radius: 5px;\n}\n\n\n.btn{\n    border: none;\n    border-radius: 40px;\n    font-weight: bold;\n    font-size: 12px;\n    color: black;\n\n    background-color: aquamarine;\n    padding: 10px 20px;\n\n    box-shadow: rgba(127, 255, 212, 0.7) 0px 5px 15px;\n}\n\n.btn:hover{\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.7);\n}\n\n.btn:active{\n    background-color: black;\n    color: white;\n}\n\n#reloadbtn{\n    background-color: rgb(255, 49, 49);\n    box-shadow: rgba(255, 127, 127, 0.7) 0px 5px 15px;\n}\n\n#reloadbtn:hover{\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.7);\n}\n/* End result section */\n\n\n/* Start chess section  */\n#chesscover{\n    height: 400px;\n    width: 400px;\n    background-color: rgb(218, 255, 255);\n\n    border: 5px double black;\n    border-radius: 10px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#chess{\n    width: 87%;\n    height: 87%;\n\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    border: 2px solid black;\n}\n\n.chessbox{\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    transition: all ease-in-out 0.2s;\n}\n\n.makegrey{\n    background-color: rgb(167, 167, 167);\n}\n\n.fa-chess-knight{\n    font-size: 30px;\n}\n/* End chess section */\n/* End body section */\n\n\n\n\n\n/* Start footer section  */\nfooter{\n    background-color: rgb(30, 30, 30);\n    font-size: 12px;\n    color: rgb(230, 230, 230);\n\n    padding: 5px 0px;\n\n    text-align: center;\n}\n/* End footer section */\n\n\n\n@media screen and (max-width: 800px) {\n    #body{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        flex-direction: column;\n    }\n\n    #result{\n        gap: 15px;\n        align-items: center;\n    }\n\n    #instruction{\n        padding-top: 20px;\n    }\n}\n\n\n@media screen and (max-width: 410px) {\n    #chesscover{\n        width: 95vw;\n        height: 95vw;\n    }\n\n    .fa-chess-knight{\n        font-size: 20px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;IACZ,aAAa;;IAEb,eAAe;IACf,oCAAoC;;IAEpC,aAAa;IACb,oBAAoB;IACpB,8BAA8B;;IAE9B,sBAAsB;AAC1B;;;;;AAKA,0BAA0B;AAC1B;IACI,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;;IAEpB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,wCAAwC;AAC5C;AACA,uBAAuB;;;;;AAKvB,wBAAwB;AACxB;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,0BAA0B;AAC1B;IACI,oBAAoB;IACpB,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,SAAS;;IAET,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;;IAEjB,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;;IAEZ,4BAA4B;IAC5B,kBAAkB;;IAElB,iDAAiD;AACrD;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,iDAAiD;AACrD;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B;AACA,uBAAuB;;;AAGvB,yBAAyB;AACzB;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;;IAEpC,wBAAwB;IACxB,mBAAmB;;IAEnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;;IAEX,aAAa;IACb,qCAAqC;IACrC,kCAAkC;;IAElC,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,gCAAgC;AACpC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;AACA,sBAAsB;AACtB,qBAAqB;;;;;;AAMrB,0BAA0B;AAC1B;IACI,iCAAiC;IACjC,eAAe;IACf,yBAAyB;;IAEzB,gBAAgB;;IAEhB,kBAAkB;AACtB;AACA,uBAAuB;;;;AAIvB;IACI;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;;QAEnB,sBAAsB;IAC1B;;IAEA;QACI,SAAS;QACT,mBAAmB;IACvB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;;AAGA;IACI;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&display=swap');\n\n:root{\n    --varblack : rgb(42, 54, 59);\n}\n\n*{\n    box-sizing: border-box;\n}\n\nhtml{\n    font-family: 'Maven Pro';\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n\n    font-size: 12px;\n    background-color: rgb(244, 247, 247);\n\n    display: flex;\n    align-items: stretch;\n    justify-content: space-between;\n\n    flex-direction: column;\n}\n\n\n\n\n/* Start header section  */\nheader{\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n    color: var(--varblack);\n}\n\nheader > span{\n    font-size: 22px;\n    font-weight: bold;\n    border-bottom: 5px solid var(--varblack);\n}\n/* End header section */\n\n\n\n\n/* Start body section  */\n#body{\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n}\n\n#playground{\n    grid-column-start: 1;\n    grid-column-end: 4;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Start result section  */\n#result{\n    grid-column-start: 4;\n    grid-column-end: 6;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 30px;\n\n    color: var(--varblack);\n}\n\n#instruction{\n    font-size: 16px;\n    border-bottom: 3px solid var(--varblack);\n}\n\n#resulttext{\n    font-size: 14px;\n}\n\n#resultnum{\n    font-size: 16px;\n    font-weight: bold;\n\n    border: 3px solid grey;\n    padding: 5px 7px;\n    border-radius: 5px;\n}\n\n\n.btn{\n    border: none;\n    border-radius: 40px;\n    font-weight: bold;\n    font-size: 12px;\n    color: black;\n\n    background-color: aquamarine;\n    padding: 10px 20px;\n\n    box-shadow: rgba(127, 255, 212, 0.7) 0px 5px 15px;\n}\n\n.btn:hover{\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.7);\n}\n\n.btn:active{\n    background-color: black;\n    color: white;\n}\n\n#reloadbtn{\n    background-color: rgb(255, 49, 49);\n    box-shadow: rgba(255, 127, 127, 0.7) 0px 5px 15px;\n}\n\n#reloadbtn:hover{\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.7);\n}\n/* End result section */\n\n\n/* Start chess section  */\n#chesscover{\n    height: 400px;\n    width: 400px;\n    background-color: rgb(218, 255, 255);\n\n    border: 5px double black;\n    border-radius: 10px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#chess{\n    width: 87%;\n    height: 87%;\n\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    border: 2px solid black;\n}\n\n.chessbox{\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    transition: all ease-in-out 0.2s;\n}\n\n.makegrey{\n    background-color: rgb(167, 167, 167);\n}\n\n.fa-chess-knight{\n    font-size: 30px;\n}\n/* End chess section */\n/* End body section */\n\n\n\n\n\n/* Start footer section  */\nfooter{\n    background-color: rgb(30, 30, 30);\n    font-size: 12px;\n    color: rgb(230, 230, 230);\n\n    padding: 5px 0px;\n\n    text-align: center;\n}\n/* End footer section */\n\n\n\n@media screen and (max-width: 800px) {\n    #body{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        flex-direction: column;\n    }\n\n    #result{\n        gap: 15px;\n        align-items: center;\n    }\n\n    #instruction{\n        padding-top: 20px;\n    }\n}\n\n\n@media screen and (max-width: 410px) {\n    #chesscover{\n        width: 95vw;\n        height: 95vw;\n    }\n\n    .fa-chess-knight{\n        font-size: 20px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/chess/chesscontrol.js":
/*!***********************************!*\
  !*** ./src/chess/chesscontrol.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const chess = document.getElementById("chess");
const allchessbox = document.getElementsByClassName("chessbox");
const instruction = document.getElementById("instruction");
const startbtn = document.getElementById("startbtn");
const reloadbtn = document.getElementById("reloadbtn");

let knight = [];
let target = [];

function chesstap(){
    for(let a = 1; a < 65; a++){
        chess.innerHTML += `
            <div id=${a} class="chessbox">
    
            </div>
        `;
    }
    
    
    
    
    function btncontrol(btn1,btn2){
        startbtn.style.display = btn1;
        reloadbtn.style.display = btn2;
    }
    btncontrol("none","none");
    startbtn.addEventListener("click",function(){
            findpathway(knight,target,8);
            btncontrol("none","block");
    });
        
    reloadbtn.addEventListener("click",function(){
        location.reload();
    });
    
    
    function showknight(num){
        for(let c = 0; c< allchessbox.length; c++){
            if(c === num){
                allchessbox[c].innerHTML = `<i class="fa-solid fa-chess-knight"></i>`;
                // allchessbox[c].classList.add("makegrey");
            }else{
                allchessbox[c].innerHTML = ``;
                // allchessbox[c].classList.remove("makegrey");
            }
        }
    }
    
    function calculatecoordinate (number){
        var x = (number % 8) === 0 ? 8 : (number % 8);
        var y = Math.ceil(number / 8);
        
        return [x,y];
    }
    
    
    
    for(let b = 0; b < allchessbox.length; b++){
        allchessbox[b].addEventListener("click",function(){
            showknight(b);
            let N = 8;
    
            if(knight.length === 0){
                knight = calculatecoordinate(b+1);
                allchessbox[b].classList.add("makegrey");
                instruction.innerText = "Please tap the chess box again to mark the final point."
            }else{
                target = calculatecoordinate(b+1);
                allchessbox[b].classList.add("makegrey");
                btncontrol("block","none");
                instruction.innerText = "";
            }
        });
    }
    
    
    
    
    
    
    
    function findpathway(knightpos, targetpos,N){
        const resultnum = document.getElementById("resultnum");
        resultnum.innerText = minStepToReachTarget(knightpos,targetpos,N);
    }
    
    
    class cell{
        constructor(x,y,dis)
        {
            this.x = x;
            this.y = y;
            this.dis = dis;
        }
    }
    
    
    function isInside(x,y,N){
        if (x >= 1 && x <= N && y >= 1 && y <= N){
            return true;
            
        }
        
        return false;
    }
    
    
    function minStepToReachTarget(knightPos,targetPos,N){
        // x and y direction, where a knight can move
            let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
            let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];
    
            // queue for storing states of knight in board
            let q = [];
    
            // push starting position of knight with 0 distance
            q.push(new cell(knightPos[0], knightPos[1], 0));
    
            let t;
            let x, y;
            let visit = new Array(N + 1);
    
            // make all cell unvisited
            for (let i = 1; i <= N; i++)
            {
                visit[i]=new Array(N+1);
                for (let j = 1; j <= N; j++){
                    visit[i][j] = false;
                }
                    
            }
    
            // visit starting state
            visit[knightPos[0]][knightPos[1]] = true;
            // loop until we have one element in queue
            while (q.length!=0) {
                t = q.shift();
                console.log(t);
                // if current cell is equal to target cell,
                // return its distance
                if (t.x == targetPos[0] && t.y == targetPos[1]){
                    return t.dis;
                }
                    
    
                // loop for all reachable states
                for (let i = 0; i < 8; i++) {
                    x = t.x + dx[i];
                    y = t.y + dy[i];
    
                    // If reachable state is not yet visited and
                    // inside board, push that state into queue
                    if (isInside(x, y, N) && !visit[x][y]) {
                        visit[x][y] = true;
                        q.push(new cell(x, y, t.dis + 1));
                    }
                }
            }
            return Number.MAX_VALUE;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chesstap);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function footer(){
    const curyear = document.getElementById("curyear");

    let date = new Date();
    let year = date.getFullYear();

    curyear.innerText = year;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _chess_chesscontrol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chess/chesscontrol.js */ "./src/chess/chesscontrol.js");





(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_chess_chesscontrol_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUNUckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7QUFDYzs7O0FBRy9DLHNEQUFNO0FBQ04sa0VBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcDEzX2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wMTNfa25pZ2h0dHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wMTNfa25pZ2h0dHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcDEzX2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcDEzX2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wMTNfa25pZ2h0dHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wMTNfa25pZ2h0dHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wMTNfa25pZ2h0dHJhdmFpbHMvLi9zcmMvY2hlc3MvY2hlc3Njb250cm9sLmpzIiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcDEzX2tuaWdodHRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wMTNfa25pZ2h0dHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3AxM19rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcDEzX2tuaWdodHRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF2ZW4rUHJvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS12YXJibGFjayA6IHJnYig0MiwgNTQsIDU5KTtcXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDcsIDI0Nyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcblxcbi8qIFN0YXJ0IGhlYWRlciBzZWN0aW9uICAqL1xcbmhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS12YXJibGFjayk7XFxufVxcblxcbmhlYWRlciA+IHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS12YXJibGFjayk7XFxufVxcbi8qIEVuZCBoZWFkZXIgc2VjdGlvbiAqL1xcblxcblxcblxcblxcbi8qIFN0YXJ0IGJvZHkgc2VjdGlvbiAgKi9cXG4jYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuI3BsYXlncm91bmR7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBTdGFydCByZXN1bHQgc2VjdGlvbiAgKi9cXG4jcmVzdWx0e1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLXZhcmJsYWNrKTtcXG59XFxuXFxuI2luc3RydWN0aW9ue1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS12YXJibGFjayk7XFxufVxcblxcbiNyZXN1bHR0ZXh0e1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbiNyZXN1bHRudW17XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG5cXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjcpIDBweCA1cHggMTVweDtcXG59XFxuXFxuLmJ0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuLmJ0bjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNyZWxvYWRidG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ5LCA0OSk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAxMjcsIDEyNywgMC43KSAwcHggNXB4IDE1cHg7XFxufVxcblxcbiNyZWxvYWRidG46aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcbi8qIEVuZCByZXN1bHQgc2VjdGlvbiAqL1xcblxcblxcbi8qIFN0YXJ0IGNoZXNzIHNlY3Rpb24gICovXFxuI2NoZXNzY292ZXJ7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjU1LCAyNTUpO1xcblxcbiAgICBib3JkZXI6IDVweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2hlc3N7XFxuICAgIHdpZHRoOiA4NyU7XFxuICAgIGhlaWdodDogODclO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZXNzYm94e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcblxcbi5tYWtlZ3JleXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpO1xcbn1cXG5cXG4uZmEtY2hlc3Mta25pZ2h0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi8qIEVuZCBjaGVzcyBzZWN0aW9uICovXFxuLyogRW5kIGJvZHkgc2VjdGlvbiAqL1xcblxcblxcblxcblxcblxcbi8qIFN0YXJ0IGZvb3RlciBzZWN0aW9uICAqL1xcbmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuXFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogRW5kIGZvb3RlciBzZWN0aW9uICovXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgI2JvZHl7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAjcmVzdWx0e1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjaW5zdHJ1Y3Rpb257XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xcbiAgICAjY2hlc3Njb3ZlcntcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiA5NXZ3O1xcbiAgICB9XFxuXFxuICAgIC5mYS1jaGVzcy1rbmlnaHR7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7O0lBRWIsZUFBZTtJQUNmLG9DQUFvQzs7SUFFcEMsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw4QkFBOEI7O0lBRTlCLHNCQUFzQjtBQUMxQjs7Ozs7QUFLQSwwQkFBMEI7QUFDMUI7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjs7SUFFcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix3Q0FBd0M7QUFDNUM7QUFDQSx1QkFBdUI7Ozs7O0FBS3ZCLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZOztJQUVaLDRCQUE0QjtJQUM1QixrQkFBa0I7O0lBRWxCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0EsdUJBQXVCOzs7QUFHdkIseUJBQXlCO0FBQ3pCO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7O0lBRXBDLHdCQUF3QjtJQUN4QixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7O0lBRWxDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLHNCQUFzQjtBQUN0QixxQkFBcUI7Ozs7OztBQU1yQiwwQkFBMEI7QUFDMUI7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHlCQUF5Qjs7SUFFekIsZ0JBQWdCOztJQUVoQixrQkFBa0I7QUFDdEI7QUFDQSx1QkFBdUI7Ozs7QUFJdkI7SUFDSTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1COztRQUVuQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXZlbitQcm86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLXZhcmJsYWNrIDogcmdiKDQyLCA1NCwgNTkpO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LWZhbWlseTogJ01hdmVuIFBybyc7XFxufVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NywgMjQ3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuXFxuXFxuLyogU3RhcnQgaGVhZGVyIHNlY3Rpb24gICovXFxuaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLXZhcmJsYWNrKTtcXG59XFxuXFxuaGVhZGVyID4gc3BhbntcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXZhcmJsYWNrKTtcXG59XFxuLyogRW5kIGhlYWRlciBzZWN0aW9uICovXFxuXFxuXFxuXFxuXFxuLyogU3RhcnQgYm9keSBzZWN0aW9uICAqL1xcbiNib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4jcGxheWdyb3VuZHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0YXJ0IHJlc3VsdCBzZWN0aW9uICAqL1xcbiNyZXN1bHR7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBjb2xvcjogdmFyKC0tdmFyYmxhY2spO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb257XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXZhcmJsYWNrKTtcXG59XFxuXFxuI3Jlc3VsdHRleHR7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuI3Jlc3VsdG51bXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4uYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNykgMHB4IDVweCAxNXB4O1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3JlbG9hZGJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDksIDQ5KTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDEyNywgMTI3LCAwLjcpIDBweCA1cHggMTVweDtcXG59XFxuXFxuI3JlbG9hZGJ0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuLyogRW5kIHJlc3VsdCBzZWN0aW9uICovXFxuXFxuXFxuLyogU3RhcnQgY2hlc3Mgc2VjdGlvbiAgKi9cXG4jY2hlc3Njb3ZlcntcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyNTUsIDI1NSk7XFxuXFxuICAgIGJvcmRlcjogNXB4IGRvdWJsZSBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaGVzc3tcXG4gICAgd2lkdGg6IDg3JTtcXG4gICAgaGVpZ2h0OiA4NyU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2hlc3Nib3h7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLm1ha2VncmV5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XFxufVxcblxcbi5mYS1jaGVzcy1rbmlnaHR7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLyogRW5kIGNoZXNzIHNlY3Rpb24gKi9cXG4vKiBFbmQgYm9keSBzZWN0aW9uICovXFxuXFxuXFxuXFxuXFxuXFxuLyogU3RhcnQgZm9vdGVyIHNlY3Rpb24gICovXFxuZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG5cXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBFbmQgZm9vdGVyIHNlY3Rpb24gKi9cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAjYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICNyZXN1bHR7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNpbnN0cnVjdGlvbntcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XFxuICAgICNjaGVzc2NvdmVye1xcbiAgICAgICAgd2lkdGg6IDk1dnc7XFxuICAgICAgICBoZWlnaHQ6IDk1dnc7XFxuICAgIH1cXG5cXG4gICAgLmZhLWNoZXNzLWtuaWdodHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjaGVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlc3NcIik7XG5jb25zdCBhbGxjaGVzc2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGVzc2JveFwiKTtcbmNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvblwiKTtcbmNvbnN0IHN0YXJ0YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydGJ0blwiKTtcbmNvbnN0IHJlbG9hZGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVsb2FkYnRuXCIpO1xuXG5sZXQga25pZ2h0ID0gW107XG5sZXQgdGFyZ2V0ID0gW107XG5cbmZ1bmN0aW9uIGNoZXNzdGFwKCl7XG4gICAgZm9yKGxldCBhID0gMTsgYSA8IDY1OyBhKyspe1xuICAgICAgICBjaGVzcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBpZD0ke2F9IGNsYXNzPVwiY2hlc3Nib3hcIj5cbiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBidG5jb250cm9sKGJ0bjEsYnRuMil7XG4gICAgICAgIHN0YXJ0YnRuLnN0eWxlLmRpc3BsYXkgPSBidG4xO1xuICAgICAgICByZWxvYWRidG4uc3R5bGUuZGlzcGxheSA9IGJ0bjI7XG4gICAgfVxuICAgIGJ0bmNvbnRyb2woXCJub25lXCIsXCJub25lXCIpO1xuICAgIHN0YXJ0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmaW5kcGF0aHdheShrbmlnaHQsdGFyZ2V0LDgpO1xuICAgICAgICAgICAgYnRuY29udHJvbChcIm5vbmVcIixcImJsb2NrXCIpO1xuICAgIH0pO1xuICAgICAgICBcbiAgICByZWxvYWRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gc2hvd2tuaWdodChudW0pe1xuICAgICAgICBmb3IobGV0IGMgPSAwOyBjPCBhbGxjaGVzc2JveC5sZW5ndGg7IGMrKyl7XG4gICAgICAgICAgICBpZihjID09PSBudW0pe1xuICAgICAgICAgICAgICAgIGFsbGNoZXNzYm94W2NdLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXNzLWtuaWdodFwiPjwvaT5gO1xuICAgICAgICAgICAgICAgIC8vIGFsbGNoZXNzYm94W2NdLmNsYXNzTGlzdC5hZGQoXCJtYWtlZ3JleVwiKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsbGNoZXNzYm94W2NdLmlubmVySFRNTCA9IGBgO1xuICAgICAgICAgICAgICAgIC8vIGFsbGNoZXNzYm94W2NdLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWtlZ3JleVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVjb29yZGluYXRlIChudW1iZXIpe1xuICAgICAgICB2YXIgeCA9IChudW1iZXIgJSA4KSA9PT0gMCA/IDggOiAobnVtYmVyICUgOCk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5jZWlsKG51bWJlciAvIDgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFt4LHldO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBmb3IobGV0IGIgPSAwOyBiIDwgYWxsY2hlc3Nib3gubGVuZ3RoOyBiKyspe1xuICAgICAgICBhbGxjaGVzc2JveFtiXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2hvd2tuaWdodChiKTtcbiAgICAgICAgICAgIGxldCBOID0gODtcbiAgICBcbiAgICAgICAgICAgIGlmKGtuaWdodC5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIGtuaWdodCA9IGNhbGN1bGF0ZWNvb3JkaW5hdGUoYisxKTtcbiAgICAgICAgICAgICAgICBhbGxjaGVzc2JveFtiXS5jbGFzc0xpc3QuYWRkKFwibWFrZWdyZXlcIik7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uaW5uZXJUZXh0ID0gXCJQbGVhc2UgdGFwIHRoZSBjaGVzcyBib3ggYWdhaW4gdG8gbWFyayB0aGUgZmluYWwgcG9pbnQuXCJcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNhbGN1bGF0ZWNvb3JkaW5hdGUoYisxKTtcbiAgICAgICAgICAgICAgICBhbGxjaGVzc2JveFtiXS5jbGFzc0xpc3QuYWRkKFwibWFrZWdyZXlcIik7XG4gICAgICAgICAgICAgICAgYnRuY29udHJvbChcImJsb2NrXCIsXCJub25lXCIpO1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBmaW5kcGF0aHdheShrbmlnaHRwb3MsIHRhcmdldHBvcyxOKXtcbiAgICAgICAgY29uc3QgcmVzdWx0bnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRudW1cIik7XG4gICAgICAgIHJlc3VsdG51bS5pbm5lclRleHQgPSBtaW5TdGVwVG9SZWFjaFRhcmdldChrbmlnaHRwb3MsdGFyZ2V0cG9zLE4pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjbGFzcyBjZWxse1xuICAgICAgICBjb25zdHJ1Y3Rvcih4LHksZGlzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgIHRoaXMuZGlzID0gZGlzO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIGlzSW5zaWRlKHgseSxOKXtcbiAgICAgICAgaWYgKHggPj0gMSAmJiB4IDw9IE4gJiYgeSA+PSAxICYmIHkgPD0gTil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIG1pblN0ZXBUb1JlYWNoVGFyZ2V0KGtuaWdodFBvcyx0YXJnZXRQb3MsTil7XG4gICAgICAgIC8vIHggYW5kIHkgZGlyZWN0aW9uLCB3aGVyZSBhIGtuaWdodCBjYW4gbW92ZVxuICAgICAgICAgICAgbGV0IGR4ID0gWyAtMiwgLTEsIDEsIDIsIC0yLCAtMSwgMSwgMiBdO1xuICAgICAgICAgICAgbGV0IGR5ID0gWyAtMSwgLTIsIC0yLCAtMSwgMSwgMiwgMiwgMSBdO1xuICAgIFxuICAgICAgICAgICAgLy8gcXVldWUgZm9yIHN0b3Jpbmcgc3RhdGVzIG9mIGtuaWdodCBpbiBib2FyZFxuICAgICAgICAgICAgbGV0IHEgPSBbXTtcbiAgICBcbiAgICAgICAgICAgIC8vIHB1c2ggc3RhcnRpbmcgcG9zaXRpb24gb2Yga25pZ2h0IHdpdGggMCBkaXN0YW5jZVxuICAgICAgICAgICAgcS5wdXNoKG5ldyBjZWxsKGtuaWdodFBvc1swXSwga25pZ2h0UG9zWzFdLCAwKSk7XG4gICAgXG4gICAgICAgICAgICBsZXQgdDtcbiAgICAgICAgICAgIGxldCB4LCB5O1xuICAgICAgICAgICAgbGV0IHZpc2l0ID0gbmV3IEFycmF5KE4gKyAxKTtcbiAgICBcbiAgICAgICAgICAgIC8vIG1ha2UgYWxsIGNlbGwgdW52aXNpdGVkXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBOOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmlzaXRbaV09bmV3IEFycmF5KE4rMSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gTjsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gdmlzaXQgc3RhcnRpbmcgc3RhdGVcbiAgICAgICAgICAgIHZpc2l0W2tuaWdodFBvc1swXV1ba25pZ2h0UG9zWzFdXSA9IHRydWU7XG4gICAgICAgICAgICAvLyBsb29wIHVudGlsIHdlIGhhdmUgb25lIGVsZW1lbnQgaW4gcXVldWVcbiAgICAgICAgICAgIHdoaWxlIChxLmxlbmd0aCE9MCkge1xuICAgICAgICAgICAgICAgIHQgPSBxLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgY3VycmVudCBjZWxsIGlzIGVxdWFsIHRvIHRhcmdldCBjZWxsLFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBpdHMgZGlzdGFuY2VcbiAgICAgICAgICAgICAgICBpZiAodC54ID09IHRhcmdldFBvc1swXSAmJiB0LnkgPT0gdGFyZ2V0UG9zWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuZGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gbG9vcCBmb3IgYWxsIHJlYWNoYWJsZSBzdGF0ZXNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gdC54ICsgZHhbaV07XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0LnkgKyBkeVtpXTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVhY2hhYmxlIHN0YXRlIGlzIG5vdCB5ZXQgdmlzaXRlZCBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5zaWRlIGJvYXJkLCBwdXNoIHRoYXQgc3RhdGUgaW50byBxdWV1ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnNpZGUoeCwgeSwgTikgJiYgIXZpc2l0W3hdW3ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdFt4XVt5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2gobmV3IGNlbGwoeCwgeSwgdC5kaXMgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZXNzdGFwOyIsImZ1bmN0aW9uIGZvb3Rlcigpe1xuICAgIGNvbnN0IGN1cnllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnllYXJcIik7XG5cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBjdXJ5ZWFyLmlubmVyVGV4dCA9IHllYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9mb290ZXIuanNcIjtcbmltcG9ydCBjaGVzc3RhcCBmcm9tIFwiLi9jaGVzcy9jaGVzc2NvbnRyb2wuanNcIjtcblxuXG5mb290ZXIoKTtcbmNoZXNzdGFwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9