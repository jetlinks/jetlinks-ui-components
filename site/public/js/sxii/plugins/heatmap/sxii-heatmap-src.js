/*!
 * Mars3D平台插件,结合heatmap可视化功能插件
 * 版本信息：v3.0.37, hash值: 4a7cdf73b91a2ada7e60
 * 编译日期：2021-08-31 10:54:14
 * 版权所有：Copyright by 山投信息 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cesium"), require("sxii"), require("heatmap.js"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dHeatmap", ["cesium", "sxii", "heatmap.js"], factory);
	else if(typeof exports === 'object')
		exports["mars3dHeatmap"] = factory(require("cesium"), require("sxii"), require("heatmap.js"));
	else
		root["mars3dHeatmap"] = factory(root["Cesium"], root["sxii"], root["h337"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__12__) {
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

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D image;\nczm_material czm_getMaterial(czm_materialInput materialInput){\n  czm_material material = czm_getDefaultMaterial(materialInput);\n  vec2 st = materialInput.st;\n  vec4 colorImage = texture2D(image,st);\n  if(colorImage.rgb == vec3(1.0) || colorImage.rgb == vec3(0.0)){\n    discard;\n  }\n  material.diffuse = colorImage.rgb;\n  material.alpha = colorImage.a;\n  return material;\n}\n"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10)["default"];

var assertThisInitialized = __webpack_require__(11);

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
__webpack_require__.d(__webpack_exports__, "HeatLayer", function() { return /* reexport */ HeatLayer_HeatLayer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(6);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"commonjs2":"cesium","amd":"cesium","commonjs":"cesium","root":"Cesium"}
var external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_ = __webpack_require__(0);

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/shaders/HeatMaterial.glsl
var HeatMaterial = __webpack_require__(3);
var HeatMaterial_default = /*#__PURE__*/__webpack_require__.n(HeatMaterial);

// CONCATENATED MODULE: ./src/heatmap/HeatLayer.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var h337 = __webpack_require__(12);

var BaseLayer = external_sxii_["layer"].BaseLayer; //热力图默认参数

var DEF_HEATSTYLE = {
  maxOpacity: 0.8,
  minOpacity: 0.1,
  blur: 0.85,
  radius: 25,
  gradient: {
    0.4: 'blue',
    0.6: 'green',
    0.8: 'yellow',
    0.9: 'red'
  }
};
var DEF_STYLE = {
  arcRadiusScale: 1.5,
  arcBlurScale: 1.5,
  vertexFormat: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["EllipsoidSurfaceAppearance"].VERTEX_FORMAT
};
/**
 * 热力图图层，基于heatmap.js库渲染。
 * 【需要引入 heatmap.js 库 和 sxii-heatmap 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 *
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = '未命名'] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 * @param {Object} [options.center] 图层自定义定位视角
 *
 * @param {LatLngPoint[]|Array[]|String[]|Cesium.Cartesian3[]} [options.positions] 坐标位置数组，有热力值时，传入LatLngPoint数组，热力值为value字段。示例:[{lat:31.123,lng:103.568,value:1.2},{lat:31.233,lng:103.938,value:2.3}]
 *
 * @param {Object} [options.heatStyle] heatmap热力图本身configObject参数，详情也可查阅 [heatmap文档]{@link https://www.patrick-wied.at/static/heatmapjs/docs.html}
 * @param {Number} [options.heatStyle.maxOpacity=0.8] 最大不透明度，取值范围0.0-1.0。
 * @param {Number} [options.heatStyle.minOpacity=0.1] 最小不透明度，取值范围0.0-1.0。
 * @param {Number} [options.heatStyle.blur=0.85] 将应用于所有数据点的模糊因子。模糊因子越高，渐变将越平滑
 * @param {Number} [options.heatStyle.radius=25] 每个数据点将具有的半径（如果未在数据点本身上指定）
 * @param {Object} [options.heatStyle.gradient] 色带，表示渐变的对象，示例：{ 0.4: 'blue', 0.6: 'green',0.8: 'yellow',0.9: 'red' }
 *
 * @param {Object} [options.style] 矢量对象样式参数，还包括：
 * @param {RectanglePrimitive.StyleOptions} [options.style.父类] 父类支持的样式
 * @param {Boolean} [options.style.opacity=1] 透明度
 * @param {Boolean} [options.style.arc=false] 是否显示曲面热力图
 * @param {Boolean} [options.style.arcRadiusScale=1.5] 曲面热力图时，radius扩大比例
 * @param {Boolean} [options.style.arcBlurScale=1.5] 曲面热力图时，blur扩大比例
 *
 * @param {Number} [options.maxCanvasSize=5000] Canvas最大尺寸（单位：像素），调大精度更高，但过大容易内存溢出
 * @param {Number} [options.minCanvasSize=700] Canvas最小尺寸（单位：像素）
 *
 * @param {Number} [options.delayTime=2] 显示数据时的过渡动画时长（单位：秒）
 *
 * @export
 * @class HeatLayer
 * @extends {BaseLayer}
 */

var HeatLayer_HeatLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(HeatLayer, _BaseLayer);

  var _super = _createSuper(HeatLayer);

  function HeatLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, HeatLayer);

    _this = _super.call(this, options);
    _this.options.maxCanvasSize = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](_this.options.maxCanvasSize, document.body.clientWidth);
    _this.options.maxCanvasSize = Math.min(_this.options.maxCanvasSize, 5000);
    _this.options.minCanvasSize = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](_this.options.minCanvasSize, document.body.clientHeight);
    _this.options.minCanvasSize = Math.max(_this.options.minCanvasSize, 700);
    _this.options.heatStyle = _objectSpread(_objectSpread({}, DEF_HEATSTYLE), _this.options.heatStyle || {});
    _this.options.style = _objectSpread(_objectSpread({}, DEF_STYLE), _this.options.style || {});
    return _this;
  }
  /**
   * 矢量数据图层
   * @type {GraphicLayer}
   * @readonly
   */


  createClass_default()(HeatLayer, [{
    key: "layer",
    get: function get() {
      return this._layer;
    }
    /**
     * heatmap热力图本身configObject参数，详情也可查阅 [heatmap文档]{@link https://www.patrick-wied.at/static/heatmapjs/docs.html}
     * @type {Object}
     */

  }, {
    key: "heatStyle",
    get: function get() {
      return this.options.heatStyle;
    },
    set: function set(value) {
      this.options.heatStyle = external_sxii_["Util"].merge(this.options.heatStyle, value);

      if (this._heat) {
        this._heat.configure(this.options.heatStyle);
      }
    }
    /**
     * 矩形的样式参数
     * @type {RectanglePrimitive.StyleOptions}
     */

  }, {
    key: "style",
    get: function get() {
      return this.options.style;
    },
    set: function set(value) {
      this.options.style = external_sxii_["Util"].merge(this.options.style, value);
    }
    /**
     * 数据位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     * @type {Cesium.Cartesian3[]|LatLngPoint[]}
     */

  }, {
    key: "positions",
    get: function get() {
      return this._positions;
    },
    set: function set(value) {
      this._positions = value;

      this._updatePositionsHook();
    }
    /**
     * 位置坐标(数组对象)，示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     * @type {Array[]}
     * @readonly
     */

  }, {
    key: "coordinates",
    get: function get() {
      var coords = [];
      this.points.forEach(function (item) {
        coords.push(item.toArray());
      });
      return coords;
    }
    /**
     * 坐标数据对应的矩形边界
     * @type {Cesium.Rectangle}
     * @readonly
     */

  }, {
    key: "rectangle",
    get: function get() {
      return this._rectangle;
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
      this._layer = new external_sxii_["layer"].GraphicLayer({
        noLayerManage: true
      });
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
      this._map.addLayer(this._layer);

      if (this.options.positions) {
        this.positions = this.options.positions;
      }

      if (this.options.flyTo) {
        this.flyToByAnimationEnd();
      } //缩放进行重绘
      // if (this.options.redrawZoom) {
      //   this._map.on(sxii.EventType.cameraMoveEnd, this._onCameraMoveEnd, this)
      // }

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
      // if (this.options.redrawZoom) {
      //   this._map.off(sxii.EventType.cameraMoveEnd, this._onCameraMoveEnd, this)
      // }
      if (this.heatStyle.container) {
        this._map.container.removeChild(this.heatStyle.container);

        delete this.heatStyle.container;
      }

      this.clear();

      this._map.removeLayer(this._layer);
    }
    /**
     * 添加新的坐标点
     * @param {Cesium.Cartesian3 |LatLngPoint} item 坐标点（含热力值）
     * @return {void}  无
     */

  }, {
    key: "addPosition",
    value: function addPosition(item) {
      this._positions = this._positions || [];

      this._positions.push(item);

      this._updatePositionsHook();
    }
    /**
     * 清除矢量对象
     * @return {void}  无
     */

  }, {
    key: "clear",
    value: function clear() {
      // this._clearTransitionTimer()
      if (this._graphic) {
        this._layer.removeGraphic(this._graphic, true);

        delete this._graphic;
      }
    }
  }, {
    key: "_updatePositionsHook",
    value: function _updatePositionsHook() {
      if (!this.show || !this._map || !this.positions || this.positions.length === 0) {
        return this;
      }

      var image = this._getHeatCanvasImg();

      if (this.style.arc) {
        this._createArcGraphic(image);
      } else {
        this._createGraphic(image);
      }

      return this;
    } // _filterData(points) {
    //   let scene = this._map.scene
    //   let mapWidth = this._map.canvas.width
    //   let mapHeight = this._map.canvas.height
    //   let newArr = []
    //   for (let i = 0, len = points.length; i < len; i++) {
    //     let point = sxii.LatLngPoint.parse(points[i])
    //     let position = point.toCartesian()
    //     if (!point) {
    //       continue
    //     }
    //     let px = Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position)
    //     // var px = scene.cartesianToCanvasCoordinates(position);
    //     if (!px || px.x < 0 || px.x > mapWidth || px.y < 0 || px.y > mapHeight) {
    //       continue
    //     }
    //     //判断是否在球的背面
    //     if (scene.echartsDepthTest && scene.mode === Cesium.SceneMode.SCENE3D) {
    //       let occluder = new Cesium.EllipsoidalOccluder(scene.globe.ellipsoid, scene.camera.positionWC)
    //       let visible = occluder.isPointVisible(position)
    //       if (!visible) {
    //         continue
    //       }
    //     }
    //     //判断是否在球的背面
    //     newArr.push(point)
    //   }
    //   return newArr
    // }
    //处理数据并返回生成的图片

  }, {
    key: "_getHeatCanvasImg",
    value: function _getHeatCanvasImg() {
      var _points$0$value, _points$0$value2;

      var positions = this._positions; // if (this.options.redrawZoom) {
      //   positions = this._filterData(this._positions)
      //   console.log(this._positions)
      // }

      var _points = [];
      var xmin, xmax, ymin, ymax;
      positions.forEach(function (item) {
        var point = external_sxii_["LatLngPoint"].parse(item);

        if (!point) {
          return;
        }

        point.value = item.value || 1; //热力值

        if (xmin == undefined) {
          xmin = point.lng;
          xmax = point.lng;
          ymin = point.lat;
          ymax = point.lat;
        } else {
          xmin = Math.min(xmin, point.lng);
          xmax = Math.max(xmax, point.lng);
          ymin = Math.min(ymin, point.lat);
          ymax = Math.max(ymax, point.lat);
        }

        _points.push(point);
      });
      var spacing = this.heatStyle.radius * 1.5; //经纬度边界

      var _bounds = {
        xmin: xmin,
        xmax: xmax,
        ymin: ymin,
        ymax: ymax
      }; //墨卡托边界值

      var mBounds = getMercatorBounds(_bounds);
      var diffLng = Math.abs(mBounds.xmax - mBounds.xmin);
      var diffLat = Math.abs(mBounds.ymax - mBounds.ymin);
      var max = Math.max(diffLng, diffLat);
      var min = Math.min(diffLng, diffLat);
      this._mBoundsMax = max;
      var scale = 1;

      if (max > this.options.maxCanvasSize) {
        scale = max / this.options.maxCanvasSize;

        if (min / scale < this.options.minCanvasSize) {
          scale = min / this.options.minCanvasSize;
        }
      } else if (min < this.options.minCanvasSize) {
        scale = min / this.options.minCanvasSize;

        if (max / scale > this.options.maxCanvasSize) {
          scale = max / this.options.maxCanvasSize;
        }
      }

      var canvasWidth = diffLng / scale + spacing * 2;
      var canvasHeight = diffLat / scale + spacing * 2;
      var offset = spacing * scale;
      mBounds.xmin -= offset;
      mBounds.ymin -= offset;
      mBounds.xmax += offset;
      mBounds.ymax += offset; //加扩大值后的边界

      _bounds = geLatLngBounds(mBounds);
      this._rectangle = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Rectangle"].fromDegrees(_bounds.xmin, _bounds.ymin, _bounds.xmax, _bounds.ymax);
      var maxVal = (_points$0$value = _points[0].value) !== null && _points$0$value !== void 0 ? _points$0$value : 1;
      var minVal = (_points$0$value2 = _points[0].value) !== null && _points$0$value2 !== void 0 ? _points$0$value2 : 0;
      var hetdata = [];

      _points.forEach(function (point) {
        var mkt = external_sxii_["PointTrans"].lonlat2mercator([point.lng, point.lat]);
        var value = point.value || 1;
        var coord_x = Math.round((mkt[0] - mBounds.xmin) / scale);
        var coord_y = Math.round((mBounds.ymax - mkt[1]) / scale);
        maxVal = Math.max(maxVal, value); //求最大值

        minVal = Math.min(minVal, value);
        hetdata.push({
          x: coord_x,
          y: coord_y,
          value: value
        });
      });

      var heatData = {
        min: minVal,
        max: maxVal,
        data: hetdata
      };
      this._last_heatData = heatData;

      if (!this._last_mBounds || mBounds.xmin !== this._last_mBounds.xmin || mBounds.ymin !== this._last_mBounds.ymin || mBounds.xmax !== this._last_mBounds.xmax || mBounds.ymax !== this._last_mBounds.ymax) {
        this._last_mBounds = mBounds;

        if (!this.heatStyle.container) {
          this.heatStyle.container = external_sxii_["DomUtil"].create('div', 'sxii-heatmap', this._map.container);
        }

        this.heatStyle.container.style.cssText = "\n        margin:0;\n        width:".concat(canvasWidth, "px;\n        height:").concat(canvasHeight, "px;");

        if (!this._heat) {
          this._heat = h337.create(this.heatStyle);
        } else {
          this._heat.configure(this.heatStyle);
        }
      }

      this._heat.setData(heatData);

      var img = this._heat._renderer.canvas.toDataURL('image/png');

      if (this.heatStyle.container) {
        this._map.container.removeChild(this.heatStyle.container);

        delete this.heatStyle.container;
      }

      return img;
    } //普通平面热力图

  }, {
    key: "_createGraphic",
    value: function _createGraphic(image) {
      this.clear();
      this._graphic = new external_sxii_["graphic"].RectanglePrimitive(_objectSpread(_objectSpread({}, this.options), {}, {
        rectangle: this._rectangle,
        appearance: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["EllipsoidSurfaceAppearance"]({
          material: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Material"]({
            fabric: {
              uniforms: {
                image: image
              },
              source: HeatMaterial_default.a
            },
            translucent: true
          }),
          flat: true
        })
      }));

      this._layer.addGraphic(this._graphic); // this._transitionAnimation()

    } //曲面 热力图

  }, {
    key: "_createArcGraphic",
    value: function _createArcGraphic(imgData) {
      this.clear();

      this._heat.configure(_objectSpread(_objectSpread({}, this.heatStyle), {}, {
        radius: this.heatStyle.radius * this.style.arcRadiusScale,
        blur: this.heatStyle.blur * this.style.arcBlurScale,
        gradient: this.heatStyle.gradientArc || {
          0.25: 'rgb(0,0,0)',
          0.55: 'rgb(140,140,140)',
          0.85: 'rgb(216,216,216)',
          1.0: 'rgb(255,255,255)'
        }
      }));

      var imgDataBump = this._heat._renderer.canvas.toDataURL('image/png');

      var renderstate = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["RenderState"].fromCache({
        cull: {
          enabled: true
        },
        depthTest: {
          enabled: true
        },
        stencilTest: {
          enabled: true,
          frontFunction: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilFunction"].ALWAYS,
          frontOperation: {
            fail: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilOperation"].KEEP,
            zFail: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilOperation"].KEEP,
            zPass: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilOperation"].REPLACE
          },
          backFunction: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilFunction"].ALWAYS,
          backOperation: {
            fail: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilOperation"].KEEP,
            zFail: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilOperation"].KEEP,
            zPass: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["StencilOperation"].REPLACE
          },
          reference: 0x2,
          mask: 0x2
        },
        blending: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["BlendingState"].ALPHA_BLEND
      }); //曲面的起伏差值高

      var diffHeight = Math.floor(external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.style.diffHeight, this._mBoundsMax * 0.02)) + 0.1; //控制曲面的精度

      var splitNum = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.style.splitNum, 100);
      var granularity = Math.max(this._rectangle.height, this._rectangle.width);
      this.style.granularity = granularity /= splitNum; // console.log(this.options.style.granularity)

      this._graphic = new external_sxii_["graphic"].RectanglePrimitive(_objectSpread(_objectSpread({}, this.options), {}, {
        rectangle: this._rectangle,
        appearance: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["EllipsoidSurfaceAppearance"]({
          aboveGround: true,
          renderState: renderstate,
          material: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Material"]({
            fabric: {
              uniforms: {
                image: imgData,
                repeat: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian2"](1.0, 1.0),
                color: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Color"](1.0, 1.0, 1.0, 0.01),
                bumpMap: imgDataBump
              },
              source: HeatMaterial_default.a
            },
            translucent: true
          }),
          vertexShaderSource: "attribute vec3 position3DHigh;\n          attribute vec3 position3DLow;\n          attribute vec2 st;\n          attribute float batchId;\n          uniform sampler2D bumpMap_3;\n          varying vec3 v_positionMC;\n          varying vec3 v_positionEC;\n          varying vec2 v_st;\n          void main()\n          {\n            vec4 p = czm_computePosition();\n            v_positionMC = position3DHigh + position3DLow;\n            v_positionEC = (czm_modelViewRelativeToEye * p).xyz;\n            v_st = st;\n            vec4 color = texture2D(bumpMap_3, v_st);\n            float centerBump = distance(vec3(0.0),color.rgb);\n            vec3 upDir = normalize(v_positionMC.xyz);\n            vec3 disPos = upDir * centerBump * ".concat(diffHeight, ";\n            p +=vec4(disPos,0.0);\n            gl_Position = czm_modelViewProjectionRelativeToEye * p;\n          }\n        "),
          flat: true
        })
      }));

      this._layer.addGraphic(this._graphic); // this._transitionAnimation()

    } // //数据加载后的过渡动画
    // _transitionAnimation() {
    //   this._clearTransitionTimer()
    //   let thisOpacity = 0.01
    //   let endOpacity = this.style.opacity || 1.0
    //   const alphaStep = 0.01
    //   let delayTime = Cesium.defaultValue(this.options.delayTime, 0.5)
    //   if (thisOpacity >= endOpacity || delayTime <= 0) {
    //     this.setOpacity(endOpacity)
    //     return
    //   }
    //   this.transitionTimer = window.setInterval(() => {
    //     if (!this._graphic?._primitive.ready) {
    //       return
    //     }
    //     thisOpacity += alphaStep
    //     if (thisOpacity >= endOpacity) {
    //       this.setOpacity(endOpacity)
    //       this._clearTransitionTimer()
    //     } else {
    //       this.setOpacity(thisOpacity)
    //     }
    //   }, delayTime * 1000 * alphaStep)
    // }
    // _clearTransitionTimer() {
    //   if (this.transitionTimer) {
    //     clearInterval(this.transitionTimer)
    //     this.transitionTimer = null
    //   }
    // }
    // setOpacity(opacity) {
    //   if (this._graphic?._primitive) {
    //     this._graphic._primitive.appearance.material.uniforms.color.alpha = opacity
    //   }
    // }
    // _onCameraMoveEnd() {
    //   if (!this._heat || !this.show || !this._map) {
    //     return
    //   }
    //   // let currZoom = this._map.level
    //   // if (this._lastZoom == currZoom) {
    //   //   return
    //   // }
    //   // this._lastZoom = currZoom
    //   // this._updatePositionsHook()
    //   // let image = this._getHeatCanvasImg()
    //   // this._graphic.primitive.appearance.material.uniforms.image = image
    // }
    //定位至数据区域

  }, {
    key: "flyTo",
    value: function flyTo(duration) {
      if (this.options.center) {
        this._map.setCameraView(this.options.center, {
          duration: duration
        });
      } else if (this.options.extent) {
        this._map.flyToExtent(this.options.extent, {
          duration: duration
        });
      } else if (this._rectangle) {
        this._map.camera.flyTo({
          destination: this._rectangle
        });
      }

      return this;
    }
  }]);

  return HeatLayer;
}(BaseLayer);
external_sxii_["layer"].HeatLayer = HeatLayer_HeatLayer;
external_sxii_["LayerUtil"].register('heat', HeatLayer_HeatLayer);

function getMercatorBounds(bounds) {
  var pt1 = external_sxii_["PointTrans"].lonlat2mercator([bounds.xmin, bounds.ymin]);
  var pt2 = external_sxii_["PointTrans"].lonlat2mercator([bounds.xmax, bounds.ymax]);
  return {
    xmin: pt1[0],
    ymin: pt1[1],
    xmax: pt2[0],
    ymax: pt2[1]
  };
}

function geLatLngBounds(bounds) {
  var pt1 = external_sxii_["PointTrans"].mercator2lonlat([bounds.xmin, bounds.ymin]);
  var pt2 = external_sxii_["PointTrans"].mercator2lonlat([bounds.xmax, bounds.ymax]);
  return {
    xmin: pt1[0],
    ymin: pt1[1],
    xmax: pt2[0],
    ymax: pt2[1]
  };
}
// CONCATENATED MODULE: ./src/index.js


/***/ })
/******/ ]);
});