/*!
 * Mars3D平台插件,结合echarts可视化功能插件
 * 版本信息：v3.0.37, hash值: 64949bc0eec0efc41830
 * 编译日期：2021-08-31 10:53:33
 * 版权所有：Copyright by 山投信息 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("echarts"), require("cesium"), require("sxii"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dEcharts", ["echarts", "cesium", "sxii"], factory);
	else if(typeof exports === 'object')
		exports["mars3dEcharts"] = factory(require("echarts"), require("cesium"), require("sxii"));
	else
		root["mars3dEcharts"] = factory(root["echarts"], root["Cesium"], root["sxii"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(8);

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
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(9)["default"];

var assertThisInitialized = __webpack_require__(10);

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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EchartsLayer", function() { return /* reexport */ EchartsLayer_EchartsLayer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(7);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"commonjs2":"cesium","amd":"cesium","commonjs":"cesium","root":"Cesium"}
var external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_ = __webpack_require__(1);

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(2);

// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/echarts/CompositeCoordinateSystem.js



 // 类 , 参考了开源：https://github.com/sharpzao/EchartsCesium

var CompositeCoordinateSystem_CompositeCoordinateSystem = /*#__PURE__*/function () {
  //========== 构造方法 ==========
  function CompositeCoordinateSystem(GLMap, api) {
    classCallCheck_default()(this, CompositeCoordinateSystem);

    this._GLMap = GLMap;
    this.dimensions = ['lng', 'lat'];
    this._mapOffset = [0, 0];
    this._api = api;
  } //========== 方法 ==========


  createClass_default()(CompositeCoordinateSystem, [{
    key: "setMapOffset",
    value: function setMapOffset(mapOffset) {
      this._mapOffset = mapOffset;
    }
  }, {
    key: "getBMap",
    value: function getBMap() {
      return this._GLMap;
    }
  }, {
    key: "dataToPoint",
    value: function dataToPoint(data) {
      var scene = this._GLMap;
      var defVal = [NaN, NaN]; //echarts内部就是用NaN来做判断的

      var heightTerrain = scene.echartsFixedHeight;

      if (scene.echartsAutoHeight) {
        heightTerrain = scene.globe.getHeight(external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartographic"].fromDegrees(data[0], data[1]));
      }

      var position = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"].fromDegrees(data[0], data[1], heightTerrain);

      if (!position) {
        return defVal;
      }

      var px = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneTransforms"].wgs84ToWindowCoordinates(scene, position); // var px = scene.cartesianToCanvasCoordinates(position);

      if (!px) {
        return defVal;
      } //判断是否在球的背面


      if (scene.echartsDepthTest && scene.mode === external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneMode"].SCENE3D) {
        var occluder = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["EllipsoidalOccluder"](scene.globe.ellipsoid, scene.camera.positionWC);
        var visible = occluder.isPointVisible(position); //visible为true说明点在球的正面，否则点在球的背面。
        //需要注意的是不能用这种方法判断点的可见性，如果球放的比较大，点跑到屏幕外面，它返回的依然为true

        if (!visible) {
          return defVal;
        }
      } //判断是否在球的背面


      return [px.x - this._mapOffset[0], px.y - this._mapOffset[1]];
    }
  }, {
    key: "getViewRect",
    value: function getViewRect() {
      var api = this._api;
      return new external_echarts_["graphic"].BoundingRect(0, 0, api.getWidth(), api.getHeight());
    }
  }, {
    key: "getRoamTransform",
    value: function getRoamTransform() {
      return external_echarts_["matrix"].create();
    }
  }]);

  return CompositeCoordinateSystem;
}(); //用于确定创建列表数据时要使用的维度


CompositeCoordinateSystem_CompositeCoordinateSystem.dimensions = ['lng', 'lat'];

CompositeCoordinateSystem_CompositeCoordinateSystem.create = function (ecModel, api) {
  var coordSys;
  ecModel.eachComponent('GLMap', function (GLMapModel) {
    var painter = api.getZr().painter;

    if (!painter) {
      return;
    } // var viewportRoot = painter.getViewportRoot()


    var GLMap = external_echarts_["glMap"];
    coordSys = new CompositeCoordinateSystem_CompositeCoordinateSystem(GLMap, api);
    coordSys.setMapOffset(GLMapModel.__mapOffset || [0, 0]);
    GLMapModel.coordinateSystem = coordSys;
  });
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === 'GLMap') {
      seriesModel.coordinateSystem = coordSys;
    }
  });
}; /////////扩展echarts///////////


if (external_echarts_) {
  external_echarts_["registerCoordinateSystem"]('GLMap', CompositeCoordinateSystem_CompositeCoordinateSystem);
  external_echarts_["registerAction"]({
    type: 'GLMapRoam',
    event: 'GLMapRoam',
    update: 'updateLayout'
  }, function (payload, ecModel) {});
  external_echarts_["extendComponentModel"]({
    type: 'GLMap',
    getBMap: function getBMap() {
      // __bmap is injected when creating BMapCoordSys
      return this.__GLMap;
    },
    defaultOption: {
      roam: false
    }
  });
  external_echarts_["extendComponentView"]({
    type: 'GLMap',
    init: function init(ecModel, api) {
      this.api = api;
      external_echarts_["glMap"].postRender.addEventListener(this.moveHandler, this);
    },
    moveHandler: function moveHandler(type, target) {
      this.api.dispatchAction({
        type: 'GLMapRoam'
      });
    },
    render: function render(GLMapModel, ecModel, api) {},
    dispose: function dispose(target) {
      external_echarts_["glMap"].postRender.removeEventListener(this.moveHandler, this);
    }
  });
}
// CONCATENATED MODULE: ./src/echarts/EchartsLayer.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var BaseLayer = external_sxii_["layer"].BaseLayer;
var _div_zIndex = 999;
/**
 * Echarts图层，
 * 【需要引入 echarts 库 和 sxii-echarts 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {Object} [options.Echarts本身] 支持Echarts本身所有Options参数，具体查阅 [Echarts配置项手册]{@link https://echarts.apache.org/zh/option.html}
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
 *
 *
 * @export
 * @class EchartsLayer
 * @extends {BaseLayer}
 */

var EchartsLayer_EchartsLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(EchartsLayer, _BaseLayer);

  var _super = _createSuper(EchartsLayer);

  function EchartsLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, EchartsLayer);

    _this = _super.call(this, options);
    _this._pointerEvents = _this.options.pointerEvents;
    return _this;
  }
  /**
   * echarts对象，是echarts.init方法返回的 echartsInstance 实例
   * @type {HTMLCanvasElement}
   * @readonly
   * @see https://echarts.apache.org/zh/api.html#echartsInstance
   */


  createClass_default()(EchartsLayer, [{
    key: "layer",
    get: function get() {
      return this._echartsInstance;
    }
  }, {
    key: "_showHook",
    value: function _showHook(show) {
      if (show) {
        this._echartsContainer.style.visibility = 'visible';
      } else {
        this._echartsContainer.style.visibility = 'hidden';
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
      if (!external_echarts_) {
        throw new Error('请引入 echarts 库 ');
      }

      this._map.scene.echartsDepthTest = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.options.depthTest, true); //是否进行计算深度（大数据时，需要关闭）

      this._map.scene.echartsAutoHeight = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.options.clampToGround, false);
      this._map.scene.echartsFixedHeight = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](this.options.fixedHeight, 0);
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
      this._echartsInstance = this._createChartOverlay();
      this.setEchartsOption(this.options);
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
      if (this._echartsContainer) {
        this._map.container.removeChild(this._echartsContainer);

        this._echartsContainer = null;
      }

      if (this._echartsInstance) {
        this._echartsInstance.dispose();

        this._echartsInstance = null;
      }
    }
  }, {
    key: "_createChartOverlay",
    value: function _createChartOverlay() {
      var scene = this._map.scene;
      scene.canvas.setAttribute('tabIndex', 0);
      var chartContainer = external_sxii_["DomUtil"].create('div', 'sxii-echarts');
      chartContainer.style.position = 'absolute';
      chartContainer.style.top = '0px';
      chartContainer.style.left = '0px';
      chartContainer.style.width = scene.canvas.clientWidth + 'px';
      chartContainer.style.height = scene.canvas.clientHeight + 'px';
      chartContainer.style.pointerEvents = this._pointerEvents ? 'auto' : 'none'; //auto时可以交互，但是没法放大地球， none 没法交互

      chartContainer.style.zIndex = _div_zIndex++;

      this._map.container.appendChild(chartContainer);

      this._echartsContainer = chartContainer;
      external_echarts_["glMap"] = scene;
      return external_echarts_["init"](chartContainer);
    }
    /**
     * 改变图层canvas容器尺寸，在容器大小发生改变时需要手动调用。
     * @return {void}  无
     * @see https://echarts.apache.org/zh/api.html#echartsInstance.resize
     */

  }, {
    key: "resize",
    value: function resize() {
      if (!this._echartsInstance) {
        return;
      }

      var scene = this._map.scene;
      this._echartsContainer.style.width = scene.canvas.clientWidth + 'px';
      this._echartsContainer.style.height = scene.canvas.clientHeight + 'px';

      this._echartsInstance.resize();
    }
    /**
     * 设置图表实例的配置项以及数据，
     * 万能接口，所有参数和数据的修改都可以通过 setOption 完成，
     * ECharts 会合并新的参数和数据，然后刷新图表。
     * 如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
     * @param {Object} option 图表的配置项和数据，具体见 [Echarts配置项手册]{@link https://echarts.apache.org/zh/option.html}。
     * @param {Boolean} [notMerge=false] 是否不跟之前设置的 option 进行合并。默认为 false。即表示合并。合并的规则，详见 组件合并模式。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。
     * @param {Boolean} [lazyUpdate=false] 在设置完 option 后是否不立即更新图表，默认为 false，即同步立即更新。如果为 true，则会在下一个 animation frame 中，才更新图表。
     * @return {void}  无
     * @see https://echarts.apache.org/zh/api.html#echartsInstance.setOption
     */

  }, {
    key: "setEchartsOption",
    value: function setEchartsOption(option, notMerge, lazyUpdate) {
      if (this._echartsInstance) {
        option.GLMap = option.GLMap || {}; //需要注册

        this._echartsInstance.setOption(option, notMerge, lazyUpdate);
      }
    }
  }]);

  return EchartsLayer;
}(BaseLayer); //注册下

external_sxii_["LayerUtil"].register('echarts', EchartsLayer_EchartsLayer);
external_sxii_["layer"].EchartsLayer = EchartsLayer_EchartsLayer;
// CONCATENATED MODULE: ./src/index.js


/***/ })
/******/ ]);
});