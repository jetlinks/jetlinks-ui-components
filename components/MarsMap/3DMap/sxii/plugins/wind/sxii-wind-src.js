/*!
 * Mars3D平台插件,支持气象 风向图 功能插件
 * 版本信息：v3.0.37, hash值: 586f73f5a441de015840
 * 编译日期：2021-08-31 11:00:12
 * 版权所有：Copyright by 山投信息 http://sxii.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cesium"), require("sxii"));
	else if(typeof define === 'function' && define.amd)
		define("mars3dWind", ["cesium", "sxii"], factory);
	else if(typeof exports === 'object')
		exports["mars3dWind"] = factory(require("cesium"), require("sxii"));
	else
		root["mars3dWind"] = factory(root["Cesium"], root["sxii"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

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

var _typeof = __webpack_require__(18)["default"];

var assertThisInitialized = __webpack_require__(19);

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
/***/ (function(module, exports) {

module.exports = "attribute vec3 position;\r\nattribute vec2 st;\r\n\r\nvarying vec2 textureCoordinate;\r\n\r\nvoid main() {\r\n    textureCoordinate = st;\r\n    gl_Position = vec4(position, 1.0);\r\n}"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "attribute vec2 st;\n// it is not normal itself, but used to control normal\nattribute vec3 normal; // (point to use, offset sign, not used component)\n\nuniform sampler2D currentParticlesPosition;\nuniform sampler2D postProcessingPosition;\nuniform sampler2D postProcessingSpeed;\n\nuniform float particleHeight;\n\nuniform float aspect;\nuniform float pixelSize;\nuniform float lineWidth;\n\nvarying float speedNormalization;\n\nvec3 convertCoordinate(vec3 lonLatLev) {\n    // WGS84 (lon, lat, lev) -> ECEF (x, y, z)\n    // see https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_geodetic_to_ECEF_coordinates for detail\n\n    // WGS 84 geometric constants \n    float a = 6378137.0; // Semi-major axis \n    float b = 6356752.3142; // Semi-minor axis \n    float e2 = 6.69437999014e-3; // First eccentricity squared\n\n    float latitude = radians(lonLatLev.y);\n    float longitude = radians(lonLatLev.x);\n\n    float cosLat = cos(latitude);\n    float sinLat = sin(latitude);\n    float cosLon = cos(longitude);\n    float sinLon = sin(longitude);\n\n    float N_Phi = a / sqrt(1.0 - e2 * sinLat * sinLat);\n    float h = particleHeight; // it should be high enough otherwise the particle may not pass the terrain depth test\n\n    vec3 cartesian = vec3(0.0);\n    cartesian.x = (N_Phi + h) * cosLat * cosLon;\n    cartesian.y = (N_Phi + h) * cosLat * sinLon;\n    cartesian.z = ((b * b) / (a * a) * N_Phi + h) * sinLat;\n    return cartesian;\n}\n\nvec4 calcProjectedCoordinate(vec3 lonLatLev) {\n    // the range of longitude in Cesium is [-180, 180] but the range of longitude in the NetCDF file is [0, 360]\n    // [0, 180] is corresponding to [0, 180] and [180, 360] is corresponding to [-180, 0]\n    lonLatLev.x = mod(lonLatLev.x + 180.0, 360.0) - 180.0;\n    vec3 particlePosition = convertCoordinate(lonLatLev);\n    vec4 projectedCoordinate = czm_modelViewProjection * vec4(particlePosition, 1.0);\n    return projectedCoordinate;\n}\n\nvec4 calcOffset(vec4 currentProjectedCoordinate, vec4 nextProjectedCoordinate, float offsetSign) {\n    vec2 aspectVec2 = vec2(aspect, 1.0);\n    vec2 currentXY = (currentProjectedCoordinate.xy / currentProjectedCoordinate.w) * aspectVec2;\n    vec2 nextXY = (nextProjectedCoordinate.xy / nextProjectedCoordinate.w) * aspectVec2;\n\n    float offsetLength = lineWidth / 2.0;\n    vec2 direction = normalize(nextXY - currentXY);\n    vec2 normalVector = vec2(-direction.y, direction.x);\n    normalVector.x = normalVector.x / aspect;\n    normalVector = offsetLength * normalVector;\n\n    vec4 offset = vec4(offsetSign * normalVector, 0.0, 0.0);\n    return offset;\n}\n\nvoid main() {\n    vec2 particleIndex = st;\n\n    vec3 currentPosition = texture2D(currentParticlesPosition, particleIndex).rgb;\n    vec4 nextPosition = texture2D(postProcessingPosition, particleIndex);\n\n    vec4 currentProjectedCoordinate = vec4(0.0);\n    vec4 nextProjectedCoordinate = vec4(0.0);\n    if (nextPosition.w > 0.0) {\n        currentProjectedCoordinate = calcProjectedCoordinate(currentPosition);\n        nextProjectedCoordinate = calcProjectedCoordinate(currentPosition);\n    } else {\n        currentProjectedCoordinate = calcProjectedCoordinate(currentPosition);\n        nextProjectedCoordinate = calcProjectedCoordinate(nextPosition.xyz);\n    }\n\n    float pointToUse = normal.x; // -1 is currentProjectedCoordinate and +1 is nextProjectedCoordinate\n    float offsetSign = normal.y;\n\n    vec4 offset = pixelSize * calcOffset(currentProjectedCoordinate, nextProjectedCoordinate, offsetSign);\n    if (pointToUse < 0.0) {\n        gl_Position = currentProjectedCoordinate + offset;\n    } else {\n        gl_Position = nextProjectedCoordinate + offset;\n    }\n\n    speedNormalization = texture2D(postProcessingSpeed, particleIndex).a;\n}"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D colorTable;\n\nvarying float speedNormalization;\n\nvoid main() {\n    gl_FragColor = texture2D(colorTable, vec2(speedNormalization, 0.0));\n}"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D segmentsColorTexture;\r\nuniform sampler2D segmentsDepthTexture;\r\n\r\nuniform sampler2D currentTrailsColor;\r\nuniform sampler2D trailsDepthTexture;\r\n\r\nuniform float fadeOpacity;\r\n\r\nvarying vec2 textureCoordinate;\r\n\r\nvoid main() {\r\n    vec4 pointsColor = texture2D(segmentsColorTexture, textureCoordinate);\r\n    vec4 trailsColor = texture2D(currentTrailsColor, textureCoordinate);\r\n\r\n    trailsColor = floor(fadeOpacity * 255.0 * trailsColor) / 255.0; // make sure the trailsColor will be strictly decreased\r\n\r\n    float pointsDepth = texture2D(segmentsDepthTexture, textureCoordinate).r;\r\n    float trailsDepth = texture2D(trailsDepthTexture, textureCoordinate).r;\r\n    float globeDepth = czm_unpackDepth(texture2D(czm_globeDepthTexture, textureCoordinate));\r\n\r\n    gl_FragColor = vec4(0.0);\r\n    if (pointsDepth < globeDepth) {\r\n        gl_FragColor = gl_FragColor + pointsColor;\r\n    }\r\n    if (trailsDepth < globeDepth) {\r\n        gl_FragColor = gl_FragColor + trailsColor;\r\n    }\r\n    gl_FragDepthEXT = min(pointsDepth, trailsDepth);\r\n}"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D trailsColorTexture;\r\nuniform sampler2D trailsDepthTexture;\r\n\r\nvarying vec2 textureCoordinate;\r\n\r\nvoid main() {\r\n    vec4 trailsColor = texture2D(trailsColorTexture, textureCoordinate);\r\n    float trailsDepth = texture2D(trailsDepthTexture, textureCoordinate).r;\r\n    float globeDepth = czm_unpackDepth(texture2D(czm_globeDepthTexture, textureCoordinate));\r\n\r\n    if (trailsDepth < globeDepth) {\r\n        gl_FragColor = trailsColor;\r\n    } else {\r\n        gl_FragColor = vec4(0.0);\r\n    }\r\n}"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "// the size of UV textures: width = lon, height = lat*lev\nuniform sampler2D U; // eastward wind \nuniform sampler2D V; // northward wind\n\nuniform sampler2D currentParticlesPosition; // (lon, lat, lev)\n\nuniform vec3 dimension; // (lon, lat, lev)\nuniform vec3 minimum; // minimum of each dimension\nuniform vec3 maximum; // maximum of each dimension\nuniform vec3 interval; // interval of each dimension\n\nvarying vec2 v_textureCoordinates;\n\nvec2 mapPositionToNormalizedIndex2D(vec3 lonLatLev) {\n    // ensure the range of longitude and latitude\n    lonLatLev.x = mod(lonLatLev.x, 360.0);\n    lonLatLev.y = clamp(lonLatLev.y, -90.0, 90.0);\n\n    vec3 index3D = vec3(0.0);\n    index3D.x = (lonLatLev.x - minimum.x) / interval.x;\n    index3D.y = (lonLatLev.y - minimum.y) / interval.y;\n    index3D.z = (lonLatLev.z - minimum.z) / interval.z;\n\n    // the st texture coordinate corresponding to (col, row) index\n    // example\n    // data array is [0, 1, 2, 3, 4, 5], width = 3, height = 2\n    // the content of texture will be\n    // t 1.0\n    //    |  3 4 5\n    //    |\n    //    |  0 1 2\n    //   0.0------1.0 s\n\n    vec2 index2D = vec2(index3D.x, index3D.z * dimension.y + index3D.y);\n    vec2 normalizedIndex2D = vec2(index2D.x / dimension.x, index2D.y / (dimension.y * dimension.z));\n    return normalizedIndex2D;\n}\n\nfloat getWind(sampler2D windTexture, vec3 lonLatLev) {\n    vec2 normalizedIndex2D = mapPositionToNormalizedIndex2D(lonLatLev);\n    float result = texture2D(windTexture, normalizedIndex2D).r;\n    return result;\n}\n\nconst mat4 kernelMatrix = mat4(\n    0.0, -1.0, 2.0, -1.0, // first column\n    2.0, 0.0, -5.0, 3.0, // second column\n    0.0, 1.0, 4.0, -3.0, // third column\n    0.0, 0.0, -1.0, 1.0 // fourth column\n);\nfloat oneDimensionInterpolation(float t, float p0, float p1, float p2, float p3) {\n    vec4 tVec4 = vec4(1.0, t, t * t, t * t * t);\n    tVec4 = tVec4 / 2.0;\n    vec4 pVec4 = vec4(p0, p1, p2, p3);\n    return dot((tVec4 * kernelMatrix), pVec4);\n}\n\nfloat calculateB(sampler2D windTexture, float t, float lon, float lat, float lev) {\n    float lon0 = floor(lon) - 1.0 * interval.x;\n    float lon1 = floor(lon);\n    float lon2 = floor(lon) + 1.0 * interval.x;\n    float lon3 = floor(lon) + 2.0 * interval.x;\n\n    float p0 = getWind(windTexture, vec3(lon0, lat, lev));\n    float p1 = getWind(windTexture, vec3(lon1, lat, lev));\n    float p2 = getWind(windTexture, vec3(lon2, lat, lev));\n    float p3 = getWind(windTexture, vec3(lon3, lat, lev));\n\n    return oneDimensionInterpolation(t, p0, p1, p2, p3);\n}\n\nfloat interpolateOneTexture(sampler2D windTexture, vec3 lonLatLev) {\n    float lon = lonLatLev.x;\n    float lat = lonLatLev.y;\n    float lev = lonLatLev.z;\n\n    float lat0 = floor(lat) - 1.0 * interval.y;\n    float lat1 = floor(lat);\n    float lat2 = floor(lat) + 1.0 * interval.y;\n    float lat3 = floor(lat) + 2.0 * interval.y;\n\n    vec2 coefficient = lonLatLev.xy - floor(lonLatLev.xy);\n    float b0 = calculateB(windTexture, coefficient.x, lon, lat0, lev);\n    float b1 = calculateB(windTexture, coefficient.x, lon, lat1, lev);\n    float b2 = calculateB(windTexture, coefficient.x, lon, lat2, lev);\n    float b3 = calculateB(windTexture, coefficient.x, lon, lat3, lev);\n\n    return oneDimensionInterpolation(coefficient.y, b0, b1, b2, b3);\n}\n\nvec3 bicubic(vec3 lonLatLev) {\n    // https://en.wikipedia.org/wiki/Bicubic_interpolation#Bicubic_convolution_algorithm\n    float u = interpolateOneTexture(U, lonLatLev);\n    float v = interpolateOneTexture(V, lonLatLev);\n    float w = 0.0;\n    return vec3(u, v, w);\n}\n\nvoid main() {\n    // texture coordinate must be normalized\n    vec3 lonLatLev = texture2D(currentParticlesPosition, v_textureCoordinates).rgb;\n    vec3 windVector = bicubic(lonLatLev);\n    gl_FragColor = vec4(windVector, 0.0);\n}"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D currentParticlesSpeed; // (u, v, w, normalization)\nuniform sampler2D particlesWind;\n\n// used to calculate the wind norm\nuniform vec2 uSpeedRange; // (min, max);\nuniform vec2 vSpeedRange;\nuniform float pixelSize;\nuniform float speedFactor;\n\nvarying vec2 v_textureCoordinates;\n\nfloat calculateWindNorm(vec3 speed) {\n    vec3 percent = vec3(0.0);\n    percent.x = (speed.x - uSpeedRange.x) / (uSpeedRange.y - uSpeedRange.x);\n    percent.y = (speed.y - vSpeedRange.x) / (vSpeedRange.y - vSpeedRange.x);\n    float normalization = length(percent);\n\n    return normalization;\n}\n\nvoid main() {\n    // texture coordinate must be normalized\n    vec3 currentSpeed = texture2D(currentParticlesSpeed, v_textureCoordinates).rgb;\n    vec3 windVector = texture2D(particlesWind, v_textureCoordinates).rgb;\n\n    vec4 nextSpeed = vec4(speedFactor * pixelSize * windVector, calculateWindNorm(windVector));\n    gl_FragColor = nextSpeed;\n}"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D currentParticlesPosition; // (lon, lat, lev)\nuniform sampler2D currentParticlesSpeed; // (u, v, w, normalization)\n\nvarying vec2 v_textureCoordinates;\n\nvec2 lengthOfLonLat(vec3 lonLatLev) {\n    // unit conversion: meters -> longitude latitude degrees\n    // see https://en.wikipedia.org/wiki/Geographic_coordinate_system#Length_of_a_degree for detail\n\n    // Calculate the length of a degree of latitude and longitude in meters\n    float latitude = radians(lonLatLev.y);\n\n    float term1 = 111132.92;\n    float term2 = 559.82 * cos(2.0 * latitude);\n    float term3 = 1.175 * cos(4.0 * latitude);\n    float term4 = 0.0023 * cos(6.0 * latitude);\n    float latLength = term1 - term2 + term3 - term4;\n\n    float term5 = 111412.84 * cos(latitude);\n    float term6 = 93.5 * cos(3.0 * latitude);\n    float term7 = 0.118 * cos(5.0 * latitude);\n    float longLength = term5 - term6 + term7;\n\n    return vec2(longLength, latLength);\n}\n\nvoid updatePosition(vec3 lonLatLev, vec3 speed) {\n    vec2 lonLatLength = lengthOfLonLat(lonLatLev);\n    float u = speed.x / lonLatLength.x;\n    float v = speed.y / lonLatLength.y;\n    float w = 0.0;\n    vec3 windVectorInLonLatLev = vec3(u, v, w);\n\n    vec3 nextParticle = lonLatLev + windVectorInLonLatLev;\n\n    gl_FragColor = vec4(nextParticle, 0.0);\n}\n\nvoid main() {\n    // texture coordinate must be normalized\n    vec3 lonLatLev = texture2D(currentParticlesPosition, v_textureCoordinates).rgb;\n    vec3 speed = texture2D(currentParticlesSpeed, v_textureCoordinates).rgb;\n\n    updatePosition(lonLatLev, speed);\n}"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D nextParticlesPosition;\nuniform sampler2D nextParticlesSpeed; // (u, v, w, normalization)\n\n// range (min, max)\nuniform vec2 lonRange;\nuniform vec2 latRange;\n\nuniform float randomCoefficient; // use to improve the pseudo-random generator\nuniform float dropRate; // drop rate is a chance a particle will restart at random position to avoid degeneration\nuniform float dropRateBump;\n\nvarying vec2 v_textureCoordinates;\n\n// pseudo-random generator\nconst vec3 randomConstants = vec3(12.9898, 78.233, 4375.85453);\nconst vec2 normalRange = vec2(0.0, 1.0);\nfloat rand(vec2 seed, vec2 range) {\n    vec2 randomSeed = randomCoefficient * seed;\n    float temp = dot(randomConstants.xy, randomSeed);\n    temp = fract(sin(temp) * (randomConstants.z + temp));\n    return temp * (range.y - range.x) + range.x;\n}\n\nvec3 generateRandomParticle(vec2 seed, float lev) {\n    // ensure the longitude is in [0, 360]\n    float randomLon = mod(rand(seed, lonRange), 360.0);\n    float randomLat = rand(-seed, latRange);\n\n    return vec3(randomLon, randomLat, lev);\n}\n\nbool particleOutbound(vec3 particle) {\n    return particle.y < -90.0 || particle.y > 90.0;\n}\n\nvoid main() {\n    vec3 nextParticle = texture2D(nextParticlesPosition, v_textureCoordinates).rgb;\n    vec4 nextSpeed = texture2D(nextParticlesSpeed, v_textureCoordinates);\n    float particleDropRate = dropRate + dropRateBump * nextSpeed.a;\n\n    vec2 seed1 = nextParticle.xy + v_textureCoordinates;\n    vec2 seed2 = nextSpeed.xy + v_textureCoordinates;\n    vec3 randomParticle = generateRandomParticle(seed1, nextParticle.z);\n    float randomNumber = rand(seed2, normalRange);\n\n    if (randomNumber < particleDropRate || particleOutbound(nextParticle)) {\n        gl_FragColor = vec4(randomParticle, 1.0); // 1.0 means this is a random particle\n    } else {\n        gl_FragColor = vec4(nextParticle, 0.0);\n    }\n}"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D postProcessingPosition;\nuniform sampler2D nextParticlesSpeed;\n\nvarying vec2 v_textureCoordinates;\n\nvoid main() {\n    vec4 randomParticle = texture2D(postProcessingPosition, v_textureCoordinates);\n    vec4 particleSpeed = texture2D(nextParticlesSpeed, v_textureCoordinates);\n\n    if (randomParticle.a > 0.0) {\n        gl_FragColor = vec4(0.0);\n    } else {\n        gl_FragColor = particleSpeed;\n    }\n}"

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "WindLayer", function() { return /* reexport */ WindLayer_WindLayer; });
__webpack_require__.d(__webpack_exports__, "CanvasWindLayer", function() { return /* reexport */ CanvasWindLayer_CanvasWindLayer; });
__webpack_require__.d(__webpack_exports__, "WindUtil", function() { return /* reexport */ WindUtil_namespaceObject; });

// NAMESPACE OBJECT: ./src/canvasWind/WindUtil.js
var WindUtil_namespaceObject = {};
__webpack_require__.r(WindUtil_namespaceObject);
__webpack_require__.d(WindUtil_namespaceObject, "getU", function() { return getU; });
__webpack_require__.d(WindUtil_namespaceObject, "getV", function() { return getV; });
__webpack_require__.d(WindUtil_namespaceObject, "getSpeed", function() { return getSpeed; });
__webpack_require__.d(WindUtil_namespaceObject, "getDirection", function() { return getDirection; });

// EXTERNAL MODULE: external "sxii"
var external_sxii_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"commonjs2":"cesium","amd":"cesium","commonjs":"cesium","root":"Cesium"}
var external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/wind/CustomPrimitive.js



var CustomPrimitive_CustomPrimitive = /*#__PURE__*/function () {
  function CustomPrimitive(options) {
    classCallCheck_default()(this, CustomPrimitive);

    this.commandType = options.commandType;
    this.geometry = options.geometry;
    this.attributeLocations = options.attributeLocations;
    this.primitiveType = options.primitiveType;
    this.uniformMap = options.uniformMap;
    this.vertexShaderSource = options.vertexShaderSource;
    this.fragmentShaderSource = options.fragmentShaderSource;
    this.rawRenderState = options.rawRenderState;
    this.framebuffer = options.framebuffer;
    this.outputTexture = options.outputTexture;
    this.autoClear = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](options.autoClear, false);
    this.preExecute = options.preExecute;
    this.show = true;
    this.commandToExecute = undefined;
    this.clearCommand = undefined;

    if (this.autoClear) {
      this.clearCommand = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ClearCommand"]({
        color: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Color"](0.0, 0.0, 0.0, 0.0),
        depth: 1.0,
        framebuffer: this.framebuffer,
        pass: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Pass"].OPAQUE
      });
    }
  }

  createClass_default()(CustomPrimitive, [{
    key: "createCommand",
    value: function createCommand(context) {
      switch (this.commandType) {
        case "Draw":
          {
            var vertexArray = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["VertexArray"].fromGeometry({
              context: context,
              geometry: this.geometry,
              attributeLocations: this.attributeLocations,
              bufferUsage: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["BufferUsage"].STATIC_DRAW
            });
            var shaderProgram = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderProgram"].fromCache({
              context: context,
              attributeLocations: this.attributeLocations,
              vertexShaderSource: this.vertexShaderSource,
              fragmentShaderSource: this.fragmentShaderSource
            });
            var renderState = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["RenderState"].fromCache(this.rawRenderState);
            return new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["DrawCommand"]({
              owner: this,
              vertexArray: vertexArray,
              primitiveType: this.primitiveType,
              uniformMap: this.uniformMap,
              modelMatrix: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Matrix4"].IDENTITY,
              shaderProgram: shaderProgram,
              framebuffer: this.framebuffer,
              renderState: renderState,
              pass: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Pass"].OPAQUE
            });
          }

        case "Compute":
          {
            return new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ComputeCommand"]({
              owner: this,
              fragmentShaderSource: this.fragmentShaderSource,
              uniformMap: this.uniformMap,
              outputTexture: this.outputTexture,
              persists: true
            });
          }
      }
    }
  }, {
    key: "setGeometry",
    value: function setGeometry(context, geometry) {
      this.geometry = geometry;
      var vertexArray = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["VertexArray"].fromGeometry({
        context: context,
        geometry: this.geometry,
        attributeLocations: this.attributeLocations,
        bufferUsage: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["BufferUsage"].STATIC_DRAW
      });
      this.commandToExecute.vertexArray = vertexArray;
    }
  }, {
    key: "update",
    value: function update(frameState) {
      if (!this.show) {
        return;
      }

      if (frameState.mode != external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneMode"].SCENE3D) {
        //三维模式下
        return;
      }

      if (!external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defined"](this.commandToExecute)) {
        this.commandToExecute = this.createCommand(frameState.context);
      }

      if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defined"](this.preExecute)) {
        this.preExecute();
      }

      if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defined"](this.clearCommand)) {
        frameState.commandList.push(this.clearCommand);
      }

      frameState.commandList.push(this.commandToExecute);
    }
  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defined"](this.commandToExecute)) {
        this.commandToExecute.shaderProgram = this.commandToExecute.shaderProgram && this.commandToExecute.shaderProgram.destroy();
      }

      return external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["destroyObject"](this);
    }
  }]);

  return CustomPrimitive;
}();
// CONCATENATED MODULE: ./src/wind/Util.js

var Util = function () {
  var getFullscreenQuad = function getFullscreenQuad() {
    var fullscreenQuad = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Geometry"]({
      attributes: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["GeometryAttributes"]({
        position: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["GeometryAttribute"]({
          componentDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ComponentDatatype"].FLOAT,
          componentsPerAttribute: 3,
          //  v3----v2
          //  |     |
          //  |     |
          //  v0----v1
          values: new Float32Array([-1, -1, 0, // v0
          1, -1, 0, // v1
          1, 1, 0, // v2
          -1, 1, 0 // v3
          ])
        }),
        st: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["GeometryAttribute"]({
          componentDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ComponentDatatype"].FLOAT,
          componentsPerAttribute: 2,
          values: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
        })
      }),
      indices: new Uint32Array([3, 2, 0, 0, 2, 1])
    });
    return fullscreenQuad;
  };

  var createTexture = function createTexture(options, typedArray) {
    if (external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defined"](typedArray)) {
      // typed array needs to be passed as source option, this is required by Cesium.Texture
      var source = {};
      source.arrayBufferView = typedArray;
      options.source = source;
    }

    var texture = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Texture"](options);
    return texture;
  };

  var createFramebuffer = function createFramebuffer(context, colorTexture, depthTexture) {
    var framebuffer = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Framebuffer"]({
      context: context,
      colorTextures: [colorTexture],
      depthTexture: depthTexture
    });
    return framebuffer;
  };

  var createRawRenderState = function createRawRenderState(options) {
    var translucent = true;
    var closed = false;
    var existing = {
      viewport: options.viewport,
      depthTest: options.depthTest,
      depthMask: options.depthMask,
      blending: options.blending
    };
    var rawRenderState = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Appearance"].getDefaultRenderState(translucent, closed, existing);
    return rawRenderState;
  };

  var viewRectangleToLonLatRange = function viewRectangleToLonLatRange(viewRectangle) {
    var range = {};
    var postiveWest = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].mod(viewRectangle.west, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].TWO_PI);
    var postiveEast = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].mod(viewRectangle.east, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].TWO_PI);
    var width = viewRectangle.width;
    var longitudeMin;
    var longitudeMax;

    if (width > external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].THREE_PI_OVER_TWO) {
      longitudeMin = 0.0;
      longitudeMax = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].TWO_PI;
    } else {
      if (postiveEast - postiveWest < width) {
        longitudeMin = postiveWest;
        longitudeMax = postiveWest + width;
      } else {
        longitudeMin = postiveWest;
        longitudeMax = postiveEast;
      }
    }

    range.lon = {
      min: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toDegrees(longitudeMin),
      max: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toDegrees(longitudeMax)
    };
    var south = viewRectangle.south;
    var north = viewRectangle.north;
    var height = viewRectangle.height;
    var extendHeight = height > external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].PI / 12 ? height / 2 : 0;
    var extendedSouth = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].clampToLatitudeRange(south - extendHeight);
    var extendedNorth = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].clampToLatitudeRange(north + extendHeight); // extend the bound in high latitude area to make sure it can cover all the visible area

    if (extendedSouth < -external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].PI_OVER_THREE) {
      extendedSouth = -external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].PI_OVER_TWO;
    }

    if (extendedNorth > external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].PI_OVER_THREE) {
      extendedNorth = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].PI_OVER_TWO;
    }

    range.lat = {
      min: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toDegrees(extendedSouth),
      max: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toDegrees(extendedNorth)
    };
    return range;
  };

  return {
    getFullscreenQuad: getFullscreenQuad,
    createTexture: createTexture,
    createFramebuffer: createFramebuffer,
    createRawRenderState: createRawRenderState,
    viewRectangleToLonLatRange: viewRectangleToLonLatRange
  };
}();
// EXTERNAL MODULE: ./src/wind/glsl/segmentDraw.vert.glsl
var segmentDraw_vert = __webpack_require__(8);
var segmentDraw_vert_default = /*#__PURE__*/__webpack_require__.n(segmentDraw_vert);

// EXTERNAL MODULE: ./src/wind/glsl/segmentDraw.frag.glsl
var segmentDraw_frag = __webpack_require__(9);
var segmentDraw_frag_default = /*#__PURE__*/__webpack_require__.n(segmentDraw_frag);

// EXTERNAL MODULE: ./src/wind/glsl/fullscreen.vert.glsl
var fullscreen_vert = __webpack_require__(7);
var fullscreen_vert_default = /*#__PURE__*/__webpack_require__.n(fullscreen_vert);

// EXTERNAL MODULE: ./src/wind/glsl/trailDraw.frag.glsl
var trailDraw_frag = __webpack_require__(10);
var trailDraw_frag_default = /*#__PURE__*/__webpack_require__.n(trailDraw_frag);

// EXTERNAL MODULE: ./src/wind/glsl/screenDraw.frag.glsl
var screenDraw_frag = __webpack_require__(11);
var screenDraw_frag_default = /*#__PURE__*/__webpack_require__.n(screenDraw_frag);

// CONCATENATED MODULE: ./src/wind/ParticlesRendering.js










var ParticlesRendering_ParticlesRendering = /*#__PURE__*/function () {
  function ParticlesRendering(context, data, userInput, viewerParameters, particlesComputing) {
    classCallCheck_default()(this, ParticlesRendering);

    this.createRenderingTextures(context, data);
    this.createRenderingFramebuffers(context);
    this.createRenderingPrimitives(context, userInput, viewerParameters, particlesComputing);
  }

  createClass_default()(ParticlesRendering, [{
    key: "createRenderingTextures",
    value: function createRenderingTextures(context, data) {
      var colorTextureOptions = {
        context: context,
        width: context.drawingBufferWidth,
        height: context.drawingBufferHeight,
        pixelFormat: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelFormat"].RGBA,
        pixelDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelDatatype"].UNSIGNED_BYTE
      };
      var depthTextureOptions = {
        context: context,
        width: context.drawingBufferWidth,
        height: context.drawingBufferHeight,
        pixelFormat: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelFormat"].DEPTH_COMPONENT,
        pixelDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelDatatype"].UNSIGNED_INT
      };
      var colorTableTextureOptions = {
        context: context,
        width: data.colorTable.colorNum,
        height: 1,
        pixelFormat: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelFormat"].RGB,
        pixelDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelDatatype"].FLOAT,
        sampler: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Sampler"]({
          minificationFilter: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["TextureMinificationFilter"].LINEAR,
          magnificationFilter: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["TextureMagnificationFilter"].LINEAR
        })
      };
      this.textures = {
        segmentsColor: Util.createTexture(colorTextureOptions),
        segmentsDepth: Util.createTexture(depthTextureOptions),
        currentTrailsColor: Util.createTexture(colorTextureOptions),
        currentTrailsDepth: Util.createTexture(depthTextureOptions),
        nextTrailsColor: Util.createTexture(colorTextureOptions),
        nextTrailsDepth: Util.createTexture(depthTextureOptions),
        colorTable: Util.createTexture(colorTableTextureOptions, data.colorTable.array)
      };
    }
  }, {
    key: "createRenderingFramebuffers",
    value: function createRenderingFramebuffers(context) {
      this.framebuffers = {
        segments: Util.createFramebuffer(context, this.textures.segmentsColor, this.textures.segmentsDepth),
        currentTrails: Util.createFramebuffer(context, this.textures.currentTrailsColor, this.textures.currentTrailsDepth),
        nextTrails: Util.createFramebuffer(context, this.textures.nextTrailsColor, this.textures.nextTrailsDepth)
      };
    }
  }, {
    key: "createSegmentsGeometry",
    value: function createSegmentsGeometry(userInput) {
      var repeatVertex = 4;
      var st = [];

      for (var s = 0; s < userInput.particlesTextureSize; s++) {
        for (var t = 0; t < userInput.particlesTextureSize; t++) {
          for (var i = 0; i < repeatVertex; i++) {
            st.push(s / userInput.particlesTextureSize);
            st.push(t / userInput.particlesTextureSize);
          }
        }
      }

      st = new Float32Array(st);
      var normal = [];
      var pointToUse = [-1, 1];
      var offsetSign = [-1, 1];

      for (var _i = 0; _i < userInput.maxParticles; _i++) {
        for (var j = 0; j < repeatVertex / 2; j++) {
          for (var k = 0; k < repeatVertex / 2; k++) {
            normal.push(pointToUse[j]);
            normal.push(offsetSign[k]);
            normal.push(0);
          }
        }
      }

      normal = new Float32Array(normal);
      var indexSize = 6 * userInput.maxParticles;
      var vertexIndexes = new Uint32Array(indexSize);

      for (var _i2 = 0, _j = 0, vertex = 0; _i2 < userInput.maxParticles; _i2++) {
        vertexIndexes[_j++] = vertex + 0;
        vertexIndexes[_j++] = vertex + 1;
        vertexIndexes[_j++] = vertex + 2;
        vertexIndexes[_j++] = vertex + 2;
        vertexIndexes[_j++] = vertex + 1;
        vertexIndexes[_j++] = vertex + 3;
        vertex += 4;
      }

      var geometry = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Geometry"]({
        attributes: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["GeometryAttributes"]({
          st: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["GeometryAttribute"]({
            componentDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ComponentDatatype"].FLOAT,
            componentsPerAttribute: 2,
            values: st
          }),
          normal: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["GeometryAttribute"]({
            componentDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ComponentDatatype"].FLOAT,
            componentsPerAttribute: 3,
            values: normal
          })
        }),
        indices: vertexIndexes
      });
      return geometry;
    }
  }, {
    key: "createRenderingPrimitives",
    value: function createRenderingPrimitives(context, userInput, viewerParameters, particlesComputing) {
      var that = this;
      this.primitives = {
        segments: new CustomPrimitive_CustomPrimitive({
          commandType: "Draw",
          attributeLocations: {
            st: 0,
            normal: 1
          },
          geometry: this.createSegmentsGeometry(userInput),
          primitiveType: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PrimitiveType"].TRIANGLES,
          uniformMap: {
            currentParticlesPosition: function currentParticlesPosition() {
              return particlesComputing.particlesTextures.currentParticlesPosition;
            },
            postProcessingPosition: function postProcessingPosition() {
              return particlesComputing.particlesTextures.postProcessingPosition;
            },
            postProcessingSpeed: function postProcessingSpeed() {
              return particlesComputing.particlesTextures.postProcessingSpeed;
            },
            colorTable: function colorTable() {
              return that.textures.colorTable;
            },
            aspect: function aspect() {
              return context.drawingBufferWidth / context.drawingBufferHeight;
            },
            pixelSize: function pixelSize() {
              return viewerParameters.pixelSize;
            },
            lineWidth: function lineWidth() {
              return userInput.lineWidth;
            },
            particleHeight: function particleHeight() {
              return userInput.particleHeight;
            }
          },
          vertexShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [segmentDraw_vert_default.a]
          }),
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [segmentDraw_frag_default.a]
          }),
          rawRenderState: Util.createRawRenderState({
            // undefined value means let Cesium deal with it
            viewport: undefined,
            depthTest: {
              enabled: true
            },
            depthMask: true
          }),
          framebuffer: this.framebuffers.segments,
          autoClear: true
        }),
        trails: new CustomPrimitive_CustomPrimitive({
          commandType: "Draw",
          attributeLocations: {
            position: 0,
            st: 1
          },
          geometry: Util.getFullscreenQuad(),
          primitiveType: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PrimitiveType"].TRIANGLES,
          uniformMap: {
            segmentsColorTexture: function segmentsColorTexture() {
              return that.textures.segmentsColor;
            },
            segmentsDepthTexture: function segmentsDepthTexture() {
              return that.textures.segmentsDepth;
            },
            currentTrailsColor: function currentTrailsColor() {
              return that.framebuffers.currentTrails.getColorTexture(0);
            },
            trailsDepthTexture: function trailsDepthTexture() {
              return that.framebuffers.currentTrails.depthTexture;
            },
            fadeOpacity: function fadeOpacity() {
              return userInput.fadeOpacity;
            }
          },
          // prevent Cesium from writing depth because the depth here should be written manually
          vertexShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            defines: ["DISABLE_GL_POSITION_LOG_DEPTH"],
            sources: [fullscreen_vert_default.a]
          }),
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            defines: ["DISABLE_LOG_DEPTH_FRAGMENT_WRITE"],
            sources: [trailDraw_frag_default.a]
          }),
          rawRenderState: Util.createRawRenderState({
            viewport: undefined,
            depthTest: {
              enabled: true,
              func: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["DepthFunction"].ALWAYS // always pass depth test for full control of depth information

            },
            depthMask: true
          }),
          framebuffer: this.framebuffers.nextTrails,
          autoClear: true,
          preExecute: function preExecute() {
            // swap framebuffers before binding
            var temp;
            temp = that.framebuffers.currentTrails;
            that.framebuffers.currentTrails = that.framebuffers.nextTrails;
            that.framebuffers.nextTrails = temp; // keep the framebuffers up to date

            that.primitives.trails.commandToExecute.framebuffer = that.framebuffers.nextTrails;
            that.primitives.trails.clearCommand.framebuffer = that.framebuffers.nextTrails;
          }
        }),
        screen: new CustomPrimitive_CustomPrimitive({
          commandType: "Draw",
          attributeLocations: {
            position: 0,
            st: 1
          },
          geometry: Util.getFullscreenQuad(),
          primitiveType: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PrimitiveType"].TRIANGLES,
          uniformMap: {
            trailsColorTexture: function trailsColorTexture() {
              return that.framebuffers.nextTrails.getColorTexture(0);
            },
            trailsDepthTexture: function trailsDepthTexture() {
              return that.framebuffers.nextTrails.depthTexture;
            }
          },
          // prevent Cesium from writing depth because the depth here should be written manually
          vertexShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            defines: ["DISABLE_GL_POSITION_LOG_DEPTH"],
            sources: [fullscreen_vert_default.a]
          }),
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            defines: ["DISABLE_LOG_DEPTH_FRAGMENT_WRITE"],
            sources: [screenDraw_frag_default.a]
          }),
          rawRenderState: Util.createRawRenderState({
            viewport: undefined,
            depthTest: {
              enabled: false
            },
            depthMask: true,
            blending: {
              enabled: true
            }
          }),
          framebuffer: undefined // undefined value means let Cesium deal with it

        })
      };
    }
  }]);

  return ParticlesRendering;
}();
// EXTERNAL MODULE: ./src/wind/glsl/getWind.frag.glsl
var getWind_frag = __webpack_require__(12);
var getWind_frag_default = /*#__PURE__*/__webpack_require__.n(getWind_frag);

// EXTERNAL MODULE: ./src/wind/glsl/updateSpeed.frag.glsl
var updateSpeed_frag = __webpack_require__(13);
var updateSpeed_frag_default = /*#__PURE__*/__webpack_require__.n(updateSpeed_frag);

// EXTERNAL MODULE: ./src/wind/glsl/updatePosition.frag.glsl
var updatePosition_frag = __webpack_require__(14);
var updatePosition_frag_default = /*#__PURE__*/__webpack_require__.n(updatePosition_frag);

// EXTERNAL MODULE: ./src/wind/glsl/postProcessingPosition.frag.glsl
var postProcessingPosition_frag = __webpack_require__(15);
var postProcessingPosition_frag_default = /*#__PURE__*/__webpack_require__.n(postProcessingPosition_frag);

// EXTERNAL MODULE: ./src/wind/glsl/postProcessingSpeed.frag.glsl
var postProcessingSpeed_frag = __webpack_require__(16);
var postProcessingSpeed_frag_default = /*#__PURE__*/__webpack_require__.n(postProcessingSpeed_frag);

// CONCATENATED MODULE: ./src/wind/ParticlesComputing.js










var ParticlesComputing_ParticlesComputing = /*#__PURE__*/function () {
  function ParticlesComputing(context, data, userInput, viewerParameters) {
    classCallCheck_default()(this, ParticlesComputing);

    this.data = data;
    this.createWindTextures(context, data);
    this.createParticlesTextures(context, userInput, viewerParameters);
    this.createComputingPrimitives(data, userInput, viewerParameters);
  }

  createClass_default()(ParticlesComputing, [{
    key: "createWindTextures",
    value: function createWindTextures(context, data) {
      var windTextureOptions = {
        context: context,
        width: data.dimensions.lon,
        height: data.dimensions.lat * data.dimensions.lev,
        pixelFormat: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelFormat"].LUMINANCE,
        pixelDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelDatatype"].FLOAT,
        flipY: false,
        sampler: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Sampler"]({
          // the values of texture will not be interpolated
          minificationFilter: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["TextureMinificationFilter"].NEAREST,
          magnificationFilter: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["TextureMagnificationFilter"].NEAREST
        })
      };
      this.windTextures = {
        U: Util.createTexture(windTextureOptions, data.U.array),
        V: Util.createTexture(windTextureOptions, data.V.array)
      };
    }
  }, {
    key: "createParticlesTextures",
    value: function createParticlesTextures(context, userInput, viewerParameters) {
      var particlesTextureOptions = {
        context: context,
        width: userInput.particlesTextureSize,
        height: userInput.particlesTextureSize,
        pixelFormat: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelFormat"].RGBA,
        pixelDatatype: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PixelDatatype"].FLOAT,
        flipY: false,
        sampler: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Sampler"]({
          // the values of texture will not be interpolated
          minificationFilter: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["TextureMinificationFilter"].NEAREST,
          magnificationFilter: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["TextureMagnificationFilter"].NEAREST
        })
      };
      var particlesArray = this.randomizeParticles(userInput.maxParticles, viewerParameters);
      var zeroArray = new Float32Array(4 * userInput.maxParticles).fill(0);
      this.particlesTextures = {
        particlesWind: Util.createTexture(particlesTextureOptions),
        currentParticlesPosition: Util.createTexture(particlesTextureOptions, particlesArray),
        nextParticlesPosition: Util.createTexture(particlesTextureOptions, particlesArray),
        currentParticlesSpeed: Util.createTexture(particlesTextureOptions, zeroArray),
        nextParticlesSpeed: Util.createTexture(particlesTextureOptions, zeroArray),
        postProcessingPosition: Util.createTexture(particlesTextureOptions, particlesArray),
        postProcessingSpeed: Util.createTexture(particlesTextureOptions, zeroArray)
      };
    }
  }, {
    key: "randomizeParticles",
    value: function randomizeParticles(maxParticles, viewerParameters) {
      var array = new Float32Array(4 * maxParticles);

      for (var i = 0; i < maxParticles; i++) {
        array[4 * i] = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].randomBetween(viewerParameters.lonRange.x, viewerParameters.lonRange.y);
        array[4 * i + 1] = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].randomBetween(viewerParameters.latRange.x, viewerParameters.latRange.y);
        array[4 * i + 2] = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].randomBetween(this.data.lev.min, this.data.lev.max);
        array[4 * i + 3] = 0.0;
      }

      return array;
    }
  }, {
    key: "destroyParticlesTextures",
    value: function destroyParticlesTextures() {
      var _this = this;

      Object.keys(this.particlesTextures).forEach(function (key) {
        _this.particlesTextures[key].destroy();
      });
    }
  }, {
    key: "createComputingPrimitives",
    value: function createComputingPrimitives(data, userInput, viewerParameters) {
      var _dimension = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"](data.dimensions.lon, data.dimensions.lat, data.dimensions.lev);

      var _minimum = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"](data.lon.min, data.lat.min, data.lev.min);

      var _maximum = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"](data.lon.max, data.lat.max, data.lev.max);

      var _interval = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"]((_maximum.x - _minimum.x) / (_dimension.x - 1), (_maximum.y - _minimum.y) / (_dimension.y - 1), _dimension.z > 1 ? (_maximum.z - _minimum.z) / (_dimension.z - 1) : 1.0);

      var _uSpeedRange = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian2"](data.U.min, data.U.max);

      var _vSpeedRange = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian2"](data.V.min, data.V.max);

      var that = this;
      this.primitives = {
        getWind: new CustomPrimitive_CustomPrimitive({
          commandType: "Compute",
          uniformMap: {
            U: function U() {
              return that.windTextures.U;
            },
            V: function V() {
              return that.windTextures.V;
            },
            currentParticlesPosition: function currentParticlesPosition() {
              return that.particlesTextures.currentParticlesPosition;
            },
            dimension: function dimension() {
              return _dimension;
            },
            minimum: function minimum() {
              return _minimum;
            },
            maximum: function maximum() {
              return _maximum;
            },
            interval: function interval() {
              return _interval;
            }
          },
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [getWind_frag_default.a]
          }),
          outputTexture: this.particlesTextures.particlesWind,
          preExecute: function preExecute() {
            // keep the outputTexture up to date
            that.primitives.getWind.commandToExecute.outputTexture = that.particlesTextures.particlesWind;
          }
        }),
        updateSpeed: new CustomPrimitive_CustomPrimitive({
          commandType: "Compute",
          uniformMap: {
            currentParticlesSpeed: function currentParticlesSpeed() {
              return that.particlesTextures.currentParticlesSpeed;
            },
            particlesWind: function particlesWind() {
              return that.particlesTextures.particlesWind;
            },
            uSpeedRange: function uSpeedRange() {
              return _uSpeedRange;
            },
            vSpeedRange: function vSpeedRange() {
              return _vSpeedRange;
            },
            pixelSize: function pixelSize() {
              return viewerParameters.pixelSize;
            },
            speedFactor: function speedFactor() {
              return userInput.speedFactor;
            }
          },
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [updateSpeed_frag_default.a]
          }),
          outputTexture: this.particlesTextures.nextParticlesSpeed,
          preExecute: function preExecute() {
            // swap textures before binding
            var temp;
            temp = that.particlesTextures.currentParticlesSpeed;
            that.particlesTextures.currentParticlesSpeed = that.particlesTextures.postProcessingSpeed;
            that.particlesTextures.postProcessingSpeed = temp; // keep the outputTexture up to date

            that.primitives.updateSpeed.commandToExecute.outputTexture = that.particlesTextures.nextParticlesSpeed;
          }
        }),
        updatePosition: new CustomPrimitive_CustomPrimitive({
          commandType: "Compute",
          uniformMap: {
            currentParticlesPosition: function currentParticlesPosition() {
              return that.particlesTextures.currentParticlesPosition;
            },
            currentParticlesSpeed: function currentParticlesSpeed() {
              return that.particlesTextures.currentParticlesSpeed;
            }
          },
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [updatePosition_frag_default.a]
          }),
          outputTexture: this.particlesTextures.nextParticlesPosition,
          preExecute: function preExecute() {
            // swap textures before binding
            var temp;
            temp = that.particlesTextures.currentParticlesPosition;
            that.particlesTextures.currentParticlesPosition = that.particlesTextures.postProcessingPosition;
            that.particlesTextures.postProcessingPosition = temp; // keep the outputTexture up to date

            that.primitives.updatePosition.commandToExecute.outputTexture = that.particlesTextures.nextParticlesPosition;
          }
        }),
        postProcessingPosition: new CustomPrimitive_CustomPrimitive({
          commandType: "Compute",
          uniformMap: {
            nextParticlesPosition: function nextParticlesPosition() {
              return that.particlesTextures.nextParticlesPosition;
            },
            nextParticlesSpeed: function nextParticlesSpeed() {
              return that.particlesTextures.nextParticlesSpeed;
            },
            lonRange: function lonRange() {
              return viewerParameters.lonRange;
            },
            latRange: function latRange() {
              return viewerParameters.latRange;
            },
            randomCoefficient: function randomCoefficient() {
              var randomCoefficient = Math.random();
              return randomCoefficient;
            },
            dropRate: function dropRate() {
              return userInput.dropRate;
            },
            dropRateBump: function dropRateBump() {
              return userInput.dropRateBump;
            }
          },
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [postProcessingPosition_frag_default.a]
          }),
          outputTexture: this.particlesTextures.postProcessingPosition,
          preExecute: function preExecute() {
            // keep the outputTexture up to date
            that.primitives.postProcessingPosition.commandToExecute.outputTexture = that.particlesTextures.postProcessingPosition;
          }
        }),
        postProcessingSpeed: new CustomPrimitive_CustomPrimitive({
          commandType: "Compute",
          uniformMap: {
            postProcessingPosition: function postProcessingPosition() {
              return that.particlesTextures.postProcessingPosition;
            },
            nextParticlesSpeed: function nextParticlesSpeed() {
              return that.particlesTextures.nextParticlesSpeed;
            }
          },
          fragmentShaderSource: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ShaderSource"]({
            sources: [postProcessingSpeed_frag_default.a]
          }),
          outputTexture: this.particlesTextures.postProcessingSpeed,
          preExecute: function preExecute() {
            // keep the outputTexture up to date
            that.primitives.postProcessingSpeed.commandToExecute.outputTexture = that.particlesTextures.postProcessingSpeed;
          }
        })
      };
    }
  }]);

  return ParticlesComputing;
}();
// CONCATENATED MODULE: ./src/wind/ParticleSystem.js





var ParticleSystem_ParticleSystem = /*#__PURE__*/function () {
  function ParticleSystem(context, data, userInput, viewerParameters) {
    classCallCheck_default()(this, ParticleSystem);

    this.context = context;
    this.data = data;
    this.userInput = userInput;
    this.viewerParameters = viewerParameters;
    this.particlesComputing = new ParticlesComputing_ParticlesComputing(this.context, this.data, this.userInput, this.viewerParameters);
    this.particlesRendering = new ParticlesRendering_ParticlesRendering(this.context, this.data, this.userInput, this.viewerParameters, this.particlesComputing);
  }

  createClass_default()(ParticleSystem, [{
    key: "canvasResize",
    value: function canvasResize(context) {
      var _this = this;

      this.particlesComputing.destroyParticlesTextures();
      Object.keys(this.particlesComputing.windTextures).forEach(function (key) {
        _this.particlesComputing.windTextures[key].destroy();
      });
      this.particlesRendering.textures.colorTable.destroy();
      Object.keys(this.particlesRendering.framebuffers).forEach(function (key) {
        _this.particlesRendering.framebuffers[key].destroy();
      });
      this.context = context;
      this.particlesComputing = new ParticlesComputing_ParticlesComputing(this.context, this.data, this.userInput, this.viewerParameters);
      this.particlesRendering = new ParticlesRendering_ParticlesRendering(this.context, this.data, this.userInput, this.viewerParameters, this.particlesComputing);
    }
  }, {
    key: "clearFramebuffers",
    value: function clearFramebuffers() {
      var _this2 = this;

      var clearCommand = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ClearCommand"]({
        color: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Color"](0.0, 0.0, 0.0, 0.0),
        depth: 1.0,
        framebuffer: undefined,
        pass: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Pass"].OPAQUE
      });
      Object.keys(this.particlesRendering.framebuffers).forEach(function (key) {
        clearCommand.framebuffer = _this2.particlesRendering.framebuffers[key];
        clearCommand.execute(_this2.context);
      });
    }
  }, {
    key: "refreshParticles",
    value: function refreshParticles(maxParticlesChanged) {
      this.clearFramebuffers();
      this.particlesComputing.destroyParticlesTextures();
      this.particlesComputing.createParticlesTextures(this.context, this.userInput, this.viewerParameters);

      if (maxParticlesChanged) {
        var geometry = this.particlesRendering.createSegmentsGeometry(this.userInput);
        this.particlesRendering.primitives.segments.geometry = geometry;
        var vertexArray = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["VertexArray"].fromGeometry({
          context: this.context,
          geometry: geometry,
          attributeLocations: this.particlesRendering.primitives.segments.attributeLocations,
          bufferUsage: external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["BufferUsage"].STATIC_DRAW
        });
        this.particlesRendering.primitives.segments.commandToExecute.vertexArray = vertexArray;
      }
    }
  }, {
    key: "applyUserInput",
    value: function applyUserInput(userInput) {
      var _this3 = this;

      var maxParticlesChanged = false;

      if (this.userInput.maxParticles != userInput.maxParticles) {
        maxParticlesChanged = true;
      }

      Object.keys(userInput).forEach(function (key) {
        _this3.userInput[key] = userInput[key];
      });
      this.refreshParticles(maxParticlesChanged);
    }
  }, {
    key: "applyViewerParameters",
    value: function applyViewerParameters(viewerParameters) {
      var _this4 = this;

      Object.keys(viewerParameters).forEach(function (key) {
        _this4.viewerParameters[key] = viewerParameters[key];
      });
      this.refreshParticles(false);
    }
  }]);

  return ParticleSystem;
}();
// CONCATENATED MODULE: ./src/wind/WindLayer.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var BaseLayer = external_sxii_["layer"].BaseLayer;
var defaultParticleSystemOptions = {
  maxParticles: 4096,
  particleHeight: 100.0,
  fadeOpacity: 0.996,
  dropRate: 0.003,
  dropRateBump: 0.01,
  speedFactor: 0.5,
  lineWidth: 2.0
};
/**
 * 风场图层，基于粒子实现，
 * 【需要引入 sxii-wind 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = '未命名'] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 * @param {Object} [options.center] 图层自定义定位视角
 *
 * @param {Number} [options.maxParticles =4096] 初始粒子总数
 * @param {Number} [options.particleHeight =100] 粒子的高度
 * @param {Number} [options.fadeOpacity =0.996] 消失不透明度
 * @param {Number} [options.dropRate =0.003] 下降率
 * @param {Number} [options.dropRateBump =0.01] 下降速度
 * @param {Number} [options.speedFactor = 0.5] 速度系数
 * @param {Number} [options.lineWidth =2.0] 线宽度
 *
 * @export
 * @class WindLayer
 * @extends {BaseLayer}
 */

var WindLayer_WindLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(WindLayer, _BaseLayer);

  var _super = _createSuper(WindLayer);

  function WindLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, WindLayer);

    _this = _super.call(this, options);
    _this.maxParticles = defaultParticleSystemOptions.maxParticles;
    _this.particleHeight = defaultParticleSystemOptions.particleHeight;
    _this.fadeOpacity = defaultParticleSystemOptions.fadeOpacity;
    _this.dropRate = defaultParticleSystemOptions.dropRate;
    _this.dropRateBump = defaultParticleSystemOptions.dropRateBump;
    _this.speedFactor = defaultParticleSystemOptions.speedFactor;
    _this.lineWidth = defaultParticleSystemOptions.lineWidth;

    if (options) {
      for (var key in options) {
        _this[key] = options[key];
      }
    }

    return _this;
  }
  /**
   * 存放风场粒子对象的容器
   * @type {Cesium.PrimitiveCollection}
   * @readonly
   */


  createClass_default()(WindLayer, [{
    key: "layer",
    get: function get() {
      return this.primitives;
    }
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @return {void}  无
     * @private
     */

  }, {
    key: "_mountedHook",
    value: function _mountedHook() {}
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @return {void}  无
     * @private
     */

  }, {
    key: "_addedHook",
    value: function _addedHook() {
      this.scene = this._map.scene;
      this.camera = this._map.camera;
      this.primitives = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["PrimitiveCollection"]();

      this._map.scene.primitives.add(this.primitives);

      this.viewerParameters = {
        lonRange: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian2"](),
        latRange: new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian2"](),
        pixelSize: 0.0
      }; // use a smaller earth radius to make sure distance to camera > 0

      this.globeBoundingSphere = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["BoundingSphere"](external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"].ZERO, 0.99 * 6378137.0);
      this.updateViewerParameters();
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
      this.primitives.removeAll();

      this._map.scene.primitives.remove(this.primitives);
    }
    /**
     * 设置 风场数据
     * @param {Object} data 风场数据
     * @return {void}  无
     */

  }, {
    key: "setData",
    value: function setData(data) {
      this.particleSystem = new ParticleSystem_ParticleSystem(this.scene.context, data, this.getUserInput(), this.viewerParameters);
      this.addPrimitives();
      this.setupEventListeners();
    }
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param {Object} options 参数,与类的构造方法参数相同
     * @return {this} 当前对象本身，可以链式调用
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (options) {
        for (var key in options) {
          this[key] = options[key];
        }
      }

      this.particleSystem.applyUserInput(this.getUserInput());
      return this;
    }
  }, {
    key: "getUserInput",
    value: function getUserInput() {
      // make sure maxParticles is exactly the square of particlesTextureSize
      var particlesTextureSize = Math.ceil(Math.sqrt(this.maxParticles));
      this.maxParticles = particlesTextureSize * particlesTextureSize;
      return {
        particlesTextureSize: particlesTextureSize,
        maxParticles: this.maxParticles,
        particleHeight: this.particleHeight,
        fadeOpacity: this.fadeOpacity,
        dropRate: this.dropRate,
        dropRateBump: this.dropRateBump,
        speedFactor: this.speedFactor,
        lineWidth: this.lineWidth,
        globeLayer: this.globeLayer,
        WMS_URL: this.WMS_URL
      };
    }
  }, {
    key: "addPrimitives",
    value: function addPrimitives() {
      // the order of primitives.add() should respect the dependency of primitives
      this.primitives.add(this.particleSystem.particlesComputing.primitives.getWind);
      this.primitives.add(this.particleSystem.particlesComputing.primitives.updateSpeed);
      this.primitives.add(this.particleSystem.particlesComputing.primitives.updatePosition);
      this.primitives.add(this.particleSystem.particlesComputing.primitives.postProcessingPosition);
      this.primitives.add(this.particleSystem.particlesComputing.primitives.postProcessingSpeed);
      this.primitives.add(this.particleSystem.particlesRendering.primitives.segments);
      this.primitives.add(this.particleSystem.particlesRendering.primitives.trails);
      this.primitives.add(this.particleSystem.particlesRendering.primitives.screen);
    }
  }, {
    key: "updateViewerParameters",
    value: function updateViewerParameters() {
      var viewRectangle = this.camera.computeViewRectangle(this.scene.globe.ellipsoid);

      if (!viewRectangle) {
        //非3d模式下会为空
        var extent = this._map.getExtent(); //mars3d扩展的方法


        viewRectangle = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Rectangle"].fromDegrees(extent.xmin, extent.ymin, extent.xmax, extent.ymax);
      }

      var lonLatRange = Util.viewRectangleToLonLatRange(viewRectangle);
      this.viewerParameters.lonRange.x = lonLatRange.lon.min;
      this.viewerParameters.lonRange.y = lonLatRange.lon.max;
      this.viewerParameters.latRange.x = lonLatRange.lat.min;
      this.viewerParameters.latRange.y = lonLatRange.lat.max;
      var pixelSize = this.camera.getPixelSize(this.globeBoundingSphere, this.scene.drawingBufferWidth, this.scene.drawingBufferHeight);

      if (pixelSize > 0) {
        this.viewerParameters.pixelSize = pixelSize;
      }
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var that = this;
      this.camera.moveStart.addEventListener(function () {
        if (!that._map || !that.show) {
          return;
        }

        that.primitives.show = false;
      });
      this.camera.moveEnd.addEventListener(function () {
        if (!that._map || !that.show) {
          return;
        }

        that.updateViewerParameters();
        that.particleSystem.applyViewerParameters(that.viewerParameters);
        that.primitives.show = true;
      });
      var resized = false;
      window.addEventListener('resize', function () {
        if (!that._map || !that.show) {
          return;
        }

        resized = true;
        that.primitives.show = false;
        that.primitives.removeAll();
      });
      this.scene.preRender.addEventListener(function () {
        if (!that._map) {
          return;
        }

        if (resized) {
          that.particleSystem.canvasResize(that.scene.context);
          resized = false;
          that.addPrimitives();
          that.primitives.show = true;
        }
      });
    }
  }]);

  return WindLayer;
}(BaseLayer); //注册下

external_sxii_["LayerUtil"].register('wind', WindLayer_WindLayer);
external_sxii_["layer"].WindLayer = WindLayer_WindLayer;
// CONCATENATED MODULE: ./src/canvasWind/CanvasParticle.js

//粒子对象
var CanvasParticle_CanvasParticle = //========== 构造方法 ==========
function CanvasParticle() {
  classCallCheck_default()(this, CanvasParticle);

  this.lng = null; //粒子初始经度

  this.lat = null; //粒子初始纬度
  // this.x = null;//粒子初始x位置(相对于棋盘网格，比如x方向有360个格，x取值就是0-360，这个是初始化时随机生成的)
  // this.y = null;//粒子初始y位置(同上)

  this.tlng = null; //粒子下一步将要移动的经度，这个需要计算得来

  this.tlat = null; //粒子下一步将要移动的y纬度，这个需要计算得来

  this.age = null; //粒子生命周期计时器，每次-1
  // this.speed = null;//粒子移动速度，可以根据速度渲染不同颜色
};
// CONCATENATED MODULE: ./src/canvasWind/CanvasWindField.js


//棋盘类,根据风场数据生产风场棋盘网格
// u表示经度方向上的风，u为正，表示西风，从西边吹来的风。
// v表示纬度方向上的风，v为正，表示南风，从南边吹来的风。
var CanvasWindField_CanvasWindField = /*#__PURE__*/function () {
  //========== 构造方法 ==========
  function CanvasWindField(data, reverseY) {
    classCallCheck_default()(this, CanvasWindField);

    //行列总数
    this.rows = data['rows'];
    this.cols = data['cols']; //经纬度边界

    this.xmin = data['xmin'];
    this.xmax = data['xmax'];
    this.ymin = data['ymin'];
    this.ymax = data['ymax'];
    this.grid = [];
    var uComponent = data['udata'];
    var vComponent = data['vdata'];
    var hasGrid = false;

    if (uComponent.length === this.rows && uComponent[0].length === this.cols) {
      hasGrid = true; //本身是grid方式构建的
    }

    var index = 0,
        arrRow = null,
        uv = null;

    for (var row = 0; row < this.rows; row++) {
      arrRow = [];

      for (var col = 0; col < this.cols; col++, index++) {
        if (hasGrid) {
          uv = this._calcUV(uComponent[row][col], vComponent[row][col]);
        } else {
          uv = this._calcUV(uComponent[index], vComponent[index]);
        }

        arrRow.push(uv);
      }

      this.grid.push(arrRow);
    }

    if (reverseY) {
      this.grid.reverse();
    } // console.log(this.grid);

  } //根据经纬度，算出棋盘格位置


  createClass_default()(CanvasWindField, [{
    key: "toGridXY",
    value: function toGridXY(lng, lat) {
      var x = (lng - this.xmin) / (this.xmax - this.xmin) * (this.cols - 1);
      var y = (this.ymax - lat) / (this.ymax - this.ymin) * (this.rows - 1);
      return {
        x: x,
        y: y
      };
    } //根据棋盘格获取UV值

  }, {
    key: "getUVByXY",
    value: function getUVByXY(x, y) {
      if (x < 0 || x >= this.cols || y >= this.rows) {
        return [0, 0, 0];
      }

      var x0 = Math.floor(x),
          y0 = Math.floor(y),
          x1,
          y1;

      if (x0 === x && y0 === y) {
        return this.grid[y][x];
      }

      x1 = x0 + 1;
      y1 = y0 + 1;
      var g00 = this.getUVByXY(x0, y0),
          g10 = this.getUVByXY(x1, y0),
          g01 = this.getUVByXY(x0, y1),
          g11 = this.getUVByXY(x1, y1);
      var result = null;

      try {
        result = this._bilinearInterpolation(x - x0, y - y0, g00, g10, g01, g11);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(x, y);
      }

      return result;
    } //双线性插值算法计算给定节点的速度
    //https://blog.csdn.net/qq_37577735/article/details/80041586

  }, {
    key: "_bilinearInterpolation",
    value: function _bilinearInterpolation(x, y, g00, g10, g01, g11) {
      var rx = 1 - x;
      var ry = 1 - y;
      var a = rx * ry,
          b = x * ry,
          c = rx * y,
          d = x * y;
      var u = g00[0] * a + g10[0] * b + g01[0] * c + g11[0] * d;
      var v = g00[1] * a + g10[1] * b + g01[1] * c + g11[1] * d;
      return this._calcUV(u, v);
    }
  }, {
    key: "_calcUV",
    value: function _calcUV(u, v) {
      // u表示经度方向上的风，u为正，表示西风，从西边吹来的风。
      // v表示纬度方向上的风，v为正，表示南风，从南边吹来的风。
      return [+u, +v, Math.sqrt(u * u + v * v)]; //u, v，风速
    } //根据经纬度格获取UV值

  }, {
    key: "getUVByPoint",
    value: function getUVByPoint(lng, lat) {
      if (!this.isInExtent(lng, lat)) {
        return null;
      }

      var gridpos = this.toGridXY(lng, lat);
      var uv = this.getUVByXY(gridpos.x, gridpos.y);
      return uv;
    } //粒子是否在地图范围内

  }, {
    key: "isInExtent",
    value: function isInExtent(lng, lat) {
      if (lng >= this.xmin && lng <= this.xmax && lat >= this.ymin && lat <= this.ymax) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getRandomLatLng",
    value: function getRandomLatLng() {
      var lng = fRandomByfloat(this.xmin, this.xmax);
      var lat = fRandomByfloat(this.ymin, this.ymax);
      return {
        lat: lat,
        lng: lng
      };
    }
  }]);

  return CanvasWindField;
}(); //随机数生成器（小数）

function fRandomByfloat(under, over) {
  return under + Math.random() * (over - under);
}
// CONCATENATED MODULE: ./src/canvasWind/CanvasWindLayer.js






function CanvasWindLayer_createSuper(Derived) { var hasNativeReflectConstruct = CanvasWindLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CanvasWindLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CanvasWindLayer_BaseLayer = external_sxii_["layer"].BaseLayer;
/**
 * Canvas风场图层， data数据结构
 *
 * @typedef {Object} CanvasWindLayer.DataOptions
 *
 * @property {Number} [rows] 行总数
 * @property {Number} [cols] 列总数
 * @property {Number} [xmin] 最小经度（度数，-180-180）
 * @property {Number} [xmax] 最大经度（度数，-180-180）
 * @property {Number} [ymin] 最小纬度（度数，-90-90）
 * @property {Number} [ymax] 最大纬度（度数，-90-90）
 * @property {Number[]|Array[]} [udata] U值一维数组, 数组长度应该是 rows*cols 。也支持按rows行cols列构建好的二维数组。
 * @property {Number[]|Array[]} [vdata] V值一维数组, 数组长度应该是 rows*cols 。也支持按rows行cols列构建好的二维数组。
 *
 */

/**
 * Canvas风场图层，
 * 基于Canvas绘制，【需要引入 sxii-wind 插件库】
 *
 * @param {Object} options 参数对象，包括以下：
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = '未命名'] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 * @param {Object} [options.center] 图层自定义定位视角
 *
 * @param {CanvasWindLayer.DataOptions} [options.data] 风场数据
 *
 * @param {Number} [options.speedRate =50] 风前进速率，意思是将当前风场横向纵向分成100份，再乘以风速就能得到移动位置，无论地图缩放到哪一级别都是一样的速度，可以用该数值控制线流动的快慢，值越大，越慢，
 * @param {Number} [options.particlesNumber =20000] 初始粒子总数
 * @param {Number} [options.maxAge =120] 每个粒子的最大生存周期
 * @param {Number} [options.frameRate =10] 每秒刷新次数，因为requestAnimationFrame固定每秒60次的渲染，所以如果不想这么快，就把该数值调小一些
 * @param {String} [options.color ='#ffffff'] 线颜色
 * @param {Number} [options.lineWidth =1] 线宽度
 * @param {Number} [options.fixedHeight =0] 点的固定的海拔高度
 * @param {Boolean} [options.reverseY =false] 是否翻转纬度数组顺序，正常数据是从北往南的（纬度从大到小），如果反向时请传reverseY为true
 * @param {Boolean} [options.pointerEvents=false] 图层是否可以进行鼠标交互，为false时可以穿透操作及缩放地图
 *
 *
 * @export
 * @class CanvasWindLayer
 * @extends {BaseLayer}
 */

var CanvasWindLayer_CanvasWindLayer = /*#__PURE__*/function (_BaseLayer) {
  inherits_default()(CanvasWindLayer, _BaseLayer);

  var _super = CanvasWindLayer_createSuper(CanvasWindLayer);

  //========== 构造方法 ==========
  function CanvasWindLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, CanvasWindLayer);

    _this = _super.call(this, options);
    _this.calc_speedRate = [0, 0]; //根据speedRate参数计算经纬度步进长度

    _this.particles = [];
    _this.speedRate = options.speedRate || 50;
    _this._particlesNumber = options.particlesNumber || 20000;
    _this._maxAge = options.maxAge || 120;
    _this.frameTime = 1000 / (options.frameRate || 10);
    _this._pointerEvents = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](_this.options.pointerEvents, false);
    /**
     * 线颜色
     * @type {String}
     */

    _this.color = options.color || '#ffffff';
    /**
     * 线宽度
     * @type {Number}
     */

    _this.lineWidth = options.lineWidth || 1;
    /**
     * 点的固定的海拔高度
     * @type {Number}
     */

    _this.fixedHeight = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](options.fixedHeight, 0);
    /**
     * 是否翻转纬度数组顺序，正常数据是从北往南的（纬度从大到小），如果反向时请传reverseY为true
     * @type {Boolean}
     */

    _this.reverseY = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["defaultValue"](options.reverseY, false);
    /**
     * 图层对应的Canvas对象
     * @type {HTMLCanvasElement}
     * @readonly
     */

    _this.canvas = null;
    return _this;
  }
  /**
   * 图层对应的Canvas对象
   * @type {HTMLCanvasElement}
   * @readonly
   */


  createClass_default()(CanvasWindLayer, [{
    key: "layer",
    get: function get() {
      return this.canvas;
    }
    /**
     * Canvas对象宽度（单位：像素）
     * @type {Number}
     * @readonly
     */

  }, {
    key: "canvasWidth",
    get: function get() {
      return this._map.scene.canvas.clientWidth;
    }
    /**
     * Canvas对象高度（单位：像素）
     * @type {Number}
     * @readonly
     */

  }, {
    key: "canvasHeight",
    get: function get() {
      return this._map.scene.canvas.clientHeight;
    }
    /**
     * 图层是否可以鼠标交互，为false时可以穿透操作及缩放地图
     * @type {Boolean}
     */

  }, {
    key: "pointerEvents",
    get: function get() {
      return this._pointerEvents;
    },
    set: function set(value) {
      this._pointerEvents = value;

      if (value) {
        this.canvas.style['pointer-events'] = 'all';
      } else {
        /*加上这个css后鼠标可以穿透，但是无法触发单击等鼠标事件*/
        this.canvas.style['pointer-events'] = 'none';
      }
    }
    /**
     * 风前进速率，意思是将当前风场横向纵向分成100份，再乘以风速就能得到移动位置，无论地图缩放到哪一级别都是一样的速度，可以用该数值控制线流动的快慢，值越大，越慢，
     * @type {Number}
     */

  }, {
    key: "speedRate",
    get: function get() {
      return this._speedRate;
    },
    set: function set(value) {
      this._speedRate = (100 - (value > 99 ? 99 : value)) * 100;

      this._calcStep();
    }
    /**
     * 初始粒子总数
     * @type {Number}
     */

  }, {
    key: "particlesNumber",
    get: function get() {
      return this._particlesNumber;
    },
    set: function set(value) {
      var _this2 = this;

      this._particlesNumber = value; //不能随时刷新，需要隔一段时间刷新，避免卡顿

      clearTimeout(this.canrefresh);
      this.canrefresh = setTimeout(function () {
        _this2.redraw();
      }, 500);
    }
    /**
     * 每个粒子的最大生存周期
     * @type {Number}
     */

  }, {
    key: "maxAge",
    get: function get() {
      return this._maxAge;
    },
    set: function set(value) {
      var _this3 = this;

      this._maxAge = value; //不能随时刷新，需要隔一段时间刷新，避免卡顿

      clearTimeout(this.canrefresh);
      this.canrefresh = setTimeout(function () {
        _this3.redraw();
      }, 500);
    }
    /**
     * 风场数据，数据结构见类的构造方法说明
     * @type {CanvasWindLayer.DataOptions}
     */

  }, {
    key: "data",
    get: function get() {
      return this.windData;
    },
    set: function set(value) {
      this.updateDate(value);
    }
  }, {
    key: "_showHook",
    value: function _showHook(val) {
      if (!this.canvas) {
        return;
      }

      if (val) {
        this.canvas.style.visibility = 'visible';
      } else {
        this.canvas.style.visibility = 'hidden';
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
    value: function _mountedHook() {}
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @return {void}  无
     * @private
     */

  }, {
    key: "_addedHook",
    value: function _addedHook() {
      this.canvas = this._createCanvas();
      this.canvasContext = this.canvas.getContext('2d'); //canvas上下文

      this.bindEvent();

      if (this.options.data) {
        this.updateDate(this.options.data);
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
      this.clear();
      this.unbindEvent();

      if (this.canvas) {
        this._map.container.removeChild(this.canvas);

        delete this.canvas;
      }
    } // canvas

  }, {
    key: "_createCanvas",
    value: function _createCanvas() {
      var windContainer = document.createElement('canvas');
      windContainer.style.position = 'absolute';
      windContainer.style.top = '0px';
      windContainer.style.left = '0px';
      windContainer.style.width = '100%';
      windContainer.style.height = '100%';
      windContainer.style.pointerEvents = this._pointerEvents ? 'auto' : 'none'; //auto时可以交互，但是没法放大地球， none 没法交互

      windContainer.style.zIndex = 10;
      windContainer.setAttribute('id', 'canvasWindy');
      windContainer.setAttribute('class', 'canvasWindy');

      this._map.container.appendChild(windContainer);

      var scene = this._map.scene;
      windContainer.width = scene.canvas.clientWidth;
      windContainer.height = scene.canvas.clientHeight;
      return windContainer;
    } //更新canvas的高宽

  }, {
    key: "resize",
    value: function resize() {
      if (this.canvas) {
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
      }
    } //事件处理

  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this4 = this;

      var that = this; //更新动画

      var then = Date.now();

      (function frame() {
        //animateFrame: requestAnimationFrame事件句柄，用来清除操作
        that.animateFrame = window.requestAnimationFrame(frame);
        var now = Date.now();
        var delta = now - then;

        if (delta > that.frameTime) {
          then = now - delta % that.frameTime;
          that.update(); //按帧率执行
        }
      })(); // 添加 resize 绑定事件


      window.addEventListener('resize', this.resize.bind(this), false); //鼠标滚动、旋转后 需要重新生成风场

      this.handler = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventHandler"](this._map.scene.canvas);
      var refreshTimer = -1;
      var mouse_down = false;
      var mouse_move = false;
      this.handler.setInputAction(function (e) {
        clearTimeout(refreshTimer);
        _this4.show = false;
        setTimeout(function () {
          _this4.redraw();

          _this4.show = true;
        }, 200);
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].WHEEL); //鼠标左键、右键按下

      this.handler.setInputAction(function (e) {
        mouse_down = true;
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].LEFT_DOWN);
      this.handler.setInputAction(function (e) {
        mouse_down = true;
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].RIGHT_DOWN); //鼠标移动

      this.handler.setInputAction(function (e) {
        if (mouse_down) {
          _this4.show = false;
          mouse_move = true;
        }
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].MOUSE_MOVE); //鼠标左键、右键抬起

      this.handler.setInputAction(function (e) {
        if (mouse_down && mouse_move) {
          _this4.redraw();
        }

        _this4.show = true;
        mouse_down = false;
        mouse_move = false;
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].LEFT_UP);
      this.handler.setInputAction(function (e) {
        if (mouse_down && mouse_move) {
          _this4.redraw();
        }

        _this4.show = true;
        mouse_down = false;
        mouse_move = false;
      }, external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["ScreenSpaceEventType"].RIGHT_UP);
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent() {
      window.cancelAnimationFrame(this.animateFrame);
      delete this.animateFrame;
      window.removeEventListener('resize', this.resize);

      if (this.handler) {
        this.handler.destroy();
        this.handler = null;
      }
    }
    /**
     * 重绘，根据现有参数重新生成风场
     * @return {void}  无
     */

  }, {
    key: "redraw",
    value: function redraw() {
      this.particles = [];
      this.drawWind();
    }
  }, {
    key: "updateDate",
    value: function updateDate(data) {
      this.clear();
      this.windData = data; //风场json数据
      // 创建风场网格

      this.windField = new CanvasWindField_CanvasWindField(this.windData, this.reverseY);
      this.drawWind();
    } //绘制粒子效果处理

  }, {
    key: "drawWind",
    value: function drawWind() {
      //计算经纬度步进长度
      this._calcStep(); // 创建风场粒子


      for (var i = 0; i < this.particlesNumber; i++) {
        var particle = this.randomParticle(new CanvasParticle_CanvasParticle());
        this.particles.push(particle);
      }

      this.canvasContext.fillStyle = 'rgba(0, 0, 0, 0.97)';
      this.canvasContext.globalAlpha = 0.6;
      this.update();
    } //计算经纬度步进长度

  }, {
    key: "_calcStep",
    value: function _calcStep() {
      if (!this.windField) {
        return;
      }

      this.calc_speedRate = [(this.windField.xmax - this.windField.xmin) / this.speedRate, (this.windField.ymax - this.windField.ymin) / this.speedRate];
    }
  }, {
    key: "update",
    value: function update() {
      var _this5 = this;

      if (!this.show || this.particles.length <= 0) {
        return;
      }

      var nextLng = null;
      var nextLat = null;
      var uv = null;
      this.particles.forEach(function (particle) {
        if (particle.age <= 0) {
          _this5.randomParticle(particle);
        }

        if (particle.age > 0) {
          var tlng = particle.tlng; //上一次的位置

          var tlat = particle.tlat; // u表示经度方向上的风，u为正，表示西风，从西边吹来的风。
          // v表示纬度方向上的风，v为正，表示南风，从南边吹来的风。

          uv = _this5.windField.getUVByPoint(tlng, tlat);

          if (uv) {
            nextLng = tlng + _this5.calc_speedRate[0] * uv[0];
            nextLat = tlat + _this5.calc_speedRate[1] * uv[1];
            particle.lng = tlng;
            particle.lat = tlat;
            particle.tlng = nextLng;
            particle.tlat = nextLat;
            particle.age--;
          } else {
            particle.age = 0;
          }
        }
      });

      this._drawLines();
    } //根据粒子当前所处的位置(棋盘网格位置)，计算经纬度，在根据经纬度返回屏幕坐标

  }, {
    key: "_tomap",
    value: function _tomap(lng, lat, particle) {
      var position = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Cartesian3"].fromDegrees(lng, lat, this.fixedHeight); //判断是否在球的背面

      var scene = this._map.scene;

      if (scene.mode === external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneMode"].SCENE3D) {
        var occluder = new external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["EllipsoidalOccluder"](scene.globe.ellipsoid, scene.camera.positionWC);
        var visible = occluder.isPointVisible(position); //visible为true说明点在球的正面，否则点在球的背面。
        //需要注意的是不能用这种方法判断点的可见性，如果球放的比较大，点跑到屏幕外面，它返回的依然为true

        if (!visible) {
          particle.age = 0;
          return null;
        }
      } //判断是否在球的背面


      var pos = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneTransforms"].wgs84ToWindowCoordinates(this._map.scene, position);

      if (pos) {
        return [pos.x, pos.y];
      } else {
        return null;
      }
    }
  }, {
    key: "_drawLines",
    value: function _drawLines() {
      var that = this;
      var particles = this.particles;
      this.canvasContext.lineWidth = that.lineWidth; //后绘制的图形和前绘制的图形如果发生遮挡的话，只显示后绘制的图形跟前一个绘制的图形重合的前绘制的图形部分，示例：https://www.w3school.com.cn/tiy/t.asp?f=html5_canvas_globalcompop_all

      this.canvasContext.globalCompositeOperation = 'destination-in';
      this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.canvasContext.globalCompositeOperation = 'lighter'; //重叠部分的颜色会被重新计算

      this.canvasContext.globalAlpha = 0.9;
      this.canvasContext.beginPath();
      this.canvasContext.strokeStyle = this.color;
      var is2d = this._map.scene.mode !== external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["SceneMode"].SCENE3D;
      particles.forEach(function (particle) {
        var movetopos = that._tomap(particle.lng, particle.lat, particle);

        var linetopos = that._tomap(particle.tlng, particle.tlat, particle); // console.log(movetopos,linetopos);


        if (movetopos != null && linetopos != null) {
          var step = Math.abs(movetopos[0] - linetopos[0]);

          if (is2d && step >= that.canvasWidth) {//2d时容错
            // console.log(particle.lng+","+particle.tlng)
          } else {
            that.canvasContext.moveTo(movetopos[0], movetopos[1]);
            that.canvasContext.lineTo(linetopos[0], linetopos[1]);
          }
        }
      });
      this.canvasContext.stroke();
    } //根据当前风场extent随机生成粒子

  }, {
    key: "randomParticle",
    value: function randomParticle(particle) {
      var point, uv;

      for (var i = 0; i < 30; i++) {
        point = this.windField.getRandomLatLng();
        uv = this.windField.getUVByPoint(point.lng, point.lat);

        if (uv && uv[2] > 0) {
          break;
        }
      }

      if (!uv) {
        return particle;
      }

      var nextLng = point.lng + this.calc_speedRate[0] * uv[0];
      var nextLat = point.lat + this.calc_speedRate[1] * uv[1];
      particle.lng = point.lng;
      particle.lat = point.lat;
      particle.tlng = nextLng;
      particle.tlat = nextLat;
      particle.age = Math.round(Math.random() * this.maxAge); //每一次生成都不一样

      return particle;
    }
    /**
     * 清除数据
     * @return {void}  无
     */

  }, {
    key: "clear",
    value: function clear() {
      this.particles = [];
      delete this.windField;
      delete this.windData;
    }
  }]);

  return CanvasWindLayer;
}(CanvasWindLayer_BaseLayer); //注册下

external_sxii_["LayerUtil"].register('canvasWind', CanvasWindLayer_CanvasWindLayer);
external_sxii_["layer"].CanvasWindLayer = CanvasWindLayer_CanvasWindLayer;
// CONCATENATED MODULE: ./src/canvasWind/WindUtil.js
/**
 * 风场相关 静态方法，【需要引入 sxii-wind 插件库】
 * @module WindUtil
 */

/**
 * 风速风向 转 U值
 *
 * @export
 * @param {Number} speed 风速
 * @param {Number} direction 风向
 * @return {Number} U值
 */

function getU(speed, direction) {
  var u = speed * Math.cos(external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toRadians(direction));
  return u;
}
/**
 * 风速风向 转 V值
 *
 * @export
 * @param {Number} speed 风速
 * @param {Number} direction 风向
 * @return {Number} V值
 */

function getV(speed, direction) {
  var v = speed * Math.sin(external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toRadians(direction));
  return v;
}
/**
 * UV值 转 风速, 风速是uv分量的平方和
 *
 * @export
 * @param {Number} u U值
 * @param {Number} v V值
 * @return {Number} 风速
 */

function getSpeed(u, v) {
  var speed = Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2));
  return speed;
}
/**
 * UV 转 风向
 *
 * @export
 * @param {Number} u U值
 * @param {Number} v V值
 * @return {Number} 风向
 */

function getDirection(u, v) {
  var direction = external_commonjs2_cesium_amd_cesium_commonjs_cesium_root_Cesium_["Math"].toDegrees(Math.atan2(v, u));
  direction += direction < 0 ? 360 : 0;
  return direction;
}
// CONCATENATED MODULE: ./src/index.js




external_sxii_["WindUtil"] = WindUtil_namespaceObject;


/***/ })
/******/ ]);
});