/*!
 * SXII之polygon多边形查询插件
 * 版本信息：v1.0.1, hash值: 816ee4a27488b3c41933
 * 编译日期：2022-04-19 08:36:05
 * 版权所有：Copyright by 山西省投资集团信息技术有限公司 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sxiiPolygon", [], factory);
	else if(typeof exports === 'object')
		exports["sxiiPolygon"] = factory();
	else
		root["sxiiPolygon"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GeoserverPolygon", function() { return /* reexport */ GeoserverPolygon_namespaceObject; });

// NAMESPACE OBJECT: ./src/polygon/GeoserverPolygon.js
var GeoserverPolygon_namespaceObject = {};
__webpack_require__.r(GeoserverPolygon_namespaceObject);
__webpack_require__.d(GeoserverPolygon_namespaceObject, "getPolygonFeature", function() { return getPolygonFeature; });

// CONCATENATED MODULE: ./src/polygon/GeoserverPolygon.js
/**
 * GeoserverPolygon 多边形查询，【需要引入 sxii-polygon 插件库】
 * @module GeoserverPolygon
 */

/**
 * 多边形查询
 *
 * @export
 * @param {String} url 请求ip地址
 * @param {String} featureNS 实例名
 * @param {String} featureType 图层名
 * @param {String} polsample 请求范围点位集合
 *         面： x1 y1-x2 y2-x3 y3-x4 y4-x1 y1
 * @param {int} ktype 类型
 */
function getPolygonFeature(url, featureNS, featureType, polsample, ktype) {
  var request = new XMLHttpRequest();
  url = url + "/Sxii_Server/" + featureNS + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + featureNS + "%3A" + featureType + "&maxFeatures=10000000000000&outputFormat=application%2Fjson" + "&viewparams=polsample:" + polsample;

  if (ktype != "") {
    url = url + ";ktype:" + ktype;
  }

  request.open('POST', url, false); //false表示同步请求

  request.send(null);

  if (request.status !== 200) {
    throw new Error('查询失败');
  }

  var data = JSON.parse(request.responseText);
  return data;
}
// CONCATENATED MODULE: ./src/index.js

sxii.GeoserverPolygon = GeoserverPolygon_namespaceObject;


/***/ })
/******/ ]);
});