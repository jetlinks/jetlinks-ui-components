/*!
 * Mars3D平台插件,结合supermap超图库使用的功能插件
 * 版本信息：v3.0.37, hash值: f9966fd55fbbb76f25ad
 * 编译日期：2021-08-31 10:56:12
 * 版权所有：Copyright by 山投信息 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sxii"), require("cesium"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dSupermap", ["sxii", "cesium"], factory);
	else if(typeof exports === 'object')
		exports["mars3dSupermap"] = factory(require("sxii"), require("cesium"));
	else
		root["mars3dSupermap"] = factory(root["sxii"], root["Cesium"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(12);

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
/* 8 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "S3MLayer", function() { return /* reexport */ S3MLayer_S3MLayer; });
__webpack_require__.d(__webpack_exports__, "SmImgLayer", function() { return /* reexport */ SmImgLayer_SmImgLayer; });
__webpack_require__.d(__webpack_exports__, "SmMvtLayer", function() { return /* reexport */ SmMvtLayer_SmMvtLayer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"commonjs2":"cesium","amd":"cesium","commonjs":"cesium","root":"Cesium"}
var external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_ = __webpack_require__(2);

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/supermap/S3MLayer.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var BaseLayer = external_sxii_["layer"].BaseLayer;
/**
 * 超图S3M三维模型图层,
 * 【需要引入  sxii-supermap 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = '未命名'] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 *
 * @param {String} options.url supermap的S3M服务地址,示例："url": "http://www.supermapol.com/realspace/services/3D-Olympic/rest/realspace"
 * @param {String} [options.layername] 指定图层名称,未指定时，打开iserver场景服务下所有图层
 * @param {String} [options.sceneName] 工作空间中有多个场景，需要指定场景名称；设置为undefined，默认打开第一个
 * @param {Object} [options.s3mOptions] [S3M支持的参数]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html?classFilter=S3MTilesLayer} ,示例： {"selectEnabled":false},
 * @param {Object} [options.position] 模型新的中心点位置（移动模型）
 * @param {Number} options.position.alt 获取或设置底部高程。（单位：米）
 *
 * @param {Object} [options.center] 图层自定义定位视角
 * @param {Boolean} [options.flyTo] 加载完成数据后是否自动飞行定位到数据所在的区域。
 * @export
 * @class S3MLayer
 * @extends {BaseLayer}
 */

var S3MLayer_S3MLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(S3MLayer, _BaseLayer);

  var _super = _createSuper(S3MLayer);

  function S3MLayer() {
    classCallCheck_default()(this, S3MLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(S3MLayer, [{
    key: "layer",
    get:
    /**
     * 模型对应的supermap图层组
     * @type {Cesium.S3MTilesLayer[]}
     * @readonly
     * @see http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html
     */
    function get() {
      return this._layerArr;
    }
    /**
     * 设置S3M图层本身支持的参数
     * @type {Object}
     * @see [S3M支持的参数]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html?classFilter=S3MTilesLayer}
     */

  }, {
    key: "s3mOptions",
    get: function get() {
      return this.options.s3mOptions;
    },
    set: function set(value) {
      for (var key in value) {
        var val = value[key];
        this.options.s3mOptions[key] = val;

        if (key == 'transparentBackColor') {
          //去黑边，与offset互斥，注意别配置offset
          val = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Color"].fromCssColorString(val);
        } else if (key == 'transparentBackColorTolerance') {
          val = Number(val);
        }

        for (var i = 0; i < this._layerArr.length; i++) {
          var layer = this._layerArr[i];

          if (layer == null) {
            continue;
          }

          layer[key] = val;
        }
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
      var _this = this;

      //场景添加S3M图层服务
      var promise;

      if (this.options.layername) {
        promise = this._map.scene.addS3MTilesLayerByScp(this.options.url, {
          name: this.options.layername,
          autoSetVie: this.options.flyTo,
          cullEnabled: this.options.cullEnabled
        });
      } else {
        promise = this._map.scene.open(this.options.url, this.options.sceneName, {
          autoSetVie: this.options.flyTo
        });
      }

      external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["when"](promise, function (smLayer) {
        if (Array.isArray(smLayer)) {
          _this._layerArr = smLayer;
        } else {
          _this._layerArr = [smLayer];
        } //设置图层属性


        for (var i = 0; i < _this._layerArr.length; i++) {
          var _this$options, _this$options$positio;

          var layer = _this._layerArr[i];

          if (layer == null) {
            continue;
          }

          layer.isS3M = true; //标识下
          //s3mOptions

          if (_this.options.s3mOptions) {
            for (var key in _this.options.s3mOptions) {
              var val = _this.options.s3mOptions[key];

              if (key == 'transparentBackColor') {
                //去黑边，与offset互斥，注意别配置offset
                layer[key] = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Color"].fromCssColorString(val);
              } else if (key == 'transparentBackColorTolerance') {
                layer[key] = Number(val);
              } else {
                layer[key] = _this.options.s3mOptions[key];
              }
            }
          } //高度调整 offset.z


          if ((_this$options = _this.options) !== null && _this$options !== void 0 && (_this$options$positio = _this$options.position) !== null && _this$options$positio !== void 0 && _this$options$positio.alt) {
            layer.style3D.bottomAltitude = _this.options.position.alt;
            layer.refresh();
          }
        }

        if (_this.options.flyTo) {
          _this.flyToByAnimationEnd();
        }

        if (_this.options.dataUrl) {
          for (var _i = 0; _i < _this._layerArr.length; _i++) {
            var ql = _this._layerArr[_i]; //读取子图层信息，通过数组的方式返回子图层的名称以及子图层所包含的对象的IDs

            ql.setQueryParameter({
              url: _this.options.dataUrl,
              dataSourceName: ql.name.split('@')[1],
              dataSetName: ql.name.split('@')[0],
              isMerge: true
            }); //获取图层风格
            //Note_GJ: rgba, 1为不透明，0为全透明。已经在模型中导入材质，所以这里的颜色不特别设置
            //var style3D = new Cesium.Style3D();
            // var color = Cesium.Color.fromCssColorString("#919191");//混泥土颜色 RGB(145, 145,145)
            // style3D.fillForeColor = color;
            // ql.style3D = style3D;
            //设置后需刷新图层
            // ql.refresh();

            ql.selectEnabled = true;
          }
        }
      }, function (error) {
        _this.showError('渲染时发生错误，已停止渲染。', error);
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
      for (var i in this._layerArr) {
        this._layerArr[i].visible = true;
        this._layerArr[i].show = true;
      }
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
      if (this._layerArr) {
        for (var i in this._layerArr) {
          this._layerArr[i].visible = false;
          this._layerArr[i].show = false;
        }
      }
    }
    /**
     * 设置透明度
     * @param {Number} value 透明度
     * @return {void}  无
     */

  }, {
    key: "setOpacity",
    value: function setOpacity(value) {
      if (this._layerArr) {
        for (var i = 0; i < this._layerArr.length; i++) {
          var item = this._layerArr[i];

          if (item == null) {
            continue;
          }

          item.style3D.fillForeColor.alpha = value;
        }
      }
    } //定位至数据区域

  }, {
    key: "flyTo",
    value: function flyTo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.options.center) {
        this._map.setCameraView(this.options.center, options);
      } else if (this.options.extent) {
        this._map.flyToExtent(this.options.extent, options);
      }
    }
  }]);

  return S3MLayer;
}(BaseLayer);
external_sxii_["layer"].S3MLayer = S3MLayer_S3MLayer; //注册下

external_sxii_["LayerUtil"].register('supermap_s3m', S3MLayer_S3MLayer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(7);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./src/supermap/SmImgLayer.js







function SmImgLayer_createSuper(Derived) { var hasNativeReflectConstruct = SmImgLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SmImgLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var BaseTileLayer = external_sxii_["layer"].BaseTileLayer;
/**
 * 超图影像瓦片服务图层,
 * 【需要引入  sxii-supermap 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {BaseTileLayer.ConstructorOptions} [options.通用参数] 包含父类支持的所有参数
 *
 * @param {Boolean} [options.transparent=true] 设置请求的地图服务的参数是否为transparent。
 * @param {String} [options.tileFormat] 影像图片格式，默认为png。
 * @param {String} [options.cacheKey] 影像的三维缓存密钥。
 *
 * @param {String|Cesium.Color}} [options.transparentBackColor] 设置影像透明色。
 * @param {Number} [options.transparentBackColorTolerance] 去黑边,设置影像透明色容限，取值范围为0.0~1.0。0.0表示完全透明，1.0表示完全不透明。
 *
 * @export
 * @class SmImgLayer
 * @extends {BaseTileLayer}
 *
 * @see http://support.supermap.com.cn:8090/webgl/docs/Documentation/SuperMapImageryProvider.html?classFilter=SuperMapImageryProvider
 */

var SmImgLayer_SmImgLayer = /*#__PURE__*/function (_BaseTileLayer) {
  inherits_default()(SmImgLayer, _BaseTileLayer);

  var _super = SmImgLayer_createSuper(SmImgLayer);

  function SmImgLayer() {
    classCallCheck_default()(this, SmImgLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(SmImgLayer, [{
    key: "_createImageryProvider",
    value: //构建ImageryProvider
    function _createImageryProvider(options) {
      return createImageryProvider(options);
    } //添加时

  }, {
    key: "_addedHook",
    value: function _addedHook() {
      get_default()(getPrototypeOf_default()(SmImgLayer.prototype), "_addedHook", this).call(this);

      if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defined"](this.options.transparentBackColorTolerance)) {
        this._imageryLayer.transparentBackColorTolerance = this.options.transparentBackColorTolerance; //去黑边
      }
    }
  }]);

  return SmImgLayer;
}(BaseTileLayer);

function createImageryProvider(options) {
  options = external_sxii_["LayerUtil"].converOptions(options);
  return new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SuperMapImageryProvider"](options);
}
/**
 * 创建用于图层的 ImageryProvider对象
 *
 * @param {Object} options Provider参数，同图层构造参数。
 * @return {Cesium.SuperMapImageryProvider} ImageryProvider类
 * @function
 */


SmImgLayer_SmImgLayer.createImageryProvider = createImageryProvider;
external_sxii_["layer"].SmImgLayer = SmImgLayer_SmImgLayer; //注册下

var layerType = 'supermap_img';
external_sxii_["LayerUtil"].register(layerType, SmImgLayer_SmImgLayer);
external_sxii_["LayerUtil"].registerImageryProvider(layerType, createImageryProvider);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/supermap/SmMvtLayer.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SmMvtLayer_createSuper(Derived) { var hasNativeReflectConstruct = SmMvtLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SmMvtLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var SmMvtLayer_BaseLayer = external_sxii_["layer"].BaseLayer;
/**
 * 超图MVT矢量瓦片图层,
 * 【需要引入  sxii-supermap 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = '未命名'] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 * @param {Object} [options.center] 图层自定义定位视角
 *
 * @param {String} options.url 适用于通过SuperMap桌面软件生成mvt数据,经iServer发布为rest风格的地图服务，只需提供服务地址。
 * @param {String} options.url 服务地址,适用于第三方发布的WMTS服务。
 * @param {String} options.layer 图层名称,适用于第三方发布的WMTS服务。
 * @param {Number} [options.canvasWidth] 用来绘制矢量的纹理边长。默认是512，越大越精细，越小性能越高。
 * @param {String} [options.format='mvt'] 适用于第三方发布的WMTS服务。
 * @param {Object} [options.mapboxStyle] 使用的mapBox风格。
 * @param {Object} [options.其他] 参考[supermap官方API]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/Scene.html#addVectorTilesLayer}
 *
 *
 * @export
 * @class SmMvtLayer
 * @extends {BaseLayer}
 */

var SmMvtLayer_SmMvtLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(SmMvtLayer, _BaseLayer);

  var _super = SmMvtLayer_createSuper(SmMvtLayer);

  function SmMvtLayer() {
    classCallCheck_default()(this, SmMvtLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(SmMvtLayer, [{
    key: "layer",
    get:
    /**
     * 对应的supermap图层
     * @type {Cesium.VectorTilesLayer}
     * @readonly
     * @see http://support.supermap.com.cn:8090/webgl/docs/Documentation/VectorTilesLayer.html
     */
    function get() {
      return this._mvtLayer;
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
      var _this = this;

      //options参考API文档：http://support.supermap.com.cn:8090/webgl/docs/Documentation/Scene.html
      this._mvtLayer = this._map.scene.addVectorTilesMap(this.options);
      var layerReadyPromise = this._mvtLayer.readyPromise;
      external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["when"](layerReadyPromise, function (data) {//setPaintProperty(layerId, name, value, options)
        // for(var layerId in that.options.style){
        //     that._mvtLayer.setPaintProperty(layerId, "fill-color", "rgba(255,0,0,0.8)");
        // }
      }, function (error) {
        _this.showError('渲染时发生错误，已停止渲染。', error);
      });
      var scene = this._map.scene;
      var handler = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventHandler"](scene.canvas);
      handler.setInputAction(function (event) {
        if (!_this.show) {
          return;
        }

        var position = external_sxii_["PointUtil"].getCurrentMousePosition(scene, event.position); //查询出相交图层的feature

        var features = _this._mvtLayer.queryRenderedFeatures([position], {// layers: [selectLayer.id]
        });

        var filter = features.reduce(function (memo, result) {
          var attr = result.feature.properties;

          if (!attr) {
            return;
          }

          var item = {
            id: result.feature.id,
            popup: external_sxii_["Util"].getPopupForConfig(_this.options, attr),
            data: attr
          };

          _this._map.openPopup(position, item, event);
        }, ['in', '$id']);
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].LEFT_CLICK);
      this.handler = handler;
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
      this._mvtLayer.show = true;

      this._mvtLayer.refresh();
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
      if (this._mvtLayer) {
        this._mvtLayer.show = false;
      }
    }
    /**
     * 设置透明度
     * @param {Number} value 透明度
     * @return {void}  无
     */

  }, {
    key: "setOpacity",
    value: function setOpacity(value) {
      if (this._mvtLayer) {
        this._mvtLayer.alpha = parseFloat(value);
      }
    } //定位至数据区域

  }, {
    key: "flyTo",
    value: function flyTo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.options.center) {
        this._map.setCameraView(this.options.center, options);
      } else if (this.options.extent) {
        this._map.flyToExtent(this.options.extent, options);
      } else if (this._mvtLayer) {
        this._map.camera.flyTo(_objectSpread(_objectSpread({}, options), {}, {
          destination: this._mvtLayer.rectangle
        }));
      }
    }
  }]);

  return SmMvtLayer;
}(SmMvtLayer_BaseLayer);
external_sxii_["layer"].SmMvtLayer = SmMvtLayer_SmMvtLayer; //注册下

external_sxii_["LayerUtil"].register('supermap_mvt', SmMvtLayer_SmMvtLayer);
// CONCATENATED MODULE: ./src/index.js




/***/ })
/******/ ]);
});