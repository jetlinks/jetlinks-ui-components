/*!
 * Mars3D平台插件,结合mapv可视化功能插件
 * 版本信息：v3.0.37, hash值: 9535232b76b5ee955595
 * 编译日期：2021-08-31 10:55:24
 * 版权所有：Copyright by 山投信息 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sxii"), require("cesium"), require("mapv"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dMapv", ["sxii", "cesium", "mapv"], factory);
	else if(typeof exports === 'object')
		exports["mars3dMapv"] = factory(require("sxii"), require("cesium"), require("mapv"));
	else
		root["mars3dMapv"] = factory(root["sxii"], root["Cesium"], root["mapv"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10)["default"];

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(11);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(1);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MapVLayer", function() { return /* reexport */ MapVLayer_MapVLayer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"commonjs2":"cesium","amd":"cesium","commonjs":"cesium","root":"Cesium"}
var external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_ = __webpack_require__(2);

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(8);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./src/mapv/MapVRenderer.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//mapv+cesium融合，by http://marsgis.cn


var mapv = __webpack_require__(12);

var baiduMapLayer = mapv ? mapv.baiduMapLayer : null;
var BaseLayer = baiduMapLayer ? baiduMapLayer.__proto__ : Function;
var MapVRenderer_MapVRenderer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(MapVRenderer, _BaseLayer);

  var _super = _createSuper(MapVRenderer);

  //========== 构造方法 ==========
  function MapVRenderer(viewer, dataset, option, mapVLayer) {
    var _this;

    classCallCheck_default()(this, MapVRenderer);

    _this = _super.call(this, viewer, dataset, option);

    if (!BaseLayer) {
      return possibleConstructorReturn_default()(_this);
    }

    ;
    _this.map = viewer, _this.scene = viewer.scene, _this.dataSet = dataset;
    option = option || {}, _this.init(option), _this.argCheck(option), _this.initDevicePixelRatio(), _this.canvasLayer = mapVLayer, _this.stopAniamation = !1, _this.animation = option.animation, _this.clickEvent = _this.clickEvent.bind(assertThisInitialized_default()(_this)), _this.mousemoveEvent = _this.mousemoveEvent.bind(assertThisInitialized_default()(_this)), _this.bindEvent();
    return _this;
  } //========== 方法 ==========


  createClass_default()(MapVRenderer, [{
    key: "initDevicePixelRatio",
    value: function initDevicePixelRatio() {
      this.devicePixelRatio = window.devicePixelRatio || 1;
    }
  }, {
    key: "clickEvent",
    value: function clickEvent(t) {
      var e = t.point;

      get_default()(getPrototypeOf_default()(MapVRenderer.prototype), "clickEvent", this).call(this, e, t);
    }
  }, {
    key: "mousemoveEvent",
    value: function mousemoveEvent(t) {
      var e = t.point;

      get_default()(getPrototypeOf_default()(MapVRenderer.prototype), "mousemoveEvent", this).call(this, e, t);
    }
  }, {
    key: "addAnimatorEvent",
    value: function addAnimatorEvent() {}
  }, {
    key: "animatorMovestartEvent",
    value: function animatorMovestartEvent() {
      var t = this.options.animation;
      this.isEnabledTime() && this.animator && (this.steps.step = t.stepsRange.start);
    }
  }, {
    key: "animatorMoveendEvent",
    value: function animatorMoveendEvent() {
      this.isEnabledTime() && this.animator;
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.map;
      this.options.methods && (this.options.methods.click, this.options.methods.mousemove);
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent() {
      var t = this.map;
      this.options.methods && (this.options.methods.click && t.off('click', this.clickEvent), this.options.methods.mousemove && t.off('mousemove', this.mousemoveEvent));
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.canvasLayer.canvas.getContext(this.context);
    }
  }, {
    key: "init",
    value: function init(t) {
      this.options = t;
      this.initDataRange(t);
      this.context = this.options.context || '2d';

      if (this.options.zIndex && this.canvasLayer && this.canvasLayer.setZIndex) {
        this.canvasLayer.setZIndex(this.options.zIndex);
      }

      this.initAnimator();
    }
  }, {
    key: "_canvasUpdate",
    value: function _canvasUpdate(t) {
      var scene = this.scene;

      if (this.canvasLayer && !this.stopAniamation) {
        var i = this.options.animation,
            n = this.getContext();

        if (this.isEnabledTime()) {
          if (void 0 === t) {
            return void this.clear(n);
          }

          '2d' === this.context && (n.save(), n.globalCompositeOperation = 'destination-out', n.fillStyle = 'rgba(0, 0, 0, .1)', n.fillRect(0, 0, n.canvas.width, n.canvas.height), n.restore());
        } else {
          this.clear(n);
        }

        if ('2d' === this.context) {
          for (var o in this.options) {
            n[o] = this.options[o];
          }
        } else {
          n.clear(n.COLOR_BUFFER_BIT);
        }

        var a = {
          transferCoordinate: function transferCoordinate(data) {
            var defVal = null; //[-999, -999]

            var heightTerrain = scene.mapvFixedHeight;

            if (scene.mapvAutoHeight) {
              heightTerrain = scene.globe.getHeight(external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartographic"].fromDegrees(data[0], data[1]));
            } //坐标转换


            var position = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"].fromDegrees(data[0], data[1], heightTerrain);

            if (!position) {
              return defVal;
            }

            var px = scene.cartesianToCanvasCoordinates(position);

            if (!px) {
              return defVal;
            } //判断是否在球的背面


            if (scene.mapvDepthTest && scene.mode === external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneMode"].SCENE3D) {
              var occluder = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["EllipsoidalOccluder"](scene.globe.ellipsoid, scene.camera.positionWC);
              var visible = occluder.isPointVisible(position); //visible为true说明点在球的正面，否则点在球的背面。
              //需要注意的是不能用这种方法判断点的可见性，如果球放的比较大，点跑到屏幕外面，它返回的依然为true

              if (!visible) {
                return defVal;
              }
            } //判断是否在球的背面


            return [px.x, px.y];
          }
        };
        void 0 !== t && (a.filter = function (e) {
          var n = i.trails || 10;
          return !!(t && e.time > t - n && e.time < t);
        });
        var c = this.dataSet.get(a);
        this.processData(c), 'm' === this.options.unit && this.options.size, this.options._size = this.options.size;
        var h = scene.cartesianToCanvasCoordinates(external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"].fromDegrees(0, 0));

        if (!h) {
          return;
        }

        this.drawContext(n, new mapv.DataSet(c), this.options, h);
        this.options.updateCallback && this.options.updateCallback(t);
      }
    }
  }, {
    key: "updateData",
    value: function updateData(t, e) {
      var i = t;
      i && i.get && (i = i.get()), void 0 !== i && this.dataSet.set(i);

      get_default()(getPrototypeOf_default()(MapVRenderer.prototype), "update", this).call(this, {
        options: e
      });
    }
  }, {
    key: "addData",
    value: function addData(t, e) {
      var i = t;
      t && t.get && (i = t.get()), this.dataSet.add(i), this.update({
        options: e
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.dataSet;
    }
  }, {
    key: "removeData",
    value: function removeData(t) {
      if (this.dataSet) {
        var e = this.dataSet.get({
          filter: function filter(e) {
            return null == t || 'function' !== typeof t || !t(e);
          }
        });
        this.dataSet.set(e), this.update({
          options: null
        });
      }
    }
  }, {
    key: "clearData",
    value: function clearData() {
      this.dataSet && this.dataSet.clear(), this.update({
        options: null
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      this.canvasLayer.draw();
    }
  }, {
    key: "clear",
    value: function clear(t) {
      t && t.clearRect && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindEvent();
      this.clear(this.getContext());
      this.clearData();
      this.animator && this.animator.stop();
      this.animator = null;
      this.canvasLayer = null;
    }
  }]);

  return MapVRenderer;
}(BaseLayer); //修改mapv内部方法，已适应数据在球背面或看不见的区域的数据不显示的处理

mapv.DataSet.prototype.transferCoordinate = function (data, transferFn, fromColumn, toColumnName) {
  toColumnName = toColumnName || '_coordinates';
  fromColumn = fromColumn || 'coordinates';

  for (var i = 0; i < data.length; i++) {
    var geometry = data[i].geometry;
    var coordinates = geometry[fromColumn];

    switch (geometry.type) {
      default:
        break;

      case 'Point':
        {
          var pt = transferFn(coordinates);

          if (pt) {
            geometry[toColumnName] = pt;
          } else {
            geometry[toColumnName] = [-999, -999];
          }
        }
        break;

      case 'LineString':
        {
          var newCoordinates = [];

          for (var j = 0; j < coordinates.length; j++) {
            var _pt = transferFn(coordinates[j]);

            if (_pt) {
              newCoordinates.push(_pt);
            }
          }

          geometry[toColumnName] = newCoordinates;
        }
        break;

      case 'MultiLineString':
      case 'Polygon':
        {
          var _newCoordinates = getPolygon(coordinates);

          geometry[toColumnName] = _newCoordinates;
        }
        break;

      case 'MultiPolygon':
        {
          var _newCoordinates2 = [];

          for (var c = 0; c < coordinates.length; c++) {
            var polygon = getPolygon(coordinates[c]);

            if (polygon.length > 0) {
              _newCoordinates2.push(polygon);
            }
          }

          geometry[toColumnName] = _newCoordinates2;
        }
        break;
    }
  }

  function getPolygon(coordinates) {
    var newCoordinates = [];

    for (var _c = 0; _c < coordinates.length; _c++) {
      var coordinate = coordinates[_c];
      var newcoordinate = [];

      for (var _j = 0; _j < coordinate.length; _j++) {
        var _pt2 = transferFn(coordinate[_j]);

        if (_pt2) {
          newcoordinate.push(_pt2);
        }
      }

      if (newcoordinate.length > 0) {
        newCoordinates.push(newcoordinate);
      }
    }

    return newCoordinates;
  }

  return data;
};
// CONCATENATED MODULE: ./src/mapv/MapVLayer.js






function MapVLayer_createSuper(Derived) { var hasNativeReflectConstruct = MapVLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MapVLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//mapv+cesium融合，by http://marsgis.cn



var MapVLayer_BaseLayer = external_sxii_["layer"].BaseLayer;
var divId = 0;
/**
 * MapV图层
 * 【需要引入 heatmap.js 库 和 sxii-heatmap 插件库】
 *
 * @param {Object} options 图层参数，包括：
 *
 * @param {Object} [options.mapV本身] 支持mapv本身所有drawOptions图层样式参数，具体查阅 [mapv库drawOptions文档]{@link https://github.com/huiyan-fe/mapv/wiki/%E7%B1%BB%E5%8F%82%E8%80%83} ，也可以 [在线编辑图层样式]{@link https://mapv.baidu.com/editor/}
 *
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = '未命名'] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 * @param {Object} [options.center] 图层自定义定位视角
 *
 * @param {Boolean} [options.depthTest=true] 是否进行计算深度判断，在地球背面或被遮挡时不显示（大数据时，需要关闭）
 * @param {Number} [options.fixedHeight=0] 点的固定的海拔高度
 * @param {Boolean} [options.clampToGround=false] 点是否贴地
 * @param {Boolean} [options.pointerEvents=false] 图层是否可以进行鼠标交互，为false时可以穿透操作及缩放地图
 * @param {mapv.DataSet} dataSet  MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
 *
 * @export
 * @class MapVLayer
 * @extends {BaseLayer}
 */

var MapVLayer_MapVLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(MapVLayer, _BaseLayer);

  var _super = MapVLayer_createSuper(MapVLayer);

  //========== 构造方法 ==========
  function MapVLayer(options, dataSet) {
    var _this;

    classCallCheck_default()(this, MapVLayer);

    _this = _super.call(this, options);
    _this._pointerEvents = _this.options.pointerEvents;
    _this.dataSet = dataSet;
    /**
     * 图层对应的Canvas对象
     * @type {HTMLCanvasElement}
     * @readonly
     */

    _this.canvas = null;
    return _this;
  } //========== 方法 ==========


  createClass_default()(MapVLayer, [{
    key: "_showHook",
    value: function _showHook(show) {
      if (show) {
        this.canvas.style.display = 'block';
      } else {
        this.canvas.style.display = 'none';
      }
    }
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @return {void}  无
     * @private
     */

  }, {
    key: "_mountedHook",
    value: function _mountedHook() {
      this._map.scene.mapvDepthTest = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.options.depthTest, true); //是否进行计算深度（大数据时，需要关闭）

      this._map.scene.mapvAutoHeight = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.options.clampToGround, false);
      this._map.scene.mapvFixedHeight = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.options.fixedHeight, 0);
    }
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @return {void}  无
     * @private
     */

  }, {
    key: "_addedHook",
    value: function _addedHook() {
      this._mapVRenderer = new MapVRenderer_MapVRenderer(this._map, this.dataSet, this.options, this);
      this.initDevicePixelRatio();
      this.canvas = this._createCanvas();
      this.render = this.render.bind(this);
      this.container = this._map.container;
      this.addInnerContainer();
      this.bindEvent();

      this._reset();
    }
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @return {void}  无
     * @private
     */

  }, {
    key: "_removedHook",
    value: function _removedHook() {
      //释放
      this.unbindEvent();
      this.remove();
    }
  }, {
    key: "initDevicePixelRatio",
    value: function initDevicePixelRatio() {
      this.devicePixelRatio = window.devicePixelRatio || 1;
    }
  }, {
    key: "addInnerContainer",
    value: function addInnerContainer() {
      this.container.appendChild(this.canvas);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      //绑定cesium事件与mapv联动
      this._map.on(external_sxii_["EventType"].mouseDown, this._onMoveStartEvent, this); //按下
      // this._map.on(sxii.EventType.mouseUp, this._onMoveEndEvent, this) //释放


      this._map.on(external_sxii_["EventType"].cameraMoveStart, this._onMoveStartEvent, this);

      this._map.on(external_sxii_["EventType"].cameraMoveEnd, this._onMoveEndEvent, this);
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent() {
      this._map.off(external_sxii_["EventType"].mouseDown, this._onMoveStartEvent, this); //按下
      // this._map.off(sxii.EventType.mouseUp, this._onMoveEndEvent, this) //释放


      this._map.off(external_sxii_["EventType"].cameraMoveStart, this._onMoveStartEvent, this);

      this._map.off(external_sxii_["EventType"].cameraMoveEnd, this._onMoveEndEvent, this);

      this._map.off(external_sxii_["EventType"].postRender, this._reset, this);
    }
  }, {
    key: "_onMoveStartEvent",
    value: function _onMoveStartEvent() {
      if (this._mapVRenderer) {
        this._mapVRenderer.animatorMovestartEvent();

        this._map.off(external_sxii_["EventType"].postRender, this._reset, this);

        this._map.on(external_sxii_["EventType"].postRender, this._reset, this);
      }
    }
  }, {
    key: "_onMoveEndEvent",
    value: function _onMoveEndEvent() {
      if (this._mapVRenderer) {
        this._map.off(external_sxii_["EventType"].postRender, this._reset, this);

        this._mapVRenderer.animatorMoveendEvent();

        this._reset();
      }
    }
    /**
     * 新增mapv数据
     * @param {mapv.DataSet} dataSet  MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
     * @returns {void} 无
     */

  }, {
    key: "addData",
    value: function addData(dataSet) {
      if (this._mapVRenderer) {
        this._mapVRenderer.addData(dataSet, this.options);
      }
    }
    /**
     * 更新mapv数据
     * @param {mapv.DataSet} dataSet  MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
     * @returns {void} 无
     */

  }, {
    key: "updateData",
    value: function updateData(dataSet) {
      if (this._mapVRenderer) {
        this._mapVRenderer.updateData(dataSet, this.options);
      }
    }
    /**
     * 获取数据
     * @return {mapv.DataSet} MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
     */

  }, {
    key: "getData",
    value: function getData() {
      if (this._mapVRenderer) {
        this.dataSet = this._mapVRenderer.getData();
      }

      return this.dataSet;
    }
    /**
     * 删除指定数据
     * @param {mapv.DataSet} data  数据
     * @returns {void} 无
     */

  }, {
    key: "removeData",
    value: function removeData(data) {
      if (this._mapVRenderer) {
        this._mapVRenderer.removeData(data);
      }
    }
    /**
     * 删除所有数据
     * @returns {void} 无
     */

  }, {
    key: "removeAllData",
    value: function removeAllData() {
      if (this._mapVRenderer) {
        this._mapVRenderer.clearData();
      }
    }
  }, {
    key: "_createCanvas",
    value: function _createCanvas() {
      var t = document.createElement('canvas');
      t.id = this.options.layerid || 'mapv' + divId++;
      t.style.position = 'absolute';
      t.style.top = '0px';
      t.style.left = '0px';
      t.style.pointerEvents = this._pointerEvents ? 'auto' : 'none'; //auto时可以交互，但是没法放大地球, none没法交互

      t.style.zIndex = this.options.zIndex || 100;
      t.width = parseInt(this._map.canvas.width);
      t.height = parseInt(this._map.canvas.height);
      t.style.width = this._map.canvas.style.width;
      t.style.height = this._map.canvas.style.height;
      var e = this.devicePixelRatio;
      return '2d' === this.options.context && t.getContext(this.options.context).scale(e, e), t;
    }
  }, {
    key: "_reset",
    value: function _reset() {
      this.resize();
      this.render();
    }
    /**
     * 重绘图层
     * @return {void}  无
     */

  }, {
    key: "draw",
    value: function draw() {
      this._reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      this.removeAllData();

      if (this._mapVRenderer) {
        this._mapVRenderer.destroy();

        this._mapVRenderer = null;
      }

      this.canvas.parentElement.removeChild(this.canvas);
    }
  }, {
    key: "render",
    value: function render() {
      this._mapVRenderer._canvasUpdate();
    }
    /**
     * 改变图层canvas容器尺寸
     * @return {void}  无
     */

  }, {
    key: "resize",
    value: function resize() {
      if (void 0 !== this.canvas && null !== this.canvas) {
        var t = this.canvas;
        t.style.position = 'absolute', t.style.top = '0px', t.style.left = '0px', t.width = parseInt(this._map.canvas.width), t.height = parseInt(this._map.canvas.height), t.style.width = this._map.canvas.style.width, t.style.height = this._map.canvas.style.height;
      }
    }
  }]);

  return MapVLayer;
}(MapVLayer_BaseLayer); //注册下

external_sxii_["LayerUtil"].register('mapv', MapVLayer_MapVLayer);
external_sxii_["layer"].MapVLayer = MapVLayer_MapVLayer;
// CONCATENATED MODULE: ./src/index.js


/***/ })
/******/ ]);
});