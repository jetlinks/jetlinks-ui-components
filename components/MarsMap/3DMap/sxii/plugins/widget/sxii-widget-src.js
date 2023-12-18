/*!
 * Mars3D平台插件,原生JS下的项目widget模块化设计功能模块
 * 版本信息：v3.0.37, hash值: d4f35fa8b07553566ed3
 * 编译日期：2021-08-31 11:20:24
 * 版权所有：Copyright by 山投信息 http://mars3d.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sxii"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dWidget", ["sxii"], factory);
	else if(typeof exports === 'object')
		exports["mars3dWidget"] = factory(require("sxii"));
	else
		root["mars3dWidget"] = factory(root["sxii"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1)["default"];

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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
__webpack_require__.d(__webpack_exports__, "widget", function() { return /* reexport */ widgetManager_namespaceObject; });

// NAMESPACE OBJECT: ./src/widget/widgetManager.js
var widgetManager_namespaceObject = {};
__webpack_require__.r(widgetManager_namespaceObject);
__webpack_require__.d(widgetManager_namespaceObject, "init", function() { return init; });
__webpack_require__.d(widgetManager_namespaceObject, "getDefWindowOptions", function() { return getDefWindowOptions; });
__webpack_require__.d(widgetManager_namespaceObject, "activate", function() { return activate; });
__webpack_require__.d(widgetManager_namespaceObject, "getWidget", function() { return getWidget; });
__webpack_require__.d(widgetManager_namespaceObject, "getClass", function() { return getClass; });
__webpack_require__.d(widgetManager_namespaceObject, "isActivate", function() { return isActivate; });
__webpack_require__.d(widgetManager_namespaceObject, "disable", function() { return disable; });
__webpack_require__.d(widgetManager_namespaceObject, "disableAll", function() { return disableAll; });
__webpack_require__.d(widgetManager_namespaceObject, "disableGroup", function() { return disableGroup; });
__webpack_require__.d(widgetManager_namespaceObject, "eachWidget", function() { return eachWidget; });
__webpack_require__.d(widgetManager_namespaceObject, "bindClass", function() { return bindClass; });
__webpack_require__.d(widgetManager_namespaceObject, "removeDebugeBar", function() { return removeDebugeBar; });
__webpack_require__.d(widgetManager_namespaceObject, "getCacheVersion", function() { return getCacheVersion; });
__webpack_require__.d(widgetManager_namespaceObject, "getBasePath", function() { return getBasePath; });
__webpack_require__.d(widgetManager_namespaceObject, "destroy", function() { return destroy; });
__webpack_require__.d(widgetManager_namespaceObject, "eventTarget", function() { return eventTarget; });
__webpack_require__.d(widgetManager_namespaceObject, "on", function() { return on; });
__webpack_require__.d(widgetManager_namespaceObject, "off", function() { return off; });
__webpack_require__.d(widgetManager_namespaceObject, "fire", function() { return fire; });
__webpack_require__.d(widgetManager_namespaceObject, "once", function() { return once; });
__webpack_require__.d(widgetManager_namespaceObject, "listens", function() { return listens; });

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/theme/widget.scss
var widget = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(1);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/widget/loader.js
// cssExpr 用于判断资源是否是css
var cssExpr = new RegExp('\\.css');
var nHead = document.head || document.getElementsByTagName('head')[0]; // `onload` 在WebKit < 535.23， Firefox < 9.0 不被支持

var isOldWebKit = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, '$1') < 536; // 判断对应的node节点是否已经载入完成

function isReady(node) {
  return node.readyState === 'complete' || node.readyState === 'loaded';
} // loadCss 用于载入css资源


function loadCss(url, setting, callback) {
  var node = document.createElement('link');
  node.rel = 'stylesheet';
  addOnload(node, callback, 'css');
  node.async = true;
  node.href = url;
  nHead.appendChild(node);
} // loadJs 用于载入js资源


function loadJs(url, setting, callback) {
  var node = document.createElement('script');
  node.charset = 'utf-8';
  addOnload(node, callback, 'js');
  node.async = !setting.sync;
  node.src = url;
  nHead.appendChild(node);
} // 在老的webkit中，因不支持load事件，这里用轮询sheet来保证


function pollCss(node, callback) {
  var isLoaded;

  if (node.sheet) {
    isLoaded = true;
  }

  setTimeout(function () {
    if (isLoaded) {
      // 在这里callback 是为了让样式有足够的时间渲染
      callback();
    } else {
      pollCss(node, callback);
    }
  }, 20);
} // 用于给指定的节点绑定onload回调
// 监听元素载入完成事件


function addOnload(node, callback, type) {
  var supportOnload = ('onload' in node);
  var isCSS = type === 'css'; // 对老的webkit和老的firefox的兼容

  if (isCSS && (isOldWebKit || !supportOnload)) {
    setTimeout(function () {
      pollCss(node, callback);
    }, 1);
    return;
  }

  if (supportOnload) {
    node.onload = onload;

    node.onerror = function (e) {
      node.onerror = null; //window._cdnFallback(node);
      // eslint-disable-next-line no-console

      if (type == 'css') {
        console.error('该css文件不存在：' + node.href, e);
      } // eslint-disable-next-line no-console
      else {
        console.error('该js文件不存在：' + node.src, e);
      }

      onload();
    };
  } else {
    node.onreadystatechange = function () {
      if (isReady(node)) {
        onload();
      }
    };
  }

  function onload() {
    // 执行一次后清除，防止重复执行
    node.onload = node.onreadystatechange = null;
    node = null;
    callback();
  }
} // 资源下载入口，根绝文件类型的不同，调用loadCss或者loadJs


function loadItem(url, list, setting, callback) {
  // 如果加载的url为空，就直接成功返回
  if (!url) {
    setTimeout(function () {
      onFinishLoading();
    });
    return;
  }

  if (cssExpr.test(url)) {
    loadCss(url, setting, onFinishLoading);
  } else {
    loadJs(url, setting, onFinishLoading);
  } // 每次资源下载完成后，检验是否结束整个list下载过程
  // 若已经完成所有下载，执行回调函数


  function onFinishLoading() {
    var urlIndex = list.indexOf(url);

    if (urlIndex > -1) {
      list.splice(urlIndex, 1);
    }

    if (list.length === 0) {
      callback();
    }
  }
}

function doInit(list, setting, callback) {
  var cb = function cb() {
    callback && callback();
  };

  list = Array.prototype.slice.call(list || []);

  if (list.length === 0) {
    cb();
    return;
  }

  for (var i = 0, len = list.length; i < len; i++) {
    loadItem(list[i], list, setting, cb);
  }
} // 判断当前页面是否加载完
// 加载完，立刻执行下载
// 未加载完，等待页面load事件以后再进行下载


function ready(node, callback) {
  if (isReady(node)) {
    callback();
  } else {
    // 1500ms 以后，直接开始下载资源文件，不再等待load事件
    var timeLeft = 1500;
    var isExecute = false;
    window.addEventListener('load', function () {
      if (!isExecute) {
        callback();
        isExecute = true;
      }
    });
    setTimeout(function () {
      if (!isExecute) {
        callback();
        isExecute = true;
      }
    }, timeLeft);
  }
} // 暴露出去的Loader
// 提供async, sync两个函数
// async 用作异步下载执行用，不阻塞页面渲染
// sync  用作异步下载，顺序执行，保证下载的js按照数组顺序执行


var Loader = {
  async: function async(list, callback) {
    ready(document, function () {
      doInit(list, {}, callback);
    });
  },
  sync: function sync(list, callback) {
    ready(document, function () {
      doInit(list, {
        sync: true
      }, callback);
    });
  }
}; //window.Loader = Loader;


// CONCATENATED MODULE: ./src/widget/EventType.js
/**
 * widget事件类型枚举, sxii.widget.EventType
 * 【需要引入  sxii-widget 插件库】
 *  @enum {String}
 */
var EventType = {
  /**
   * 在实例初始化之后、创建之前执行
   */
  beforeCreate: 'beforeCreate',

  /**
   * 实例创建后执行
   */
  created: 'created',

  /**
   * 在activat挂载开始之前调用
   */
  beforeActivate: 'beforeActivate',

  /**
   * activate方法调用后
   */
  activated: 'activated',

  /**
   *view弹窗构造完成后后调用
   */
  openView: 'openView',

  /**
   * 实例销毁之前调用
   */
  beforeDisable: 'beforeDisable',

  /**
   *实例销毁完成调用
   */
  disabled: 'disabled',

  /**
   *加载完成 未做任何其他处理前
   */
  loadBefore: 'loadBefore',

  /**
   *加载完成，执行所有内部处理后
   */
  load: 'load'
};

// CONCATENATED MODULE: ./src/widget/widgetManager.js


/**
 * widget模块化框架，公共处理类
 * 【需要引入  sxii-widget 插件库】
 * @module widget
 */



var jQuery = window.jQuery; //内部参数

var thismap;
var basePath = '';
var widgetsdata = [];
var defoptions;
var widgetManager_cacheVersion;
var isdebuger;
var removeKeys = ['_class'];
/**
 * widget 配置参数
 *
 * @typedef {Object} widget.WidgetOptions
 *
 * @property {String} name 必须，中文名称，用于标识和弹窗标题。
 * @property {String} uri 必须，JS文件路径，路径是相对于widgets目录的路径。如："widgets/bookmark/widget.js"
 * @property {String} [id] 定义该插件的唯一标识,方便后续判断。
 * @property {Boolean} [autoDisable=true] 激活其他新插件时，是否自动释放本插件
 * @property {Boolean} [disableOther=true] 激活本插件时，是否释放其它已激活的插件
 * @property {String} [group] 配置group后，同group下的widget互斥，打开任意一个会自动释放其他的
 * @property {object} [windowOptions] 存在弹窗的插件的弹窗相关参数配置，更多参数请参考 [layer弹窗API]{@link https://www.layui.com/doc/modules/layer.html} 包括：
 * @property {Number|String} [windowOptions.width] 窗口宽度，可以是 像素数字(像素值) 或者 字符串(屏幕宽度百分比)，示例：200 或 "20%"
 * @property {Number|String} [windowOptions.height] 窗口高度，可以是 像素数字(像素值) 或者 字符串(屏幕高度百分比)，示例：600 或 "50%"
 * @property {String|Object} [windowOptions.position='auto'] 窗口所在位置坐标，配置字符串可选值：auto垂直水平居中，t顶部,b底部,r右边缘,l左边缘,lt左上角,lb左下角,rt右上角,rb右下角；也可以配置对象：
 * @property {Number|String} [windowOptions.position.top] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕高度百分比)，示例：10 或 "5%"
 * @property {Number|String} [windowOptions.position.bottom] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕高度百分比)，示例：10 或 "5%"
 * @property {Number|String} [windowOptions.position.left] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕宽度百分比)，示例：10 或 "5%"
 * @property {Number|String} [windowOptions.position.right] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕宽度百分比)，示例：10 或 "5%"
 * @property {Number} [windowOptions.minHeight] 限定的窗口最小高度(像素值)，默认不限制
 * @property {Number} [windowOptions.maxHeight] 限定的窗口最大高度(像素值)，默认不限制
 * @property {Number} [windowOptions.minWidth] 限定的窗口最小宽度(像素值)，默认不限制
 * @property {Number} [windowOptions.maxWidth] 限定的窗口最大宽度(像素值)，默认不限制
 *
 * @property {Boolean} [windowOptions.maxmin=true] 是否可以在弹层右下角拖动来拉伸尺寸
 * @property {Number|Array} [windowOptions.shade=0] 遮罩，默认为0不显示，可配置数字0.3透明度的黑色背景（'#000'），其他颜色，可以shade: [0.8, '#393D49']
 * @property {Boolean} [windowOptions.shade=false] 当shade是存在的，点击弹层外区域后是否关闭弹窗。
 * @property {Number} [windowOptions.closeBtn=1] 当为0时，不显示关闭按钮，配置1和2来展示两种风格的关闭按钮
 * @property {Number} [windowOptions.noTitle=false] 是否不显示标题，为true是不显示标题
 *
 * @property {Boolean} [openAtStart=false] 打开系统后是否自动启动本插件
 * @property {String} [style] 添加到widget的view中的class样式名
 * @property {Object} [css] 添加到widget的css值
 * @property {Boolean} [show=true] 激活后是否显示弹窗，false时激活后自动隐藏弹窗。
 * @property {Object} [其他] 传入数据等，定义的任意参数在widget内部方法中都可以通过this.config获取到
 */

/**
 * 初始化widget管理器，在构造完成map后调用一次即可。
 *
 * @param {Map} map 地图对象
 * @param {Object} [widgetcfg={}] 全局配置(一般存放在widget.json)，包括：
 * @param {widget.WidgetOptions} [widgetcfg.defaultOptions] 所有widget的默认参数值，可以系统内所有widget相同配置统一在此处传入，额外的个性化的再配置到各widget中。
 * @param {widget.WidgetOptions[]} [widgetcfg.openAtStart] 默认自启动并不可释放的插件，其中autoDisable和openAtStart固定，设置无效。
 * @param {widget.WidgetOptions[]} [widgetcfg.widgets] 所有插件配置，传入后后续激活时，只用传入uri即可。
 * @param {String} [widgetcfg.version] 加载资源时，附加的参数，主要为了清理浏览器缓存，可选值："time"（实时时间戳）或固定的字符串值，每次发布新版本换下固定值。
 * @param {Boolean} [widgetcfg.debugger] 是否显示插件测试栏，true时会在地图下侧显示所有插件测试按钮，方便测试。
 *
 * @param {String} [_basePath=''] widgets目录所在的主路径(统一前缀), 如果widgets目录不在主页面一起或存在路由时，可以传入自定义主目录，值为 widgets目录相对于当前html页面的相对路径。
 * @return {void}  无
 * @example
let widgetCfg ={
  "version": "20210803",
  "defaultOptions": {
    "style": "dark",
    "windowOptions": {
      "skin": "layer-mars-dialog animation-scale-up",
      "position": {
        "top": 50,
        "right": 10
      },
      "maxmin": false,
      "resize": true
    },
    "autoReset": false,
    "autoDisable": true,
    "disableOther": true
  },
  "openAtStart": [
    {
      "name": "放大缩小按钮",
      "uri": "widgets/toolButton/zoom.js"
    }
  ],
  "widgets": [
    {
      "name": "模板-div弹窗",
      "uri": "widgets/_example_divwin/widget.js"
    },
    {
      "name": "模板-append模板",
      "uri": "widgets/_example_append/widget.js"
    }
  ]
}
sxii.widget.init(map, widgetCfg, './')
 */

function init(map) {
  var widgetcfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _basePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  thismap = map;
  widgetsdata = [];
  defoptions = external_sxii_["Util"].merge({
    windowOptions: {
      position: 'rt',
      maxmin: false,
      resize: true
    },
    autoDisable: true,
    disableOther: true
  }, widgetcfg.defaultOptions);
  widgetManager_cacheVersion = widgetcfg.version;

  if (widgetManager_cacheVersion == 'time') {
    widgetManager_cacheVersion = new Date().getTime();
  } //将自启动的加入


  var arrtemp = widgetcfg.openAtStart;

  if (arrtemp && arrtemp.length > 0) {
    for (var i = 0; i < arrtemp.length; i++) {
      var item = arrtemp[i];

      if (!item.hasOwnProperty('uri') || item.uri == '') {
        // eslint-disable-next-line no-console
        console.error('widget未配置uri', item);
        continue;
      }

      if (item.hasOwnProperty('visible') && !item.visible) {
        continue;
      }

      item.autoDisable = false;
      item.openAtStart = true;
      item._nodebug = true;
      bindDefOptions(item);
      item._firstConfigBak = external_sxii_["Util"].clone(item, removeKeys);
      widgetsdata.push(item);
    }
  } //显示测试栏
  //为了方便测试，所有widget会在页面下侧生成一排按钮，每个按钮对应一个widget，单击后激活对应widget


  isdebuger = widgetcfg['debugger'];

  if (isdebuger) {
    var inhtml = '<div id="widget-testbar" class="sxii-widgetbar animation-slide-bottom no-print-view" > ' + '     <div style="height: 30px; line-height:30px;"><b style="color: #4db3ff;">widget测试栏</b>&nbsp;&nbsp;<button  id="widget-testbar-remove"  type="button" class="btn btn-link btn-xs">关闭</button> </div>' + '     <button id="widget-testbar-disableAll" type="button" class="btn btn-info" ><i class="fa fa-globe"></i>漫游</button>' + '</div>';
    jQuery('body').append(inhtml);
    jQuery('#widget-testbar-remove').click(function (e) {
      removeDebugeBar();
    });
    jQuery('#widget-testbar-disableAll').click(function (e) {
      disableAll();
    });
  } //将配置的加入


  arrtemp = widgetcfg.widgets;

  if (arrtemp && arrtemp.length > 0) {
    for (var _i = 0; _i < arrtemp.length; _i++) {
      var _item = arrtemp[_i];

      if (_item.type == 'group') {
        var _inhtml = ' <div class="btn-group dropup">  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-align-justify"></i>' + _item.name + ' <span class="caret"></span></button> <ul class="dropdown-menu">';

        for (var j = 0; j < _item.children.length; j++) {
          var childItem = _item.children[j];

          if (!childItem.hasOwnProperty('uri') || childItem.uri == '') {
            // eslint-disable-next-line no-console
            console.error('widget未配置uri', childItem);
            continue;
          }

          _inhtml += ' <li data-widget="' + childItem.uri + '" class="widget-btn" ><a href="#"><i class="fa fa-star"></i>' + childItem.name + '</a></li>';
          bindDefOptions(childItem);
          childItem._firstConfigBak = external_sxii_["Util"].clone(childItem, removeKeys);
          widgetsdata.push(childItem); //将配置的加入
        }

        _inhtml += '</ul></div>';

        if (isdebuger && !_item._nodebug) {
          jQuery('#widget-testbar').append(_inhtml);
        }
      } else {
        if (!_item.hasOwnProperty('uri') || _item.uri == '') {
          // eslint-disable-next-line no-console
          console.error('widget未配置uri', _item);
          continue;
        } //显示测试栏


        if (isdebuger && !_item._nodebug) {
          var _inhtml2 = '<button type="button" class="btn btn-primary widget-btn" data-widget="' + _item.uri + '"  > <i class="fa fa-globe"></i>' + _item.name + ' </button>';

          jQuery('#widget-testbar').append(_inhtml2);
        }

        bindDefOptions(_item);
        _item._firstConfigBak = external_sxii_["Util"].clone(_item, removeKeys);
        widgetsdata.push(_item); //将配置的加入
      }
    }

    if (isdebuger) {
      jQuery('#widget-testbar .widget-btn').each(function () {
        jQuery(this).click(function (e) {
          var uri = jQuery(this).attr('data-widget');

          if (uri == null || uri == '') {
            return;
          }

          if (isActivate(uri)) {
            disable(uri);
          } else {
            activate(uri);
          }
        });
      });
    }
  }

  for (var _i2 = 0; _i2 < widgetsdata.length; _i2++) {
    var _item2 = widgetsdata[_i2];

    if (_item2.openAtStart || _item2.createAtStart) {
      _arrLoadWidget.push(_item2);
    }
  }

  jQuery(window).resize(function () {
    for (var _i3 = 0; _i3 < widgetsdata.length; _i3++) {
      var _item3 = widgetsdata[_i3];

      if (_item3._class) {
        _item3._class.indexResize(); //BaseWidget: indexResize

      }
    }
  });

  if (isdebuger) {
    var hash = getLocationParam();

    if (hash) {
      activate(hash);
    }
  }

  loadWidgetJs();
}
/**
 * 获取默认init时中传入配置的 windowOptions 参数
 * @return {Object} windowOptions参数默认值
 * @see widget.WidgetOptions
 */

function getDefWindowOptions() {
  return external_sxii_["Util"].clone(defoptions.windowOptions, removeKeys);
}

function getLocationParam() {
  var param = window.location.toString();

  if (param.indexOf('#') === -1) {
    return '';
  }

  param = param.split('#');

  if (param && param.length > 0) {
    return param[1];
  }
}

function bindDefOptions(item) {
  //赋默认值至options（跳过已存在设置值）
  if (defoptions) {
    for (var aa in defoptions) {
      if (aa == 'windowOptions') {//for (var jj in defoptions['windowOptions']) {
        //    if (!item['windowOptions'].hasOwnProperty(jj)) {
        //        item['windowOptions'][jj] = defoptions['windowOptions'][jj];
        //    }
        //}
      } else if (!item.hasOwnProperty(aa)) {
        item[aa] = defoptions[aa];
      }
    }
  } //赋值内部使用属性


  item.path = getFilePath(basePath + item.uri);
  item.name = item.name || item.label; //兼容name和label命名
}
/**
 * 激活指定 widget模块
 *
 * @param {String|widget.WidgetOptions} item 指widget模块的uri 或 指模块的配置参数,当有配置参数时，参数优先级是：
 * 【activate方法传入的配置 > init方法传入的配置(widget.json) > widget.js内部配置的】
 * @param {Map} [item.map] 当单页面简单场景没有init时，也可以传入map来使用单个widget
 * @param {Boolean} [noDisableOther=false]  不释放其他已激活的widget
 * @return {widget.WidgetOptions}  指widget模块对象
 * @example
//常用方式，直接使用uri
sxii.widget.activate("widgets/bookmark/widget.js");

//使用对象，可以传入更多参数，具体参数参看配置项手册，。
sxii.widget.activate({
  name:"视角书签"
  uri: "widgets/bookmark/widget.js",
  autoDisable: true,
  testdata:'测试数据1987', //传数据进widget内部，widget内部使用this.config.testdata获取到传的数据
});
 */


function activate(item, noDisableOther) {
  if (thismap == null && item.map) {
    init(item.map, {}, item.basePath);
  } //参数是字符串id或uri时


  if (typeof item === 'string') {
    item = {
      uri: item
    };

    if (noDisableOther != null) {
      //是否释放其他已激活的widget
      item.disableOther = !noDisableOther;
    }
  } else {
    if (item.uri == null) {
      // eslint-disable-next-line no-console
      console.error('activate激活widget时需要uri参数！', item);
    }
  }

  var thisItem;

  for (var i = 0; i < widgetsdata.length; i++) {
    var othitem = widgetsdata[i];

    if (item.uri == othitem.uri || othitem.id && item.uri == othitem.id) {
      thisItem = othitem;

      if (thisItem.isloading) {
        return thisItem;
      } //激活了正在loading的widget 防止快速双击了菜单
      //赋值


      for (var aa in item) {
        if (aa == 'uri') {
          continue;
        }

        thisItem[aa] = item[aa];
      }

      break;
    }
  }

  if (thisItem == null) {
    bindDefOptions(item);
    thisItem = item; //非config中配置的，外部传入，首次激活

    if (!item._firstConfigBak) {
      item._firstConfigBak = external_sxii_["Util"].clone(item, removeKeys);
    }

    widgetsdata.push(item);
  }

  if (isdebuger) {
    // eslint-disable-next-line no-console
    console.log('开始激活widget：' + thisItem.uri);
    window.location.hash = '#' + thisItem.uri;
  } //兼容之前历史版本的错误命名时的属性名称


  if (thisItem.hasOwnProperty('disableOhter') && !thisItem.hasOwnProperty('disableOther')) {
    thisItem.disableOther = thisItem.disableOhter;
  } //释放其他已激活的widget


  if (thisItem.disableOther) {
    disableAll(thisItem.uri, thisItem.group);
  } else {
    disableGroup(thisItem.group, thisItem.uri);
  } //激活本widget


  if (thisItem._class) {
    if (thisItem._class.isActivate) {
      //已激活时
      if (thisItem._class.update) {
        //刷新
        thisItem._class.update();
      } else {
        //重启
        _reStart(thisItem);
      }
    } else {
      thisItem._class.activateBase(); // BaseWidget: activateBase

    }
  } else {
    for (var _i4 = 0; _i4 < _arrLoadWidget.length; _i4++) {
      if (_arrLoadWidget[_i4].uri == thisItem.uri) {
        //如果已在加载列表中的直接跳出
        return _arrLoadWidget[_i4];
      }
    }

    _arrLoadWidget.push(thisItem);

    if (_arrLoadWidget.length == 1) {
      loadWidgetJs();
    }
  }

  return thisItem;
}
var timetemp; //重启

function _reStart(thisItem) {
  clearInterval(timetemp);

  thisItem._class.disableBase();

  timetemp = setInterval(function () {
    if (thisItem._class.isActivate) {
      return;
    }

    thisItem._class.activateBase();

    clearInterval(timetemp);
  }, 200);
}
/**
 * 获取指定的widget配置信息
 *
 * @param {String} uri widget的uri 或 id
 * @return {widget.WidgetOptions} widget配置信息
 */


function getWidget(uri) {
  for (var i = 0; i < widgetsdata.length; i++) {
    var item = widgetsdata[i];

    if (uri == item.uri || uri == item.id) {
      return item;
    }
  }
}
/**
 * 获取指定的widget 对应的实例化对象
 *
 * @param {String} uri widget的uri 或 id
 * @return {BaseWidget} widget对应的实例化对象
 */

function getClass(uri) {
  var item = getWidget(uri);

  if (item) {
    return item._class;
  } else {
    return null;
  }
}
/**
 * 获取widget的当前激活状态
 *
 * @param {String} uri widget的uri 或 id
 * @return {Boolean} 是否激活
 */

function isActivate(uri) {
  var _class = getClass(uri);

  if (_class == null) {
    return false;
  }

  return _class.isActivate;
}
/**
 * 释放指定的widget
 *
 * @param {String} uri widget的uri 或 id
 * @return {Boolean} 是否成功调用了释放
 */

function disable(uri) {
  if (uri == null) {
    return false;
  }

  if ((typeof id === "undefined" ? "undefined" : typeof_default()(id)) === 'object') {
    uri = uri.uri;
  }

  for (var i = 0; i < widgetsdata.length; i++) {
    var item = widgetsdata[i];

    if (item._class && (uri == item.uri || uri == item.id)) {
      item._class.disableBase();

      return true;
    }
  }

  return false;
}
/**
 * 关闭释放所有widget
 *
 * @export
 * @param {String|Boolean} [nodisable]  指定不释放的widget的uri或id 或 传true值强制释放所有widget(默认autoDisable为false的widet不会释放)
 * @param {String} [group] 指定强制释放的group名(默认autoDisable为false的widet不会释放)，传入group值后会强制释放所有同group组的widget
 * @return {void}  无
 */

function disableAll(nodisable, group) {
  for (var i = 0; i < widgetsdata.length; i++) {
    var item = widgetsdata[i];

    if (group && item.group == group) {//同组别的全部释放
    } else {
      if (nodisable !== true && !item.autoDisable) {
        continue;
      }
    } //指定不释放的跳过


    if (nodisable && (nodisable == item.uri || nodisable == item.id)) {
      continue;
    }

    if (item._class) {
      item._class.disableBase(); //BaseWidget: disableBase

    }
  }
}
/**
 * 关闭释放同组widget
 *
 * @param {String} group 指定强制释放的group名
 * @param {String} [nodisable]  指定不释放的widget的uri或id
 * @return {void}  无
 */

function disableGroup(group, nodisable) {
  if (group == null) {
    return;
  }

  for (var i = 0; i < widgetsdata.length; i++) {
    var item = widgetsdata[i];

    if (item.group == group) {
      //指定不释放的跳过
      if (nodisable && (nodisable == item.uri || nodisable == item.id)) {
        continue;
      }

      if (item._class) {
        item._class.disableBase(); ////BaseWidget: disableBase

      }
    }
  }
}
/**
 * 遍历所有widget
 * @param {Function} method 回调方法
 * @return {void}  无
 */

function eachWidget(method) {
  for (var i = 0; i < widgetsdata.length; i++) {
    var item = widgetsdata[i];
    method(item);
  }
}
var _arrLoadWidget = [];
var widgetManager_loadItem;
var isloading;

function loadWidgetJs() {
  if (_arrLoadWidget.length == 0) {
    return;
  }

  if (isloading) {
    setTimeout(loadWidgetJs, 500);
    return;
  }

  isloading = true;
  widgetManager_loadItem = _arrLoadWidget[0];
  widgetManager_loadItem.isloading = true;
  var _uri = widgetManager_loadItem.uri;

  if (widgetManager_cacheVersion) {
    if (_uri.indexOf('?') == -1) {
      _uri += '?cache=' + widgetManager_cacheVersion;
    } else {
      _uri += '&cache=' + widgetManager_cacheVersion;
    }
  }

  if (window.NProgress) {
    window.NProgress.start();
  }

  fire(EventType.loadBefore, {
    sourceTarget: widgetManager_loadItem
  });
  Loader.async([basePath + _uri], function () {
    isloading = false;
    widgetManager_loadItem.isloading = false;

    if (window.NProgress) {
      window.NProgress.done(true);
    }

    _arrLoadWidget.shift();

    loadWidgetJs();
  });
}
/**
 * 绑定类到当前对应js的widget中。
 *
 * @param {BaseWidget} _class 定义的BaseWidget子类
 * @return {Object} 实例化后的对象
 */


function bindClass(_class) {
  fire(EventType.load, {
    sourceTarget: _class
  });

  if (widgetManager_loadItem == null) {
    var _jspath = getThisJSPath();

    for (var i = 0; i < widgetsdata.length; i++) {
      var item = widgetsdata[i];

      if (_jspath.endsWith(item.uri)) {
        item.isloading = false;
        item._class = new _class(thismap, item);

        item._class.activateBase(); // BaseWidget: activateBase


        return item._class;
      }
    }
  } else {
    widgetManager_loadItem.isloading = false;
    widgetManager_loadItem._class = new _class(thismap, widgetManager_loadItem);

    widgetManager_loadItem._class.activateBase(); // BaseWidget: activateBase


    return widgetManager_loadItem._class;
  }
}

function getThisJSPath() {
  var jsPath;
  var js = document.scripts;

  for (var i = js.length - 1; i >= 0; i--) {
    jsPath = js[i].src;

    if (jsPath == null || jsPath == '') {
      continue;
    }

    if (jsPath.indexOf('widgets') == -1) {
      continue;
    } //jsPath = jsPath.substring(0, jsPath.lastIndexOf("/") + 1);


    return jsPath;
  }

  return '';
} //获取路径


function getFilePath(file) {
  var pos = file.lastIndexOf('/');
  return file.substring(0, pos + 1);
}
/**
 * 移除Widget测试栏（当有开启debugger时）
 * @return {void}  无
 */


function removeDebugeBar() {
  jQuery('#widget-testbar').remove();
}
/**
 * 获取配置的version配置参数，用于附加清除浏览器缓存
 * @return {String} 配置的version参数
 */

function getCacheVersion() {
  return widgetManager_cacheVersion;
}
/**
 * 获取init方法传入的主目录配置参数
 * @return {String} 主目录配置参数
 */

function getBasePath() {
  return basePath;
}
/**
 * 销毁对象
 * @return {void}  无
 */

function destroy() {
  for (var i = 0; i < widgetsdata.length; i++) {
    var item = widgetsdata[i];

    if (item._class) {
      item._class.disableBase(); //BaseWidget: disableBase


      if (item._class.destroy) {
        item._class.destroy();
      }

      delete item._class;
    }
  }

  thismap = null;
} //事件相关

var eventTarget = new external_sxii_["BaseClass"]();
/**
 * 绑定指定类型事件监听器
 *
 * @param {EventType|EventType[]} types 事件类型
 * @param {Function} fn 绑定的监听器回调方法
 * @param {Object} context  侦听器的上下文(this关键字将指向的对象)。
 * @return {void}  无
 */

function on(types, fn, context) {
  return eventTarget.on(types, fn, context);
}
/**
 * 解除绑定指定类型事件监听器
 *
 * @param {EventType|EventType[]} types 事件类型
 * @param {Function} fn 绑定的监听器回调方法
 * @param {Object} context  侦听器的上下文(this关键字将指向的对象)。
 * @return {void}  无
 */

function off(types, fn, context) {
  return eventTarget.off(types, fn, context);
}
/**
 * 触发指定类型的事件。
 *
 * @param {EventType} type 事件类型
 * @param {Object} data 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
 * @param {BaseClass} [propagate=null] 将事件传播给父类 (用addEventParent设置)
 * @return {void}  无
 */

function fire(type, data, propagate) {
  return eventTarget.fire(type, data, propagate);
}
/**
 * 绑定一次性执行的指定类型事件监听器
 * 与on类似，监听器只会被触发一次，然后被删除。
 *
 * @param {EventType|EventType[]} types 事件类型
 * @param {Function} fn 绑定的监听器回调方法
 * @param {Object} context  侦听器的上下文(this关键字将指向的对象)。
 * @return {void}  无
 */

function once(types, fn, context) {
  return eventTarget.once(types, fn, context);
}
/**
 * 是否有绑定指定的事件
 *
 * @param {EventType} type 事件类型
 * @param {BaseClass} [propagate=null] 是否判断指定的父类 (用addEventParent设置的)
 * @return {Boolean} 是否存在
 */

function listens(type, propagate) {
  return eventTarget.listens(type, propagate);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

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
var possibleConstructorReturn = __webpack_require__(7);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/widget/BaseWidget.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var BaseWidget_jQuery = window.jQuery;
var BaseWidget_layer = window.layer; //请引入layer弹窗插件

var BaseClass = external_sxii_["BaseClass"];
var _resources_cache = [];
/**
 * widget基础类,
 * 需要继承后使用，不用手动实例化，框架内部自动实例化及相关处理。
 * 【需要引入  sxii-widget 插件库】
 *
 * @param {Map} map 地图对象
 * @param {widget.WidgetOptions} options 配置参数
 * @class BaseWidget
 * @extends {BaseClass}
 * @see [支持的事件类型]{@link EventType}

 * @example
//使用示例
class MyWidget extends sxii.widget.BaseWidget {
  //外部资源配置
  get resources() {
    return [
      'js/test.js', //当前同目录下
      './lib/dom2img/dom-to-image.js', //主页面相同目录下
    ]
  }
  //弹窗配置
  get view() {
    return {
      type: 'window',
      url: 'view.html',
      windowOptions: {  width: 250 },
    }
  }
  //初始化[仅执行1次]
  create() {}
  //每个窗口创建完成后调用
  winCreateOK(opt, result) {
    this.viewWindow = result
  }
  //打开激活
  activate() {}
  //关闭释放
  disable() {
    this.viewWindow = null
  }
}

//注册到widget管理器中。
sxii.widget.bindClass(MyWidget)
 */

var BaseWidget_BaseWidget = /*#__PURE__*/function (_BaseClass) {
  inherits_default()(BaseWidget, _BaseClass);

  var _super = _createSuper(BaseWidget);

  function BaseWidget(map, options) {
    var _this;

    classCallCheck_default()(this, BaseWidget);

    _this = _super.call(this, options);
    /**
     *  获取当前地图
     * @type {Map}
     * @readonly
     */

    _this.map = map;
    /**
     *  获取当前配置参数
     * @type {widget.WidgetOptions}
     * @readonly
     */

    _this.options = options; //配置的config信息

    /**
     *  获取当前配置参数，别名，同options
     * @type {widget.WidgetOptions}
     * @readonly
     */

    _this.config = options;
    /**
     *  获取当前widget的目录路径
     * @type {String}
     * @readonly
     */

    _this.path = options.path || ''; //当前widget目录相对路径

    /**
     *  是否激活状态
     * @type {Boolean}
     * @readonly
     */

    _this.isActivate = false;
    /**
     *  是否已创建
     * @type {Boolean}
     * @readonly
     */

    _this.isCreate = false;
    _this._viewcreate_allcount = 0;
    _this._viewcreate_okcount = 0;
    _this._viewConfig = _this.view;

    _this.init();

    return _this;
  }
  /**
   * 该模块依赖的外部js、css资源文件，会在实例化之前加入的页面中。
   * 默认引用是当前widget所在同path目录的资源，
   * 相当于html主页面的资源 或 外部资源 请 以 “/” 或 “.” 或 “http” 开始的url
   * @type {String[]}
   * @readonly
   * @abstract
   */


  createClass_default()(BaseWidget, [{
    key: "resources",
    get: function get() {
      return null;
    }
    /**
     * 定义关联的view弹窗或页面配置信息，目前支持3种类型，
     * （1）type:'window'，iframe模式弹窗	,参考_example示例，	独立的html子页面，比较自由，简单粗暴、无任何限制；可以每个页面用不同的UI和第三方插件不用考虑冲突问题；任何水平的开发人员均容易快速开发。
     * （2）type:'divwindow'，div元素模式弹窗	参考_example_divwin示例，可直接互相访问，这种模式弊端是易引起模块间id命名冲突，在css和html中命名时需注意。
     * （3）type:'append'，任意html元素	参考_example_append示例，任意div节点，比较自由。
     * 为空时表示当前模块无关联的view页面，
     * 其中url地址规则，参考resources说明
     * @type {Object|Object[]}
     * @readonly
     * @abstract
     */

  }, {
    key: "view",
    get: function get() {
      return null;
    } //==============激活插件=================

    /**
     * 激活widget，同 sxii.widget.activate方法
     * @return {void}  无
     */

  }, {
    key: "activateBase",
    value: function activateBase() {
      var that = this;

      if (this.isActivate) {
        //已激活状态时跳出
        this.eachView(function (viewopt) {
          if (viewopt._dom) {
            //将层置顶
            BaseWidget_jQuery('.layui-layer').each(function () {
              BaseWidget_jQuery(this).css('z-index', 19891000);
            });
            BaseWidget_jQuery(viewopt._dom).css('z-index', 19891014);
          }
        });
        return;
      }

      eventTarget.fire(EventType.beforeActivate, {
        sourceTarget: this
      });
      this.beforeActivate();
      this.isActivate = true;

      if (!this.isCreate) {
        eventTarget.fire(EventType.beforeCreate, {
          sourceTarget: this
        }); //首次进行创建

        if (this.resources && this.resources.length > 0) {
          var resources = [];

          for (var i = 0; i < this.resources.length; i++) {
            var _resource = this.resources[i];
            _resource = this._getUrl(_resource);

            if (_resources_cache.indexOf(_resource) != -1) {
              continue;
            } //不加重复资源


            resources.push(_resource);
          }

          _resources_cache = _resources_cache.concat(resources); //不加重复资源

          Loader.async(resources, function () {
            var result = that.create(function () {
              that._createWidgetView();

              that.isCreate = true;
            });
            eventTarget.fire(EventType.created, {
              sourceTarget: that
            });

            if (result) {
              return;
            }

            if (that.options.createAtStart) {
              that.options.createAtStart = false;
              that.isActivate = false;
              that.isCreate = true;
              return;
            }

            that._createWidgetView();

            that.isCreate = true;
          });
          return;
        } else {
          var result = this.create(function () {
            that._createWidgetView();

            this.isCreate = true;
          });
          eventTarget.fire(EventType.created, {
            sourceTarget: this
          });

          if (result) {
            return;
          }

          if (that.options.createAtStart) {
            that.options.createAtStart = false;
            that.isActivate = false;
            that.isCreate = true;
            return;
          }
        }

        this.isCreate = true;
      }

      this._createWidgetView();
    }
    /**
     * 构造方法完成后的钩子方法，子类继承后按需使用
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "init",
    value: function init() {}
    /**
     * 模块初始化，仅首次初始化执行1次
     * @param {Function} [endfun] 当create内存在异步时，可以异步后调用下endfun
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "create",
    value: function create() {} //创建插件的view

  }, {
    key: "_createWidgetView",
    value: function _createWidgetView() {
      var viewopt = this._viewConfig;

      if (viewopt === undefined || viewopt === null) {
        this._startActivate();
      } else if (Array.isArray(viewopt)) {
        this._viewcreate_allcount = viewopt.length;
        this._viewcreate_okcount = 0;

        for (var i = 0; i < viewopt.length; i++) {
          this.createItemView(viewopt[i]);
        }
      } else {
        this._viewcreate_allcount = 1;
        this._viewcreate_okcount = 0;
        this.createItemView(viewopt);
      }
    }
    /**
     * 遍历所有view配置
     *
     * @param {Function} callback 回调方法
     * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
     * @return {*} callback执行的返回结果
     */

  }, {
    key: "eachView",
    value: function eachView(callback, index) {
      var viewopt = this._viewConfig;

      if (viewopt === undefined || viewopt === null) {
        return false;
      } else if (Array.isArray(viewopt)) {
        var hascal = false;

        if (index != null) {
          return callback(viewopt[index]);
        }

        for (var i = 0; i < viewopt.length; i++) {
          hascal = callback(viewopt[i]);
        }

        return hascal;
      } else {
        return callback(viewopt);
      }
    }
  }, {
    key: "createItemView",
    value: function createItemView(viewopt) {
      var that = this;

      switch (viewopt.type) {
        default:
        case 'window':
          this._openWindow(viewopt);

          break;

        case 'divwindow':
          this._openDivWindow(viewopt);

          break;

        case 'append':
          that.getHtml(this._getUrl(viewopt.url), function (html) {
            that._appendView(viewopt, html);
          });
          break;

        case 'custom':
          //自定义
          viewopt.open(this._getUrl(viewopt.url), function (html) {
            that.winCreateOK(viewopt, html);
            eventTarget.fire(EventType.openView, {
              sourceTarget: that,
              view: viewopt,
              dom: html
            });
            that._viewcreate_okcount++;

            if (that._viewcreate_okcount >= that._viewcreate_allcount) {
              that._startActivate(html);
            }
          }, this);
          break;
      }
    } //==============layer弹窗=================

  }, {
    key: "_openWindow",
    value: function _openWindow(viewopt) {
      var _this2 = this;

      var view_url = this._getUrl(viewopt.url);

      var opts = {
        type: 2,
        content: [view_url, 'no'],
        success: function success(layero, index) {
          if (!_this2.isActivate) {
            BaseWidget_layer.close(index);
            return;
          }

          if (viewopt._layerIdx != index) {
            BaseWidget_layer.close(viewopt._layerIdx);
            viewopt._layerIdx = index;
          }

          viewopt._layerOpening = false;
          viewopt._dom = layero; //得到iframe页的窗口对象，执行iframe页的方法：viewWindow.method();

          var viewWindow = window[layero.find('iframe')[0]['name']]; //设置css

          if (_this2.options.css) {
            BaseWidget_jQuery('#layui-layer' + viewopt._layerIdx).css(_this2.options.css);
          } //隐藏弹窗


          if (_this2.options.hasOwnProperty('visible') && !_this2.options.visible) {
            BaseWidget_jQuery(layero).hide();
          }

          BaseWidget_layer.setTop(layero);

          _this2.winCreateOK(viewopt, viewWindow);

          eventTarget.fire(EventType.openView, {
            sourceTarget: _this2,
            view: viewopt,
            dom: layero
          });
          _this2._viewcreate_okcount++;

          if (_this2._viewcreate_okcount >= _this2._viewcreate_allcount) {
            _this2._startActivate(layero);
          } //通知页面,页面需要定义initWidgetView方法


          if (viewWindow && viewWindow.initWidgetView) {
            var _this2$config;

            if ((_this2$config = _this2.config) !== null && _this2$config !== void 0 && _this2$config.style) {
              BaseWidget_jQuery(viewWindow.document.body).addClass(_this2.config.style);
            }

            viewWindow.initWidgetView(_this2);
          } else {
            external_sxii_["Log"].logError(view_url + '页面没有定义function initWidgetView(widget)方法，无法初始化widget页面!');
          }
        }
      };

      if (viewopt._layerIdx && viewopt._layerIdx > 0) {
        BaseWidget_layer.close(viewopt._layerIdx);
        viewopt._layerIdx = -1;
      }

      viewopt._layerOpening = true;
      viewopt._layerIdx = BaseWidget_layer.open(this._getWinOpt(viewopt, opts));
    }
  }, {
    key: "_openDivWindow",
    value: function _openDivWindow(viewopt) {
      var _this3 = this;

      var view_url = this._getUrl(viewopt.url); //div弹窗


      this.getHtml(view_url, function (data) {
        var opts = {
          type: 1,
          content: data,
          success: function success(layero, index) {
            if (!_this3.isActivate) {
              BaseWidget_layer.close(index);
              return;
            }

            if (viewopt._layerIdx != index) {
              BaseWidget_layer.close(viewopt._layerIdx);
              viewopt._layerIdx = index;
            }

            viewopt._layerOpening = false;
            viewopt._dom = layero; //隐藏弹窗

            if (_this3.options.hasOwnProperty('show') && !_this3.options.show) {
              BaseWidget_jQuery(layero).hide();
            }

            BaseWidget_layer.setTop(layero);

            _this3.winCreateOK(viewopt, layero);

            eventTarget.fire(EventType.openView, {
              sourceTarget: _this3,
              view: viewopt,
              dom: layero
            });
            _this3._viewcreate_okcount++;

            if (_this3._viewcreate_okcount >= _this3._viewcreate_allcount) {
              _this3._startActivate(layero);
            }
          }
        };
        viewopt._layerOpening = true;
        viewopt._layerIdx = BaseWidget_layer.open(_this3._getWinOpt(viewopt, opts));
      });
    }
  }, {
    key: "_getUrl",
    value: function _getUrl(url) {
      url = this.addCacheVersion(url);

      if (url.startsWith('/') || url.startsWith('.') || url.startsWith('http')) {
        return url;
      } else {
        return this.path + url;
      }
    }
  }, {
    key: "_getWinOpt",
    value: function _getWinOpt(viewopt, opts) {
      //优先使用cofig中配置，覆盖js中的定义
      var def = getDefWindowOptions();

      var windowOptions = _objectSpread(_objectSpread(_objectSpread({}, def), viewopt.windowOptions), this.options.windowOptions);

      viewopt.windowOptions = windowOptions; //赋值

      var that = this;

      var _size = this._getWinSize(windowOptions);

      var title = false;

      if (!windowOptions.noTitle) {
        title = this.options.name || ' ';

        if (this.options.icon) {
          title = '<i class="' + this.options.icon + '" ></i>&nbsp;' + title;
        }
      } //默认值


      var defOpts = {
        title: title,
        area: _size.area,
        offset: _size.offset,
        shade: 0,
        maxmin: false,
        beforeEnd: function beforeEnd() {
          that.beforeDisable();
        },
        end: function end() {
          // 销毁后触发的回调
          viewopt._layerIdx = -1;
          viewopt._dom = null;
          that.disableBase();
        },
        full: function full(dom) {
          //最大化后触发的回调
          that.winFull(dom);
        },
        min: function min(dom) {
          //最小化后触发的回调
          that.winMin(dom);
        },
        restore: function restore(dom) {
          //还原 后触发的回调
          that.winRestore(dom);
        }
      };
      return _objectSpread(_objectSpread(_objectSpread({}, defOpts), windowOptions), opts);
    } //计算弹窗大小和位置

  }, {
    key: "_getWinSize",
    value: function _getWinSize(windowOptions) {
      //获取高宽
      var _width = this.bfb2Number(windowOptions.width, document.documentElement.clientWidth, windowOptions);

      var _height = this.bfb2Number(windowOptions.height, document.documentElement.clientHeight, windowOptions); //计算位置offset


      var offset = '';
      var position = windowOptions.position;

      if (position) {
        if (typeof position === 'string') {
          //t顶部,b底部,r右边缘,l左边缘,lt左上角,lb左下角,rt右上角,rb右下角
          offset = position;
        } else if (typeof_default()(position) === 'object') {
          var _top;

          var _left;

          if (position.hasOwnProperty('top') && position.top != null) {
            _top = this.bfb2Number(position.top, document.documentElement.clientHeight, windowOptions);
          }

          if (position.hasOwnProperty('bottom') && position.bottom != null) {
            windowOptions._hasresize = true;

            var _bottom = this.bfb2Number(position.bottom, document.documentElement.clientHeight, windowOptions);

            if (_top != null) {
              _height = document.documentElement.clientHeight - _top - _bottom;
            } else {
              _top = document.documentElement.clientHeight - _height - _bottom;
            }
          }

          if (position.hasOwnProperty('left') && position.left != null) {
            _left = this.bfb2Number(position.left, document.documentElement.clientWidth, windowOptions);
          }

          if (position.hasOwnProperty('right') && position.right != null) {
            windowOptions._hasresize = true;

            var _right = this.bfb2Number(position.right, document.documentElement.clientWidth, windowOptions);

            if (_left != null) {
              _width = document.documentElement.clientWidth - _left - _right;
            } else {
              _left = document.documentElement.clientWidth - _width - _right;
            }
          }

          if (_top == null) {
            _top = (document.documentElement.clientHeight - _height) / 2;
          }

          if (_left == null) {
            _left = (document.documentElement.clientWidth - _width) / 2;
          }

          offset = [_top + 'px', _left + 'px'];
        }
      } //最大最小高度判断


      if (windowOptions.hasOwnProperty('minHeight') && _height < windowOptions.minHeight) {
        windowOptions._hasresize = true;
        _height = windowOptions.minHeight;
      }

      if (windowOptions.hasOwnProperty('maxHeight') && _height > windowOptions.maxHeight) {
        windowOptions._hasresize = true;
        _height = windowOptions.maxHeight;
      } //最大最小宽度判断


      if (windowOptions.hasOwnProperty('minWidth') && _width < windowOptions.minWidth) {
        windowOptions._hasresize = true;
        _width = windowOptions.minWidth;
      }

      if (windowOptions.hasOwnProperty('maxWidth') && _width > windowOptions.maxWidth) {
        windowOptions._hasresize = true;
        _width = windowOptions.maxWidth;
      }

      var area;

      if (_width && _height) {
        area = [_width + 'px', _height + 'px'];
      } else {
        area = _width + 'px';
      }

      return {
        area: area,
        offset: offset
      };
    }
    /**
     * 更新窗口大小或位置，改变了主页面尺寸后需要调用(内部已自动调用)。
     * @return {void}  无
     */

  }, {
    key: "indexResize",
    value: function indexResize() {
      if (!this.isActivate) {
        return;
      }

      var that = this;
      this.eachView(function (viewopt) {
        if (viewopt._layerIdx == null || viewopt._layerIdx == -1 || viewopt.windowOptions == null || !viewopt.windowOptions._hasresize) {
          return;
        }

        var _size = that._getWinSize(viewopt.windowOptions);

        var _style = {};

        if (Array.isArray(_size.area)) {
          if (_size.area[0]) {
            _style.width = _size.area[0];
          }

          if (_size.area[1]) {
            _style.height = _size.area[1];
          }
        }

        if (Array.isArray(_size.offset)) {
          if (_size.offset[1]) {
            _style.top = _size.offset[0];
          }

          if (_size.offset[1]) {
            _style.left = _size.offset[1];
          }
        }

        BaseWidget_jQuery(viewopt._dom).attr('myTopLeft', true);
        BaseWidget_layer.style(viewopt._layerIdx, _style);

        if (viewopt.type == 'divwindow') {
          BaseWidget_layer.iframeAuto(viewopt._layerIdx);
        }
      });
    } //==============直接添加dom节点=================

  }, {
    key: "_appendView",
    value: function _appendView(viewopt, html) {
      viewopt._dom = BaseWidget_jQuery(html).appendTo(viewopt.parent || 'body'); //设置css

      if (this.options.css) {
        BaseWidget_jQuery(viewopt._dom).css(this.options.css);
      }

      this.winCreateOK(viewopt, html);
      this._viewcreate_okcount++;

      if (this._viewcreate_okcount >= this._viewcreate_allcount) {
        this._startActivate(html);
      }
    }
    /**
     * 每个view窗口或页面创建完成后调用的钩子方法
     *
     * @param {Object} opt 对应的view配置
     * @param {Object|String} result 得到iframe页的窗口对象 或 view的html内容
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "winCreateOK",
    value: function winCreateOK(opt, result) {}
    /**
     * 窗口最大化后触发后 的钩子方法
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "winFull",
    value: function winFull() {}
    /**
     * 窗口最小化后触发 的钩子方法
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "winMin",
    value: function winMin() {}
    /**
     * 窗口还原后触发 的钩子方法
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "winRestore",
    value: function winRestore() {}
  }, {
    key: "_startActivate",
    value: function _startActivate(layero) {
      this.activate(layero);
      eventTarget.fire(EventType.activated, {
        sourceTarget: this
      });

      if (this.options.success) {
        this.options.success(this);
        delete this.options.success; //一次性的
      }

      if (!this.isActivate) {
        //窗口打开中没加载完成时，被释放
        this.disableBase();
      }
    }
    /**
     * 激活模块之前 的钩子方法
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "beforeActivate",
    value: function beforeActivate() {}
    /**
     * 激活模块【类内部实现方法】
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "activate",
    value: function activate() {} //==============释放插件=================

    /**
     * 释放插件，同 sxii.widget.disable方法
     * @return {void}  无
     */

  }, {
    key: "disableBase",
    value: function disableBase() {
      if (!this.isActivate) {
        return;
      }

      this.isActivate = false;
      this.beforeDisable();
      eventTarget.fire(EventType.beforeDisable, {
        sourceTarget: this
      }); //关闭所有窗口

      this.eachView(function (viewopt) {
        if (viewopt._layerIdx && viewopt._layerIdx > 0) {
          BaseWidget_layer.close(viewopt._layerIdx);

          if (viewopt._layerOpening) {//窗口还在加载中,success方法中去关闭
          } else {
            viewopt._layerIdx = -1;
          }

          return true;
        } else {
          if (viewopt.type == 'append' && viewopt._dom) {
            viewopt._dom.remove();

            viewopt._dom = null;
          }

          if (viewopt.type == 'custom' && viewopt.close) {
            viewopt.close();
          }

          return false;
        }
      });
      this.disable(); //还原配置为初始状态

      if (this.options.autoReset) {
        this.resetConfig();
      }

      eventTarget.fire(EventType.disabled, {
        sourceTarget: this
      });
    }
    /**
     * 释放模块前
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "beforeDisable",
    value: function beforeDisable() {}
    /**
     * 释放模块【类内部实现方法】
     * @return {void}  无
     * @abstract
     */

  }, {
    key: "disable",
    value: function disable() {} //==============其他方法=================

  }, {
    key: "bfb2Number",
    value: function bfb2Number(str, allnum, windowOptions) {
      if (typeof str === 'string' && str.indexOf('%') != -1) {
        windowOptions._hasresize = true;
        return allnum * Number(str.replace('%', '')) / 100;
      }

      return str;
    }
  }, {
    key: "addCacheVersion",
    value: function addCacheVersion(_resource) {
      if (_resource == null) {
        return _resource;
      }

      var cacheVersion = getCacheVersion();

      if (cacheVersion) {
        if (_resource.indexOf('?') == -1) {
          _resource += '?cache=' + cacheVersion;
        } else if (_resource.indexOf('cache=' + cacheVersion) == -1) {
          _resource += '&cache=' + cacheVersion;
        }
      }

      return _resource;
    }
    /**
     * 还原配置为初始状态
     * @return {void}  无
     */

  }, {
    key: "resetConfig",
    value: function resetConfig() {
      if (this.options._firstConfigBak) {
        var _backData = this.options._firstConfigBak;

        for (var aa in _backData) {
          if (aa == 'uri') {
            continue;
          }

          this.options[aa] = _backData[aa];
        }
      }
    }
    /**
     * 设置view弹窗的显示和隐藏，基于修改css实现
     *
     * @param {Boolean} show 是否显示
     * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
     * @return {void}  无
     */

  }, {
    key: "setViewShow",
    value: function setViewShow(show, index) {
      this.eachView(function (viewopt) {
        if (viewopt._layerIdx && viewopt._layerIdx > 0) {
          if (show) {
            BaseWidget_jQuery('#layui-layer' + viewopt._layerIdx).show();
          } else {
            BaseWidget_jQuery('#layui-layer' + viewopt._layerIdx).hide();
          }
        } else if (viewopt.type == 'append' && viewopt._dom) {
          if (show) {
            BaseWidget_jQuery(viewopt._dom).show();
          } else {
            BaseWidget_jQuery(viewopt._dom).hide();
          }
        }
      }, index);
    }
    /**
     * 设置view弹窗的css
     *
     * @param {Object} style css值
     * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
     * @return {void}  无
     */

  }, {
    key: "setViewCss",
    value: function setViewCss(style, index) {
      this.eachView(function (viewopt) {
        if (viewopt._layerIdx != null && viewopt._layerIdx > 0) {
          BaseWidget_layer.style(viewopt._layerIdx, style);
        } else if (viewopt.type == 'append' && viewopt._dom) {
          BaseWidget_jQuery(viewopt._dom).css(style);
        }
      }, index);
    }
    /**
     * 读取html页面的内容
     *
     * @param {string} url html页面的url
     * @param {Function} callback 读取完成后的回调方法
     * @return {void}  无
     */

  }, {
    key: "getHtml",
    value: function getHtml(url, callback) {
      BaseWidget_jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        timeout: 0,
        //永不超时
        success: function success(data) {
          callback(data);
        }
      });
    }
  }]);

  return BaseWidget;
}(BaseClass);
// CONCATENATED MODULE: ./src/index.js



external_sxii_["widget"] = widgetManager_namespaceObject;

external_sxii_["widget"].BaseWidget = BaseWidget_BaseWidget;

external_sxii_["widget"].EventType = EventType;


/***/ })
/******/ ]);
});