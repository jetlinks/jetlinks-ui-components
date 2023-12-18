/*!
 * SXII平台插件,支持对ArcGIS Server矢量服务的加载使用
 * 版本信息：v3.0.5, hash值: f2cdb4af9597a30ece28
 * 编译日期：2021-05-24 09:27:50
 * 版权所有：Copyright by 山投信息 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sxii"), require("cesium"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dEsri", ["sxii", "cesium"], factory);
	else if(typeof exports === 'object')
		exports["mars3dEsri"] = factory(require("sxii"), require("cesium"));
	else
		root["mars3dEsri"] = factory(root["sxii"], root["Cesium"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__) {
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

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

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
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
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
__webpack_require__.d(__webpack_exports__, "ArcGisWfsLayer", function() { return /* reexport */ ArcGisWfsLayer_ArcGisWfsLayer; });
__webpack_require__.d(__webpack_exports__, "ArcGisWfsSingleLayer", function() { return /* reexport */ ArcGisWfsSingleLayer_ArcGisWfsSingleLayer; });
__webpack_require__.d(__webpack_exports__, "QueryArcServer", function() { return /* reexport */ QueryArcServer_QueryArcServer; });

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(1);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/esri/lib/leaflet.js

//可以下载最新库替换：https://github.com/Leaflet/Leaflet 或者用npm版本 leaflet
//此处只是做了删减，减少文件大小
var version = "1.3.4 mars2d";
var freeze = Object.freeze; // Object.freeze = function (obj) { return obj; };
// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.

function extend(dest) {
  var i, j, len, src;

  for (j = 1, len = arguments.length; j < len; j++) {
    src = arguments[j];

    for (i in src) {
      dest[i] = src[i];
    }
  }

  return dest;
} // @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


var create = Object.create || function () {
  function F() {}

  return function (proto) {
    F.prototype = proto;
    return new F();
  };
}(); // @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.


function bind(fn, obj) {
  var slice = Array.prototype.slice;

  if (fn.bind) {
    return fn.bind.apply(fn, slice.call(arguments, 1));
  }

  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
  };
} // @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)


var lastId = 0; // @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.

function stamp(obj) {
  /*eslint-disable */
  obj._leaflet_id = obj._leaflet_id || ++lastId;
  return obj._leaflet_id;
  /* eslint-enable */
} // @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.


function throttle(fn, time, context) {
  var lock, args, wrapperFn, later;

  later = function later() {
    // reset lock and call if queued
    lock = false;

    if (args) {
      wrapperFn.apply(context, args);
      args = false;
    }
  };

  wrapperFn = function wrapperFn() {
    if (lock) {
      // called too soon, queue to call later
      args = arguments;
    } else {
      // call and lock until later
      fn.apply(context, arguments);
      setTimeout(later, time);
      lock = true;
    }
  };

  return wrapperFn;
} // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.


function wrapNum(x, range, includeMax) {
  var max = range[1],
      min = range[0],
      d = max - min;
  return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
} // @function falseFn(): Function
// Returns a function which always returns `false`.


function falseFn() {
  return false;
} // @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.


function formatNum(num, digits) {
  var pow = Math.pow(10, digits === undefined ? 6 : digits);
  return Math.round(num * pow) / pow;
} // @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)


function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
} // @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.


function splitWords(str) {
  return trim(str).split(/\s+/);
} // @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.


function setOptions(obj, options) {
  if (!obj.hasOwnProperty('options')) {
    obj.options = obj.options ? create(obj.options) : {};
  }

  for (var i in options) {
    obj.options[i] = options[i];
  }

  return obj.options;
} // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)


function getParamString(obj, existingUrl, uppercase) {
  var params = [];

  for (var i in obj) {
    params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
  }

  return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
}

var templateRe = /\{ *([\w_-]+) *\}/g; // @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.

function template(str, data) {
  return str.replace(templateRe, function (str, key) {
    var value = data[key];

    if (value === undefined) {
      throw new Error('No value provided for variable ' + str);
    } else if (typeof value === 'function') {
      value = value(data);
    }

    return value;
  });
} // @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)


var isArray = Array.isArray || function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}; // @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)


function indexOf(array, el) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return i;
    }
  }

  return -1;
} // @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).


var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

function getPrefixed(name) {
  return window['webkit' + name] || window['moz' + name] || window['ms' + name];
}

var lastTime = 0; // fallback for IE 7-8

function timeoutDefer(fn) {
  var time = +new Date(),
      timeToCall = Math.max(0, 16 - (time - lastTime));
  lastTime = time + timeToCall;
  return window.setTimeout(fn, timeToCall);
}

var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;

var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
  window.clearTimeout(id);
}; // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.


function requestAnimFrame(fn, context, immediate) {
  if (immediate && requestFn === timeoutDefer) {
    fn.call(context);
  } else {
    return requestFn.call(window, bind(fn, context));
  }
} // @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).


function cancelAnimFrame(id) {
  if (id) {
    cancelFn.call(window, id);
  }
}

var Util = (Object.freeze || Object)({
  freeze: freeze,
  extend: extend,
  create: create,
  bind: bind,
  lastId: lastId,
  stamp: stamp,
  throttle: throttle,
  wrapNum: wrapNum,
  falseFn: falseFn,
  formatNum: formatNum,
  trim: trim,
  splitWords: splitWords,
  setOptions: setOptions,
  getParamString: getParamString,
  template: template,
  isArray: isArray,
  indexOf: indexOf,
  emptyImageUrl: emptyImageUrl,
  requestFn: requestFn,
  cancelFn: cancelFn,
  requestAnimFrame: requestAnimFrame,
  cancelAnimFrame: cancelAnimFrame
}); // @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!

function Class() {}

Class.extend = function (props) {
  // @function extend(props: Object): Function
  // [Extends the current class](#class-inheritance) given the properties to be included.
  // Returns a Javascript function that is a class constructor (to be called with `new`).
  var NewClass = function NewClass() {
    // call the constructor
    if (this.initialize) {
      this.initialize.apply(this, arguments);
    } // call all constructor hooks


    this.callInitHooks();
  };

  var parentProto = NewClass.__super__ = this.prototype;
  var proto = create(parentProto);
  proto.constructor = NewClass;
  NewClass.prototype = proto; // inherit parent's statics

  for (var i in this) {
    if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
      NewClass[i] = this[i];
    }
  } // mix static properties into the class


  if (props.statics) {
    extend(NewClass, props.statics);
    delete props.statics;
  } // mix includes into the prototype


  if (props.includes) {
    checkDeprecatedMixinEvents(props.includes);
    extend.apply(null, [proto].concat(props.includes));
    delete props.includes;
  } // merge options


  if (proto.options) {
    props.options = extend(create(proto.options), props.options);
  } // mix given properties into the prototype


  extend(proto, props);
  proto._initHooks = []; // add method for calling all hooks

  proto.callInitHooks = function () {
    if (this._initHooksCalled) {
      return;
    }

    if (parentProto.callInitHooks) {
      parentProto.callInitHooks.call(this);
    }

    this._initHooksCalled = true;

    for (var i = 0, len = proto._initHooks.length; i < len; i++) {
      proto._initHooks[i].call(this);
    }
  };

  return NewClass;
}; // @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.


Class.include = function (props) {
  extend(this.prototype, props);
  return this;
}; // @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.


Class.mergeOptions = function (options) {
  extend(this.prototype.options, options);
  return this;
}; // @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.


Class.addInitHook = function (fn) {
  // (Function) || (String, args...)
  var args = Array.prototype.slice.call(arguments, 1);
  var init = typeof fn === 'function' ? fn : function () {
    this[fn].apply(this, args);
  };
  this.prototype._initHooks = this.prototype._initHooks || [];

  this.prototype._initHooks.push(init);

  return this;
};

function checkDeprecatedMixinEvents(includes) {
  if (typeof L === 'undefined' || !L || !L.Mixin) {
    return;
  }

  includes = isArray(includes) ? includes : [includes];

  for (var i = 0; i < includes.length; i++) {
    if (includes[i] === L.Mixin.Events) {
      console.warn('Deprecated include of L.Mixin.Events: ' + 'this property will be removed in future releases, ' + 'please inherit from L.Evented instead.', new Error().stack);
    }
  }
}
/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */


var Events = {
  /* @method on(type: String, fn: Function, context?: Object): this
   * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
   *
   * @alternative
   * @method on(eventMap: Object): this
   * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
   */
  on: function on(types, fn, context) {
    // types can be a map of types/handlers
    if (typeof_default()(types) === 'object') {
      for (var type in types) {
        // we don't process space-separated events here for performance;
        // it's a hot path since Layer uses the on(obj) syntax
        this._on(type, types[type], fn);
      }
    } else {
      // types can be a string of space-separated words
      types = splitWords(types);

      for (var i = 0, len = types.length; i < len; i++) {
        this._on(types[i], fn, context);
      }
    }

    return this;
  },

  /* @method off(type: String, fn?: Function, context?: Object): this
   * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
   *
   * @alternative
   * @method off(eventMap: Object): this
   * Removes a set of type/listener pairs.
   *
   * @alternative
   * @method off: this
   * Removes all listeners to all events on the object.
   */
  off: function off(types, fn, context) {
    if (!types) {
      // clear all listeners if called without arguments
      delete this._events;
    } else if (typeof_default()(types) === 'object') {
      for (var type in types) {
        this._off(type, types[type], fn);
      }
    } else {
      types = splitWords(types);

      for (var i = 0, len = types.length; i < len; i++) {
        this._off(types[i], fn, context);
      }
    }

    return this;
  },
  // attach listener (without syntactic sugar now)
  _on: function _on(type, fn, context) {
    this._events = this._events || {};
    /* get/init listeners for type */

    var typeListeners = this._events[type];

    if (!typeListeners) {
      typeListeners = [];
      this._events[type] = typeListeners;
    }

    if (context === this) {
      // Less memory footprint.
      context = undefined;
    }

    var newListener = {
      fn: fn,
      ctx: context
    },
        listeners = typeListeners; // check if fn already there

    for (var i = 0, len = listeners.length; i < len; i++) {
      if (listeners[i].fn === fn && listeners[i].ctx === context) {
        return;
      }
    }

    listeners.push(newListener);
  },
  _off: function _off(type, fn, context) {
    var listeners, i, len;

    if (!this._events) {
      return;
    }

    listeners = this._events[type];

    if (!listeners) {
      return;
    }

    if (!fn) {
      // Set all removed listeners to noop so they are not called if remove happens in fire
      for (i = 0, len = listeners.length; i < len; i++) {
        listeners[i].fn = falseFn;
      } // clear all listeners for a type if function isn't specified


      delete this._events[type];
      return;
    }

    if (context === this) {
      context = undefined;
    }

    if (listeners) {
      // find fn and remove it
      for (i = 0, len = listeners.length; i < len; i++) {
        var l = listeners[i];

        if (l.ctx !== context) {
          continue;
        }

        if (l.fn === fn) {
          // set the removed listener to noop so that's not called if remove happens in fire
          l.fn = falseFn;

          if (this._firingCount) {
            /* copy array in case events are being fired */
            this._events[type] = listeners = listeners.slice();
          }

          listeners.splice(i, 1);
          return;
        }
      }
    }
  },
  // @method fire(type: String, data?: Object, propagate?: Boolean): this
  // Fires an event of the specified type. You can optionally provide an data
  // object — the first argument of the listener function will contain its
  // properties. The event can optionally be propagated to event parents.
  fire: function fire(type, data, propagate) {
    if (!this.listens(type, propagate)) {
      return this;
    }

    var event = extend({}, data, {
      type: type,
      target: this,
      sourceTarget: data && data.sourceTarget || this
    });

    if (this._events) {
      var listeners = this._events[type];

      if (listeners) {
        this._firingCount = this._firingCount + 1 || 1;

        for (var i = 0, len = listeners.length; i < len; i++) {
          var l = listeners[i];
          l.fn.call(l.ctx || this, event);
        }

        this._firingCount--;
      }
    }

    if (propagate) {
      // propagate the event to parents (set with addEventParent)
      this._propagateEvent(event);
    }

    return this;
  },
  // @method listens(type: String): Boolean
  // Returns `true` if a particular event type has any listeners attached to it.
  listens: function listens(type, propagate) {
    var listeners = this._events && this._events[type];

    if (listeners && listeners.length) {
      return true;
    }

    if (propagate) {
      // also check parents for listeners if event propagates
      for (var id in this._eventParents) {
        if (this._eventParents[id].listens(type, propagate)) {
          return true;
        }
      }
    }

    return false;
  },
  // @method once(…): this
  // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
  once: function once(types, fn, context) {
    if (typeof_default()(types) === 'object') {
      for (var type in types) {
        this.once(type, types[type], fn);
      }

      return this;
    }

    var handler = bind(function () {
      this.off(types, fn, context).off(types, handler, context);
    }, this); // add a listener that's executed once and removed after that

    return this.on(types, fn, context).on(types, handler, context);
  },
  // @method addEventParent(obj: Evented): this
  // Adds an event parent - an `Evented` that will receive propagated events
  addEventParent: function addEventParent(obj) {
    this._eventParents = this._eventParents || {};
    this._eventParents[stamp(obj)] = obj;
    return this;
  },
  // @method removeEventParent(obj: Evented): this
  // Removes an event parent, so it will stop receiving propagated events
  removeEventParent: function removeEventParent(obj) {
    if (this._eventParents) {
      delete this._eventParents[stamp(obj)];
    }

    return this;
  },
  _propagateEvent: function _propagateEvent(e) {
    for (var id in this._eventParents) {
      this._eventParents[id].fire(e.type, extend({
        layer: e.target,
        propagatedFrom: e.target
      }, e), true);
    }
  }
}; // aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)

Events.addEventListener = Events.on; // @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)

Events.removeEventListener = Events.clearAllEventListeners = Events.off; // @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)

Events.addOneTimeEventListener = Events.once; // @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)

Events.fireEvent = Events.fire; // @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)

Events.hasEventListeners = Events.listens;
var Evented = Class.extend(Events);
/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Point(x, y, round) {
  // @property x: Number; The `x` coordinate of the point
  this.x = round ? Math.round(x) : x; // @property y: Number; The `y` coordinate of the point

  this.y = round ? Math.round(y) : y;
}

var trunc = Math.trunc || function (v) {
  return v > 0 ? Math.floor(v) : Math.ceil(v);
};

Point.prototype = {
  // @method clone(): Point
  // Returns a copy of the current point.
  clone: function clone() {
    return new Point(this.x, this.y);
  },
  // @method add(otherPoint: Point): Point
  // Returns the result of addition of the current and the given points.
  add: function add(point) {
    // non-destructive, returns a new point
    return this.clone()._add(toPoint(point));
  },
  _add: function _add(point) {
    // destructive, used directly for performance in situations where it's safe to modify existing point
    this.x += point.x;
    this.y += point.y;
    return this;
  },
  // @method subtract(otherPoint: Point): Point
  // Returns the result of subtraction of the given point from the current.
  subtract: function subtract(point) {
    return this.clone()._subtract(toPoint(point));
  },
  _subtract: function _subtract(point) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  },
  // @method divideBy(num: Number): Point
  // Returns the result of division of the current point by the given number.
  divideBy: function divideBy(num) {
    return this.clone()._divideBy(num);
  },
  _divideBy: function _divideBy(num) {
    this.x /= num;
    this.y /= num;
    return this;
  },
  // @method multiplyBy(num: Number): Point
  // Returns the result of multiplication of the current point by the given number.
  multiplyBy: function multiplyBy(num) {
    return this.clone()._multiplyBy(num);
  },
  _multiplyBy: function _multiplyBy(num) {
    this.x *= num;
    this.y *= num;
    return this;
  },
  // @method scaleBy(scale: Point): Point
  // Multiply each coordinate of the current point by each coordinate of
  // `scale`. In linear algebra terms, multiply the point by the
  // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
  // defined by `scale`.
  scaleBy: function scaleBy(point) {
    return new Point(this.x * point.x, this.y * point.y);
  },
  // @method unscaleBy(scale: Point): Point
  // Inverse of `scaleBy`. Divide each coordinate of the current point by
  // each coordinate of `scale`.
  unscaleBy: function unscaleBy(point) {
    return new Point(this.x / point.x, this.y / point.y);
  },
  // @method round(): Point
  // Returns a copy of the current point with rounded coordinates.
  round: function round() {
    return this.clone()._round();
  },
  _round: function _round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  },
  // @method floor(): Point
  // Returns a copy of the current point with floored coordinates (rounded down).
  floor: function floor() {
    return this.clone()._floor();
  },
  _floor: function _floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  },
  // @method ceil(): Point
  // Returns a copy of the current point with ceiled coordinates (rounded up).
  ceil: function ceil() {
    return this.clone()._ceil();
  },
  _ceil: function _ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  },
  // @method trunc(): Point
  // Returns a copy of the current point with truncated coordinates (rounded towards zero).
  trunc: function trunc() {
    return this.clone()._trunc();
  },
  _trunc: function _trunc() {
    this.x = trunc(this.x);
    this.y = trunc(this.y);
    return this;
  },
  // @method distanceTo(otherPoint: Point): Number
  // Returns the cartesian distance between the current and the given points.
  distanceTo: function distanceTo(point) {
    point = toPoint(point);
    var x = point.x - this.x,
        y = point.y - this.y;
    return Math.sqrt(x * x + y * y);
  },
  // @method equals(otherPoint: Point): Boolean
  // Returns `true` if the given point has the same coordinates.
  equals: function equals(point) {
    point = toPoint(point);
    return point.x === this.x && point.y === this.y;
  },
  // @method contains(otherPoint: Point): Boolean
  // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
  contains: function contains(point) {
    point = toPoint(point);
    return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
  },
  // @method toString(): String
  // Returns a string representation of the point for debugging purposes.
  toString: function toString() {
    return 'Point(' + formatNum(this.x) + ', ' + formatNum(this.y) + ')';
  }
}; // @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.

function toPoint(x, y, round) {
  if (x instanceof Point) {
    return x;
  }

  if (isArray(x)) {
    return new Point(x[0], x[1]);
  }

  if (x === undefined || x === null) {
    return x;
  }

  if (typeof_default()(x) === 'object' && 'x' in x && 'y' in x) {
    return new Point(x.x, x.y);
  }

  return new Point(x, y, round);
}
/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */


function Bounds(a, b) {
  if (!a) {
    return;
  }

  var points = b ? [a, b] : a;

  for (var i = 0, len = points.length; i < len; i++) {
    this.extend(points[i]);
  }
}

Bounds.prototype = {
  // @method extend(point: Point): this
  // Extends the bounds to contain the given point.
  extend: function extend(point) {
    // (Point)
    point = toPoint(point); // @property min: Point
    // The top left corner of the rectangle.
    // @property max: Point
    // The bottom right corner of the rectangle.

    if (!this.min && !this.max) {
      this.min = point.clone();
      this.max = point.clone();
    } else {
      this.min.x = Math.min(point.x, this.min.x);
      this.max.x = Math.max(point.x, this.max.x);
      this.min.y = Math.min(point.y, this.min.y);
      this.max.y = Math.max(point.y, this.max.y);
    }

    return this;
  },
  // @method getCenter(round?: Boolean): Point
  // Returns the center point of the bounds.
  getCenter: function getCenter(round) {
    return new Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
  },
  // @method getBottomLeft(): Point
  // Returns the bottom-left point of the bounds.
  getBottomLeft: function getBottomLeft() {
    return new Point(this.min.x, this.max.y);
  },
  // @method getTopRight(): Point
  // Returns the top-right point of the bounds.
  getTopRight: function getTopRight() {
    // -> Point
    return new Point(this.max.x, this.min.y);
  },
  // @method getTopLeft(): Point
  // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
  getTopLeft: function getTopLeft() {
    return this.min; // left, top
  },
  // @method getBottomRight(): Point
  // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
  getBottomRight: function getBottomRight() {
    return this.max; // right, bottom
  },
  // @method getSize(): Point
  // Returns the size of the given bounds
  getSize: function getSize() {
    return this.max.subtract(this.min);
  },
  // @method contains(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle contains the given one.
  // @alternative
  // @method contains(point: Point): Boolean
  // Returns `true` if the rectangle contains the given point.
  contains: function contains(obj) {
    var min, max;

    if (typeof obj[0] === 'number' || obj instanceof Point) {
      obj = toPoint(obj);
    } else {
      obj = toBounds(obj);
    }

    if (obj instanceof Bounds) {
      min = obj.min;
      max = obj.max;
    } else {
      min = max = obj;
    }

    return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
  },
  // @method intersects(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle intersects the given bounds. Two bounds
  // intersect if they have at least one point in common.
  intersects: function intersects(bounds) {
    // (Bounds) -> Boolean
    bounds = toBounds(bounds);
    var min = this.min,
        max = this.max,
        min2 = bounds.min,
        max2 = bounds.max,
        xIntersects = max2.x >= min.x && min2.x <= max.x,
        yIntersects = max2.y >= min.y && min2.y <= max.y;
    return xIntersects && yIntersects;
  },
  // @method overlaps(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle overlaps the given bounds. Two bounds
  // overlap if their intersection is an area.
  overlaps: function overlaps(bounds) {
    // (Bounds) -> Boolean
    bounds = toBounds(bounds);
    var min = this.min,
        max = this.max,
        min2 = bounds.min,
        max2 = bounds.max,
        xOverlaps = max2.x > min.x && min2.x < max.x,
        yOverlaps = max2.y > min.y && min2.y < max.y;
    return xOverlaps && yOverlaps;
  },
  isValid: function isValid() {
    return !!(this.min && this.max);
  }
}; // @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.

function toBounds(a, b) {
  if (!a || a instanceof Bounds) {
    return a;
  }

  return new Bounds(a, b);
}
/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */


function LatLngBounds(corner1, corner2) {
  // (LatLng, LatLng) or (LatLng[])
  if (!corner1) {
    return;
  }

  var latlngs = corner2 ? [corner1, corner2] : corner1;

  for (var i = 0, len = latlngs.length; i < len; i++) {
    this.extend(latlngs[i]);
  }
}

LatLngBounds.prototype = {
  // @method extend(latlng: LatLng): this
  // Extend the bounds to contain the given point
  // @alternative
  // @method extend(otherBounds: LatLngBounds): this
  // Extend the bounds to contain the given bounds
  extend: function extend(obj) {
    var sw = this._southWest,
        ne = this._northEast,
        sw2,
        ne2;

    if (obj instanceof LatLng) {
      sw2 = obj;
      ne2 = obj;
    } else if (obj instanceof LatLngBounds) {
      sw2 = obj._southWest;
      ne2 = obj._northEast;

      if (!sw2 || !ne2) {
        return this;
      }
    } else {
      return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
    }

    if (!sw && !ne) {
      this._southWest = new LatLng(sw2.lat, sw2.lng);
      this._northEast = new LatLng(ne2.lat, ne2.lng);
    } else {
      sw.lat = Math.min(sw2.lat, sw.lat);
      sw.lng = Math.min(sw2.lng, sw.lng);
      ne.lat = Math.max(ne2.lat, ne.lat);
      ne.lng = Math.max(ne2.lng, ne.lng);
    }

    return this;
  },
  // @method pad(bufferRatio: Number): LatLngBounds
  // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
  // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
  // Negative values will retract the bounds.
  pad: function pad(bufferRatio) {
    var sw = this._southWest,
        ne = this._northEast,
        heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
        widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
    return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
  },
  // @method getCenter(): LatLng
  // Returns the center point of the bounds.
  getCenter: function getCenter() {
    return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
  },
  // @method getSouthWest(): LatLng
  // Returns the south-west point of the bounds.
  getSouthWest: function getSouthWest() {
    return this._southWest;
  },
  // @method getNorthEast(): LatLng
  // Returns the north-east point of the bounds.
  getNorthEast: function getNorthEast() {
    return this._northEast;
  },
  // @method getNorthWest(): LatLng
  // Returns the north-west point of the bounds.
  getNorthWest: function getNorthWest() {
    return new LatLng(this.getNorth(), this.getWest());
  },
  // @method getSouthEast(): LatLng
  // Returns the south-east point of the bounds.
  getSouthEast: function getSouthEast() {
    return new LatLng(this.getSouth(), this.getEast());
  },
  // @method getWest(): Number
  // Returns the west longitude of the bounds
  getWest: function getWest() {
    return this._southWest.lng;
  },
  // @method getSouth(): Number
  // Returns the south latitude of the bounds
  getSouth: function getSouth() {
    return this._southWest.lat;
  },
  // @method getEast(): Number
  // Returns the east longitude of the bounds
  getEast: function getEast() {
    return this._northEast.lng;
  },
  // @method getNorth(): Number
  // Returns the north latitude of the bounds
  getNorth: function getNorth() {
    return this._northEast.lat;
  },
  // @method contains(otherBounds: LatLngBounds): Boolean
  // Returns `true` if the rectangle contains the given one.
  // @alternative
  // @method contains (latlng: LatLng): Boolean
  // Returns `true` if the rectangle contains the given point.
  contains: function contains(obj) {
    // (LatLngBounds) or (LatLng) -> Boolean
    if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
      obj = toLatLng(obj);
    } else {
      obj = toLatLngBounds(obj);
    }

    var sw = this._southWest,
        ne = this._northEast,
        sw2,
        ne2;

    if (obj instanceof LatLngBounds) {
      sw2 = obj.getSouthWest();
      ne2 = obj.getNorthEast();
    } else {
      sw2 = ne2 = obj;
    }

    return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
  },
  // @method intersects(otherBounds: LatLngBounds): Boolean
  // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
  intersects: function intersects(bounds) {
    bounds = toLatLngBounds(bounds);
    var sw = this._southWest,
        ne = this._northEast,
        sw2 = bounds.getSouthWest(),
        ne2 = bounds.getNorthEast(),
        latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
        lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
    return latIntersects && lngIntersects;
  },
  // @method overlaps(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
  overlaps: function overlaps(bounds) {
    bounds = toLatLngBounds(bounds);
    var sw = this._southWest,
        ne = this._northEast,
        sw2 = bounds.getSouthWest(),
        ne2 = bounds.getNorthEast(),
        latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat,
        lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
    return latOverlaps && lngOverlaps;
  },
  // @method toBBoxString(): String
  // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
  toBBoxString: function toBBoxString() {
    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
  },
  // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
  // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
  equals: function equals(bounds, maxMargin) {
    if (!bounds) {
      return false;
    }

    bounds = toLatLngBounds(bounds);
    return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
  },
  // @method isValid(): Boolean
  // Returns `true` if the bounds are properly initialized.
  isValid: function isValid() {
    return !!(this._southWest && this._northEast);
  }
}; // TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).

function toLatLngBounds(a, b) {
  if (a instanceof LatLngBounds) {
    return a;
  }

  return new LatLngBounds(a, b);
}
/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */


function LatLng(lat, lng, alt) {
  if (isNaN(lat) || isNaN(lng)) {
    throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
  } // @property lat: Number
  // Latitude in degrees


  this.lat = +lat; // @property lng: Number
  // Longitude in degrees

  this.lng = +lng; // @property alt: Number
  // Altitude in meters (optional)

  if (alt !== undefined) {
    this.alt = +alt;
  }
}

LatLng.prototype = {
  // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
  // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
  equals: function equals(obj, maxMargin) {
    if (!obj) {
      return false;
    }

    obj = toLatLng(obj);
    var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
    return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
  },
  // @method toString(): String
  // Returns a string representation of the point (for debugging purposes).
  toString: function toString(precision) {
    return 'LatLng(' + formatNum(this.lat, precision) + ', ' + formatNum(this.lng, precision) + ')';
  },
  // @method distanceTo(otherLatLng: LatLng): Number
  // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
  distanceTo: function distanceTo(other) {
    return Earth.distance(this, toLatLng(other));
  },
  // @method wrap(): LatLng
  // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
  wrap: function wrap() {
    return Earth.wrapLatLng(this);
  },
  // @method toBounds(sizeInMeters: Number): LatLngBounds
  // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
  toBounds: function toBounds(sizeInMeters) {
    var latAccuracy = 180 * sizeInMeters / 40075017,
        lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
    return toLatLngBounds([this.lat - latAccuracy, this.lng - lngAccuracy], [this.lat + latAccuracy, this.lng + lngAccuracy]);
  },
  clone: function clone() {
    return new LatLng(this.lat, this.lng, this.alt);
  }
}; // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

function toLatLng(a, b, c) {
  if (a instanceof LatLng) {
    return a;
  }

  if (isArray(a) && typeof_default()(a[0]) !== 'object') {
    if (a.length === 3) {
      return new LatLng(a[0], a[1], a[2]);
    }

    if (a.length === 2) {
      return new LatLng(a[0], a[1]);
    }

    return null;
  }

  if (a === undefined || a === null) {
    return a;
  }

  if (typeof_default()(a) === 'object' && 'lat' in a) {
    return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
  }

  if (b === undefined) {
    return null;
  }

  return new LatLng(a, b, c);
}
/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */


var CRS = {
  // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
  // Projects geographical coordinates into pixel coordinates for a given zoom.
  latLngToPoint: function latLngToPoint(latlng, zoom) {
    var projectedPoint = this.projection.project(latlng),
        scale = this.scale(zoom);
    return this.transformation._transform(projectedPoint, scale);
  },
  // @method pointToLatLng(point: Point, zoom: Number): LatLng
  // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
  // zoom into geographical coordinates.
  pointToLatLng: function pointToLatLng(point, zoom) {
    var scale = this.scale(zoom),
        untransformedPoint = this.transformation.untransform(point, scale);
    return this.projection.unproject(untransformedPoint);
  },
  // @method project(latlng: LatLng): Point
  // Projects geographical coordinates into coordinates in units accepted for
  // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
  project: function project(latlng) {
    return this.projection.project(latlng);
  },
  // @method unproject(point: Point): LatLng
  // Given a projected coordinate returns the corresponding LatLng.
  // The inverse of `project`.
  unproject: function unproject(point) {
    return this.projection.unproject(point);
  },
  // @method scale(zoom: Number): Number
  // Returns the scale used when transforming projected coordinates into
  // pixel coordinates for a particular zoom. For example, it returns
  // `256 * 2^zoom` for Mercator-based CRS.
  scale: function scale(zoom) {
    return 256 * Math.pow(2, zoom);
  },
  // @method zoom(scale: Number): Number
  // Inverse of `scale()`, returns the zoom level corresponding to a scale
  // factor of `scale`.
  zoom: function zoom(scale) {
    return Math.log(scale / 256) / Math.LN2;
  },
  // @method getProjectedBounds(zoom: Number): Bounds
  // Returns the projection's bounds scaled and transformed for the provided `zoom`.
  getProjectedBounds: function getProjectedBounds(zoom) {
    if (this.infinite) {
      return null;
    }

    var b = this.projection.bounds,
        s = this.scale(zoom),
        min = this.transformation.transform(b.min, s),
        max = this.transformation.transform(b.max, s);
    return new Bounds(min, max);
  },
  // @method distance(latlng1: LatLng, latlng2: LatLng): Number
  // Returns the distance between two geographical coordinates.
  // @property code: String
  // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
  //
  // @property wrapLng: Number[]
  // An array of two numbers defining whether the longitude (horizontal) coordinate
  // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
  // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
  //
  // @property wrapLat: Number[]
  // Like `wrapLng`, but for the latitude (vertical) axis.
  // wrapLng: [min, max],
  // wrapLat: [min, max],
  // @property infinite: Boolean
  // If true, the coordinate space will be unbounded (infinite in both axes)
  infinite: false,
  // @method wrapLatLng(latlng: LatLng): LatLng
  // Returns a `LatLng` where lat and lng has been wrapped according to the
  // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
  wrapLatLng: function wrapLatLng(latlng) {
    var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
        lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
        alt = latlng.alt;
    return new LatLng(lat, lng, alt);
  },
  // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  // Returns a `LatLngBounds` with the same size as the given one, ensuring
  // that its center is within the CRS's bounds.
  // Only accepts actual `L.LatLngBounds` instances, not arrays.
  wrapLatLngBounds: function wrapLatLngBounds(bounds) {
    var center = bounds.getCenter(),
        newCenter = this.wrapLatLng(center),
        latShift = center.lat - newCenter.lat,
        lngShift = center.lng - newCenter.lng;

    if (latShift === 0 && lngShift === 0) {
      return bounds;
    }

    var sw = bounds.getSouthWest(),
        ne = bounds.getNorthEast(),
        newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
        newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
    return new LatLngBounds(newSw, newNe);
  }
};
/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

var Earth = extend({}, CRS, {
  wrapLng: [-180, 180],
  // Mean Earth Radius, as recommended for use by
  // the International Union of Geodesy and Geophysics,
  // see http://rosettacode.org/wiki/Haversine_formula
  R: 6371000,
  // distance between two geographical points using spherical law of cosines approximation
  distance: function distance(latlng1, latlng2) {
    var rad = Math.PI / 180,
        lat1 = latlng1.lat * rad,
        lat2 = latlng2.lat * rad,
        sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
        sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
        a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.R * c;
  }
});
/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

var SphericalMercator = {
  R: 6378137,
  MAX_LATITUDE: 85.0511287798,
  project: function project(latlng) {
    var d = Math.PI / 180,
        max = this.MAX_LATITUDE,
        lat = Math.max(Math.min(max, latlng.lat), -max),
        sin = Math.sin(lat * d);
    return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
  },
  unproject: function unproject(point) {
    var d = 180 / Math.PI;
    return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
  },
  bounds: function () {
    var d = 6378137 * Math.PI;
    return new Bounds([-d, -d], [d, d]);
  }()
};
/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */
// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.

function Transformation(a, b, c, d) {
  if (isArray(a)) {
    // use array properties
    this._a = a[0];
    this._b = a[1];
    this._c = a[2];
    this._d = a[3];
    return;
  }

  this._a = a;
  this._b = b;
  this._c = c;
  this._d = d;
}

Transformation.prototype = {
  // @method transform(point: Point, scale?: Number): Point
  // Returns a transformed point, optionally multiplied by the given scale.
  // Only accepts actual `L.Point` instances, not arrays.
  transform: function transform(point, scale) {
    // (Point, Number) -> Point
    return this._transform(point.clone(), scale);
  },
  // destructive transform (faster)
  _transform: function _transform(point, scale) {
    scale = scale || 1;
    point.x = scale * (this._a * point.x + this._b);
    point.y = scale * (this._c * point.y + this._d);
    return point;
  },
  // @method untransform(point: Point, scale?: Number): Point
  // Returns the reverse transformation of the given point, optionally divided
  // by the given scale. Only accepts actual `L.Point` instances, not arrays.
  untransform: function untransform(point, scale) {
    scale = scale || 1;
    return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
  }
}; // factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

function toTransformation(a, b, c, d) {
  return new Transformation(a, b, c, d);
}
/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */


var EPSG3857 = extend({}, Earth, {
  code: 'EPSG:3857',
  projection: SphericalMercator,
  transformation: function () {
    var scale = 0.5 / (Math.PI * SphericalMercator.R);
    return toTransformation(scale, 0.5, -scale, 0.5);
  }()
});
var EPSG900913 = extend({}, EPSG3857, {
  code: 'EPSG:900913'
}); // @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).

function svgCreate(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
} // @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions


function pointsToPath(rings, closed) {
  var str = '',
      i,
      j,
      len,
      len2,
      points,
      p;

  for (i = 0, len = rings.length; i < len; i++) {
    points = rings[i];

    for (j = 0, len2 = points.length; j < len2; j++) {
      p = points[j];
      str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
    } // closes the ring for polygons; "x" is VML syntax


    str += closed ? svg ? 'z' : 'x' : '';
  } // SVG complains about empty path strings


  return str || 'M0 0';
}
/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */


var style$1 = document.documentElement.style; // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).

var ie = ('ActiveXObject' in window); // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.

var ielt9 = ie && !document.addEventListener; // @property edge: Boolean; `true` for the Edge web browser.

var edge = 'msLaunchUri' in navigator && !('documentMode' in document); // @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).

var webkit = userAgentContains('webkit'); // @property android: Boolean
// `true` for any browser running on an Android platform.

var android = userAgentContains('android'); // @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.

var android23 = userAgentContains('android 2') || userAgentContains('android 3');
/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */

var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
// @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)

var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window); // @property opera: Boolean; `true` for the Opera browser

var opera = !!window.opera; // @property chrome: Boolean; `true` for the Chrome browser.

var chrome = userAgentContains('chrome'); // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.

var gecko = userAgentContains('gecko') && !webkit && !opera && !ie; // @property safari: Boolean; `true` for the Safari browser.

var safari = !chrome && userAgentContains('safari');
var phantom = userAgentContains('phantom'); // @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).

var opera12 = ('OTransition' in style$1); // @property win: Boolean; `true` when the browser is running in a Windows platform

var win = navigator.platform.indexOf('Win') === 0; // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.

var ie3d = ie && 'transition' in style$1; // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.

var webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23; // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.

var gecko3d = ('MozPerspective' in style$1); // @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.

var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom; // @property mobile: Boolean; `true` for all browsers running in a mobile device.

var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile'); // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.

var mobileWebkit = mobile && webkit; // @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.

var mobileWebkit3d = mobile && webkit3d; // @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).

var msPointer = !window.PointerEvent && window.MSPointerEvent; // @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).

var pointer = !!(window.PointerEvent || msPointer); // @property touch: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// This does not necessarily mean that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.

var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch); // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.

var mobileOpera = mobile && opera; // @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.

var mobileGecko = mobile && gecko; // @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.

var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1; // @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).

var canvas = function () {
  return !!document.createElement('canvas').getContext;
}(); // @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).


var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect); // @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).

var vml = !svg && function () {
  try {
    var div = document.createElement('div');
    div.innerHTML = '<v:shape adj="1"/>';
    var shape = div.firstChild;
    shape.style.behavior = 'url(#default#VML)';
    return shape && typeof_default()(shape.adj) === 'object';
  } catch (e) {
    return false;
  }
}();

function userAgentContains(str) {
  return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}

var Browser = (Object.freeze || Object)({
  ie: ie,
  ielt9: ielt9,
  edge: edge,
  webkit: webkit,
  android: android,
  android23: android23,
  androidStock: androidStock,
  opera: opera,
  chrome: chrome,
  gecko: gecko,
  safari: safari,
  phantom: phantom,
  opera12: opera12,
  win: win,
  ie3d: ie3d,
  webkit3d: webkit3d,
  gecko3d: gecko3d,
  any3d: any3d,
  mobile: mobile,
  mobileWebkit: mobileWebkit,
  mobileWebkit3d: mobileWebkit3d,
  msPointer: msPointer,
  pointer: pointer,
  touch: touch,
  mobileOpera: mobileOpera,
  mobileGecko: mobileGecko,
  retina: retina,
  canvas: canvas,
  svg: svg,
  vml: vml
});
/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */

var POINTER_DOWN = msPointer ? 'MSPointerDown' : 'pointerdown';
var POINTER_MOVE = msPointer ? 'MSPointerMove' : 'pointermove';
var POINTER_UP = msPointer ? 'MSPointerUp' : 'pointerup';
var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
var _pointers = {};
var _pointerDocListener = false; // DomEvent.DoubleTap needs to know about this

var _pointersCount = 0; // Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

function addPointerListener(obj, type, handler, id) {
  if (type === 'touchstart') {
    _addPointerStart(obj, handler, id);
  } else if (type === 'touchmove') {
    _addPointerMove(obj, handler, id);
  } else if (type === 'touchend') {
    _addPointerEnd(obj, handler, id);
  }

  return this;
}

function removePointerListener(obj, type, id) {
  var handler = obj['_leaflet_' + type + id];

  if (type === 'touchstart') {
    obj.removeEventListener(POINTER_DOWN, handler, false);
  } else if (type === 'touchmove') {
    obj.removeEventListener(POINTER_MOVE, handler, false);
  } else if (type === 'touchend') {
    obj.removeEventListener(POINTER_UP, handler, false);
    obj.removeEventListener(POINTER_CANCEL, handler, false);
  }

  return this;
}

function _addPointerStart(obj, handler, id) {
  var onDown = bind(function (e) {
    if (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      // In IE11, some touch events needs to fire for form controls, or
      // the controls will stop working. We keep a whitelist of tag names that
      // need these events. For other target tags, we prevent default on the event.
      if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
        preventDefault(e);
      } else {
        return;
      }
    }

    _handlePointer(e, handler);
  });
  obj['_leaflet_touchstart' + id] = onDown;
  obj.addEventListener(POINTER_DOWN, onDown, false); // need to keep track of what pointers and how many are active to provide e.touches emulation

  if (!_pointerDocListener) {
    // we listen documentElement as any drags that end by moving the touch off the screen get fired there
    document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
    document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
    document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
    document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
    _pointerDocListener = true;
  }
}

function _globalPointerDown(e) {
  _pointers[e.pointerId] = e;
  _pointersCount++;
}

function _globalPointerMove(e) {
  if (_pointers[e.pointerId]) {
    _pointers[e.pointerId] = e;
  }
}

function _globalPointerUp(e) {
  delete _pointers[e.pointerId];
  _pointersCount--;
}

function _handlePointer(e, handler) {
  e.touches = [];

  for (var i in _pointers) {
    e.touches.push(_pointers[i]);
  }

  e.changedTouches = [e];
  handler(e);
}

function _addPointerMove(obj, handler, id) {
  var onMove = function onMove(e) {
    // don't fire touch moves when mouse isn't down
    if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
      return;
    }

    _handlePointer(e, handler);
  };

  obj['_leaflet_touchmove' + id] = onMove;
  obj.addEventListener(POINTER_MOVE, onMove, false);
}

function _addPointerEnd(obj, handler, id) {
  var onUp = function onUp(e) {
    _handlePointer(e, handler);
  };

  obj['_leaflet_touchend' + id] = onUp;
  obj.addEventListener(POINTER_UP, onUp, false);
  obj.addEventListener(POINTER_CANCEL, onUp, false);
}
/*
 * Extends the event handling code with double tap support for mobile browsers.
 */


var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';

var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';

var _pre = '_leaflet_'; // inspired by Zepto touch code by Thomas Fuchs

function addDoubleTapListener(obj, handler, id) {
  var last,
      touch$$1,
      doubleTap = false,
      delay = 250;

  function onTouchStart(e) {
    var count;

    if (pointer) {
      if (!edge || e.pointerType === 'mouse') {
        return;
      }

      count = _pointersCount;
    } else {
      count = e.touches.length;
    }

    if (count > 1) {
      return;
    }

    var now = Date.now(),
        delta = now - (last || now);
    touch$$1 = e.touches ? e.touches[0] : e;
    doubleTap = delta > 0 && delta <= delay;
    last = now;
  }

  function onTouchEnd(e) {
    if (doubleTap && !touch$$1.cancelBubble) {
      if (pointer) {
        if (!edge || e.pointerType === 'mouse') {
          return;
        } // work around .type being readonly with MSPointer* events


        var newTouch = {},
            prop,
            i;

        for (i in touch$$1) {
          prop = touch$$1[i];
          newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
        }

        touch$$1 = newTouch;
      }

      touch$$1.type = 'dblclick';
      handler(touch$$1);
      last = null;
    }
  }

  obj[_pre + _touchstart + id] = onTouchStart;
  obj[_pre + _touchend + id] = onTouchEnd;
  obj[_pre + 'dblclick' + id] = handler;
  obj.addEventListener(_touchstart, onTouchStart, false);
  obj.addEventListener(_touchend, onTouchEnd, false); // On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
  // the browser doesn't fire touchend/pointerup events but does fire
  // native dblclicks. See #4127.
  // Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.

  obj.addEventListener('dblclick', handler, false);
  return this;
}

function removeDoubleTapListener(obj, id) {
  var touchstart = obj[_pre + _touchstart + id],
      touchend = obj[_pre + _touchend + id],
      dblclick = obj[_pre + 'dblclick' + id];
  obj.removeEventListener(_touchstart, touchstart, false);
  obj.removeEventListener(_touchend, touchend, false);

  if (!edge) {
    obj.removeEventListener('dblclick', dblclick, false);
  }

  return this;
}
/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */
// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).


var TRANSFORM = testProp(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']); // webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser
// @property TRANSITION: String
// Vendor-prefixed transition style name.

var TRANSITION = testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']); // @property TRANSITION_END: String
// Vendor-prefixed transitionend event name.

var TRANSITION_END = TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend'; // @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.

function leaflet_get(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
} // @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.


function getStyle(el, style) {
  var value = el.style[style] || el.currentStyle && el.currentStyle[style];

  if ((!value || value === 'auto') && document.defaultView) {
    var css = document.defaultView.getComputedStyle(el, null);
    value = css ? css[style] : null;
  }

  return value === 'auto' ? null : value;
} // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.


function create$1(tagName, className, container) {
  var el = document.createElement(tagName);
  el.className = className || '';

  if (container) {
    container.appendChild(el);
  }

  return el;
} // @function remove(el: HTMLElement)
// Removes `el` from its parent element


function remove(el) {
  var parent = el.parentNode;

  if (parent) {
    parent.removeChild(el);
  }
} // @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`


function empty(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
} // @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.


function toFront(el) {
  var parent = el.parentNode;

  if (parent.lastChild !== el) {
    parent.appendChild(el);
  }
} // @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.


function toBack(el) {
  var parent = el.parentNode;

  if (parent.firstChild !== el) {
    parent.insertBefore(el, parent.firstChild);
  }
} // @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.


function hasClass(el, name) {
  if (el.classList !== undefined) {
    return el.classList.contains(name);
  }

  var className = getClass(el);
  return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
} // @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.


function addClass(el, name) {
  if (el.classList !== undefined) {
    var classes = splitWords(name);

    for (var i = 0, len = classes.length; i < len; i++) {
      el.classList.add(classes[i]);
    }
  } else if (!hasClass(el, name)) {
    var className = getClass(el);
    setClass(el, (className ? className + ' ' : '') + name);
  }
} // @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.


function removeClass(el, name) {
  if (el.classList !== undefined) {
    el.classList.remove(name);
  } else {
    setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
  }
} // @function setClass(el: HTMLElement, name: String)
// Sets the element's class.


function setClass(el, name) {
  if (el.className.baseVal === undefined) {
    el.className = name;
  } else {
    // in case of SVG element
    el.className.baseVal = name;
  }
} // @function getClass(el: HTMLElement): String
// Returns the element's class.


function getClass(el) {
  return el.className.baseVal === undefined ? el.className : el.className.baseVal;
} // @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.


function setOpacity(el, value) {
  if ('opacity' in el.style) {
    el.style.opacity = value;
  } else if ('filter' in el.style) {
    _setOpacityIE(el, value);
  }
}

function _setOpacityIE(el, value) {
  var filter = false,
      filterName = 'DXImageTransform.Microsoft.Alpha'; // filters collection throws an error if we try to retrieve a filter that doesn't exist

  try {
    filter = el.filters.item(filterName);
  } catch (e) {
    // don't set opacity to 1 if we haven't already set an opacity,
    // it isn't needed and breaks transparent pngs.
    if (value === 1) {
      return;
    }
  }

  value = Math.round(value * 100);

  if (filter) {
    filter.Enabled = value !== 100;
    filter.Opacity = value;
  } else {
    el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
  }
} // @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.


function testProp(props) {
  var style = document.documentElement.style;

  for (var i = 0; i < props.length; i++) {
    if (props[i] in style) {
      return props[i];
    }
  }

  return false;
} // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.


function setTransform(el, offset, scale) {
  var pos = offset || new Point(0, 0);
  el.style[TRANSFORM] = (ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
} // @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).


function setPosition(el, point) {
  /*eslint-disable */
  el._leaflet_pos = point;
  /* eslint-enable */

  if (any3d) {
    setTransform(el, point);
  } else {
    el.style.left = point.x + 'px';
    el.style.top = point.y + 'px';
  }
} // @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.


function getPosition(el) {
  // this method is only used for elements previously positioned using setPosition,
  // so it's safe to cache the position for performance
  return el._leaflet_pos || new Point(0, 0);
} // @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.
// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).


var disableTextSelection;
var enableTextSelection;

var _userSelect;

if ('onselectstart' in document) {
  disableTextSelection = function disableTextSelection() {
    leaflet_on(window, 'selectstart', preventDefault);
  };

  enableTextSelection = function enableTextSelection() {
    leaflet_off(window, 'selectstart', preventDefault);
  };
} else {
  var userSelectProperty = testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

  disableTextSelection = function disableTextSelection() {
    if (userSelectProperty) {
      var style = document.documentElement.style;
      _userSelect = style[userSelectProperty];
      style[userSelectProperty] = 'none';
    }
  };

  enableTextSelection = function enableTextSelection() {
    if (userSelectProperty) {
      document.documentElement.style[userSelectProperty] = _userSelect;
      _userSelect = undefined;
    }
  };
} // @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.


function disableImageDrag() {
  leaflet_on(window, 'dragstart', preventDefault);
} // @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).


function enableImageDrag() {
  leaflet_off(window, 'dragstart', preventDefault);
}

var _outlineElement;

var _outlineStyle; // @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.


function preventOutline(element) {
  while (element.tabIndex === -1) {
    element = element.parentNode;
  }

  if (!element.style) {
    return;
  }

  restoreOutline();
  _outlineElement = element;
  _outlineStyle = element.style.outline;
  element.style.outline = 'none';
  leaflet_on(window, 'keydown', restoreOutline);
} // @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().


function restoreOutline() {
  if (!_outlineElement) {
    return;
  }

  _outlineElement.style.outline = _outlineStyle;
  _outlineElement = undefined;
  _outlineStyle = undefined;
  leaflet_off(window, 'keydown', restoreOutline);
} // @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.


function getSizedParentNode(element) {
  do {
    element = element.parentNode;
  } while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);

  return element;
} // @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).


function getScale(element) {
  var rect = element.getBoundingClientRect(); // Read-only in old browsers.

  return {
    x: rect.width / element.offsetWidth || 1,
    y: rect.height / element.offsetHeight || 1,
    boundingClientRect: rect
  };
}

var DomUtil = (Object.freeze || Object)({
  TRANSFORM: TRANSFORM,
  TRANSITION: TRANSITION,
  TRANSITION_END: TRANSITION_END,
  get: leaflet_get,
  getStyle: getStyle,
  create: create$1,
  remove: remove,
  empty: empty,
  toFront: toFront,
  toBack: toBack,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  setClass: setClass,
  getClass: getClass,
  setOpacity: setOpacity,
  testProp: testProp,
  setTransform: setTransform,
  setPosition: setPosition,
  getPosition: getPosition,
  disableTextSelection: disableTextSelection,
  enableTextSelection: enableTextSelection,
  disableImageDrag: disableImageDrag,
  enableImageDrag: enableImageDrag,
  preventOutline: preventOutline,
  restoreOutline: restoreOutline,
  getSizedParentNode: getSizedParentNode,
  getScale: getScale
});
/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */
// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

function leaflet_on(obj, types, fn, context) {
  if (typeof_default()(types) === 'object') {
    for (var type in types) {
      addOne(obj, type, types[type], fn);
    }
  } else {
    types = splitWords(types);

    for (var i = 0, len = types.length; i < len; i++) {
      addOne(obj, types[i], fn, context);
    }
  }

  return this;
}

var eventsKey = '_leaflet_events'; // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

function leaflet_off(obj, types, fn, context) {
  if (typeof_default()(types) === 'object') {
    for (var type in types) {
      removeOne(obj, type, types[type], fn);
    }
  } else if (types) {
    types = splitWords(types);

    for (var i = 0, len = types.length; i < len; i++) {
      removeOne(obj, types[i], fn, context);
    }
  } else {
    for (var j in obj[eventsKey]) {
      removeOne(obj, j, obj[eventsKey][j]);
    }

    delete obj[eventsKey];
  }

  return this;
}

function addOne(obj, type, fn, context) {
  var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

  if (obj[eventsKey] && obj[eventsKey][id]) {
    return this;
  }

  var handler = function handler(e) {
    return fn.call(context || obj, e || window.event);
  };

  var originalHandler = handler;

  if (pointer && type.indexOf('touch') === 0) {
    // Needs DomEvent.Pointer.js
    addPointerListener(obj, type, handler, id);
  } else if (touch && type === 'dblclick' && addDoubleTapListener && !(pointer && chrome)) {
    // Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
    // See #5180
    addDoubleTapListener(obj, handler, id);
  } else if ('addEventListener' in obj) {
    if (type === 'mousewheel') {
      obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
    } else if (type === 'mouseenter' || type === 'mouseleave') {
      handler = function handler(e) {
        e = e || window.event;

        if (isExternalTarget(obj, e)) {
          originalHandler(e);
        }
      };

      obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
    } else {
      if (type === 'click' && android) {
        handler = function handler(e) {
          filterClick(e, originalHandler);
        };
      }

      obj.addEventListener(type, handler, false);
    }
  } else if ('attachEvent' in obj) {
    obj.attachEvent('on' + type, handler);
  }

  obj[eventsKey] = obj[eventsKey] || {};
  obj[eventsKey][id] = handler;
}

function removeOne(obj, type, fn, context) {
  var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
      handler = obj[eventsKey] && obj[eventsKey][id];

  if (!handler) {
    return this;
  }

  if (pointer && type.indexOf('touch') === 0) {
    removePointerListener(obj, type, id);
  } else if (touch && type === 'dblclick' && removeDoubleTapListener && !(pointer && chrome)) {
    removeDoubleTapListener(obj, id);
  } else if ('removeEventListener' in obj) {
    if (type === 'mousewheel') {
      obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
    } else {
      obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type, handler, false);
    }
  } else if ('detachEvent' in obj) {
    obj.detachEvent('on' + type, handler);
  }

  obj[eventsKey][id] = null;
} // @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```


function stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (e.originalEvent) {
    // In case of Leaflet event.
    e.originalEvent._stopped = true;
  } else {
    e.cancelBubble = true;
  }

  skipped(e);
  return this;
} // @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).


function disableScrollPropagation(el) {
  addOne(el, 'mousewheel', stopPropagation);
  return this;
} // @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).


function disableClickPropagation(el) {
  leaflet_on(el, 'mousedown touchstart dblclick', stopPropagation);
  addOne(el, 'click', fakeStop);
  return this;
} // @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.


function preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }

  return this;
} // @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.


function stop(e) {
  preventDefault(e);
  stopPropagation(e);
  return this;
} // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.


function getMousePosition(e, container) {
  if (!container) {
    return new Point(e.clientX, e.clientY);
  }

  var scale = getScale(container),
      offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

  return new Point( // offset.left/top values are in page scale (like clientX/Y),
  // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
  (e.clientX - offset.left) / scale.x - container.clientLeft, (e.clientY - offset.top) / scale.y - container.clientTop);
} // Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels


var wheelPxFactor = win && chrome ? 2 * window.devicePixelRatio : gecko ? window.devicePixelRatio : 1; // @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.

function getWheelDelta(e) {
  return edge ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
  e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : // Pixels
  e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : // Lines
  e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : // Pages
  e.deltaX || e.deltaZ ? 0 : // Skip horizontal/depth wheel events
  e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
  e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : // Legacy Moz lines
  e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
  0;
}

var skipEvents = {};

function fakeStop(e) {
  // fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
  skipEvents[e.type] = true;
}

function skipped(e) {
  var events = skipEvents[e.type]; // reset when checking, as it's only used in map container and propagates outside of the map

  skipEvents[e.type] = false;
  return events;
} // check if element really left/entered the event target (for mouseenter/mouseleave)


function isExternalTarget(el, e) {
  var related = e.relatedTarget;

  if (!related) {
    return true;
  }

  try {
    while (related && related !== el) {
      related = related.parentNode;
    }
  } catch (err) {
    return false;
  }

  return related !== el;
}

var lastClick; // this is a horrible workaround for a bug in Android where a single touch triggers two click events

function filterClick(e, handler) {
  var timeStamp = e.timeStamp || e.originalEvent && e.originalEvent.timeStamp,
      elapsed = lastClick && timeStamp - lastClick; // are they closer together than 500ms yet more than 100ms?
  // Android typically triggers them ~300ms apart while multiple listeners
  // on the same event should be triggered far faster;
  // or check if click is simulated on the element, and if it is, reject any non-simulated events

  if (elapsed && elapsed > 100 && elapsed < 500 || e.target._simulatedClick && !e._simulated) {
    stop(e);
    return;
  }

  lastClick = timeStamp;
  handler(e);
}

var DomEvent = (Object.freeze || Object)({
  on: leaflet_on,
  off: leaflet_off,
  stopPropagation: stopPropagation,
  disableScrollPropagation: disableScrollPropagation,
  disableClickPropagation: disableClickPropagation,
  preventDefault: preventDefault,
  stop: stop,
  getMousePosition: getMousePosition,
  getWheelDelta: getWheelDelta,
  fakeStop: fakeStop,
  skipped: skipped,
  isExternalTarget: isExternalTarget,
  addListener: leaflet_on,
  removeListener: leaflet_off
});
/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */

var PosAnimation = Evented.extend({
  // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
  // Run an animation of a given element to a new position, optionally setting
  // duration in seconds (`0.25` by default) and easing linearity factor (3rd
  // argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
  // `0.5` by default).
  run: function run(el, newPos, duration, easeLinearity) {
    this.stop();
    this._el = el;
    this._inProgress = true;
    this._duration = duration || 0.25;
    this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
    this._startPos = getPosition(el);
    this._offset = newPos.subtract(this._startPos);
    this._startTime = +new Date(); // @event start: Event
    // Fired when the animation starts

    this.fire('start');

    this._animate();
  },
  // @method stop()
  // Stops the animation (if currently running).
  stop: function stop() {
    if (!this._inProgress) {
      return;
    }

    this._step(true);

    this._complete();
  },
  _animate: function _animate() {
    // animation loop
    this._animId = requestAnimFrame(this._animate, this);

    this._step();
  },
  _step: function _step(round) {
    var elapsed = +new Date() - this._startTime,
        duration = this._duration * 1000;

    if (elapsed < duration) {
      this._runFrame(this._easeOut(elapsed / duration), round);
    } else {
      this._runFrame(1);

      this._complete();
    }
  },
  _runFrame: function _runFrame(progress, round) {
    var pos = this._startPos.add(this._offset.multiplyBy(progress));

    if (round) {
      pos._round();
    }

    setPosition(this._el, pos); // @event step: Event
    // Fired continuously during the animation.

    this.fire('step');
  },
  _complete: function _complete() {
    cancelAnimFrame(this._animId);
    this._inProgress = false; // @event end: Event
    // Fired when the animation ends.

    this.fire('end');
  },
  _easeOut: function _easeOut(t) {
    return 1 - Math.pow(1 - t, this._easeOutPower);
  }
});
/*
    L.Handler is a base class for handler classes that are used internally to inject
    interaction features like dragging to classes like Map and Marker.
*/
// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

var Handler = Class.extend({
  initialize: function initialize(map) {
    this._map = map;
  },
  // @method enable(): this
  // Enables the handler
  enable: function enable() {
    if (this._enabled) {
      return this;
    }

    this._enabled = true;
    this.addHooks();
    return this;
  },
  // @method disable(): this
  // Disables the handler
  disable: function disable() {
    if (!this._enabled) {
      return this;
    }

    this._enabled = false;
    this.removeHooks();
    return this;
  },
  // @method enabled(): Boolean
  // Returns `true` if the handler is enabled
  enabled: function enabled() {
    return !!this._enabled;
  } // @section Extension methods
  // Classes inheriting from `Handler` must implement the two following methods:
  // @method addHooks()
  // Called when the handler is enabled, should add event hooks.
  // @method removeHooks()
  // Called when the handler is disabled, should remove the event hooks added previously.

}); // @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.

Handler.addTo = function (map, name) {
  map.addHandler(name, this);
  return this;
};

var Mixin = {
  Events: Events
};
/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */

var START = touch ? 'touchstart mousedown' : 'mousedown';
var END = {
  mousedown: 'mouseup',
  touchstart: 'touchend',
  pointerdown: 'touchend',
  MSPointerDown: 'touchend'
};
var MOVE = {
  mousedown: 'mousemove',
  touchstart: 'touchmove',
  pointerdown: 'touchmove',
  MSPointerDown: 'touchmove'
};
var Draggable = Evented.extend({
  options: {
    // @section
    // @aka Draggable options
    // @option clickTolerance: Number = 3
    // The max number of pixels a user can shift the mouse pointer during a click
    // for it to be considered a valid click (as opposed to a mouse drag).
    clickTolerance: 3
  },
  // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
  // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
  initialize: function initialize(element, dragStartTarget, preventOutline$$1, options) {
    setOptions(this, options);
    this._element = element;
    this._dragStartTarget = dragStartTarget || element;
    this._preventOutline = preventOutline$$1;
  },
  // @method enable()
  // Enables the dragging ability
  enable: function enable() {
    if (this._enabled) {
      return;
    }

    leaflet_on(this._dragStartTarget, START, this._onDown, this);
    this._enabled = true;
  },
  // @method disable()
  // Disables the dragging ability
  disable: function disable() {
    if (!this._enabled) {
      return;
    } // If we're currently dragging this draggable,
    // disabling it counts as first ending the drag.


    if (Draggable._dragging === this) {
      this.finishDrag();
    }

    leaflet_off(this._dragStartTarget, START, this._onDown, this);
    this._enabled = false;
    this._moved = false;
  },
  _onDown: function _onDown(e) {
    // Ignore simulated events, since we handle both touch and
    // mouse explicitly; otherwise we risk getting duplicates of
    // touch events, see #4315.
    // Also ignore the event if disabled; this happens in IE11
    // under some circumstances, see #3666.
    if (e._simulated || !this._enabled) {
      return;
    }

    this._moved = false;

    if (hasClass(this._element, 'leaflet-zoom-anim')) {
      return;
    }

    if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
      return;
    }

    Draggable._dragging = this; // Prevent dragging multiple objects at once.

    if (this._preventOutline) {
      preventOutline(this._element);
    }

    disableImageDrag();
    disableTextSelection();

    if (this._moving) {
      return;
    } // @event down: Event
    // Fired when a drag is about to start.


    this.fire('down');
    var first = e.touches ? e.touches[0] : e,
        sizedParent = getSizedParentNode(this._element);
    this._startPoint = new Point(first.clientX, first.clientY); // Cache the scale, so that we can continuously compensate for it during drag (_onMove).

    this._parentScale = getScale(sizedParent);
    leaflet_on(document, MOVE[e.type], this._onMove, this);
    leaflet_on(document, END[e.type], this._onUp, this);
  },
  _onMove: function _onMove(e) {
    // Ignore simulated events, since we handle both touch and
    // mouse explicitly; otherwise we risk getting duplicates of
    // touch events, see #4315.
    // Also ignore the event if disabled; this happens in IE11
    // under some circumstances, see #3666.
    if (e._simulated || !this._enabled) {
      return;
    }

    if (e.touches && e.touches.length > 1) {
      this._moved = true;
      return;
    }

    var first = e.touches && e.touches.length === 1 ? e.touches[0] : e,
        offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

    if (!offset.x && !offset.y) {
      return;
    }

    if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
      return;
    } // We assume that the parent container's position, border and scale do not change for the duration of the drag.
    // Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
    // and we can use the cached value for the scale.


    offset.x /= this._parentScale.x;
    offset.y /= this._parentScale.y;
    preventDefault(e);

    if (!this._moved) {
      // @event dragstart: Event
      // Fired when a drag starts
      this.fire('dragstart');
      this._moved = true;
      this._startPos = getPosition(this._element).subtract(offset);
      addClass(document.body, 'leaflet-dragging');
      this._lastTarget = e.target || e.srcElement; // IE and Edge do not give the <use> element, so fetch it
      // if necessary

      if (window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance) {
        this._lastTarget = this._lastTarget.correspondingUseElement;
      }

      addClass(this._lastTarget, 'leaflet-drag-target');
    }

    this._newPos = this._startPos.add(offset);
    this._moving = true;
    cancelAnimFrame(this._animRequest);
    this._lastEvent = e;
    this._animRequest = requestAnimFrame(this._updatePosition, this, true);
  },
  _updatePosition: function _updatePosition() {
    var e = {
      originalEvent: this._lastEvent
    }; // @event predrag: Event
    // Fired continuously during dragging *before* each corresponding
    // update of the element's position.

    this.fire('predrag', e);
    setPosition(this._element, this._newPos); // @event drag: Event
    // Fired continuously during dragging.

    this.fire('drag', e);
  },
  _onUp: function _onUp(e) {
    // Ignore simulated events, since we handle both touch and
    // mouse explicitly; otherwise we risk getting duplicates of
    // touch events, see #4315.
    // Also ignore the event if disabled; this happens in IE11
    // under some circumstances, see #3666.
    if (e._simulated || !this._enabled) {
      return;
    }

    this.finishDrag();
  },
  finishDrag: function finishDrag() {
    removeClass(document.body, 'leaflet-dragging');

    if (this._lastTarget) {
      removeClass(this._lastTarget, 'leaflet-drag-target');
      this._lastTarget = null;
    }

    for (var i in MOVE) {
      leaflet_off(document, MOVE[i], this._onMove, this);
      leaflet_off(document, END[i], this._onUp, this);
    }

    enableImageDrag();
    enableTextSelection();

    if (this._moved && this._moving) {
      // ensure drag is not fired after dragend
      cancelAnimFrame(this._animRequest); // @event dragend: DragEndEvent
      // Fired when the drag ends.

      this.fire('dragend', {
        distance: this._newPos.distanceTo(this._startPos)
      });
    }

    this._moving = false;
    Draggable._dragging = false;
  }
});
/*
 * @namespace LineUtil
 *
 * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
 */
// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).

function simplify(points, tolerance) {
  if (!tolerance || !points.length) {
    return points.slice();
  }

  var sqTolerance = tolerance * tolerance; // stage 1: vertex reduction

  points = _reducePoints(points, sqTolerance); // stage 2: Douglas-Peucker simplification

  points = _simplifyDP(points, sqTolerance);
  return points;
} // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.


function pointToSegmentDistance(p, p1, p2) {
  return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
} // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.


function closestPointOnSegment(p, p1, p2) {
  return _sqClosestPointOnSegment(p, p1, p2);
} // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm


function _simplifyDP(points, sqTolerance) {
  var len = points.length,
      ArrayConstructor = (typeof Uint8Array === "undefined" ? "undefined" : typeof_default()(Uint8Array)) !== undefined + '' ? Uint8Array : Array,
      markers = new ArrayConstructor(len);
  markers[0] = markers[len - 1] = 1;

  _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

  var i,
      newPoints = [];

  for (i = 0; i < len; i++) {
    if (markers[i]) {
      newPoints.push(points[i]);
    }
  }

  return newPoints;
}

function _simplifyDPStep(points, markers, sqTolerance, first, last) {
  var maxSqDist = 0,
      index,
      i,
      sqDist;

  for (i = first + 1; i <= last - 1; i++) {
    sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

    if (sqDist > maxSqDist) {
      index = i;
      maxSqDist = sqDist;
    }
  }

  if (maxSqDist > sqTolerance) {
    markers[index] = 1;

    _simplifyDPStep(points, markers, sqTolerance, first, index);

    _simplifyDPStep(points, markers, sqTolerance, index, last);
  }
} // reduce points that are too close to each other to a single point


function _reducePoints(points, sqTolerance) {
  var reducedPoints = [points[0]];

  for (var i = 1, prev = 0, len = points.length; i < len; i++) {
    if (_sqDist(points[i], points[prev]) > sqTolerance) {
      reducedPoints.push(points[i]);
      prev = i;
    }
  }

  if (prev < len - 1) {
    reducedPoints.push(points[len - 1]);
  }

  return reducedPoints;
}

var _lastCode; // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.


function clipSegment(a, b, bounds, useLastCode, round) {
  var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
      codeB = _getBitCode(b, bounds),
      codeOut,
      p,
      newCode; // save 2nd code to avoid calculating it on the next segment


  _lastCode = codeB;

  while (true) {
    // if a,b is inside the clip window (trivial accept)
    if (!(codeA | codeB)) {
      return [a, b];
    } // if a,b is outside the clip window (trivial reject)


    if (codeA & codeB) {
      return false;
    } // other cases


    codeOut = codeA || codeB;
    p = _getEdgeIntersection(a, b, codeOut, bounds, round);
    newCode = _getBitCode(p, bounds);

    if (codeOut === codeA) {
      a = p;
      codeA = newCode;
    } else {
      b = p;
      codeB = newCode;
    }
  }
}

function _getEdgeIntersection(a, b, code, bounds, round) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      min = bounds.min,
      max = bounds.max,
      x,
      y;

  if (code & 8) {
    // top
    x = a.x + dx * (max.y - a.y) / dy;
    y = max.y;
  } else if (code & 4) {
    // bottom
    x = a.x + dx * (min.y - a.y) / dy;
    y = min.y;
  } else if (code & 2) {
    // right
    x = max.x;
    y = a.y + dy * (max.x - a.x) / dx;
  } else if (code & 1) {
    // left
    x = min.x;
    y = a.y + dy * (min.x - a.x) / dx;
  }

  return new Point(x, y, round);
}

function _getBitCode(p, bounds) {
  var code = 0;

  if (p.x < bounds.min.x) {
    // left
    code |= 1;
  } else if (p.x > bounds.max.x) {
    // right
    code |= 2;
  }

  if (p.y < bounds.min.y) {
    // bottom
    code |= 4;
  } else if (p.y > bounds.max.y) {
    // top
    code |= 8;
  }

  return code;
} // square distance (to avoid unnecessary Math.sqrt calls)


function _sqDist(p1, p2) {
  var dx = p2.x - p1.x,
      dy = p2.y - p1.y;
  return dx * dx + dy * dy;
} // return closest point on segment or distance to that point


function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
  var x = p1.x,
      y = p1.y,
      dx = p2.x - x,
      dy = p2.y - y,
      dot = dx * dx + dy * dy,
      t;

  if (dot > 0) {
    t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

    if (t > 1) {
      x = p2.x;
      y = p2.y;
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }

  dx = p.x - x;
  dy = p.y - y;
  return sqDist ? dx * dx + dy * dy : new Point(x, y);
} // @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.


function isFlat(latlngs) {
  return !isArray(latlngs[0]) || typeof_default()(latlngs[0][0]) !== 'object' && typeof latlngs[0][0] !== 'undefined';
}

function _flat(latlngs) {
  console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
  return isFlat(latlngs);
}

var LineUtil = (Object.freeze || Object)({
  simplify: simplify,
  pointToSegmentDistance: pointToSegmentDistance,
  closestPointOnSegment: closestPointOnSegment,
  clipSegment: clipSegment,
  _getEdgeIntersection: _getEdgeIntersection,
  _getBitCode: _getBitCode,
  _sqClosestPointOnSegment: _sqClosestPointOnSegment,
  isFlat: isFlat,
  _flat: _flat
});
/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */

/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a separate method for it.
 */

function clipPolygon(points, bounds, round) {
  var clippedPoints,
      edges = [1, 4, 2, 8],
      i,
      j,
      k,
      a,
      b,
      len,
      edge,
      p;

  for (i = 0, len = points.length; i < len; i++) {
    points[i]._code = _getBitCode(points[i], bounds);
  } // for each edge (left, bottom, right, top)


  for (k = 0; k < 4; k++) {
    edge = edges[k];
    clippedPoints = [];

    for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
      a = points[i];
      b = points[j]; // if a is inside the clip window

      if (!(a._code & edge)) {
        // if b is outside the clip window (a->b goes out of screen)
        if (b._code & edge) {
          p = _getEdgeIntersection(b, a, edge, bounds, round);
          p._code = _getBitCode(p, bounds);
          clippedPoints.push(p);
        }

        clippedPoints.push(a); // else if b is inside the clip window (a->b enters the screen)
      } else if (!(b._code & edge)) {
        p = _getEdgeIntersection(b, a, edge, bounds, round);
        p._code = _getBitCode(p, bounds);
        clippedPoints.push(p);
      }
    }

    points = clippedPoints;
  }

  return points;
}

var PolyUtil = (Object.freeze || Object)({
  clipPolygon: clipPolygon
});
/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

var LonLat = {
  project: function project(latlng) {
    return new Point(latlng.lng, latlng.lat);
  },
  unproject: function unproject(point) {
    return new LatLng(point.y, point.x);
  },
  bounds: new Bounds([-180, -90], [180, 90])
};
/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
 */

var Mercator = {
  R: 6378137,
  R_MINOR: 6356752.314245179,
  bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
  project: function project(latlng) {
    var d = Math.PI / 180,
        r = this.R,
        y = latlng.lat * d,
        tmp = this.R_MINOR / r,
        e = Math.sqrt(1 - tmp * tmp),
        con = e * Math.sin(y);
    var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
    y = -r * Math.log(Math.max(ts, 1E-10));
    return new Point(latlng.lng * d * r, y);
  },
  unproject: function unproject(point) {
    var d = 180 / Math.PI,
        r = this.R,
        tmp = this.R_MINOR / r,
        e = Math.sqrt(1 - tmp * tmp),
        ts = Math.exp(-point.y / r),
        phi = Math.PI / 2 - 2 * Math.atan(ts);

    for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
      con = e * Math.sin(phi);
      con = Math.pow((1 - con) / (1 + con), e / 2);
      dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
      phi += dphi;
    }

    return new LatLng(phi * d, point.x * d / r);
  }
};
/*
 * @class Projection

 * An object with methods for projecting geographical coordinates of the world onto
 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

 * @property bounds: Bounds
 * The bounds (specified in CRS units) where the projection is valid

 * @method project(latlng: LatLng): Point
 * Projects geographical coordinates into a 2D point.
 * Only accepts actual `L.LatLng` instances, not arrays.

 * @method unproject(point: Point): LatLng
 * The inverse of `project`. Projects a 2D point into a geographical location.
 * Only accepts actual `L.Point` instances, not arrays.

 * Note that the projection instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.

 */

var index = (Object.freeze || Object)({
  LonLat: LonLat,
  Mercator: Mercator,
  SphericalMercator: SphericalMercator
});
/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */

var EPSG3395 = extend({}, Earth, {
  code: 'EPSG:3395',
  projection: Mercator,
  transformation: function () {
    var scale = 0.5 / (Math.PI * Mercator.R);
    return toTransformation(scale, 0.5, -scale, 0.5);
  }()
});
/*
 * @namespace CRS
 * @crs L.CRS.EPSG4326
 *
 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
 *
 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
 */

var EPSG4326 = extend({}, Earth, {
  code: 'EPSG:4326',
  projection: LonLat,
  transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
});
/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

var Simple = extend({}, CRS, {
  projection: LonLat,
  transformation: toTransformation(1, 0, -1, 0),
  scale: function scale(zoom) {
    return Math.pow(2, zoom);
  },
  zoom: function zoom(scale) {
    return Math.log(scale) / Math.LN2;
  },
  distance: function distance(latlng1, latlng2) {
    var dx = latlng2.lng - latlng1.lng,
        dy = latlng2.lat - latlng1.lat;
    return Math.sqrt(dx * dx + dy * dy);
  },
  infinite: true
});
CRS.Earth = Earth;
CRS.EPSG3395 = EPSG3395;
CRS.EPSG3857 = EPSG3857;
CRS.EPSG900913 = EPSG900913;
CRS.EPSG4326 = EPSG4326;
CRS.Simple = Simple;
/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.Marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */

var Layer = Evented.extend({
  // Classes extending `L.Layer` will inherit the following options:
  options: {
    // @option pane: String = 'overlayPane'
    // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
    pane: 'overlayPane',
    // @option attribution: String = null
    // String to be shown in the attribution control, describes the layer data, e.g. "© Mapbox".
    attribution: null,
    bubblingMouseEvents: true
  },

  /* @section
   * Classes extending `L.Layer` will inherit the following methods:
   *
   * @method addTo(map: Map|LayerGroup): this
   * Adds the layer to the given map or layer group.
   */
  addTo: function addTo(map) {
    map.addLayer(this);
    return this;
  },
  // @method remove: this
  // Removes the layer from the map it is currently active on.
  remove: function remove() {
    return this.removeFrom(this._map || this._mapToAdd);
  },
  // @method removeFrom(map: Map): this
  // Removes the layer from the given map
  removeFrom: function removeFrom(obj) {
    if (obj) {
      obj.removeLayer(this);
    }

    return this;
  },
  // @method getPane(name? : String): HTMLElement
  // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
  getPane: function getPane(name) {
    return this._map.getPane(name ? this.options[name] || name : this.options.pane);
  },
  addInteractiveTarget: function addInteractiveTarget(targetEl) {
    this._map._targets[stamp(targetEl)] = this;
    return this;
  },
  removeInteractiveTarget: function removeInteractiveTarget(targetEl) {
    delete this._map._targets[stamp(targetEl)];
    return this;
  },
  // @method getAttribution: String
  // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
  getAttribution: function getAttribution() {
    return this.options.attribution;
  },
  _layerAdd: function _layerAdd(e) {
    var map = e.target; // check in case layer gets added and then removed before the map is ready

    if (!map.hasLayer(this)) {
      return;
    }

    this._map = map;
    this._zoomAnimated = map._zoomAnimated;

    if (this.getEvents) {
      var events = this.getEvents();
      map.on(events, this);
      this.once('remove', function () {
        map.off(events, this);
      }, this);
    }

    this.onAdd(map);

    if (this.getAttribution && map.attributionControl) {
      map.attributionControl.addAttribution(this.getAttribution());
    }

    this.fire('add');
    map.fire('layeradd', {
      layer: this
    });
  }
});
/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */

/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */

var LayerGroup = Layer.extend({
  initialize: function initialize(layers, options) {
    setOptions(this, options);
    this._layers = {};
    var i, len;

    if (layers) {
      for (i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    }
  },
  // @method addLayer(layer: Layer): this
  // Adds the given layer to the group.
  addLayer: function addLayer(layer) {
    var id = this.getLayerId(layer);
    this._layers[id] = layer;

    if (this._map) {
      this._map.addLayer(layer);
    }

    return this;
  },
  // @method removeLayer(layer: Layer): this
  // Removes the given layer from the group.
  // @alternative
  // @method removeLayer(id: Number): this
  // Removes the layer with the given internal ID from the group.
  removeLayer: function removeLayer(layer) {
    var id = layer in this._layers ? layer : this.getLayerId(layer);

    if (this._map && this._layers[id]) {
      this._map.removeLayer(this._layers[id]);
    }

    delete this._layers[id];
    return this;
  },
  // @method hasLayer(layer: Layer): Boolean
  // Returns `true` if the given layer is currently added to the group.
  // @alternative
  // @method hasLayer(id: Number): Boolean
  // Returns `true` if the given internal ID is currently added to the group.
  hasLayer: function hasLayer(layer) {
    return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
  },
  // @method clearLayers(): this
  // Removes all the layers from the group.
  clearLayers: function clearLayers() {
    return this.eachLayer(this.removeLayer, this);
  },
  // @method invoke(methodName: String, …): this
  // Calls `methodName` on every layer contained in this group, passing any
  // additional parameters. Has no effect if the layers contained do not
  // implement `methodName`.
  invoke: function invoke(methodName) {
    var args = Array.prototype.slice.call(arguments, 1),
        i,
        layer;

    for (i in this._layers) {
      layer = this._layers[i];

      if (layer[methodName]) {
        layer[methodName].apply(layer, args);
      }
    }

    return this;
  },
  onAdd: function onAdd(map) {
    this.eachLayer(map.addLayer, map);
  },
  onRemove: function onRemove(map) {
    this.eachLayer(map.removeLayer, map);
  },
  // @method eachLayer(fn: Function, context?: Object): this
  // Iterates over the layers of the group, optionally specifying context of the iterator function.
  // ```js
  // group.eachLayer(function (layer) {
  // 	layer.bindPopup('Hello');
  // });
  // ```
  eachLayer: function eachLayer(method, context) {
    for (var i in this._layers) {
      method.call(context, this._layers[i]);
    }

    return this;
  },
  // @method getLayer(id: Number): Layer
  // Returns the layer with the given internal ID.
  getLayer: function getLayer(id) {
    return this._layers[id];
  },
  // @method getLayers(): Layer[]
  // Returns an array of all the layers added to the group.
  getLayers: function getLayers() {
    var layers = [];
    this.eachLayer(layers.push, layers);
    return layers;
  },
  // @method setZIndex(zIndex: Number): this
  // Calls `setZIndex` on every layer contained in this group, passing the z-index.
  setZIndex: function setZIndex(zIndex) {
    return this.invoke('setZIndex', zIndex);
  },
  // @method getLayerId(layer: Layer): Number
  // Returns the internal ID for a layer
  getLayerId: function getLayerId(layer) {
    return stamp(layer);
  }
}); // @factory L.layerGroup(layers?: Layer[], options?: Object)
// Create a layer group, optionally given an initial set of layers and an `options` object.

var layerGroup = function layerGroup(layers, options) {
  return new LayerGroup(layers, options);
};
/*
 * @class FeatureGroup
 * @aka L.FeatureGroup
 * @inherits LayerGroup
 *
 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
 * handler, it will handle events from any of the layers. This includes mouse events
 * and custom events.
 *  * Has `layeradd` and `layerremove` events
 *
 * @example
 *
 * ```js
 * L.featureGroup([marker1, marker2, polyline])
 * 	.bindPopup('Hello world!')
 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
 * 	.addTo(map);
 * ```
 */


var FeatureGroup = LayerGroup.extend({
  addLayer: function addLayer(layer) {
    if (this.hasLayer(layer)) {
      return this;
    }

    layer.addEventParent(this);
    LayerGroup.prototype.addLayer.call(this, layer); // @event layeradd: LayerEvent
    // Fired when a layer is added to this `FeatureGroup`

    return this.fire('layeradd', {
      layer: layer
    });
  },
  removeLayer: function removeLayer(layer) {
    if (!this.hasLayer(layer)) {
      return this;
    }

    if (layer in this._layers) {
      layer = this._layers[layer];
    }

    layer.removeEventParent(this);
    LayerGroup.prototype.removeLayer.call(this, layer); // @event layerremove: LayerEvent
    // Fired when a layer is removed from this `FeatureGroup`

    return this.fire('layerremove', {
      layer: layer
    });
  },
  // @method setStyle(style: Path options): this
  // Sets the given path options to each layer of the group that has a `setStyle` method.
  setStyle: function setStyle(style) {
    return this.invoke('setStyle', style);
  },
  // @method bringToFront(): this
  // Brings the layer group to the top of all other layers
  bringToFront: function bringToFront() {
    return this.invoke('bringToFront');
  },
  // @method bringToBack(): this
  // Brings the layer group to the back of all other layers
  bringToBack: function bringToBack() {
    return this.invoke('bringToBack');
  },
  // @method getBounds(): LatLngBounds
  // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
  getBounds: function getBounds() {
    var bounds = new LatLngBounds();

    for (var id in this._layers) {
      var layer = this._layers[id];
      bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
    }

    return bounds;
  }
}); // @factory L.featureGroup(layers: Layer[])
// Create a feature group, optionally given an initial set of layers.

var featureGroup = function featureGroup(layers) {
  return new FeatureGroup(layers);
};
/*
 * @class Icon
 * @aka L.Icon
 *
 * Represents an icon to provide when creating a marker.
 *
 * @example
 *
 * ```js
 * var myIcon = L.icon({
 *     iconUrl: 'my-icon.png',
 *     iconRetinaUrl: 'my-icon@2x.png',
 *     iconSize: [38, 95],
 *     iconAnchor: [22, 94],
 *     popupAnchor: [-3, -76],
 *     shadowUrl: 'my-icon-shadow.png',
 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
 *     shadowSize: [68, 95],
 *     shadowAnchor: [22, 94]
 * });
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
 *
 */


var Icon = Class.extend({
  /* @section
   * @aka Icon options
   *
   * @option iconUrl: String = null
   * **(required)** The URL to the icon image (absolute or relative to your script path).
   *
   * @option iconRetinaUrl: String = null
   * The URL to a retina sized version of the icon image (absolute or relative to your
   * script path). Used for Retina screen devices.
   *
   * @option iconSize: Point = null
   * Size of the icon image in pixels.
   *
   * @option iconAnchor: Point = null
   * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
   * will be aligned so that this point is at the marker's geographical location. Centered
   * by default if size is specified, also can be set in CSS with negative margins.
   *
   * @option popupAnchor: Point = [0, 0]
   * The coordinates of the point from which popups will "open", relative to the icon anchor.
   *
   * @option tooltipAnchor: Point = [0, 0]
   * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
   *
   * @option shadowUrl: String = null
   * The URL to the icon shadow image. If not specified, no shadow image will be created.
   *
   * @option shadowRetinaUrl: String = null
   *
   * @option shadowSize: Point = null
   * Size of the shadow image in pixels.
   *
   * @option shadowAnchor: Point = null
   * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
   * as iconAnchor if not specified).
   *
   * @option className: String = ''
   * A custom class name to assign to both icon and shadow images. Empty by default.
   */
  options: {
    popupAnchor: [0, 0],
    tooltipAnchor: [0, 0]
  },
  initialize: function initialize(options) {
    setOptions(this, options);
  },
  // @method createIcon(oldIcon?: HTMLElement): HTMLElement
  // Called internally when the icon has to be shown, returns a `<img>` HTML element
  // styled according to the options.
  createIcon: function createIcon(oldIcon) {
    return this._createIcon('icon', oldIcon);
  },
  // @method createShadow(oldIcon?: HTMLElement): HTMLElement
  // As `createIcon`, but for the shadow beneath it.
  createShadow: function createShadow(oldIcon) {
    return this._createIcon('shadow', oldIcon);
  },
  _createIcon: function _createIcon(name, oldIcon) {
    var src = this._getIconUrl(name);

    if (!src) {
      if (name === 'icon') {
        throw new Error('iconUrl not set in Icon options (see the docs).');
      }

      return null;
    }

    var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);

    this._setIconStyles(img, name);

    return img;
  },
  _setIconStyles: function _setIconStyles(img, name) {
    var options = this.options;
    var sizeOption = options[name + 'Size'];

    if (typeof sizeOption === 'number') {
      sizeOption = [sizeOption, sizeOption];
    }

    var size = toPoint(sizeOption),
        anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
    img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

    if (anchor) {
      img.style.marginLeft = -anchor.x + 'px';
      img.style.marginTop = -anchor.y + 'px';
    }

    if (size) {
      img.style.width = size.x + 'px';
      img.style.height = size.y + 'px';
    }
  },
  _createImg: function _createImg(src, el) {
    el = el || document.createElement('img');
    el.src = src;
    return el;
  },
  _getIconUrl: function _getIconUrl(name) {
    return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
  }
}); // @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.

function icon(options) {
  return new Icon(options);
}
/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */


var IconDefault = Icon.extend({
  options: {
    iconUrl: 'marker-icon.png',
    iconRetinaUrl: 'marker-icon-2x.png',
    shadowUrl: 'marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  },
  _getIconUrl: function _getIconUrl(name) {
    if (!IconDefault.imagePath) {
      // Deprecated, backwards-compatibility only
      IconDefault.imagePath = this._detectIconPath();
    } // @option imagePath: String
    // `Icon.Default` will try to auto-detect the location of the
    // blue icon images. If you are placing these images in a non-standard
    // way, set this option to point to the right path.


    return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
  },
  _detectIconPath: function _detectIconPath() {
    var el = create$1('div', 'leaflet-default-icon-path', document.body);
    var path = getStyle(el, 'background-image') || getStyle(el, 'backgroundImage'); // IE8

    document.body.removeChild(el);

    if (path === null || path.indexOf('url') !== 0) {
      path = '';
    } else {
      path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
    }

    return path;
  }
});
/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */

/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */

var MarkerDrag = Handler.extend({
  initialize: function initialize(marker) {
    this._marker = marker;
  },
  addHooks: function addHooks() {
    var icon = this._marker._icon;

    if (!this._draggable) {
      this._draggable = new Draggable(icon, icon, true);
    }

    this._draggable.on({
      dragstart: this._onDragStart,
      predrag: this._onPreDrag,
      drag: this._onDrag,
      dragend: this._onDragEnd
    }, this).enable();

    addClass(icon, 'leaflet-marker-draggable');
  },
  removeHooks: function removeHooks() {
    this._draggable.off({
      dragstart: this._onDragStart,
      predrag: this._onPreDrag,
      drag: this._onDrag,
      dragend: this._onDragEnd
    }, this).disable();

    if (this._marker._icon) {
      removeClass(this._marker._icon, 'leaflet-marker-draggable');
    }
  },
  moved: function moved() {
    return this._draggable && this._draggable._moved;
  },
  _adjustPan: function _adjustPan(e) {
    var marker = this._marker,
        map = marker._map,
        speed = this._marker.options.autoPanSpeed,
        padding = this._marker.options.autoPanPadding,
        iconPos = getPosition(marker._icon),
        bounds = map.getPixelBounds(),
        origin = map.getPixelOrigin();
    var panBounds = toBounds(bounds.min._subtract(origin).add(padding), bounds.max._subtract(origin).subtract(padding));

    if (!panBounds.contains(iconPos)) {
      // Compute incremental movement
      var movement = toPoint((Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x), (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)).multiplyBy(speed);
      map.panBy(movement, {
        animate: false
      });

      this._draggable._newPos._add(movement);

      this._draggable._startPos._add(movement);

      setPosition(marker._icon, this._draggable._newPos);

      this._onDrag(e);

      this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
    }
  },
  _onDragStart: function _onDragStart() {
    // @section Dragging events
    // @event dragstart: Event
    // Fired when the user starts dragging the marker.
    // @event movestart: Event
    // Fired when the marker starts moving (because of dragging).
    this._oldLatLng = this._marker.getLatLng();

    this._marker.closePopup().fire('movestart').fire('dragstart');
  },
  _onPreDrag: function _onPreDrag(e) {
    if (this._marker.options.autoPan) {
      cancelAnimFrame(this._panRequest);
      this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
    }
  },
  _onDrag: function _onDrag(e) {
    var marker = this._marker,
        shadow = marker._shadow,
        iconPos = getPosition(marker._icon),
        latlng = marker._map.layerPointToLatLng(iconPos); // update shadow position


    if (shadow) {
      setPosition(shadow, iconPos);
    }

    marker._latlng = latlng;
    e.latlng = latlng;
    e.oldLatLng = this._oldLatLng; // @event drag: Event
    // Fired repeatedly while the user drags the marker.

    marker.fire('move', e).fire('drag', e);
  },
  _onDragEnd: function _onDragEnd(e) {
    // @event dragend: DragEndEvent
    // Fired when the user stops dragging the marker.
    cancelAnimFrame(this._panRequest); // @event moveend: Event
    // Fired when the marker stops moving (because of dragging).

    delete this._oldLatLng;

    this._marker.fire('moveend').fire('dragend', e);
  }
});
/*
 * @class Marker
 * @inherits Interactive layer
 * @aka L.Marker
 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.marker([50.5, 30.5]).addTo(map);
 * ```
 */

var Marker = Layer.extend({
  // @section
  // @aka Marker options
  options: {
    // @option icon: Icon = *
    // Icon instance to use for rendering the marker.
    // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
    // If not specified, a common instance of `L.Icon.Default` is used.
    icon: new IconDefault(),
    // Option inherited from "Interactive layer" abstract class
    interactive: true,
    // @option keyboard: Boolean = true
    // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
    keyboard: true,
    // @option title: String = ''
    // Text for the browser tooltip that appear on marker hover (no tooltip by default).
    title: '',
    // @option alt: String = ''
    // Text for the `alt` attribute of the icon image (useful for accessibility).
    alt: '',
    // @option zIndexOffset: Number = 0
    // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
    zIndexOffset: 0,
    // @option opacity: Number = 1.0
    // The opacity of the marker.
    opacity: 1,
    // @option riseOnHover: Boolean = false
    // If `true`, the marker will get on top of others when you hover the mouse over it.
    riseOnHover: false,
    // @option riseOffset: Number = 250
    // The z-index offset used for the `riseOnHover` feature.
    riseOffset: 250,
    // @option pane: String = 'markerPane'
    // `Map pane` where the markers icon will be added.
    pane: 'markerPane',
    // @option bubblingMouseEvents: Boolean = false
    // When `true`, a mouse event on this marker will trigger the same event on the map
    // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
    bubblingMouseEvents: false,
    // @section Draggable marker options
    // @option draggable: Boolean = false
    // Whether the marker is draggable with mouse/touch or not.
    draggable: false,
    // @option autoPan: Boolean = false
    // Whether to pan the map when dragging this marker near its edge or not.
    autoPan: false,
    // @option autoPanPadding: Point = Point(50, 50)
    // Distance (in pixels to the left/right and to the top/bottom) of the
    // map edge to start panning the map.
    autoPanPadding: [50, 50],
    // @option autoPanSpeed: Number = 10
    // Number of pixels the map should pan by.
    autoPanSpeed: 10
  },

  /* @section
   *
   * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
   */
  initialize: function initialize(latlng, options) {
    setOptions(this, options);
    this._latlng = toLatLng(latlng);
  },
  onAdd: function onAdd(map) {
    this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

    if (this._zoomAnimated) {
      map.on('zoomanim', this._animateZoom, this);
    }

    this._initIcon();

    this.update();
  },
  onRemove: function onRemove(map) {
    if (this.dragging && this.dragging.enabled()) {
      this.options.draggable = true;
      this.dragging.removeHooks();
    }

    delete this.dragging;

    if (this._zoomAnimated) {
      map.off('zoomanim', this._animateZoom, this);
    }

    this._removeIcon();

    this._removeShadow();
  },
  getEvents: function getEvents() {
    return {
      zoom: this.update,
      viewreset: this.update
    };
  },
  // @method getLatLng: LatLng
  // Returns the current geographical position of the marker.
  getLatLng: function getLatLng() {
    return this._latlng;
  },
  // @method setLatLng(latlng: LatLng): this
  // Changes the marker position to the given point.
  setLatLng: function setLatLng(latlng) {
    var oldLatLng = this._latlng;
    this._latlng = toLatLng(latlng);
    this.update(); // @event move: Event
    // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.

    return this.fire('move', {
      oldLatLng: oldLatLng,
      latlng: this._latlng
    });
  },
  // @method setZIndexOffset(offset: Number): this
  // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
  setZIndexOffset: function setZIndexOffset(offset) {
    this.options.zIndexOffset = offset;
    return this.update();
  },
  // @method setIcon(icon: Icon): this
  // Changes the marker icon.
  setIcon: function setIcon(icon) {
    this.options.icon = icon;

    if (this._map) {
      this._initIcon();

      this.update();
    }

    if (this._popup) {
      this.bindPopup(this._popup, this._popup.options);
    }

    return this;
  },
  getElement: function getElement() {
    return this._icon;
  },
  update: function update() {
    if (this._icon && this._map) {
      var pos = this._map.latLngToLayerPoint(this._latlng).round();

      this._setPos(pos);
    }

    return this;
  },
  _initIcon: function _initIcon() {
    var options = this.options,
        classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
    var icon = options.icon.createIcon(this._icon),
        addIcon = false; // if we're not reusing the icon, remove the old one and init new one

    if (icon !== this._icon) {
      if (this._icon) {
        this._removeIcon();
      }

      addIcon = true;

      if (options.title) {
        icon.title = options.title;
      }

      if (icon.tagName === 'IMG') {
        icon.alt = options.alt || '';
      }
    }

    addClass(icon, classToAdd);

    if (options.keyboard) {
      icon.tabIndex = '0';
    }

    this._icon = icon;

    if (options.riseOnHover) {
      this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
    }

    var newShadow = options.icon.createShadow(this._shadow),
        addShadow = false;

    if (newShadow !== this._shadow) {
      this._removeShadow();

      addShadow = true;
    }

    if (newShadow) {
      addClass(newShadow, classToAdd);
      newShadow.alt = '';
    }

    this._shadow = newShadow;

    if (options.opacity < 1) {
      this._updateOpacity();
    }

    if (addIcon) {
      this.getPane().appendChild(this._icon);
    }

    this._initInteraction();

    if (newShadow && addShadow) {
      this.getPane('shadowPane').appendChild(this._shadow);
    }
  },
  _removeIcon: function _removeIcon() {
    if (this.options.riseOnHover) {
      this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
    }

    remove(this._icon);
    this.removeInteractiveTarget(this._icon);
    this._icon = null;
  },
  _removeShadow: function _removeShadow() {
    if (this._shadow) {
      remove(this._shadow);
    }

    this._shadow = null;
  },
  _setPos: function _setPos(pos) {
    setPosition(this._icon, pos);

    if (this._shadow) {
      setPosition(this._shadow, pos);
    }

    this._zIndex = pos.y + this.options.zIndexOffset;

    this._resetZIndex();
  },
  _updateZIndex: function _updateZIndex(offset) {
    this._icon.style.zIndex = this._zIndex + offset;
  },
  _animateZoom: function _animateZoom(opt) {
    var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

    this._setPos(pos);
  },
  _initInteraction: function _initInteraction() {
    if (!this.options.interactive) {
      return;
    }

    addClass(this._icon, 'leaflet-interactive');
    this.addInteractiveTarget(this._icon);

    if (MarkerDrag) {
      var draggable = this.options.draggable;

      if (this.dragging) {
        draggable = this.dragging.enabled();
        this.dragging.disable();
      }

      this.dragging = new MarkerDrag(this);

      if (draggable) {
        this.dragging.enable();
      }
    }
  },
  // @method setOpacity(opacity: Number): this
  // Changes the opacity of the marker.
  setOpacity: function setOpacity(opacity) {
    this.options.opacity = opacity;

    if (this._map) {
      this._updateOpacity();
    }

    return this;
  },
  _updateOpacity: function _updateOpacity() {
    var opacity = this.options.opacity;
    setOpacity(this._icon, opacity);

    if (this._shadow) {
      setOpacity(this._shadow, opacity);
    }
  },
  _bringToFront: function _bringToFront() {
    this._updateZIndex(this.options.riseOffset);
  },
  _resetZIndex: function _resetZIndex() {
    this._updateZIndex(0);
  },
  _getPopupAnchor: function _getPopupAnchor() {
    return this.options.icon.options.popupAnchor;
  },
  _getTooltipAnchor: function _getTooltipAnchor() {
    return this.options.icon.options.tooltipAnchor;
  }
}); // factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.

function marker(latlng, options) {
  return new Marker(latlng, options);
}
/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */


var Path = Layer.extend({
  // @section
  // @aka Path options
  options: {
    // @option stroke: Boolean = true
    // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
    stroke: true,
    // @option color: String = '#3388ff'
    // Stroke color
    color: '#3388ff',
    // @option weight: Number = 3
    // Stroke width in pixels
    weight: 3,
    // @option opacity: Number = 1.0
    // Stroke opacity
    opacity: 1,
    // @option lineCap: String= 'round'
    // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
    lineCap: 'round',
    // @option lineJoin: String = 'round'
    // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
    lineJoin: 'round',
    // @option dashArray: String = null
    // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
    dashArray: null,
    // @option dashOffset: String = null
    // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
    dashOffset: null,
    // @option fill: Boolean = depends
    // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
    fill: false,
    // @option fillColor: String = *
    // Fill color. Defaults to the value of the [`color`](#path-color) option
    fillColor: null,
    // @option fillOpacity: Number = 0.2
    // Fill opacity.
    fillOpacity: 0.2,
    // @option fillRule: String = 'evenodd'
    // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
    fillRule: 'evenodd',
    // className: '',
    // Option inherited from "Interactive layer" abstract class
    interactive: true,
    // @option bubblingMouseEvents: Boolean = true
    // When `true`, a mouse event on this path will trigger the same event on the map
    // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
    bubblingMouseEvents: true
  },
  beforeAdd: function beforeAdd(map) {
    // Renderer is set here because we need to call renderer.getEvents
    // before this.getEvents.
    this._renderer = map.getRenderer(this);
  },
  onAdd: function onAdd() {
    this._renderer._initPath(this);

    this._reset();

    this._renderer._addPath(this);
  },
  onRemove: function onRemove() {
    this._renderer._removePath(this);
  },
  // @method redraw(): this
  // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
  redraw: function redraw() {
    if (this._map) {
      this._renderer._updatePath(this);
    }

    return this;
  },
  // @method setStyle(style: Path options): this
  // Changes the appearance of a Path based on the options in the `Path options` object.
  setStyle: function setStyle(style) {
    setOptions(this, style);

    if (this._renderer) {
      this._renderer._updateStyle(this);
    }

    return this;
  },
  // @method bringToFront(): this
  // Brings the layer to the top of all path layers.
  bringToFront: function bringToFront() {
    if (this._renderer) {
      this._renderer._bringToFront(this);
    }

    return this;
  },
  // @method bringToBack(): this
  // Brings the layer to the bottom of all path layers.
  bringToBack: function bringToBack() {
    if (this._renderer) {
      this._renderer._bringToBack(this);
    }

    return this;
  },
  getElement: function getElement() {
    return this._path;
  },
  _reset: function _reset() {
    // defined in child classes
    this._project();

    this._update();
  },
  _clickTolerance: function _clickTolerance() {
    // used when doing hit detection for Canvas layers
    return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
  }
});
/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */

var CircleMarker = Path.extend({
  // @section
  // @aka CircleMarker options
  options: {
    fill: true,
    // @option radius: Number = 10
    // Radius of the circle marker, in pixels
    radius: 10
  },
  initialize: function initialize(latlng, options) {
    setOptions(this, options);
    this._latlng = toLatLng(latlng);
    this._radius = this.options.radius;
  },
  // @method setLatLng(latLng: LatLng): this
  // Sets the position of a circle marker to a new location.
  setLatLng: function setLatLng(latlng) {
    this._latlng = toLatLng(latlng);
    this.redraw();
    return this.fire('move', {
      latlng: this._latlng
    });
  },
  // @method getLatLng(): LatLng
  // Returns the current geographical position of the circle marker
  getLatLng: function getLatLng() {
    return this._latlng;
  },
  // @method setRadius(radius: Number): this
  // Sets the radius of a circle marker. Units are in pixels.
  setRadius: function setRadius(radius) {
    this.options.radius = this._radius = radius;
    return this.redraw();
  },
  // @method getRadius(): Number
  // Returns the current radius of the circle
  getRadius: function getRadius() {
    return this._radius;
  },
  setStyle: function setStyle(options) {
    var radius = options && options.radius || this._radius;
    Path.prototype.setStyle.call(this, options);
    this.setRadius(radius);
    return this;
  },
  _project: function _project() {
    this._point = this._map.latLngToLayerPoint(this._latlng);

    this._updateBounds();
  },
  _updateBounds: function _updateBounds() {
    var r = this._radius,
        r2 = this._radiusY || r,
        w = this._clickTolerance(),
        p = [r + w, r2 + w];

    this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
  },
  _update: function _update() {
    if (this._map) {
      this._updatePath();
    }
  },
  _updatePath: function _updatePath() {
    this._renderer._updateCircle(this);
  },
  _empty: function _empty() {
    return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
  },
  // Needed by the `Canvas` renderer for interactivity
  _containsPoint: function _containsPoint(p) {
    return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
  }
}); // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.

function circleMarker(latlng, options) {
  return new CircleMarker(latlng, options);
}
/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */


var Circle = CircleMarker.extend({
  initialize: function initialize(latlng, options, legacyOptions) {
    if (typeof options === 'number') {
      // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
      options = extend({}, legacyOptions, {
        radius: options
      });
    }

    setOptions(this, options);
    this._latlng = toLatLng(latlng);

    if (isNaN(this.options.radius)) {
      throw new Error('Circle radius cannot be NaN');
    } // @section
    // @aka Circle options
    // @option radius: Number; Radius of the circle, in meters.


    this._mRadius = this.options.radius;
  },
  // @method setRadius(radius: Number): this
  // Sets the radius of a circle. Units are in meters.
  setRadius: function setRadius(radius) {
    this._mRadius = radius;
    return this.redraw();
  },
  // @method getRadius(): Number
  // Returns the current radius of a circle. Units are in meters.
  getRadius: function getRadius() {
    return this._mRadius;
  },
  // @method getBounds(): LatLngBounds
  // Returns the `LatLngBounds` of the path.
  getBounds: function getBounds() {
    var half = [this._radius, this._radiusY || this._radius];
    return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
  },
  setStyle: Path.prototype.setStyle,
  _project: function _project() {
    var lng = this._latlng.lng,
        lat = this._latlng.lat,
        map = this._map,
        crs = map.options.crs;

    if (crs.distance === Earth.distance) {
      var d = Math.PI / 180,
          latR = this._mRadius / Earth.R / d,
          top = map.project([lat + latR, lng]),
          bottom = map.project([lat - latR, lng]),
          p = top.add(bottom).divideBy(2),
          lat2 = map.unproject(p).lat,
          lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

      if (isNaN(lngR) || lngR === 0) {
        lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
      }

      this._point = p.subtract(map.getPixelOrigin());
      this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
      this._radiusY = p.y - top.y;
    } else {
      var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
      this._point = map.latLngToLayerPoint(this._latlng);
      this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
    }

    this._updateBounds();
  }
}); // @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.

function circle(latlng, options, legacyOptions) {
  return new Circle(latlng, options, legacyOptions);
}
/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */


var Polyline = Path.extend({
  // @section
  // @aka Polyline options
  options: {
    // @option smoothFactor: Number = 1.0
    // How much to simplify the polyline on each zoom level. More means
    // better performance and smoother look, and less means more accurate representation.
    smoothFactor: 1.0,
    // @option noClip: Boolean = false
    // Disable polyline clipping.
    noClip: false
  },
  initialize: function initialize(latlngs, options) {
    setOptions(this, options);

    this._setLatLngs(latlngs);
  },
  // @method getLatLngs(): LatLng[]
  // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
  getLatLngs: function getLatLngs() {
    return this._latlngs;
  },
  // @method setLatLngs(latlngs: LatLng[]): this
  // Replaces all the points in the polyline with the given array of geographical points.
  setLatLngs: function setLatLngs(latlngs) {
    this._setLatLngs(latlngs);

    return this.redraw();
  },
  // @method isEmpty(): Boolean
  // Returns `true` if the Polyline has no LatLngs.
  isEmpty: function isEmpty() {
    return !this._latlngs.length;
  },
  // @method closestLayerPoint(p: Point): Point
  // Returns the point closest to `p` on the Polyline.
  closestLayerPoint: function closestLayerPoint(p) {
    var minDistance = Infinity,
        minPoint = null,
        closest = _sqClosestPointOnSegment,
        p1,
        p2;

    for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
      var points = this._parts[j];

      for (var i = 1, len = points.length; i < len; i++) {
        p1 = points[i - 1];
        p2 = points[i];
        var sqDist = closest(p, p1, p2, true);

        if (sqDist < minDistance) {
          minDistance = sqDist;
          minPoint = closest(p, p1, p2);
        }
      }
    }

    if (minPoint) {
      minPoint.distance = Math.sqrt(minDistance);
    }

    return minPoint;
  },
  // @method getCenter(): LatLng
  // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
  getCenter: function getCenter() {
    // throws error when not yet added to map as this center calculation requires projected coordinates
    if (!this._map) {
      throw new Error('Must add layer to map before using getCenter()');
    }

    var i,
        halfDist,
        segDist,
        dist,
        p1,
        p2,
        ratio,
        points = this._rings[0],
        len = points.length;

    if (!len) {
      return null;
    } // polyline centroid algorithm; only uses the first ring if there are multiple


    for (i = 0, halfDist = 0; i < len - 1; i++) {
      halfDist += points[i].distanceTo(points[i + 1]) / 2;
    } // The line is so small in the current view that all points are on the same pixel.


    if (halfDist === 0) {
      return this._map.layerPointToLatLng(points[0]);
    }

    for (i = 0, dist = 0; i < len - 1; i++) {
      p1 = points[i];
      p2 = points[i + 1];
      segDist = p1.distanceTo(p2);
      dist += segDist;

      if (dist > halfDist) {
        ratio = (dist - halfDist) / segDist;
        return this._map.layerPointToLatLng([p2.x - ratio * (p2.x - p1.x), p2.y - ratio * (p2.y - p1.y)]);
      }
    }
  },
  // @method getBounds(): LatLngBounds
  // Returns the `LatLngBounds` of the path.
  getBounds: function getBounds() {
    return this._bounds;
  },
  // @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
  // Adds a given point to the polyline. By default, adds to the first ring of
  // the polyline in case of a multi-polyline, but can be overridden by passing
  // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
  addLatLng: function addLatLng(latlng, latlngs) {
    latlngs = latlngs || this._defaultShape();
    latlng = toLatLng(latlng);
    latlngs.push(latlng);

    this._bounds.extend(latlng);

    return this.redraw();
  },
  _setLatLngs: function _setLatLngs(latlngs) {
    this._bounds = new LatLngBounds();
    this._latlngs = this._convertLatLngs(latlngs);
  },
  _defaultShape: function _defaultShape() {
    return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
  },
  // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
  _convertLatLngs: function _convertLatLngs(latlngs) {
    var result = [],
        flat = isFlat(latlngs);

    for (var i = 0, len = latlngs.length; i < len; i++) {
      if (flat) {
        result[i] = toLatLng(latlngs[i]);

        this._bounds.extend(result[i]);
      } else {
        result[i] = this._convertLatLngs(latlngs[i]);
      }
    }

    return result;
  },
  _project: function _project() {
    var pxBounds = new Bounds();
    this._rings = [];

    this._projectLatlngs(this._latlngs, this._rings, pxBounds);

    var w = this._clickTolerance(),
        p = new Point(w, w);

    if (this._bounds.isValid() && pxBounds.isValid()) {
      pxBounds.min._subtract(p);

      pxBounds.max._add(p);

      this._pxBounds = pxBounds;
    }
  },
  // recursively turns latlngs into a set of rings with projected coordinates
  _projectLatlngs: function _projectLatlngs(latlngs, result, projectedBounds) {
    var flat = latlngs[0] instanceof LatLng,
        len = latlngs.length,
        i,
        ring;

    if (flat) {
      ring = [];

      for (i = 0; i < len; i++) {
        ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
        projectedBounds.extend(ring[i]);
      }

      result.push(ring);
    } else {
      for (i = 0; i < len; i++) {
        this._projectLatlngs(latlngs[i], result, projectedBounds);
      }
    }
  },
  // clip polyline by renderer bounds so that we have less to render for performance
  _clipPoints: function _clipPoints() {
    var bounds = this._renderer._bounds;
    this._parts = [];

    if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
      return;
    }

    if (this.options.noClip) {
      this._parts = this._rings;
      return;
    }

    var parts = this._parts,
        i,
        j,
        k,
        len,
        len2,
        segment,
        points;

    for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
      points = this._rings[i];

      for (j = 0, len2 = points.length; j < len2 - 1; j++) {
        segment = clipSegment(points[j], points[j + 1], bounds, j, true);

        if (!segment) {
          continue;
        }

        parts[k] = parts[k] || [];
        parts[k].push(segment[0]); // if segment goes out of screen, or it's the last one, it's the end of the line part

        if (segment[1] !== points[j + 1] || j === len2 - 2) {
          parts[k].push(segment[1]);
          k++;
        }
      }
    }
  },
  // simplify each clipped part of the polyline for performance
  _simplifyPoints: function _simplifyPoints() {
    var parts = this._parts,
        tolerance = this.options.smoothFactor;

    for (var i = 0, len = parts.length; i < len; i++) {
      parts[i] = simplify(parts[i], tolerance);
    }
  },
  _update: function _update() {
    if (!this._map) {
      return;
    }

    this._clipPoints();

    this._simplifyPoints();

    this._updatePath();
  },
  _updatePath: function _updatePath() {
    this._renderer._updatePoly(this);
  },
  // Needed by the `Canvas` renderer for interactivity
  _containsPoint: function _containsPoint(p, closed) {
    var i,
        j,
        k,
        len,
        len2,
        part,
        w = this._clickTolerance();

    if (!this._pxBounds || !this._pxBounds.contains(p)) {
      return false;
    } // hit detection for polylines


    for (i = 0, len = this._parts.length; i < len; i++) {
      part = this._parts[i];

      for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
        if (!closed && j === 0) {
          continue;
        }

        if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
          return true;
        }
      }
    }

    return false;
  }
}); // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.

function polyline(latlngs, options) {
  return new Polyline(latlngs, options);
} // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.


Polyline._flat = _flat;
/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */

var Polygon = Polyline.extend({
  options: {
    fill: true
  },
  isEmpty: function isEmpty() {
    return !this._latlngs.length || !this._latlngs[0].length;
  },
  getCenter: function getCenter() {
    // throws error when not yet added to map as this center calculation requires projected coordinates
    if (!this._map) {
      throw new Error('Must add layer to map before using getCenter()');
    }

    var i,
        j,
        p1,
        p2,
        f,
        area,
        x,
        y,
        center,
        points = this._rings[0],
        len = points.length;

    if (!len) {
      return null;
    } // polygon centroid algorithm; only uses the first ring if there are multiple


    area = x = y = 0;

    for (i = 0, j = len - 1; i < len; j = i++) {
      p1 = points[i];
      p2 = points[j];
      f = p1.y * p2.x - p2.y * p1.x;
      x += (p1.x + p2.x) * f;
      y += (p1.y + p2.y) * f;
      area += f * 3;
    }

    if (area === 0) {
      // Polygon is so small that all points are on same pixel.
      center = points[0];
    } else {
      center = [x / area, y / area];
    }

    return this._map.layerPointToLatLng(center);
  },
  _convertLatLngs: function _convertLatLngs(latlngs) {
    var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
        len = result.length; // remove last point if it equals first one


    if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
      result.pop();
    }

    return result;
  },
  _setLatLngs: function _setLatLngs(latlngs) {
    Polyline.prototype._setLatLngs.call(this, latlngs);

    if (isFlat(this._latlngs)) {
      this._latlngs = [this._latlngs];
    }
  },
  _defaultShape: function _defaultShape() {
    return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
  },
  _clipPoints: function _clipPoints() {
    // polygons need a different clipping algorithm so we redefine that
    var bounds = this._renderer._bounds,
        w = this.options.weight,
        p = new Point(w, w); // increase clip padding by stroke width to avoid stroke on clip edges

    bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
    this._parts = [];

    if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
      return;
    }

    if (this.options.noClip) {
      this._parts = this._rings;
      return;
    }

    for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
      clipped = clipPolygon(this._rings[i], bounds, true);

      if (clipped.length) {
        this._parts.push(clipped);
      }
    }
  },
  _updatePath: function _updatePath() {
    this._renderer._updatePoly(this, true);
  },
  // Needed by the `Canvas` renderer for interactivity
  _containsPoint: function _containsPoint(p) {
    var inside = false,
        part,
        p1,
        p2,
        i,
        j,
        k,
        len,
        len2;

    if (!this._pxBounds || !this._pxBounds.contains(p)) {
      return false;
    } // ray casting algorithm for detecting if point is in polygon


    for (i = 0, len = this._parts.length; i < len; i++) {
      part = this._parts[i];

      for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
        p1 = part[j];
        p2 = part[k];

        if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
          inside = !inside;
        }
      }
    } // also check if it's on polygon stroke


    return inside || Polyline.prototype._containsPoint.call(this, p, true);
  }
}); // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)

function polygon(latlngs, options) {
  return new Polygon(latlngs, options);
}
/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */


var GeoJSON = FeatureGroup.extend({
  /* @section
   * @aka GeoJSON options
   *
   * @option pointToLayer: Function = *
   * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
   * called when data is added, passing the GeoJSON point feature and its `LatLng`.
   * The default is to spawn a default `Marker`:
   * ```js
   * function(geoJsonPoint, latlng) {
   * 	return L.marker(latlng);
   * }
   * ```
   *
   * @option style: Function = *
   * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
   * called internally when data is added.
   * The default value is to not override any defaults:
   * ```js
   * function (geoJsonFeature) {
   * 	return {}
   * }
   * ```
   *
   * @option onEachFeature: Function = *
   * A `Function` that will be called once for each created `Feature`, after it has
   * been created and styled. Useful for attaching events and popups to features.
   * The default is to do nothing with the newly created layers:
   * ```js
   * function (feature, layer) {}
   * ```
   *
   * @option filter: Function = *
   * A `Function` that will be used to decide whether to include a feature or not.
   * The default is to include all features:
   * ```js
   * function (geoJsonFeature) {
   * 	return true;
   * }
   * ```
   * Note: dynamically changing the `filter` option will have effect only on newly
   * added data. It will _not_ re-evaluate already included features.
   *
   * @option coordsToLatLng: Function = *
   * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
   * The default is the `coordsToLatLng` static method.
   */
  initialize: function initialize(geojson, options) {
    setOptions(this, options);
    this._layers = {};

    if (geojson) {
      this.addData(geojson);
    }
  },
  // @method addData( <GeoJSON> data ): this
  // Adds a GeoJSON object to the layer.
  addData: function addData(geojson) {
    var features = isArray(geojson) ? geojson : geojson.features,
        i,
        len,
        feature;

    if (features) {
      for (i = 0, len = features.length; i < len; i++) {
        // only add this if geometry or geometries are set and not null
        feature = features[i];

        if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
          this.addData(feature);
        }
      }

      return this;
    }

    var options = this.options;

    if (options.filter && !options.filter(geojson)) {
      return this;
    }

    var layer = geometryToLayer(geojson, options);

    if (!layer) {
      return this;
    }

    layer.feature = asFeature(geojson);
    layer.defaultOptions = layer.options;
    this.resetStyle(layer);

    if (options.onEachFeature) {
      options.onEachFeature(geojson, layer);
    }

    return this.addLayer(layer);
  },
  // @method resetStyle( <Path> layer ): this
  // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
  resetStyle: function resetStyle(layer) {
    // reset any custom styles
    layer.options = extend({}, layer.defaultOptions);

    this._setLayerStyle(layer, this.options.style);

    return this;
  },
  // @method setStyle( <Function> style ): this
  // Changes styles of GeoJSON vector layers with the given style function.
  setStyle: function setStyle(style) {
    return this.eachLayer(function (layer) {
      this._setLayerStyle(layer, style);
    }, this);
  },
  _setLayerStyle: function _setLayerStyle(layer, style) {
    if (typeof style === 'function') {
      style = style(layer.feature);
    }

    if (layer.setStyle) {
      layer.setStyle(style);
    }
  }
}); // @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.

function geometryToLayer(geojson, options) {
  var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
      coords = geometry ? geometry.coordinates : null,
      layers = [],
      pointToLayer = options && options.pointToLayer,
      _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
      latlng,
      latlngs,
      i,
      len;

  if (!coords && !geometry) {
    return null;
  }

  switch (geometry.type) {
    case 'Point':
      latlng = _coordsToLatLng(coords);
      return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);

    case 'MultiPoint':
      for (i = 0, len = coords.length; i < len; i++) {
        latlng = _coordsToLatLng(coords[i]);
        layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
      }

      return new FeatureGroup(layers);

    case 'LineString':
    case 'MultiLineString':
      latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
      return new Polyline(latlngs, options);

    case 'Polygon':
    case 'MultiPolygon':
      latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
      return new Polygon(latlngs, options);

    case 'GeometryCollection':
      for (i = 0, len = geometry.geometries.length; i < len; i++) {
        var layer = geometryToLayer({
          geometry: geometry.geometries[i],
          type: 'Feature',
          properties: geojson.properties
        }, options);

        if (layer) {
          layers.push(layer);
        }
      }

      return new FeatureGroup(layers);

    default:
      throw new Error('Invalid GeoJSON object.');
  }
} // @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.


function coordsToLatLng(coords) {
  return new LatLng(coords[1], coords[0], coords[2]);
} // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.


function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
  var latlngs = [];

  for (var i = 0, len = coords.length, latlng; i < len; i++) {
    latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
    latlngs.push(latlng);
  }

  return latlngs;
} // @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)


function latLngToCoords(latlng, precision) {
  precision = typeof precision === 'number' ? precision : 6;
  return latlng.alt !== undefined ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
} // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.


function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
  var coords = [];

  for (var i = 0, len = latlngs.length; i < len; i++) {
    coords.push(levelsDeep ? latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
  }

  if (!levelsDeep && closed) {
    coords.push(coords[0]);
  }

  return coords;
}

function getFeature(layer, newGeometry) {
  return layer.feature ? extend({}, layer.feature, {
    geometry: newGeometry
  }) : asFeature(newGeometry);
} // @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.


function asFeature(geojson) {
  if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
    return geojson;
  }

  return {
    type: 'Feature',
    properties: {},
    geometry: geojson
  };
}

var PointToGeoJSON = {
  toGeoJSON: function toGeoJSON(precision) {
    return getFeature(this, {
      type: 'Point',
      coordinates: latLngToCoords(this.getLatLng(), precision)
    });
  }
}; // @namespace Marker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).

Marker.include(PointToGeoJSON); // @namespace CircleMarker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).

Circle.include(PointToGeoJSON);
CircleMarker.include(PointToGeoJSON); // @namespace Polyline
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).

Polyline.include({
  toGeoJSON: function toGeoJSON(precision) {
    var multi = !isFlat(this._latlngs);
    var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
    return getFeature(this, {
      type: (multi ? 'Multi' : '') + 'LineString',
      coordinates: coords
    });
  }
}); // @namespace Polygon
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).

Polygon.include({
  toGeoJSON: function toGeoJSON(precision) {
    var holes = !isFlat(this._latlngs),
        multi = holes && !isFlat(this._latlngs[0]);
    var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

    if (!holes) {
      coords = [coords];
    }

    return getFeature(this, {
      type: (multi ? 'Multi' : '') + 'Polygon',
      coordinates: coords
    });
  }
}); // @namespace LayerGroup

LayerGroup.include({
  toMultiPoint: function toMultiPoint(precision) {
    var coords = [];
    this.eachLayer(function (layer) {
      coords.push(layer.toGeoJSON(precision).geometry.coordinates);
    });
    return getFeature(this, {
      type: 'MultiPoint',
      coordinates: coords
    });
  },
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
  toGeoJSON: function toGeoJSON(precision) {
    var type = this.feature && this.feature.geometry && this.feature.geometry.type;

    if (type === 'MultiPoint') {
      return this.toMultiPoint(precision);
    }

    var isGeometryCollection = type === 'GeometryCollection',
        jsons = [];
    this.eachLayer(function (layer) {
      if (layer.toGeoJSON) {
        var json = layer.toGeoJSON(precision);

        if (isGeometryCollection) {
          jsons.push(json.geometry);
        } else {
          var feature = asFeature(json); // Squash nested feature collections

          if (feature.type === 'FeatureCollection') {
            jsons.push.apply(jsons, feature.features);
          } else {
            jsons.push(feature);
          }
        }
      }
    });

    if (isGeometryCollection) {
      return getFeature(this, {
        geometries: jsons,
        type: 'GeometryCollection'
      });
    }

    return {
      type: 'FeatureCollection',
      features: jsons
    };
  }
}); // @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.

function geoJSON(geojson, options) {
  return new GeoJSON(geojson, options);
} // Backward compatibility.


var geoJson = geoJSON;
Object.freeze = freeze;
var L = {};
L.version = version;
L.Browser = Browser;
L.Evented = Evented;
L.Mixin = Mixin;
L.Util = Util;
L.Class = Class;
L.Handler = Handler;
L.extend = extend;
L.bind = bind;
L.stamp = stamp;
L.setOptions = setOptions;
L.DomEvent = DomEvent;
L.DomUtil = DomUtil;
L.PosAnimation = PosAnimation;
L.Draggable = Draggable;
L.LineUtil = LineUtil;
L.PolyUtil = PolyUtil;
L.Point = Point;
L.point = toPoint;
L.Bounds = Bounds;
L.bounds = toBounds;
L.Transformation = Transformation;
L.transformation = toTransformation;
L.Projection = index;
L.LatLng = LatLng;
L.latLng = toLatLng;
L.LatLngBounds = LatLngBounds;
L.latLngBounds = toLatLngBounds;
L.CRS = CRS;
L.GeoJSON = GeoJSON;
L.geoJSON = geoJSON;
L.geoJson = geoJson; // if (!window.L)
//   window.L = L;
// CONCATENATED MODULE: ./src/esri/lib/esri-leaflet.js
//可以下载最新库替换：https://github.com/Esri/esri-leaflet 或者用npm版本 esri-leaflet
//此处只是做了删减，减少文件大小

var esri_leaflet_version = "2.3.2";
var cors = window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest();
var pointerEvents = document.documentElement.style.pointerEvents === '';
var Support = {
  cors: cors,
  pointerEvents: pointerEvents
};
var esri_leaflet_options = {
  attributionWidthOffset: 55
};
var callbacks = 0;

function serialize(params) {
  var data = '';
  params.f = params.f || 'json';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var param = params[key];
      var type = Object.prototype.toString.call(param);
      var value;

      if (data.length) {
        data += '&';
      }

      if (type === '[object Array]') {
        value = Object.prototype.toString.call(param[0]) === '[object Object]' ? JSON.stringify(param) : param.join(',');
      } else if (type === '[object Object]') {
        value = JSON.stringify(param);
      } else if (type === '[object Date]') {
        value = param.valueOf();
      } else {
        value = param;
      }

      data += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
  }

  return data;
}

function createRequest(callback, context) {
  var httpRequest = new window.XMLHttpRequest();

  httpRequest.onerror = function (e) {
    httpRequest.onreadystatechange = L.Util.falseFn;
    callback.call(context, {
      error: {
        code: 500,
        message: 'XMLHttpRequest error'
      }
    }, null);
  };

  httpRequest.onreadystatechange = function () {
    var response;
    var error;

    if (httpRequest.readyState === 4) {
      try {
        response = JSON.parse(httpRequest.responseText);
      } catch (e) {
        response = null;
        error = {
          code: 500,
          message: 'Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error.'
        };
      }

      if (!error && response.error) {
        error = response.error;
        response = null;
      }

      httpRequest.onerror = L.Util.falseFn;
      callback.call(context, error, response);
    }
  };

  httpRequest.ontimeout = function () {
    this.onerror();
  };

  return httpRequest;
}

function xmlHttpPost(url, params, callback, context) {
  var httpRequest = createRequest(callback, context);
  httpRequest.open('POST', url);

  if (typeof context !== 'undefined' && context !== null) {
    if (typeof context.options !== 'undefined') {
      httpRequest.timeout = context.options.timeout;
    }
  }

  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  httpRequest.send(serialize(params));
  return httpRequest;
}

function xmlHttpGet(url, params, callback, context) {
  var httpRequest = createRequest(callback, context);
  httpRequest.open('GET', url + '?' + serialize(params), true);

  if (typeof context !== 'undefined' && context !== null) {
    if (typeof context.options !== 'undefined') {
      httpRequest.timeout = context.options.timeout;
    }
  }

  httpRequest.send(null);
  return httpRequest;
} // AJAX handlers for CORS (modern browsers) or JSONP (older browsers)


function esri_leaflet_request(url, params, callback, context) {
  var paramString = serialize(params);
  var httpRequest = createRequest(callback, context);
  var requestLength = (url + '?' + paramString).length; // ie10/11 require the request be opened before a timeout is applied

  if (requestLength <= 2000 && Support.cors) {
    httpRequest.open('GET', url + '?' + paramString);
  } else if (requestLength > 2000 && Support.cors) {
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  if (typeof context !== 'undefined' && context !== null) {
    if (typeof context.options !== 'undefined') {
      httpRequest.timeout = context.options.timeout;
    }
  } // request is less than 2000 characters and the browser supports CORS, make GET request with XMLHttpRequest


  if (requestLength <= 2000 && Support.cors) {
    httpRequest.send(null); // request is more than 2000 characters and the browser supports CORS, make POST request with XMLHttpRequest
  } else if (requestLength > 2000 && Support.cors) {
    httpRequest.send(paramString); // request is less  than 2000 characters and the browser does not support CORS, make a JSONP request
  } else if (requestLength <= 2000 && !Support.cors) {
    return jsonp(url, params, callback, context); // request is longer then 2000 characters and the browser does not support CORS, log a warning
  } else {
    warn('a request to ' + url + ' was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html');
    return;
  }

  return httpRequest;
}

function jsonp(url, params, callback, context) {
  window._EsriLeafletCallbacks = window._EsriLeafletCallbacks || {};
  var callbackId = 'c' + callbacks;
  params.callback = 'window._EsriLeafletCallbacks.' + callbackId;

  window._EsriLeafletCallbacks[callbackId] = function (response) {
    if (window._EsriLeafletCallbacks[callbackId] !== true) {
      var error;
      var responseType = Object.prototype.toString.call(response);

      if (!(responseType === '[object Object]' || responseType === '[object Array]')) {
        error = {
          error: {
            code: 500,
            message: 'Expected array or object as JSONP response'
          }
        };
        response = null;
      }

      if (!error && response.error) {
        error = response;
        response = null;
      }

      callback.call(context, error, response);
      window._EsriLeafletCallbacks[callbackId] = true;
    }
  };

  var script = L.DomUtil.create('script', null, document.body);
  script.type = 'text/javascript';
  script.src = url + '?' + serialize(params);
  script.id = callbackId;

  script.onerror = function (error) {
    if (error && window._EsriLeafletCallbacks[callbackId] !== true) {
      // Can't get true error code: it can be 404, or 401, or 500
      var err = {
        error: {
          code: 500,
          message: 'An unknown error occurred'
        }
      };
      callback.call(context, err);
      window._EsriLeafletCallbacks[callbackId] = true;
    }
  };

  L.DomUtil.addClass(script, 'esri-leaflet-jsonp');
  callbacks++;
  return {
    id: callbackId,
    url: script.src,
    abort: function abort() {
      window._EsriLeafletCallbacks._callback[callbackId]({
        code: 0,
        message: 'Request aborted.'
      });
    }
  };
}

var esri_leaflet_get = Support.cors ? xmlHttpGet : jsonp;
esri_leaflet_get.CORS = xmlHttpGet;
esri_leaflet_get.JSONP = jsonp; // export the Request object to call the different handlers for debugging

var Request = {
  request: esri_leaflet_request,
  get: esri_leaflet_get,
  post: xmlHttpPost
};
/*
 * Copyright 2017 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// checks if 2 x,y points are equal

function pointsEqual(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
} // checks if the first and last points of a ring are equal and closes the ring


function closeRing(coordinates) {
  if (!pointsEqual(coordinates[0], coordinates[coordinates.length - 1])) {
    coordinates.push(coordinates[0]);
  }

  return coordinates;
} // determine if polygon ring coordinates are clockwise. clockwise signifies outer ring, counter-clockwise an inner ring
// or hole. this logic was found at http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-
// points-are-in-clockwise-order


function ringIsClockwise(ringToTest) {
  var total = 0;
  var i = 0;
  var rLength = ringToTest.length;
  var pt1 = ringToTest[i];
  var pt2;

  for (i; i < rLength - 1; i++) {
    pt2 = ringToTest[i + 1];
    total += (pt2[0] - pt1[0]) * (pt2[1] + pt1[1]);
    pt1 = pt2;
  }

  return total >= 0;
} // ported from terraformer.js https://github.com/Esri/Terraformer/blob/master/terraformer.js#L504-L519


function vertexIntersectsVertex(a1, a2, b1, b2) {
  var uaT = (b2[0] - b1[0]) * (a1[1] - b1[1]) - (b2[1] - b1[1]) * (a1[0] - b1[0]);
  var ubT = (a2[0] - a1[0]) * (a1[1] - b1[1]) - (a2[1] - a1[1]) * (a1[0] - b1[0]);
  var uB = (b2[1] - b1[1]) * (a2[0] - a1[0]) - (b2[0] - b1[0]) * (a2[1] - a1[1]);

  if (uB !== 0) {
    var ua = uaT / uB;
    var ub = ubT / uB;

    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
      return true;
    }
  }

  return false;
} // ported from terraformer.js https://github.com/Esri/Terraformer/blob/master/terraformer.js#L521-L531


function arrayIntersectsArray(a, b) {
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = 0; j < b.length - 1; j++) {
      if (vertexIntersectsVertex(a[i], a[i + 1], b[j], b[j + 1])) {
        return true;
      }
    }
  }

  return false;
} // ported from terraformer.js https://github.com/Esri/Terraformer/blob/master/terraformer.js#L470-L480


function coordinatesContainPoint(coordinates, point) {
  var contains = false;

  for (var i = -1, l = coordinates.length, j = l - 1; ++i < l; j = i) {
    if ((coordinates[i][1] <= point[1] && point[1] < coordinates[j][1] || coordinates[j][1] <= point[1] && point[1] < coordinates[i][1]) && point[0] < (coordinates[j][0] - coordinates[i][0]) * (point[1] - coordinates[i][1]) / (coordinates[j][1] - coordinates[i][1]) + coordinates[i][0]) {
      contains = !contains;
    }
  }

  return contains;
} // ported from terraformer-arcgis-parser.js https://github.com/Esri/terraformer-arcgis-parser/blob/master/terraformer-arcgis-parser.js#L106-L113


function coordinatesContainCoordinates(outer, inner) {
  var intersects = arrayIntersectsArray(outer, inner);
  var contains = coordinatesContainPoint(outer, inner[0]);

  if (!intersects && contains) {
    return true;
  }

  return false;
} // do any polygons in this array contain any other polygons in this array?
// used for checking for holes in arcgis rings
// ported from terraformer-arcgis-parser.js https://github.com/Esri/terraformer-arcgis-parser/blob/master/terraformer-arcgis-parser.js#L117-L172


function convertRingsToGeoJSON(rings) {
  var outerRings = [];
  var holes = [];
  var x; // iterator

  var outerRing; // current outer ring being evaluated

  var hole; // current hole being evaluated
  // for each ring

  for (var r = 0; r < rings.length; r++) {
    var ring = closeRing(rings[r].slice(0));

    if (ring.length < 4) {
      continue;
    } // is this ring an outer ring? is it clockwise?


    if (ringIsClockwise(ring)) {
      var polygon = [ring.slice().reverse()]; // wind outer rings counterclockwise for RFC 7946 compliance

      outerRings.push(polygon); // push to outer rings
    } else {
      holes.push(ring.slice().reverse()); // wind inner rings clockwise for RFC 7946 compliance
    }
  }

  var uncontainedHoles = []; // while there are holes left...

  while (holes.length) {
    // pop a hole off out stack
    hole = holes.pop(); // loop over all outer rings and see if they contain our hole.

    var contained = false;

    for (x = outerRings.length - 1; x >= 0; x--) {
      outerRing = outerRings[x][0];

      if (coordinatesContainCoordinates(outerRing, hole)) {
        // the hole is contained push it into our polygon
        outerRings[x].push(hole);
        contained = true;
        break;
      }
    } // ring is not contained in any outer ring
    // sometimes this happens https://github.com/Esri/esri-leaflet/issues/320


    if (!contained) {
      uncontainedHoles.push(hole);
    }
  } // if we couldn't match any holes using contains we can try intersects...


  while (uncontainedHoles.length) {
    // pop a hole off out stack
    hole = uncontainedHoles.pop(); // loop over all outer rings and see if any intersect our hole.

    var intersects = false;

    for (x = outerRings.length - 1; x >= 0; x--) {
      outerRing = outerRings[x][0];

      if (arrayIntersectsArray(outerRing, hole)) {
        // the hole is contained push it into our polygon
        outerRings[x].push(hole);
        intersects = true;
        break;
      }
    }

    if (!intersects) {
      outerRings.push([hole.reverse()]);
    }
  }

  if (outerRings.length === 1) {
    return {
      type: 'Polygon',
      coordinates: outerRings[0]
    };
  } else {
    return {
      type: 'MultiPolygon',
      coordinates: outerRings
    };
  }
} // This function ensures that rings are oriented in the right directions
// outer rings are clockwise, holes are counterclockwise
// used for converting GeoJSON Polygons to ArcGIS Polygons


function orientRings(poly) {
  var output = [];
  var polygon = poly.slice(0);
  var outerRing = closeRing(polygon.shift().slice(0));

  if (outerRing.length >= 4) {
    if (!ringIsClockwise(outerRing)) {
      outerRing.reverse();
    }

    output.push(outerRing);

    for (var i = 0; i < polygon.length; i++) {
      var hole = closeRing(polygon[i].slice(0));

      if (hole.length >= 4) {
        if (ringIsClockwise(hole)) {
          hole.reverse();
        }

        output.push(hole);
      }
    }
  }

  return output;
} // This function flattens holes in multipolygons to one array of polygons
// used for converting GeoJSON Polygons to ArcGIS Polygons


function flattenMultiPolygonRings(rings) {
  var output = [];

  for (var i = 0; i < rings.length; i++) {
    var polygon = orientRings(rings[i]);

    for (var x = polygon.length - 1; x >= 0; x--) {
      var ring = polygon[x].slice(0);
      output.push(ring);
    }
  }

  return output;
} // shallow object clone for feature properties and attributes
// from http://jsperf.com/cloning-an-object/2


function shallowClone(obj) {
  var target = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      target[i] = obj[i];
    }
  }

  return target;
}

function getId(attributes, idAttribute) {
  var keys = idAttribute ? [idAttribute, 'OBJECTID', 'FID'] : ['OBJECTID', 'FID'];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (key in attributes && (typeof attributes[key] === 'string' || typeof attributes[key] === 'number')) {
      return attributes[key];
    }
  }

  throw Error('No valid id attribute found');
}

function arcgisToGeoJSON(arcgis, idAttribute) {
  var geojson = {};

  if (arcgis.features) {
    geojson.type = 'FeatureCollection';
    geojson.features = [];

    for (var i = 0; i < arcgis.features.length; i++) {
      geojson.features.push(arcgisToGeoJSON(arcgis.features[i], idAttribute));
    }
  }

  if (typeof arcgis.x === 'number' && typeof arcgis.y === 'number') {
    geojson.type = 'Point';
    geojson.coordinates = [arcgis.x, arcgis.y];

    if (typeof arcgis.z === 'number') {
      geojson.coordinates.push(arcgis.z);
    }
  }

  if (arcgis.points) {
    geojson.type = 'MultiPoint';
    geojson.coordinates = arcgis.points.slice(0);
  }

  if (arcgis.paths) {
    if (arcgis.paths.length === 1) {
      geojson.type = 'LineString';
      geojson.coordinates = arcgis.paths[0].slice(0);
    } else {
      geojson.type = 'MultiLineString';
      geojson.coordinates = arcgis.paths.slice(0);
    }
  }

  if (arcgis.rings) {
    geojson = convertRingsToGeoJSON(arcgis.rings.slice(0));
  }

  if (typeof arcgis.xmin === 'number' && typeof arcgis.ymin === 'number' && typeof arcgis.xmax === 'number' && typeof arcgis.ymax === 'number') {
    geojson.type = 'Polygon';
    geojson.coordinates = [[[arcgis.xmax, arcgis.ymax], [arcgis.xmin, arcgis.ymax], [arcgis.xmin, arcgis.ymin], [arcgis.xmax, arcgis.ymin], [arcgis.xmax, arcgis.ymax]]];
  }

  if (arcgis.geometry || arcgis.attributes) {
    geojson.type = 'Feature';
    geojson.geometry = arcgis.geometry ? arcgisToGeoJSON(arcgis.geometry) : null;
    geojson.properties = arcgis.attributes ? shallowClone(arcgis.attributes) : null;

    if (arcgis.attributes) {
      try {
        geojson.id = getId(arcgis.attributes, idAttribute);
      } catch (err) {// don't set an id
      }
    }
  } // if no valid geometry was encountered


  if (JSON.stringify(geojson.geometry) === JSON.stringify({})) {
    geojson.geometry = null;
  }

  if (arcgis.spatialReference && arcgis.spatialReference.wkid && arcgis.spatialReference.wkid !== 4326) {
    console.warn('Object converted in non-standard crs - ' + JSON.stringify(arcgis.spatialReference));
  }

  return geojson;
}

function geojsonToArcGIS(geojson, idAttribute) {
  idAttribute = idAttribute || 'OBJECTID';
  var spatialReference = {
    wkid: 4326
  };
  var result = {};
  var i;

  switch (geojson.type) {
    case 'Point':
      result.x = geojson.coordinates[0];
      result.y = geojson.coordinates[1];
      result.spatialReference = spatialReference;
      break;

    case 'MultiPoint':
      result.points = geojson.coordinates.slice(0);
      result.spatialReference = spatialReference;
      break;

    case 'LineString':
      result.paths = [geojson.coordinates.slice(0)];
      result.spatialReference = spatialReference;
      break;

    case 'MultiLineString':
      result.paths = geojson.coordinates.slice(0);
      result.spatialReference = spatialReference;
      break;

    case 'Polygon':
      result.rings = orientRings(geojson.coordinates.slice(0));
      result.spatialReference = spatialReference;
      break;

    case 'MultiPolygon':
      result.rings = flattenMultiPolygonRings(geojson.coordinates.slice(0));
      result.spatialReference = spatialReference;
      break;

    case 'Feature':
      if (geojson.geometry) {
        result.geometry = geojsonToArcGIS(geojson.geometry, idAttribute);
      }

      result.attributes = geojson.properties ? shallowClone(geojson.properties) : {};

      if (geojson.id) {
        result.attributes[idAttribute] = geojson.id;
      }

      break;

    case 'FeatureCollection':
      result = [];

      for (i = 0; i < geojson.features.length; i++) {
        result.push(geojsonToArcGIS(geojson.features[i], idAttribute));
      }

      break;

    case 'GeometryCollection':
      result = [];

      for (i = 0; i < geojson.geometries.length; i++) {
        result.push(geojsonToArcGIS(geojson.geometries[i], idAttribute));
      }

      break;
  }

  return result;
}

function geojsonToArcGIS$1(geojson, idAttr) {
  return geojsonToArcGIS(geojson, idAttr);
}

function arcgisToGeoJSON$1(arcgis, idAttr) {
  return arcgisToGeoJSON(arcgis, idAttr);
} // convert an extent (ArcGIS) to LatLngBounds (Leaflet)


function extentToBounds(extent) {
  // "NaN" coordinates from ArcGIS Server indicate a null geometry
  if (extent.xmin !== 'NaN' && extent.ymin !== 'NaN' && extent.xmax !== 'NaN' && extent.ymax !== 'NaN') {
    var sw = L.latLng(extent.ymin, extent.xmin);
    var ne = L.latLng(extent.ymax, extent.xmax);
    return L.latLngBounds(sw, ne);
  } else {
    return null;
  }
} // convert an LatLngBounds (Leaflet) to extent (ArcGIS)


function boundsToExtent(bounds) {
  bounds = L.latLngBounds(bounds);
  return {
    'xmin': bounds.getSouthWest().lng,
    'ymin': bounds.getSouthWest().lat,
    'xmax': bounds.getNorthEast().lng,
    'ymax': bounds.getNorthEast().lat,
    'spatialReference': {
      'wkid': 4326
    }
  };
}

var knownFieldNames = /^(OBJECTID|FID|OID|ID)$/i; // Attempts to find the ID Field from response

function _findIdAttributeFromResponse(response) {
  var result;

  if (response.objectIdFieldName) {
    // Find Id Field directly
    result = response.objectIdFieldName;
  } else if (response.fields) {
    // Find ID Field based on field type
    for (var j = 0; j <= response.fields.length - 1; j++) {
      if (response.fields[j].type === 'esriFieldTypeOID') {
        result = response.fields[j].name;
        break;
      }
    }

    if (!result) {
      // If no field was marked as being the esriFieldTypeOID try well known field names
      for (j = 0; j <= response.fields.length - 1; j++) {
        if (response.fields[j].name.match(knownFieldNames)) {
          result = response.fields[j].name;
          break;
        }
      }
    }
  }

  return result;
} // This is the 'last' resort, find the Id field from the specified feature


function _findIdAttributeFromFeature(feature) {
  for (var key in feature.attributes) {
    if (key.match(knownFieldNames)) {
      return key;
    }
  }
}

function responseToFeatureCollection(response, idAttribute) {
  var objectIdField;
  var features = response.features || response.results;
  var count = features.length;

  if (idAttribute) {
    objectIdField = idAttribute;
  } else {
    objectIdField = _findIdAttributeFromResponse(response);
  }

  var featureCollection = {
    type: 'FeatureCollection',
    features: []
  };

  if (count) {
    for (var i = features.length - 1; i >= 0; i--) {
      var feature = arcgisToGeoJSON$1(features[i], objectIdField || _findIdAttributeFromFeature(features[i]));
      featureCollection.features.push(feature);
    }
  }

  return featureCollection;
} // trim url whitespace and add a trailing slash if needed


function cleanUrl(url) {
  // trim leading and trailing spaces, but not spaces inside the url
  url = L.Util.trim(url); // add a trailing slash to the url if the user omitted it

  if (url[url.length - 1] !== '/') {
    url += '/';
  }

  return url;
}
/* Extract url params if any and store them in requestParams attribute.
   Return the options params updated */


function getUrlParams(options$$1) {
  if (options$$1.url.indexOf('?') !== -1) {
    options$$1.requestParams = options$$1.requestParams || {};
    var queryString = options$$1.url.substring(options$$1.url.indexOf('?') + 1);
    options$$1.url = options$$1.url.split('?')[0];
    options$$1.requestParams = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  }

  options$$1.url = cleanUrl(options$$1.url.split('?')[0]);
  return options$$1;
}

function isArcgisOnline(url) {
  /* hosted feature services support geojson as an output format
  utility.arcgis.com services are proxied from a variety of ArcGIS Server vintages, and may not */
  return /^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(url);
}

function geojsonTypeToArcGIS(geoJsonType) {
  var arcgisGeometryType;

  switch (geoJsonType) {
    case 'Point':
      arcgisGeometryType = 'esriGeometryPoint';
      break;

    case 'MultiPoint':
      arcgisGeometryType = 'esriGeometryMultipoint';
      break;

    case 'LineString':
      arcgisGeometryType = 'esriGeometryPolyline';
      break;

    case 'MultiLineString':
      arcgisGeometryType = 'esriGeometryPolyline';
      break;

    case 'Polygon':
      arcgisGeometryType = 'esriGeometryPolygon';
      break;

    case 'MultiPolygon':
      arcgisGeometryType = 'esriGeometryPolygon';
      break;
  }

  return arcgisGeometryType;
}

function warn() {
  if (console && console.warn) {
    console.warn.apply(console, arguments);
  }
}

function calcAttributionWidth(map) {
  // either crop at 55px or user defined buffer
  return map.getSize().x - esri_leaflet_options.attributionWidthOffset + 'px';
}

function setEsriAttribution(map) {
  if (map.attributionControl && !map.attributionControl._esriAttributionAdded) {
    map.attributionControl.setPrefix('<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Powered by <a href="https://www.esri.com">Esri</a>');
    var hoverAttributionStyle = document.createElement('style');
    hoverAttributionStyle.type = 'text/css';
    hoverAttributionStyle.innerHTML = '.esri-truncated-attribution:hover {' + 'white-space: normal;' + '}';
    document.getElementsByTagName('head')[0].appendChild(hoverAttributionStyle);
    L.DomUtil.addClass(map.attributionControl._container, 'esri-truncated-attribution:hover'); // define a new css class in JS to trim attribution into a single line

    var attributionStyle = document.createElement('style');
    attributionStyle.type = 'text/css';
    attributionStyle.innerHTML = '.esri-truncated-attribution {' + 'vertical-align: -3px;' + 'white-space: nowrap;' + 'overflow: hidden;' + 'text-overflow: ellipsis;' + 'display: inline-block;' + 'transition: 0s white-space;' + 'transition-delay: 1s;' + 'max-width: ' + calcAttributionWidth(map) + ';' + '}';
    document.getElementsByTagName('head')[0].appendChild(attributionStyle);
    L.DomUtil.addClass(map.attributionControl._container, 'esri-truncated-attribution'); // update the width used to truncate when the map itself is resized

    map.on('resize', function (e) {
      map.attributionControl._container.style.maxWidth = calcAttributionWidth(e.target);
    });
    map.attributionControl._esriAttributionAdded = true;
  }
}

function _setGeometry(geometry) {
  var params = {
    geometry: null,
    geometryType: null
  }; // convert bounds to extent and finish

  if (geometry instanceof L.LatLngBounds) {
    // set geometry + geometryType
    params.geometry = boundsToExtent(geometry);
    params.geometryType = 'esriGeometryEnvelope';
    return params;
  } // convert L.Marker > L.LatLng


  if (geometry.getLatLng) {
    geometry = geometry.getLatLng();
  } // convert L.LatLng to a geojson point and continue;


  if (geometry instanceof L.LatLng) {
    geometry = {
      type: 'Point',
      coordinates: [geometry.lng, geometry.lat]
    };
  } // handle L.GeoJSON, pull out the first geometry


  if (geometry instanceof L.GeoJSON) {
    // reassign geometry to the GeoJSON value  (we are assuming that only one feature is present)
    geometry = geometry.getLayers()[0].feature.geometry;
    params.geometry = geojsonToArcGIS$1(geometry);
    params.geometryType = geojsonTypeToArcGIS(geometry.type);
  } // Handle L.Polyline and L.Polygon


  if (geometry.toGeoJSON) {
    geometry = geometry.toGeoJSON();
  } // handle GeoJSON feature by pulling out the geometry


  if (geometry.type === 'Feature') {
    // get the geometry of the geojson feature
    geometry = geometry.geometry;
  } // confirm that our GeoJSON is a point, line or polygon


  if (geometry.type === 'Point' || geometry.type === 'LineString' || geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') {
    params.geometry = geojsonToArcGIS$1(geometry);
    params.geometryType = geojsonTypeToArcGIS(geometry.type);
    return params;
  } // warn the user if we havn't found an appropriate object


  warn('invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object');
  return;
}

function _getAttributionData(url, map) {
  if (Support.cors) {
    esri_leaflet_request(url, {}, L.Util.bind(function (error, attributions) {
      if (error) {
        return;
      }

      map._esriAttributions = [];

      for (var c = 0; c < attributions.contributors.length; c++) {
        var contributor = attributions.contributors[c];

        for (var i = 0; i < contributor.coverageAreas.length; i++) {
          var coverageArea = contributor.coverageAreas[i];
          var southWest = L.latLng(coverageArea.bbox[0], coverageArea.bbox[1]);
          var northEast = L.latLng(coverageArea.bbox[2], coverageArea.bbox[3]);

          map._esriAttributions.push({
            attribution: contributor.attribution,
            score: coverageArea.score,
            bounds: L.latLngBounds(southWest, northEast),
            minZoom: coverageArea.zoomMin,
            maxZoom: coverageArea.zoomMax
          });
        }
      }

      map._esriAttributions.sort(function (a, b) {
        return b.score - a.score;
      }); // pass the same argument as the map's 'moveend' event


      var obj = {
        target: map
      };

      _updateMapAttribution(obj);
    }, this));
  }
}

function _updateMapAttribution(evt) {
  var map = evt.target;
  var oldAttributions = map._esriAttributions;
  if (!map || !map.attributionControl) return;

  var attributionElement = map.attributionControl._container.querySelector('.esri-dynamic-attribution');

  if (attributionElement && oldAttributions) {
    var newAttributions = '';
    var bounds = map.getBounds();
    var wrappedBounds = L.latLngBounds(bounds.getSouthWest().wrap(), bounds.getNorthEast().wrap());
    var zoom = map.getZoom();

    for (var i = 0; i < oldAttributions.length; i++) {
      var attribution = oldAttributions[i];
      var text = attribution.attribution;

      if (!newAttributions.match(text) && attribution.bounds.intersects(wrappedBounds) && zoom >= attribution.minZoom && zoom <= attribution.maxZoom) {
        newAttributions += ', ' + text;
      }
    }

    newAttributions = newAttributions.substr(2);
    attributionElement.innerHTML = newAttributions;
    attributionElement.style.maxWidth = calcAttributionWidth(map);
    map.fire('attributionupdated', {
      attribution: newAttributions
    });
  }
}

var EsriUtil = {
  warn: warn,
  cleanUrl: cleanUrl,
  getUrlParams: getUrlParams,
  isArcgisOnline: isArcgisOnline,
  geojsonTypeToArcGIS: geojsonTypeToArcGIS,
  responseToFeatureCollection: responseToFeatureCollection,
  geojsonToArcGIS: geojsonToArcGIS$1,
  arcgisToGeoJSON: arcgisToGeoJSON$1,
  boundsToExtent: boundsToExtent,
  extentToBounds: extentToBounds,
  calcAttributionWidth: calcAttributionWidth,
  setEsriAttribution: setEsriAttribution,
  _setGeometry: _setGeometry,
  _getAttributionData: _getAttributionData,
  _updateMapAttribution: _updateMapAttribution,
  _findIdAttributeFromFeature: _findIdAttributeFromFeature,
  _findIdAttributeFromResponse: _findIdAttributeFromResponse
};
var Task = L.Class.extend({
  options: {
    proxy: false,
    useCors: cors
  },
  // Generate a method for each methodName:paramName in the setters for this task.
  generateSetter: function generateSetter(param, context) {
    return L.Util.bind(function (value) {
      this.params[param] = value;
      return this;
    }, context);
  },
  initialize: function initialize(endpoint) {
    // endpoint can be either a url (and options) for an ArcGIS Rest Service or an instance of EsriLeaflet.Service
    if (endpoint.request && endpoint.options) {
      this._service = endpoint;
      L.Util.setOptions(this, endpoint.options);
    } else {
      L.Util.setOptions(this, endpoint);
      this.options.url = cleanUrl(endpoint.url);
    } // clone default params into this object


    this.params = L.Util.extend({}, this.params || {}); // generate setter methods based on the setters object implimented a child class

    if (this.setters) {
      for (var setter in this.setters) {
        var param = this.setters[setter];
        this[setter] = this.generateSetter(param, this);
      }
    }
  },
  token: function token(_token) {
    if (this._service) {
      this._service.authenticate(_token);
    } else {
      this.params.token = _token;
    }

    return this;
  },
  // ArcGIS Server Find/Identify 10.5+
  format: function format(_boolean) {
    // use double negative to expose a more intuitive positive method name
    this.params.returnUnformattedValues = !_boolean;
    return this;
  },
  request: function request(callback, context) {
    if (this.options.requestParams) {
      L.Util.extend(this.params, this.options.requestParams);
    }

    if (this._service) {
      return this._service.request(this.path, this.params, callback, context);
    }

    return this._request('request', this.path, this.params, callback, context);
  },
  _request: function _request(method, path, params, callback, context) {
    var url = this.options.proxy ? this.options.proxy + '?' + this.options.url + path : this.options.url + path;

    if ((method === 'get' || method === 'request') && !this.options.useCors) {
      return Request.get.JSONP(url, params, callback, context);
    }

    return Request[method](url, params, callback, context);
  }
});

function task(options) {
  options = getUrlParams(options);
  return new Task(options);
}

var Query = Task.extend({
  setters: {
    'offset': 'resultOffset',
    'limit': 'resultRecordCount',
    'fields': 'outFields',
    'precision': 'geometryPrecision',
    'featureIds': 'objectIds',
    'returnGeometry': 'returnGeometry',
    'returnM': 'returnM',
    'transform': 'datumTransformation',
    'token': 'token'
  },
  path: 'query',
  params: {
    returnGeometry: true,
    where: '1=1',
    outSR: 4326,
    outFields: '*'
  },
  // Returns a feature if its shape is wholly contained within the search geometry. Valid for all shape type combinations.
  within: function within(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelContains'; // to the REST api this reads geometry **contains** layer

    return this;
  },
  // Returns a feature if any spatial relationship is found. Applies to all shape type combinations.
  intersects: function intersects(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelIntersects';
    return this;
  },
  // Returns a feature if its shape wholly contains the search geometry. Valid for all shape type combinations.
  contains: function contains(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelWithin'; // to the REST api this reads geometry **within** layer

    return this;
  },
  // Returns a feature if the intersection of the interiors of the two shapes is not empty and has a lower dimension than the maximum dimension of the two shapes. Two lines that share an endpoint in common do not cross. Valid for Line/Line, Line/Area, Multi-point/Area, and Multi-point/Line shape type combinations.
  crosses: function crosses(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelCrosses';
    return this;
  },
  // Returns a feature if the two shapes share a common boundary. However, the intersection of the interiors of the two shapes must be empty. In the Point/Line case, the point may touch an endpoint only of the line. Applies to all combinations except Point/Point.
  touches: function touches(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelTouches';
    return this;
  },
  // Returns a feature if the intersection of the two shapes results in an object of the same dimension, but different from both of the shapes. Applies to Area/Area, Line/Line, and Multi-point/Multi-point shape type combinations.
  overlaps: function overlaps(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelOverlaps';
    return this;
  },
  // Returns a feature if the envelope of the two shapes intersects.
  bboxIntersects: function bboxIntersects(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelEnvelopeIntersects';
    return this;
  },
  // if someone can help decipher the ArcObjects explanation and translate to plain speak, we should mention this method in the doc
  indexIntersects: function indexIntersects(geometry) {
    this._setGeometryParams(geometry);

    this.params.spatialRel = 'esriSpatialRelIndexIntersects'; // Returns a feature if the envelope of the query geometry intersects the index entry for the target geometry

    return this;
  },
  // only valid for Feature Services running on ArcGIS Server 10.3+ or ArcGIS Online
  nearby: function nearby(latlng, radius) {
    latlng = L.latLng(latlng);
    this.params.geometry = [latlng.lng, latlng.lat];
    this.params.geometryType = 'esriGeometryPoint';
    this.params.spatialRel = 'esriSpatialRelIntersects';
    this.params.units = 'esriSRUnit_Meter';
    this.params.distance = radius;
    this.params.inSr = 4326;
    return this;
  },
  where: function where(string) {
    // instead of converting double-quotes to single quotes, pass as is, and provide a more informative message if a 400 is encountered
    this.params.where = string;
    return this;
  },
  between: function between(start, end) {
    this.params.time = [start.valueOf(), end.valueOf()];
    return this;
  },
  simplify: function simplify(map, factor) {
    var mapWidth = Math.abs(map.getBounds().getWest() - map.getBounds().getEast());
    this.params.maxAllowableOffset = mapWidth / map.getSize().y * factor;
    return this;
  },
  orderBy: function orderBy(fieldName, order) {
    order = order || 'ASC';
    this.params.orderByFields = this.params.orderByFields ? this.params.orderByFields + ',' : '';
    this.params.orderByFields += [fieldName, order].join(' ');
    return this;
  },
  run: function run(callback, context) {
    this._cleanParams(); // services hosted on ArcGIS Online and ArcGIS Server 10.3.1+ support requesting geojson directly


    if (this.options.isModern || isArcgisOnline(this.options.url)) {
      this.params.f = 'geojson';
      return this.request(function (error, response) {
        this._trapSQLerrors(error);

        callback.call(context, error, response, response);
      }, this); // otherwise convert it in the callback then pass it on
    } else {
      return this.request(function (error, response) {
        this._trapSQLerrors(error);

        callback.call(context, error, response && responseToFeatureCollection(response), response);
      }, this);
    }
  },
  count: function count(callback, context) {
    this._cleanParams();

    this.params.returnCountOnly = true;
    return this.request(function (error, response) {
      callback.call(this, error, response && response.count, response);
    }, context);
  },
  ids: function ids(callback, context) {
    this._cleanParams();

    this.params.returnIdsOnly = true;
    return this.request(function (error, response) {
      callback.call(this, error, response && response.objectIds, response);
    }, context);
  },
  // only valid for Feature Services running on ArcGIS Server 10.3+ or ArcGIS Online
  bounds: function bounds(callback, context) {
    this._cleanParams();

    this.params.returnExtentOnly = true;
    return this.request(function (error, response) {
      if (response && response.extent && extentToBounds(response.extent)) {
        callback.call(context, error, extentToBounds(response.extent), response);
      } else {
        error = {
          message: 'Invalid Bounds'
        };
        callback.call(context, error, null, response);
      }
    }, context);
  },
  distinct: function distinct() {
    // geometry must be omitted for queries requesting distinct values
    this.params.returnGeometry = false;
    this.params.returnDistinctValues = true;
    return this;
  },
  // only valid for image services
  pixelSize: function pixelSize(rawPoint) {
    var castPoint = L.point(rawPoint);
    this.params.pixelSize = [castPoint.x, castPoint.y];
    return this;
  },
  // only valid for map services
  layer: function layer(_layer) {
    this.path = _layer + '/query';
    return this;
  },
  _trapSQLerrors: function _trapSQLerrors(error) {
    if (error) {
      if (error.code === '400') {
        warn('one common syntax error in query requests is encasing string values in double quotes instead of single quotes');
      }
    }
  },
  _cleanParams: function _cleanParams() {
    delete this.params.returnIdsOnly;
    delete this.params.returnExtentOnly;
    delete this.params.returnCountOnly;
  },
  _setGeometryParams: function _setGeometryParams(geometry) {
    this.params.inSr = 4326;

    var converted = _setGeometry(geometry);

    this.params.geometry = converted.geometry;
    this.params.geometryType = converted.geometryType;
  }
});

function esri_leaflet_query(options) {
  return new Query(options);
}

var Find = Task.extend({
  setters: {
    // method name > param name
    'contains': 'contains',
    'text': 'searchText',
    'fields': 'searchFields',
    // denote an array or single string
    'spatialReference': 'sr',
    'sr': 'sr',
    'layers': 'layers',
    'returnGeometry': 'returnGeometry',
    'maxAllowableOffset': 'maxAllowableOffset',
    'precision': 'geometryPrecision',
    'dynamicLayers': 'dynamicLayers',
    'returnZ': 'returnZ',
    'returnM': 'returnM',
    'gdbVersion': 'gdbVersion',
    // skipped implementing this (for now) because the REST service implementation isnt consistent between operations
    // 'transform': 'datumTransformations',
    'token': 'token'
  },
  path: 'find',
  params: {
    sr: 4326,
    contains: true,
    returnGeometry: true,
    returnZ: true,
    returnM: false
  },
  layerDefs: function layerDefs(id, where) {
    this.params.layerDefs = this.params.layerDefs ? this.params.layerDefs + ';' : '';
    this.params.layerDefs += [id, where].join(':');
    return this;
  },
  simplify: function simplify(map, factor) {
    var mapWidth = Math.abs(map.getBounds().getWest() - map.getBounds().getEast());
    this.params.maxAllowableOffset = mapWidth / map.getSize().y * factor;
    return this;
  },
  run: function run(callback, context) {
    return this.request(function (error, response) {
      callback.call(context, error, response && responseToFeatureCollection(response), response);
    }, context);
  }
});

function find(options) {
  return new Find(options);
}

var Identify = Task.extend({
  path: 'identify',
  between: function between(start, end) {
    this.params.time = [start.valueOf(), end.valueOf()];
    return this;
  }
});

function identify(options) {
  return new Identify(options);
}

var LEsri = {};
LEsri.VERSION = esri_leaflet_version;
LEsri.Support = Support;
LEsri.options = esri_leaflet_options;
LEsri.Util = EsriUtil;
LEsri.get = esri_leaflet_get;
LEsri.post = xmlHttpPost;
LEsri.request = esri_leaflet_request;
LEsri.Task = Task;
LEsri.task = task;
LEsri.Query = Query;
LEsri.query = esri_leaflet_query;
LEsri.Find = Find;
LEsri.find = find;
LEsri.Identify = Identify;
LEsri.identify = identify;
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

// EXTERNAL MODULE: external {"commonjs2":"cesium","amd":"cesium","commonjs":"cesium","root":"Cesium"}
var external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/esri/layer/ArcGisWfsLayer.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var LodGraphicLayer = external_sxii_["layer"].LodGraphicLayer;
/**
 * ArcGIS WFS服务图层，
 * 按瓦片网格分块分层加载。
 * 【需要引入 sxii-esri 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {BaseGraphicLayer.ConstructorOptions} [options.通用参数] 包含父类支持的所有参数
 *
 * @param {String} options.url ArcGIS服务地址, 示例：'http://data.marsgis.cn/arcgis/rest/services/mars/hefei/MapServer/37',
 * @param {String} [options.token] 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌。
 * @param {String} [options.where] 用于筛选数据的where查询条件
 *
 * @param {Object} [options.parameters] 要在URL中 传递给WFS服务GetFeature请求的其他参数。
 * @param {Object} [options.headers] 将被添加到HTTP请求头。
 * @param {Cesium.Proxy} [options.proxy] 加载资源时使用的代理。
 *
 * @param {Number} [options.minimumLevel=0] 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据。【影响效率的重要参数】
 * @param {Number} [options.maximumLevel] 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据。
 * @param {Object} options.rectangle 瓦片数据的矩形区域范围
 * @param {Number} options.rectangle.xmin 最小经度值, -180 至 180
 * @param {Number} options.rectangle.xmax 最大纬度值, -180 至 180
 * @param {Number} options.rectangle.ymin 最小纬度值, -90 至 90
 * @param {Number} options.rectangle.ymax 最大纬度值, -90 至 90
 * @param {Number[]} options.bbox bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
 * @param {Boolean} options.debuggerTileInfo  是否开启测试显示瓦片信息
 *
 *
 * @param {Object} [options.dth] 标识当前图层为单体化类型数据
 * @param {String} [options.dth.type='mouseMove'] 标识是鼠标移入还是单击进行展示单体化面 , 可选值： 'click'、'mouseMove'
 * @param {String} [options.dth.color='#ffff00'] 单体化面的颜色
 * @param {Number} [options.dth.opacity=0.3] 单体化面的透明度
 * @param {Number} [options.dth.buffer] 缓冲扩大面的范围（单位：米）
 *
 * @param {Object} options.clustering 设置聚合相关参数[entity点类型时]：
 * @param {Boolean} [options.clustering.enabled=false] 是否开启聚合
 * @param {Number} [options.clustering.pixelRange=20] 多少像素矩形范围内聚合
 * @param {Boolean} [options.clustering.clampToGround=true] 是否贴地
 * @param {Number} [options.clustering.radius=28] 圆形图标的整体半径大小（单位：像素）
 * @param {Number} [options.clustering.radiusIn=radius-5] 圆形图标的内圆半径大小（单位：像素）
 * @param {String} [options.clustering.fontColor='#ffffff'] 数字的颜色
 * @param {String} [options.clustering.color='rgba(181, 226, 140, 0.6)'] 圆形图标的背景颜色，默认自动处理
 * @param {String} [options.clustering.colorIn='rgba(110, 204, 57, 0.5)'] 圆形图标的内圆背景颜色，默认自动处理
 *
 * @param {Object} [options.symbol] 矢量数据的style样式
 * @param {GraphicType} [options.symbol.type] 标识数据类型，默认是根据数据生成 point、polyline、polygon
 * @param {Object} options.symbol.styleOptions Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link graphic#~GraphicType}
 * @param {String} [options.symbol.styleField] 按 styleField 属性设置不同样式。
 * @param {Object} [options.symbol.styleFieldOptions] 按styleField值与对应style样式的键值对象。
 * @param {Function} [options.symbol.callback] 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
 *
 * @export
 * @class ArcGisWfsLayer
 * @extends {LodGraphicLayer}
 * @see [支持的事件类型]{@link LodGraphicLayer.EventType}
 */

var ArcGisWfsLayer_ArcGisWfsLayer = /*#__PURE__*/function (_LodGraphicLayer) {
  inherits_default()(ArcGisWfsLayer, _LodGraphicLayer);

  var _super = _createSuper(ArcGisWfsLayer);

  function ArcGisWfsLayer() {
    classCallCheck_default()(this, ArcGisWfsLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArcGisWfsLayer, [{
    key: "queryGridData",
    value:
    /**
     * 根据LOD分块信息去请求对应的Tile瓦块内的数据
     * @param {Object} grid 瓦片信息对象
     * @param {Function} callback 数据获取完成后调用该回调方法。如:callback(grid, arrdata)
     * @return {void}  无
     * @private
     */
    function queryGridData(grid, callback) {
      var _this = this;

      var url = this.options.url;

      if (this.options.layers && this.options.layers.length > 0) {
        url += '/' + this.options.layers[0];
      }

      var query = LEsri.query({
        url: url
      });

      if (this.options.token) {
        query.token(this.options.token);
      } //网格


      var bounds = L.latLngBounds(L.latLng(grid.extent.ymin, grid.extent.xmin), L.latLng(grid.extent.ymax, grid.extent.xmax));
      query.within(bounds);

      if (this.options.where) {
        query.where(this.options.where);
      }

      query.run(function (error, featureCollection, response) {
        if (!_this.show || !_this._cacheGrid[grid.key]) {
          return; //异步请求结束时,如果已经卸载了网格就直接跳出。
        }

        if (error != null && error.code > 0) {
          external_sxii_["Log"].logError('arcgis服务访问出错', error);
          return;
        }

        if (featureCollection === undefined || featureCollection == null) {
          return; //数据为空
        }

        if (featureCollection.type === 'Feature') {
          featureCollection = {
            type: 'FeatureCollection',
            features: [featureCollection]
          };
        }

        callback(grid, featureCollection.features);
      });
    }
    /**
     * 根据 attr属性 创建 矢量对象
     * @param {Object} grid 瓦片信息对象
     * @param {Object} item 数据的属性信息，当前是geojson
     * @return {Graphic}  矢量对象
     * @private
     */

  }, {
    key: "createGraphic",
    value: function createGraphic(grid, item) {
      var _this$options$dth;

      if (((_this$options$dth = this.options.dth) === null || _this$options$dth === void 0 ? void 0 : _this$options$dth.buffer) > 0) {
        //是建筑物单体化时,缓冲扩大点范围
        item = external_sxii_["PolyUtil"].buffer(item, this.options.dth.buffer);
      }

      if (this.options.createGraphic) {
        //传参方式
        return this.options.createGraphic(grid, item);
      }

      var arr = this.loadGeoJSON(item, {
        clear: false
      });

      if ((arr === null || arr === void 0 ? void 0 : arr.length) > 0) {
        return arr[0];
      } else {
        return null;
      }
    }
    /**
     * 更新where条件后 刷新数据
     *
     * @param {String} where 筛选条件
     * @return {void}  无
     */

  }, {
    key: "setWhere",
    value: function setWhere(where) {
      this.options.where = where;
      this.reload();
    }
  }]);

  return ArcGisWfsLayer;
}(LodGraphicLayer); //注册下

external_sxii_["LayerUtil"].register('arcgis_wfs', ArcGisWfsLayer_ArcGisWfsLayer);
external_sxii_["layer"].ArcGisWfsLayer = ArcGisWfsLayer_ArcGisWfsLayer;
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/esri/layer/ArcGisWfsSingleLayer.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArcGisWfsSingleLayer_createSuper(Derived) { var hasNativeReflectConstruct = ArcGisWfsSingleLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ArcGisWfsSingleLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


 // import { L } from "../lib/leaflet";


var GeoJsonLayer = external_sxii_["layer"].GeoJsonLayer;
/**
 * ArcGIS WFS服务图层，
 * 一次性请求加载，适合少量数据时使用。
 * 【需要引入 sxii-esri 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 *
 * @param {String} options.url ArcGIS服务地址, 示例：'http://data.marsgis.cn/arcgis/rest/services/mars/hefei/MapServer/37',
 * @param {String} [options.token] 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌。
 * @param {String} [options.where] 用于筛选数据的where查询条件
 *
 * @param {BaseGraphicLayer.ConstructorOptions} [options.通用参数] 包含父类支持的所有参数
 * @param {String} [options.url] geojson文件或服务url地址
 * @param {Object} [options.data] geojson格式规范数据对象，与url二选一即可。
 * @param {Function} [options.format] 可以对加载的geojson数据进行格式化或转换操作
 * @param {Object} [options.dth] 标识当前图层为单体化类型数据
 * @param {String} [options.dth.type='mouseMove'] 标识是鼠标移入还是单击进行展示单体化面 , 可选值： 'click'、'mouseMove'
 * @param {String} [options.dth.color='#ffff00'] 单体化面的颜色
 * @param {Number} [options.dth.opacity=0.3] 单体化面的透明度
 * @param {Object} [options.buildings] 标识当前图层为建筑物白膜类型数据
 * @param {String} [options.buildings.bottomHeight] 建筑物底部高度（如:0） 属性字段名称（如:{bottomHeight}）
 * @param {String} [options.buildings.cloumn=1]  层数，楼的实际高度 = height*cloumn
 * @param {String|Number} [options.buildings.height=3.5]  层高的  固定层高数值（如:10） 或 属性字段名称（如:{height}）
 *
 * @param {Object} [options.symbol] 矢量数据的style样式
 * @param {BillboardEntity.StyleOptions} options.symbol.styleOptions 点数据时的Style样式，可以附加 model {@link ModelEntity.StyleOptions} 或 point {@link PointEntity.StyleOptions}
 * @param {PolylineEntity.StyleOptions} options.symbol.styleOptions 线数据时的Style样式，可以附加 corridor {@link CorridorEntity.StyleOptions}
 * @param {PolygonEntity.StyleOptions} options.symbol.styleOptions 面数据时的Style样式
 * @param {String} [options.symbol.styleField] 按 styleField 属性设置不同样式。
 * @param {Object} [options.symbol.styleFieldOptions] 按styleField值与对应style样式的键值对象。
 * @param {Function} [options.symbol.callback] 自定义判断处理返回style ，示例：callback: function (attr, entity, styleOpt){  return { color: "#ff0000" };  }
 * @export
 * @class ArcGisWfsSingleLayer
 * @extends {GeoJsonLayer}
 */

var ArcGisWfsSingleLayer_ArcGisWfsSingleLayer = /*#__PURE__*/function (_GeoJsonLayer) {
  inherits_default()(ArcGisWfsSingleLayer, _GeoJsonLayer);

  var _super = ArcGisWfsSingleLayer_createSuper(ArcGisWfsSingleLayer);

  function ArcGisWfsSingleLayer() {
    classCallCheck_default()(this, ArcGisWfsSingleLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArcGisWfsSingleLayer, [{
    key: "load",
    value: function load() {
      var _this = this;

      var newOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.options = _objectSpread(_objectSpread({}, this.options), newOptions);

      if (this._dataSource) {
        this._map.dataSources.remove(this._dataSource);

        this._dataSource = null;
      }

      var url = this.options.url;

      if (this.options.layers && this.options.layers.length > 0) {
        url += '/' + this.options.layers[0];
      }

      var query = LEsri.query({
        url: url
      });

      if (this.options.token) {
        query.token(this.options.token);
      }

      if (this.options.where) {
        query.where(this.options.where);
      }

      query.run(function (error, featureCollection, response) {
        if (error != null && error.code > 0) {
          external_sxii_["Log"].logError('arcgis服务访问出错', error);

          _this.fire(external_sxii_["EventType"].load);

          return;
        }

        if (featureCollection === undefined || featureCollection == null || featureCollection.features.length === 0) {
          _this.fire(external_sxii_["EventType"].load);

          return;
        } else {
          _this._load_data(featureCollection);
        }
      });
    }
    /**
     * 更新where条件后 刷新数据
     *
     * @param {String} where 筛选条件
     * @return {void}  无
     */

  }, {
    key: "setWhere",
    value: function setWhere(where) {
      this.load({
        where: where
      });
    }
  }]);

  return ArcGisWfsSingleLayer;
}(GeoJsonLayer); //注册下

external_sxii_["LayerUtil"].register('arcgis_wfs_single', ArcGisWfsSingleLayer_ArcGisWfsSingleLayer);
external_sxii_["layer"].ArcGisWfsSingleLayer = ArcGisWfsSingleLayer_ArcGisWfsSingleLayer;
// CONCATENATED MODULE: ./src/esri/query/QueryArcServer.js







function QueryArcServer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function QueryArcServer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QueryArcServer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QueryArcServer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function QueryArcServer_createSuper(Derived) { var hasNativeReflectConstruct = QueryArcServer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function QueryArcServer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var BaseClass = external_sxii_["BaseClass"];
/**
 * @typedef {Object} QueryArcServer.EventType
 * 当前类支持的{@link EventType}事件类型
 *
 * @property {String} click 左键单击 鼠标事件
 * @property {String} load 完成加载，执行所有内部处理后
 *
 * @example
 * //绑定监听事件
 * layer.on(sxii.EventType.load, function (event) {
 *   console.log('矢量数据对象加载完成', event)
 * })
 * @see BaseClass#on
 * @see BaseClass#off
 */

/**
 * ArcGIS WFS矢量服务查询类，
 * 【需要引入 sxii-esri 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {String} options.url ArcGIS服务地址, 示例：'http://data.marsgis.cn/arcgis/rest/services/mars/hefei/MapServer/37',
 *
 * @param {Number} [options.pageSize=10] 每页条数
 *
 * @param {Object} [options.headers={}] 将被添加到HTTP请求头。
 * @param {Cesium.Proxy} [options.proxy] 加载资源时使用的代理。
 *
 * @export
 * @class QueryArcServer
 * @extends {BaseClass}
 * @see [支持的事件类型]{@link QueryArcServer.EventType}
 */

var QueryArcServer_QueryArcServer = /*#__PURE__*/function (_BaseClass) {
  inherits_default()(QueryArcServer, _BaseClass);

  var _super = QueryArcServer_createSuper(QueryArcServer);

  function QueryArcServer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, QueryArcServer);

    _this = _super.call(this, options);
    _this.options = options;
    _this.queryWFS = LEsri.query({
      url: options.url
    });
    _this.name = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](options.name, '');
    _this._pageSize = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](options.pageSize, 10); // 每页条数

    _this._allCount = 0; //总记录数

    _this._allPage = 0; //总页数

    _this._pageIndex = 1; //当前第几页

    _this.arrIDS = [];
    return _this;
  } //========== 对外属性 =========

  /**
   * ArcGIS服务地址
   * @type {String}
   */


  createClass_default()(QueryArcServer, [{
    key: "url",
    get: function get() {
      return this.options.url;
    },
    set: function set(val) {
      this.options.url = val;
      this.queryWFS = LEsri.query({
        url: val
      });
    }
    /**
     * 分页的 每页条数
     * @type {Number}
     */

  }, {
    key: "pageSize",
    get: function get() {
      return this._pageSize;
    },
    set: function set(val) {
      this._pageSize = val;
    }
    /**
     * 总记录数
     * @type {Number}
     * @readonly
     */

  }, {
    key: "allCount",
    get: function get() {
      return this._allCount;
    }
    /**
     * 总页数
     * @type {Number}
     * @readonly
     */

  }, {
    key: "allPage",
    get: function get() {
      return this._allPage;
    }
    /**
     * 页码，当前第几页
     * @type {Number}
     * @readonly
     */

  }, {
    key: "pageIndex",
    get: function get() {
      return this._pageIndex;
    },
    set: function set(val) {
      this._pageIndex = val;
      this.showPage(val);
    }
    /**
     * 用于显示查询结果的GeoJsonLayer图层，图层参数在当前类构造方法中传入
     * @type {GraphicLayer}
     * @readonly
     */

  }, {
    key: "layer",
    get: function get() {
      if (!this._geoJsonLayer) {
        var layerOptions = QueryArcServer_objectSpread({
          popup: 'all'
        }, this.options);

        delete layerOptions.url;
        delete layerOptions.data;
        this._geoJsonLayer = new external_sxii_["layer"].GeoJsonLayer(layerOptions);

        this._geoJsonLayer.on(external_sxii_["EventType"].load, this.geoJsonLayer_onLoadHandler, this);

        this._geoJsonLayer.on(external_sxii_["EventType"].click, this.geoJsonLayer_onClickHandler, this);
      }

      return this._geoJsonLayer;
    } //========== 方法 ==========

    /**
     * 首页，查看第1页数据
     * @return {void}  无
     */

  }, {
    key: "showFirstPage",
    value: function showFirstPage() {
      this.showPage(1);
    }
    /**
     * 上一页
     * @return {void}  无
     */

  }, {
    key: "showPretPage",
    value: function showPretPage() {
      this._pageIndex = this._pageIndex - 1;

      if (this._pageIndex < 1) {
        this._pageIndex = 1;
      }

      this.showPage(this._pageIndex);
    }
    /**
     * 下一页
     * @return {void}  无
     */

  }, {
    key: "showNextPage",
    value: function showNextPage() {
      this._pageIndex = this._pageIndex + 1;

      if (this._pageIndex > this.allPage) {
        this._pageIndex = this.allPage;
      }

      this.showPage(this._pageIndex);
    }
    /**
     * 跳转到指定页
     * @param {Number} pageIndex 指定页
     * @return {void}  无
     */

  }, {
    key: "showPage",
    value: function showPage(pageIndex) {
      this._pageIndex = pageIndex;

      this._queryPageByIds(this.lastQueryOpts);
    }
    /**
     * 按指定类别自动查询
     *
     * @param {Object} queryOptions 查询参数
     * @param {String} [queryOptions.text] 检索关键字。
     * @param {Boolean} [queryOptions.like=true] 检索关键字时，是否模糊匹配，false时精确查询。
     * @param {String} [queryOptions.column] 检索关键字的字段名称。
     * @param {String} [queryOptions.where] 自定义的检索条件，与text二选一
     * @param {BaseGraphic} [queryOptions.graphic] 限定的搜索区域
     * @param {Boolean} [queryOptions.page=true] 是否分页查询,false时不分页，一次性查询返回
     *
     * @param {Function} [queryOptions.success] 查询完成的回调方法
     * @param {Function} [queryOptions.error] 查询失败的回调方法
     * @return {this} 当前对象本身，可以链式调用
     */

  }, {
    key: "query",
    value: function query(queryOptions) {
      var _this2 = this;

      this.lastQueryOpts = queryOptions;
      this._pageIndex = 1;
      this.arrIDS = [];
      this.queryWFS.featureIds(null); //查询关键字

      if (queryOptions.column) {
        var where = '';

        if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](queryOptions.like, true)) {
          // 根据关键字进行查询
          where = queryOptions.column + "  like '%" + queryOptions.text + "%' ";
        } else {
          //根据某个属性类别进行查询
          where = queryOptions.column + "='" + queryOptions.text + "'";
        }

        this.queryWFS.where(where);
      } else if (queryOptions.where) {
        this.queryWFS.where(queryOptions.where);
      } //限定范围


      if (queryOptions.graphic) {
        var graphic = queryOptions.graphic;

        if (graphic.type === 'rectangle') {
          var coor = graphic.outlineCoordinates;
          this.queryWFS.intersects(L.latLngBounds(L.latLng(coor[0][1], coor[0][0]), L.latLng(coor[2][1], coor[2][0])));
        } else if (graphic.type === 'polygon') {
          this.queryWFS.intersects(graphic.toGeoJSON());
        } else if (graphic.type === 'circle') {
          //this.queryWFS.nearby(latlngs, distance)   需要ArcGIS Server 10.3+
          this.queryWFS.intersects({
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [graphic.outlineCoordinates]
            }
          });
        } else {
          //geojson
          this.queryWFS.intersects(queryOptions.graphic);
        }
      } else {
        var _this$queryWFS$params;

        if ((_this$queryWFS$params = this.queryWFS.params) !== null && _this$queryWFS$params !== void 0 && _this$queryWFS$params.geometry) {
          this.queryWFS.params.geometry = null;
        }
      }

      if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](queryOptions.page, true)) {
        this.queryWFS.ids(function (error, arrIDS, response) {
          // console.log(arrIDS)
          if (error != null && error.code > 0) {
            if (queryOptions.error) {
              queryOptions.error(error, error.message);
            }

            return;
          }

          if (arrIDS) {
            _this2.arrIDS = arrIDS;
            _this2._allCount = arrIDS.length; //总记录数

            _this2._allPage = Math.ceil(_this2._allCount / _this2._pageSize); //总页数
          }

          _this2._queryPageByIds(queryOptions);
        });
      } else {
        //不分页
        this.queryWFS.run(function (error, featureCollection, response) {
          if (error != null && error.code > 0) {
            if (queryOptions.error) {
              queryOptions.error(error, error.message);
            }

            return;
          }

          _this2.processFeatureCollection(featureCollection, queryOptions);
        });
      }
    } //根据id数组，进行单页查询数据

  }, {
    key: "_queryPageByIds",
    value: function _queryPageByIds(queryOptions) {
      var _this3 = this;

      if (!this.arrIDS) {
        return;
      }

      if (this._pageIndex < 1 || this._pageIndex > this.allPage) {
        return;
      } //计算 id集合中 该页所在起止位置，找到需要获取的id数组


      var startNum = (this._pageIndex - 1) * this._pageSize;
      var endNum = this._pageIndex * this._pageSize;
      var ids = this.arrIDS.slice(startNum, endNum);
      this.queryWFS.featureIds(ids); //查询该id集合内的数据

      this.queryWFS.run(function (error, featureCollection, response) {
        if (error != null && error.code > 0) {
          if (queryOptions.error) {
            queryOptions.error(error, error.message);
          }

          return;
        }

        _this3.processFeatureCollection(featureCollection, queryOptions);
      });
    }
  }, {
    key: "processFeatureCollection",
    value: function processFeatureCollection(featureCollection, queryOptions) {
      if (featureCollection === undefined || featureCollection == null || featureCollection.features == null || featureCollection.features.length === 0) {
        if (queryOptions.success) {
          queryOptions.success({
            geojson: null,
            count: 0,
            allCount: this.allCount,
            pageSize: this.pageSize,
            allPage: this.allPage,
            pageIndex: this.pageIndex
          });
        }
      } else {
        //剔除有问题数据
        var featuresOK = [];

        for (var i = 0; i < featureCollection.features.length; i++) {
          var feature = featureCollection.features[i];

          if (feature == null || feature.geometry == null || feature.geometry.coordinates == null || feature.geometry.coordinates.length == 0) {
            continue;
          }

          featuresOK.push(feature);
        }

        featureCollection.features = featuresOK;
        var result = {
          geojson: featureCollection,
          count: featureCollection.features.length,
          allCount: this.allCount,
          pageSize: this.pageSize,
          allPage: this.allPage,
          pageIndex: this.pageIndex
        };

        if (this._geoJsonLayer) {
          this._last_success = function (list) {
            if (queryOptions.success) {
              result.list = list;
              queryOptions.success(result);
            }
          };

          this._geoJsonLayer.load({
            data: featureCollection
          });
        } else {
          if (queryOptions.success) {
            queryOptions.success(result);
          }
        }
      }
    }
  }, {
    key: "geoJsonLayer_onLoadHandler",
    value: function geoJsonLayer_onLoadHandler(event) {
      if (this._last_success) {
        this._last_success(event.list);

        this._last_success = null;
      }

      this.fire(external_sxii_["EventType"].load, event);
    }
  }, {
    key: "geoJsonLayer_onClickHandler",
    value: function geoJsonLayer_onClickHandler(event) {
      this.fire(external_sxii_["EventType"].click, QueryArcServer_objectSpread(QueryArcServer_objectSpread({}, event), {}, {
        layer: this._geoJsonLayer
      }));
    }
    /**
     * 清除
     * @return {void}  无
     */

  }, {
    key: "clear",
    value: function clear() {
      if (this._last_success) {
        this._last_success = null;
      }

      if (this._geoJsonLayer) {
        this._geoJsonLayer.clear();
      }
    }
  }]);

  return QueryArcServer;
}(BaseClass);
external_sxii_["query"].QueryArcServer = QueryArcServer_QueryArcServer;
// CONCATENATED MODULE: ./src/index.js
 //leaflet库


 // eslint-disable-next-line no-import-assign

external_sxii_["L"] = L;
external_sxii_["L"].esri = LEsri;




/***/ })
/******/ ]);
});