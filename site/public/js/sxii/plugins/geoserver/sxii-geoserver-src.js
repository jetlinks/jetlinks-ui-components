/*!
 * SXII控制geoserver数据操作插件
 * 版本信息：v1.0.1, hash值: aa4a231a4ed41dd95dfb
 * 编译日期：2022-05-12 11:20:34
 * 版权所有：Copyright by 山西省投资集团信息技术有限公司 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sxiiGeoserver", [], factory);
	else if(typeof exports === 'object')
		exports["sxiiGeoserver"] = factory();
	else
		root["sxiiGeoserver"] = factory();
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
__webpack_require__.d(__webpack_exports__, "GeoserverUtil", function() { return /* reexport */ GeoserverUtil_namespaceObject; });

// NAMESPACE OBJECT: ./src/geoserver/GeoserverUtil.js
var GeoserverUtil_namespaceObject = {};
__webpack_require__.r(GeoserverUtil_namespaceObject);
__webpack_require__.d(GeoserverUtil_namespaceObject, "getFeatures", function() { return getFeatures; });
__webpack_require__.d(GeoserverUtil_namespaceObject, "addFeature", function() { return addFeature; });
__webpack_require__.d(GeoserverUtil_namespaceObject, "delFeature", function() { return delFeature; });
__webpack_require__.d(GeoserverUtil_namespaceObject, "editFeaturePo", function() { return editFeaturePo; });
__webpack_require__.d(GeoserverUtil_namespaceObject, "editFeatureVal", function() { return editFeatureVal; });

// CONCATENATED MODULE: ./src/geoserver/GeoserverUtil.js
/**
 * GeoserverUtil 数据方法，【需要引入 sxii-geoserver 插件库】
 * @module GeoserverUtil
 */

/**
 * 数据列表
 *
 * @export
 * @param {String} url 请求地址
 */
function getFeatures(url, names) {
  var request = new XMLHttpRequest();
  url = url + "?service=WFS&version=1.0.0&request=GetFeature&typeName=" + names + "&maxFeatures=1000&outputFormat=application%2Fjson";
  request.open('POST', url, false); //false表示同步请求

  request.send(null);

  if (request.status !== 200) {
    throw new Error('查询失败');
  }

  var data = JSON.parse(request.responseText);
  return data;
}
/**
 * 数据增加
 *
 * @export
 * @param {String} url 请求地址
 * @param {jsonObj} jsonObj 添加的对象
 */

function addFeature(ip, url, featureNS, featureType, jsonObj) {
  var newFeature = new ol.Feature();
  newFeature.setGeometryName('geom');

  for (var key in jsonObj) {
    newFeature.set(key, jsonObj[key]);
  }

  var WFSTSerializer = new ol.format.WFS();
  var featObject = WFSTSerializer.writeTransaction([newFeature], null, null, {
    featureType: featureType,
    //图层名
    featureNS: ip + '/' + featureNS,
    srsName: 'EPSG:4326'
  });
  var serializer = new XMLSerializer();
  var featString = serializer.serializeToString(featObject);
  var request = new XMLHttpRequest();
  request.open('POST', url + '?service=wfs');
  request.setRequestHeader('Content-Type', 'text/xml');
  request.send(featString);
}
/**
 * 数据删除
 *
 * @export
 * @param {String} url 请求地址
 * @param {String} id 对象id
 */

function delFeature(ip, url, featureNS, featureType, id) {
  var features = new ol.Feature();
  features.setGeometryName('geom');
  features.setId(id);
  var WFSTSerializer = new ol.format.WFS();
  var featObject = WFSTSerializer.writeTransaction(null, null, [features], {
    featureType: featureType,
    //图层名
    featureNS: ip + '/' + featureNS,
    srsName: 'EPSG:4326'
  });
  var serializer = new XMLSerializer();
  var featString = serializer.serializeToString(featObject);
  var request = new XMLHttpRequest();
  request.open('POST', url + '?service=wfs');
  request.setRequestHeader('Content-Type', 'text/xml');
  request.send(featString);
}
/**
 * 修改位置
 *
 * @export
 * @param {String} url 请求地址
 * @param {String} id 对象id
 * @param {String} longitude 经度
 * @param {String} latitude 纬度
 */

function editFeaturePo(ip, url, featureNS, featureType, id, longitude, latitude) {
  var features = new ol.Feature();
  features.setGeometryName('geom');
  features.setId(id);
  features.set('longitude', longitude);
  features.set('latitude', latitude);
  var WFSTSerializer = new ol.format.WFS();
  var featObject = WFSTSerializer.writeTransaction(null, [features], null, {
    featureType: featureType,
    //图层名
    featureNS: ip + '/' + featureNS,
    srsName: 'EPSG:4326'
  });
  var serializer = new XMLSerializer();
  var featString = serializer.serializeToString(featObject);
  var request = new XMLHttpRequest();
  request.open('POST', url + '?service=wfs');
  request.setRequestHeader('Content-Type', 'text/xml');
  request.send(featString);
}
/**
 * 修改备注
 *
 * @export
 * @param {String} url 请求地址
 * @param {String} id 对象id
 * @param {String} remark 备注
 */

function editFeatureVal(ip, url, featureNS, featureType, id, remark) {
  var features = new ol.Feature();
  features.setGeometryName('geom');
  features.setId(id);
  features.set('remark', remark);
  var WFSTSerializer = new ol.format.WFS();
  var featObject = WFSTSerializer.writeTransaction(null, [features], null, {
    featureType: featureType,
    //图层名
    featureNS: ip + '/' + featureNS,
    srsName: 'EPSG:4326'
  });
  var serializer = new XMLSerializer();
  var featString = serializer.serializeToString(featObject);
  var request = new XMLHttpRequest();
  request.open('POST', url + '?service=wfs');
  request.setRequestHeader('Content-Type', 'text/xml');
  request.send(featString);
}
// CONCATENATED MODULE: ./src/index.js

sxii.GeoserverUtil = GeoserverUtil_namespaceObject;


/***/ })
/******/ ]);
});