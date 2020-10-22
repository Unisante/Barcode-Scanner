(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["Quagga"] = factory();
  else
    root["Quagga"] = factory();
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
    }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
    /******/
  })
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports) {

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

      /***/
    }),
/* 1 */
/***/ (function (module, exports) {

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      module.exports = _assertThisInitialized;

      /***/
    }),
/* 2 */
/***/ (function (module, exports) {

      function _getPrototypeOf(o) {
        module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      module.exports = _getPrototypeOf;

      /***/
    }),
/* 3 */
/***/ (function (module, exports) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      module.exports = _classCallCheck;

      /***/
    }),
/* 4 */
/***/ (function (module, exports) {

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

      /***/
    }),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

      var _typeof = __webpack_require__(23);

      var assertThisInitialized = __webpack_require__(1);

      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }

        return assertThisInitialized(self);
      }

      module.exports = _possibleConstructorReturn;

      /***/
    }),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

      var setPrototypeOf = __webpack_require__(178);

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

      /***/
    }),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = {
        EPSILON: __webpack_require__(58),
        create: __webpack_require__(59),
        clone: __webpack_require__(110),
        fromValues: __webpack_require__(111),
        copy: __webpack_require__(112),
        set: __webpack_require__(113),
        equals: __webpack_require__(114),
        exactEquals: __webpack_require__(115),
        add: __webpack_require__(116),
        subtract: __webpack_require__(60),
        sub: __webpack_require__(117),
        multiply: __webpack_require__(61),
        mul: __webpack_require__(118),
        divide: __webpack_require__(62),
        div: __webpack_require__(119),
        inverse: __webpack_require__(120),
        min: __webpack_require__(121),
        max: __webpack_require__(122),
        rotate: __webpack_require__(123),
        floor: __webpack_require__(124),
        ceil: __webpack_require__(125),
        round: __webpack_require__(126),
        scale: __webpack_require__(127),
        scaleAndAdd: __webpack_require__(128),
        distance: __webpack_require__(63),
        dist: __webpack_require__(129),
        squaredDistance: __webpack_require__(64),
        sqrDist: __webpack_require__(130),
        length: __webpack_require__(65),
        len: __webpack_require__(131),
        squaredLength: __webpack_require__(66),
        sqrLen: __webpack_require__(132),
        negate: __webpack_require__(133),
        normalize: __webpack_require__(134),
        dot: __webpack_require__(135),
        cross: __webpack_require__(136),
        lerp: __webpack_require__(137),
        random: __webpack_require__(138),
        transformMat2: __webpack_require__(139),
        transformMat2d: __webpack_require__(140),
        transformMat3: __webpack_require__(141),
        transformMat4: __webpack_require__(142),
        forEach: __webpack_require__(143),
        limit: __webpack_require__(144)
      };

      /***/
    }),
/* 8 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "imageRef", function () { return /* binding */ imageRef; });
      __webpack_require__.d(__webpack_exports__, "computeIntegralImage2", function () { return /* binding */ computeIntegralImage2; });
      __webpack_require__.d(__webpack_exports__, "computeIntegralImage", function () { return /* binding */ computeIntegralImage; });
      __webpack_require__.d(__webpack_exports__, "thresholdImage", function () { return /* binding */ thresholdImage; });
      __webpack_require__.d(__webpack_exports__, "computeHistogram", function () { return /* binding */ computeHistogram; });
      __webpack_require__.d(__webpack_exports__, "sharpenLine", function () { return /* binding */ sharpenLine; });
      __webpack_require__.d(__webpack_exports__, "determineOtsuThreshold", function () { return /* binding */ determineOtsuThreshold; });
      __webpack_require__.d(__webpack_exports__, "otsuThreshold", function () { return /* binding */ otsuThreshold; });
      __webpack_require__.d(__webpack_exports__, "computeBinaryImage", function () { return /* binding */ computeBinaryImage; });
      __webpack_require__.d(__webpack_exports__, "cluster", function () { return /* binding */ cv_utils_cluster; });
      __webpack_require__.d(__webpack_exports__, "Tracer", function () { return /* binding */ Tracer; });
      __webpack_require__.d(__webpack_exports__, "DILATE", function () { return /* binding */ DILATE; });
      __webpack_require__.d(__webpack_exports__, "ERODE", function () { return /* binding */ ERODE; });
      __webpack_require__.d(__webpack_exports__, "dilate", function () { return /* binding */ dilate; });
      __webpack_require__.d(__webpack_exports__, "erode", function () { return /* binding */ erode; });
      __webpack_require__.d(__webpack_exports__, "subtract", function () { return /* binding */ subtract; });
      __webpack_require__.d(__webpack_exports__, "bitwiseOr", function () { return /* binding */ bitwiseOr; });
      __webpack_require__.d(__webpack_exports__, "countNonZero", function () { return /* binding */ countNonZero; });
      __webpack_require__.d(__webpack_exports__, "topGeneric", function () { return /* binding */ topGeneric; });
      __webpack_require__.d(__webpack_exports__, "grayArrayFromImage", function () { return /* binding */ grayArrayFromImage; });
      __webpack_require__.d(__webpack_exports__, "grayArrayFromContext", function () { return /* binding */ grayArrayFromContext; });
      __webpack_require__.d(__webpack_exports__, "grayAndHalfSampleFromCanvasData", function () { return /* binding */ grayAndHalfSampleFromCanvasData; });
      __webpack_require__.d(__webpack_exports__, "computeGray", function () { return /* binding */ computeGray; });
      __webpack_require__.d(__webpack_exports__, "loadImageArray", function () { return /* binding */ loadImageArray; });
      __webpack_require__.d(__webpack_exports__, "halfSample", function () { return /* binding */ halfSample; });
      __webpack_require__.d(__webpack_exports__, "hsv2rgb", function () { return /* binding */ hsv2rgb; });
      __webpack_require__.d(__webpack_exports__, "_computeDivisors", function () { return /* binding */ _computeDivisors; });
      __webpack_require__.d(__webpack_exports__, "calculatePatchSize", function () { return /* binding */ calculatePatchSize; });
      __webpack_require__.d(__webpack_exports__, "_parseCSSDimensionValues", function () { return /* binding */ _parseCSSDimensionValues; });
      __webpack_require__.d(__webpack_exports__, "_dimensionsConverters", function () { return /* binding */ _dimensionsConverters; });
      __webpack_require__.d(__webpack_exports__, "computeImageArea", function () { return /* binding */ computeImageArea; });

      // EXTERNAL MODULE: ./node_modules/gl-vec2/index.js
      var gl_vec2 = __webpack_require__(7);

      // EXTERNAL MODULE: ./node_modules/gl-vec3/index.js
      var gl_vec3 = __webpack_require__(100);

      // CONCATENATED MODULE: ./src/common/cluster.js
      // TODO: cluster.js and cv_utils.js are pretty tightly intertwined, making for a complex conversion
      // into typescript. be warned. :-)

      var vec2 = {
        clone: gl_vec2["clone"],
        dot: gl_vec2["dot"]
      };
/**
 * Creates a cluster for grouping similar orientations of datapoints
 */

/* harmony default export */ var cluster = ({
        create: function create(point, threshold) {
          var points = [];
          var center = {
            rad: 0,
            vec: vec2.clone([0, 0])
          };
          var pointMap = {};

          function _add(pointToAdd) {
            pointMap[pointToAdd.id] = pointToAdd;
            points.push(pointToAdd);
          }

          function updateCenter() {
            var i;
            var sum = 0;

            for (i = 0; i < points.length; i++) {
              sum += points[i].rad;
            }

            center.rad = sum / points.length;
            center.vec = vec2.clone([Math.cos(center.rad), Math.sin(center.rad)]);
          }

          function init() {
            _add(point);

            updateCenter();
          }

          init();
          return {
            add: function add(pointToAdd) {
              if (!pointMap[pointToAdd.id]) {
                _add(pointToAdd);

                updateCenter();
              }
            },
            fits: function fits(otherPoint) {
              // check cosine similarity to center-angle
              var similarity = Math.abs(vec2.dot(otherPoint.point.vec, center.vec));

              if (similarity > threshold) {
                return true;
              }

              return false;
            },
            getPoints: function getPoints() {
              return points;
            },
            getCenter: function getCenter() {
              return center;
            }
          };
        },
        createPoint: function createPoint(newPoint, id, property) {
          return {
            rad: newPoint[property],
            point: newPoint,
            id: id
          };
        }
      });
      // EXTERNAL MODULE: ./src/common/array_helper.ts
      var array_helper = __webpack_require__(10);

      // CONCATENATED MODULE: ./src/common/cv_utils.js
      /* eslint-disable no-mixed-operators */

      /* eslint-disable no-bitwise */




      var cv_utils_vec2 = {
        clone: gl_vec2["clone"]
      };
      var vec3 = {
        clone: gl_vec3["clone"]
      };
      /**
       * @param x x-coordinate
       * @param y y-coordinate
       * @return ImageReference {x,y} Coordinate
       */

      function imageRef(x, y) {
        var that = {
          x: x,
          y: y,
          toVec2: function toVec2() {
            return cv_utils_vec2.clone([this.x, this.y]);
          },
          toVec3: function toVec3() {
            return vec3.clone([this.x, this.y, 1]);
          },
          round: function round() {
            this.x = this.x > 0.0 ? Math.floor(this.x + 0.5) : Math.floor(this.x - 0.5);
            this.y = this.y > 0.0 ? Math.floor(this.y + 0.5) : Math.floor(this.y - 0.5);
            return this;
          }
        };
        return that;
      }
      /**
       * Computes an integral image of a given grayscale image.
       * @param imageDataContainer {ImageDataContainer} the image to be integrated
       */

      function computeIntegralImage2(imageWrapper, integralWrapper) {
        var imageData = imageWrapper.data;
        var width = imageWrapper.size.x;
        var height = imageWrapper.size.y;
        var integralImageData = integralWrapper.data;
        var sum = 0;
        var posA = 0;
        var posB = 0;
        var posC = 0;
        var posD = 0;
        var x;
        var y; // sum up first column

        posB = width;
        sum = 0;

        for (y = 1; y < height; y++) {
          sum += imageData[posA];
          integralImageData[posB] += sum;
          posA += width;
          posB += width;
        }

        posA = 0;
        posB = 1;
        sum = 0;

        for (x = 1; x < width; x++) {
          sum += imageData[posA];
          integralImageData[posB] += sum;
          posA++;
          posB++;
        }

        for (y = 1; y < height; y++) {
          posA = y * width + 1;
          posB = (y - 1) * width + 1;
          posC = y * width;
          posD = (y - 1) * width;

          for (x = 1; x < width; x++) {
            integralImageData[posA] += imageData[posA] + integralImageData[posB] + integralImageData[posC] - integralImageData[posD];
            posA++;
            posB++;
            posC++;
            posD++;
          }
        }
      }
      function computeIntegralImage(imageWrapper, integralWrapper) {
        var imageData = imageWrapper.data;
        var width = imageWrapper.size.x;
        var height = imageWrapper.size.y;
        var integralImageData = integralWrapper.data;
        var sum = 0; // sum up first row

        for (var i = 0; i < width; i++) {
          sum += imageData[i];
          integralImageData[i] = sum;
        }

        for (var v = 1; v < height; v++) {
          sum = 0;

          for (var u = 0; u < width; u++) {
            sum += imageData[v * width + u];
            integralImageData[v * width + u] = sum + integralImageData[(v - 1) * width + u];
          }
        }
      }
      function thresholdImage(imageWrapper, threshold, targetWrapper) {
        if (!targetWrapper) {
          // eslint-disable-next-line no-param-reassign
          targetWrapper = imageWrapper;
        }

        var imageData = imageWrapper.data;
        var length = imageData.length;
        var targetData = targetWrapper.data;

        while (length--) {
          targetData[length] = imageData[length] < threshold ? 1 : 0;
        }
      }
      function computeHistogram(imageWrapper, bitsPerPixel) {
        if (!bitsPerPixel) {
          // eslint-disable-next-line no-param-reassign
          bitsPerPixel = 8;
        }

        var imageData = imageWrapper.data;
        var length = imageData.length;
        var bitShift = 8 - bitsPerPixel;
        var bucketCnt = 1 << bitsPerPixel;
        var hist = new Int32Array(bucketCnt);

        while (length--) {
          hist[imageData[length] >> bitShift]++;
        }

        return hist;
      }
      function sharpenLine(line) {
        var i;
        var length = line.length;
        var left = line[0];
        var center = line[1];
        var right;

        for (i = 1; i < length - 1; i++) {
          right = line[i + 1]; //  -1 4 -1 kernel
          // eslint-disable-next-line no-param-reassign

          line[i - 1] = center * 2 - left - right & 255;
          left = center;
          center = right;
        }

        return line;
      }
      function determineOtsuThreshold(imageWrapper) {
        var bitsPerPixel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
        var hist;
        var bitShift = 8 - bitsPerPixel;

        function px(init, end) {
          var sum = 0;

          for (var i = init; i <= end; i++) {
            sum += hist[i];
          }

          return sum;
        }

        function mx(init, end) {
          var sum = 0;

          for (var i = init; i <= end; i++) {
            sum += i * hist[i];
          }

          return sum;
        }

        function determineThreshold() {
          var vet = [0];
          var p1;
          var p2;
          var p12;
          var m1;
          var m2;
          var m12;
          var max = (1 << bitsPerPixel) - 1;
          hist = computeHistogram(imageWrapper, bitsPerPixel);

          for (var k = 1; k < max; k++) {
            p1 = px(0, k);
            p2 = px(k + 1, max);
            p12 = p1 * p2;

            if (p12 === 0) {
              p12 = 1;
            }

            m1 = mx(0, k) * p2;
            m2 = mx(k + 1, max) * p1;
            m12 = m1 - m2;
            vet[k] = m12 * m12 / p12;
          }

          return array_helper["a" /* default */].maxIndex(vet);
        }

        var threshold = determineThreshold();
        return threshold << bitShift;
      }
      function otsuThreshold(imageWrapper, targetWrapper) {
        var threshold = determineOtsuThreshold(imageWrapper);
        thresholdImage(imageWrapper, threshold, targetWrapper);
        return threshold;
      } // local thresholding

      function computeBinaryImage(imageWrapper, integralWrapper, targetWrapper) {
        computeIntegralImage(imageWrapper, integralWrapper);

        if (!targetWrapper) {
          // eslint-disable-next-line no-param-reassign
          targetWrapper = imageWrapper;
        }

        var imageData = imageWrapper.data;
        var targetData = targetWrapper.data;
        var width = imageWrapper.size.x;
        var height = imageWrapper.size.y;
        var integralImageData = integralWrapper.data;
        var sum = 0;
        var v;
        var u;
        var kernel = 3;
        var A;
        var B;
        var C;
        var D;
        var avg;
        var size = (kernel * 2 + 1) * (kernel * 2 + 1); // clear out top & bottom-border

        for (v = 0; v <= kernel; v++) {
          for (u = 0; u < width; u++) {
            targetData[v * width + u] = 0;
            targetData[(height - 1 - v) * width + u] = 0;
          }
        } // clear out left & right border


        for (v = kernel; v < height - kernel; v++) {
          for (u = 0; u <= kernel; u++) {
            targetData[v * width + u] = 0;
            targetData[v * width + (width - 1 - u)] = 0;
          }
        }

        for (v = kernel + 1; v < height - kernel - 1; v++) {
          for (u = kernel + 1; u < width - kernel; u++) {
            A = integralImageData[(v - kernel - 1) * width + (u - kernel - 1)];
            B = integralImageData[(v - kernel - 1) * width + (u + kernel)];
            C = integralImageData[(v + kernel) * width + (u - kernel - 1)];
            D = integralImageData[(v + kernel) * width + (u + kernel)];
            sum = D - C - B + A;
            avg = sum / size;
            targetData[v * width + u] = imageData[v * width + u] > avg + 5 ? 0 : 1;
          }
        }
      }
      function cv_utils_cluster(points, threshold, property) {
        var i;
        var k;
        var thisCluster;
        var point;
        var clusters = [];

        if (!property) {
          // eslint-disable-next-line no-param-reassign
          property = 'rad';
        }

        function addToCluster(newPoint) {
          var found = false;

          for (k = 0; k < clusters.length; k++) {
            thisCluster = clusters[k];

            if (thisCluster.fits(newPoint)) {
              thisCluster.add(newPoint);
              found = true;
            }
          }

          return found;
        } // iterate over each cloud


        for (i = 0; i < points.length; i++) {
          point = cluster.createPoint(points[i], i, property);

          if (!addToCluster(point)) {
            clusters.push(cluster.create(point, threshold));
          }
        }

        return clusters;
      }
      var Tracer = {
        trace: function trace(points, vec) {
          var iteration;
          var maxIterations = 10;
          var top = [];
          var result = [];
          var centerPos = 0;
          var currentPos = 0;

          function trace(idx, forward) {
            var to;
            var toIdx;
            var predictedPos;
            var thresholdX = 1;
            var thresholdY = Math.abs(vec[1] / 10);
            var found = false;

            function match(pos, predicted) {
              if (pos.x > predicted.x - thresholdX && pos.x < predicted.x + thresholdX && pos.y > predicted.y - thresholdY && pos.y < predicted.y + thresholdY) {
                return true;
              }

              return false;
            } // check if the next index is within the vec specifications
            // if not, check as long as the threshold is met


            var from = points[idx];

            if (forward) {
              predictedPos = {
                x: from.x + vec[0],
                y: from.y + vec[1]
              };
            } else {
              predictedPos = {
                x: from.x - vec[0],
                y: from.y - vec[1]
              };
            }

            toIdx = forward ? idx + 1 : idx - 1;
            to = points[toIdx]; // eslint-disable-next-line no-cond-assign

            while (to && (found = match(to, predictedPos)) !== true && Math.abs(to.y - from.y) < vec[1]) {
              toIdx = forward ? toIdx + 1 : toIdx - 1;
              to = points[toIdx];
            }

            return found ? toIdx : null;
          }

          for (iteration = 0; iteration < maxIterations; iteration++) {
            // randomly select point to start with
            centerPos = Math.floor(Math.random() * points.length); // trace forward

            top = [];
            currentPos = centerPos;
            top.push(points[currentPos]); // eslint-disable-next-line no-cond-assign

            while ((currentPos = trace(currentPos, true)) !== null) {
              top.push(points[currentPos]);
            }

            if (centerPos > 0) {
              currentPos = centerPos; // eslint-disable-next-line no-cond-assign

              while ((currentPos = trace(currentPos, false)) !== null) {
                top.push(points[currentPos]);
              }
            }

            if (top.length > result.length) {
              result = top;
            }
          }

          return result;
        }
      };
      var DILATE = 1;
      var ERODE = 2;
      function dilate(inImageWrapper, outImageWrapper) {
        var v;
        var u;
        var inImageData = inImageWrapper.data;
        var outImageData = outImageWrapper.data;
        var height = inImageWrapper.size.y;
        var width = inImageWrapper.size.x;
        var sum;
        var yStart1;
        var yStart2;
        var xStart1;
        var xStart2;

        for (v = 1; v < height - 1; v++) {
          for (u = 1; u < width - 1; u++) {
            yStart1 = v - 1;
            yStart2 = v + 1;
            xStart1 = u - 1;
            xStart2 = u + 1;
            sum = inImageData[yStart1 * width + xStart1] + inImageData[yStart1 * width + xStart2] + inImageData[v * width + u] + inImageData[yStart2 * width + xStart1] + inImageData[yStart2 * width + xStart2];
            outImageData[v * width + u] = sum > 0 ? 1 : 0;
          }
        }
      }
      function erode(inImageWrapper, outImageWrapper) {
        var v;
        var u;
        var inImageData = inImageWrapper.data;
        var outImageData = outImageWrapper.data;
        var height = inImageWrapper.size.y;
        var width = inImageWrapper.size.x;
        var sum;
        var yStart1;
        var yStart2;
        var xStart1;
        var xStart2;

        for (v = 1; v < height - 1; v++) {
          for (u = 1; u < width - 1; u++) {
            yStart1 = v - 1;
            yStart2 = v + 1;
            xStart1 = u - 1;
            xStart2 = u + 1;
            sum = inImageData[yStart1 * width + xStart1] + inImageData[yStart1 * width + xStart2] + inImageData[v * width + u] + inImageData[yStart2 * width + xStart1] + inImageData[yStart2 * width + xStart2];
            outImageData[v * width + u] = sum === 5 ? 1 : 0;
          }
        }
      }
      function subtract(aImageWrapper, bImageWrapper, resultImageWrapper) {
        if (!resultImageWrapper) {
          // eslint-disable-next-line no-param-reassign
          resultImageWrapper = aImageWrapper;
        }

        var length = aImageWrapper.data.length;
        var aImageData = aImageWrapper.data;
        var bImageData = bImageWrapper.data;
        var cImageData = resultImageWrapper.data;

        while (length--) {
          cImageData[length] = aImageData[length] - bImageData[length];
        }
      }
      function bitwiseOr(aImageWrapper, bImageWrapper, resultImageWrapper) {
        if (!resultImageWrapper) {
          // eslint-disable-next-line no-param-reassign
          resultImageWrapper = aImageWrapper;
        }

        var length = aImageWrapper.data.length;
        var aImageData = aImageWrapper.data;
        var bImageData = bImageWrapper.data;
        var cImageData = resultImageWrapper.data;

        while (length--) {
          cImageData[length] = aImageData[length] || bImageData[length];
        }
      }
      function countNonZero(imageWrapper) {
        var length = imageWrapper.data.length;
        var data = imageWrapper.data;
        var sum = 0;

        while (length--) {
          sum += data[length];
        }

        return sum;
      }
      function topGeneric(list, top, scoreFunc) {
        var i;
        var minIdx = 0;
        var min = 0;
        var queue = [];
        var score;
        var hit;
        var pos;

        for (i = 0; i < top; i++) {
          queue[i] = {
            score: 0,
            item: null
          };
        }

        for (i = 0; i < list.length; i++) {
          score = scoreFunc.apply(this, [list[i]]);

          if (score > min) {
            hit = queue[minIdx];
            hit.score = score;
            hit.item = list[i];
            min = Number.MAX_VALUE;

            for (pos = 0; pos < top; pos++) {
              if (queue[pos].score < min) {
                min = queue[pos].score;
                minIdx = pos;
              }
            }
          }
        }

        return queue;
      }
      function grayArrayFromImage(htmlImage, offsetX, ctx, array) {
        ctx.drawImage(htmlImage, offsetX, 0, htmlImage.width, htmlImage.height);
        var ctxData = ctx.getImageData(offsetX, 0, htmlImage.width, htmlImage.height).data;
        computeGray(ctxData, array);
      }
      function grayArrayFromContext(ctx, size, offset, array) {
        var ctxData = ctx.getImageData(offset.x, offset.y, size.x, size.y).data;
        computeGray(ctxData, array);
      }
      function grayAndHalfSampleFromCanvasData(canvasData, size, outArray) {
        var topRowIdx = 0;
        var bottomRowIdx = size.x;
        var endIdx = Math.floor(canvasData.length / 4);
        var outWidth = size.x / 2;
        var outImgIdx = 0;
        var inWidth = size.x;
        var i;

        while (bottomRowIdx < endIdx) {
          for (i = 0; i < outWidth; i++) {
            // eslint-disable-next-line no-param-reassign
            outArray[outImgIdx] = (0.299 * canvasData[topRowIdx * 4 + 0] + 0.587 * canvasData[topRowIdx * 4 + 1] + 0.114 * canvasData[topRowIdx * 4 + 2] + (0.299 * canvasData[(topRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(topRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(topRowIdx + 1) * 4 + 2]) + (0.299 * canvasData[bottomRowIdx * 4 + 0] + 0.587 * canvasData[bottomRowIdx * 4 + 1] + 0.114 * canvasData[bottomRowIdx * 4 + 2]) + (0.299 * canvasData[(bottomRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(bottomRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(bottomRowIdx + 1) * 4 + 2])) / 4;
            outImgIdx++;
            topRowIdx += 2;
            bottomRowIdx += 2;
          }

          topRowIdx += inWidth;
          bottomRowIdx += inWidth;
        }
      }
      function computeGray(imageData, outArray, config) {
        var l = imageData.length / 4 | 0;
        var singleChannel = config && config.singleChannel === true;

        if (singleChannel) {
          for (var i = 0; i < l; i++) {
            // eslint-disable-next-line no-param-reassign
            outArray[i] = imageData[i * 4 + 0];
          }
        } else {
          for (var _i = 0; _i < l; _i++) {
            // eslint-disable-next-line no-param-reassign
            outArray[_i] = 0.299 * imageData[_i * 4 + 0] + 0.587 * imageData[_i * 4 + 1] + 0.114 * imageData[_i * 4 + 2];
          }
        }
      }
      function loadImageArray(src, callback) {
        var canvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document && document.createElement('canvas');
        var img = new Image();
        img.callback = callback;

        img.onload = function () {
          // eslint-disable-next-line no-param-reassign
          canvas.width = this.width; // eslint-disable-next-line no-param-reassign

          canvas.height = this.height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(this, 0, 0);
          var array = new Uint8Array(this.width * this.height);
          ctx.drawImage(this, 0, 0);

          var _ctx$getImageData = ctx.getImageData(0, 0, this.width, this.height),
            data = _ctx$getImageData.data;

          computeGray(data, array);
          this.callback(array, {
            x: this.width,
            y: this.height
          }, this);
        };

        img.src = src;
      }
      /**
       * @param inImg {ImageWrapper} input image to be sampled
       * @param outImg {ImageWrapper} to be stored in
       */

      function halfSample(inImgWrapper, outImgWrapper) {
        var inImg = inImgWrapper.data;
        var inWidth = inImgWrapper.size.x;
        var outImg = outImgWrapper.data;
        var topRowIdx = 0;
        var bottomRowIdx = inWidth;
        var endIdx = inImg.length;
        var outWidth = inWidth / 2;
        var outImgIdx = 0;

        while (bottomRowIdx < endIdx) {
          for (var i = 0; i < outWidth; i++) {
            outImg[outImgIdx] = Math.floor((inImg[topRowIdx] + inImg[topRowIdx + 1] + inImg[bottomRowIdx] + inImg[bottomRowIdx + 1]) / 4);
            outImgIdx++;
            topRowIdx += 2;
            bottomRowIdx += 2;
          }

          topRowIdx += inWidth;
          bottomRowIdx += inWidth;
        }
      }
      function hsv2rgb(hsv) {
        var rgb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
        var h = hsv[0];
        var s = hsv[1];
        var v = hsv[2];
        var c = v * s;
        var x = c * (1 - Math.abs(h / 60 % 2 - 1));
        var m = v - c;
        var r = 0;
        var g = 0;
        var b = 0;

        if (h < 60) {
          r = c;
          g = x;
        } else if (h < 120) {
          r = x;
          g = c;
        } else if (h < 180) {
          g = c;
          b = x;
        } else if (h < 240) {
          g = x;
          b = c;
        } else if (h < 300) {
          r = x;
          b = c;
        } else if (h < 360) {
          r = c;
          b = x;
        } // eslint-disable-next-line no-param-reassign


        rgb[0] = (r + m) * 255 | 0; // eslint-disable-next-line no-param-reassign

        rgb[1] = (g + m) * 255 | 0; // eslint-disable-next-line no-param-reassign

        rgb[2] = (b + m) * 255 | 0;
        return rgb;
      }
      function _computeDivisors(n) {
        var largeDivisors = [];
        var divisors = [];

        for (var i = 1; i < Math.sqrt(n) + 1; i++) {
          if (n % i === 0) {
            divisors.push(i);

            if (i !== n / i) {
              largeDivisors.unshift(Math.floor(n / i));
            }
          }
        }

        return divisors.concat(largeDivisors);
      }

      function _computeIntersection(arr1, arr2) {
        var i = 0;
        var j = 0;
        var result = [];

        while (i < arr1.length && j < arr2.length) {
          if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
          } else if (arr1[i] > arr2[j]) {
            j++;
          } else {
            i++;
          }
        }

        return result;
      }

      function calculatePatchSize(patchSize, imgSize) {
        var divisorsX = _computeDivisors(imgSize.x);

        var divisorsY = _computeDivisors(imgSize.y);

        var wideSide = Math.max(imgSize.x, imgSize.y);

        var common = _computeIntersection(divisorsX, divisorsY);

        var nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80];
        var nrOfPatchesMap = {
          'x-small': 5,
          small: 4,
          medium: 3,
          large: 2,
          'x-large': 1
        };
        var nrOfPatchesIdx = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium;
        var nrOfPatches = nrOfPatchesList[nrOfPatchesIdx];
        var desiredPatchSize = Math.floor(wideSide / nrOfPatches);
        var optimalPatchSize;

        function findPatchSizeForDivisors(divisors) {
          var i = 0;
          var found = divisors[Math.floor(divisors.length / 2)];

          while (i < divisors.length - 1 && divisors[i] < desiredPatchSize) {
            i++;
          }

          if (i > 0) {
            if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
              found = divisors[i - 1];
            } else {
              found = divisors[i];
            }
          }

          if (desiredPatchSize / found < nrOfPatchesList[nrOfPatchesIdx + 1] / nrOfPatchesList[nrOfPatchesIdx] && desiredPatchSize / found > nrOfPatchesList[nrOfPatchesIdx - 1] / nrOfPatchesList[nrOfPatchesIdx]) {
            return {
              x: found,
              y: found
            };
          }

          return null;
        }

        optimalPatchSize = findPatchSizeForDivisors(common);

        if (!optimalPatchSize) {
          optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(wideSide));

          if (!optimalPatchSize) {
            optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));
          }
        }

        return optimalPatchSize;
      }
      function _parseCSSDimensionValues(value) {
        var dimension = {
          value: parseFloat(value),
          unit: value.indexOf('%') === value.length - 1 ? '%' : '%'
        };
        return dimension;
      }
      var _dimensionsConverters = {
        top: function top(dimension, context) {
          return dimension.unit === '%' ? Math.floor(context.height * (dimension.value / 100)) : null;
        },
        right: function right(dimension, context) {
          return dimension.unit === '%' ? Math.floor(context.width - context.width * (dimension.value / 100)) : null;
        },
        bottom: function bottom(dimension, context) {
          return dimension.unit === '%' ? Math.floor(context.height - context.height * (dimension.value / 100)) : null;
        },
        left: function left(dimension, context) {
          return dimension.unit === '%' ? Math.floor(context.width * (dimension.value / 100)) : null;
        }
      };
      function computeImageArea(inputWidth, inputHeight, area) {
        var context = {
          width: inputWidth,
          height: inputHeight
        };
        var parsedArea = Object.keys(area).reduce(function (result, key) {
          var value = area[key];

          var parsed = _parseCSSDimensionValues(value);

          var calculated = _dimensionsConverters[key](parsed, context); // eslint-disable-next-line no-param-reassign


          result[key] = calculated;
          return result;
        }, {});
        return {
          sx: parsedArea.left,
          sy: parsedArea.top,
          sw: parsedArea.right - parsedArea.left,
          sh: parsedArea.bottom - parsedArea.top
        };
      }

      /***/
    }),
/* 9 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
// TODO: XYPosition should be an XYObject, but that breaks XYDefinition, which breaks drawPath() below.
// XYDefinition tells us which component of a given array or object is the "X" and which is the "Y".
// Usually this is 0 for X and 1 for Y, but might be used as 'x' for x and 'y' for Y.
/* harmony default export */ __webpack_exports__["a"] = ({
        drawRect: function drawRect(pos, size, ctx, style) {
          ctx.strokeStyle = style.color;
          ctx.fillStyle = style.color;
          ctx.lineWidth = style.lineWidth || 1;
          ctx.beginPath();
          ctx.strokeRect(pos.x, pos.y, size.x, size.y);
        },
        drawPath: function drawPath(path, def, ctx, style) {
          ctx.strokeStyle = style.color;
          ctx.fillStyle = style.color;
          ctx.lineWidth = style.lineWidth;
          ctx.beginPath();
          ctx.moveTo(path[0][def.x], path[0][def.y]);

          for (var j = 1; j < path.length; j++) {
            ctx.lineTo(path[j][def.x], path[j][def.y]);
          }

          ctx.closePath();
          ctx.stroke();
        },
        drawImage: function drawImage(imageData, size, ctx) {
          var canvasData = ctx.getImageData(0, 0, size.x, size.y);
          var data = canvasData.data;
          var canvasDataPos = data.length;
          var imageDataPos = imageData.length;

          if (canvasDataPos / imageDataPos !== 4) {
            return false;
          }

          while (imageDataPos--) {
            var value = imageData[imageDataPos];
            data[--canvasDataPos] = 255;
            data[--canvasDataPos] = value;
            data[--canvasDataPos] = value;
            data[--canvasDataPos] = value;
          }

          ctx.putImageData(canvasData, 0, 0);
          return true;
        }
      });

      /***/
    }),
/* 10 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
        init: function init(arr, val) {
          // arr.fill(val);
          var l = arr.length;

          while (l--) {
            arr[l] = val;
          }
        },

        /**
         * Shuffles the content of an array
         */
        shuffle: function shuffle(arr) {
          var i = arr.length - 1;

          for (i; i >= 0; i--) {
            var j = Math.floor(Math.random() * i);
            var x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
          }

          return arr;
        },
        toPointList: function toPointList(arr) {
          var rows = arr.reduce(function (p, n) {
            var row = "[".concat(n.join(','), "]");
            p.push(row);
            return p;
          }, []);
          return "[".concat(rows.join(',\r\n'), "]");
        },

        /**
         * returns the elements which's score is bigger than the threshold
         */
        threshold: function threshold(arr, _threshold, scoreFunc) {
          var queue = arr.reduce(function (prev, next) {
            if (scoreFunc.apply(arr, [next]) >= _threshold) {
              prev.push(next);
            }

            return prev;
          }, []);
          return queue;
        },
        maxIndex: function maxIndex(arr) {
          var max = 0;

          for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[max]) {
              max = i;
            }
          }

          return max;
        },
        max: function max(arr) {
          var max = 0;

          for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }

          return max;
        },
        sum: function sum(arr) {
          var length = arr.length;
          var sum = 0;

          while (length--) {
            sum += arr[length];
          }

          return sum;
        }
      });

      /***/
    }),
/* 11 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_vec2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var gl_vec2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_vec2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cv_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _array_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







      var vec2 = {
        clone: gl_vec2__WEBPACK_IMPORTED_MODULE_4__["clone"]
      };

      function assertNumberPositive(val) {
        if (val < 0) {
          throw new Error("expected positive number, received ".concat(val));
        }
      }

      var ImageWrapper = /*#__PURE__*/function () {
        // Represents a basic image combining the data and size. In addition, some methods for
        // manipulation are contained within.
        function ImageWrapper(size, data) {
          var ArrayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Uint8Array;
          var initialize = arguments.length > 3 ? arguments[3] : undefined;

          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImageWrapper);

          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "data", void 0);

          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "size", void 0);

          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "indexMapping", void 0);

          if (!data) {
            this.data = new ArrayType(size.x * size.y);

            if (initialize) {
              _array_helper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].init(this.data, 0);
            }
          } else {
            this.data = data;
          }

          this.size = size;
        } // tests if a position is within the image, extended out by a border on each side


        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImageWrapper, [{
          key: "inImageWithBorder",
          value: function inImageWithBorder(imgRef) {
            var border = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            assertNumberPositive(border); // TODO: code_128 starts failing miserably when i only allow imgRef to contain positive numbers.
            // TODO: this doesn't make much sense to me, why does it go negative?  Tests are not affected by
            // returning false, but the whole code_128 reader blows up when i throw on negative imgRef.
            // assertNumberPositive(imgRef.x);
            // assertNumberPositive(imgRef.y);

            return imgRef.x >= 0 && imgRef.y >= 0 && imgRef.x < this.size.x + border * 2 && imgRef.y < this.size.y + border * 2;
          } // Copy from THIS ImageWrapper to the new imageWrapper parameter, starting at from, stopping at
          // end of new imageWrapper size.

        }, {
          key: "subImageAsCopy",
          value: function subImageAsCopy(imageWrapper, from) {
            assertNumberPositive(from.x);
            assertNumberPositive(from.y);
            var _imageWrapper$size = imageWrapper.size,
              sizeX = _imageWrapper$size.x,
              sizeY = _imageWrapper$size.y;

            for (var x = 0; x < sizeX; x++) {
              for (var y = 0; y < sizeY; y++) {
                // eslint-disable-next-line no-param-reassign
                imageWrapper.data[y * sizeX + x] = this.data[(from.y + y) * this.size.x + from.x + x];
              }
            }

            return imageWrapper; // TODO: this function really probably should call into ImageWrapper somewhere to make
            // sure that all of it's parameters are set properly, something like
            // ImageWrapper.UpdateFrom()
            // that might take a provided data and size, and make sure there's no invalid indexMapping
            // hanging around, and such.
          } // Retrieve a grayscale value at the given pixel position of the image

        }, {
          key: "get",
          value: function get(x, y) {
            return this.data[y * this.size.x + x];
          } // Retrieve a grayscale value at the given pixel position of the image (safe, whatever that
          // means)

        }, {
          key: "getSafe",
          value: function getSafe(x, y) {
            // cache indexMapping because if we're using it once, we'll probably need it a bunch more
            // too
            if (!this.indexMapping) {
              this.indexMapping = {
                x: [],
                y: []
              };

              for (var i = 0; i < this.size.x; i++) {
                this.indexMapping.x[i] = i;
                this.indexMapping.x[i + this.size.x] = i;
              }

              for (var _i = 0; _i < this.size.y; _i++) {
                this.indexMapping.y[_i] = _i;
                this.indexMapping.y[_i + this.size.y] = _i;
              }
            }

            return this.data[this.indexMapping.y[y + this.size.y] * this.size.x + this.indexMapping.x[x + this.size.x]];
          } // Sets a given pixel position in the image to the given grayscale value

        }, {
          key: "set",
          value: function set(x, y, value) {
            this.data[y * this.size.x + x] = value;
            delete this.indexMapping;
            return this;
          } // Sets the border of the image (1 pixel) to zero

        }, {
          key: "zeroBorder",
          value: function zeroBorder() {
            var _this$size = this.size,
              width = _this$size.x,
              height = _this$size.y;

            for (var i = 0; i < width; i++) {
              // eslint-disable-next-line no-multi-assign
              this.data[i] = this.data[(height - 1) * width + i] = 0;
            }

            for (var _i2 = 1; _i2 < height - 1; _i2++) {
              // eslint-disable-next-line no-multi-assign
              this.data[_i2 * width] = this.data[_i2 * width + (width - 1)] = 0;
            }

            delete this.indexMapping;
            return this;
          } // TODO: this function is entirely too large for me to reason out right at this moment that i'm handling
          // all the rest of it, so this is a verbatim copy of the javascript source, with only tweaks
          // necessary to get it to run, no thought put into it yet.

        }, {
          key: "moments",
          value: function moments(labelCount) {
            var data = this.data;
            var x;
            var y;
            var height = this.size.y;
            var width = this.size.x;
            var val;
            var ysq;
            var labelSum = [];
            var i;
            var label;
            var mu11;
            var mu02;
            var mu20;
            var x_;
            var y_;
            var tmp;
            var result = [];
            var PI = Math.PI;
            var PI_4 = PI / 4;

            if (labelCount <= 0) {
              return result;
            }

            for (i = 0; i < labelCount; i++) {
              labelSum[i] = {
                m00: 0,
                m01: 0,
                m10: 0,
                m11: 0,
                m02: 0,
                m20: 0,
                theta: 0,
                rad: 0
              };
            }

            for (y = 0; y < height; y++) {
              ysq = y * y;

              for (x = 0; x < width; x++) {
                val = data[y * width + x];

                if (val > 0) {
                  label = labelSum[val - 1];
                  label.m00 += 1;
                  label.m01 += y;
                  label.m10 += x;
                  label.m11 += x * y;
                  label.m02 += ysq;
                  label.m20 += x * x;
                }
              }
            }

            for (i = 0; i < labelCount; i++) {
              label = labelSum[i]; // eslint-disable-next-line no-restricted-globals

              if (!isNaN(label.m00) && label.m00 !== 0) {
                x_ = label.m10 / label.m00;
                y_ = label.m01 / label.m00;
                mu11 = label.m11 / label.m00 - x_ * y_;
                mu02 = label.m02 / label.m00 - y_ * y_;
                mu20 = label.m20 / label.m00 - x_ * x_;
                tmp = (mu02 - mu20) / (2 * mu11);
                tmp = 0.5 * Math.atan(tmp) + (mu11 >= 0 ? PI_4 : -PI_4) + PI; // eslint-disable-next-line no-mixed-operators

                label.theta = (tmp * 180 / PI + 90) % 180 - 90;

                if (label.theta < 0) {
                  label.theta += 180;
                }

                label.rad = tmp > PI ? tmp - PI : tmp;
                label.vec = vec2.clone([Math.cos(tmp), Math.sin(tmp)]);
                result.push(label);
              }
            }

            return result;
          } // return a Uint8ClampedArray containing this grayscale image converted to RGBA form

        }, {
          key: "getAsRGBA",
          value: function getAsRGBA() {
            var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
            var ret = new Uint8ClampedArray(4 * this.size.x * this.size.y);

            for (var y = 0; y < this.size.y; y++) {
              for (var x = 0; x < this.size.x; x++) {
                var pixel = y * this.size.x + x;
                var current = this.get(x, y) * scale;
                ret[pixel * 4 + 0] = current;
                ret[pixel * 4 + 1] = current;
                ret[pixel * 4 + 2] = current;
                ret[pixel * 4 + 3] = 255;
              }
            }

            return ret;
          } // Display this ImageWrapper in a given Canvas element at the specified scale

        }, {
          key: "show",
          value: function show(canvas) {
            var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
            var ctx = canvas.getContext('2d');

            if (!ctx) {
              throw new Error('Unable to get canvas context');
            }

            var frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = this.getAsRGBA(scale); // eslint-disable-next-line no-param-reassign

            canvas.width = this.size.x; // eslint-disable-next-line no-param-reassign

            canvas.height = this.size.y;
            var newFrame = new ImageData(data, frame.width, frame.height);
            ctx.putImageData(newFrame, 0, 0);
          } // Displays a specified SubImage area in a given canvas. This differs drastically from
          // creating a new SubImage and using it's show() method. Why? I don't have the answer to that
          // yet.  I suspect the HSV/RGB operations involved here are making it significantly different,
          // but until I can visualize these functions side by side, I'm just going to copy the existing
          // implementation.

        }, {
          key: "overlay",
          value: function overlay(canvas, inScale, from) {
            var adjustedScale = inScale < 0 || inScale > 360 ? 360 : inScale;
            var hsv = [0, 1, 1];
            var rgb = [0, 0, 0];
            var whiteRgb = [255, 255, 255];
            var blackRgb = [0, 0, 0];
            var result = [];
            var ctx = canvas.getContext('2d');

            if (!ctx) {
              throw new Error('Unable to get canvas context');
            }

            var frame = ctx.getImageData(from.x, from.y, this.size.x, this.size.y);
            var data = frame.data;
            var length = this.data.length;

            while (length--) {
              hsv[0] = this.data[length] * adjustedScale; // eslint-disable-next-line no-nested-ternary

              result = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : Object(_cv_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2rgb"])(hsv, rgb);
              var pos = length * 4;
              var _result = result;

              var _result2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_result, 3);

              data[pos] = _result2[0];
              data[pos + 1] = _result2[1];
              data[pos + 2] = _result2[2];
              data[pos + 3] = 255;
            }

            ctx.putImageData(frame, from.x, from.y);
          }
        }]);

        return ImageWrapper;
      }();

/* harmony default export */ __webpack_exports__["a"] = (ImageWrapper);

      /***/
    }),
/* 12 */
/***/ (function (module, exports) {

      var g; // This works in non-strict mode

      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      } // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}


      module.exports = g;

      /***/
    }),
/* 13 */
/***/ (function (module, exports) {

      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      module.exports = isObject;

      /***/
    }),
/* 14 */
/***/ (function (module, exports) {

      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      var isArray = Array.isArray;
      module.exports = isArray;

      /***/
    }),
/* 15 */
/***/ (function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() { }

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };

      /***/
    }),
/* 16 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      // a duplex stream is just a stream that is both readable and writable.
      // Since JS doesn't have multiple prototypal inheritance, this class
      // prototypally inherits from Readable, and then parasitically from
      // Writable.

      /*<replacement>*/

      var pna = __webpack_require__(38);
      /*</replacement>*/

      /*<replacement>*/


      var objectKeys = Object.keys || function (obj) {
        var keys = [];

        for (var key in obj) {
          keys.push(key);
        }

        return keys;
      };
      /*</replacement>*/


      module.exports = Duplex;
      /*<replacement>*/

      var util = Object.create(__webpack_require__(27));
      util.inherits = __webpack_require__(22);
      /*</replacement>*/

      var Readable = __webpack_require__(94);

      var Writable = __webpack_require__(55);

      util.inherits(Duplex, Readable);
      {
        // avoid scope creep, the keys array can then be collected
        var keys = objectKeys(Writable.prototype);

        for (var v = 0; v < keys.length; v++) {
          var method = keys[v];
          if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
        }
      }

      function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
        Readable.call(this, options);
        Writable.call(this, options);
        if (options && options.readable === false) this.readable = false;
        if (options && options.writable === false) this.writable = false;
        this.allowHalfOpen = true;
        if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
        this.once('end', onend);
      }

      Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function () {
          return this._writableState.highWaterMark;
        }
      }); // the no-half-open enforcer

      function onend() {
        // if we allow half-open state, or if the writable side ended,
        // then we're ok.
        if (this.allowHalfOpen || this._writableState.ended) return; // no more data can be written.
        // But allow more writes to happen in this tick.

        pna.nextTick(onEndNT, this);
      }

      function onEndNT(self) {
        self.end();
      }

      Object.defineProperty(Duplex.prototype, 'destroyed', {
        get: function () {
          if (this._readableState === undefined || this._writableState === undefined) {
            return false;
          }

          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (value) {
          // we ignore the value if the stream
          // has not been initialized yet
          if (this._readableState === undefined || this._writableState === undefined) {
            return;
          } // backward compatibility, the user is explicitly
          // managing destroyed


          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });

      Duplex.prototype._destroy = function (err, cb) {
        this.push(null);
        this.end();
        pna.nextTick(cb, err);
      };

      /***/
    }),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

      var baseMerge = __webpack_require__(179),
        createAssigner = __webpack_require__(234);
      /**
       * This method is like `_.assign` except that it recursively merges own and
       * inherited enumerable string keyed properties of source objects into the
       * destination object. Source properties that resolve to `undefined` are
       * skipped if a destination value exists. Array and plain object properties
       * are merged recursively. Other objects and value types are overridden by
       * assignment. Source objects are applied from left to right. Subsequent
       * sources overwrite property assignments of previous sources.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = {
       *   'a': [{ 'b': 2 }, { 'd': 4 }]
       * };
       *
       * var other = {
       *   'a': [{ 'c': 3 }, { 'e': 5 }]
       * };
       *
       * _.merge(object, other);
       * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
       */


      var merge = createAssigner(function (object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      module.exports = merge;

      /***/
    }),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

      var superPropBase = __webpack_require__(244);

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          module.exports = _get = Reflect.get;
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
        }

        return _get(target, property, receiver || target);
      }

      module.exports = _get;

      /***/
    }),
/* 19 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(245);

      /***/
    }),
/* 20 */
/***/ (function (module, exports, __webpack_require__) {

      var freeGlobal = __webpack_require__(80);
      /** Detect free variable `self`. */


      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      /** Used as a reference to the global object. */

      var root = freeGlobal || freeSelf || Function('return this')();
      module.exports = root;

      /***/
    }),
/* 21 */
/***/ (function (module, exports) {

      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }

      module.exports = isObjectLike;

      /***/
    }),
/* 22 */
/***/ (function (module, exports) {

      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;

            var TempCtor = function () { };

            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }

      /***/
    }),
/* 23 */
/***/ (function (module, exports) {

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          module.exports = _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          module.exports = _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      module.exports = _typeof;

      /***/
    }),
/* 24 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /**
       * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
       */
      var Tracer = {
        searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
        create: function create(imageWrapper, labelWrapper) {
          var imageData = imageWrapper.data;
          var labelData = labelWrapper.data;
          var searchDirections = this.searchDirections;
          var width = imageWrapper.size.x;
          var pos;

          function _trace(current, color, label, edgelabel) {
            var i;
            var y;
            var x;

            for (i = 0; i < 7; i++) {
              y = current.cy + searchDirections[current.dir][0];
              x = current.cx + searchDirections[current.dir][1];
              pos = y * width + x;

              if (imageData[pos] === color && (labelData[pos] === 0 || labelData[pos] === label)) {
                labelData[pos] = label;
                current.cy = y;
                current.cx = x;
                return true;
              }

              if (labelData[pos] === 0) {
                labelData[pos] = edgelabel;
              }

              current.dir = (current.dir + 1) % 8;
            }

            return false;
          }

          function vertex2D(x, y, dir) {
            return {
              dir: dir,
              x: x,
              y: y,
              next: null,
              prev: null
            };
          }

          function _contourTracing(sy, sx, label, color, edgelabel) {
            var Fv = null;
            var Cv;
            var P;
            var ldir;
            var current = {
              cx: sx,
              cy: sy,
              dir: 0
            };

            if (_trace(current, color, label, edgelabel)) {
              Fv = vertex2D(sx, sy, current.dir);
              Cv = Fv;
              ldir = current.dir;
              P = vertex2D(current.cx, current.cy, 0);
              P.prev = Cv;
              Cv.next = P;
              P.next = null;
              Cv = P;

              do {
                current.dir = (current.dir + 6) % 8;

                _trace(current, color, label, edgelabel);

                if (ldir !== current.dir) {
                  Cv.dir = current.dir;
                  P = vertex2D(current.cx, current.cy, 0);
                  P.prev = Cv;
                  Cv.next = P;
                  P.next = null;
                  Cv = P;
                } else {
                  Cv.dir = ldir;
                  Cv.x = current.cx;
                  Cv.y = current.cy;
                }

                ldir = current.dir;
              } while (current.cx !== sx || current.cy !== sy);

              Fv.prev = Cv.prev;
              Cv.prev.next = Fv;
            }

            return Fv;
          }

          return {
            trace: function trace(current, color, label, edgelabel) {
              return _trace(current, color, label, edgelabel);
            },
            contourTracing: function contourTracing(sy, sx, label, color, edgelabel) {
              return _contourTracing(sy, sx, label, color, edgelabel);
            }
          };
        }
      };
/* harmony default export */ __webpack_exports__["a"] = (Tracer);

      /***/
    }),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

      var Symbol = __webpack_require__(32),
        getRawTag = __webpack_require__(192),
        objectToString = __webpack_require__(193);
      /** `Object#toString` result references. */


      var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';
      /** Built-in value references. */

      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */

      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }

        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }

      module.exports = baseGetTag;

      /***/
    }),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

        /* eslint-disable no-proto */


        var base64 = __webpack_require__(277);

        var ieee754 = __webpack_require__(278);

        var isArray = __webpack_require__(279);

        exports.Buffer = Buffer;
        exports.SlowBuffer = SlowBuffer;
        exports.INSPECT_MAX_BYTES = 50;
        /**
         * If `Buffer.TYPED_ARRAY_SUPPORT`:
         *   === true    Use Uint8Array implementation (fastest)
         *   === false   Use Object implementation (most compatible, even IE6)
         *
         * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
         * Opera 11.6+, iOS 4.2+.
         *
         * Due to various browser bugs, sometimes the Object implementation will be used even
         * when the browser supports typed arrays.
         *
         * Note:
         *
         *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
         *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
         *
         *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
         *
         *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
         *     incorrect length in some situations.
        
         * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
         * get the Object implementation, which is slower but behaves correctly.
         */

        Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
        /*
         * Export kMaxLength after typed array support is determined.
         */

        exports.kMaxLength = kMaxLength();

        function typedArraySupport() {
          try {
            var arr = new Uint8Array(1);
            arr.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              }
            };
            return arr.foo() === 42 && // typed array instances can be augmented
              typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
              arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
          } catch (e) {
            return false;
          }
        }

        function kMaxLength() {
          return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
        }

        function createBuffer(that, length) {
          if (kMaxLength() < length) {
            throw new RangeError('Invalid typed array length');
          }

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = new Uint8Array(length);
            that.__proto__ = Buffer.prototype;
          } else {
            // Fallback: Return an object instance of the Buffer class
            if (that === null) {
              that = new Buffer(length);
            }

            that.length = length;
          }

          return that;
        }
        /**
         * The Buffer constructor returns instances of `Uint8Array` that have their
         * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
         * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
         * and the `Uint8Array` methods. Square bracket notation works as expected -- it
         * returns a single octet.
         *
         * The `Uint8Array` prototype remains unmodified.
         */


        function Buffer(arg, encodingOrOffset, length) {
          if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
            return new Buffer(arg, encodingOrOffset, length);
          } // Common case.


          if (typeof arg === 'number') {
            if (typeof encodingOrOffset === 'string') {
              throw new Error('If encoding is specified then the first argument must be a string');
            }

            return allocUnsafe(this, arg);
          }

          return from(this, arg, encodingOrOffset, length);
        }

        Buffer.poolSize = 8192; // not used by this implementation
        // TODO: Legacy, not needed anymore. Remove in next major version.

        Buffer._augment = function (arr) {
          arr.__proto__ = Buffer.prototype;
          return arr;
        };

        function from(that, value, encodingOrOffset, length) {
          if (typeof value === 'number') {
            throw new TypeError('"value" argument must not be a number');
          }

          if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
            return fromArrayBuffer(that, value, encodingOrOffset, length);
          }

          if (typeof value === 'string') {
            return fromString(that, value, encodingOrOffset);
          }

          return fromObject(that, value);
        }
        /**
         * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
         * if value is a number.
         * Buffer.from(str[, encoding])
         * Buffer.from(array)
         * Buffer.from(buffer)
         * Buffer.from(arrayBuffer[, byteOffset[, length]])
         **/


        Buffer.from = function (value, encodingOrOffset, length) {
          return from(null, value, encodingOrOffset, length);
        };

        if (Buffer.TYPED_ARRAY_SUPPORT) {
          Buffer.prototype.__proto__ = Uint8Array.prototype;
          Buffer.__proto__ = Uint8Array;

          if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
            // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
            Object.defineProperty(Buffer, Symbol.species, {
              value: null,
              configurable: true
            });
          }
        }

        function assertSize(size) {
          if (typeof size !== 'number') {
            throw new TypeError('"size" argument must be a number');
          } else if (size < 0) {
            throw new RangeError('"size" argument must not be negative');
          }
        }

        function alloc(that, size, fill, encoding) {
          assertSize(size);

          if (size <= 0) {
            return createBuffer(that, size);
          }

          if (fill !== undefined) {
            // Only pay attention to encoding if it's a string. This
            // prevents accidentally sending in a number that would
            // be interpretted as a start offset.
            return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
          }

          return createBuffer(that, size);
        }
        /**
         * Creates a new filled Buffer instance.
         * alloc(size[, fill[, encoding]])
         **/


        Buffer.alloc = function (size, fill, encoding) {
          return alloc(null, size, fill, encoding);
        };

        function allocUnsafe(that, size) {
          assertSize(size);
          that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

          if (!Buffer.TYPED_ARRAY_SUPPORT) {
            for (var i = 0; i < size; ++i) {
              that[i] = 0;
            }
          }

          return that;
        }
        /**
         * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
         * */


        Buffer.allocUnsafe = function (size) {
          return allocUnsafe(null, size);
        };
        /**
         * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
         */


        Buffer.allocUnsafeSlow = function (size) {
          return allocUnsafe(null, size);
        };

        function fromString(that, string, encoding) {
          if (typeof encoding !== 'string' || encoding === '') {
            encoding = 'utf8';
          }

          if (!Buffer.isEncoding(encoding)) {
            throw new TypeError('"encoding" must be a valid string encoding');
          }

          var length = byteLength(string, encoding) | 0;
          that = createBuffer(that, length);
          var actual = that.write(string, encoding);

          if (actual !== length) {
            // Writing a hex string, for example, that contains invalid characters will
            // cause everything after the first invalid character to be ignored. (e.g.
            // 'abxxcd' will be treated as 'ab')
            that = that.slice(0, actual);
          }

          return that;
        }

        function fromArrayLike(that, array) {
          var length = array.length < 0 ? 0 : checked(array.length) | 0;
          that = createBuffer(that, length);

          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }

          return that;
        }

        function fromArrayBuffer(that, array, byteOffset, length) {
          array.byteLength; // this throws if `array` is not a valid ArrayBuffer

          if (byteOffset < 0 || array.byteLength < byteOffset) {
            throw new RangeError('\'offset\' is out of bounds');
          }

          if (array.byteLength < byteOffset + (length || 0)) {
            throw new RangeError('\'length\' is out of bounds');
          }

          if (byteOffset === undefined && length === undefined) {
            array = new Uint8Array(array);
          } else if (length === undefined) {
            array = new Uint8Array(array, byteOffset);
          } else {
            array = new Uint8Array(array, byteOffset, length);
          }

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = array;
            that.__proto__ = Buffer.prototype;
          } else {
            // Fallback: Return an object instance of the Buffer class
            that = fromArrayLike(that, array);
          }

          return that;
        }

        function fromObject(that, obj) {
          if (Buffer.isBuffer(obj)) {
            var len = checked(obj.length) | 0;
            that = createBuffer(that, len);

            if (that.length === 0) {
              return that;
            }

            obj.copy(that, 0, 0, len);
            return that;
          }

          if (obj) {
            if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
              if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
              }

              return fromArrayLike(that, obj);
            }

            if (obj.type === 'Buffer' && isArray(obj.data)) {
              return fromArrayLike(that, obj.data);
            }
          }

          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        }

        function checked(length) {
          // Note: cannot use `length < kMaxLength()` here because that fails when
          // length is NaN (which is otherwise coerced to zero.)
          if (length >= kMaxLength()) {
            throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
          }

          return length | 0;
        }

        function SlowBuffer(length) {
          if (+length != length) {
            // eslint-disable-line eqeqeq
            length = 0;
          }

          return Buffer.alloc(+length);
        }

        Buffer.isBuffer = function isBuffer(b) {
          return !!(b != null && b._isBuffer);
        };

        Buffer.compare = function compare(a, b) {
          if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
            throw new TypeError('Arguments must be Buffers');
          }

          if (a === b) return 0;
          var x = a.length;
          var y = b.length;

          for (var i = 0, len = Math.min(x, y); i < len; ++i) {
            if (a[i] !== b[i]) {
              x = a[i];
              y = b[i];
              break;
            }
          }

          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };

        Buffer.isEncoding = function isEncoding(encoding) {
          switch (String(encoding).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return true;

            default:
              return false;
          }
        };

        Buffer.concat = function concat(list, length) {
          if (!isArray(list)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }

          if (list.length === 0) {
            return Buffer.alloc(0);
          }

          var i;

          if (length === undefined) {
            length = 0;

            for (i = 0; i < list.length; ++i) {
              length += list[i].length;
            }
          }

          var buffer = Buffer.allocUnsafe(length);
          var pos = 0;

          for (i = 0; i < list.length; ++i) {
            var buf = list[i];

            if (!Buffer.isBuffer(buf)) {
              throw new TypeError('"list" argument must be an Array of Buffers');
            }

            buf.copy(buffer, pos);
            pos += buf.length;
          }

          return buffer;
        };

        function byteLength(string, encoding) {
          if (Buffer.isBuffer(string)) {
            return string.length;
          }

          if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
            return string.byteLength;
          }

          if (typeof string !== 'string') {
            string = '' + string;
          }

          var len = string.length;
          if (len === 0) return 0; // Use a for loop to avoid recursion

          var loweredCase = false;

          for (; ;) {
            switch (encoding) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return len;

              case 'utf8':
              case 'utf-8':
              case undefined:
                return utf8ToBytes(string).length;

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return len * 2;

              case 'hex':
                return len >>> 1;

              case 'base64':
                return base64ToBytes(string).length;

              default:
                if (loweredCase) return utf8ToBytes(string).length; // assume utf8

                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        }

        Buffer.byteLength = byteLength;

        function slowToString(encoding, start, end) {
          var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
          // property of a typed array.
          // This behaves neither like String nor Uint8Array in that we set start/end
          // to their upper/lower bounds if the value passed is out of range.
          // undefined is handled specially as per ECMA-262 6th Edition,
          // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

          if (start === undefined || start < 0) {
            start = 0;
          } // Return early if start > this.length. Done here to prevent potential uint32
          // coercion fail below.


          if (start > this.length) {
            return '';
          }

          if (end === undefined || end > this.length) {
            end = this.length;
          }

          if (end <= 0) {
            return '';
          } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


          end >>>= 0;
          start >>>= 0;

          if (end <= start) {
            return '';
          }

          if (!encoding) encoding = 'utf8';

          while (true) {
            switch (encoding) {
              case 'hex':
                return hexSlice(this, start, end);

              case 'utf8':
              case 'utf-8':
                return utf8Slice(this, start, end);

              case 'ascii':
                return asciiSlice(this, start, end);

              case 'latin1':
              case 'binary':
                return latin1Slice(this, start, end);

              case 'base64':
                return base64Slice(this, start, end);

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return utf16leSlice(this, start, end);

              default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
            }
          }
        } // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
        // Buffer instances.


        Buffer.prototype._isBuffer = true;

        function swap(b, n, m) {
          var i = b[n];
          b[n] = b[m];
          b[m] = i;
        }

        Buffer.prototype.swap16 = function swap16() {
          var len = this.length;

          if (len % 2 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          }

          for (var i = 0; i < len; i += 2) {
            swap(this, i, i + 1);
          }

          return this;
        };

        Buffer.prototype.swap32 = function swap32() {
          var len = this.length;

          if (len % 4 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          }

          for (var i = 0; i < len; i += 4) {
            swap(this, i, i + 3);
            swap(this, i + 1, i + 2);
          }

          return this;
        };

        Buffer.prototype.swap64 = function swap64() {
          var len = this.length;

          if (len % 8 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          }

          for (var i = 0; i < len; i += 8) {
            swap(this, i, i + 7);
            swap(this, i + 1, i + 6);
            swap(this, i + 2, i + 5);
            swap(this, i + 3, i + 4);
          }

          return this;
        };

        Buffer.prototype.toString = function toString() {
          var length = this.length | 0;
          if (length === 0) return '';
          if (arguments.length === 0) return utf8Slice(this, 0, length);
          return slowToString.apply(this, arguments);
        };

        Buffer.prototype.equals = function equals(b) {
          if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
          if (this === b) return true;
          return Buffer.compare(this, b) === 0;
        };

        Buffer.prototype.inspect = function inspect() {
          var str = '';
          var max = exports.INSPECT_MAX_BYTES;

          if (this.length > 0) {
            str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
            if (this.length > max) str += ' ... ';
          }

          return '<Buffer ' + str + '>';
        };

        Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
          if (!Buffer.isBuffer(target)) {
            throw new TypeError('Argument must be a Buffer');
          }

          if (start === undefined) {
            start = 0;
          }

          if (end === undefined) {
            end = target ? target.length : 0;
          }

          if (thisStart === undefined) {
            thisStart = 0;
          }

          if (thisEnd === undefined) {
            thisEnd = this.length;
          }

          if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
            throw new RangeError('out of range index');
          }

          if (thisStart >= thisEnd && start >= end) {
            return 0;
          }

          if (thisStart >= thisEnd) {
            return -1;
          }

          if (start >= end) {
            return 1;
          }

          start >>>= 0;
          end >>>= 0;
          thisStart >>>= 0;
          thisEnd >>>= 0;
          if (this === target) return 0;
          var x = thisEnd - thisStart;
          var y = end - start;
          var len = Math.min(x, y);
          var thisCopy = this.slice(thisStart, thisEnd);
          var targetCopy = target.slice(start, end);

          for (var i = 0; i < len; ++i) {
            if (thisCopy[i] !== targetCopy[i]) {
              x = thisCopy[i];
              y = targetCopy[i];
              break;
            }
          }

          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
        // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
        //
        // Arguments:
        // - buffer - a Buffer to search
        // - val - a string, Buffer, or number
        // - byteOffset - an index into `buffer`; will be clamped to an int32
        // - encoding - an optional encoding, relevant is val is a string
        // - dir - true for indexOf, false for lastIndexOf


        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
          // Empty buffer means no match
          if (buffer.length === 0) return -1; // Normalize byteOffset

          if (typeof byteOffset === 'string') {
            encoding = byteOffset;
            byteOffset = 0;
          } else if (byteOffset > 0x7fffffff) {
            byteOffset = 0x7fffffff;
          } else if (byteOffset < -0x80000000) {
            byteOffset = -0x80000000;
          }

          byteOffset = +byteOffset; // Coerce to Number.

          if (isNaN(byteOffset)) {
            // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
            byteOffset = dir ? 0 : buffer.length - 1;
          } // Normalize byteOffset: negative offsets start from the end of the buffer


          if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

          if (byteOffset >= buffer.length) {
            if (dir) return -1; else byteOffset = buffer.length - 1;
          } else if (byteOffset < 0) {
            if (dir) byteOffset = 0; else return -1;
          } // Normalize val


          if (typeof val === 'string') {
            val = Buffer.from(val, encoding);
          } // Finally, search either indexOf (if dir is true) or lastIndexOf


          if (Buffer.isBuffer(val)) {
            // Special case: looking for empty string/buffer always fails
            if (val.length === 0) {
              return -1;
            }

            return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
          } else if (typeof val === 'number') {
            val = val & 0xFF; // Search for a byte value [0-255]

            if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
              if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
              } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
              }
            }

            return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
          }

          throw new TypeError('val must be string, number or Buffer');
        }

        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
          var indexSize = 1;
          var arrLength = arr.length;
          var valLength = val.length;

          if (encoding !== undefined) {
            encoding = String(encoding).toLowerCase();

            if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
              if (arr.length < 2 || val.length < 2) {
                return -1;
              }

              indexSize = 2;
              arrLength /= 2;
              valLength /= 2;
              byteOffset /= 2;
            }
          }

          function read(buf, i) {
            if (indexSize === 1) {
              return buf[i];
            } else {
              return buf.readUInt16BE(i * indexSize);
            }
          }

          var i;

          if (dir) {
            var foundIndex = -1;

            for (i = byteOffset; i < arrLength; i++) {
              if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
              } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
              }
            }
          } else {
            if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

            for (i = byteOffset; i >= 0; i--) {
              var found = true;

              for (var j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                  found = false;
                  break;
                }
              }

              if (found) return i;
            }
          }

          return -1;
        }

        Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
          return this.indexOf(val, byteOffset, encoding) !== -1;
        };

        Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
        };

        Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
        };

        function hexWrite(buf, string, offset, length) {
          offset = Number(offset) || 0;
          var remaining = buf.length - offset;

          if (!length) {
            length = remaining;
          } else {
            length = Number(length);

            if (length > remaining) {
              length = remaining;
            }
          } // must be an even number of digits


          var strLen = string.length;
          if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

          if (length > strLen / 2) {
            length = strLen / 2;
          }

          for (var i = 0; i < length; ++i) {
            var parsed = parseInt(string.substr(i * 2, 2), 16);
            if (isNaN(parsed)) return i;
            buf[offset + i] = parsed;
          }

          return i;
        }

        function utf8Write(buf, string, offset, length) {
          return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }

        function asciiWrite(buf, string, offset, length) {
          return blitBuffer(asciiToBytes(string), buf, offset, length);
        }

        function latin1Write(buf, string, offset, length) {
          return asciiWrite(buf, string, offset, length);
        }

        function base64Write(buf, string, offset, length) {
          return blitBuffer(base64ToBytes(string), buf, offset, length);
        }

        function ucs2Write(buf, string, offset, length) {
          return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
        }

        Buffer.prototype.write = function write(string, offset, length, encoding) {
          // Buffer#write(string)
          if (offset === undefined) {
            encoding = 'utf8';
            length = this.length;
            offset = 0; // Buffer#write(string, encoding)
          } else if (length === undefined && typeof offset === 'string') {
            encoding = offset;
            length = this.length;
            offset = 0; // Buffer#write(string, offset[, length][, encoding])
          } else if (isFinite(offset)) {
            offset = offset | 0;

            if (isFinite(length)) {
              length = length | 0;
              if (encoding === undefined) encoding = 'utf8';
            } else {
              encoding = length;
              length = undefined;
            } // legacy write(string, encoding, offset, length) - remove in v0.13

          } else {
            throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          }

          var remaining = this.length - offset;
          if (length === undefined || length > remaining) length = remaining;

          if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
            throw new RangeError('Attempt to write outside buffer bounds');
          }

          if (!encoding) encoding = 'utf8';
          var loweredCase = false;

          for (; ;) {
            switch (encoding) {
              case 'hex':
                return hexWrite(this, string, offset, length);

              case 'utf8':
              case 'utf-8':
                return utf8Write(this, string, offset, length);

              case 'ascii':
                return asciiWrite(this, string, offset, length);

              case 'latin1':
              case 'binary':
                return latin1Write(this, string, offset, length);

              case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, string, offset, length);

              default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        };

        Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };

        function base64Slice(buf, start, end) {
          if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
          } else {
            return base64.fromByteArray(buf.slice(start, end));
          }
        }

        function utf8Slice(buf, start, end) {
          end = Math.min(buf.length, end);
          var res = [];
          var i = start;

          while (i < end) {
            var firstByte = buf[i];
            var codePoint = null;
            var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

            if (i + bytesPerSequence <= end) {
              var secondByte, thirdByte, fourthByte, tempCodePoint;

              switch (bytesPerSequence) {
                case 1:
                  if (firstByte < 0x80) {
                    codePoint = firstByte;
                  }

                  break;

                case 2:
                  secondByte = buf[i + 1];

                  if ((secondByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

                    if (tempCodePoint > 0x7F) {
                      codePoint = tempCodePoint;
                    }
                  }

                  break;

                case 3:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];

                  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

                    if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                      codePoint = tempCodePoint;
                    }
                  }

                  break;

                case 4:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  fourthByte = buf[i + 3];

                  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

                    if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                      codePoint = tempCodePoint;
                    }
                  }

              }
            }

            if (codePoint === null) {
              // we did not generate a valid codePoint so insert a
              // replacement char (U+FFFD) and advance only 1 byte
              codePoint = 0xFFFD;
              bytesPerSequence = 1;
            } else if (codePoint > 0xFFFF) {
              // encode to utf16 (surrogate pair dance)
              codePoint -= 0x10000;
              res.push(codePoint >>> 10 & 0x3FF | 0xD800);
              codePoint = 0xDC00 | codePoint & 0x3FF;
            }

            res.push(codePoint);
            i += bytesPerSequence;
          }

          return decodeCodePointsArray(res);
        } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety


        var MAX_ARGUMENTS_LENGTH = 0x1000;

        function decodeCodePointsArray(codePoints) {
          var len = codePoints.length;

          if (len <= MAX_ARGUMENTS_LENGTH) {
            return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
          } // Decode in chunks to avoid "call stack size exceeded".


          var res = '';
          var i = 0;

          while (i < len) {
            res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
          }

          return res;
        }

        function asciiSlice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);

          for (var i = start; i < end; ++i) {
            ret += String.fromCharCode(buf[i] & 0x7F);
          }

          return ret;
        }

        function latin1Slice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);

          for (var i = start; i < end; ++i) {
            ret += String.fromCharCode(buf[i]);
          }

          return ret;
        }

        function hexSlice(buf, start, end) {
          var len = buf.length;
          if (!start || start < 0) start = 0;
          if (!end || end < 0 || end > len) end = len;
          var out = '';

          for (var i = start; i < end; ++i) {
            out += toHex(buf[i]);
          }

          return out;
        }

        function utf16leSlice(buf, start, end) {
          var bytes = buf.slice(start, end);
          var res = '';

          for (var i = 0; i < bytes.length; i += 2) {
            res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
          }

          return res;
        }

        Buffer.prototype.slice = function slice(start, end) {
          var len = this.length;
          start = ~~start;
          end = end === undefined ? len : ~~end;

          if (start < 0) {
            start += len;
            if (start < 0) start = 0;
          } else if (start > len) {
            start = len;
          }

          if (end < 0) {
            end += len;
            if (end < 0) end = 0;
          } else if (end > len) {
            end = len;
          }

          if (end < start) end = start;
          var newBuf;

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            newBuf = this.subarray(start, end);
            newBuf.__proto__ = Buffer.prototype;
          } else {
            var sliceLen = end - start;
            newBuf = new Buffer(sliceLen, undefined);

            for (var i = 0; i < sliceLen; ++i) {
              newBuf[i] = this[i + start];
            }
          }

          return newBuf;
        };
        /*
         * Need to make sure that buffer isn't trying to write out of bounds.
         */


        function checkOffset(offset, ext, length) {
          if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
          if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
        }

        Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);
          var val = this[offset];
          var mul = 1;
          var i = 0;

          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }

          return val;
        };

        Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;

          if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
          }

          var val = this[offset + --byteLength];
          var mul = 1;

          while (byteLength > 0 && (mul *= 0x100)) {
            val += this[offset + --byteLength] * mul;
          }

          return val;
        };

        Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 1, this.length);
          return this[offset];
        };

        Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] | this[offset + 1] << 8;
        };

        Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] << 8 | this[offset + 1];
        };

        Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
        };

        Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        };

        Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);
          var val = this[offset];
          var mul = 1;
          var i = 0;

          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }

          mul *= 0x80;
          if (val >= mul) val -= Math.pow(2, 8 * byteLength);
          return val;
        };

        Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);
          var i = byteLength;
          var mul = 1;
          var val = this[offset + --i];

          while (i > 0 && (mul *= 0x100)) {
            val += this[offset + --i] * mul;
          }

          mul *= 0x80;
          if (val >= mul) val -= Math.pow(2, 8 * byteLength);
          return val;
        };

        Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 1, this.length);
          if (!(this[offset] & 0x80)) return this[offset];
          return (0xff - this[offset] + 1) * -1;
        };

        Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          var val = this[offset] | this[offset + 1] << 8;
          return val & 0x8000 ? val | 0xFFFF0000 : val;
        };

        Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          var val = this[offset + 1] | this[offset] << 8;
          return val & 0x8000 ? val | 0xFFFF0000 : val;
        };

        Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        };

        Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        };

        Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, true, 23, 4);
        };

        Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, false, 23, 4);
        };

        Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, true, 52, 8);
        };

        Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, false, 52, 8);
        };

        function checkInt(buf, value, offset, ext, max, min) {
          if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
          if (offset + ext > buf.length) throw new RangeError('Index out of range');
        }

        Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;

          if (!noAssert) {
            var maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
          }

          var mul = 1;
          var i = 0;
          this[offset] = value & 0xFF;

          while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = value / mul & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;

          if (!noAssert) {
            var maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
          }

          var i = byteLength - 1;
          var mul = 1;
          this[offset + i] = value & 0xFF;

          while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = value / mul & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
          this[offset] = value & 0xff;
          return offset + 1;
        };

        function objectWriteUInt16(buf, value, offset, littleEndian) {
          if (value < 0) value = 0xffff + value + 1;

          for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
            buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
          }
        }

        Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
          } else {
            objectWriteUInt16(this, value, offset, true);
          }

          return offset + 2;
        };

        Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }

          return offset + 2;
        };

        function objectWriteUInt32(buf, value, offset, littleEndian) {
          if (value < 0) value = 0xffffffff + value + 1;

          for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
            buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
          }
        }

        Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset + 3] = value >>> 24;
            this[offset + 2] = value >>> 16;
            this[offset + 1] = value >>> 8;
            this[offset] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }

          return offset + 4;
        };

        Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }

          return offset + 4;
        };

        Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;

          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }

          var i = 0;
          var mul = 1;
          var sub = 0;
          this[offset] = value & 0xFF;

          while (++i < byteLength && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
              sub = 1;
            }

            this[offset + i] = (value / mul >> 0) - sub & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;

          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }

          var i = byteLength - 1;
          var mul = 1;
          var sub = 0;
          this[offset + i] = value & 0xFF;

          while (--i >= 0 && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
              sub = 1;
            }

            this[offset + i] = (value / mul >> 0) - sub & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
          if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
          if (value < 0) value = 0xff + value + 1;
          this[offset] = value & 0xff;
          return offset + 1;
        };

        Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
          } else {
            objectWriteUInt16(this, value, offset, true);
          }

          return offset + 2;
        };

        Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }

          return offset + 2;
        };

        Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
            this[offset + 2] = value >>> 16;
            this[offset + 3] = value >>> 24;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }

          return offset + 4;
        };

        Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (value < 0) value = 0xffffffff + value + 1;

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }

          return offset + 4;
        };

        function checkIEEE754(buf, value, offset, ext, max, min) {
          if (offset + ext > buf.length) throw new RangeError('Index out of range');
          if (offset < 0) throw new RangeError('Index out of range');
        }

        function writeFloat(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
          }

          ieee754.write(buf, value, offset, littleEndian, 23, 4);
          return offset + 4;
        }

        Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
          return writeFloat(this, value, offset, true, noAssert);
        };

        Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
          return writeFloat(this, value, offset, false, noAssert);
        };

        function writeDouble(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
          }

          ieee754.write(buf, value, offset, littleEndian, 52, 8);
          return offset + 8;
        }

        Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
          return writeDouble(this, value, offset, true, noAssert);
        };

        Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
          return writeDouble(this, value, offset, false, noAssert);
        }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


        Buffer.prototype.copy = function copy(target, targetStart, start, end) {
          if (!start) start = 0;
          if (!end && end !== 0) end = this.length;
          if (targetStart >= target.length) targetStart = target.length;
          if (!targetStart) targetStart = 0;
          if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

          if (end === start) return 0;
          if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

          if (targetStart < 0) {
            throw new RangeError('targetStart out of bounds');
          }

          if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
          if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

          if (end > this.length) end = this.length;

          if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
          }

          var len = end - start;
          var i;

          if (this === target && start < targetStart && targetStart < end) {
            // descending copy from end
            for (i = len - 1; i >= 0; --i) {
              target[i + targetStart] = this[i + start];
            }
          } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
            // ascending copy from start
            for (i = 0; i < len; ++i) {
              target[i + targetStart] = this[i + start];
            }
          } else {
            Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
          }

          return len;
        }; // Usage:
        //    buffer.fill(number[, offset[, end]])
        //    buffer.fill(buffer[, offset[, end]])
        //    buffer.fill(string[, offset[, end]][, encoding])


        Buffer.prototype.fill = function fill(val, start, end, encoding) {
          // Handle string cases:
          if (typeof val === 'string') {
            if (typeof start === 'string') {
              encoding = start;
              start = 0;
              end = this.length;
            } else if (typeof end === 'string') {
              encoding = end;
              end = this.length;
            }

            if (val.length === 1) {
              var code = val.charCodeAt(0);

              if (code < 256) {
                val = code;
              }
            }

            if (encoding !== undefined && typeof encoding !== 'string') {
              throw new TypeError('encoding must be a string');
            }

            if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
              throw new TypeError('Unknown encoding: ' + encoding);
            }
          } else if (typeof val === 'number') {
            val = val & 255;
          } // Invalid ranges are not set to a default, so can range check early.


          if (start < 0 || this.length < start || this.length < end) {
            throw new RangeError('Out of range index');
          }

          if (end <= start) {
            return this;
          }

          start = start >>> 0;
          end = end === undefined ? this.length : end >>> 0;
          if (!val) val = 0;
          var i;

          if (typeof val === 'number') {
            for (i = start; i < end; ++i) {
              this[i] = val;
            }
          } else {
            var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
            var len = bytes.length;

            for (i = 0; i < end - start; ++i) {
              this[i + start] = bytes[i % len];
            }
          }

          return this;
        }; // HELPER FUNCTIONS
        // ================


        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

        function base64clean(str) {
          // Node strips out invalid characters like \n and \t from the string, base64-js does not
          str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

          if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

          while (str.length % 4 !== 0) {
            str = str + '=';
          }

          return str;
        }

        function stringtrim(str) {
          if (str.trim) return str.trim();
          return str.replace(/^\s+|\s+$/g, '');
        }

        function toHex(n) {
          if (n < 16) return '0' + n.toString(16);
          return n.toString(16);
        }

        function utf8ToBytes(string, units) {
          units = units || Infinity;
          var codePoint;
          var length = string.length;
          var leadSurrogate = null;
          var bytes = [];

          for (var i = 0; i < length; ++i) {
            codePoint = string.charCodeAt(i); // is surrogate component

            if (codePoint > 0xD7FF && codePoint < 0xE000) {
              // last char was a lead
              if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                  // unexpected trail
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                } else if (i + 1 === length) {
                  // unpaired lead
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                } // valid lead


                leadSurrogate = codePoint;
                continue;
              } // 2 leads in a row


              if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
              } // valid surrogate pair


              codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
            } else if (leadSurrogate) {
              // valid bmp char, but last char was a lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            }

            leadSurrogate = null; // encode utf8

            if (codePoint < 0x80) {
              if ((units -= 1) < 0) break;
              bytes.push(codePoint);
            } else if (codePoint < 0x800) {
              if ((units -= 2) < 0) break;
              bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x10000) {
              if ((units -= 3) < 0) break;
              bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x110000) {
              if ((units -= 4) < 0) break;
              bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else {
              throw new Error('Invalid code point');
            }
          }

          return bytes;
        }

        function asciiToBytes(str) {
          var byteArray = [];

          for (var i = 0; i < str.length; ++i) {
            // Node's code seems to be doing this and not & 0x7F..
            byteArray.push(str.charCodeAt(i) & 0xFF);
          }

          return byteArray;
        }

        function utf16leToBytes(str, units) {
          var c, hi, lo;
          var byteArray = [];

          for (var i = 0; i < str.length; ++i) {
            if ((units -= 2) < 0) break;
            c = str.charCodeAt(i);
            hi = c >> 8;
            lo = c % 256;
            byteArray.push(lo);
            byteArray.push(hi);
          }

          return byteArray;
        }

        function base64ToBytes(str) {
          return base64.toByteArray(base64clean(str));
        }

        function blitBuffer(src, dst, offset, length) {
          for (var i = 0; i < length; ++i) {
            if (i + offset >= dst.length || i >= src.length) break;
            dst[i + offset] = src[i];
          }

          return i;
        }

        function isnan(val) {
          return val !== val; // eslint-disable-line no-self-compare
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12)))

      /***/
    }),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (Buffer) {// Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.
        function isArray(arg) {
          if (Array.isArray) {
            return Array.isArray(arg);
          }

          return objectToString(arg) === '[object Array]';
        }

        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }

        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }

        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }

        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }

        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }

        exports.isString = isString;

        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }

        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }

        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return objectToString(re) === '[object RegExp]';
        }

        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }

        exports.isObject = isObject;

        function isDate(d) {
          return objectToString(d) === '[object Date]';
        }

        exports.isDate = isDate;

        function isError(e) {
          return objectToString(e) === '[object Error]' || e instanceof Error;
        }

        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }

        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
            typeof arg === 'undefined';
        }

        exports.isPrimitive = isPrimitive;
        exports.isBuffer = Buffer.isBuffer;

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(26).Buffer))

      /***/
    }),
/* 28 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (global) {/* harmony import */ var gl_vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var gl_vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gl_mat2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var gl_mat2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gl_mat2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _common_cv_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _common_array_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _rasterizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(102);
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var _skeletonizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(103);










        var _config;

        var _currentImageWrapper;

        var _skelImageWrapper;

        var _subImageWrapper;

        var _labelImageWrapper;

        var _patchGrid;

        var _patchLabelGrid;

        var _imageToPatchGrid;

        var _binaryImageWrapper;

        var _patchSize;

        var _canvasContainer = {
          ctx: {
            binary: null
          },
          dom: {
            binary: null
          }
        };
        var _numPatches = {
          x: 0,
          y: 0
        };

        var _inputImageWrapper;

        var _skeletonizer;

        function initBuffers() {
          if (_config.halfSample) {
            _currentImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
              // eslint-disable-next-line no-bitwise
              x: _inputImageWrapper.size.x / 2 | 0,
              // eslint-disable-next-line no-bitwise
              y: _inputImageWrapper.size.y / 2 | 0
            });
          } else {
            _currentImageWrapper = _inputImageWrapper;
          }

          _patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["calculatePatchSize"])(_config.patchSize, _currentImageWrapper.size); // eslint-disable-next-line no-bitwise

          _numPatches.x = _currentImageWrapper.size.x / _patchSize.x | 0; // eslint-disable-next-line no-bitwise

          _numPatches.y = _currentImageWrapper.size.y / _patchSize.y | 0;
          _binaryImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_currentImageWrapper.size, undefined, Uint8Array, false);
          _labelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_patchSize, undefined, Array, true);
          var skeletonImageData = new ArrayBuffer(64 * 1024);
          _subImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_patchSize, new Uint8Array(skeletonImageData, 0, _patchSize.x * _patchSize.y));
          _skelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_patchSize, new Uint8Array(skeletonImageData, _patchSize.x * _patchSize.y * 3, _patchSize.x * _patchSize.y), undefined, true);
          _skeletonizer = Object(_skeletonizer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : global, {
            size: _patchSize.x
          }, skeletonImageData);
          _imageToPatchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
            // eslint-disable-next-line no-bitwise
            x: _currentImageWrapper.size.x / _subImageWrapper.size.x | 0,
            // eslint-disable-next-line no-bitwise
            y: _currentImageWrapper.size.y / _subImageWrapper.size.y | 0
          }, undefined, Array, true);
          _patchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_imageToPatchGrid.size, undefined, undefined, true);
          _patchLabelGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_imageToPatchGrid.size, undefined, Int32Array, true);
        }

        function initCanvas() {
          if (_config.useWorker || typeof document === 'undefined') {
            return;
          }

          _canvasContainer.dom.binary = document.createElement('canvas');
          _canvasContainer.dom.binary.className = 'binaryBuffer';

          if (true && _config.debug.showCanvas === true) {
            document.querySelector('#debug').appendChild(_canvasContainer.dom.binary);
          }

          _canvasContainer.ctx.binary = _canvasContainer.dom.binary.getContext('2d');
          _canvasContainer.dom.binary.width = _binaryImageWrapper.size.x;
          _canvasContainer.dom.binary.height = _binaryImageWrapper.size.y;
        }
        /**
         * Creates a bounding box which encloses all the given patches
         * @returns {Array} The minimal bounding box
         */


        function boxFromPatches(patches) {
          var overAvg;
          var i;
          var j;
          var patch;
          var transMat;
          var minx = _binaryImageWrapper.size.x;
          var miny = _binaryImageWrapper.size.y;
          var maxx = -_binaryImageWrapper.size.x;
          var maxy = -_binaryImageWrapper.size.y;
          var box;
          var scale; // draw all patches which are to be taken into consideration

          overAvg = 0;

          for (i = 0; i < patches.length; i++) {
            patch = patches[i];
            overAvg += patch.rad;

            if (true && _config.debug.showPatches) {
              _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
                color: 'red'
              });
            }
          }

          overAvg /= patches.length;
          overAvg = (overAvg * 180 / Math.PI + 90) % 180 - 90;

          if (overAvg < 0) {
            overAvg += 180;
          }

          overAvg = (180 - overAvg) * Math.PI / 180;
          transMat = gl_mat2__WEBPACK_IMPORTED_MODULE_1__["copy"](gl_mat2__WEBPACK_IMPORTED_MODULE_1__["create"](), [Math.cos(overAvg), Math.sin(overAvg), -Math.sin(overAvg), Math.cos(overAvg)]); // iterate over patches and rotate by angle

          for (i = 0; i < patches.length; i++) {
            patch = patches[i];

            for (j = 0; j < 4; j++) {
              gl_vec2__WEBPACK_IMPORTED_MODULE_0__["transformMat2"](patch.box[j], patch.box[j], transMat);
            }

            if (true && _config.debug.boxFromPatches.showTransformed) {
              _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawPath(patch.box, {
                x: 0,
                y: 1
              }, _canvasContainer.ctx.binary, {
                color: '#99ff00',
                lineWidth: 2
              });
            }
          } // find bounding box


          for (i = 0; i < patches.length; i++) {
            patch = patches[i];

            for (j = 0; j < 4; j++) {
              if (patch.box[j][0] < minx) {
                minx = patch.box[j][0];
              }

              if (patch.box[j][0] > maxx) {
                maxx = patch.box[j][0];
              }

              if (patch.box[j][1] < miny) {
                miny = patch.box[j][1];
              }

              if (patch.box[j][1] > maxy) {
                maxy = patch.box[j][1];
              }
            }
          }

          box = [[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]];

          if (true && _config.debug.boxFromPatches.showTransformedBox) {
            _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawPath(box, {
              x: 0,
              y: 1
            }, _canvasContainer.ctx.binary, {
              color: '#ff0000',
              lineWidth: 2
            });
          }

          scale = _config.halfSample ? 2 : 1; // reverse rotation;

          transMat = gl_mat2__WEBPACK_IMPORTED_MODULE_1__["invert"](transMat, transMat);

          for (j = 0; j < 4; j++) {
            gl_vec2__WEBPACK_IMPORTED_MODULE_0__["transformMat2"](box[j], box[j], transMat);
          }

          if (true && _config.debug.boxFromPatches.showBB) {
            _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawPath(box, {
              x: 0,
              y: 1
            }, _canvasContainer.ctx.binary, {
              color: '#ff0000',
              lineWidth: 2
            });
          }

          for (j = 0; j < 4; j++) {
            gl_vec2__WEBPACK_IMPORTED_MODULE_0__["scale"](box[j], box[j], scale);
          }

          return box;
        }
        /**
         * Creates a binary image of the current image
         */


        function binarizeImage() {
          Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["otsuThreshold"])(_currentImageWrapper, _binaryImageWrapper);

          _binaryImageWrapper.zeroBorder();

          if (true && _config.debug.showCanvas) {
            _binaryImageWrapper.show(_canvasContainer.dom.binary, 255);
          }
        }
        /**
         * Iterate over the entire image
         * extract patches
         */


        function findPatches() {
          var i;
          var j;
          var x;
          var y;
          var moments;
          var patchesFound = [];
          var rasterizer;
          var rasterResult;
          var patch;

          for (i = 0; i < _numPatches.x; i++) {
            for (j = 0; j < _numPatches.y; j++) {
              x = _subImageWrapper.size.x * i;
              y = _subImageWrapper.size.y * j; // seperate parts

              skeletonize(x, y); // Rasterize, find individual bars

              _skelImageWrapper.zeroBorder();

              _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_labelImageWrapper.data, 0);
              rasterizer = _rasterizer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].create(_skelImageWrapper, _labelImageWrapper);
              rasterResult = rasterizer.rasterize(0);

              if (true && _config.debug.showLabels) {
                _labelImageWrapper.overlay(_canvasContainer.dom.binary, Math.floor(360 / rasterResult.count), {
                  x: x,
                  y: y
                });
              } // calculate moments from the skeletonized patch


              moments = _labelImageWrapper.moments(rasterResult.count); // extract eligible patches

              patchesFound = patchesFound.concat(describePatch(moments, [i, j], x, y));
            }
          }

          if (true && _config.debug.showFoundPatches) {
            for (i = 0; i < patchesFound.length; i++) {
              patch = patchesFound[i];
              _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
                color: '#99ff00',
                lineWidth: 2
              });
            }
          }

          return patchesFound;
        }
        /**
         * Finds those connected areas which contain at least 6 patches
         * and returns them ordered DESC by the number of contained patches
         * @param {Number} maxLabel
         */


        function findBiggestConnectedAreas(maxLabel) {
          var i;
          var sum;
          var labelHist = [];
          var topLabels = [];

          for (i = 0; i < maxLabel; i++) {
            labelHist.push(0);
          }

          sum = _patchLabelGrid.data.length;

          while (sum--) {
            if (_patchLabelGrid.data[sum] > 0) {
              labelHist[_patchLabelGrid.data[sum] - 1]++;
            }
          }

          labelHist = labelHist.map(function (val, idx) {
            return {
              val: val,
              label: idx + 1
            };
          });
          labelHist.sort(function (a, b) {
            return b.val - a.val;
          }); // extract top areas with at least 6 patches present

          topLabels = labelHist.filter(function (el) {
            return el.val >= 5;
          });
          return topLabels;
        }
        /**
         *
         */


        function findBoxes(topLabels, maxLabel) {
          var i;
          var j;
          var sum;
          var patches = [];
          var patch;
          var box;
          var boxes = [];
          var hsv = [0, 1, 1];
          var rgb = [0, 0, 0];

          for (i = 0; i < topLabels.length; i++) {
            sum = _patchLabelGrid.data.length;
            patches.length = 0;

            while (sum--) {
              if (_patchLabelGrid.data[sum] === topLabels[i].label) {
                patch = _imageToPatchGrid.data[sum];
                patches.push(patch);
              }
            }

            box = boxFromPatches(patches);

            if (box) {
              boxes.push(box); // draw patch-labels if requested

              if (true && _config.debug.showRemainingPatchLabels) {
                for (j = 0; j < patches.length; j++) {
                  patch = patches[j];
                  hsv[0] = topLabels[i].label / (maxLabel + 1) * 360;
                  Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["hsv2rgb"])(hsv, rgb);
                  _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
                    color: "rgb(".concat(rgb.join(','), ")"),
                    lineWidth: 2
                  });
                }
              }
            }
          }

          return boxes;
        }
        /**
         * Find similar moments (via cluster)
         * @param {Object} moments
         */


        function similarMoments(moments) {
          var clusters = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["cluster"])(moments, 0.90);
          var topCluster = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["topGeneric"])(clusters, 1, function (e) {
            return e.getPoints().length;
          });
          var points = [];
          var result = [];

          if (topCluster.length === 1) {
            points = topCluster[0].item.getPoints();

            for (var i = 0; i < points.length; i++) {
              result.push(points[i].point);
            }
          }

          return result;
        }

        function skeletonize(x, y) {
          _binaryImageWrapper.subImageAsCopy(_subImageWrapper, Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["imageRef"])(x, y));

          _skeletonizer.skeletonize(); // Show skeleton if requested


          if (true && _config.debug.showSkeleton) {
            _skelImageWrapper.overlay(_canvasContainer.dom.binary, 360, Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["imageRef"])(x, y));
          }
        }
        /**
         * Extracts and describes those patches which seem to contain a barcode pattern
         * @param {Array} moments
         * @param {Object} patchPos,
         * @param {Number} x
         * @param {Number} y
         * @returns {Array} list of patches
         */


        function describePatch(moments, patchPos, x, y) {
          var k;
          var avg;
          var eligibleMoments = [];
          var matchingMoments;
          var patch;
          var patchesFound = [];
          var minComponentWeight = Math.ceil(_patchSize.x / 3);

          if (moments.length >= 2) {
            // only collect moments which's area covers at least minComponentWeight pixels.
            for (k = 0; k < moments.length; k++) {
              if (moments[k].m00 > minComponentWeight) {
                eligibleMoments.push(moments[k]);
              }
            } // if at least 2 moments are found which have at least minComponentWeights covered


            if (eligibleMoments.length >= 2) {
              matchingMoments = similarMoments(eligibleMoments);
              avg = 0; // determine the similarity of the moments

              for (k = 0; k < matchingMoments.length; k++) {
                avg += matchingMoments[k].rad;
              } // Only two of the moments are allowed not to fit into the equation
              // add the patch to the set


              if (matchingMoments.length > 1 && matchingMoments.length >= eligibleMoments.length / 4 * 3 && matchingMoments.length > moments.length / 4) {
                avg /= matchingMoments.length;
                patch = {
                  index: patchPos[1] * _numPatches.x + patchPos[0],
                  pos: {
                    x: x,
                    y: y
                  },
                  box: [gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x, y]), gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x + _subImageWrapper.size.x, y]), gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x + _subImageWrapper.size.x, y + _subImageWrapper.size.y]), gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([x, y + _subImageWrapper.size.y])],
                  moments: matchingMoments,
                  rad: avg,
                  vec: gl_vec2__WEBPACK_IMPORTED_MODULE_0__["clone"]([Math.cos(avg), Math.sin(avg)])
                };
                patchesFound.push(patch);
              }
            }
          }

          return patchesFound;
        }
        /**
         * finds patches which are connected and share the same orientation
         * @param {Object} patchesFound
         */


        function rasterizeAngularSimilarity(patchesFound) {
          var label = 0;
          var threshold = 0.95;
          var currIdx = 0;
          var j;
          var patch;
          var hsv = [0, 1, 1];
          var rgb = [0, 0, 0];

          function notYetProcessed() {
            var i;

            for (i = 0; i < _patchLabelGrid.data.length; i++) {
              if (_patchLabelGrid.data[i] === 0 && _patchGrid.data[i] === 1) {
                return i;
              }
            }

            return _patchLabelGrid.length;
          }

          function trace(currentIdx) {
            var x;
            var y;
            var currentPatch;
            var idx;
            var dir;
            var current = {
              x: currentIdx % _patchLabelGrid.size.x,
              y: currentIdx / _patchLabelGrid.size.x | 0
            };
            var similarity;

            if (currentIdx < _patchLabelGrid.data.length) {
              currentPatch = _imageToPatchGrid.data[currentIdx]; // assign label

              _patchLabelGrid.data[currentIdx] = label;

              for (dir = 0; dir < _tracer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].searchDirections.length; dir++) {
                y = current.y + _tracer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].searchDirections[dir][0];
                x = current.x + _tracer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].searchDirections[dir][1];
                idx = y * _patchLabelGrid.size.x + x; // continue if patch empty

                if (_patchGrid.data[idx] === 0) {
                  _patchLabelGrid.data[idx] = Number.MAX_VALUE; // eslint-disable-next-line no-continue

                  continue;
                }

                if (_patchLabelGrid.data[idx] === 0) {
                  similarity = Math.abs(gl_vec2__WEBPACK_IMPORTED_MODULE_0__["dot"](_imageToPatchGrid.data[idx].vec, currentPatch.vec));

                  if (similarity > threshold) {
                    trace(idx);
                  }
                }
              }
            }
          } // prepare for finding the right patches


          _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_patchGrid.data, 0);
          _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_patchLabelGrid.data, 0);
          _common_array_helper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init(_imageToPatchGrid.data, null);

          for (j = 0; j < patchesFound.length; j++) {
            patch = patchesFound[j];
            _imageToPatchGrid.data[patch.index] = patch;
            _patchGrid.data[patch.index] = 1;
          } // rasterize the patches found to determine area


          _patchGrid.zeroBorder(); // eslint-disable-next-line no-cond-assign


          while ((currIdx = notYetProcessed()) < _patchLabelGrid.data.length) {
            label++;
            trace(currIdx);
          } // draw patch-labels if requested


          if (true && _config.debug.showPatchLabels) {
            for (j = 0; j < _patchLabelGrid.data.length; j++) {
              if (_patchLabelGrid.data[j] > 0 && _patchLabelGrid.data[j] <= label) {
                patch = _imageToPatchGrid.data[j];
                hsv[0] = _patchLabelGrid.data[j] / (label + 1) * 360;
                Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["hsv2rgb"])(hsv, rgb);
                _common_image_debug__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
                  color: "rgb(".concat(rgb.join(','), ")"),
                  lineWidth: 2
                });
              }
            }
          }

          return label;
        }

/* harmony default export */ __webpack_exports__["a"] = ({
          init: function init(inputImageWrapper, config) {
            _config = config;
            _inputImageWrapper = inputImageWrapper;
            initBuffers();
            initCanvas();
          },
          locate: function locate() {
            if (_config.halfSample) {
              Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["halfSample"])(_inputImageWrapper, _currentImageWrapper);
            }

            binarizeImage();
            var patchesFound = findPatches(); // return unless 5% or more patches are found

            if (patchesFound.length < _numPatches.x * _numPatches.y * 0.05) {
              return null;
            } // rasterrize area by comparing angular similarity;


            var maxLabel = rasterizeAngularSimilarity(patchesFound);

            if (maxLabel < 1) {
              return null;
            } // search for area with the most patches (biggest connected area)


            var topLabels = findBiggestConnectedAreas(maxLabel);

            if (topLabels.length === 0) {
              return null;
            }

            var boxes = findBoxes(topLabels, maxLabel);
            return boxes;
          },
          checkImageConstraints: function checkImageConstraints(inputStream, config) {
            var patchSize;
            var width = inputStream.getWidth();
            var height = inputStream.getHeight();
            var thisHalfSample = config.halfSample ? 0.5 : 1;
            var area; // calculate width and height based on area

            if (inputStream.getConfig().area) {
              area = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["computeImageArea"])(width, height, inputStream.getConfig().area);
              inputStream.setTopRight({
                x: area.sx,
                y: area.sy
              });
              inputStream.setCanvasSize({
                x: width,
                y: height
              });
              width = area.sw;
              height = area.sh;
            }

            var size = {
              x: Math.floor(width * thisHalfSample),
              y: Math.floor(height * thisHalfSample)
            };
            patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_3__["calculatePatchSize"])(config.patchSize, size);

            if (true) {
              console.log("Patch-Size: ".concat(JSON.stringify(patchSize)));
            }

            inputStream.setWidth(Math.floor(Math.floor(size.x / patchSize.x) * (1 / thisHalfSample) * patchSize.x));
            inputStream.setHeight(Math.floor(Math.floor(size.y / patchSize.y) * (1 / thisHalfSample) * patchSize.y));

            if (inputStream.getWidth() % patchSize.x === 0 && inputStream.getHeight() % patchSize.y === 0) {
              return true;
            }

            throw new Error("Image dimensions do not comply with the current settings: Width (".concat(width, " )and height (").concat(height, ") must a multiple of ").concat(patchSize.x));
          }
        });
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12)))

      /***/
    }),
/* 29 */
/***/ (function (module, exports, __webpack_require__) {

      var listCacheClear = __webpack_require__(181),
        listCacheDelete = __webpack_require__(182),
        listCacheGet = __webpack_require__(183),
        listCacheHas = __webpack_require__(184),
        listCacheSet = __webpack_require__(185);
      /**
       * Creates an list cache object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */


      function ListCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;
        this.clear();

        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      } // Add methods to `ListCache`.


      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype['delete'] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;

      /***/
    }),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

      var eq = __webpack_require__(31);
      /**
       * Gets the index at which the `key` is found in `array` of key-value pairs.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {*} key The key to search for.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */


      function assocIndexOf(array, key) {
        var length = array.length;

        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }

        return -1;
      }

      module.exports = assocIndexOf;

      /***/
    }),
/* 31 */
/***/ (function (module, exports) {

      /**
       * Performs a
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * comparison between two values to determine if they are equivalent.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.eq(object, object);
       * // => true
       *
       * _.eq(object, other);
       * // => false
       *
       * _.eq('a', 'a');
       * // => true
       *
       * _.eq('a', Object('a'));
       * // => false
       *
       * _.eq(NaN, NaN);
       * // => true
       */
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }

      module.exports = eq;

      /***/
    }),
/* 32 */
/***/ (function (module, exports, __webpack_require__) {

      var root = __webpack_require__(20);
      /** Built-in value references. */


      var Symbol = root.Symbol;
      module.exports = Symbol;

      /***/
    }),
/* 33 */
/***/ (function (module, exports, __webpack_require__) {

      var getNative = __webpack_require__(43);
      /* Built-in method references that are verified to be native. */


      var nativeCreate = getNative(Object, 'create');
      module.exports = nativeCreate;

      /***/
    }),
/* 34 */
/***/ (function (module, exports, __webpack_require__) {

      var isKeyable = __webpack_require__(206);
      /**
       * Gets the data for `map`.
       *
       * @private
       * @param {Object} map The map to query.
       * @param {string} key The reference key.
       * @returns {*} Returns the map data.
       */


      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
      }

      module.exports = getMapData;

      /***/
    }),
/* 35 */
/***/ (function (module, exports, __webpack_require__) {

      var baseIsArguments = __webpack_require__(221),
        isObjectLike = __webpack_require__(21);
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /** Built-in value references. */

      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      /**
       * Checks if `value` is likely an `arguments` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       *  else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */

      var isArguments = baseIsArguments(function () {
        return arguments;
      }()) ? baseIsArguments : function (value) {
        return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
      };
      module.exports = isArguments;

      /***/
    }),
/* 36 */
/***/ (function (module, exports) {

      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;
      /** Used to detect unsigned integer values. */

      var reIsUint = /^(?:0|[1-9]\d*)$/;
      /**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */

      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
      }

      module.exports = isIndex;

      /***/
    }),
/* 37 */
/***/ (function (module, exports, __webpack_require__) {

      var isArray = __webpack_require__(14),
        isKey = __webpack_require__(249),
        stringToPath = __webpack_require__(250),
        toString = __webpack_require__(253);
      /**
       * Casts `value` to a path array if it's not one.
       *
       * @private
       * @param {*} value The value to inspect.
       * @param {Object} [object] The object to query keys on.
       * @returns {Array} Returns the cast property path array.
       */


      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }

        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }

      module.exports = castPath;

      /***/
    }),
/* 38 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (process) {

        if (typeof process === 'undefined' || !process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
          module.exports = {
            nextTick: nextTick
          };
        } else {
          module.exports = process;
        }

        function nextTick(fn, arg1, arg2, arg3) {
          if (typeof fn !== 'function') {
            throw new TypeError('"callback" argument must be a function');
          }

          var len = arguments.length;
          var args, i;

          switch (len) {
            case 0:
            case 1:
              return process.nextTick(fn);

            case 2:
              return process.nextTick(function afterTickOne() {
                fn.call(null, arg1);
              });

            case 3:
              return process.nextTick(function afterTickTwo() {
                fn.call(null, arg1, arg2);
              });

            case 4:
              return process.nextTick(function afterTickThree() {
                fn.call(null, arg1, arg2, arg3);
              });

            default:
              args = new Array(len - 1);
              i = 0;

              while (i < args.length) {
                args[i++] = arguments[i];
              }

              return process.nextTick(function afterTick() {
                fn.apply(null, args);
              });
          }
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(15)))

      /***/
    }),
/* 39 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayWithHoles = __webpack_require__(107);

      var iterableToArrayLimit = __webpack_require__(108);

      var unsupportedIterableToArray = __webpack_require__(56);

      var nonIterableRest = __webpack_require__(109);

      function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }

      module.exports = _slicedToArray;

      /***/
    }),
/* 40 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayWithoutHoles = __webpack_require__(241);

      var iterableToArray = __webpack_require__(242);

      var unsupportedIterableToArray = __webpack_require__(56);

      var nonIterableSpread = __webpack_require__(243);

      function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
      }

      module.exports = _toConsumableArray;

      /***/
    }),
/* 41 */
/***/ (function (module, exports) {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      module.exports = _asyncToGenerator;

      /***/
    }),
/* 42 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = {
        determinant: __webpack_require__(265),
        transpose: __webpack_require__(266),
        multiply: __webpack_require__(267),
        identity: __webpack_require__(268),
        adjoint: __webpack_require__(269),
        rotate: __webpack_require__(270),
        invert: __webpack_require__(271),
        create: __webpack_require__(272),
        scale: __webpack_require__(273),
        copy: __webpack_require__(274),
        frob: __webpack_require__(275),
        ldu: __webpack_require__(276)
      };

      /***/
    }),
/* 43 */
/***/ (function (module, exports, __webpack_require__) {

      var baseIsNative = __webpack_require__(191),
        getValue = __webpack_require__(197);
      /**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */


      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }

      module.exports = getNative;

      /***/
    }),
/* 44 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGetTag = __webpack_require__(25),
        isObject = __webpack_require__(13);
      /** `Object#toString` result references. */


      var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';
      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */

      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        } // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.


        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }

      module.exports = isFunction;

      /***/
    }),
/* 45 */
/***/ (function (module, exports, __webpack_require__) {

      var defineProperty = __webpack_require__(83);
      /**
       * The base implementation of `assignValue` and `assignMergeValue` without
       * value checks.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */


      function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
          defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
          });
        } else {
          object[key] = value;
        }
      }

      module.exports = baseAssignValue;

      /***/
    }),
/* 46 */
/***/ (function (module, exports) {

      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () { };

          module.paths = []; // module.parent = undefined by default

          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function () {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function () {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };

      /***/
    }),
/* 47 */
/***/ (function (module, exports, __webpack_require__) {

      var isFunction = __webpack_require__(44),
        isLength = __webpack_require__(48);
      /**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */


      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      module.exports = isArrayLike;

      /***/
    }),
/* 48 */
/***/ (function (module, exports) {

      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;
      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */

      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }

      module.exports = isLength;

      /***/
    }),
/* 49 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGetTag = __webpack_require__(25),
        isObjectLike = __webpack_require__(21);
      /** `Object#toString` result references. */


      var symbolTag = '[object Symbol]';
      /**
       * Checks if `value` is classified as a `Symbol` primitive or object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
       * @example
       *
       * _.isSymbol(Symbol.iterator);
       * // => true
       *
       * _.isSymbol('abc');
       * // => false
       */

      function isSymbol(value) {
        return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }

      module.exports = isSymbol;

      /***/
    }),
/* 50 */
/***/ (function (module, exports, __webpack_require__) {

      var isSymbol = __webpack_require__(49);
      /** Used as references for various `Number` constants. */


      var INFINITY = 1 / 0;
      /**
       * Converts `value` to a string key if it's not a string or symbol.
       *
       * @private
       * @param {*} value The value to inspect.
       * @returns {string|symbol} Returns the key.
       */

      function toKey(value) {
        if (typeof value == 'string' || isSymbol(value)) {
          return value;
        }

        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
      }

      module.exports = toKey;

      /***/
    }),
/* 51 */
/***/ (function (module, exports, __webpack_require__) {

      var iota = __webpack_require__(281);

      var isBuffer = __webpack_require__(282);

      var hasTypedArrays = typeof Float64Array !== "undefined";

      function compare1st(a, b) {
        return a[0] - b[0];
      }

      function order() {
        var stride = this.stride;
        var terms = new Array(stride.length);
        var i;

        for (i = 0; i < terms.length; ++i) {
          terms[i] = [Math.abs(stride[i]), i];
        }

        terms.sort(compare1st);
        var result = new Array(terms.length);

        for (i = 0; i < result.length; ++i) {
          result[i] = terms[i][1];
        }

        return result;
      }

      function compileConstructor(dtype, dimension) {
        var className = ["View", dimension, "d", dtype].join("");

        if (dimension < 0) {
          className = "View_Nil" + dtype;
        }

        var useGetters = dtype === "generic";

        if (dimension === -1) {
          //Special case for trivial arrays
          var code = "function " + className + "(a){this.data=a;};\
var proto=" + className + ".prototype;\
proto.dtype='" + dtype + "';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new " + className + "(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_" + className + "(a){return new " + className + "(a);}";
          var procedure = new Function(code);
          return procedure();
        } else if (dimension === 0) {
          //Special case for 0d arrays
          var code = "function " + className + "(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto=" + className + ".prototype;\
proto.dtype='" + dtype + "';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function " + className + "_copy() {\
return new " + className + "(this.data,this.offset)\
};\
proto.pick=function " + className + "_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function " + className + "_get(){\
return " + (useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};\
proto.set=function " + className + "_set(v){\
return " + (useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "\
};\
return function construct_" + className + "(a,b,c,d){return new " + className + "(a,d)}";
          var procedure = new Function("TrivialArray", code);
          return procedure(CACHED_CONSTRUCTORS[dtype][0]);
        }

        var code = ["'use strict'"]; //Create constructor for view

        var indices = iota(dimension);
        var args = indices.map(function (i) {
          return "i" + i;
        });
        var index_str = "this.offset+" + indices.map(function (i) {
          return "this.stride[" + i + "]*i" + i;
        }).join("+");
        var shapeArg = indices.map(function (i) {
          return "b" + i;
        }).join(",");
        var strideArg = indices.map(function (i) {
          return "c" + i;
        }).join(",");
        code.push("function " + className + "(a," + shapeArg + "," + strideArg + ",d){this.data=a", "this.shape=[" + shapeArg + "]", "this.stride=[" + strideArg + "]", "this.offset=d|0}", "var proto=" + className + ".prototype", "proto.dtype='" + dtype + "'", "proto.dimension=" + dimension); //view.size:

        code.push("Object.defineProperty(proto,'size',{get:function " + className + "_size(){\
return " + indices.map(function (i) {
          return "this.shape[" + i + "]";
        }).join("*"), "}})"); //view.order:

        if (dimension === 1) {
          code.push("proto.order=[0]");
        } else {
          code.push("Object.defineProperty(proto,'order',{get:");

          if (dimension < 4) {
            code.push("function " + className + "_order(){");

            if (dimension === 2) {
              code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
            } else if (dimension === 3) {
              code.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})");
            }
          } else {
            code.push("ORDER})");
          }
        } //view.set(i0, ..., v):


        code.push("proto.set=function " + className + "_set(" + args.join(",") + ",v){");

        if (useGetters) {
          code.push("return this.data.set(" + index_str + ",v)}");
        } else {
          code.push("return this.data[" + index_str + "]=v}");
        } //view.get(i0, ...):


        code.push("proto.get=function " + className + "_get(" + args.join(",") + "){");

        if (useGetters) {
          code.push("return this.data.get(" + index_str + ")}");
        } else {
          code.push("return this.data[" + index_str + "]}");
        } //view.index:


        code.push("proto.index=function " + className + "_index(", args.join(), "){return " + index_str + "}"); //view.hi():

        code.push("proto.hi=function " + className + "_hi(" + args.join(",") + "){return new " + className + "(this.data," + indices.map(function (i) {
          return ["(typeof i", i, "!=='number'||i", i, "<0)?this.shape[", i, "]:i", i, "|0"].join("");
        }).join(",") + "," + indices.map(function (i) {
          return "this.stride[" + i + "]";
        }).join(",") + ",this.offset)}"); //view.lo():

        var a_vars = indices.map(function (i) {
          return "a" + i + "=this.shape[" + i + "]";
        });
        var c_vars = indices.map(function (i) {
          return "c" + i + "=this.stride[" + i + "]";
        });
        code.push("proto.lo=function " + className + "_lo(" + args.join(",") + "){var b=this.offset,d=0," + a_vars.join(",") + "," + c_vars.join(","));

        for (var i = 0; i < dimension; ++i) {
          code.push("if(typeof i" + i + "==='number'&&i" + i + ">=0){\
d=i" + i + "|0;\
b+=c" + i + "*d;\
a" + i + "-=d}");
        }

        code.push("return new " + className + "(this.data," + indices.map(function (i) {
          return "a" + i;
        }).join(",") + "," + indices.map(function (i) {
          return "c" + i;
        }).join(",") + ",b)}"); //view.step():

        code.push("proto.step=function " + className + "_step(" + args.join(",") + "){var " + indices.map(function (i) {
          return "a" + i + "=this.shape[" + i + "]";
        }).join(",") + "," + indices.map(function (i) {
          return "b" + i + "=this.stride[" + i + "]";
        }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");

        for (var i = 0; i < dimension; ++i) {
          code.push("if(typeof i" + i + "==='number'){\
d=i" + i + "|0;\
if(d<0){\
c+=b" + i + "*(a" + i + "-1);\
a" + i + "=ceil(-a" + i + "/d)\
}else{\
a" + i + "=ceil(a" + i + "/d)\
}\
b" + i + "*=d\
}");
        }

        code.push("return new " + className + "(this.data," + indices.map(function (i) {
          return "a" + i;
        }).join(",") + "," + indices.map(function (i) {
          return "b" + i;
        }).join(",") + ",c)}"); //view.transpose():

        var tShape = new Array(dimension);
        var tStride = new Array(dimension);

        for (var i = 0; i < dimension; ++i) {
          tShape[i] = "a[i" + i + "]";
          tStride[i] = "b[i" + i + "]";
        }

        code.push("proto.transpose=function " + className + "_transpose(" + args + "){" + args.map(function (n, idx) {
          return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)";
        }).join(";"), "var a=this.shape,b=this.stride;return new " + className + "(this.data," + tShape.join(",") + "," + tStride.join(",") + ",this.offset)}"); //view.pick():

        code.push("proto.pick=function " + className + "_pick(" + args + "){var a=[],b=[],c=this.offset");

        for (var i = 0; i < dimension; ++i) {
          code.push("if(typeof i" + i + "==='number'&&i" + i + ">=0){c=(c+this.stride[" + i + "]*i" + i + ")|0}else{a.push(this.shape[" + i + "]);b.push(this.stride[" + i + "])}");
        }

        code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"); //Add return statement

        code.push("return function construct_" + className + "(data,shape,stride,offset){return new " + className + "(data," + indices.map(function (i) {
          return "shape[" + i + "]";
        }).join(",") + "," + indices.map(function (i) {
          return "stride[" + i + "]";
        }).join(",") + ",offset)}"); //Compile procedure

        var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"));
        return procedure(CACHED_CONSTRUCTORS[dtype], order);
      }

      function arrayDType(data) {
        if (isBuffer(data)) {
          return "buffer";
        }

        if (hasTypedArrays) {
          switch (Object.prototype.toString.call(data)) {
            case "[object Float64Array]":
              return "float64";

            case "[object Float32Array]":
              return "float32";

            case "[object Int8Array]":
              return "int8";

            case "[object Int16Array]":
              return "int16";

            case "[object Int32Array]":
              return "int32";

            case "[object Uint8Array]":
              return "uint8";

            case "[object Uint16Array]":
              return "uint16";

            case "[object Uint32Array]":
              return "uint32";

            case "[object Uint8ClampedArray]":
              return "uint8_clamped";

            case "[object BigInt64Array]":
              return "bigint64";

            case "[object BigUint64Array]":
              return "biguint64";
          }
        }

        if (Array.isArray(data)) {
          return "array";
        }

        return "generic";
      }

      var CACHED_CONSTRUCTORS = {
        "float32": [],
        "float64": [],
        "int8": [],
        "int16": [],
        "int32": [],
        "uint8": [],
        "uint16": [],
        "uint32": [],
        "array": [],
        "uint8_clamped": [],
        "bigint64": [],
        "biguint64": [],
        "buffer": [],
        "generic": []
      };

      (function () {
        for (var id in CACHED_CONSTRUCTORS) {
          CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1));
        }
      });

      function wrappedNDArrayCtor(data, shape, stride, offset) {
        if (data === undefined) {
          var ctor = CACHED_CONSTRUCTORS.array[0];
          return ctor([]);
        } else if (typeof data === "number") {
          data = [data];
        }

        if (shape === undefined) {
          shape = [data.length];
        }

        var d = shape.length;

        if (stride === undefined) {
          stride = new Array(d);

          for (var i = d - 1, sz = 1; i >= 0; --i) {
            stride[i] = sz;
            sz *= shape[i];
          }
        }

        if (offset === undefined) {
          offset = 0;

          for (var i = 0; i < d; ++i) {
            if (stride[i] < 0) {
              offset -= (shape[i] - 1) * stride[i];
            }
          }
        }

        var dtype = arrayDType(data);
        var ctor_list = CACHED_CONSTRUCTORS[dtype];

        while (ctor_list.length <= d + 1) {
          ctor_list.push(compileConstructor(dtype, ctor_list.length - 1));
        }

        var ctor = ctor_list[d + 1];
        return ctor(data, shape, stride, offset);
      }

      module.exports = wrappedNDArrayCtor;

      /***/
    }),
/* 52 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.


      var R = typeof Reflect === 'object' ? Reflect : null;
      var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;

      if (R && typeof R.ownKeys === 'function') {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys(target) {
          return Object.getOwnPropertyNames(target);
        };
      }

      function ProcessEmitWarning(warning) {
        if (console && console.warn) console.warn(warning);
      }

      var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
        return value !== value;
      };

      function EventEmitter() {
        EventEmitter.init.call(this);
      }

      module.exports = EventEmitter;
      module.exports.once = once; // Backwards-compat with node 0.10.x

      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.

      var defaultMaxListeners = 10;

      function checkListener(listener) {
        if (typeof listener !== 'function') {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }

      Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
        enumerable: true,
        get: function () {
          return defaultMaxListeners;
        },
        set: function (arg) {
          if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
          }

          defaultMaxListeners = arg;
        }
      });

      EventEmitter.init = function () {
        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        }

        this._maxListeners = this._maxListeners || undefined;
      }; // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.


      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
        }

        this._maxListeners = n;
        return this;
      };

      function _getMaxListeners(that) {
        if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }

      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };

      EventEmitter.prototype.emit = function emit(type) {
        var args = [];

        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

        var doError = type === 'error';
        var events = this._events;
        if (events !== undefined) doError = doError && events.error === undefined; else if (!doError) return false; // If there is no 'error' event listener then throw.

        if (doError) {
          var er;
          if (args.length > 0) er = args[0];

          if (er instanceof Error) {
            // Note: The comments on the `throw` lines are intentional, they show
            // up in Node's output if this results in an unhandled exception.
            throw er; // Unhandled 'error' event
          } // At least give some kind of context to the user


          var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
          err.context = er;
          throw err; // Unhandled 'error' event
        }

        var handler = events[type];
        if (handler === undefined) return false;

        if (typeof handler === 'function') {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
        }

        return true;
      };

      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;

        if (events === undefined) {
          events = target._events = Object.create(null);
          target._eventsCount = 0;
        } else {
          // To avoid recursion in the case that type === "newListener"! Before
          // adding it to the listeners, first emit "newListener".
          if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object

            events = target._events;
          }

          existing = events[type];
        }

        if (existing === undefined) {
          // Optimize the case of one listener. Don't need the extra array object.
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          } // Check for listener leak


          m = _getMaxListeners(target);

          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true; // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax

            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }

        return target;
      }

      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0) return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }

      function _onceWrap(target, type, listener) {
        var state = {
          fired: false,
          wrapFn: undefined,
          target: target,
          type: type,
          listener: listener
        };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }

      EventEmitter.prototype.once = function once(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };

      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      }; // Emits a 'removeListener' event if and only if the listener was removed.


      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === undefined) return this;
        list = events[type];
        if (list === undefined) return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0) this._events = Object.create(null); else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0) return this;
          if (position === 0) list.shift(); else {
            spliceOne(list, position);
          }
          if (list.length === 1) events[type] = list[0];
          if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === undefined) return this; // not listening for removeListener, no need to emit

        if (events.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null); else delete events[type];
          }

          return this;
        } // emit removeListener for all listeners on all events


        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;

          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }

          this.removeAllListeners('removeListener');
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners !== undefined) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === undefined) return [];
        var evlistener = events[type];
        if (evlistener === undefined) return [];
        if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }

      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };

      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };

      EventEmitter.listenerCount = function (emitter, type) {
        if (typeof emitter.listenerCount === 'function') {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };

      EventEmitter.prototype.listenerCount = listenerCount;

      function listenerCount(type) {
        var events = this._events;

        if (events !== undefined) {
          var evlistener = events[type];

          if (typeof evlistener === 'function') {
            return 1;
          } else if (evlistener !== undefined) {
            return evlistener.length;
          }
        }

        return 0;
      }

      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };

      function arrayClone(arr, n) {
        var copy = new Array(n);

        for (var i = 0; i < n; ++i) copy[i] = arr[i];

        return copy;
      }

      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++) list[index] = list[index + 1];

        list.pop();
      }

      function unwrapListeners(arr) {
        var ret = new Array(arr.length);

        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }

        return ret;
      }

      function once(emitter, name) {
        return new Promise(function (resolve, reject) {
          function eventListener() {
            if (errorListener !== undefined) {
              emitter.removeListener('error', errorListener);
            }

            resolve([].slice.call(arguments));
          }

          ;
          var errorListener; // Adding an error listener is not optional because
          // if an error is thrown on an event emitter we cannot
          // guarantee that the actual event we are waiting will
          // be fired. The result could be a silent way to create
          // memory or file descriptor leaks, which is something
          // we should avoid.

          if (name !== 'error') {
            errorListener = function errorListener(err) {
              emitter.removeListener(name, eventListener);
              reject(err);
            };

            emitter.once('error', errorListener);
          }

          emitter.once(name, eventListener);
        });
      }

      /***/
    }),
/* 53 */
/***/ (function (module, exports, __webpack_require__) {

      exports = module.exports = __webpack_require__(94);
      exports.Stream = exports;
      exports.Readable = exports;
      exports.Writable = __webpack_require__(55);
      exports.Duplex = __webpack_require__(16);
      exports.Transform = __webpack_require__(98);
      exports.PassThrough = __webpack_require__(300);

      /***/
    }),
/* 54 */
/***/ (function (module, exports, __webpack_require__) {

      /* eslint-disable node/no-deprecated-api */
      var buffer = __webpack_require__(26);

      var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }

      if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        // Copy properties from require('buffer')
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }

      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
      } // Copy static methods from Buffer


      copyProps(Buffer, SafeBuffer);

      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          throw new TypeError('Argument must not be a number');
        }

        return Buffer(arg, encodingOrOffset, length);
      };

      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        var buf = Buffer(size);

        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }

        return buf;
      };

      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        return Buffer(size);
      };

      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        return buffer.SlowBuffer(size);
      };

      /***/
    }),
/* 55 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        // A bit simpler than readable streams.
        // Implement an async ._write(chunk, encoding, cb), and it'll handle all
        // the drain event emission and buffering.

        /*<replacement>*/

        var pna = __webpack_require__(38);
        /*</replacement>*/


        module.exports = Writable;
        /* <replacement> */

        function WriteReq(chunk, encoding, cb) {
          this.chunk = chunk;
          this.encoding = encoding;
          this.callback = cb;
          this.next = null;
        } // It seems a linked list but it is not
        // there will be only 2 of these for each stream


        function CorkedRequest(state) {
          var _this = this;

          this.next = null;
          this.entry = null;

          this.finish = function () {
            onCorkedFinish(_this, state);
          };
        }
        /* </replacement> */

        /*<replacement>*/


        var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
        /*</replacement>*/

        /*<replacement>*/

        var Duplex;
        /*</replacement>*/

        Writable.WritableState = WritableState;
        /*<replacement>*/

        var util = Object.create(__webpack_require__(27));
        util.inherits = __webpack_require__(22);
        /*</replacement>*/

        /*<replacement>*/

        var internalUtil = {
          deprecate: __webpack_require__(298)
        };
        /*</replacement>*/

        /*<replacement>*/

        var Stream = __webpack_require__(95);
        /*</replacement>*/

        /*<replacement>*/


        var Buffer = __webpack_require__(54).Buffer;

        var OurUint8Array = global.Uint8Array || function () { };

        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }

        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }
        /*</replacement>*/


        var destroyImpl = __webpack_require__(96);

        util.inherits(Writable, Stream);

        function nop() { }

        function WritableState(options, stream) {
          Duplex = Duplex || __webpack_require__(16);
          options = options || {}; // Duplex streams are both readable and writable, but share
          // the same options object.
          // However, some cases require setting options to different
          // values for the readable and the writable sides of the duplex stream.
          // These options can be provided separately as readableXXX and writableXXX.

          var isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
          // contains buffers or objects.

          this.objectMode = !!options.objectMode;
          if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
          // Note: 0 is a valid value, means that we always return false if
          // the entire buffer is not flushed immediately on write()

          var hwm = options.highWaterMark;
          var writableHwm = options.writableHighWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          if (hwm || hwm === 0) this.highWaterMark = hwm; else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm; else this.highWaterMark = defaultHwm; // cast to ints.

          this.highWaterMark = Math.floor(this.highWaterMark); // if _final has been called

          this.finalCalled = false; // drain event flag.

          this.needDrain = false; // at the start of calling end()

          this.ending = false; // when end() has been called, and returned

          this.ended = false; // when 'finish' is emitted

          this.finished = false; // has it been destroyed

          this.destroyed = false; // should we decode strings into buffers before passing to _write?
          // this is here so that some node-core streams can optimize string
          // handling at a lower level.

          var noDecode = options.decodeStrings === false;
          this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
          // encoding is 'binary' so we have to make this configurable.
          // Everything else in the universe uses 'utf8', though.

          this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
          // of how much we're waiting to get pushed to some underlying
          // socket or file.

          this.length = 0; // a flag to see when we're in the middle of a write.

          this.writing = false; // when true all writes will be buffered until .uncork() call

          this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
          // or on a later tick.  We set this to true at first, because any
          // actions that shouldn't happen until "later" should generally also
          // not happen before the first write call.

          this.sync = true; // a flag to know if we're processing previously buffered items, which
          // may call the _write() callback in the same tick, so that we don't
          // end up in an overlapped onwrite situation.

          this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

          this.onwrite = function (er) {
            onwrite(stream, er);
          }; // the callback that the user supplies to write(chunk,encoding,cb)


          this.writecb = null; // the amount that is being written when _write is called.

          this.writelen = 0;
          this.bufferedRequest = null;
          this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
          // this must be 0 before 'finish' can be emitted

          this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
          // This is relevant for synchronous Transform streams

          this.prefinished = false; // True if the error was already emitted and should not be thrown again

          this.errorEmitted = false; // count buffered requests

          this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
          // one allocated and free to use, and we maintain at most two

          this.corkedRequestsFree = new CorkedRequest(this);
        }

        WritableState.prototype.getBuffer = function getBuffer() {
          var current = this.bufferedRequest;
          var out = [];

          while (current) {
            out.push(current);
            current = current.next;
          }

          return out;
        };

        (function () {
          try {
            Object.defineProperty(WritableState.prototype, 'buffer', {
              get: internalUtil.deprecate(function () {
                return this.getBuffer();
              }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
            });
          } catch (_) { }
        })(); // Test _writableState for inheritance to account for Duplex streams,
        // whose prototype chain only points to Readable.


        var realHasInstance;

        if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
          realHasInstance = Function.prototype[Symbol.hasInstance];
          Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function (object) {
              if (realHasInstance.call(this, object)) return true;
              if (this !== Writable) return false;
              return object && object._writableState instanceof WritableState;
            }
          });
        } else {
          realHasInstance = function (object) {
            return object instanceof this;
          };
        }

        function Writable(options) {
          Duplex = Duplex || __webpack_require__(16); // Writable ctor is applied to Duplexes, too.
          // `realHasInstance` is necessary because using plain `instanceof`
          // would return false, as no `_writableState` property is attached.
          // Trying to use the custom `instanceof` for Writable here will also break the
          // Node.js LazyTransform implementation, which has a non-trivial getter for
          // `_writableState` that would lead to infinite recursion.

          if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
            return new Writable(options);
          }

          this._writableState = new WritableState(options, this); // legacy.

          this.writable = true;

          if (options) {
            if (typeof options.write === 'function') this._write = options.write;
            if (typeof options.writev === 'function') this._writev = options.writev;
            if (typeof options.destroy === 'function') this._destroy = options.destroy;
            if (typeof options.final === 'function') this._final = options.final;
          }

          Stream.call(this);
        } // Otherwise people can pipe Writable streams, which is just wrong.


        Writable.prototype.pipe = function () {
          this.emit('error', new Error('Cannot pipe, not readable'));
        };

        function writeAfterEnd(stream, cb) {
          var er = new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb

          stream.emit('error', er);
          pna.nextTick(cb, er);
        } // Checks that a user-supplied chunk is valid, especially for the particular
        // mode the stream is in. Currently this means that `null` is never accepted
        // and undefined/non-string values are only allowed in object mode.


        function validChunk(stream, state, chunk, cb) {
          var valid = true;
          var er = false;

          if (chunk === null) {
            er = new TypeError('May not write null values to stream');
          } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
            er = new TypeError('Invalid non-string/buffer chunk');
          }

          if (er) {
            stream.emit('error', er);
            pna.nextTick(cb, er);
            valid = false;
          }

          return valid;
        }

        Writable.prototype.write = function (chunk, encoding, cb) {
          var state = this._writableState;
          var ret = false;

          var isBuf = !state.objectMode && _isUint8Array(chunk);

          if (isBuf && !Buffer.isBuffer(chunk)) {
            chunk = _uint8ArrayToBuffer(chunk);
          }

          if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }

          if (isBuf) encoding = 'buffer'; else if (!encoding) encoding = state.defaultEncoding;
          if (typeof cb !== 'function') cb = nop;
          if (state.ended) writeAfterEnd(this, cb); else if (isBuf || validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
          }
          return ret;
        };

        Writable.prototype.cork = function () {
          var state = this._writableState;
          state.corked++;
        };

        Writable.prototype.uncork = function () {
          var state = this._writableState;

          if (state.corked) {
            state.corked--;
            if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
          }
        };

        Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
          // node::ParseEncoding() requires lower case.
          if (typeof encoding === 'string') encoding = encoding.toLowerCase();
          if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
          this._writableState.defaultEncoding = encoding;
          return this;
        };

        function decodeChunk(state, chunk, encoding) {
          if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
            chunk = Buffer.from(chunk, encoding);
          }

          return chunk;
        }

        Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
          // making it explicit this property is not enumerable
          // because otherwise some prototype manipulation in
          // userland will fail
          enumerable: false,
          get: function () {
            return this._writableState.highWaterMark;
          }
        }); // if we're already writing something, then just put this
        // in the queue, and wait our turn.  Otherwise, call _write
        // If we return false, then we need a drain event, so set that flag.

        function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
          if (!isBuf) {
            var newChunk = decodeChunk(state, chunk, encoding);

            if (chunk !== newChunk) {
              isBuf = true;
              encoding = 'buffer';
              chunk = newChunk;
            }
          }

          var len = state.objectMode ? 1 : chunk.length;
          state.length += len;
          var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

          if (!ret) state.needDrain = true;

          if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = {
              chunk: chunk,
              encoding: encoding,
              isBuf: isBuf,
              callback: cb,
              next: null
            };

            if (last) {
              last.next = state.lastBufferedRequest;
            } else {
              state.bufferedRequest = state.lastBufferedRequest;
            }

            state.bufferedRequestCount += 1;
          } else {
            doWrite(stream, state, false, len, chunk, encoding, cb);
          }

          return ret;
        }

        function doWrite(stream, state, writev, len, chunk, encoding, cb) {
          state.writelen = len;
          state.writecb = cb;
          state.writing = true;
          state.sync = true;
          if (writev) stream._writev(chunk, state.onwrite); else stream._write(chunk, encoding, state.onwrite);
          state.sync = false;
        }

        function onwriteError(stream, state, sync, er, cb) {
          --state.pendingcb;

          if (sync) {
            // defer the callback if we are being called synchronously
            // to avoid piling up things on the stack
            pna.nextTick(cb, er); // this can emit finish, and it will always happen
            // after error

            pna.nextTick(finishMaybe, stream, state);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);
          } else {
            // the caller expect this to happen before if
            // it is async
            cb(er);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er); // this can emit finish, but finish must
            // always follow error

            finishMaybe(stream, state);
          }
        }

        function onwriteStateUpdate(state) {
          state.writing = false;
          state.writecb = null;
          state.length -= state.writelen;
          state.writelen = 0;
        }

        function onwrite(stream, er) {
          var state = stream._writableState;
          var sync = state.sync;
          var cb = state.writecb;
          onwriteStateUpdate(state);
          if (er) onwriteError(stream, state, sync, er, cb); else {
            // Check if we're actually ready to finish, but don't emit yet
            var finished = needFinish(state);

            if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
              clearBuffer(stream, state);
            }

            if (sync) {
              /*<replacement>*/
              asyncWrite(afterWrite, stream, state, finished, cb);
              /*</replacement>*/
            } else {
              afterWrite(stream, state, finished, cb);
            }
          }
        }

        function afterWrite(stream, state, finished, cb) {
          if (!finished) onwriteDrain(stream, state);
          state.pendingcb--;
          cb();
          finishMaybe(stream, state);
        } // Must force callback to be called on nextTick, so that we don't
        // emit 'drain' before the write() consumer gets the 'false' return
        // value, and has a chance to attach a 'drain' listener.


        function onwriteDrain(stream, state) {
          if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit('drain');
          }
        } // if there's something in the buffer waiting, then process it


        function clearBuffer(stream, state) {
          state.bufferProcessing = true;
          var entry = state.bufferedRequest;

          if (stream._writev && entry && entry.next) {
            // Fast case, write everything using _writev()
            var l = state.bufferedRequestCount;
            var buffer = new Array(l);
            var holder = state.corkedRequestsFree;
            holder.entry = entry;
            var count = 0;
            var allBuffers = true;

            while (entry) {
              buffer[count] = entry;
              if (!entry.isBuf) allBuffers = false;
              entry = entry.next;
              count += 1;
            }

            buffer.allBuffers = allBuffers;
            doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
            // as the hot path ends with doWrite

            state.pendingcb++;
            state.lastBufferedRequest = null;

            if (holder.next) {
              state.corkedRequestsFree = holder.next;
              holder.next = null;
            } else {
              state.corkedRequestsFree = new CorkedRequest(state);
            }

            state.bufferedRequestCount = 0;
          } else {
            // Slow case, write chunks one-by-one
            while (entry) {
              var chunk = entry.chunk;
              var encoding = entry.encoding;
              var cb = entry.callback;
              var len = state.objectMode ? 1 : chunk.length;
              doWrite(stream, state, false, len, chunk, encoding, cb);
              entry = entry.next;
              state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
              // it means that we need to wait until it does.
              // also, that means that the chunk and cb are currently
              // being processed, so move the buffer counter past them.

              if (state.writing) {
                break;
              }
            }

            if (entry === null) state.lastBufferedRequest = null;
          }

          state.bufferedRequest = entry;
          state.bufferProcessing = false;
        }

        Writable.prototype._write = function (chunk, encoding, cb) {
          cb(new Error('_write() is not implemented'));
        };

        Writable.prototype._writev = null;

        Writable.prototype.end = function (chunk, encoding, cb) {
          var state = this._writableState;

          if (typeof chunk === 'function') {
            cb = chunk;
            chunk = null;
            encoding = null;
          } else if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }

          if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

          if (state.corked) {
            state.corked = 1;
            this.uncork();
          } // ignore unnecessary end() calls.


          if (!state.ending && !state.finished) endWritable(this, state, cb);
        };

        function needFinish(state) {
          return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
        }

        function callFinal(stream, state) {
          stream._final(function (err) {
            state.pendingcb--;

            if (err) {
              stream.emit('error', err);
            }

            state.prefinished = true;
            stream.emit('prefinish');
            finishMaybe(stream, state);
          });
        }

        function prefinish(stream, state) {
          if (!state.prefinished && !state.finalCalled) {
            if (typeof stream._final === 'function') {
              state.pendingcb++;
              state.finalCalled = true;
              pna.nextTick(callFinal, stream, state);
            } else {
              state.prefinished = true;
              stream.emit('prefinish');
            }
          }
        }

        function finishMaybe(stream, state) {
          var need = needFinish(state);

          if (need) {
            prefinish(stream, state);

            if (state.pendingcb === 0) {
              state.finished = true;
              stream.emit('finish');
            }
          }

          return need;
        }

        function endWritable(stream, state, cb) {
          state.ending = true;
          finishMaybe(stream, state);

          if (cb) {
            if (state.finished) pna.nextTick(cb); else stream.once('finish', cb);
          }

          state.ended = true;
          stream.writable = false;
        }

        function onCorkedFinish(corkReq, state, err) {
          var entry = corkReq.entry;
          corkReq.entry = null;

          while (entry) {
            var cb = entry.callback;
            state.pendingcb--;
            cb(err);
            entry = entry.next;
          }

          if (state.corkedRequestsFree) {
            state.corkedRequestsFree.next = corkReq;
          } else {
            state.corkedRequestsFree = corkReq;
          }
        }

        Object.defineProperty(Writable.prototype, 'destroyed', {
          get: function () {
            if (this._writableState === undefined) {
              return false;
            }

            return this._writableState.destroyed;
          },
          set: function (value) {
            // we ignore the value if the stream
            // has not been initialized yet
            if (!this._writableState) {
              return;
            } // backward compatibility, the user is explicitly
            // managing destroyed


            this._writableState.destroyed = value;
          }
        });
        Writable.prototype.destroy = destroyImpl.destroy;
        Writable.prototype._undestroy = destroyImpl.undestroy;

        Writable.prototype._destroy = function (err, cb) {
          this.end();
          cb(err);
        };
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(15), __webpack_require__(296).setImmediate, __webpack_require__(12)))

      /***/
    }),
/* 56 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayLikeToArray = __webpack_require__(57);

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
      }

      module.exports = _unsupportedIterableToArray;

      /***/
    }),
/* 57 */
/***/ (function (module, exports) {

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      module.exports = _arrayLikeToArray;

      /***/
    }),
/* 58 */
/***/ (function (module, exports) {

      module.exports = 0.000001;

      /***/
    }),
/* 59 */
/***/ (function (module, exports) {

      module.exports = create;
      /**
       * Creates a new, empty vec2
       *
       * @returns {vec2} a new 2D vector
       */

      function create() {
        var out = new Float32Array(2);
        out[0] = 0;
        out[1] = 0;
        return out;
      }

      /***/
    }),
/* 60 */
/***/ (function (module, exports) {

      module.exports = subtract;
      /**
       * Subtracts vector b from vector a
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */

      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
      }

      /***/
    }),
/* 61 */
/***/ (function (module, exports) {

      module.exports = multiply;
      /**
       * Multiplies two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */

      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
      }

      /***/
    }),
/* 62 */
/***/ (function (module, exports) {

      module.exports = divide;
      /**
       * Divides two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */

      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
      }

      /***/
    }),
/* 63 */
/***/ (function (module, exports) {

      module.exports = distance;
      /**
       * Calculates the euclidian distance between two vec2's
       *
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {Number} distance between a and b
       */

      function distance(a, b) {
        var x = b[0] - a[0],
          y = b[1] - a[1];
        return Math.sqrt(x * x + y * y);
      }

      /***/
    }),
/* 64 */
/***/ (function (module, exports) {

      module.exports = squaredDistance;
      /**
       * Calculates the squared euclidian distance between two vec2's
       *
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {Number} squared distance between a and b
       */

      function squaredDistance(a, b) {
        var x = b[0] - a[0],
          y = b[1] - a[1];
        return x * x + y * y;
      }

      /***/
    }),
/* 65 */
/***/ (function (module, exports) {

      module.exports = length;
      /**
       * Calculates the length of a vec2
       *
       * @param {vec2} a vector to calculate length of
       * @returns {Number} length of a
       */

      function length(a) {
        var x = a[0],
          y = a[1];
        return Math.sqrt(x * x + y * y);
      }

      /***/
    }),
/* 66 */
/***/ (function (module, exports) {

      module.exports = squaredLength;
      /**
       * Calculates the squared length of a vec2
       *
       * @param {vec2} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */

      function squaredLength(a) {
        var x = a[0],
          y = a[1];
        return x * x + y * y;
      }

      /***/
    }),
/* 67 */
/***/ (function (module, exports) {

      module.exports = 0.000001;

      /***/
    }),
/* 68 */
/***/ (function (module, exports) {

      module.exports = create;
      /**
       * Creates a new, empty vec3
       *
       * @returns {vec3} a new 3D vector
       */

      function create() {
        var out = new Float32Array(3);
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        return out;
      }

      /***/
    }),
/* 69 */
/***/ (function (module, exports) {

      module.exports = fromValues;
      /**
       * Creates a new vec3 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @returns {vec3} a new 3D vector
       */

      function fromValues(x, y, z) {
        var out = new Float32Array(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }

      /***/
    }),
/* 70 */
/***/ (function (module, exports) {

      module.exports = normalize;
      /**
       * Normalize a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to normalize
       * @returns {vec3} out
       */

      function normalize(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2];
        var len = x * x + y * y + z * z;

        if (len > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len = 1 / Math.sqrt(len);
          out[0] = a[0] * len;
          out[1] = a[1] * len;
          out[2] = a[2] * len;
        }

        return out;
      }

      /***/
    }),
/* 71 */
/***/ (function (module, exports) {

      module.exports = dot;
      /**
       * Calculates the dot product of two vec3's
       *
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {Number} dot product of a and b
       */

      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }

      /***/
    }),
/* 72 */
/***/ (function (module, exports) {

      module.exports = subtract;
      /**
       * Subtracts vector b from vector a
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
      }

      /***/
    }),
/* 73 */
/***/ (function (module, exports) {

      module.exports = multiply;
      /**
       * Multiplies two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
      }

      /***/
    }),
/* 74 */
/***/ (function (module, exports) {

      module.exports = divide;
      /**
       * Divides two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
      }

      /***/
    }),
/* 75 */
/***/ (function (module, exports) {

      module.exports = distance;
      /**
       * Calculates the euclidian distance between two vec3's
       *
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {Number} distance between a and b
       */

      function distance(a, b) {
        var x = b[0] - a[0],
          y = b[1] - a[1],
          z = b[2] - a[2];
        return Math.sqrt(x * x + y * y + z * z);
      }

      /***/
    }),
/* 76 */
/***/ (function (module, exports) {

      module.exports = squaredDistance;
      /**
       * Calculates the squared euclidian distance between two vec3's
       *
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {Number} squared distance between a and b
       */

      function squaredDistance(a, b) {
        var x = b[0] - a[0],
          y = b[1] - a[1],
          z = b[2] - a[2];
        return x * x + y * y + z * z;
      }

      /***/
    }),
/* 77 */
/***/ (function (module, exports) {

      module.exports = length;
      /**
       * Calculates the length of a vec3
       *
       * @param {vec3} a vector to calculate length of
       * @returns {Number} length of a
       */

      function length(a) {
        var x = a[0],
          y = a[1],
          z = a[2];
        return Math.sqrt(x * x + y * y + z * z);
      }

      /***/
    }),
/* 78 */
/***/ (function (module, exports) {

      module.exports = squaredLength;
      /**
       * Calculates the squared length of a vec3
       *
       * @param {vec3} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */

      function squaredLength(a) {
        var x = a[0],
          y = a[1],
          z = a[2];
        return x * x + y * y + z * z;
      }

      /***/
    }),
/* 79 */
/***/ (function (module, exports, __webpack_require__) {

      var getNative = __webpack_require__(43),
        root = __webpack_require__(20);
      /* Built-in method references that are verified to be native. */


      var Map = getNative(root, 'Map');
      module.exports = Map;

      /***/
    }),
/* 80 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {/** Detect free variable `global` from Node.js. */
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
        module.exports = freeGlobal;
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12)))

      /***/
    }),
/* 81 */
/***/ (function (module, exports, __webpack_require__) {

      var mapCacheClear = __webpack_require__(198),
        mapCacheDelete = __webpack_require__(205),
        mapCacheGet = __webpack_require__(207),
        mapCacheHas = __webpack_require__(208),
        mapCacheSet = __webpack_require__(209);
      /**
       * Creates a map cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */


      function MapCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;
        this.clear();

        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      } // Add methods to `MapCache`.


      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype['delete'] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;

      /***/
    }),
/* 82 */
/***/ (function (module, exports, __webpack_require__) {

      var baseAssignValue = __webpack_require__(45),
        eq = __webpack_require__(31);
      /**
       * This function is like `assignValue` except that it doesn't assign
       * `undefined` values.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */


      function assignMergeValue(object, key, value) {
        if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }

      module.exports = assignMergeValue;

      /***/
    }),
/* 83 */
/***/ (function (module, exports, __webpack_require__) {

      var getNative = __webpack_require__(43);

      var defineProperty = function () {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) { }
      }();

      module.exports = defineProperty;

      /***/
    }),
/* 84 */
/***/ (function (module, exports, __webpack_require__) {

      var overArg = __webpack_require__(220);
      /** Built-in value references. */


      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;

      /***/
    }),
/* 85 */
/***/ (function (module, exports) {

      /** Used for built-in method references. */
      var objectProto = Object.prototype;
      /**
       * Checks if `value` is likely a prototype object.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
       */

      function isPrototype(value) {
        var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
        return value === proto;
      }

      module.exports = isPrototype;

      /***/
    }),
/* 86 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (module) {
        var root = __webpack_require__(20),
          stubFalse = __webpack_require__(223);
        /** Detect free variable `exports`. */


        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */

        var Buffer = moduleExports ? root.Buffer : undefined;
        /* Built-in method references for those with the same name as other `lodash` methods. */

        var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */

        var isBuffer = nativeIsBuffer || stubFalse;
        module.exports = isBuffer;
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(46)(module)))

      /***/
    }),
/* 87 */
/***/ (function (module, exports, __webpack_require__) {

      var baseIsTypedArray = __webpack_require__(225),
        baseUnary = __webpack_require__(226),
        nodeUtil = __webpack_require__(227);
      /* Node.js helper references. */


      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */

      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;

      /***/
    }),
/* 88 */
/***/ (function (module, exports) {

      /**
       * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function safeGet(object, key) {
        if (key === 'constructor' && typeof object[key] === 'function') {
          return;
        }

        if (key == '__proto__') {
          return;
        }

        return object[key];
      }

      module.exports = safeGet;

      /***/
    }),
/* 89 */
/***/ (function (module, exports, __webpack_require__) {

      var baseAssignValue = __webpack_require__(45),
        eq = __webpack_require__(31);
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Assigns `value` to `key` of `object` if the existing value is not equivalent
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */

      function assignValue(object, key, value) {
        var objValue = object[key];

        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }

      module.exports = assignValue;

      /***/
    }),
/* 90 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayLikeKeys = __webpack_require__(230),
        baseKeysIn = __webpack_require__(232),
        isArrayLike = __webpack_require__(47);
      /**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */


      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }

      module.exports = keysIn;

      /***/
    }),
/* 91 */
/***/ (function (module, exports) {

      /**
       * This method returns the first argument it receives.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'a': 1 };
       *
       * console.log(_.identity(object) === object);
       * // => true
       */
      function identity(value) {
        return value;
      }

      module.exports = identity;

      /***/
    }),
/* 92 */
/***/ (function (module, exports, __webpack_require__) {

      var apply = __webpack_require__(236);
      /* Built-in method references for those with the same name as other `lodash` methods. */


      var nativeMax = Math.max;
      /**
       * A specialized version of `baseRest` which transforms the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @param {Function} transform The rest array transform.
       * @returns {Function} Returns the new function.
       */

      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? func.length - 1 : start, 0);
        return function () {
          var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

          while (++index < length) {
            array[index] = args[start + index];
          }

          index = -1;
          var otherArgs = Array(start + 1);

          while (++index < start) {
            otherArgs[index] = args[index];
          }

          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }

      module.exports = overRest;

      /***/
    }),
/* 93 */
/***/ (function (module, exports, __webpack_require__) {

      var baseSetToString = __webpack_require__(237),
        shortOut = __webpack_require__(239);
      /**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */


      var setToString = shortOut(baseSetToString);
      module.exports = setToString;

      /***/
    }),
/* 94 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (global, process) {// Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        /*<replacement>*/

        var pna = __webpack_require__(38);
        /*</replacement>*/


        module.exports = Readable;
        /*<replacement>*/

        var isArray = __webpack_require__(292);
        /*</replacement>*/

        /*<replacement>*/


        var Duplex;
        /*</replacement>*/

        Readable.ReadableState = ReadableState;
        /*<replacement>*/

        var EE = __webpack_require__(52).EventEmitter;

        var EElistenerCount = function (emitter, type) {
          return emitter.listeners(type).length;
        };
        /*</replacement>*/

        /*<replacement>*/


        var Stream = __webpack_require__(95);
        /*</replacement>*/

        /*<replacement>*/


        var Buffer = __webpack_require__(54).Buffer;

        var OurUint8Array = global.Uint8Array || function () { };

        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }

        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }
        /*</replacement>*/

        /*<replacement>*/


        var util = Object.create(__webpack_require__(27));
        util.inherits = __webpack_require__(22);
        /*</replacement>*/

        /*<replacement>*/

        var debugUtil = __webpack_require__(293);

        var debug = void 0;

        if (debugUtil && debugUtil.debuglog) {
          debug = debugUtil.debuglog('stream');
        } else {
          debug = function () { };
        }
        /*</replacement>*/


        var BufferList = __webpack_require__(294);

        var destroyImpl = __webpack_require__(96);

        var StringDecoder;
        util.inherits(Readable, Stream);
        var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

        function prependListener(emitter, event, fn) {
          // Sadly this is not cacheable as some libraries bundle their own
          // event emitter implementation with them.
          if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
          // userland ones.  NEVER DO THIS. This is here only because this code needs
          // to continue to work with older versions of Node.js that do not include
          // the prependListener() method. The goal is to eventually remove this hack.

          if (!emitter._events || !emitter._events[event]) emitter.on(event, fn); else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn); else emitter._events[event] = [fn, emitter._events[event]];
        }

        function ReadableState(options, stream) {
          Duplex = Duplex || __webpack_require__(16);
          options = options || {}; // Duplex streams are both readable and writable, but share
          // the same options object.
          // However, some cases require setting options to different
          // values for the readable and the writable sides of the duplex stream.
          // These options can be provided separately as readableXXX and writableXXX.

          var isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
          // make all the buffer merging and length checks go away

          this.objectMode = !!options.objectMode;
          if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
          // Note: 0 is a valid value, means "don't call _read preemptively ever"

          var hwm = options.highWaterMark;
          var readableHwm = options.readableHighWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          if (hwm || hwm === 0) this.highWaterMark = hwm; else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm; else this.highWaterMark = defaultHwm; // cast to ints.

          this.highWaterMark = Math.floor(this.highWaterMark); // A linked list is used to store data chunks instead of an array because the
          // linked list can remove elements from the beginning faster than
          // array.shift()

          this.buffer = new BufferList();
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = null;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
          // immediately, or on a later tick.  We set this to true at first, because
          // any actions that shouldn't happen until "later" should generally also
          // not happen before the first read call.

          this.sync = true; // whenever we return null, then we set a flag to say
          // that we're awaiting a 'readable' event emission.

          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.resumeScheduled = false; // has it been destroyed

          this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
          // encoding is 'binary' so we have to make this configurable.
          // Everything else in the universe uses 'utf8', though.

          this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

          this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

          this.readingMore = false;
          this.decoder = null;
          this.encoding = null;

          if (options.encoding) {
            if (!StringDecoder) StringDecoder = __webpack_require__(97).StringDecoder;
            this.decoder = new StringDecoder(options.encoding);
            this.encoding = options.encoding;
          }
        }

        function Readable(options) {
          Duplex = Duplex || __webpack_require__(16);
          if (!(this instanceof Readable)) return new Readable(options);
          this._readableState = new ReadableState(options, this); // legacy

          this.readable = true;

          if (options) {
            if (typeof options.read === 'function') this._read = options.read;
            if (typeof options.destroy === 'function') this._destroy = options.destroy;
          }

          Stream.call(this);
        }

        Object.defineProperty(Readable.prototype, 'destroyed', {
          get: function () {
            if (this._readableState === undefined) {
              return false;
            }

            return this._readableState.destroyed;
          },
          set: function (value) {
            // we ignore the value if the stream
            // has not been initialized yet
            if (!this._readableState) {
              return;
            } // backward compatibility, the user is explicitly
            // managing destroyed


            this._readableState.destroyed = value;
          }
        });
        Readable.prototype.destroy = destroyImpl.destroy;
        Readable.prototype._undestroy = destroyImpl.undestroy;

        Readable.prototype._destroy = function (err, cb) {
          this.push(null);
          cb(err);
        }; // Manually shove something into the read() buffer.
        // This returns true if the highWaterMark has not been hit yet,
        // similar to how Writable.write() returns true if you should
        // write() some more.


        Readable.prototype.push = function (chunk, encoding) {
          var state = this._readableState;
          var skipChunkCheck;

          if (!state.objectMode) {
            if (typeof chunk === 'string') {
              encoding = encoding || state.defaultEncoding;

              if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
              }

              skipChunkCheck = true;
            }
          } else {
            skipChunkCheck = true;
          }

          return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
        }; // Unshift should *always* be something directly out of read()


        Readable.prototype.unshift = function (chunk) {
          return readableAddChunk(this, chunk, null, true, false);
        };

        function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
          var state = stream._readableState;

          if (chunk === null) {
            state.reading = false;
            onEofChunk(stream, state);
          } else {
            var er;
            if (!skipChunkCheck) er = chunkInvalid(state, chunk);

            if (er) {
              stream.emit('error', er);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
              }

              if (addToFront) {
                if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event')); else addChunk(stream, state, chunk, true);
              } else if (state.ended) {
                stream.emit('error', new Error('stream.push() after EOF'));
              } else {
                state.reading = false;

                if (state.decoder && !encoding) {
                  chunk = state.decoder.write(chunk);
                  if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false); else maybeReadMore(stream, state);
                } else {
                  addChunk(stream, state, chunk, false);
                }
              }
            } else if (!addToFront) {
              state.reading = false;
            }
          }

          return needMoreData(state);
        }

        function addChunk(stream, state, chunk, addToFront) {
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            // update the buffer info.
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk); else state.buffer.push(chunk);
            if (state.needReadable) emitReadable(stream);
          }

          maybeReadMore(stream, state);
        }

        function chunkInvalid(state, chunk) {
          var er;

          if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
            er = new TypeError('Invalid non-string/buffer chunk');
          }

          return er;
        } // if it's past the high water mark, we can push in some more.
        // Also, if we have no data yet, we can stand some
        // more bytes.  This is to work around cases where hwm=0,
        // such as the repl.  Also, if the push() triggered a
        // readable event, and the user called read(largeNumber) such that
        // needReadable was set, then we ought to push more, so that another
        // 'readable' event will be triggered.


        function needMoreData(state) {
          return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
        }

        Readable.prototype.isPaused = function () {
          return this._readableState.flowing === false;
        }; // backwards compatibility.


        Readable.prototype.setEncoding = function (enc) {
          if (!StringDecoder) StringDecoder = __webpack_require__(97).StringDecoder;
          this._readableState.decoder = new StringDecoder(enc);
          this._readableState.encoding = enc;
          return this;
        }; // Don't raise the hwm > 8MB


        var MAX_HWM = 0x800000;

        function computeNewHighWaterMark(n) {
          if (n >= MAX_HWM) {
            n = MAX_HWM;
          } else {
            // Get the next highest power of 2 to prevent increasing hwm excessively in
            // tiny amounts
            n--;
            n |= n >>> 1;
            n |= n >>> 2;
            n |= n >>> 4;
            n |= n >>> 8;
            n |= n >>> 16;
            n++;
          }

          return n;
        } // This function is designed to be inlinable, so please take care when making
        // changes to the function body.


        function howMuchToRead(n, state) {
          if (n <= 0 || state.length === 0 && state.ended) return 0;
          if (state.objectMode) return 1;

          if (n !== n) {
            // Only flow one buffer at a time
            if (state.flowing && state.length) return state.buffer.head.data.length; else return state.length;
          } // If we're asking for more than the current hwm, then raise the hwm.


          if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
          if (n <= state.length) return n; // Don't have enough

          if (!state.ended) {
            state.needReadable = true;
            return 0;
          }

          return state.length;
        } // you can override either this method, or the async _read(n) below.


        Readable.prototype.read = function (n) {
          debug('read', n);
          n = parseInt(n, 10);
          var state = this._readableState;
          var nOrig = n;
          if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
          // already have a bunch of data in the buffer, then just trigger
          // the 'readable' event and move on.

          if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
            debug('read: emitReadable', state.length, state.ended);
            if (state.length === 0 && state.ended) endReadable(this); else emitReadable(this);
            return null;
          }

          n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

          if (n === 0 && state.ended) {
            if (state.length === 0) endReadable(this);
            return null;
          } // All the actual chunk generation logic needs to be
          // *below* the call to _read.  The reason is that in certain
          // synthetic stream cases, such as passthrough streams, _read
          // may be a completely synchronous operation which may change
          // the state of the read buffer, providing enough data when
          // before there was *not* enough.
          //
          // So, the steps are:
          // 1. Figure out what the state of things will be after we do
          // a read from the buffer.
          //
          // 2. If that resulting state will trigger a _read, then call _read.
          // Note that this may be asynchronous, or synchronous.  Yes, it is
          // deeply ugly to write APIs this way, but that still doesn't mean
          // that the Readable class should behave improperly, as streams are
          // designed to be sync/async agnostic.
          // Take note if the _read call is sync or async (ie, if the read call
          // has returned yet), so that we know whether or not it's safe to emit
          // 'readable' etc.
          //
          // 3. Actually pull the requested chunks out of the buffer and return.
          // if we need a readable event, then we need to do some reading.


          var doRead = state.needReadable;
          debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

          if (state.length === 0 || state.length - n < state.highWaterMark) {
            doRead = true;
            debug('length less than watermark', doRead);
          } // however, if we've ended, then there's no point, and if we're already
          // reading, then it's unnecessary.


          if (state.ended || state.reading) {
            doRead = false;
            debug('reading or ended', doRead);
          } else if (doRead) {
            debug('do read');
            state.reading = true;
            state.sync = true; // if the length is currently zero, then we *need* a readable event.

            if (state.length === 0) state.needReadable = true; // call internal read method

            this._read(state.highWaterMark);

            state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
            // and we need to re-evaluate how much data we can return to the user.

            if (!state.reading) n = howMuchToRead(nOrig, state);
          }

          var ret;
          if (n > 0) ret = fromList(n, state); else ret = null;

          if (ret === null) {
            state.needReadable = true;
            n = 0;
          } else {
            state.length -= n;
          }

          if (state.length === 0) {
            // If we have nothing in the buffer, then we want to know
            // as soon as we *do* get something into the buffer.
            if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

            if (nOrig !== n && state.ended) endReadable(this);
          }

          if (ret !== null) this.emit('data', ret);
          return ret;
        };

        function onEofChunk(stream, state) {
          if (state.ended) return;

          if (state.decoder) {
            var chunk = state.decoder.end();

            if (chunk && chunk.length) {
              state.buffer.push(chunk);
              state.length += state.objectMode ? 1 : chunk.length;
            }
          }

          state.ended = true; // emit 'readable' now to make sure it gets picked up.

          emitReadable(stream);
        } // Don't emit readable right away in sync mode, because this can trigger
        // another read() call => stack overflow.  This way, it might trigger
        // a nextTick recursion warning, but that's not so bad.


        function emitReadable(stream) {
          var state = stream._readableState;
          state.needReadable = false;

          if (!state.emittedReadable) {
            debug('emitReadable', state.flowing);
            state.emittedReadable = true;
            if (state.sync) pna.nextTick(emitReadable_, stream); else emitReadable_(stream);
          }
        }

        function emitReadable_(stream) {
          debug('emit readable');
          stream.emit('readable');
          flow(stream);
        } // at this point, the user has presumably seen the 'readable' event,
        // and called read() to consume some data.  that may have triggered
        // in turn another _read(n) call, in which case reading = true if
        // it's in progress.
        // However, if we're not ended, or reading, and the length < hwm,
        // then go ahead and try to read some more preemptively.


        function maybeReadMore(stream, state) {
          if (!state.readingMore) {
            state.readingMore = true;
            pna.nextTick(maybeReadMore_, stream, state);
          }
        }

        function maybeReadMore_(stream, state) {
          var len = state.length;

          while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
            debug('maybeReadMore read 0');
            stream.read(0);
            if (len === state.length) // didn't get any data, stop spinning.
              break; else len = state.length;
          }

          state.readingMore = false;
        } // abstract method.  to be overridden in specific implementation classes.
        // call cb(er, data) where data is <= n in length.
        // for virtual (non-string, non-buffer) streams, "length" is somewhat
        // arbitrary, and perhaps not very meaningful.


        Readable.prototype._read = function (n) {
          this.emit('error', new Error('_read() is not implemented'));
        };

        Readable.prototype.pipe = function (dest, pipeOpts) {
          var src = this;
          var state = this._readableState;

          switch (state.pipesCount) {
            case 0:
              state.pipes = dest;
              break;

            case 1:
              state.pipes = [state.pipes, dest];
              break;

            default:
              state.pipes.push(dest);
              break;
          }

          state.pipesCount += 1;
          debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
          var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
          var endFn = doEnd ? onend : unpipe;
          if (state.endEmitted) pna.nextTick(endFn); else src.once('end', endFn);
          dest.on('unpipe', onunpipe);

          function onunpipe(readable, unpipeInfo) {
            debug('onunpipe');

            if (readable === src) {
              if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
              }
            }
          }

          function onend() {
            debug('onend');
            dest.end();
          } // when the dest drains, it reduces the awaitDrain counter
          // on the source.  This would be more elegant with a .once()
          // handler in flow(), but adding and removing repeatedly is
          // too slow.


          var ondrain = pipeOnDrain(src);
          dest.on('drain', ondrain);
          var cleanedUp = false;

          function cleanup() {
            debug('cleanup'); // cleanup event handlers once the pipe is broken

            dest.removeListener('close', onclose);
            dest.removeListener('finish', onfinish);
            dest.removeListener('drain', ondrain);
            dest.removeListener('error', onerror);
            dest.removeListener('unpipe', onunpipe);
            src.removeListener('end', onend);
            src.removeListener('end', unpipe);
            src.removeListener('data', ondata);
            cleanedUp = true; // if the reader is waiting for a drain event from this
            // specific writer, then it would cause it to never start
            // flowing again.
            // So, if this is awaiting a drain, then we just call it now.
            // If we don't know, then assume that we are waiting for one.

            if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
          } // If the user pushes more data while we're writing to dest then we'll end up
          // in ondata again. However, we only want to increase awaitDrain once because
          // dest will only emit one 'drain' event for the multiple writes.
          // => Introduce a guard on increasing awaitDrain.


          var increasedAwaitDrain = false;
          src.on('data', ondata);

          function ondata(chunk) {
            debug('ondata');
            increasedAwaitDrain = false;
            var ret = dest.write(chunk);

            if (false === ret && !increasedAwaitDrain) {
              // If the user unpiped during `dest.write()`, it is possible
              // to get stuck in a permanently paused state if that write
              // also returned false.
              // => Check whether `dest` is still a piping destination.
              if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', src._readableState.awaitDrain);
                src._readableState.awaitDrain++;
                increasedAwaitDrain = true;
              }

              src.pause();
            }
          } // if the dest has an error, then stop piping into it.
          // however, don't suppress the throwing behavior for this.


          function onerror(er) {
            debug('onerror', er);
            unpipe();
            dest.removeListener('error', onerror);
            if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
          } // Make sure our error handler is attached before userland ones.


          prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

          function onclose() {
            dest.removeListener('finish', onfinish);
            unpipe();
          }

          dest.once('close', onclose);

          function onfinish() {
            debug('onfinish');
            dest.removeListener('close', onclose);
            unpipe();
          }

          dest.once('finish', onfinish);

          function unpipe() {
            debug('unpipe');
            src.unpipe(dest);
          } // tell the dest that it's being piped to


          dest.emit('pipe', src); // start the flow if it hasn't been started already.

          if (!state.flowing) {
            debug('pipe resume');
            src.resume();
          }

          return dest;
        };

        function pipeOnDrain(src) {
          return function () {
            var state = src._readableState;
            debug('pipeOnDrain', state.awaitDrain);
            if (state.awaitDrain) state.awaitDrain--;

            if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
              state.flowing = true;
              flow(src);
            }
          };
        }

        Readable.prototype.unpipe = function (dest) {
          var state = this._readableState;
          var unpipeInfo = {
            hasUnpiped: false
          }; // if we're not piping anywhere, then do nothing.

          if (state.pipesCount === 0) return this; // just one destination.  most common case.

          if (state.pipesCount === 1) {
            // passed in one, but it's not the right one.
            if (dest && dest !== state.pipes) return this;
            if (!dest) dest = state.pipes; // got a match.

            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;
            if (dest) dest.emit('unpipe', this, unpipeInfo);
            return this;
          } // slow case. multiple pipe destinations.


          if (!dest) {
            // remove all.
            var dests = state.pipes;
            var len = state.pipesCount;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;

            for (var i = 0; i < len; i++) {
              dests[i].emit('unpipe', this, unpipeInfo);
            }

            return this;
          } // try to find the right one.


          var index = indexOf(state.pipes, dest);
          if (index === -1) return this;
          state.pipes.splice(index, 1);
          state.pipesCount -= 1;
          if (state.pipesCount === 1) state.pipes = state.pipes[0];
          dest.emit('unpipe', this, unpipeInfo);
          return this;
        }; // set up data events if they are asked for
        // Ensure readable listeners eventually get something


        Readable.prototype.on = function (ev, fn) {
          var res = Stream.prototype.on.call(this, ev, fn);

          if (ev === 'data') {
            // Start flowing on next tick if stream isn't explicitly paused
            if (this._readableState.flowing !== false) this.resume();
          } else if (ev === 'readable') {
            var state = this._readableState;

            if (!state.endEmitted && !state.readableListening) {
              state.readableListening = state.needReadable = true;
              state.emittedReadable = false;

              if (!state.reading) {
                pna.nextTick(nReadingNextTick, this);
              } else if (state.length) {
                emitReadable(this);
              }
            }
          }

          return res;
        };

        Readable.prototype.addListener = Readable.prototype.on;

        function nReadingNextTick(self) {
          debug('readable nexttick read 0');
          self.read(0);
        } // pause() and resume() are remnants of the legacy readable stream API
        // If the user uses them, then switch into old mode.


        Readable.prototype.resume = function () {
          var state = this._readableState;

          if (!state.flowing) {
            debug('resume');
            state.flowing = true;
            resume(this, state);
          }

          return this;
        };

        function resume(stream, state) {
          if (!state.resumeScheduled) {
            state.resumeScheduled = true;
            pna.nextTick(resume_, stream, state);
          }
        }

        function resume_(stream, state) {
          if (!state.reading) {
            debug('resume read 0');
            stream.read(0);
          }

          state.resumeScheduled = false;
          state.awaitDrain = 0;
          stream.emit('resume');
          flow(stream);
          if (state.flowing && !state.reading) stream.read(0);
        }

        Readable.prototype.pause = function () {
          debug('call pause flowing=%j', this._readableState.flowing);

          if (false !== this._readableState.flowing) {
            debug('pause');
            this._readableState.flowing = false;
            this.emit('pause');
          }

          return this;
        };

        function flow(stream) {
          var state = stream._readableState;
          debug('flow', state.flowing);

          while (state.flowing && stream.read() !== null) { }
        } // wrap an old-style stream as the async data source.
        // This is *not* part of the readable stream interface.
        // It is an ugly unfortunate mess of history.


        Readable.prototype.wrap = function (stream) {
          var _this = this;

          var state = this._readableState;
          var paused = false;
          stream.on('end', function () {
            debug('wrapped end');

            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) _this.push(chunk);
            }

            _this.push(null);
          });
          stream.on('data', function (chunk) {
            debug('wrapped data');
            if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

            if (state.objectMode && (chunk === null || chunk === undefined)) return; else if (!state.objectMode && (!chunk || !chunk.length)) return;

            var ret = _this.push(chunk);

            if (!ret) {
              paused = true;
              stream.pause();
            }
          }); // proxy all the other methods.
          // important when wrapping filters and duplexes.

          for (var i in stream) {
            if (this[i] === undefined && typeof stream[i] === 'function') {
              this[i] = function (method) {
                return function () {
                  return stream[method].apply(stream, arguments);
                };
              }(i);
            }
          } // proxy certain important events.


          for (var n = 0; n < kProxyEvents.length; n++) {
            stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
          } // when we try to consume some more bytes, simply unpause the
          // underlying stream.


          this._read = function (n) {
            debug('wrapped _read', n);

            if (paused) {
              paused = false;
              stream.resume();
            }
          };

          return this;
        };

        Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
          // making it explicit this property is not enumerable
          // because otherwise some prototype manipulation in
          // userland will fail
          enumerable: false,
          get: function () {
            return this._readableState.highWaterMark;
          }
        }); // exposed for testing purposes only.

        Readable._fromList = fromList; // Pluck off n bytes from an array of buffers.
        // Length is the combined lengths of all the buffers in the list.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.

        function fromList(n, state) {
          // nothing buffered
          if (state.length === 0) return null;
          var ret;
          if (state.objectMode) ret = state.buffer.shift(); else if (!n || n >= state.length) {
            // read it all, truncate the list
            if (state.decoder) ret = state.buffer.join(''); else if (state.buffer.length === 1) ret = state.buffer.head.data; else ret = state.buffer.concat(state.length);
            state.buffer.clear();
          } else {
            // read part of list
            ret = fromListPartial(n, state.buffer, state.decoder);
          }
          return ret;
        } // Extracts only enough buffered data to satisfy the amount requested.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.


        function fromListPartial(n, list, hasStrings) {
          var ret;

          if (n < list.head.data.length) {
            // slice is the same for buffers and strings
            ret = list.head.data.slice(0, n);
            list.head.data = list.head.data.slice(n);
          } else if (n === list.head.data.length) {
            // first chunk is a perfect match
            ret = list.shift();
          } else {
            // result spans more than one buffer
            ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
          }

          return ret;
        } // Copies a specified amount of characters from the list of buffered data
        // chunks.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.


        function copyFromBufferString(n, list) {
          var p = list.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;

          while (p = p.next) {
            var str = p.data;
            var nb = n > str.length ? str.length : n;
            if (nb === str.length) ret += str; else ret += str.slice(0, n);
            n -= nb;

            if (n === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next; else list.head = list.tail = null;
              } else {
                list.head = p;
                p.data = str.slice(nb);
              }

              break;
            }

            ++c;
          }

          list.length -= c;
          return ret;
        } // Copies a specified amount of bytes from the list of buffered data chunks.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.


        function copyFromBuffer(n, list) {
          var ret = Buffer.allocUnsafe(n);
          var p = list.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;

          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;

            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next; else list.head = list.tail = null;
              } else {
                list.head = p;
                p.data = buf.slice(nb);
              }

              break;
            }

            ++c;
          }

          list.length -= c;
          return ret;
        }

        function endReadable(stream) {
          var state = stream._readableState; // If we get here before consuming all the bytes, then that is a
          // bug in node.  Should never happen.

          if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

          if (!state.endEmitted) {
            state.ended = true;
            pna.nextTick(endReadableNT, state, stream);
          }
        }

        function endReadableNT(state, stream) {
          // Check that we didn't get one last unshift.
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit('end');
          }
        }

        function indexOf(xs, x) {
          for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) return i;
          }

          return -1;
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12), __webpack_require__(15)))

      /***/
    }),
/* 95 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(52).EventEmitter;

      /***/
    }),
/* 96 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      /*<replacement>*/

      var pna = __webpack_require__(38);
      /*</replacement>*/
      // undocumented cb() API, needed for core, not for public API


      function destroy(err, cb) {
        var _this = this;

        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;

        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
            pna.nextTick(emitErrorNT, this, err);
          }

          return this;
        } // we set destroyed to true before firing error callbacks in order
        // to make it re-entrance safe in case destroy() is called within callbacks


        if (this._readableState) {
          this._readableState.destroyed = true;
        } // if this is a duplex stream mark the writable part as destroyed as well


        if (this._writableState) {
          this._writableState.destroyed = true;
        }

        this._destroy(err || null, function (err) {
          if (!cb && err) {
            pna.nextTick(emitErrorNT, _this, err);

            if (_this._writableState) {
              _this._writableState.errorEmitted = true;
            }
          } else if (cb) {
            cb(err);
          }
        });

        return this;
      }

      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }

        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }

      function emitErrorNT(self, err) {
        self.emit('error', err);
      }

      module.exports = {
        destroy: destroy,
        undestroy: undestroy
      };

      /***/
    }),
/* 97 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      /*<replacement>*/

      var Buffer = __webpack_require__(299).Buffer;
      /*</replacement>*/


      var isEncoding = Buffer.isEncoding || function (encoding) {
        encoding = '' + encoding;

        switch (encoding && encoding.toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
          case 'raw':
            return true;

          default:
            return false;
        }
      };

      function _normalizeEncoding(enc) {
        if (!enc) return 'utf8';
        var retried;

        while (true) {
          switch (enc) {
            case 'utf8':
            case 'utf-8':
              return 'utf8';

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 'utf16le';

            case 'latin1':
            case 'binary':
              return 'latin1';

            case 'base64':
            case 'ascii':
            case 'hex':
              return enc;

            default:
              if (retried) return; // undefined

              enc = ('' + enc).toLowerCase();
              retried = true;
          }
        }
      }

      ; // Do not cache `Buffer.isEncoding` when checking encoding names as some
      // modules monkey-patch it to support additional encodings

      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);

        if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
        return nenc || enc;
      } // StringDecoder provides an interface for efficiently splitting a series of
      // buffers into a series of JS strings without breaking apart multi-byte
      // characters.


      exports.StringDecoder = StringDecoder;

      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;

        switch (this.encoding) {
          case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;

          case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;

          case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;

          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }

        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer.allocUnsafe(nb);
      }

      StringDecoder.prototype.write = function (buf) {
        if (buf.length === 0) return '';
        var r;
        var i;

        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === undefined) return '';
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }

        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || '';
      };

      StringDecoder.prototype.end = utf8End; // Returns only complete characters in a Buffer

      StringDecoder.prototype.text = utf8Text; // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer

      StringDecoder.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }

        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      }; // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
      // continuation byte. If an invalid byte is detected, -2 is returned.


      function utf8CheckByte(byte) {
        if (byte <= 0x7F) return 0; else if (byte >> 5 === 0x06) return 2; else if (byte >> 4 === 0x0E) return 3; else if (byte >> 3 === 0x1E) return 4;
        return byte >> 6 === 0x02 ? -1 : -2;
      } // Checks at most 3 bytes at the end of a Buffer in order to detect an
      // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
      // needed to complete the UTF-8 character (if applicable) are returned.


      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);

        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 1;
          return nb;
        }

        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);

        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 2;
          return nb;
        }

        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);

        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2) nb = 0; else self.lastNeed = nb - 3;
          }

          return nb;
        }

        return 0;
      } // Validates as many continuation bytes for a multi-byte UTF-8 character as
      // needed or are available. If we see a non-continuation byte where we expect
      // one, we "replace" the validated continuation bytes we've seen so far with
      // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
      // behavior. The continuation byte check is included three times in the case
      // where all of the continuation bytes for a character exist in the same buffer.
      // It is also done this way as a slight performance increase instead of using a
      // loop.


      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 0xC0) !== 0x80) {
          self.lastNeed = 0;
          return '\ufffd';
        }

        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
          }

          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
              self.lastNeed = 2;
              return '\ufffd';
            }
          }
        }
      } // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.


      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== undefined) return r;

        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }

        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      } // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
      // partial character, the character's bytes are buffered until the required
      // number of bytes are available.


      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString('utf8', i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString('utf8', i, end);
      } // For UTF-8, a replacement character is added when ending on a partial
      // character.


      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + '\ufffd';
        return r;
      } // UTF-16LE typically needs two bytes per character, but even if we have an even
      // number of bytes available, we need to check if we end on a leading/high
      // surrogate. In that case, we need to wait for the next two bytes in order to
      // decode the last character properly.


      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString('utf16le', i);

          if (r) {
            var c = r.charCodeAt(r.length - 1);

            if (c >= 0xD800 && c <= 0xDBFF) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }

          return r;
        }

        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString('utf16le', i, buf.length - 1);
      } // For UTF-16LE we do not explicitly append special replacement characters if we
      // end on a partial character, we simply let v8 handle that.


      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';

        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString('utf16le', 0, end);
        }

        return r;
      }

      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString('base64', i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;

        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }

        return buf.toString('base64', i, buf.length - n);
      }

      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
        return r;
      } // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)


      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }

      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : '';
      }

      /***/
    }),
/* 98 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      // a transform stream is a readable/writable stream where you do
      // something with the data.  Sometimes it's called a "filter",
      // but that's not a great name for it, since that implies a thing where
      // some bits pass through, and others are simply ignored.  (That would
      // be a valid example of a transform, of course.)
      //
      // While the output is causally related to the input, it's not a
      // necessarily symmetric or synchronous transformation.  For example,
      // a zlib stream might take multiple plain-text writes(), and then
      // emit a single compressed chunk some time in the future.
      //
      // Here's how this works:
      //
      // The Transform stream has all the aspects of the readable and writable
      // stream classes.  When you write(chunk), that calls _write(chunk,cb)
      // internally, and returns false if there's a lot of pending writes
      // buffered up.  When you call read(), that calls _read(n) until
      // there's enough pending readable data buffered up.
      //
      // In a transform stream, the written data is placed in a buffer.  When
      // _read(n) is called, it transforms the queued up data, calling the
      // buffered _write cb's as it consumes chunks.  If consuming a single
      // written chunk would result in multiple output chunks, then the first
      // outputted bit calls the readcb, and subsequent chunks just go into
      // the read buffer, and will cause it to emit 'readable' if necessary.
      //
      // This way, back-pressure is actually determined by the reading side,
      // since _read has to be called to start processing a new chunk.  However,
      // a pathological inflate type of transform can cause excessive buffering
      // here.  For example, imagine a stream where every byte of input is
      // interpreted as an integer from 0-255, and then results in that many
      // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
      // 1kb of data being output.  In this case, you could write a very small
      // amount of input, and end up with a very large amount of output.  In
      // such a pathological inflating mechanism, there'd be no way to tell
      // the system to stop doing the transform.  A single 4MB write could
      // cause the system to run out of memory.
      //
      // However, even in such a pathological case, only a single written chunk
      // would be consumed, and then the rest would wait (un-transformed) until
      // the results of the previous transformed chunk were consumed.


      module.exports = Transform;

      var Duplex = __webpack_require__(16);
      /*<replacement>*/


      var util = Object.create(__webpack_require__(27));
      util.inherits = __webpack_require__(22);
      /*</replacement>*/

      util.inherits(Transform, Duplex);

      function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
        var cb = ts.writecb;

        if (!cb) {
          return this.emit('error', new Error('write callback called multiple times'));
        }

        ts.writechunk = null;
        ts.writecb = null;
        if (data != null) // single equals check for both `null` and `undefined`
          this.push(data);
        cb(er);
        var rs = this._readableState;
        rs.reading = false;

        if (rs.needReadable || rs.length < rs.highWaterMark) {
          this._read(rs.highWaterMark);
        }
      }

      function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
        Duplex.call(this, options);
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null
        }; // start out asking for a readable event once data is transformed.

        this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
        // that Readable wants before the first _read call, so unset the
        // sync guard flag.

        this._readableState.sync = false;

        if (options) {
          if (typeof options.transform === 'function') this._transform = options.transform;
          if (typeof options.flush === 'function') this._flush = options.flush;
        } // When the writable side finishes, then flush out anything remaining.


        this.on('prefinish', prefinish);
      }

      function prefinish() {
        var _this = this;

        if (typeof this._flush === 'function') {
          this._flush(function (er, data) {
            done(_this, er, data);
          });
        } else {
          done(this, null, null);
        }
      }

      Transform.prototype.push = function (chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      }; // This is the part where you do stuff!
      // override this function in implementation classes.
      // 'chunk' is an input chunk.
      //
      // Call `push(newChunk)` to pass along transformed output
      // to the readable side.  You may call 'push' zero or more times.
      //
      // Call `cb(err)` when you are done with this chunk.  If you pass
      // an error, then that'll put the hurt on the whole operation.  If you
      // never call cb(), then you'll never get another chunk.


      Transform.prototype._transform = function (chunk, encoding, cb) {
        throw new Error('_transform() is not implemented');
      };

      Transform.prototype._write = function (chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;

        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
      }; // Doesn't matter what the args are here.
      // _transform does all the work.
      // That we got here means that the readable side wants more data.


      Transform.prototype._read = function (n) {
        var ts = this._transformState;

        if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
          ts.transforming = true;

          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          // mark that we need a transform, so that any data that comes in
          // will get processed, now that we've asked for it.
          ts.needTransform = true;
        }
      };

      Transform.prototype._destroy = function (err, cb) {
        var _this2 = this;

        Duplex.prototype._destroy.call(this, err, function (err2) {
          cb(err2);

          _this2.emit('close');
        });
      };

      function done(stream, er, data) {
        if (er) return stream.emit('error', er);
        if (data != null) // single equals check for both `null` and `undefined`
          stream.push(data); // if there's nothing in the write buffer, then that means
        // that nothing more will ever be provided

        if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
        if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
        return stream.push(null);
      }

      /***/
    }),
/* 99 */
/***/ (function (module, exports, __webpack_require__) {

      var CVUtils = __webpack_require__(8);

      var Ndarray = __webpack_require__(51);

      var Interp2D = __webpack_require__(306).d2;

      var FrameGrabber = {};

      FrameGrabber.create = function (inputStream) {
        var _that = {};

        var _videoSize = CVUtils.imageRef(inputStream.getRealWidth(), inputStream.getRealHeight());

        var _canvasSize = inputStream.getCanvasSize();

        var _size = CVUtils.imageRef(inputStream.getWidth(), inputStream.getHeight());

        var _topRight = inputStream.getTopRight();

        var _data = new Uint8Array(_size.x * _size.y);

        var _grayData = new Uint8Array(_videoSize.x * _videoSize.y);

        var _canvasData = new Uint8Array(_canvasSize.x * _canvasSize.y);
        /* eslint-disable new-cap */


        var _grayImageArray = Ndarray(_grayData, [_videoSize.y, _videoSize.x]).transpose(1, 0);

        var _canvasImageArray = Ndarray(_canvasData, [_canvasSize.y, _canvasSize.x]).transpose(1, 0);

        var _targetImageArray = _canvasImageArray.hi(_topRight.x + _size.x, _topRight.y + _size.y).lo(_topRight.x, _topRight.y);

        var _stepSizeX = _videoSize.x / _canvasSize.x;

        var _stepSizeY = _videoSize.y / _canvasSize.y;

        if (true) {
          console.log('FrameGrabber', JSON.stringify({
            videoSize: _grayImageArray.shape,
            canvasSize: _canvasImageArray.shape,
            stepSize: [_stepSizeX, _stepSizeY],
            size: _targetImageArray.shape,
            topRight: _topRight
          }));
        }
        /**
         * Uses the given array as frame-buffer
         */


        _that.attachData = function (data) {
          _data = data;
        };
        /**
         * Returns the used frame-buffer
         */


        _that.getData = function () {
          return _data;
        };
        /**
         * Fetches a frame from the input-stream and puts into the frame-buffer.
         * The image-data is converted to gray-scale and then half-sampled if configured.
         */


        _that.grab = function () {
          var frame = inputStream.getFrame();

          if (frame) {
            this.scaleAndCrop(frame);
            return true;
          }

          return false;
        }; // eslint-disable-next-line


        _that.scaleAndCrop = function (frame) {
          // 1. compute full-sized gray image
          CVUtils.computeGray(frame.data, _grayData); // 2. interpolate

          for (var y = 0; y < _canvasSize.y; y++) {
            for (var x = 0; x < _canvasSize.x; x++) {
              // eslint-disable-next-line no-bitwise
              _canvasImageArray.set(x, y, Interp2D(_grayImageArray, x * _stepSizeX, y * _stepSizeY) | 0);
            }
          } // targetImageArray must be equal to targetSize


          if (_targetImageArray.shape[0] !== _size.x || _targetImageArray.shape[1] !== _size.y) {
            throw new Error('Shapes do not match!');
          } // 3. crop


          for (var _y = 0; _y < _size.y; _y++) {
            for (var _x = 0; _x < _size.x; _x++) {
              _data[_y * _size.x + _x] = _targetImageArray.get(_x, _y);
            }
          }
        };

        _that.getSize = function () {
          return _size;
        };

        return _that;
      };

      module.exports = FrameGrabber;

      /***/
    }),
/* 100 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = {
        EPSILON: __webpack_require__(67),
        create: __webpack_require__(68),
        clone: __webpack_require__(145),
        angle: __webpack_require__(146),
        fromValues: __webpack_require__(69),
        copy: __webpack_require__(147),
        set: __webpack_require__(148),
        equals: __webpack_require__(149),
        exactEquals: __webpack_require__(150),
        add: __webpack_require__(151),
        subtract: __webpack_require__(72),
        sub: __webpack_require__(152),
        multiply: __webpack_require__(73),
        mul: __webpack_require__(153),
        divide: __webpack_require__(74),
        div: __webpack_require__(154),
        min: __webpack_require__(155),
        max: __webpack_require__(156),
        floor: __webpack_require__(157),
        ceil: __webpack_require__(158),
        round: __webpack_require__(159),
        scale: __webpack_require__(160),
        scaleAndAdd: __webpack_require__(161),
        distance: __webpack_require__(75),
        dist: __webpack_require__(162),
        squaredDistance: __webpack_require__(76),
        sqrDist: __webpack_require__(163),
        length: __webpack_require__(77),
        len: __webpack_require__(164),
        squaredLength: __webpack_require__(78),
        sqrLen: __webpack_require__(165),
        negate: __webpack_require__(166),
        inverse: __webpack_require__(167),
        normalize: __webpack_require__(70),
        dot: __webpack_require__(71),
        cross: __webpack_require__(168),
        lerp: __webpack_require__(169),
        random: __webpack_require__(170),
        transformMat4: __webpack_require__(171),
        transformMat3: __webpack_require__(172),
        transformQuat: __webpack_require__(173),
        rotateX: __webpack_require__(174),
        rotateY: __webpack_require__(175),
        rotateZ: __webpack_require__(176),
        forEach: __webpack_require__(177)
      };

      /***/
    }),
/* 101 */
/***/ (function (module, exports, __webpack_require__) {

      var basePick = __webpack_require__(246),
        flatRest = __webpack_require__(260);
      /**
       * Creates an object composed of the picked `object` properties.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.pick(object, ['a', 'c']);
       * // => { 'a': 1, 'c': 3 }
       */


      var pick = flatRest(function (object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      module.exports = pick;

      /***/
    }),
/* 102 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

      /**
       * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
       */

      var Rasterizer = {
        createContour2D: function createContour2D() {
          return {
            dir: null,
            index: null,
            firstVertex: null,
            insideContours: null,
            nextpeer: null,
            prevpeer: null
          };
        },
        CONTOUR_DIR: {
          CW_DIR: 0,
          CCW_DIR: 1,
          UNKNOWN_DIR: 2
        },
        DIR: {
          OUTSIDE_EDGE: -32767,
          INSIDE_EDGE: -32766
        },
        create: function create(imageWrapper, labelWrapper) {
          var imageData = imageWrapper.data;
          var labelData = labelWrapper.data;
          var width = imageWrapper.size.x;
          var height = imageWrapper.size.y;
          var tracer = _tracer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].create(imageWrapper, labelWrapper);
          return {
            rasterize: function rasterize(depthlabel) {
              var color;
              var bc;
              var lc;
              var labelindex;
              var cx;
              var cy;
              var colorMap = [];
              var vertex;
              var p;
              var cc;
              var sc;
              var pos;
              var connectedCount = 0;
              var i;

              for (i = 0; i < 400; i++) {
                colorMap[i] = 0;
              }

              colorMap[0] = imageData[0];
              cc = null;

              for (cy = 1; cy < height - 1; cy++) {
                labelindex = 0;
                bc = colorMap[0];

                for (cx = 1; cx < width - 1; cx++) {
                  pos = cy * width + cx;

                  if (labelData[pos] === 0) {
                    color = imageData[pos];

                    if (color !== bc) {
                      if (labelindex === 0) {
                        lc = connectedCount + 1;
                        colorMap[lc] = color;
                        bc = color;
                        vertex = tracer.contourTracing(cy, cx, lc, color, Rasterizer.DIR.OUTSIDE_EDGE);

                        if (vertex !== null) {
                          connectedCount++;
                          labelindex = lc;
                          p = Rasterizer.createContour2D();
                          p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                          p.index = labelindex;
                          p.firstVertex = vertex;
                          p.nextpeer = cc;
                          p.insideContours = null;

                          if (cc !== null) {
                            cc.prevpeer = p;
                          }

                          cc = p;
                        }
                      } else {
                        vertex = tracer.contourTracing(cy, cx, Rasterizer.DIR.INSIDE_EDGE, color, labelindex);

                        if (vertex !== null) {
                          p = Rasterizer.createContour2D();
                          p.firstVertex = vertex;
                          p.insideContours = null;

                          if (depthlabel === 0) {
                            p.dir = Rasterizer.CONTOUR_DIR.CCW_DIR;
                          } else {
                            p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                          }

                          p.index = depthlabel;
                          sc = cc;

                          while (sc !== null && sc.index !== labelindex) {
                            sc = sc.nextpeer;
                          }

                          if (sc !== null) {
                            p.nextpeer = sc.insideContours;

                            if (sc.insideContours !== null) {
                              sc.insideContours.prevpeer = p;
                            }

                            sc.insideContours = p;
                          }
                        }
                      }
                    } else {
                      labelData[pos] = labelindex;
                    }
                  } else if (labelData[pos] === Rasterizer.DIR.OUTSIDE_EDGE || labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
                    labelindex = 0;

                    if (labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
                      bc = imageData[pos];
                    } else {
                      bc = colorMap[0];
                    }
                  } else {
                    labelindex = labelData[pos];
                    bc = colorMap[labelindex];
                  }
                }
              }

              sc = cc;

              while (sc !== null) {
                sc.index = depthlabel;
                sc = sc.nextpeer;
              }

              return {
                cc: cc,
                count: connectedCount
              };
            },
            debug: {
              drawContour: function drawContour(canvas, firstContour) {
                var ctx = canvas.getContext('2d');
                var pq = firstContour;
                var iq;
                var q;
                var p;
                ctx.strokeStyle = 'red';
                ctx.fillStyle = 'red';
                ctx.lineWidth = 1;

                if (pq !== null) {
                  iq = pq.insideContours;
                } else {
                  iq = null;
                }

                while (pq !== null) {
                  if (iq !== null) {
                    q = iq;
                    iq = iq.nextpeer;
                  } else {
                    q = pq;
                    pq = pq.nextpeer;

                    if (pq !== null) {
                      iq = pq.insideContours;
                    } else {
                      iq = null;
                    }
                  }

                  switch (q.dir) {
                    case Rasterizer.CONTOUR_DIR.CW_DIR:
                      ctx.strokeStyle = 'red';
                      break;

                    case Rasterizer.CONTOUR_DIR.CCW_DIR:
                      ctx.strokeStyle = 'blue';
                      break;

                    case Rasterizer.CONTOUR_DIR.UNKNOWN_DIR:
                      ctx.strokeStyle = 'green';
                      break;
                  }

                  p = q.firstVertex;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);

                  do {
                    p = p.next;
                    ctx.lineTo(p.x, p.y);
                  } while (p !== q.firstVertex);

                  ctx.stroke();
                }
              }
            }
          };
        }
      };
/* harmony default export */ __webpack_exports__["a"] = (Rasterizer);

      /***/
    }),
/* 103 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* eslint-disable no-param-reassign */

      /* eslint-disable no-bitwise */

      /* eslint-disable eqeqeq */

      /* @preserve ASM BEGIN */
      function Skeletonizer(stdlib, foreign, buffer) {
        'use asm';

        var images = new stdlib.Uint8Array(buffer);
        var size = foreign.size | 0;
        var imul = stdlib.Math.imul;

        function erode(inImagePtr, outImagePtr) {
          inImagePtr |= 0;
          outImagePtr |= 0;
          var v = 0;
          var u = 0;
          var sum = 0;
          var yStart1 = 0;
          var yStart2 = 0;
          var xStart1 = 0;
          var xStart2 = 0;
          var offset = 0;

          for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
            offset = offset + size | 0;

            for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
              yStart1 = offset - size | 0;
              yStart2 = offset + size | 0;
              xStart1 = u - 1 | 0;
              xStart2 = u + 1 | 0;
              sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

              if ((sum | 0) == (5 | 0)) {
                images[outImagePtr + offset + u | 0] = 1;
              } else {
                images[outImagePtr + offset + u | 0] = 0;
              }
            }
          }
        }

        function subtract(aImagePtr, bImagePtr, outImagePtr) {
          aImagePtr |= 0;
          bImagePtr |= 0;
          outImagePtr |= 0;
          var length = 0;
          length = imul(size, size) | 0;

          while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
          }
        }

        function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
          aImagePtr |= 0;
          bImagePtr |= 0;
          outImagePtr |= 0;
          var length = 0;
          length = imul(size, size) | 0;

          while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
          }
        }

        function countNonZero(imagePtr) {
          imagePtr |= 0;
          var sum = 0;
          var length = 0;
          length = imul(size, size) | 0;

          while ((length | 0) > 0) {
            length = length - 1 | 0;
            sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
          }

          return sum | 0;
        }

        function init(imagePtr, value) {
          imagePtr |= 0;
          value |= 0;
          var length = 0;
          length = imul(size, size) | 0;

          while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[imagePtr + length | 0] = value;
          }
        }

        function dilate(inImagePtr, outImagePtr) {
          inImagePtr |= 0;
          outImagePtr |= 0;
          var v = 0;
          var u = 0;
          var sum = 0;
          var yStart1 = 0;
          var yStart2 = 0;
          var xStart1 = 0;
          var xStart2 = 0;
          var offset = 0;

          for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
            offset = offset + size | 0;

            for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
              yStart1 = offset - size | 0;
              yStart2 = offset + size | 0;
              xStart1 = u - 1 | 0;
              xStart2 = u + 1 | 0;
              sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

              if ((sum | 0) > (0 | 0)) {
                images[outImagePtr + offset + u | 0] = 1;
              } else {
                images[outImagePtr + offset + u | 0] = 0;
              }
            }
          }
        }

        function memcpy(srcImagePtr, dstImagePtr) {
          srcImagePtr |= 0;
          dstImagePtr |= 0;
          var length = 0;
          length = imul(size, size) | 0;

          while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
          }
        }

        function zeroBorder(imagePtr) {
          imagePtr |= 0;
          var x = 0;
          var y = 0;

          for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) {
            images[imagePtr + x | 0] = 0;
            images[imagePtr + y | 0] = 0;
            y = y + size - 1 | 0;
            images[imagePtr + y | 0] = 0;
            y = y + 1 | 0;
          }

          for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) {
            images[imagePtr + y | 0] = 0;
            y = y + 1 | 0;
          }
        }

        function skeletonize() {
          var subImagePtr = 0;
          var erodedImagePtr = 0;
          var tempImagePtr = 0;
          var skelImagePtr = 0;
          var sum = 0;
          var done = 0;
          erodedImagePtr = imul(size, size) | 0;
          tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
          skelImagePtr = tempImagePtr + erodedImagePtr | 0; // init skel-image

          init(skelImagePtr, 0);
          zeroBorder(subImagePtr);

          do {
            erode(subImagePtr, erodedImagePtr);
            dilate(erodedImagePtr, tempImagePtr);
            subtract(subImagePtr, tempImagePtr, tempImagePtr);
            bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
            memcpy(erodedImagePtr, subImagePtr);
            sum = countNonZero(subImagePtr) | 0;
            done = (sum | 0) == 0 | 0;
          } while (!done);
        }

        return {
          skeletonize: skeletonize
        };
      }
/* @preserve ASM END */


/* harmony default export */ __webpack_exports__["a"] = (Skeletonizer);
      /* eslint-enable eqeqeq */

      /***/
    }),
/* 104 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (process, Buffer) {

        var path = __webpack_require__(280);

        var ndarray = __webpack_require__(51);

        var GifReader = __webpack_require__(283).GifReader;

        var pack = __webpack_require__(284);

        var through = __webpack_require__(290);

        var parseDataURI = __webpack_require__(305);

        function defaultImage(url, cb) {
          var img = new Image();
          img.crossOrigin = "Anonymous";

          img.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0);
            var pixels = context.getImageData(0, 0, img.width, img.height);
            cb(null, ndarray(new Uint8Array(pixels.data), [img.width, img.height, 4], [4, 4 * img.width, 1], 0));
          };

          img.onerror = function (err) {
            cb(err);
          };

          img.src = url;
        } //Animated gif loading


        function handleGif(data, cb) {
          var reader;

          try {
            reader = new GifReader(data);
          } catch (err) {
            cb(err);
            return;
          }

          if (reader.numFrames() > 0) {
            var nshape = [reader.numFrames(), reader.height, reader.width, 4];
            var ndata = new Uint8Array(nshape[0] * nshape[1] * nshape[2] * nshape[3]);
            var result = ndarray(ndata, nshape);

            try {
              for (var i = 0; i < reader.numFrames(); ++i) {
                reader.decodeAndBlitFrameRGBA(i, ndata.subarray(result.index(i, 0, 0, 0), result.index(i + 1, 0, 0, 0)));
              }
            } catch (err) {
              cb(err);
              return;
            }

            cb(null, result.transpose(0, 2, 1));
          } else {
            var nshape = [reader.height, reader.width, 4];
            var ndata = new Uint8Array(nshape[0] * nshape[1] * nshape[2]);
            var result = ndarray(ndata, nshape);

            try {
              reader.decodeAndBlitFrameRGBA(0, ndata);
            } catch (err) {
              cb(err);
              return;
            }

            cb(null, result.transpose(1, 0));
          }
        }

        function httpGif(url, cb) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';

          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('application/binary');
          }

          xhr.onerror = function (err) {
            cb(err);
          };

          xhr.onload = function () {
            if (xhr.readyState !== 4) {
              return;
            }

            var data = new Uint8Array(xhr.response);
            handleGif(data, cb);
            return;
          };

          xhr.send();
        }

        function copyBuffer(buffer) {
          if (buffer[0] === undefined) {
            var n = buffer.length;
            var result = new Uint8Array(n);

            for (var i = 0; i < n; ++i) {
              result[i] = buffer.get(i);
            }

            return result;
          } else {
            return new Uint8Array(buffer);
          }
        }

        function dataGif(url, cb) {
          process.nextTick(function () {
            try {
              var buffer = parseDataURI(url);

              if (buffer) {
                handleGif(copyBuffer(buffer), cb);
              } else {
                cb(new Error('Error parsing data URI'));
              }
            } catch (err) {
              cb(err);
            }
          });
        }

        module.exports = function getPixels(url, type, cb) {
          if (!cb) {
            cb = type;
            type = '';
          }

          var ext = path.extname(url);

          switch (type || ext.toUpperCase()) {
            case '.GIF':
              httpGif(url, cb);
              break;

            default:
              if (Buffer.isBuffer(url)) {
                url = 'data:' + type + ';base64,' + url.toString('base64');
              }

              if (url.indexOf('data:image/gif;') === 0) {
                dataGif(url, cb);
              } else {
                defaultImage(url, cb);
              }

          }
        };
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(15), __webpack_require__(26).Buffer))

      /***/
    }),
/* 105 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(307);


      /***/
    }),
/* 106 */
/***/ (function (module, exports) {

      /*
       * typedefs.js
       * Normalizes browser-specific prefixes and provide some basic polyfills
       */
      if (typeof window !== 'undefined') {
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = function () {
            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
              /* function FrameRequestCallback */
              callback) {
              window.setTimeout(callback, 1000 / 60);
            };
          }();
        }
      }

      if (typeof Math.imul !== 'function') {
        /* eslint-disable no-bitwise */
        Math.imul = function (a, b) {
          var ah = a >>> 16 & 0xffff;
          var al = a & 0xffff;
          var bh = b >>> 16 & 0xffff;
          var bl = b & 0xffff; // the shift by 0 fixes the sign on the high part
          // the final |0 converts the unsigned value into a signed value

          return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
        };
        /* eslint-enable no-bitwise */

      }

      if (typeof Object.assign !== 'function') {
        Object.assign = function (target) {
          // .length of function is 2
          'use strict';

          if (target === null) {
            // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            // eslint-disable-next-line prefer-rest-params
            var nextSource = arguments[index];

            if (nextSource !== null) {
              // Skip over if undefined or null
              // eslint-disable-next-line no-restricted-syntax
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }

          return to;
        };
      }

      /***/
    }),
/* 107 */
/***/ (function (module, exports) {

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      module.exports = _arrayWithHoles;

      /***/
    }),
/* 108 */
/***/ (function (module, exports) {

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      module.exports = _iterableToArrayLimit;

      /***/
    }),
/* 109 */
/***/ (function (module, exports) {

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      module.exports = _nonIterableRest;

      /***/
    }),
/* 110 */
/***/ (function (module, exports) {

      module.exports = clone;
      /**
       * Creates a new vec2 initialized with values from an existing vector
       *
       * @param {vec2} a vector to clone
       * @returns {vec2} a new 2D vector
       */

      function clone(a) {
        var out = new Float32Array(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }

      /***/
    }),
/* 111 */
/***/ (function (module, exports) {

      module.exports = fromValues;
      /**
       * Creates a new vec2 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @returns {vec2} a new 2D vector
       */

      function fromValues(x, y) {
        var out = new Float32Array(2);
        out[0] = x;
        out[1] = y;
        return out;
      }

      /***/
    }),
/* 112 */
/***/ (function (module, exports) {

      module.exports = copy;
      /**
       * Copy the values from one vec2 to another
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the source vector
       * @returns {vec2} out
       */

      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }

      /***/
    }),
/* 113 */
/***/ (function (module, exports) {

      module.exports = set;
      /**
       * Set the components of a vec2 to the given values
       *
       * @param {vec2} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @returns {vec2} out
       */

      function set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
      }

      /***/
    }),
/* 114 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = equals;

      var EPSILON = __webpack_require__(58);
      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {vec2} a The first vector.
       * @param {vec2} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */


      function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var b0 = b[0];
        var b1 = b[1];
        return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
      }

      /***/
    }),
/* 115 */
/***/ (function (module, exports) {

      module.exports = exactEquals;
      /**
       * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
       *
       * @param {vec2} a The first vector.
       * @param {vec2} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
      }

      /***/
    }),
/* 116 */
/***/ (function (module, exports) {

      module.exports = add;
      /**
       * Adds two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */

      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
      }

      /***/
    }),
/* 117 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(60);

      /***/
    }),
/* 118 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(61);

      /***/
    }),
/* 119 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(62);

      /***/
    }),
/* 120 */
/***/ (function (module, exports) {

      module.exports = inverse;
      /**
       * Returns the inverse of the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to invert
       * @returns {vec2} out
       */

      function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
      }

      /***/
    }),
/* 121 */
/***/ (function (module, exports) {

      module.exports = min;
      /**
       * Returns the minimum of two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */

      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
      }

      /***/
    }),
/* 122 */
/***/ (function (module, exports) {

      module.exports = max;
      /**
       * Returns the maximum of two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */

      function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
      }

      /***/
    }),
/* 123 */
/***/ (function (module, exports) {

      module.exports = rotate;
      /**
       * Rotates a vec2 by an angle
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to rotate
       * @param {Number} angle the angle of rotation (in radians)
       * @returns {vec2} out
       */

      function rotate(out, a, angle) {
        var c = Math.cos(angle),
          s = Math.sin(angle);
        var x = a[0],
          y = a[1];
        out[0] = x * c - y * s;
        out[1] = x * s + y * c;
        return out;
      }

      /***/
    }),
/* 124 */
/***/ (function (module, exports) {

      module.exports = floor;
      /**
       * Math.floor the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to floor
       * @returns {vec2} out
       */

      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
      }

      /***/
    }),
/* 125 */
/***/ (function (module, exports) {

      module.exports = ceil;
      /**
       * Math.ceil the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to ceil
       * @returns {vec2} out
       */

      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
      }

      /***/
    }),
/* 126 */
/***/ (function (module, exports) {

      module.exports = round;
      /**
       * Math.round the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to round
       * @returns {vec2} out
       */

      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
      }

      /***/
    }),
/* 127 */
/***/ (function (module, exports) {

      module.exports = scale;
      /**
       * Scales a vec2 by a scalar number
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec2} out
       */

      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
      }

      /***/
    }),
/* 128 */
/***/ (function (module, exports) {

      module.exports = scaleAndAdd;
      /**
       * Adds two vec2's after scaling the second operand by a scalar value
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec2} out
       */

      function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        return out;
      }

      /***/
    }),
/* 129 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(63);

      /***/
    }),
/* 130 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(64);

      /***/
    }),
/* 131 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(65);

      /***/
    }),
/* 132 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(66);

      /***/
    }),
/* 133 */
/***/ (function (module, exports) {

      module.exports = negate;
      /**
       * Negates the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to negate
       * @returns {vec2} out
       */

      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
      }

      /***/
    }),
/* 134 */
/***/ (function (module, exports) {

      module.exports = normalize;
      /**
       * Normalize a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to normalize
       * @returns {vec2} out
       */

      function normalize(out, a) {
        var x = a[0],
          y = a[1];
        var len = x * x + y * y;

        if (len > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len = 1 / Math.sqrt(len);
          out[0] = a[0] * len;
          out[1] = a[1] * len;
        }

        return out;
      }

      /***/
    }),
/* 135 */
/***/ (function (module, exports) {

      module.exports = dot;
      /**
       * Calculates the dot product of two vec2's
       *
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {Number} dot product of a and b
       */

      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }

      /***/
    }),
/* 136 */
/***/ (function (module, exports) {

      module.exports = cross;
      /**
       * Computes the cross product of two vec2's
       * Note that the cross product must by definition produce a 3D vector
       *
       * @param {vec3} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec3} out
       */

      function cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
      }

      /***/
    }),
/* 137 */
/***/ (function (module, exports) {

      module.exports = lerp;
      /**
       * Performs a linear interpolation between two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @param {Number} t interpolation amount between the two inputs
       * @returns {vec2} out
       */

      function lerp(out, a, b, t) {
        var ax = a[0],
          ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
      }

      /***/
    }),
/* 138 */
/***/ (function (module, exports) {

      module.exports = random;
      /**
       * Generates a random vector with the given scale
       *
       * @param {vec2} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec2} out
       */

      function random(out, scale) {
        scale = scale || 1.0;
        var r = Math.random() * 2.0 * Math.PI;
        out[0] = Math.cos(r) * scale;
        out[1] = Math.sin(r) * scale;
        return out;
      }

      /***/
    }),
/* 139 */
/***/ (function (module, exports) {

      module.exports = transformMat2;
      /**
       * Transforms the vec2 with a mat2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat2} m matrix to transform with
       * @returns {vec2} out
       */

      function transformMat2(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
      }

      /***/
    }),
/* 140 */
/***/ (function (module, exports) {

      module.exports = transformMat2d;
      /**
       * Transforms the vec2 with a mat2d
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat2d} m matrix to transform with
       * @returns {vec2} out
       */

      function transformMat2d(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
      }

      /***/
    }),
/* 141 */
/***/ (function (module, exports) {

      module.exports = transformMat3;
      /**
       * Transforms the vec2 with a mat3
       * 3rd vector component is implicitly '1'
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat3} m matrix to transform with
       * @returns {vec2} out
       */

      function transformMat3(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
      }

      /***/
    }),
/* 142 */
/***/ (function (module, exports) {

      module.exports = transformMat4;
      /**
       * Transforms the vec2 with a mat4
       * 3rd vector component is implicitly '0'
       * 4th vector component is implicitly '1'
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat4} m matrix to transform with
       * @returns {vec2} out
       */

      function transformMat4(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
      }

      /***/
    }),
/* 143 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = forEach;

      var vec = __webpack_require__(59)();
      /**
       * Perform some operation over an array of vec2s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */


      function forEach(a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 2;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
        }

        return a;
      }

      /***/
    }),
/* 144 */
/***/ (function (module, exports) {

      module.exports = limit;
      /**
       * Limit the magnitude of this vector to the value used for the `max`
       * parameter.
       *
       * @param  {vec2} the vector to limit
       * @param  {Number} max the maximum magnitude for the vector
       * @returns {vec2} out
       */

      function limit(out, a, max) {
        var mSq = a[0] * a[0] + a[1] * a[1];

        if (mSq > max * max) {
          var n = Math.sqrt(mSq);
          out[0] = a[0] / n * max;
          out[1] = a[1] / n * max;
        } else {
          out[0] = a[0];
          out[1] = a[1];
        }

        return out;
      }

      /***/
    }),
/* 145 */
/***/ (function (module, exports) {

      module.exports = clone;
      /**
       * Creates a new vec3 initialized with values from an existing vector
       *
       * @param {vec3} a vector to clone
       * @returns {vec3} a new 3D vector
       */

      function clone(a) {
        var out = new Float32Array(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }

      /***/
    }),
/* 146 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = angle;

      var fromValues = __webpack_require__(69);

      var normalize = __webpack_require__(70);

      var dot = __webpack_require__(71);
      /**
       * Get the angle between two 3D vectors
       * @param {vec3} a The first operand
       * @param {vec3} b The second operand
       * @returns {Number} The angle in radians
       */


      function angle(a, b) {
        var tempA = fromValues(a[0], a[1], a[2]);
        var tempB = fromValues(b[0], b[1], b[2]);
        normalize(tempA, tempA);
        normalize(tempB, tempB);
        var cosine = dot(tempA, tempB);

        if (cosine > 1.0) {
          return 0;
        } else {
          return Math.acos(cosine);
        }
      }

      /***/
    }),
/* 147 */
/***/ (function (module, exports) {

      module.exports = copy;
      /**
       * Copy the values from one vec3 to another
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the source vector
       * @returns {vec3} out
       */

      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }

      /***/
    }),
/* 148 */
/***/ (function (module, exports) {

      module.exports = set;
      /**
       * Set the components of a vec3 to the given values
       *
       * @param {vec3} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @returns {vec3} out
       */

      function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }

      /***/
    }),
/* 149 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = equals;

      var EPSILON = __webpack_require__(67);
      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {vec3} a The first vector.
       * @param {vec3} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */


      function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
      }

      /***/
    }),
/* 150 */
/***/ (function (module, exports) {

      module.exports = exactEquals;
      /**
       * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
       *
       * @param {vec3} a The first vector.
       * @param {vec3} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
      }

      /***/
    }),
/* 151 */
/***/ (function (module, exports) {

      module.exports = add;
      /**
       * Adds two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
      }

      /***/
    }),
/* 152 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(72);

      /***/
    }),
/* 153 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(73);

      /***/
    }),
/* 154 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(74);

      /***/
    }),
/* 155 */
/***/ (function (module, exports) {

      module.exports = min;
      /**
       * Returns the minimum of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
      }

      /***/
    }),
/* 156 */
/***/ (function (module, exports) {

      module.exports = max;
      /**
       * Returns the maximum of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
      }

      /***/
    }),
/* 157 */
/***/ (function (module, exports) {

      module.exports = floor;
      /**
       * Math.floor the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to floor
       * @returns {vec3} out
       */

      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
      }

      /***/
    }),
/* 158 */
/***/ (function (module, exports) {

      module.exports = ceil;
      /**
       * Math.ceil the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to ceil
       * @returns {vec3} out
       */

      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
      }

      /***/
    }),
/* 159 */
/***/ (function (module, exports) {

      module.exports = round;
      /**
       * Math.round the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to round
       * @returns {vec3} out
       */

      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
      }

      /***/
    }),
/* 160 */
/***/ (function (module, exports) {

      module.exports = scale;
      /**
       * Scales a vec3 by a scalar number
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec3} out
       */

      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
      }

      /***/
    }),
/* 161 */
/***/ (function (module, exports) {

      module.exports = scaleAndAdd;
      /**
       * Adds two vec3's after scaling the second operand by a scalar value
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec3} out
       */

      function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        return out;
      }

      /***/
    }),
/* 162 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(75);

      /***/
    }),
/* 163 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(76);

      /***/
    }),
/* 164 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(77);

      /***/
    }),
/* 165 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(78);

      /***/
    }),
/* 166 */
/***/ (function (module, exports) {

      module.exports = negate;
      /**
       * Negates the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to negate
       * @returns {vec3} out
       */

      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
      }

      /***/
    }),
/* 167 */
/***/ (function (module, exports) {

      module.exports = inverse;
      /**
       * Returns the inverse of the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to invert
       * @returns {vec3} out
       */

      function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
      }

      /***/
    }),
/* 168 */
/***/ (function (module, exports) {

      module.exports = cross;
      /**
       * Computes the cross product of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */

      function cross(out, a, b) {
        var ax = a[0],
          ay = a[1],
          az = a[2],
          bx = b[0],
          by = b[1],
          bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
      }

      /***/
    }),
/* 169 */
/***/ (function (module, exports) {

      module.exports = lerp;
      /**
       * Performs a linear interpolation between two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @param {Number} t interpolation amount between the two inputs
       * @returns {vec3} out
       */

      function lerp(out, a, b, t) {
        var ax = a[0],
          ay = a[1],
          az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
      }

      /***/
    }),
/* 170 */
/***/ (function (module, exports) {

      module.exports = random;
      /**
       * Generates a random vector with the given scale
       *
       * @param {vec3} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec3} out
       */

      function random(out, scale) {
        scale = scale || 1.0;
        var r = Math.random() * 2.0 * Math.PI;
        var z = Math.random() * 2.0 - 1.0;
        var zScale = Math.sqrt(1.0 - z * z) * scale;
        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale;
        return out;
      }

      /***/
    }),
/* 171 */
/***/ (function (module, exports) {

      module.exports = transformMat4;
      /**
       * Transforms the vec3 with a mat4.
       * 4th vector component is implicitly '1'
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to transform
       * @param {mat4} m matrix to transform with
       * @returns {vec3} out
       */

      function transformMat4(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2],
          w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
      }

      /***/
    }),
/* 172 */
/***/ (function (module, exports) {

      module.exports = transformMat3;
      /**
       * Transforms the vec3 with a mat3.
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to transform
       * @param {mat4} m the 3x3 matrix to transform with
       * @returns {vec3} out
       */

      function transformMat3(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
      }

      /***/
    }),
/* 173 */
/***/ (function (module, exports) {

      module.exports = transformQuat;
      /**
       * Transforms the vec3 with a quat
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to transform
       * @param {quat} q quaternion to transform with
       * @returns {vec3} out
       */

      function transformQuat(out, a, q) {
        // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
        var x = a[0],
          y = a[1],
          z = a[2],
          qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3],
          // calculate quat * vec
          ix = qw * x + qy * z - qz * y,
          iy = qw * y + qz * x - qx * z,
          iz = qw * z + qx * y - qy * x,
          iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return out;
      }

      /***/
    }),
/* 174 */
/***/ (function (module, exports) {

      module.exports = rotateX;
      /**
       * Rotate a 3D vector around the x-axis
       * @param {vec3} out The receiving vec3
       * @param {vec3} a The vec3 point to rotate
       * @param {vec3} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec3} out
       */

      function rotateX(out, a, b, c) {
        var by = b[1];
        var bz = b[2]; // Translate point to the origin

        var py = a[1] - by;
        var pz = a[2] - bz;
        var sc = Math.sin(c);
        var cc = Math.cos(c); // perform rotation and translate to correct position

        out[0] = a[0];
        out[1] = by + py * cc - pz * sc;
        out[2] = bz + py * sc + pz * cc;
        return out;
      }

      /***/
    }),
/* 175 */
/***/ (function (module, exports) {

      module.exports = rotateY;
      /**
       * Rotate a 3D vector around the y-axis
       * @param {vec3} out The receiving vec3
       * @param {vec3} a The vec3 point to rotate
       * @param {vec3} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec3} out
       */

      function rotateY(out, a, b, c) {
        var bx = b[0];
        var bz = b[2]; // translate point to the origin

        var px = a[0] - bx;
        var pz = a[2] - bz;
        var sc = Math.sin(c);
        var cc = Math.cos(c); // perform rotation and translate to correct position

        out[0] = bx + pz * sc + px * cc;
        out[1] = a[1];
        out[2] = bz + pz * cc - px * sc;
        return out;
      }

      /***/
    }),
/* 176 */
/***/ (function (module, exports) {

      module.exports = rotateZ;
      /**
       * Rotate a 3D vector around the z-axis
       * @param {vec3} out The receiving vec3
       * @param {vec3} a The vec3 point to rotate
       * @param {vec3} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec3} out
       */

      function rotateZ(out, a, b, c) {
        var bx = b[0];
        var by = b[1]; //Translate point to the origin

        var px = a[0] - bx;
        var py = a[1] - by;
        var sc = Math.sin(c);
        var cc = Math.cos(c); // perform rotation and translate to correct position

        out[0] = bx + px * cc - py * sc;
        out[1] = by + px * sc + py * cc;
        out[2] = a[2];
        return out;
      }

      /***/
    }),
/* 177 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = forEach;

      var vec = __webpack_require__(68)();
      /**
       * Perform some operation over an array of vec3s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */


      function forEach(a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 3;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
        }

        return a;
      }

      /***/
    }),
/* 178 */
/***/ (function (module, exports) {

      function _setPrototypeOf(o, p) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      module.exports = _setPrototypeOf;

      /***/
    }),
/* 179 */
/***/ (function (module, exports, __webpack_require__) {

      var Stack = __webpack_require__(180),
        assignMergeValue = __webpack_require__(82),
        baseFor = __webpack_require__(210),
        baseMergeDeep = __webpack_require__(212),
        isObject = __webpack_require__(13),
        keysIn = __webpack_require__(90),
        safeGet = __webpack_require__(88);
      /**
       * The base implementation of `_.merge` without support for multiple sources.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {number} srcIndex The index of `source`.
       * @param {Function} [customizer] The function to customize merged values.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       */


      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }

        baseFor(source, function (srcValue, key) {
          stack || (stack = new Stack());

          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

            if (newValue === undefined) {
              newValue = srcValue;
            }

            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }

      module.exports = baseMerge;

      /***/
    }),
/* 180 */
/***/ (function (module, exports, __webpack_require__) {

      var ListCache = __webpack_require__(29),
        stackClear = __webpack_require__(186),
        stackDelete = __webpack_require__(187),
        stackGet = __webpack_require__(188),
        stackHas = __webpack_require__(189),
        stackSet = __webpack_require__(190);
      /**
       * Creates a stack cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */


      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      } // Add methods to `Stack`.


      Stack.prototype.clear = stackClear;
      Stack.prototype['delete'] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;

      /***/
    }),
/* 181 */
/***/ (function (module, exports) {

      /**
       * Removes all key-value entries from the list cache.
       *
       * @private
       * @name clear
       * @memberOf ListCache
       */
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }

      module.exports = listCacheClear;

      /***/
    }),
/* 182 */
/***/ (function (module, exports, __webpack_require__) {

      var assocIndexOf = __webpack_require__(30);
      /** Used for built-in method references. */


      var arrayProto = Array.prototype;
      /** Built-in value references. */

      var splice = arrayProto.splice;
      /**
       * Removes `key` and its value from the list cache.
       *
       * @private
       * @name delete
       * @memberOf ListCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */

      function listCacheDelete(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        if (index < 0) {
          return false;
        }

        var lastIndex = data.length - 1;

        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }

        --this.size;
        return true;
      }

      module.exports = listCacheDelete;

      /***/
    }),
/* 183 */
/***/ (function (module, exports, __webpack_require__) {

      var assocIndexOf = __webpack_require__(30);
      /**
       * Gets the list cache value for `key`.
       *
       * @private
       * @name get
       * @memberOf ListCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */


      function listCacheGet(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
      }

      module.exports = listCacheGet;

      /***/
    }),
/* 184 */
/***/ (function (module, exports, __webpack_require__) {

      var assocIndexOf = __webpack_require__(30);
      /**
       * Checks if a list cache value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf ListCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */


      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }

      module.exports = listCacheHas;

      /***/
    }),
/* 185 */
/***/ (function (module, exports, __webpack_require__) {

      var assocIndexOf = __webpack_require__(30);
      /**
       * Sets the list cache `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf ListCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the list cache instance.
       */


      function listCacheSet(key, value) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }

        return this;
      }

      module.exports = listCacheSet;

      /***/
    }),
/* 186 */
/***/ (function (module, exports, __webpack_require__) {

      var ListCache = __webpack_require__(29);
      /**
       * Removes all key-value entries from the stack.
       *
       * @private
       * @name clear
       * @memberOf Stack
       */


      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }

      module.exports = stackClear;

      /***/
    }),
/* 187 */
/***/ (function (module, exports) {

      /**
       * Removes `key` and its value from the stack.
       *
       * @private
       * @name delete
       * @memberOf Stack
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function stackDelete(key) {
        var data = this.__data__,
          result = data['delete'](key);
        this.size = data.size;
        return result;
      }

      module.exports = stackDelete;

      /***/
    }),
/* 188 */
/***/ (function (module, exports) {

      /**
       * Gets the stack value for `key`.
       *
       * @private
       * @name get
       * @memberOf Stack
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function stackGet(key) {
        return this.__data__.get(key);
      }

      module.exports = stackGet;

      /***/
    }),
/* 189 */
/***/ (function (module, exports) {

      /**
       * Checks if a stack value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Stack
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function stackHas(key) {
        return this.__data__.has(key);
      }

      module.exports = stackHas;

      /***/
    }),
/* 190 */
/***/ (function (module, exports, __webpack_require__) {

      var ListCache = __webpack_require__(29),
        Map = __webpack_require__(79),
        MapCache = __webpack_require__(81);
      /** Used as the size to enable large array optimizations. */


      var LARGE_ARRAY_SIZE = 200;
      /**
       * Sets the stack `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Stack
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the stack cache instance.
       */

      function stackSet(key, value) {
        var data = this.__data__;

        if (data instanceof ListCache) {
          var pairs = data.__data__;

          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }

          data = this.__data__ = new MapCache(pairs);
        }

        data.set(key, value);
        this.size = data.size;
        return this;
      }

      module.exports = stackSet;

      /***/
    }),
/* 191 */
/***/ (function (module, exports, __webpack_require__) {

      var isFunction = __webpack_require__(44),
        isMasked = __webpack_require__(194),
        isObject = __webpack_require__(13),
        toSource = __webpack_require__(196);
      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */


      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      /** Used to detect host constructors (Safari). */

      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      /** Used for built-in method references. */

      var funcProto = Function.prototype,
        objectProto = Object.prototype;
      /** Used to resolve the decompiled source of functions. */

      var funcToString = funcProto.toString;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /** Used to detect if a method is native. */

      var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      /**
       * The base implementation of `_.isNative` without bad shim checks.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       */

      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }

        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }

      module.exports = baseIsNative;

      /***/
    }),
/* 192 */
/***/ (function (module, exports, __webpack_require__) {

      var Symbol = __webpack_require__(32);
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      var nativeObjectToString = objectProto.toString;
      /** Built-in value references. */

      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */

      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) { }

        var result = nativeObjectToString.call(value);

        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }

        return result;
      }

      module.exports = getRawTag;

      /***/
    }),
/* 193 */
/***/ (function (module, exports) {

      /** Used for built-in method references. */
      var objectProto = Object.prototype;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      var nativeObjectToString = objectProto.toString;
      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */

      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;

      /***/
    }),
/* 194 */
/***/ (function (module, exports, __webpack_require__) {

      var coreJsData = __webpack_require__(195);
      /** Used to detect methods masquerading as native. */


      var maskSrcKey = function () {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
        return uid ? 'Symbol(src)_1.' + uid : '';
      }();
      /**
       * Checks if `func` has its source masked.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` is masked, else `false`.
       */


      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }

      module.exports = isMasked;

      /***/
    }),
/* 195 */
/***/ (function (module, exports, __webpack_require__) {

      var root = __webpack_require__(20);
      /** Used to detect overreaching core-js shims. */


      var coreJsData = root['__core-js_shared__'];
      module.exports = coreJsData;

      /***/
    }),
/* 196 */
/***/ (function (module, exports) {

      /** Used for built-in method references. */
      var funcProto = Function.prototype;
      /** Used to resolve the decompiled source of functions. */

      var funcToString = funcProto.toString;
      /**
       * Converts `func` to its source code.
       *
       * @private
       * @param {Function} func The function to convert.
       * @returns {string} Returns the source code.
       */

      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) { }

          try {
            return func + '';
          } catch (e) { }
        }

        return '';
      }

      module.exports = toSource;

      /***/
    }),
/* 197 */
/***/ (function (module, exports) {

      /**
       * Gets the value at `key` of `object`.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }

      module.exports = getValue;

      /***/
    }),
/* 198 */
/***/ (function (module, exports, __webpack_require__) {

      var Hash = __webpack_require__(199),
        ListCache = __webpack_require__(29),
        Map = __webpack_require__(79);
      /**
       * Removes all key-value entries from the map.
       *
       * @private
       * @name clear
       * @memberOf MapCache
       */


      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          'hash': new Hash(),
          'map': new (Map || ListCache)(),
          'string': new Hash()
        };
      }

      module.exports = mapCacheClear;

      /***/
    }),
/* 199 */
/***/ (function (module, exports, __webpack_require__) {

      var hashClear = __webpack_require__(200),
        hashDelete = __webpack_require__(201),
        hashGet = __webpack_require__(202),
        hashHas = __webpack_require__(203),
        hashSet = __webpack_require__(204);
      /**
       * Creates a hash object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */


      function Hash(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;
        this.clear();

        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      } // Add methods to `Hash`.


      Hash.prototype.clear = hashClear;
      Hash.prototype['delete'] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;

      /***/
    }),
/* 200 */
/***/ (function (module, exports, __webpack_require__) {

      var nativeCreate = __webpack_require__(33);
      /**
       * Removes all key-value entries from the hash.
       *
       * @private
       * @name clear
       * @memberOf Hash
       */


      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }

      module.exports = hashClear;

      /***/
    }),
/* 201 */
/***/ (function (module, exports) {

      /**
       * Removes `key` and its value from the hash.
       *
       * @private
       * @name delete
       * @memberOf Hash
       * @param {Object} hash The hash to modify.
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }

      module.exports = hashDelete;

      /***/
    }),
/* 202 */
/***/ (function (module, exports, __webpack_require__) {

      var nativeCreate = __webpack_require__(33);
      /** Used to stand-in for `undefined` hash values. */


      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      /** Used for built-in method references. */

      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Gets the hash value for `key`.
       *
       * @private
       * @name get
       * @memberOf Hash
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */

      function hashGet(key) {
        var data = this.__data__;

        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }

        return hasOwnProperty.call(data, key) ? data[key] : undefined;
      }

      module.exports = hashGet;

      /***/
    }),
/* 203 */
/***/ (function (module, exports, __webpack_require__) {

      var nativeCreate = __webpack_require__(33);
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Checks if a hash value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Hash
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */

      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
      }

      module.exports = hashHas;

      /***/
    }),
/* 204 */
/***/ (function (module, exports, __webpack_require__) {

      var nativeCreate = __webpack_require__(33);
      /** Used to stand-in for `undefined` hash values. */


      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      /**
       * Sets the hash `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Hash
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the hash instance.
       */

      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
        return this;
      }

      module.exports = hashSet;

      /***/
    }),
/* 205 */
/***/ (function (module, exports, __webpack_require__) {

      var getMapData = __webpack_require__(34);
      /**
       * Removes `key` and its value from the map.
       *
       * @private
       * @name delete
       * @memberOf MapCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */


      function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
      }

      module.exports = mapCacheDelete;

      /***/
    }),
/* 206 */
/***/ (function (module, exports) {

      /**
       * Checks if `value` is suitable for use as unique object key.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
       */
      function isKeyable(value) {
        var type = typeof value;
        return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
      }

      module.exports = isKeyable;

      /***/
    }),
/* 207 */
/***/ (function (module, exports, __webpack_require__) {

      var getMapData = __webpack_require__(34);
      /**
       * Gets the map value for `key`.
       *
       * @private
       * @name get
       * @memberOf MapCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */


      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }

      module.exports = mapCacheGet;

      /***/
    }),
/* 208 */
/***/ (function (module, exports, __webpack_require__) {

      var getMapData = __webpack_require__(34);
      /**
       * Checks if a map value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf MapCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */


      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }

      module.exports = mapCacheHas;

      /***/
    }),
/* 209 */
/***/ (function (module, exports, __webpack_require__) {

      var getMapData = __webpack_require__(34);
      /**
       * Sets the map `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf MapCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the map cache instance.
       */


      function mapCacheSet(key, value) {
        var data = getMapData(this, key),
          size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }

      module.exports = mapCacheSet;

      /***/
    }),
/* 210 */
/***/ (function (module, exports, __webpack_require__) {

      var createBaseFor = __webpack_require__(211);
      /**
       * The base implementation of `baseForOwn` which iterates over `object`
       * properties returned by `keysFunc` and invokes `iteratee` for each property.
       * Iteratee functions may exit iteration early by explicitly returning `false`.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */


      var baseFor = createBaseFor();
      module.exports = baseFor;

      /***/
    }),
/* 211 */
/***/ (function (module, exports) {

      /**
       * Creates a base function for methods like `_.forIn` and `_.forOwn`.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new base function.
       */
      function createBaseFor(fromRight) {
        return function (object, iteratee, keysFunc) {
          var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

          while (length--) {
            var key = props[fromRight ? length : ++index];

            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }

          return object;
        };
      }

      module.exports = createBaseFor;

      /***/
    }),
/* 212 */
/***/ (function (module, exports, __webpack_require__) {

      var assignMergeValue = __webpack_require__(82),
        cloneBuffer = __webpack_require__(213),
        cloneTypedArray = __webpack_require__(214),
        copyArray = __webpack_require__(217),
        initCloneObject = __webpack_require__(218),
        isArguments = __webpack_require__(35),
        isArray = __webpack_require__(14),
        isArrayLikeObject = __webpack_require__(222),
        isBuffer = __webpack_require__(86),
        isFunction = __webpack_require__(44),
        isObject = __webpack_require__(13),
        isPlainObject = __webpack_require__(224),
        isTypedArray = __webpack_require__(87),
        safeGet = __webpack_require__(88),
        toPlainObject = __webpack_require__(228);
      /**
       * A specialized version of `baseMerge` for arrays and objects which performs
       * deep merges and tracks traversed objects enabling objects with circular
       * references to be merged.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {string} key The key of the value to merge.
       * @param {number} srcIndex The index of `source`.
       * @param {Function} mergeFunc The function to merge values.
       * @param {Function} [customizer] The function to customize assigned values.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       */


      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }

        var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
        var isCommon = newValue === undefined;

        if (isCommon) {
          var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;

          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;

            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }

        if (isCommon) {
          // Recursively merge objects and arrays (susceptible to call stack limits).
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack['delete'](srcValue);
        }

        assignMergeValue(object, key, newValue);
      }

      module.exports = baseMergeDeep;

      /***/
    }),
/* 213 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (module) {
        var root = __webpack_require__(20);
        /** Detect free variable `exports`. */


        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */

        var Buffer = moduleExports ? root.Buffer : undefined,
          allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
        /**
         * Creates a clone of  `buffer`.
         *
         * @private
         * @param {Buffer} buffer The buffer to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Buffer} Returns the cloned buffer.
         */

        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }

          var length = buffer.length,
            result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result);
          return result;
        }

        module.exports = cloneBuffer;
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(46)(module)))

      /***/
    }),
/* 214 */
/***/ (function (module, exports, __webpack_require__) {

      var cloneArrayBuffer = __webpack_require__(215);
      /**
       * Creates a clone of `typedArray`.
       *
       * @private
       * @param {Object} typedArray The typed array to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the cloned typed array.
       */


      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }

      module.exports = cloneTypedArray;

      /***/
    }),
/* 215 */
/***/ (function (module, exports, __webpack_require__) {

      var Uint8Array = __webpack_require__(216);
      /**
       * Creates a clone of `arrayBuffer`.
       *
       * @private
       * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
       * @returns {ArrayBuffer} Returns the cloned array buffer.
       */


      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result).set(new Uint8Array(arrayBuffer));
        return result;
      }

      module.exports = cloneArrayBuffer;

      /***/
    }),
/* 216 */
/***/ (function (module, exports, __webpack_require__) {

      var root = __webpack_require__(20);
      /** Built-in value references. */


      var Uint8Array = root.Uint8Array;
      module.exports = Uint8Array;

      /***/
    }),
/* 217 */
/***/ (function (module, exports) {

      /**
       * Copies the values of `source` to `array`.
       *
       * @private
       * @param {Array} source The array to copy values from.
       * @param {Array} [array=[]] The array to copy values to.
       * @returns {Array} Returns `array`.
       */
      function copyArray(source, array) {
        var index = -1,
          length = source.length;
        array || (array = Array(length));

        while (++index < length) {
          array[index] = source[index];
        }

        return array;
      }

      module.exports = copyArray;

      /***/
    }),
/* 218 */
/***/ (function (module, exports, __webpack_require__) {

      var baseCreate = __webpack_require__(219),
        getPrototype = __webpack_require__(84),
        isPrototype = __webpack_require__(85);
      /**
       * Initializes an object clone.
       *
       * @private
       * @param {Object} object The object to clone.
       * @returns {Object} Returns the initialized clone.
       */


      function initCloneObject(object) {
        return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }

      module.exports = initCloneObject;

      /***/
    }),
/* 219 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(13);
      /** Built-in value references. */


      var objectCreate = Object.create;
      /**
       * The base implementation of `_.create` without support for assigning
       * properties to the created object.
       *
       * @private
       * @param {Object} proto The object to inherit from.
       * @returns {Object} Returns the new object.
       */

      var baseCreate = function () {
        function object() { }

        return function (proto) {
          if (!isObject(proto)) {
            return {};
          }

          if (objectCreate) {
            return objectCreate(proto);
          }

          object.prototype = proto;
          var result = new object();
          object.prototype = undefined;
          return result;
        };
      }();

      module.exports = baseCreate;

      /***/
    }),
/* 220 */
/***/ (function (module, exports) {

      /**
       * Creates a unary function that invokes `func` with its argument transformed.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {Function} transform The argument transform.
       * @returns {Function} Returns the new function.
       */
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }

      module.exports = overArg;

      /***/
    }),
/* 221 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGetTag = __webpack_require__(25),
        isObjectLike = __webpack_require__(21);
      /** `Object#toString` result references. */


      var argsTag = '[object Arguments]';
      /**
       * The base implementation of `_.isArguments`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       */

      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }

      module.exports = baseIsArguments;

      /***/
    }),
/* 222 */
/***/ (function (module, exports, __webpack_require__) {

      var isArrayLike = __webpack_require__(47),
        isObjectLike = __webpack_require__(21);
      /**
       * This method is like `_.isArrayLike` except that it also checks if `value`
       * is an object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array-like object,
       *  else `false`.
       * @example
       *
       * _.isArrayLikeObject([1, 2, 3]);
       * // => true
       *
       * _.isArrayLikeObject(document.body.children);
       * // => true
       *
       * _.isArrayLikeObject('abc');
       * // => false
       *
       * _.isArrayLikeObject(_.noop);
       * // => false
       */


      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }

      module.exports = isArrayLikeObject;

      /***/
    }),
/* 223 */
/***/ (function (module, exports) {

      /**
       * This method returns `false`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `false`.
       * @example
       *
       * _.times(2, _.stubFalse);
       * // => [false, false]
       */
      function stubFalse() {
        return false;
      }

      module.exports = stubFalse;

      /***/
    }),
/* 224 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGetTag = __webpack_require__(25),
        getPrototype = __webpack_require__(84),
        isObjectLike = __webpack_require__(21);
      /** `Object#toString` result references. */


      var objectTag = '[object Object]';
      /** Used for built-in method references. */

      var funcProto = Function.prototype,
        objectProto = Object.prototype;
      /** Used to resolve the decompiled source of functions. */

      var funcToString = funcProto.toString;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /** Used to infer the `Object` constructor. */

      var objectCtorString = funcToString.call(Object);
      /**
       * Checks if `value` is a plain object, that is, an object created by the
       * `Object` constructor or one with a `[[Prototype]]` of `null`.
       *
       * @static
       * @memberOf _
       * @since 0.8.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * _.isPlainObject(new Foo);
       * // => false
       *
       * _.isPlainObject([1, 2, 3]);
       * // => false
       *
       * _.isPlainObject({ 'x': 0, 'y': 0 });
       * // => true
       *
       * _.isPlainObject(Object.create(null));
       * // => true
       */

      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }

        var proto = getPrototype(value);

        if (proto === null) {
          return true;
        }

        var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }

      module.exports = isPlainObject;

      /***/
    }),
/* 225 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGetTag = __webpack_require__(25),
        isLength = __webpack_require__(48),
        isObjectLike = __webpack_require__(21);
      /** `Object#toString` result references. */


      var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';
      var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
      /** Used to identify `toStringTag` values of typed arrays. */

      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      /**
       * The base implementation of `_.isTypedArray` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       */

      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }

      module.exports = baseIsTypedArray;

      /***/
    }),
/* 226 */
/***/ (function (module, exports) {

      /**
       * The base implementation of `_.unary` without support for storing metadata.
       *
       * @private
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       */
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }

      module.exports = baseUnary;

      /***/
    }),
/* 227 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (module) {
        var freeGlobal = __webpack_require__(80);
        /** Detect free variable `exports`. */


        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Detect free variable `process` from Node.js. */

        var freeProcess = moduleExports && freeGlobal.process;
        /** Used to access faster Node.js helpers. */

        var nodeUtil = function () {
          try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule && freeModule.require && freeModule.require('util').types;

            if (types) {
              return types;
            } // Legacy `process.binding('util')` for Node.js < 10.


            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          } catch (e) { }
        }();

        module.exports = nodeUtil;
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(46)(module)))

      /***/
    }),
/* 228 */
/***/ (function (module, exports, __webpack_require__) {

      var copyObject = __webpack_require__(229),
        keysIn = __webpack_require__(90);
      /**
       * Converts `value` to a plain object flattening inherited enumerable string
       * keyed properties of `value` to own properties of the plain object.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {Object} Returns the converted plain object.
       * @example
       *
       * function Foo() {
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.assign({ 'a': 1 }, new Foo);
       * // => { 'a': 1, 'b': 2 }
       *
       * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
       * // => { 'a': 1, 'b': 2, 'c': 3 }
       */


      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }

      module.exports = toPlainObject;

      /***/
    }),
/* 229 */
/***/ (function (module, exports, __webpack_require__) {

      var assignValue = __webpack_require__(89),
        baseAssignValue = __webpack_require__(45);
      /**
       * Copies properties of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy properties from.
       * @param {Array} props The property identifiers to copy.
       * @param {Object} [object={}] The object to copy properties to.
       * @param {Function} [customizer] The function to customize copied values.
       * @returns {Object} Returns `object`.
       */


      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1,
          length = props.length;

        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

          if (newValue === undefined) {
            newValue = source[key];
          }

          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }

        return object;
      }

      module.exports = copyObject;

      /***/
    }),
/* 230 */
/***/ (function (module, exports, __webpack_require__) {

      var baseTimes = __webpack_require__(231),
        isArguments = __webpack_require__(35),
        isArray = __webpack_require__(14),
        isBuffer = __webpack_require__(86),
        isIndex = __webpack_require__(36),
        isTypedArray = __webpack_require__(87);
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Creates an array of the enumerable property names of the array-like `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @param {boolean} inherited Specify returning inherited property names.
       * @returns {Array} Returns the array of property names.
       */

      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
            key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
            isIndex(key, length)))) {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = arrayLikeKeys;

      /***/
    }),
/* 231 */
/***/ (function (module, exports) {

      /**
       * The base implementation of `_.times` without support for iteratee shorthands
       * or max array length checks.
       *
       * @private
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the array of results.
       */
      function baseTimes(n, iteratee) {
        var index = -1,
          result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }

        return result;
      }

      module.exports = baseTimes;

      /***/
    }),
/* 232 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(13),
        isPrototype = __webpack_require__(85),
        nativeKeysIn = __webpack_require__(233);
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */

      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }

        var isProto = isPrototype(object),
          result = [];

        for (var key in object) {
          if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = baseKeysIn;

      /***/
    }),
/* 233 */
/***/ (function (module, exports) {

      /**
       * This function is like
       * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * except that it includes inherited enumerable properties.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function nativeKeysIn(object) {
        var result = [];

        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = nativeKeysIn;

      /***/
    }),
/* 234 */
/***/ (function (module, exports, __webpack_require__) {

      var baseRest = __webpack_require__(235),
        isIterateeCall = __webpack_require__(240);
      /**
       * Creates a function like `_.assign`.
       *
       * @private
       * @param {Function} assigner The function to assign values.
       * @returns {Function} Returns the new assigner function.
       */


      function createAssigner(assigner) {
        return baseRest(function (object, sources) {
          var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;
          customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
          }

          object = Object(object);

          while (++index < length) {
            var source = sources[index];

            if (source) {
              assigner(object, source, index, customizer);
            }
          }

          return object;
        });
      }

      module.exports = createAssigner;

      /***/
    }),
/* 235 */
/***/ (function (module, exports, __webpack_require__) {

      var identity = __webpack_require__(91),
        overRest = __webpack_require__(92),
        setToString = __webpack_require__(93);
      /**
       * The base implementation of `_.rest` which doesn't validate or coerce arguments.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       */


      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + '');
      }

      module.exports = baseRest;

      /***/
    }),
/* 236 */
/***/ (function (module, exports) {

      /**
       * A faster alternative to `Function#apply`, this function invokes `func`
       * with the `this` binding of `thisArg` and the arguments of `args`.
       *
       * @private
       * @param {Function} func The function to invoke.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} args The arguments to invoke `func` with.
       * @returns {*} Returns the result of `func`.
       */
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);

          case 1:
            return func.call(thisArg, args[0]);

          case 2:
            return func.call(thisArg, args[0], args[1]);

          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }

        return func.apply(thisArg, args);
      }

      module.exports = apply;

      /***/
    }),
/* 237 */
/***/ (function (module, exports, __webpack_require__) {

      var constant = __webpack_require__(238),
        defineProperty = __webpack_require__(83),
        identity = __webpack_require__(91);
      /**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */


      var baseSetToString = !defineProperty ? identity : function (func, string) {
        return defineProperty(func, 'toString', {
          'configurable': true,
          'enumerable': false,
          'value': constant(string),
          'writable': true
        });
      };
      module.exports = baseSetToString;

      /***/
    }),
/* 238 */
/***/ (function (module, exports) {

      /**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new constant function.
       * @example
       *
       * var objects = _.times(2, _.constant({ 'a': 1 }));
       *
       * console.log(objects);
       * // => [{ 'a': 1 }, { 'a': 1 }]
       *
       * console.log(objects[0] === objects[1]);
       * // => true
       */
      function constant(value) {
        return function () {
          return value;
        };
      }

      module.exports = constant;

      /***/
    }),
/* 239 */
/***/ (function (module, exports) {

      /** Used to detect hot functions by number of calls within a span of milliseconds. */
      var HOT_COUNT = 800,
        HOT_SPAN = 16;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      var nativeNow = Date.now;
      /**
       * Creates a function that'll short out and invoke `identity` instead
       * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
       * milliseconds.
       *
       * @private
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new shortable function.
       */

      function shortOut(func) {
        var count = 0,
          lastCalled = 0;
        return function () {
          var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;

          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }

          return func.apply(undefined, arguments);
        };
      }

      module.exports = shortOut;

      /***/
    }),
/* 240 */
/***/ (function (module, exports, __webpack_require__) {

      var eq = __webpack_require__(31),
        isArrayLike = __webpack_require__(47),
        isIndex = __webpack_require__(36),
        isObject = __webpack_require__(13);
      /**
       * Checks if the given arguments are from an iteratee call.
       *
       * @private
       * @param {*} value The potential iteratee value argument.
       * @param {*} index The potential iteratee index or key argument.
       * @param {*} object The potential iteratee object argument.
       * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
       *  else `false`.
       */


      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }

        var type = typeof index;

        if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
          return eq(object[index], value);
        }

        return false;
      }

      module.exports = isIterateeCall;

      /***/
    }),
/* 241 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayLikeToArray = __webpack_require__(57);

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return arrayLikeToArray(arr);
      }

      module.exports = _arrayWithoutHoles;

      /***/
    }),
/* 242 */
/***/ (function (module, exports) {

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      module.exports = _iterableToArray;

      /***/
    }),
/* 243 */
/***/ (function (module, exports) {

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      module.exports = _nonIterableSpread;

      /***/
    }),
/* 244 */
/***/ (function (module, exports, __webpack_require__) {

      var getPrototypeOf = __webpack_require__(2);

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      module.exports = _superPropBase;

      /***/
    }),
/* 245 */
/***/ (function (module, exports, __webpack_require__) {

      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var runtime = function (exports) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() { }

        function GeneratorFunction() { }

        function GeneratorFunctionPrototype() { } // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;

            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = "GeneratorFunction";
            }
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;
                  return next;
                };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function (skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function () {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function (exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function (record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function (iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        true ? module.exports : undefined);

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
      }

      /***/
    }),
/* 246 */
/***/ (function (module, exports, __webpack_require__) {

      var basePickBy = __webpack_require__(247),
        hasIn = __webpack_require__(257);
      /**
       * The base implementation of `_.pick` without support for individual
       * property identifiers.
       *
       * @private
       * @param {Object} object The source object.
       * @param {string[]} paths The property paths to pick.
       * @returns {Object} Returns the new object.
       */


      function basePick(object, paths) {
        return basePickBy(object, paths, function (value, path) {
          return hasIn(object, path);
        });
      }

      module.exports = basePick;

      /***/
    }),
/* 247 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGet = __webpack_require__(248),
        baseSet = __webpack_require__(256),
        castPath = __webpack_require__(37);
      /**
       * The base implementation of  `_.pickBy` without support for iteratee shorthands.
       *
       * @private
       * @param {Object} object The source object.
       * @param {string[]} paths The property paths to pick.
       * @param {Function} predicate The function invoked per property.
       * @returns {Object} Returns the new object.
       */


      function basePickBy(object, paths, predicate) {
        var index = -1,
          length = paths.length,
          result = {};

        while (++index < length) {
          var path = paths[index],
            value = baseGet(object, path);

          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }

        return result;
      }

      module.exports = basePickBy;

      /***/
    }),
/* 248 */
/***/ (function (module, exports, __webpack_require__) {

      var castPath = __webpack_require__(37),
        toKey = __webpack_require__(50);
      /**
       * The base implementation of `_.get` without support for default values.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the property to get.
       * @returns {*} Returns the resolved value.
       */


      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0,
          length = path.length;

        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }

        return index && index == length ? object : undefined;
      }

      module.exports = baseGet;

      /***/
    }),
/* 249 */
/***/ (function (module, exports, __webpack_require__) {

      var isArray = __webpack_require__(14),
        isSymbol = __webpack_require__(49);
      /** Used to match property names within property paths. */


      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;
      /**
       * Checks if `value` is a property name and not a property path.
       *
       * @private
       * @param {*} value The value to check.
       * @param {Object} [object] The object to query keys on.
       * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
       */

      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }

        var type = typeof value;

        if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
          return true;
        }

        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }

      module.exports = isKey;

      /***/
    }),
/* 250 */
/***/ (function (module, exports, __webpack_require__) {

      var memoizeCapped = __webpack_require__(251);
      /** Used to match property names within property paths. */


      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      /** Used to match backslashes in property paths. */

      var reEscapeChar = /\\(\\)?/g;
      /**
       * Converts `string` to a property path array.
       *
       * @private
       * @param {string} string The string to convert.
       * @returns {Array} Returns the property path array.
       */

      var stringToPath = memoizeCapped(function (string) {
        var result = [];

        if (string.charCodeAt(0) === 46
          /* . */
        ) {
          result.push('');
        }

        string.replace(rePropName, function (match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
        });
        return result;
      });
      module.exports = stringToPath;

      /***/
    }),
/* 251 */
/***/ (function (module, exports, __webpack_require__) {

      var memoize = __webpack_require__(252);
      /** Used as the maximum memoize cache size. */


      var MAX_MEMOIZE_SIZE = 500;
      /**
       * A specialized version of `_.memoize` which clears the memoized function's
       * cache when it exceeds `MAX_MEMOIZE_SIZE`.
       *
       * @private
       * @param {Function} func The function to have its output memoized.
       * @returns {Function} Returns the new memoized function.
       */

      function memoizeCapped(func) {
        var result = memoize(func, function (key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }

          return key;
        });
        var cache = result.cache;
        return result;
      }

      module.exports = memoizeCapped;

      /***/
    }),
/* 252 */
/***/ (function (module, exports, __webpack_require__) {

      var MapCache = __webpack_require__(81);
      /** Error message constants. */


      var FUNC_ERROR_TEXT = 'Expected a function';
      /**
       * Creates a function that memoizes the result of `func`. If `resolver` is
       * provided, it determines the cache key for storing the result based on the
       * arguments provided to the memoized function. By default, the first argument
       * provided to the memoized function is used as the map cache key. The `func`
       * is invoked with the `this` binding of the memoized function.
       *
       * **Note:** The cache is exposed as the `cache` property on the memoized
       * function. Its creation may be customized by replacing the `_.memoize.Cache`
       * constructor with one whose instances implement the
       * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
       * method interface of `clear`, `delete`, `get`, `has`, and `set`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to have its output memoized.
       * @param {Function} [resolver] The function to resolve the cache key.
       * @returns {Function} Returns the new memoized function.
       * @example
       *
       * var object = { 'a': 1, 'b': 2 };
       * var other = { 'c': 3, 'd': 4 };
       *
       * var values = _.memoize(_.values);
       * values(object);
       * // => [1, 2]
       *
       * values(other);
       * // => [3, 4]
       *
       * object.a = 2;
       * values(object);
       * // => [1, 2]
       *
       * // Modify the result cache.
       * values.cache.set(object, ['a', 'b']);
       * values(object);
       * // => ['a', 'b']
       *
       * // Replace `_.memoize.Cache`.
       * _.memoize.Cache = WeakMap;
       */

      function memoize(func, resolver) {
        if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }

        var memoized = function () {
          var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

          if (cache.has(key)) {
            return cache.get(key);
          }

          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };

        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      } // Expose `MapCache`.


      memoize.Cache = MapCache;
      module.exports = memoize;

      /***/
    }),
/* 253 */
/***/ (function (module, exports, __webpack_require__) {

      var baseToString = __webpack_require__(254);
      /**
       * Converts `value` to a string. An empty string is returned for `null`
       * and `undefined` values. The sign of `-0` is preserved.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.toString(null);
       * // => ''
       *
       * _.toString(-0);
       * // => '-0'
       *
       * _.toString([1, 2, 3]);
       * // => '1,2,3'
       */


      function toString(value) {
        return value == null ? '' : baseToString(value);
      }

      module.exports = toString;

      /***/
    }),
/* 254 */
/***/ (function (module, exports, __webpack_require__) {

      var Symbol = __webpack_require__(32),
        arrayMap = __webpack_require__(255),
        isArray = __webpack_require__(14),
        isSymbol = __webpack_require__(49);
      /** Used as references for various `Number` constants. */


      var INFINITY = 1 / 0;
      /** Used to convert symbols to primitives and strings. */

      var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;
      /**
       * The base implementation of `_.toString` which doesn't convert nullish
       * values to empty strings.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {string} Returns the string.
       */

      function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
          return value;
        }

        if (isArray(value)) {
          // Recursively convert values (susceptible to call stack limits).
          return arrayMap(value, baseToString) + '';
        }

        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : '';
        }

        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
      }

      module.exports = baseToString;

      /***/
    }),
/* 255 */
/***/ (function (module, exports) {

      /**
       * A specialized version of `_.map` for arrays without support for iteratee
       * shorthands.
       *
       * @private
       * @param {Array} [array] The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       */
      function arrayMap(array, iteratee) {
        var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }

        return result;
      }

      module.exports = arrayMap;

      /***/
    }),
/* 256 */
/***/ (function (module, exports, __webpack_require__) {

      var assignValue = __webpack_require__(89),
        castPath = __webpack_require__(37),
        isIndex = __webpack_require__(36),
        isObject = __webpack_require__(13),
        toKey = __webpack_require__(50);
      /**
       * The base implementation of `_.set`.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to set.
       * @param {*} value The value to set.
       * @param {Function} [customizer] The function to customize path creation.
       * @returns {Object} Returns `object`.
       */


      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }

        path = castPath(path, object);
        var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

        while (nested != null && ++index < length) {
          var key = toKey(path[index]),
            newValue = value;

          if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return object;
          }

          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;

            if (newValue === undefined) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }

          assignValue(nested, key, newValue);
          nested = nested[key];
        }

        return object;
      }

      module.exports = baseSet;

      /***/
    }),
/* 257 */
/***/ (function (module, exports, __webpack_require__) {

      var baseHasIn = __webpack_require__(258),
        hasPath = __webpack_require__(259);
      /**
       * Checks if `path` is a direct or inherited property of `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path to check.
       * @returns {boolean} Returns `true` if `path` exists, else `false`.
       * @example
       *
       * var object = _.create({ 'a': _.create({ 'b': 2 }) });
       *
       * _.hasIn(object, 'a');
       * // => true
       *
       * _.hasIn(object, 'a.b');
       * // => true
       *
       * _.hasIn(object, ['a', 'b']);
       * // => true
       *
       * _.hasIn(object, 'b');
       * // => false
       */


      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }

      module.exports = hasIn;

      /***/
    }),
/* 258 */
/***/ (function (module, exports) {

      /**
       * The base implementation of `_.hasIn` without support for deep paths.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {Array|string} key The key to check.
       * @returns {boolean} Returns `true` if `key` exists, else `false`.
       */
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }

      module.exports = baseHasIn;

      /***/
    }),
/* 259 */
/***/ (function (module, exports, __webpack_require__) {

      var castPath = __webpack_require__(37),
        isArguments = __webpack_require__(35),
        isArray = __webpack_require__(14),
        isIndex = __webpack_require__(36),
        isLength = __webpack_require__(48),
        toKey = __webpack_require__(50);
      /**
       * Checks if `path` exists on `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array|string} path The path to check.
       * @param {Function} hasFunc The function to check properties.
       * @returns {boolean} Returns `true` if `path` exists, else `false`.
       */


      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1,
          length = path.length,
          result = false;

        while (++index < length) {
          var key = toKey(path[index]);

          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }

          object = object[key];
        }

        if (result || ++index != length) {
          return result;
        }

        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }

      module.exports = hasPath;

      /***/
    }),
/* 260 */
/***/ (function (module, exports, __webpack_require__) {

      var flatten = __webpack_require__(261),
        overRest = __webpack_require__(92),
        setToString = __webpack_require__(93);
      /**
       * A specialized version of `baseRest` which flattens the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @returns {Function} Returns the new function.
       */


      function flatRest(func) {
        return setToString(overRest(func, undefined, flatten), func + '');
      }

      module.exports = flatRest;

      /***/
    }),
/* 261 */
/***/ (function (module, exports, __webpack_require__) {

      var baseFlatten = __webpack_require__(262);
      /**
       * Flattens `array` a single level deep.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to flatten.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * _.flatten([1, [2, [3, [4]], 5]]);
       * // => [1, 2, [3, [4]], 5]
       */


      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }

      module.exports = flatten;

      /***/
    }),
/* 262 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayPush = __webpack_require__(263),
        isFlattenable = __webpack_require__(264);
      /**
       * The base implementation of `_.flatten` with support for restricting flattening.
       *
       * @private
       * @param {Array} array The array to flatten.
       * @param {number} depth The maximum recursion depth.
       * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
       * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
       * @param {Array} [result=[]] The initial result value.
       * @returns {Array} Returns the new flattened array.
       */


      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1,
          length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);

        while (++index < length) {
          var value = array[index];

          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              // Recursively flatten arrays (susceptible to call stack limits).
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }

        return result;
      }

      module.exports = baseFlatten;

      /***/
    }),
/* 263 */
/***/ (function (module, exports) {

      /**
       * Appends the elements of `values` to `array`.
       *
       * @private
       * @param {Array} array The array to modify.
       * @param {Array} values The values to append.
       * @returns {Array} Returns `array`.
       */
      function arrayPush(array, values) {
        var index = -1,
          length = values.length,
          offset = array.length;

        while (++index < length) {
          array[offset + index] = values[index];
        }

        return array;
      }

      module.exports = arrayPush;

      /***/
    }),
/* 264 */
/***/ (function (module, exports, __webpack_require__) {

      var Symbol = __webpack_require__(32),
        isArguments = __webpack_require__(35),
        isArray = __webpack_require__(14);
      /** Built-in value references. */


      var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
      /**
       * Checks if `value` is a flattenable `arguments` object or array.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
       */

      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }

      module.exports = isFlattenable;

      /***/
    }),
/* 265 */
/***/ (function (module, exports) {

      module.exports = determinant;
      /**
       * Calculates the determinant of a mat2
       *
       * @alias mat2.determinant
       * @param {mat2} a the source matrix
       * @returns {Number} determinant of a
       */

      function determinant(a) {
        return a[0] * a[3] - a[2] * a[1];
      }

      /***/
    }),
/* 266 */
/***/ (function (module, exports) {

      module.exports = transpose;
      /**
       * Transpose the values of a mat2
       *
       * @alias mat2.transpose
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the source matrix
       * @returns {mat2} out
       */

      function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
          var a1 = a[1];
          out[1] = a[2];
          out[2] = a1;
        } else {
          out[0] = a[0];
          out[1] = a[2];
          out[2] = a[1];
          out[3] = a[3];
        }

        return out;
      }

      /***/
    }),
/* 267 */
/***/ (function (module, exports) {

      module.exports = multiply;
      /**
       * Multiplies two mat2's
       *
       * @alias mat2.multiply
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the first operand
       * @param {mat2} b the second operand
       * @returns {mat2} out
       */

      function multiply(out, a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        return out;
      }

      /***/
    }),
/* 268 */
/***/ (function (module, exports) {

      module.exports = identity;
      /**
       * Set a mat2 to the identity matrix
       *
       * @alias mat2.identity
       * @param {mat2} out the receiving matrix
       * @returns {mat2} out
       */

      function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }

      /***/
    }),
/* 269 */
/***/ (function (module, exports) {

      module.exports = adjoint;
      /**
       * Calculates the adjugate of a mat2
       *
       * @alias mat2.adjoint
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the source matrix
       * @returns {mat2} out
       */

      function adjoint(out, a) {
        // Caching this value is nessecary if out == a
        var a0 = a[0];
        out[0] = a[3];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a0;
        return out;
      }

      /***/
    }),
/* 270 */
/***/ (function (module, exports) {

      module.exports = rotate;
      /**
       * Rotates a mat2 by the given angle
       *
       * @alias mat2.rotate
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat2} out
       */

      function rotate(out, a, rad) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        return out;
      }

      /***/
    }),
/* 271 */
/***/ (function (module, exports) {

      module.exports = invert;
      /**
       * Inverts a mat2
       *
       * @alias mat2.invert
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the source matrix
       * @returns {mat2} out
       */

      function invert(out, a) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var det = a0 * a3 - a2 * a1;
        if (!det) return null;
        det = 1.0 / det;
        out[0] = a3 * det;
        out[1] = -a1 * det;
        out[2] = -a2 * det;
        out[3] = a0 * det;
        return out;
      }

      /***/
    }),
/* 272 */
/***/ (function (module, exports) {

      module.exports = create;
      /**
       * Creates a new identity mat2
       *
       * @alias mat2.create
       * @returns {mat2} a new 2x2 matrix
       */

      function create() {
        var out = new Float32Array(4);
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }

      /***/
    }),
/* 273 */
/***/ (function (module, exports) {

      module.exports = scale;
      /**
       * Scales the mat2 by the dimensions in the given vec2
       *
       * @alias mat2.scale
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the matrix to rotate
       * @param {vec2} v the vec2 to scale the matrix by
       * @returns {mat2} out
       **/

      function scale(out, a, v) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var v0 = v[0],
          v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        return out;
      }

      /***/
    }),
/* 274 */
/***/ (function (module, exports) {

      module.exports = copy;
      /**
       * Copy the values from one mat2 to another
       *
       * @alias mat2.copy
       * @param {mat2} out the receiving matrix
       * @param {mat2} a the source matrix
       * @returns {mat2} out
       */

      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }

      /***/
    }),
/* 275 */
/***/ (function (module, exports) {

      module.exports = frob;
      /**
       * Returns Frobenius norm of a mat2
       *
       * @alias mat2.frob
       * @param {mat2} a the matrix to calculate Frobenius norm of
       * @returns {Number} Frobenius norm
       */

      function frob(a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
      }

      /***/
    }),
/* 276 */
/***/ (function (module, exports) {

      module.exports = ldu;
      /**
       * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
       *
       * @alias mat2.ldu
       * @param {mat2} L the lower triangular matrix
       * @param {mat2} D the diagonal matrix
       * @param {mat2} U the upper triangular matrix
       * @param {mat2} a the input matrix to factorize
       */

      function ldu(L, D, U, a) {
        L[2] = a[2] / a[0];
        U[0] = a[0];
        U[1] = a[1];
        U[3] = a[3] - L[2] * U[1];
        return [L, D, U];
      }

      /***/
    }),
/* 277 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      } // Support decoding URL-safe base64 strings, as Node.js does.
      // See: https://en.wikipedia.org/wiki/Base64#URL_applications


      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function getLens(b64) {
        var len = b64.length;

        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        } // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42


        var validLen = b64.indexOf('=');
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      } // base64 is 4/3 + up to two characters of the original data


      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i;

        for (i = 0; i < len; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[curByte++] = tmp >> 16 & 0xFF;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];

        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
          output.push(tripletToBase64(tmp));
        }

        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3
        // go through the array every three bytes, we'll deal with trailing stuff later

        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        } // pad the end with zeros, but make sure to not forget the extra bytes


        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
        }

        return parts.join('');
      }

      /***/
    }),
/* 278 */
/***/ (function (module, exports) {

      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;

        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) { }

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;

        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) { }

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }

        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);

          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }

          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }

          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) { }

        e = e << mLen | m;
        eLen += mLen;

        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) { }

        buffer[offset + i - d] |= s * 128;
      };

      /***/
    }),
/* 279 */
/***/ (function (module, exports) {

      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };

      /***/
    }),
/* 280 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
        // backported and transplited with Babel, with backwards-compat fixes
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        // resolves . and .. elements in a path array with directory names there
        // must be no slashes, empty elements, or device names (c:\) in the array
        // (so also no leading and trailing slashes - it does not distinguish
        // relative and absolute paths)
        function normalizeArray(parts, allowAboveRoot) {
          // if the path tries to go above the root, `up` ends up > 0
          var up = 0;

          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];

            if (last === '.') {
              parts.splice(i, 1);
            } else if (last === '..') {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          } // if the path is allowed to go above the root, restore leading ..s


          if (allowAboveRoot) {
            for (; up--; up) {
              parts.unshift('..');
            }
          }

          return parts;
        } // path.resolve([from ...], to)
        // posix version


        exports.resolve = function () {
          var resolvedPath = '',
            resolvedAbsolute = false;

          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

            if (typeof path !== 'string') {
              throw new TypeError('Arguments to path.resolve must be strings');
            } else if (!path) {
              continue;
            }

            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charAt(0) === '/';
          } // At this point the path should be resolved to a full absolute path, but
          // handle relative paths to be safe (might happen when process.cwd() fails)
          // Normalize the path


          resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
            return !!p;
          }), !resolvedAbsolute).join('/');
          return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
        }; // path.normalize(path)
        // posix version


        exports.normalize = function (path) {
          var isAbsolute = exports.isAbsolute(path),
            trailingSlash = substr(path, -1) === '/'; // Normalize the path

          path = normalizeArray(filter(path.split('/'), function (p) {
            return !!p;
          }), !isAbsolute).join('/');

          if (!path && !isAbsolute) {
            path = '.';
          }

          if (path && trailingSlash) {
            path += '/';
          }

          return (isAbsolute ? '/' : '') + path;
        }; // posix version


        exports.isAbsolute = function (path) {
          return path.charAt(0) === '/';
        }; // posix version


        exports.join = function () {
          var paths = Array.prototype.slice.call(arguments, 0);
          return exports.normalize(filter(paths, function (p, index) {
            if (typeof p !== 'string') {
              throw new TypeError('Arguments to path.join must be strings');
            }

            return p;
          }).join('/'));
        }; // path.relative(from, to)
        // posix version


        exports.relative = function (from, to) {
          from = exports.resolve(from).substr(1);
          to = exports.resolve(to).substr(1);

          function trim(arr) {
            var start = 0;

            for (; start < arr.length; start++) {
              if (arr[start] !== '') break;
            }

            var end = arr.length - 1;

            for (; end >= 0; end--) {
              if (arr[end] !== '') break;
            }

            if (start > end) return [];
            return arr.slice(start, end - start + 1);
          }

          var fromParts = trim(from.split('/'));
          var toParts = trim(to.split('/'));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;

          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }

          var outputParts = [];

          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push('..');
          }

          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join('/');
        };

        exports.sep = '/';
        exports.delimiter = ':';

        exports.dirname = function (path) {
          if (typeof path !== 'string') path = path + '';
          if (path.length === 0) return '.';
          var code = path.charCodeAt(0);
          var hasRoot = code === 47
            /*/*/
            ;
          var end = -1;
          var matchedSlash = true;

          for (var i = path.length - 1; i >= 1; --i) {
            code = path.charCodeAt(i);

            if (code === 47
              /*/*/
            ) {
              if (!matchedSlash) {
                end = i;
                break;
              }
            } else {
              // We saw the first non-path separator
              matchedSlash = false;
            }
          }

          if (end === -1) return hasRoot ? '/' : '.';

          if (hasRoot && end === 1) {
            // return '//';
            // Backwards-compat fix:
            return '/';
          }

          return path.slice(0, end);
        };

        function basename(path) {
          if (typeof path !== 'string') path = path + '';
          var start = 0;
          var end = -1;
          var matchedSlash = true;
          var i;

          for (i = path.length - 1; i >= 0; --i) {
            if (path.charCodeAt(i) === 47
              /*/*/
            ) {
              // If we reached a path separator that was not part of a set of path
              // separators at the end of the string, stop now
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else if (end === -1) {
              // We saw the first non-path separator, mark this as the end of our
              // path component
              matchedSlash = false;
              end = i + 1;
            }
          }

          if (end === -1) return '';
          return path.slice(start, end);
        } // Uses a mixed approach for backwards-compatibility, as ext behavior changed
        // in new Node.js versions, so only basename() above is backported here


        exports.basename = function (path, ext) {
          var f = basename(path);

          if (ext && f.substr(-1 * ext.length) === ext) {
            f = f.substr(0, f.length - ext.length);
          }

          return f;
        };

        exports.extname = function (path) {
          if (typeof path !== 'string') path = path + '';
          var startDot = -1;
          var startPart = 0;
          var end = -1;
          var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
          // after any path separator we find

          var preDotState = 0;

          for (var i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);

            if (code === 47
              /*/*/
            ) {
              // If we reached a path separator that was not part of a set of path
              // separators at the end of the string, stop now
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }

              continue;
            }

            if (end === -1) {
              // We saw the first non-path separator, mark this as the end of our
              // extension
              matchedSlash = false;
              end = i + 1;
            }

            if (code === 46
              /*.*/
            ) {
              // If this is our first dot, mark it as the start of our extension
              if (startDot === -1) startDot = i; else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) {
              // We saw a non-dot and non-path separator before our dot, so we should
              // have a good chance at having a non-empty extension
              preDotState = -1;
            }
          }

          if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
            preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
            preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            return '';
          }

          return path.slice(startDot, end);
        };

        function filter(xs, f) {
          if (xs.filter) return xs.filter(f);
          var res = [];

          for (var i = 0; i < xs.length; i++) {
            if (f(xs[i], i, xs)) res.push(xs[i]);
          }

          return res;
        } // String.prototype.substr - negative index don't work in IE8


        var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
          return str.substr(start, len);
        } : function (str, start, len) {
          if (start < 0) start = str.length + start;
          return str.substr(start, len);
        };
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(15)))

      /***/
    }),
/* 281 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      function iota(n) {
        var result = new Array(n);

        for (var i = 0; i < n; ++i) {
          result[i] = i;
        }

        return result;
      }

      module.exports = iota;

      /***/
    }),
/* 282 */
/***/ (function (module, exports) {

      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };

      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      } // For Node v0.10 support. Remove this eventually.


      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
      }

      /***/
    }),
/* 283 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // (c) Dean McNamee <dean@gmail.com>, 2013.
      //
      // https://github.com/deanm/omggif
      //
      // Permission is hereby granted, free of charge, to any person obtaining a copy
      // of this software and associated documentation files (the "Software"), to
      // deal in the Software without restriction, including without limitation the
      // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
      // sell copies of the Software, and to permit persons to whom the Software is
      // furnished to do so, subject to the following conditions:
      //
      // The above copyright notice and this permission notice shall be included in
      // all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
      // FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
      // IN THE SOFTWARE.
      //
      // omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
      // including animation and compression.  It does not rely on any specific
      // underlying system, so should run in the browser, Node, or Plask.


      function GifWriter(buf, width, height, gopts) {
        var p = 0;
        var gopts = gopts === undefined ? {} : gopts;
        var loop_count = gopts.loop === undefined ? null : gopts.loop;
        var global_palette = gopts.palette === undefined ? null : gopts.palette;
        if (width <= 0 || height <= 0 || width > 65535 || height > 65535) throw new Error("Width/Height invalid.");

        function check_palette_and_num_colors(palette) {
          var num_colors = palette.length;

          if (num_colors < 2 || num_colors > 256 || num_colors & num_colors - 1) {
            throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");
          }

          return num_colors;
        } // - Header.


        buf[p++] = 0x47;
        buf[p++] = 0x49;
        buf[p++] = 0x46; // GIF

        buf[p++] = 0x38;
        buf[p++] = 0x39;
        buf[p++] = 0x61; // 89a
        // Handling of Global Color Table (palette) and background index.

        var gp_num_colors_pow2 = 0;
        var background = 0;

        if (global_palette !== null) {
          var gp_num_colors = check_palette_and_num_colors(global_palette);

          while (gp_num_colors >>= 1) ++gp_num_colors_pow2;

          gp_num_colors = 1 << gp_num_colors_pow2;
          --gp_num_colors_pow2;

          if (gopts.background !== undefined) {
            background = gopts.background;
            if (background >= gp_num_colors) throw new Error("Background index out of range."); // The GIF spec states that a background index of 0 should be ignored, so
            // this is probably a mistake and you really want to set it to another
            // slot in the palette.  But actually in the end most browsers, etc end
            // up ignoring this almost completely (including for dispose background).

            if (background === 0) throw new Error("Background index explicitly passed as 0.");
          }
        } // - Logical Screen Descriptor.
        // NOTE(deanm): w/h apparently ignored by implementations, but set anyway.


        buf[p++] = width & 0xff;
        buf[p++] = width >> 8 & 0xff;
        buf[p++] = height & 0xff;
        buf[p++] = height >> 8 & 0xff; // NOTE: Indicates 0-bpp original color resolution (unused?).

        buf[p++] = (global_palette !== null ? 0x80 : 0) | // Global Color Table Flag.
          gp_num_colors_pow2; // NOTE: No sort flag (unused?).

        buf[p++] = background; // Background Color Index.

        buf[p++] = 0; // Pixel aspect ratio (unused?).
        // - Global Color Table

        if (global_palette !== null) {
          for (var i = 0, il = global_palette.length; i < il; ++i) {
            var rgb = global_palette[i];
            buf[p++] = rgb >> 16 & 0xff;
            buf[p++] = rgb >> 8 & 0xff;
            buf[p++] = rgb & 0xff;
          }
        }

        if (loop_count !== null) {
          // Netscape block for looping.
          if (loop_count < 0 || loop_count > 65535) throw new Error("Loop count invalid."); // Extension code, label, and length.

          buf[p++] = 0x21;
          buf[p++] = 0xff;
          buf[p++] = 0x0b; // NETSCAPE2.0

          buf[p++] = 0x4e;
          buf[p++] = 0x45;
          buf[p++] = 0x54;
          buf[p++] = 0x53;
          buf[p++] = 0x43;
          buf[p++] = 0x41;
          buf[p++] = 0x50;
          buf[p++] = 0x45;
          buf[p++] = 0x32;
          buf[p++] = 0x2e;
          buf[p++] = 0x30; // Sub-block

          buf[p++] = 0x03;
          buf[p++] = 0x01;
          buf[p++] = loop_count & 0xff;
          buf[p++] = loop_count >> 8 & 0xff;
          buf[p++] = 0x00; // Terminator.
        }

        var ended = false;

        this.addFrame = function (x, y, w, h, indexed_pixels, opts) {
          if (ended === true) {
            --p;
            ended = false;
          } // Un-end.


          opts = opts === undefined ? {} : opts; // TODO(deanm): Bounds check x, y.  Do they need to be within the virtual
          // canvas width/height, I imagine?

          if (x < 0 || y < 0 || x > 65535 || y > 65535) throw new Error("x/y invalid.");
          if (w <= 0 || h <= 0 || w > 65535 || h > 65535) throw new Error("Width/Height invalid.");
          if (indexed_pixels.length < w * h) throw new Error("Not enough pixels for the frame size.");
          var using_local_palette = true;
          var palette = opts.palette;

          if (palette === undefined || palette === null) {
            using_local_palette = false;
            palette = global_palette;
          }

          if (palette === undefined || palette === null) throw new Error("Must supply either a local or global palette.");
          var num_colors = check_palette_and_num_colors(palette); // Compute the min_code_size (power of 2), destroying num_colors.

          var min_code_size = 0;

          while (num_colors >>= 1) ++min_code_size;

          num_colors = 1 << min_code_size; // Now we can easily get it back.

          var delay = opts.delay === undefined ? 0 : opts.delay; // From the spec:
          //     0 -   No disposal specified. The decoder is
          //           not required to take any action.
          //     1 -   Do not dispose. The graphic is to be left
          //           in place.
          //     2 -   Restore to background color. The area used by the
          //           graphic must be restored to the background color.
          //     3 -   Restore to previous. The decoder is required to
          //           restore the area overwritten by the graphic with
          //           what was there prior to rendering the graphic.
          //  4-7 -    To be defined.
          // NOTE(deanm): Dispose background doesn't really work, apparently most
          // browsers ignore the background palette index and clear to transparency.

          var disposal = opts.disposal === undefined ? 0 : opts.disposal;
          if (disposal < 0 || disposal > 3) // 4-7 is reserved.
            throw new Error("Disposal out of range.");
          var use_transparency = false;
          var transparent_index = 0;

          if (opts.transparent !== undefined && opts.transparent !== null) {
            use_transparency = true;
            transparent_index = opts.transparent;
            if (transparent_index < 0 || transparent_index >= num_colors) throw new Error("Transparent color index.");
          }

          if (disposal !== 0 || use_transparency || delay !== 0) {
            // - Graphics Control Extension
            buf[p++] = 0x21;
            buf[p++] = 0xf9; // Extension / Label.

            buf[p++] = 4; // Byte size.

            buf[p++] = disposal << 2 | (use_transparency === true ? 1 : 0);
            buf[p++] = delay & 0xff;
            buf[p++] = delay >> 8 & 0xff;
            buf[p++] = transparent_index; // Transparent color index.

            buf[p++] = 0; // Block Terminator.
          } // - Image Descriptor


          buf[p++] = 0x2c; // Image Seperator.

          buf[p++] = x & 0xff;
          buf[p++] = x >> 8 & 0xff; // Left.

          buf[p++] = y & 0xff;
          buf[p++] = y >> 8 & 0xff; // Top.

          buf[p++] = w & 0xff;
          buf[p++] = w >> 8 & 0xff;
          buf[p++] = h & 0xff;
          buf[p++] = h >> 8 & 0xff; // NOTE: No sort flag (unused?).
          // TODO(deanm): Support interlace.

          buf[p++] = using_local_palette === true ? 0x80 | min_code_size - 1 : 0; // - Local Color Table

          if (using_local_palette === true) {
            for (var i = 0, il = palette.length; i < il; ++i) {
              var rgb = palette[i];
              buf[p++] = rgb >> 16 & 0xff;
              buf[p++] = rgb >> 8 & 0xff;
              buf[p++] = rgb & 0xff;
            }
          }

          p = GifWriterOutputLZWCodeStream(buf, p, min_code_size < 2 ? 2 : min_code_size, indexed_pixels);
          return p;
        };

        this.end = function () {
          if (ended === false) {
            buf[p++] = 0x3b; // Trailer.

            ended = true;
          }

          return p;
        };

        this.getOutputBuffer = function () {
          return buf;
        };

        this.setOutputBuffer = function (v) {
          buf = v;
        };

        this.getOutputBufferPosition = function () {
          return p;
        };

        this.setOutputBufferPosition = function (v) {
          p = v;
        };
      } // Main compression routine, palette indexes -> LZW code stream.
      // |index_stream| must have at least one entry.


      function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
        buf[p++] = min_code_size;
        var cur_subblock = p++; // Pointing at the length field.

        var clear_code = 1 << min_code_size;
        var code_mask = clear_code - 1;
        var eoi_code = clear_code + 1;
        var next_code = eoi_code + 1;
        var cur_code_size = min_code_size + 1; // Number of bits per code.

        var cur_shift = 0; // We have at most 12-bit codes, so we should have to hold a max of 19
        // bits here (and then we would write out).

        var cur = 0;

        function emit_bytes_to_buffer(bit_block_size) {
          while (cur_shift >= bit_block_size) {
            buf[p++] = cur & 0xff;
            cur >>= 8;
            cur_shift -= 8;

            if (p === cur_subblock + 256) {
              // Finished a subblock.
              buf[cur_subblock] = 255;
              cur_subblock = p++;
            }
          }
        }

        function emit_code(c) {
          cur |= c << cur_shift;
          cur_shift += cur_code_size;
          emit_bytes_to_buffer(8);
        } // I am not an expert on the topic, and I don't want to write a thesis.
        // However, it is good to outline here the basic algorithm and the few data
        // structures and optimizations here that make this implementation fast.
        // The basic idea behind LZW is to build a table of previously seen runs
        // addressed by a short id (herein called output code).  All data is
        // referenced by a code, which represents one or more values from the
        // original input stream.  All input bytes can be referenced as the same
        // value as an output code.  So if you didn't want any compression, you
        // could more or less just output the original bytes as codes (there are
        // some details to this, but it is the idea).  In order to achieve
        // compression, values greater then the input range (codes can be up to
        // 12-bit while input only 8-bit) represent a sequence of previously seen
        // inputs.  The decompressor is able to build the same mapping while
        // decoding, so there is always a shared common knowledge between the
        // encoding and decoder, which is also important for "timing" aspects like
        // how to handle variable bit width code encoding.
        //
        // One obvious but very important consequence of the table system is there
        // is always a unique id (at most 12-bits) to map the runs.  'A' might be
        // 4, then 'AA' might be 10, 'AAA' 11, 'AAAA' 12, etc.  This relationship
        // can be used for an effecient lookup strategy for the code mapping.  We
        // need to know if a run has been seen before, and be able to map that run
        // to the output code.  Since we start with known unique ids (input bytes),
        // and then from those build more unique ids (table entries), we can
        // continue this chain (almost like a linked list) to always have small
        // integer values that represent the current byte chains in the encoder.
        // This means instead of tracking the input bytes (AAAABCD) to know our
        // current state, we can track the table entry for AAAABC (it is guaranteed
        // to exist by the nature of the algorithm) and the next character D.
        // Therefor the tuple of (table_entry, byte) is guaranteed to also be
        // unique.  This allows us to create a simple lookup key for mapping input
        // sequences to codes (table indices) without having to store or search
        // any of the code sequences.  So if 'AAAA' has a table entry of 12, the
        // tuple of ('AAAA', K) for any input byte K will be unique, and can be our
        // key.  This leads to a integer value at most 20-bits, which can always
        // fit in an SMI value and be used as a fast sparse array / object key.
        // Output code for the current contents of the index buffer.


        var ib_code = index_stream[0] & code_mask; // Load first input index.

        var code_table = {}; // Key'd on our 20-bit "tuple".

        emit_code(clear_code); // Spec says first code should be a clear code.
        // First index already loaded, process the rest of the stream.

        for (var i = 1, il = index_stream.length; i < il; ++i) {
          var k = index_stream[i] & code_mask;
          var cur_key = ib_code << 8 | k; // (prev, k) unique tuple.

          var cur_code = code_table[cur_key]; // buffer + k.
          // Check if we have to create a new code table entry.

          if (cur_code === undefined) {
            // We don't have buffer + k.
            // Emit index buffer (without k).
            // This is an inline version of emit_code, because this is the core
            // writing routine of the compressor (and V8 cannot inline emit_code
            // because it is a closure here in a different context).  Additionally
            // we can call emit_byte_to_buffer less often, because we can have
            // 30-bits (from our 31-bit signed SMI), and we know our codes will only
            // be 12-bits, so can safely have 18-bits there without overflow.
            // emit_code(ib_code);
            cur |= ib_code << cur_shift;
            cur_shift += cur_code_size;

            while (cur_shift >= 8) {
              buf[p++] = cur & 0xff;
              cur >>= 8;
              cur_shift -= 8;

              if (p === cur_subblock + 256) {
                // Finished a subblock.
                buf[cur_subblock] = 255;
                cur_subblock = p++;
              }
            }

            if (next_code === 4096) {
              // Table full, need a clear.
              emit_code(clear_code);
              next_code = eoi_code + 1;
              cur_code_size = min_code_size + 1;
              code_table = {};
            } else {
              // Table not full, insert a new entry.
              // Increase our variable bit code sizes if necessary.  This is a bit
              // tricky as it is based on "timing" between the encoding and
              // decoder.  From the encoders perspective this should happen after
              // we've already emitted the index buffer and are about to create the
              // first table entry that would overflow our current code bit size.
              if (next_code >= 1 << cur_code_size) ++cur_code_size;
              code_table[cur_key] = next_code++; // Insert into code table.
            }

            ib_code = k; // Index buffer to single input k.
          } else {
            ib_code = cur_code; // Index buffer to sequence in code table.
          }
        }

        emit_code(ib_code); // There will still be something in the index buffer.

        emit_code(eoi_code); // End Of Information.
        // Flush / finalize the sub-blocks stream to the buffer.

        emit_bytes_to_buffer(1); // Finish the sub-blocks, writing out any unfinished lengths and
        // terminating with a sub-block of length 0.  If we have already started
        // but not yet used a sub-block it can just become the terminator.

        if (cur_subblock + 1 === p) {
          // Started but unused.
          buf[cur_subblock] = 0;
        } else {
          // Started and used, write length and additional terminator block.
          buf[cur_subblock] = p - cur_subblock - 1;
          buf[p++] = 0;
        }

        return p;
      }

      function GifReader(buf) {
        var p = 0; // - Header (GIF87a or GIF89a).

        if (buf[p++] !== 0x47 || buf[p++] !== 0x49 || buf[p++] !== 0x46 || buf[p++] !== 0x38 || (buf[p++] + 1 & 0xfd) !== 0x38 || buf[p++] !== 0x61) {
          throw new Error("Invalid GIF 87a/89a header.");
        } // - Logical Screen Descriptor.


        var width = buf[p++] | buf[p++] << 8;
        var height = buf[p++] | buf[p++] << 8;
        var pf0 = buf[p++]; // <Packed Fields>.

        var global_palette_flag = pf0 >> 7;
        var num_global_colors_pow2 = pf0 & 0x7;
        var num_global_colors = 1 << num_global_colors_pow2 + 1;
        var background = buf[p++];
        buf[p++]; // Pixel aspect ratio (unused?).

        var global_palette_offset = null;
        var global_palette_size = null;

        if (global_palette_flag) {
          global_palette_offset = p;
          global_palette_size = num_global_colors;
          p += num_global_colors * 3; // Seek past palette.
        }

        var no_eof = true;
        var frames = [];
        var delay = 0;
        var transparent_index = null;
        var disposal = 0; // 0 - No disposal specified.

        var loop_count = null;
        this.width = width;
        this.height = height;

        while (no_eof && p < buf.length) {
          switch (buf[p++]) {
            case 0x21:
              // Graphics Control Extension Block
              switch (buf[p++]) {
                case 0xff:
                  // Application specific block
                  // Try if it's a Netscape block (with animation loop counter).
                  if (buf[p] !== 0x0b || // 21 FF already read, check block size.
                    // NETSCAPE2.0
                    buf[p + 1] == 0x4e && buf[p + 2] == 0x45 && buf[p + 3] == 0x54 && buf[p + 4] == 0x53 && buf[p + 5] == 0x43 && buf[p + 6] == 0x41 && buf[p + 7] == 0x50 && buf[p + 8] == 0x45 && buf[p + 9] == 0x32 && buf[p + 10] == 0x2e && buf[p + 11] == 0x30 && // Sub-block
                    buf[p + 12] == 0x03 && buf[p + 13] == 0x01 && buf[p + 16] == 0) {
                    p += 14;
                    loop_count = buf[p++] | buf[p++] << 8;
                    p++; // Skip terminator.
                  } else {
                    // We don't know what it is, just try to get past it.
                    p += 12;

                    while (true) {
                      // Seek through subblocks.
                      var block_size = buf[p++]; // Bad block size (ex: undefined from an out of bounds read).

                      if (!(block_size >= 0)) throw Error("Invalid block size");
                      if (block_size === 0) break; // 0 size is terminator

                      p += block_size;
                    }
                  }

                  break;

                case 0xf9:
                  // Graphics Control Extension
                  if (buf[p++] !== 0x4 || buf[p + 4] !== 0) throw new Error("Invalid graphics extension block.");
                  var pf1 = buf[p++];
                  delay = buf[p++] | buf[p++] << 8;
                  transparent_index = buf[p++];
                  if ((pf1 & 1) === 0) transparent_index = null;
                  disposal = pf1 >> 2 & 0x7;
                  p++; // Skip terminator.

                  break;

                case 0xfe:
                  // Comment Extension.
                  while (true) {
                    // Seek through subblocks.
                    var block_size = buf[p++]; // Bad block size (ex: undefined from an out of bounds read).

                    if (!(block_size >= 0)) throw Error("Invalid block size");
                    if (block_size === 0) break; // 0 size is terminator
                    // console.log(buf.slice(p, p+block_size).toString('ascii'));

                    p += block_size;
                  }

                  break;

                default:
                  throw new Error("Unknown graphic control label: 0x" + buf[p - 1].toString(16));
              }

              break;

            case 0x2c:
              // Image Descriptor.
              var x = buf[p++] | buf[p++] << 8;
              var y = buf[p++] | buf[p++] << 8;
              var w = buf[p++] | buf[p++] << 8;
              var h = buf[p++] | buf[p++] << 8;
              var pf2 = buf[p++];
              var local_palette_flag = pf2 >> 7;
              var interlace_flag = pf2 >> 6 & 1;
              var num_local_colors_pow2 = pf2 & 0x7;
              var num_local_colors = 1 << num_local_colors_pow2 + 1;
              var palette_offset = global_palette_offset;
              var palette_size = global_palette_size;
              var has_local_palette = false;

              if (local_palette_flag) {
                var has_local_palette = true;
                palette_offset = p; // Override with local palette.

                palette_size = num_local_colors;
                p += num_local_colors * 3; // Seek past palette.
              }

              var data_offset = p;
              p++; // codesize

              while (true) {
                var block_size = buf[p++]; // Bad block size (ex: undefined from an out of bounds read).

                if (!(block_size >= 0)) throw Error("Invalid block size");
                if (block_size === 0) break; // 0 size is terminator

                p += block_size;
              }

              frames.push({
                x: x,
                y: y,
                width: w,
                height: h,
                has_local_palette: has_local_palette,
                palette_offset: palette_offset,
                palette_size: palette_size,
                data_offset: data_offset,
                data_length: p - data_offset,
                transparent_index: transparent_index,
                interlaced: !!interlace_flag,
                delay: delay,
                disposal: disposal
              });
              break;

            case 0x3b:
              // Trailer Marker (end of file).
              no_eof = false;
              break;

            default:
              throw new Error("Unknown gif block: 0x" + buf[p - 1].toString(16));
              break;
          }
        }

        this.numFrames = function () {
          return frames.length;
        };

        this.loopCount = function () {
          return loop_count;
        };

        this.frameInfo = function (frame_num) {
          if (frame_num < 0 || frame_num >= frames.length) throw new Error("Frame index out of range.");
          return frames[frame_num];
        };

        this.decodeAndBlitFrameBGRA = function (frame_num, pixels) {
          var frame = this.frameInfo(frame_num);
          var num_pixels = frame.width * frame.height;
          var index_stream = new Uint8Array(num_pixels); // At most 8-bit indices.

          GifReaderLZWOutputIndexStream(buf, frame.data_offset, index_stream, num_pixels);
          var palette_offset = frame.palette_offset; // NOTE(deanm): It seems to be much faster to compare index to 256 than
          // to === null.  Not sure why, but CompareStub_EQ_STRICT shows up high in
          // the profile, not sure if it's related to using a Uint8Array.

          var trans = frame.transparent_index;
          if (trans === null) trans = 256; // We are possibly just blitting to a portion of the entire frame.
          // That is a subrect within the framerect, so the additional pixels
          // must be skipped over after we finished a scanline.

          var framewidth = frame.width;
          var framestride = width - framewidth;
          var xleft = framewidth; // Number of subrect pixels left in scanline.
          // Output indicies of the top left and bottom right corners of the subrect.

          var opbeg = (frame.y * width + frame.x) * 4;
          var opend = ((frame.y + frame.height) * width + frame.x) * 4;
          var op = opbeg;
          var scanstride = framestride * 4; // Use scanstride to skip past the rows when interlacing.  This is skipping
          // 7 rows for the first two passes, then 3 then 1.

          if (frame.interlaced === true) {
            scanstride += width * 4 * 7; // Pass 1.
          }

          var interlaceskip = 8; // Tracking the row interval in the current pass.

          for (var i = 0, il = index_stream.length; i < il; ++i) {
            var index = index_stream[i];

            if (xleft === 0) {
              // Beginning of new scan line
              op += scanstride;
              xleft = framewidth;

              if (op >= opend) {
                // Catch the wrap to switch passes when interlacing.
                scanstride = framestride * 4 + width * 4 * (interlaceskip - 1); // interlaceskip / 2 * 4 is interlaceskip << 1.

                op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
                interlaceskip >>= 1;
              }
            }

            if (index === trans) {
              op += 4;
            } else {
              var r = buf[palette_offset + index * 3];
              var g = buf[palette_offset + index * 3 + 1];
              var b = buf[palette_offset + index * 3 + 2];
              pixels[op++] = b;
              pixels[op++] = g;
              pixels[op++] = r;
              pixels[op++] = 255;
            }

            --xleft;
          }
        }; // I will go to copy and paste hell one day...


        this.decodeAndBlitFrameRGBA = function (frame_num, pixels) {
          var frame = this.frameInfo(frame_num);
          var num_pixels = frame.width * frame.height;
          var index_stream = new Uint8Array(num_pixels); // At most 8-bit indices.

          GifReaderLZWOutputIndexStream(buf, frame.data_offset, index_stream, num_pixels);
          var palette_offset = frame.palette_offset; // NOTE(deanm): It seems to be much faster to compare index to 256 than
          // to === null.  Not sure why, but CompareStub_EQ_STRICT shows up high in
          // the profile, not sure if it's related to using a Uint8Array.

          var trans = frame.transparent_index;
          if (trans === null) trans = 256; // We are possibly just blitting to a portion of the entire frame.
          // That is a subrect within the framerect, so the additional pixels
          // must be skipped over after we finished a scanline.

          var framewidth = frame.width;
          var framestride = width - framewidth;
          var xleft = framewidth; // Number of subrect pixels left in scanline.
          // Output indicies of the top left and bottom right corners of the subrect.

          var opbeg = (frame.y * width + frame.x) * 4;
          var opend = ((frame.y + frame.height) * width + frame.x) * 4;
          var op = opbeg;
          var scanstride = framestride * 4; // Use scanstride to skip past the rows when interlacing.  This is skipping
          // 7 rows for the first two passes, then 3 then 1.

          if (frame.interlaced === true) {
            scanstride += width * 4 * 7; // Pass 1.
          }

          var interlaceskip = 8; // Tracking the row interval in the current pass.

          for (var i = 0, il = index_stream.length; i < il; ++i) {
            var index = index_stream[i];

            if (xleft === 0) {
              // Beginning of new scan line
              op += scanstride;
              xleft = framewidth;

              if (op >= opend) {
                // Catch the wrap to switch passes when interlacing.
                scanstride = framestride * 4 + width * 4 * (interlaceskip - 1); // interlaceskip / 2 * 4 is interlaceskip << 1.

                op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
                interlaceskip >>= 1;
              }
            }

            if (index === trans) {
              op += 4;
            } else {
              var r = buf[palette_offset + index * 3];
              var g = buf[palette_offset + index * 3 + 1];
              var b = buf[palette_offset + index * 3 + 2];
              pixels[op++] = r;
              pixels[op++] = g;
              pixels[op++] = b;
              pixels[op++] = 255;
            }

            --xleft;
          }
        };
      }

      function GifReaderLZWOutputIndexStream(code_stream, p, output, output_length) {
        var min_code_size = code_stream[p++];
        var clear_code = 1 << min_code_size;
        var eoi_code = clear_code + 1;
        var next_code = eoi_code + 1;
        var cur_code_size = min_code_size + 1; // Number of bits per code.
        // NOTE: This shares the same name as the encoder, but has a different
        // meaning here.  Here this masks each code coming from the code stream.

        var code_mask = (1 << cur_code_size) - 1;
        var cur_shift = 0;
        var cur = 0;
        var op = 0; // Output pointer.

        var subblock_size = code_stream[p++]; // TODO(deanm): Would using a TypedArray be any faster?  At least it would
        // solve the fast mode / backing store uncertainty.
        // var code_table = Array(4096);

        var code_table = new Int32Array(4096); // Can be signed, we only use 20 bits.

        var prev_code = null; // Track code-1.

        while (true) {
          // Read up to two bytes, making sure we always 12-bits for max sized code.
          while (cur_shift < 16) {
            if (subblock_size === 0) break; // No more data to be read.

            cur |= code_stream[p++] << cur_shift;
            cur_shift += 8;

            if (subblock_size === 1) {
              // Never let it get to 0 to hold logic above.
              subblock_size = code_stream[p++]; // Next subblock.
            } else {
              --subblock_size;
            }
          } // TODO(deanm): We should never really get here, we should have received
          // and EOI.


          if (cur_shift < cur_code_size) break;
          var code = cur & code_mask;
          cur >>= cur_code_size;
          cur_shift -= cur_code_size; // TODO(deanm): Maybe should check that the first code was a clear code,
          // at least this is what you're supposed to do.  But actually our encoder
          // now doesn't emit a clear code first anyway.

          if (code === clear_code) {
            // We don't actually have to clear the table.  This could be a good idea
            // for greater error checking, but we don't really do any anyway.  We
            // will just track it with next_code and overwrite old entries.
            next_code = eoi_code + 1;
            cur_code_size = min_code_size + 1;
            code_mask = (1 << cur_code_size) - 1; // Don't update prev_code ?

            prev_code = null;
            continue;
          } else if (code === eoi_code) {
            break;
          } // We have a similar situation as the decoder, where we want to store
          // variable length entries (code table entries), but we want to do in a
          // faster manner than an array of arrays.  The code below stores sort of a
          // linked list within the code table, and then "chases" through it to
          // construct the dictionary entries.  When a new entry is created, just the
          // last byte is stored, and the rest (prefix) of the entry is only
          // referenced by its table entry.  Then the code chases through the
          // prefixes until it reaches a single byte code.  We have to chase twice,
          // first to compute the length, and then to actually copy the data to the
          // output (backwards, since we know the length).  The alternative would be
          // storing something in an intermediate stack, but that doesn't make any
          // more sense.  I implemented an approach where it also stored the length
          // in the code table, although it's a bit tricky because you run out of
          // bits (12 + 12 + 8), but I didn't measure much improvements (the table
          // entries are generally not the long).  Even when I created benchmarks for
          // very long table entries the complexity did not seem worth it.
          // The code table stores the prefix entry in 12 bits and then the suffix
          // byte in 8 bits, so each entry is 20 bits.


          var chase_code = code < next_code ? code : prev_code; // Chase what we will output, either {CODE} or {CODE-1}.

          var chase_length = 0;
          var chase = chase_code;

          while (chase > clear_code) {
            chase = code_table[chase] >> 8;
            ++chase_length;
          }

          var k = chase;
          var op_end = op + chase_length + (chase_code !== code ? 1 : 0);

          if (op_end > output_length) {
            console.log("Warning, gif stream longer than expected.");
            return;
          } // Already have the first byte from the chase, might as well write it fast.


          output[op++] = k;
          op += chase_length;
          var b = op; // Track pointer, writing backwards.

          if (chase_code !== code) // The case of emitting {CODE-1} + k.
            output[op++] = k;
          chase = chase_code;

          while (chase_length--) {
            chase = code_table[chase];
            output[--b] = chase & 0xff; // Write backwards.

            chase >>= 8; // Pull down to the prefix code.
          }

          if (prev_code !== null && next_code < 4096) {
            code_table[next_code++] = prev_code << 8 | k; // TODO(deanm): Figure out this clearing vs code growth logic better.  I
            // have an feeling that it should just happen somewhere else, for now it
            // is awkward between when we grow past the max and then hit a clear code.
            // For now just check if we hit the max 12-bits (then a clear code should
            // follow, also of course encoded in 12-bits).

            if (next_code >= code_mask + 1 && cur_code_size < 12) {
              ++cur_code_size;
              code_mask = code_mask << 1 | 1;
            }
          }

          prev_code = code;
        }

        if (op !== output_length) {
          console.log("Warning, gif stream shorter than expected.");
        }

        return output;
      } // CommonJS.


      try {
        exports.GifWriter = GifWriter;
        exports.GifReader = GifReader;
      } catch (e) { }

      /***/
    }),
/* 284 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      var ndarray = __webpack_require__(51);

      var do_convert = __webpack_require__(285);

      module.exports = function convert(arr, result) {
        var shape = [],
          c = arr,
          sz = 1;

        while (Array.isArray(c)) {
          shape.push(c.length);
          sz *= c.length;
          c = c[0];
        }

        if (shape.length === 0) {
          return ndarray();
        }

        if (!result) {
          result = ndarray(new Float64Array(sz), shape);
        }

        do_convert(result, arr);
        return result;
      };

      /***/
    }),
/* 285 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(286)({
        "args": ["array", "scalar", "index"],
        "pre": {
          "body": "{}",
          "args": [],
          "thisVars": [],
          "localVars": []
        },
        "body": {
          "body": "{\nvar _inline_1_v=_inline_1_arg1_,_inline_1_i\nfor(_inline_1_i=0;_inline_1_i<_inline_1_arg2_.length-1;++_inline_1_i) {\n_inline_1_v=_inline_1_v[_inline_1_arg2_[_inline_1_i]]\n}\n_inline_1_arg0_=_inline_1_v[_inline_1_arg2_[_inline_1_arg2_.length-1]]\n}",
          "args": [{
            "name": "_inline_1_arg0_",
            "lvalue": true,
            "rvalue": false,
            "count": 1
          }, {
            "name": "_inline_1_arg1_",
            "lvalue": false,
            "rvalue": true,
            "count": 1
          }, {
            "name": "_inline_1_arg2_",
            "lvalue": false,
            "rvalue": true,
            "count": 4
          }],
          "thisVars": [],
          "localVars": ["_inline_1_i", "_inline_1_v"]
        },
        "post": {
          "body": "{}",
          "args": [],
          "thisVars": [],
          "localVars": []
        },
        "funcName": "convert",
        "blockSize": 64
      });

      /***/
    }),
/* 286 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      var createThunk = __webpack_require__(287);

      function Procedure() {
        this.argTypes = [];
        this.shimArgs = [];
        this.arrayArgs = [];
        this.arrayBlockIndices = [];
        this.scalarArgs = [];
        this.offsetArgs = [];
        this.offsetArgIndex = [];
        this.indexArgs = [];
        this.shapeArgs = [];
        this.funcName = "";
        this.pre = null;
        this.body = null;
        this.post = null;
        this.debug = false;
      }

      function compileCwise(user_args) {
        //Create procedure
        var proc = new Procedure(); //Parse blocks

        proc.pre = user_args.pre;
        proc.body = user_args.body;
        proc.post = user_args.post; //Parse arguments

        var proc_args = user_args.args.slice(0);
        proc.argTypes = proc_args;

        for (var i = 0; i < proc_args.length; ++i) {
          var arg_type = proc_args[i];

          if (arg_type === "array" || typeof arg_type === "object" && arg_type.blockIndices) {
            proc.argTypes[i] = "array";
            proc.arrayArgs.push(i);
            proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0);
            proc.shimArgs.push("array" + i);

            if (i < proc.pre.args.length && proc.pre.args[i].count > 0) {
              throw new Error("cwise: pre() block may not reference array args");
            }

            if (i < proc.post.args.length && proc.post.args[i].count > 0) {
              throw new Error("cwise: post() block may not reference array args");
            }
          } else if (arg_type === "scalar") {
            proc.scalarArgs.push(i);
            proc.shimArgs.push("scalar" + i);
          } else if (arg_type === "index") {
            proc.indexArgs.push(i);

            if (i < proc.pre.args.length && proc.pre.args[i].count > 0) {
              throw new Error("cwise: pre() block may not reference array index");
            }

            if (i < proc.body.args.length && proc.body.args[i].lvalue) {
              throw new Error("cwise: body() block may not write to array index");
            }

            if (i < proc.post.args.length && proc.post.args[i].count > 0) {
              throw new Error("cwise: post() block may not reference array index");
            }
          } else if (arg_type === "shape") {
            proc.shapeArgs.push(i);

            if (i < proc.pre.args.length && proc.pre.args[i].lvalue) {
              throw new Error("cwise: pre() block may not write to array shape");
            }

            if (i < proc.body.args.length && proc.body.args[i].lvalue) {
              throw new Error("cwise: body() block may not write to array shape");
            }

            if (i < proc.post.args.length && proc.post.args[i].lvalue) {
              throw new Error("cwise: post() block may not write to array shape");
            }
          } else if (typeof arg_type === "object" && arg_type.offset) {
            proc.argTypes[i] = "offset";
            proc.offsetArgs.push({
              array: arg_type.array,
              offset: arg_type.offset
            });
            proc.offsetArgIndex.push(i);
          } else {
            throw new Error("cwise: Unknown argument type " + proc_args[i]);
          }
        } //Make sure at least one array argument was specified


        if (proc.arrayArgs.length <= 0) {
          throw new Error("cwise: No array arguments specified");
        } //Make sure arguments are correct


        if (proc.pre.args.length > proc_args.length) {
          throw new Error("cwise: Too many arguments in pre() block");
        }

        if (proc.body.args.length > proc_args.length) {
          throw new Error("cwise: Too many arguments in body() block");
        }

        if (proc.post.args.length > proc_args.length) {
          throw new Error("cwise: Too many arguments in post() block");
        } //Check debug flag


        proc.debug = !!user_args.printCode || !!user_args.debug; //Retrieve name

        proc.funcName = user_args.funcName || "cwise"; //Read in block size

        proc.blockSize = user_args.blockSize || 64;
        return createThunk(proc);
      }

      module.exports = compileCwise;

      /***/
    }),
/* 287 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // The function below is called when constructing a cwise function object, and does the following:
      // A function object is constructed which accepts as argument a compilation function and returns another function.
      // It is this other function that is eventually returned by createThunk, and this function is the one that actually
      // checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
      // The compilation passed to the first function object is used for compiling new functions.
      // Once this function object is created, it is called with compile as argument, where the first argument of compile
      // is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
      // So createThunk roughly works like this:
      // function createThunk(proc) {
      //   var thunk = function(compileBound) {
      //     var CACHED = {}
      //     return function(arrays and scalars) {
      //       if (dtype and order of arrays in CACHED) {
      //         var func = CACHED[dtype and order of arrays]
      //       } else {
      //         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
      //       }
      //       return func(arrays and scalars)
      //     }
      //   }
      //   return thunk(compile.bind1(proc))
      // }

      var compile = __webpack_require__(288);

      function createThunk(proc) {
        var code = ["'use strict'", "var CACHED={}"];
        var vars = [];
        var thunkName = proc.funcName + "_cwise_thunk"; //Build thunk

        code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""));
        var typesig = [];
        var string_typesig = [];
        var proc_args = [["array", proc.arrayArgs[0], ".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
          Math.max(0, proc.arrayBlockIndices[0]), proc.arrayBlockIndices[0] < 0 ? "," + proc.arrayBlockIndices[0] + ")" : ")"].join("")];
        var shapeLengthConditions = [],
          shapeConditions = []; // Process array arguments

        for (var i = 0; i < proc.arrayArgs.length; ++i) {
          var j = proc.arrayArgs[i];
          vars.push(["t", j, "=array", j, ".dtype,", "r", j, "=array", j, ".order"].join(""));
          typesig.push("t" + j);
          typesig.push("r" + j);
          string_typesig.push("t" + j);
          string_typesig.push("r" + j + ".join()");
          proc_args.push("array" + j + ".data");
          proc_args.push("array" + j + ".stride");
          proc_args.push("array" + j + ".offset|0");

          if (i > 0) {
            // Gather conditions to check for shape equality (ignoring block indices)
            shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0]) - Math.abs(proc.arrayBlockIndices[i])));
            shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0, proc.arrayBlockIndices[i]) + "]");
          }
        } // Check for shape equality


        if (proc.arrayArgs.length > 1) {
          code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')");
          code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {");
          code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')");
          code.push("}");
        } // Process scalar arguments


        for (var i = 0; i < proc.scalarArgs.length; ++i) {
          proc_args.push("scalar" + proc.scalarArgs[i]);
        } // Check for cached function (and if not present, generate it)


        vars.push(["type=[", string_typesig.join(","), "].join()"].join(""));
        vars.push("proc=CACHED[type]");
        code.push("var " + vars.join(","));
        code.push(["if(!proc){", "CACHED[type]=proc=compile([", typesig.join(","), "])}", "return proc(", proc_args.join(","), ")}"].join(""));

        if (proc.debug) {
          console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------");
        } //Compile thunk


        var thunk = new Function("compile", code.join("\n"));
        return thunk(compile.bind(undefined, proc));
      }

      module.exports = createThunk;

      /***/
    }),
/* 288 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      var uniq = __webpack_require__(289); // This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
      // TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.


      function innerFill(order, proc, body) {
        var dimension = order.length,
          nargs = proc.arrayArgs.length,
          has_index = proc.indexArgs.length > 0,
          code = [],
          vars = [],
          idx = 0,
          pidx = 0,
          i,
          j;

        for (i = 0; i < dimension; ++i) {
          // Iteration variables
          vars.push(["i", i, "=0"].join(""));
        } //Compute scan deltas


        for (j = 0; j < nargs; ++j) {
          for (i = 0; i < dimension; ++i) {
            pidx = idx;
            idx = order[i];

            if (i === 0) {
              // The innermost/fastest dimension's delta is simply its stride
              vars.push(["d", j, "s", i, "=t", j, "p", idx].join(""));
            } else {
              // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
              vars.push(["d", j, "s", i, "=(t", j, "p", idx, "-s", pidx, "*t", j, "p", pidx, ")"].join(""));
            }
          }
        }

        if (vars.length > 0) {
          code.push("var " + vars.join(","));
        } //Scan loop


        for (i = dimension - 1; i >= 0; --i) {
          // Start at largest stride and work your way inwards
          idx = order[i];
          code.push(["for(i", i, "=0;i", i, "<s", idx, ";++i", i, "){"].join(""));
        } //Push body of inner loop


        code.push(body); //Advance scan pointers

        for (i = 0; i < dimension; ++i) {
          pidx = idx;
          idx = order[i];

          for (j = 0; j < nargs; ++j) {
            code.push(["p", j, "+=d", j, "s", i].join(""));
          }

          if (has_index) {
            if (i > 0) {
              code.push(["index[", pidx, "]-=s", pidx].join(""));
            }

            code.push(["++index[", idx, "]"].join(""));
          }

          code.push("}");
        }

        return code.join("\n");
      } // Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
      // TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
      //       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.


      function outerFill(matched, order, proc, body) {
        var dimension = order.length,
          nargs = proc.arrayArgs.length,
          blockSize = proc.blockSize,
          has_index = proc.indexArgs.length > 0,
          code = [];

        for (var i = 0; i < nargs; ++i) {
          code.push(["var offset", i, "=p", i].join(""));
        } //Generate loops for unmatched dimensions
        // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
        // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).


        for (var i = matched; i < dimension; ++i) {
          code.push(["for(var j" + i + "=SS[", order[i], "]|0;j", i, ">0;){"].join("")); // Iterate back to front

          code.push(["if(j", i, "<", blockSize, "){"].join("")); // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).

          code.push(["s", order[i], "=j", i].join(""));
          code.push(["j", i, "=0"].join(""));
          code.push(["}else{s", order[i], "=", blockSize].join(""));
          code.push(["j", i, "-=", blockSize, "}"].join(""));

          if (has_index) {
            code.push(["index[", order[i], "]=j", i].join(""));
          }
        }

        for (var i = 0; i < nargs; ++i) {
          var indexStr = ["offset" + i];

          for (var j = matched; j < dimension; ++j) {
            indexStr.push(["j", j, "*t", i, "p", order[j]].join(""));
          }

          code.push(["p", i, "=(", indexStr.join("+"), ")"].join(""));
        }

        code.push(innerFill(order, proc, body));

        for (var i = matched; i < dimension; ++i) {
          code.push("}");
        }

        return code.join("\n");
      } //Count the number of compatible inner orders
      // This is the length of the longest common prefix of the arrays in orders.
      // Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
      // This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.


      function countMatches(orders) {
        var matched = 0,
          dimension = orders[0].length;

        while (matched < dimension) {
          for (var j = 1; j < orders.length; ++j) {
            if (orders[j][matched] !== orders[0][matched]) {
              return matched;
            }
          }

          ++matched;
        }

        return matched;
      } //Processes a block according to the given data types
      // Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.


      function processBlock(block, proc, dtypes) {
        var code = block.body;
        var pre = [];
        var post = [];

        for (var i = 0; i < block.args.length; ++i) {
          var carg = block.args[i];

          if (carg.count <= 0) {
            continue;
          }

          var re = new RegExp(carg.name, "g");
          var ptrStr = "";
          var arrNum = proc.arrayArgs.indexOf(i);

          switch (proc.argTypes[i]) {
            case "offset":
              var offArgIndex = proc.offsetArgIndex.indexOf(i);
              var offArg = proc.offsetArgs[offArgIndex];
              arrNum = offArg.array;
              ptrStr = "+q" + offArgIndex;
            // Adds offset to the "pointer" in the array

            case "array":
              ptrStr = "p" + arrNum + ptrStr;
              var localStr = "l" + i;
              var arrStr = "a" + arrNum;

              if (proc.arrayBlockIndices[arrNum] === 0) {
                // Argument to body is just a single value from this array
                if (carg.count === 1) {
                  // Argument/array used only once(?)
                  if (dtypes[arrNum] === "generic") {
                    if (carg.lvalue) {
                      pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")); // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)

                      code = code.replace(re, localStr);
                      post.push([arrStr, ".set(", ptrStr, ",", localStr, ")"].join(""));
                    } else {
                      code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""));
                    }
                  } else {
                    code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""));
                  }
                } else if (dtypes[arrNum] === "generic") {
                  pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")); // TODO: Could we optimize by checking for carg.rvalue?

                  code = code.replace(re, localStr);

                  if (carg.lvalue) {
                    post.push([arrStr, ".set(", ptrStr, ",", localStr, ")"].join(""));
                  }
                } else {
                  pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join("")); // TODO: Could we optimize by checking for carg.rvalue?

                  code = code.replace(re, localStr);

                  if (carg.lvalue) {
                    post.push([arrStr, "[", ptrStr, "]=", localStr].join(""));
                  }
                }
              } else {
                // Argument to body is a "block"
                var reStrArr = [carg.name],
                  ptrStrArr = [ptrStr];

                for (var j = 0; j < Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
                  reStrArr.push("\\s*\\[([^\\]]+)\\]");
                  ptrStrArr.push("$" + (j + 1) + "*t" + arrNum + "b" + j); // Matched index times stride
                }

                re = new RegExp(reStrArr.join(""), "g");
                ptrStr = ptrStrArr.join("+");

                if (dtypes[arrNum] === "generic") {
                  /*if(carg.lvalue) {
                    pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                    code = code.replace(re, localStr)
                    post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
                  } else {
                    code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
                  }*/
                  throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                } else {
                  // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
                  code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""));
                }
              }

              break;

            case "scalar":
              code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i));
              break;

            case "index":
              code = code.replace(re, "index");
              break;

            case "shape":
              code = code.replace(re, "shape");
              break;
          }
        }

        return [pre.join("\n"), code, post.join("\n")].join("\n").trim();
      }

      function typeSummary(dtypes) {
        var summary = new Array(dtypes.length);
        var allEqual = true;

        for (var i = 0; i < dtypes.length; ++i) {
          var t = dtypes[i];
          var digits = t.match(/\d+/);

          if (!digits) {
            digits = "";
          } else {
            digits = digits[0];
          }

          if (t.charAt(0) === 0) {
            summary[i] = "u" + t.charAt(1) + digits;
          } else {
            summary[i] = t.charAt(0) + digits;
          }

          if (i > 0) {
            allEqual = allEqual && summary[i] === summary[i - 1];
          }
        }

        if (allEqual) {
          return summary[0];
        }

        return summary.join("");
      } //Generates a cwise operator


      function generateCWiseOp(proc, typesig) {
        //Compute dimension
        // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
        var dimension = typesig[1].length - Math.abs(proc.arrayBlockIndices[0]) | 0;
        var orders = new Array(proc.arrayArgs.length);
        var dtypes = new Array(proc.arrayArgs.length);

        for (var i = 0; i < proc.arrayArgs.length; ++i) {
          dtypes[i] = typesig[2 * i];
          orders[i] = typesig[2 * i + 1];
        } //Determine where block and loop indices start and end


        var blockBegin = [],
          blockEnd = []; // These indices are exposed as blocks

        var loopBegin = [],
          loopEnd = []; // These indices are iterated over

        var loopOrders = []; // orders restricted to the loop indices

        for (var i = 0; i < proc.arrayArgs.length; ++i) {
          if (proc.arrayBlockIndices[i] < 0) {
            loopBegin.push(0);
            loopEnd.push(dimension);
            blockBegin.push(dimension);
            blockEnd.push(dimension + proc.arrayBlockIndices[i]);
          } else {
            loopBegin.push(proc.arrayBlockIndices[i]); // Non-negative

            loopEnd.push(proc.arrayBlockIndices[i] + dimension);
            blockBegin.push(0);
            blockEnd.push(proc.arrayBlockIndices[i]);
          }

          var newOrder = [];

          for (var j = 0; j < orders[i].length; j++) {
            if (loopBegin[i] <= orders[i][j] && orders[i][j] < loopEnd[i]) {
              newOrder.push(orders[i][j] - loopBegin[i]); // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
            }
          }

          loopOrders.push(newOrder);
        } //First create arguments for procedure


        var arglist = ["SS"]; // SS is the overall shape over which we iterate

        var code = ["'use strict'"];
        var vars = [];

        for (var j = 0; j < dimension; ++j) {
          vars.push(["s", j, "=SS[", j, "]"].join("")); // The limits for each dimension.
        }

        for (var i = 0; i < proc.arrayArgs.length; ++i) {
          arglist.push("a" + i); // Actual data array

          arglist.push("t" + i); // Strides

          arglist.push("p" + i); // Offset in the array at which the data starts (also used for iterating over the data)

          for (var j = 0; j < dimension; ++j) {
            // Unpack the strides into vars for looping
            vars.push(["t", i, "p", j, "=t", i, "[", loopBegin[i] + j, "]"].join(""));
          }

          for (var j = 0; j < Math.abs(proc.arrayBlockIndices[i]); ++j) {
            // Unpack the strides into vars for block iteration
            vars.push(["t", i, "b", j, "=t", i, "[", blockBegin[i] + j, "]"].join(""));
          }
        }

        for (var i = 0; i < proc.scalarArgs.length; ++i) {
          arglist.push("Y" + i);
        }

        if (proc.shapeArgs.length > 0) {
          vars.push("shape=SS.slice(0)"); // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
        }

        if (proc.indexArgs.length > 0) {
          // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
          var zeros = new Array(dimension);

          for (var i = 0; i < dimension; ++i) {
            zeros[i] = "0";
          }

          vars.push(["index=[", zeros.join(","), "]"].join(""));
        }

        for (var i = 0; i < proc.offsetArgs.length; ++i) {
          // Offset arguments used for stencil operations
          var off_arg = proc.offsetArgs[i];
          var init_string = [];

          for (var j = 0; j < off_arg.offset.length; ++j) {
            if (off_arg.offset[j] === 0) {
              continue;
            } else if (off_arg.offset[j] === 1) {
              init_string.push(["t", off_arg.array, "p", j].join(""));
            } else {
              init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""));
            }
          }

          if (init_string.length === 0) {
            vars.push("q" + i + "=0");
          } else {
            vars.push(["q", i, "=", init_string.join("+")].join(""));
          }
        } //Prepare this variables


        var thisVars = uniq([].concat(proc.pre.thisVars).concat(proc.body.thisVars).concat(proc.post.thisVars));
        vars = vars.concat(thisVars);

        if (vars.length > 0) {
          code.push("var " + vars.join(","));
        }

        for (var i = 0; i < proc.arrayArgs.length; ++i) {
          code.push("p" + i + "|=0");
        } //Inline prelude


        if (proc.pre.body.length > 3) {
          code.push(processBlock(proc.pre, proc, dtypes));
        } //Process body


        var body = processBlock(proc.body, proc, dtypes);
        var matched = countMatches(loopOrders);

        if (matched < dimension) {
          code.push(outerFill(matched, loopOrders[0], proc, body)); // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
        } else {
          code.push(innerFill(loopOrders[0], proc, body));
        } //Inline epilog


        if (proc.post.body.length > 3) {
          code.push(processBlock(proc.post, proc, dtypes));
        }

        if (proc.debug) {
          console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------");
        }

        var loopName = [proc.funcName || "unnamed", "_cwise_loop_", orders[0].join("s"), "m", matched, typeSummary(dtypes)].join("");
        var f = new Function(["function ", loopName, "(", arglist.join(","), "){", code.join("\n"), "} return ", loopName].join(""));
        return f();
      }

      module.exports = generateCWiseOp;

      /***/
    }),
/* 289 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      function unique_pred(list, compare) {
        var ptr = 1,
          len = list.length,
          a = list[0],
          b = list[0];

        for (var i = 1; i < len; ++i) {
          b = a;
          a = list[i];

          if (compare(a, b)) {
            if (i === ptr) {
              ptr++;
              continue;
            }

            list[ptr++] = a;
          }
        }

        list.length = ptr;
        return list;
      }

      function unique_eq(list) {
        var ptr = 1,
          len = list.length,
          a = list[0],
          b = list[0];

        for (var i = 1; i < len; ++i, b = a) {
          b = a;
          a = list[i];

          if (a !== b) {
            if (i === ptr) {
              ptr++;
              continue;
            }

            list[ptr++] = a;
          }
        }

        list.length = ptr;
        return list;
      }

      function unique(list, compare, sorted) {
        if (list.length === 0) {
          return list;
        }

        if (compare) {
          if (!sorted) {
            list.sort(compare);
          }

          return unique_pred(list, compare);
        }

        if (!sorted) {
          list.sort();
        }

        return unique_eq(list);
      }

      module.exports = unique;

      /***/
    }),
/* 290 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (process) {
        var Stream = __webpack_require__(291); // through
        //
        // a stream that does nothing but re-emit the input.
        // useful for aggregating a series of changing but not ending streams into one stream)


        exports = module.exports = through;
        through.through = through; //create a readable writable stream.

        function through(write, end, opts) {
          write = write || function (data) {
            this.queue(data);
          };

          end = end || function () {
            this.queue(null);
          };

          var ended = false,
            destroyed = false,
            buffer = [],
            _ended = false;
          var stream = new Stream();
          stream.readable = stream.writable = true;
          stream.paused = false; //  stream.autoPause   = !(opts && opts.autoPause   === false)

          stream.autoDestroy = !(opts && opts.autoDestroy === false);

          stream.write = function (data) {
            write.call(this, data);
            return !stream.paused;
          };

          function drain() {
            while (buffer.length && !stream.paused) {
              var data = buffer.shift();
              if (null === data) return stream.emit('end'); else stream.emit('data', data);
            }
          }

          stream.queue = stream.push = function (data) {
            //    console.error(ended)
            if (_ended) return stream;
            if (data === null) _ended = true;
            buffer.push(data);
            drain();
            return stream;
          }; //this will be registered as the first 'end' listener
          //must call destroy next tick, to make sure we're after any
          //stream piped from here.
          //this is only a problem if end is not emitted synchronously.
          //a nicer way to do this is to make sure this is the last listener for 'end'


          stream.on('end', function () {
            stream.readable = false;
            if (!stream.writable && stream.autoDestroy) process.nextTick(function () {
              stream.destroy();
            });
          });

          function _end() {
            stream.writable = false;
            end.call(stream);
            if (!stream.readable && stream.autoDestroy) stream.destroy();
          }

          stream.end = function (data) {
            if (ended) return;
            ended = true;
            if (arguments.length) stream.write(data);

            _end(); // will emit or queue


            return stream;
          };

          stream.destroy = function () {
            if (destroyed) return;
            destroyed = true;
            ended = true;
            buffer.length = 0;
            stream.writable = stream.readable = false;
            stream.emit('close');
            return stream;
          };

          stream.pause = function () {
            if (stream.paused) return;
            stream.paused = true;
            return stream;
          };

          stream.resume = function () {
            if (stream.paused) {
              stream.paused = false;
              stream.emit('resume');
            }

            drain(); //may have become paused again,
            //as drain emits 'data'.

            if (!stream.paused) stream.emit('drain');
            return stream;
          };

          return stream;
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(15)))

      /***/
    }),
/* 291 */
/***/ (function (module, exports, __webpack_require__) {

      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      module.exports = Stream;

      var EE = __webpack_require__(52).EventEmitter;

      var inherits = __webpack_require__(22);

      inherits(Stream, EE);
      Stream.Readable = __webpack_require__(53);
      Stream.Writable = __webpack_require__(301);
      Stream.Duplex = __webpack_require__(302);
      Stream.Transform = __webpack_require__(303);
      Stream.PassThrough = __webpack_require__(304); // Backwards-compat with node 0.4.x

      Stream.Stream = Stream; // old-style streams.  Note that the pipe method (the only relevant
      // part of this class) is overridden in the Readable class.

      function Stream() {
        EE.call(this);
      }

      Stream.prototype.pipe = function (dest, options) {
        var source = this;

        function ondata(chunk) {
          if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) {
              source.pause();
            }
          }
        }

        source.on('data', ondata);

        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }

        dest.on('drain', ondrain); // If the 'end' option is not supplied, dest.end() will be called when
        // source gets the 'end' or 'close' events.  Only dest.end() once.

        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on('end', onend);
          source.on('close', onclose);
        }

        var didOnEnd = false;

        function onend() {
          if (didOnEnd) return;
          didOnEnd = true;
          dest.end();
        }

        function onclose() {
          if (didOnEnd) return;
          didOnEnd = true;
          if (typeof dest.destroy === 'function') dest.destroy();
        } // don't leave dangling pipes when there are errors.


        function onerror(er) {
          cleanup();

          if (EE.listenerCount(this, 'error') === 0) {
            throw er; // Unhandled stream error in pipe.
          }
        }

        source.on('error', onerror);
        dest.on('error', onerror); // remove all the event listeners that were added.

        function cleanup() {
          source.removeListener('data', ondata);
          dest.removeListener('drain', ondrain);
          source.removeListener('end', onend);
          source.removeListener('close', onclose);
          source.removeListener('error', onerror);
          dest.removeListener('error', onerror);
          source.removeListener('end', cleanup);
          source.removeListener('close', cleanup);
          dest.removeListener('close', cleanup);
        }

        source.on('end', cleanup);
        source.on('close', cleanup);
        dest.on('close', cleanup);
        dest.emit('pipe', source); // Allow for unix-like usage: A.pipe(B).pipe(C)

        return dest;
      };

      /***/
    }),
/* 292 */
/***/ (function (module, exports) {

      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };

      /***/
    }),
/* 293 */
/***/ (function (module, exports) {

      /* (ignored) */

      /***/
    }),
/* 294 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Buffer = __webpack_require__(54).Buffer;

      var util = __webpack_require__(295);

      function copyBuffer(src, target, offset) {
        src.copy(target, offset);
      }

      module.exports = function () {
        function BufferList() {
          _classCallCheck(this, BufferList);

          this.head = null;
          this.tail = null;
          this.length = 0;
        }

        BufferList.prototype.push = function push(v) {
          var entry = {
            data: v,
            next: null
          };
          if (this.length > 0) this.tail.next = entry; else this.head = entry;
          this.tail = entry;
          ++this.length;
        };

        BufferList.prototype.unshift = function unshift(v) {
          var entry = {
            data: v,
            next: this.head
          };
          if (this.length === 0) this.tail = entry;
          this.head = entry;
          ++this.length;
        };

        BufferList.prototype.shift = function shift() {
          if (this.length === 0) return;
          var ret = this.head.data;
          if (this.length === 1) this.head = this.tail = null; else this.head = this.head.next;
          --this.length;
          return ret;
        };

        BufferList.prototype.clear = function clear() {
          this.head = this.tail = null;
          this.length = 0;
        };

        BufferList.prototype.join = function join(s) {
          if (this.length === 0) return '';
          var p = this.head;
          var ret = '' + p.data;

          while (p = p.next) {
            ret += s + p.data;
          }

          return ret;
        };

        BufferList.prototype.concat = function concat(n) {
          if (this.length === 0) return Buffer.alloc(0);
          if (this.length === 1) return this.head.data;
          var ret = Buffer.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;

          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }

          return ret;
        };

        return BufferList;
      }();

      if (util && util.inspect && util.inspect.custom) {
        module.exports.prototype[util.inspect.custom] = function () {
          var obj = util.inspect({
            length: this.length
          });
          return this.constructor.name + ' ' + obj;
        };
      }

      /***/
    }),
/* 295 */
/***/ (function (module, exports) {

      /* (ignored) */

      /***/
    }),
/* 296 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {
        var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
        var apply = Function.prototype.apply; // DOM APIs, for completeness

        exports.setTimeout = function () {
          return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
        };

        exports.setInterval = function () {
          return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
        };

        exports.clearTimeout = exports.clearInterval = function (timeout) {
          if (timeout) {
            timeout.close();
          }
        };

        function Timeout(id, clearFn) {
          this._id = id;
          this._clearFn = clearFn;
        }

        Timeout.prototype.unref = Timeout.prototype.ref = function () { };

        Timeout.prototype.close = function () {
          this._clearFn.call(scope, this._id);
        }; // Does not start the time, just sets up the members needed.


        exports.enroll = function (item, msecs) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = msecs;
        };

        exports.unenroll = function (item) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = -1;
        };

        exports._unrefActive = exports.active = function (item) {
          clearTimeout(item._idleTimeoutId);
          var msecs = item._idleTimeout;

          if (msecs >= 0) {
            item._idleTimeoutId = setTimeout(function onTimeout() {
              if (item._onTimeout) item._onTimeout();
            }, msecs);
          }
        }; // setimmediate attaches itself to the global object


        __webpack_require__(297); // On some exotic environments, it's not clear which object `setimmediate` was
        // able to install onto.  Search each possibility in the same order as the
        // `setimmediate` library.


        exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
        exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12)))

      /***/
    }),
/* 297 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global, process) {
        (function (global, undefined) {
          "use strict";

          if (global.setImmediate) {
            return;
          }

          var nextHandle = 1; // Spec says greater than zero

          var tasksByHandle = {};
          var currentlyRunningATask = false;
          var doc = global.document;
          var registerImmediate;

          function setImmediate(callback) {
            // Callback can either be a function or a string
            if (typeof callback !== "function") {
              callback = new Function("" + callback);
            } // Copy function arguments


            var args = new Array(arguments.length - 1);

            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
            } // Store and register the task


            var task = {
              callback: callback,
              args: args
            };
            tasksByHandle[nextHandle] = task;
            registerImmediate(nextHandle);
            return nextHandle++;
          }

          function clearImmediate(handle) {
            delete tasksByHandle[handle];
          }

          function run(task) {
            var callback = task.callback;
            var args = task.args;

            switch (args.length) {
              case 0:
                callback();
                break;

              case 1:
                callback(args[0]);
                break;

              case 2:
                callback(args[0], args[1]);
                break;

              case 3:
                callback(args[0], args[1], args[2]);
                break;

              default:
                callback.apply(undefined, args);
                break;
            }
          }

          function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
              // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
              // "too much recursion" error.
              setTimeout(runIfPresent, 0, handle);
            } else {
              var task = tasksByHandle[handle];

              if (task) {
                currentlyRunningATask = true;

                try {
                  run(task);
                } finally {
                  clearImmediate(handle);
                  currentlyRunningATask = false;
                }
              }
            }
          }

          function installNextTickImplementation() {
            registerImmediate = function (handle) {
              process.nextTick(function () {
                runIfPresent(handle);
              });
            };
          }

          function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
              var postMessageIsAsynchronous = true;
              var oldOnMessage = global.onmessage;

              global.onmessage = function () {
                postMessageIsAsynchronous = false;
              };

              global.postMessage("", "*");
              global.onmessage = oldOnMessage;
              return postMessageIsAsynchronous;
            }
          }

          function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
            var messagePrefix = "setImmediate$" + Math.random() + "$";

            var onGlobalMessage = function (event) {
              if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
              }
            };

            if (global.addEventListener) {
              global.addEventListener("message", onGlobalMessage, false);
            } else {
              global.attachEvent("onmessage", onGlobalMessage);
            }

            registerImmediate = function (handle) {
              global.postMessage(messagePrefix + handle, "*");
            };
          }

          function installMessageChannelImplementation() {
            var channel = new MessageChannel();

            channel.port1.onmessage = function (event) {
              var handle = event.data;
              runIfPresent(handle);
            };

            registerImmediate = function (handle) {
              channel.port2.postMessage(handle);
            };
          }

          function installReadyStateChangeImplementation() {
            var html = doc.documentElement;

            registerImmediate = function (handle) {
              // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
              // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
              var script = doc.createElement("script");

              script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
              };

              html.appendChild(script);
            };
          }

          function installSetTimeoutImplementation() {
            registerImmediate = function (handle) {
              setTimeout(runIfPresent, 0, handle);
            };
          } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


          var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
          attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

          if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();
          } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();
          } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();
          } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6–8
            installReadyStateChangeImplementation();
          } else {
            // For older browsers
            installSetTimeoutImplementation();
          }

          attachTo.setImmediate = setImmediate;
          attachTo.clearImmediate = clearImmediate;
        })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12), __webpack_require__(15)))

      /***/
    }),
/* 298 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {/**
 * Module exports.
 */
        module.exports = deprecate;
        /**
         * Mark that a method should not be used.
         * Returns a modified function which warns once by default.
         *
         * If `localStorage.noDeprecation = true` is set, then it is a no-op.
         *
         * If `localStorage.throwDeprecation = true` is set, then deprecated functions
         * will throw an Error when invoked.
         *
         * If `localStorage.traceDeprecation = true` is set, then deprecated functions
         * will invoke `console.trace()` instead of `console.error()`.
         *
         * @param {Function} fn - the function to deprecate
         * @param {String} msg - the string to print to the console when `fn` is invoked
         * @returns {Function} a new "deprecated" version of `fn`
         * @api public
         */

        function deprecate(fn, msg) {
          if (config('noDeprecation')) {
            return fn;
          }

          var warned = false;

          function deprecated() {
            if (!warned) {
              if (config('throwDeprecation')) {
                throw new Error(msg);
              } else if (config('traceDeprecation')) {
                console.trace(msg);
              } else {
                console.warn(msg);
              }

              warned = true;
            }

            return fn.apply(this, arguments);
          }

          return deprecated;
        }
        /**
         * Checks `localStorage` for boolean values for the given `name`.
         *
         * @param {String} name
         * @returns {Boolean}
         * @api private
         */


        function config(name) {
          // accessing global.localStorage can trigger a DOMException in sandboxed iframes
          try {
            if (!global.localStorage) return false;
          } catch (_) {
            return false;
          }

          var val = global.localStorage[name];
          if (null == val) return false;
          return String(val).toLowerCase() === 'true';
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(12)))

      /***/
    }),
/* 299 */
/***/ (function (module, exports, __webpack_require__) {

      /* eslint-disable node/no-deprecated-api */
      var buffer = __webpack_require__(26);

      var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }

      if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        // Copy properties from require('buffer')
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }

      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
      }

      SafeBuffer.prototype = Object.create(Buffer.prototype); // Copy static methods from Buffer

      copyProps(Buffer, SafeBuffer);

      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          throw new TypeError('Argument must not be a number');
        }

        return Buffer(arg, encodingOrOffset, length);
      };

      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        var buf = Buffer(size);

        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }

        return buf;
      };

      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        return Buffer(size);
      };

      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        return buffer.SlowBuffer(size);
      };

      /***/
    }),
/* 300 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      // a passthrough stream.
      // basically just the most minimal sort of Transform stream.
      // Every written chunk gets output as-is.


      module.exports = PassThrough;

      var Transform = __webpack_require__(98);
      /*<replacement>*/


      var util = Object.create(__webpack_require__(27));
      util.inherits = __webpack_require__(22);
      /*</replacement>*/

      util.inherits(PassThrough, Transform);

      function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
        Transform.call(this, options);
      }

      PassThrough.prototype._transform = function (chunk, encoding, cb) {
        cb(null, chunk);
      };

      /***/
    }),
/* 301 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(55);

      /***/
    }),
/* 302 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(16);

      /***/
    }),
/* 303 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(53).Transform;

      /***/
    }),
/* 304 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(53).PassThrough;

      /***/
    }),
/* 305 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (Buffer) {/**
 * Module exports.
 */
        module.exports = dataUriToBuffer;
        /**
         * Returns a `Buffer` instance from the given data URI `uri`.
         *
         * @param {String} uri Data URI to turn into a Buffer instance
         * @return {Buffer} Buffer instance from Data URI
         * @api public
         */

        function dataUriToBuffer(uri) {
          if (!/^data\:/i.test(uri)) {
            throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
          } // strip newlines


          uri = uri.replace(/\r?\n/g, ''); // split the URI up into the "metadata" and the "data" portions

          var firstComma = uri.indexOf(',');
          if (-1 === firstComma || firstComma <= 4) throw new TypeError('malformed data: URI'); // remove the "data:" scheme and parse the metadata

          var meta = uri.substring(5, firstComma).split(';');
          var base64 = false;
          var charset = 'US-ASCII';

          for (var i = 0; i < meta.length; i++) {
            if ('base64' == meta[i]) {
              base64 = true;
            } else if (0 == meta[i].indexOf('charset=')) {
              charset = meta[i].substring(8);
            }
          } // get the encoded data portion and decode URI-encoded chars


          var data = unescape(uri.substring(firstComma + 1));
          var encoding = base64 ? 'base64' : 'ascii';
          var buffer = new Buffer(data, encoding); // set `.type` property to MIME type

          buffer.type = meta[0] || 'text/plain'; // set the `.charset` property

          buffer.charset = charset;
          return buffer;
        }
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(26).Buffer))

      /***/
    }),
/* 306 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      function interp1d(arr, x) {
        var ix = Math.floor(x),
          fx = x - ix,
          s0 = 0 <= ix && ix < arr.shape[0],
          s1 = 0 <= ix + 1 && ix + 1 < arr.shape[0],
          w0 = s0 ? +arr.get(ix) : 0.0,
          w1 = s1 ? +arr.get(ix + 1) : 0.0;
        return (1.0 - fx) * w0 + fx * w1;
      }

      function interp2d(arr, x, y) {
        var ix = Math.floor(x),
          fx = x - ix,
          s0 = 0 <= ix && ix < arr.shape[0],
          s1 = 0 <= ix + 1 && ix + 1 < arr.shape[0],
          iy = Math.floor(y),
          fy = y - iy,
          t0 = 0 <= iy && iy < arr.shape[1],
          t1 = 0 <= iy + 1 && iy + 1 < arr.shape[1],
          w00 = s0 && t0 ? arr.get(ix, iy) : 0.0,
          w01 = s0 && t1 ? arr.get(ix, iy + 1) : 0.0,
          w10 = s1 && t0 ? arr.get(ix + 1, iy) : 0.0,
          w11 = s1 && t1 ? arr.get(ix + 1, iy + 1) : 0.0;
        return (1.0 - fy) * ((1.0 - fx) * w00 + fx * w10) + fy * ((1.0 - fx) * w01 + fx * w11);
      }

      function interp3d(arr, x, y, z) {
        var ix = Math.floor(x),
          fx = x - ix,
          s0 = 0 <= ix && ix < arr.shape[0],
          s1 = 0 <= ix + 1 && ix + 1 < arr.shape[0],
          iy = Math.floor(y),
          fy = y - iy,
          t0 = 0 <= iy && iy < arr.shape[1],
          t1 = 0 <= iy + 1 && iy + 1 < arr.shape[1],
          iz = Math.floor(z),
          fz = z - iz,
          u0 = 0 <= iz && iz < arr.shape[2],
          u1 = 0 <= iz + 1 && iz + 1 < arr.shape[2],
          w000 = s0 && t0 && u0 ? arr.get(ix, iy, iz) : 0.0,
          w010 = s0 && t1 && u0 ? arr.get(ix, iy + 1, iz) : 0.0,
          w100 = s1 && t0 && u0 ? arr.get(ix + 1, iy, iz) : 0.0,
          w110 = s1 && t1 && u0 ? arr.get(ix + 1, iy + 1, iz) : 0.0,
          w001 = s0 && t0 && u1 ? arr.get(ix, iy, iz + 1) : 0.0,
          w011 = s0 && t1 && u1 ? arr.get(ix, iy + 1, iz + 1) : 0.0,
          w101 = s1 && t0 && u1 ? arr.get(ix + 1, iy, iz + 1) : 0.0,
          w111 = s1 && t1 && u1 ? arr.get(ix + 1, iy + 1, iz + 1) : 0.0;
        return (1.0 - fz) * ((1.0 - fy) * ((1.0 - fx) * w000 + fx * w100) + fy * ((1.0 - fx) * w010 + fx * w110)) + fz * ((1.0 - fy) * ((1.0 - fx) * w001 + fx * w101) + fy * ((1.0 - fx) * w011 + fx * w111));
      }

      function interpNd(arr) {
        var d = arr.shape.length | 0,
          ix = new Array(d),
          fx = new Array(d),
          s0 = new Array(d),
          s1 = new Array(d),
          i,
          t;

        for (i = 0; i < d; ++i) {
          t = +arguments[i + 1];
          ix[i] = Math.floor(t);
          fx[i] = t - ix[i];
          s0[i] = 0 <= ix[i] && ix[i] < arr.shape[i];
          s1[i] = 0 <= ix[i] + 1 && ix[i] + 1 < arr.shape[i];
        }

        var r = 0.0,
          j,
          w,
          idx;

        i_loop: for (i = 0; i < 1 << d; ++i) {
          w = 1.0;
          idx = arr.offset;

          for (j = 0; j < d; ++j) {
            if (i & 1 << j) {
              if (!s1[j]) {
                continue i_loop;
              }

              w *= fx[j];
              idx += arr.stride[j] * (ix[j] + 1);
            } else {
              if (!s0[j]) {
                continue i_loop;
              }

              w *= 1.0 - fx[j];
              idx += arr.stride[j] * ix[j];
            }
          }

          r += w * arr.data[idx];
        }

        return r;
      }

      function interpolate(arr, x, y, z) {
        switch (arr.shape.length) {
          case 0:
            return 0.0;

          case 1:
            return interp1d(arr, x);

          case 2:
            return interp2d(arr, x, y);

          case 3:
            return interp3d(arr, x, y, z);

          default:
            return interpNd.apply(undefined, arguments);
        }
      }

      module.exports = interpolate;
      module.exports.d1 = interp1d;
      module.exports.d2 = interp2d;
      module.exports.d3 = interp3d;

      /***/
    }),
/* 307 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "BarcodeDecoder", function () { return /* reexport */ barcode_decoder; });
      __webpack_require__.d(__webpack_exports__, "BarcodeReader", function () { return /* reexport */ barcode_reader; });
      __webpack_require__.d(__webpack_exports__, "CameraAccess", function () { return /* reexport */ camera_access; });
      __webpack_require__.d(__webpack_exports__, "ImageDebug", function () { return /* reexport */ image_debug["a" /* default */]; });
      __webpack_require__.d(__webpack_exports__, "ImageWrapper", function () { return /* reexport */ image_wrapper["a" /* default */]; });
      __webpack_require__.d(__webpack_exports__, "ResultCollector", function () { return /* reexport */ result_collector; });

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
      var helpers_typeof = __webpack_require__(23);
      var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

      // EXTERNAL MODULE: ./src/common/typedefs.js
      var typedefs = __webpack_require__(106);

      // EXTERNAL MODULE: ./src/common/image_wrapper.ts
      var image_wrapper = __webpack_require__(11);

      // CONCATENATED MODULE: ./src/decoder/bresenham.js
      var Bresenham = {};
      var Slope = {
        DIR: {
          UP: 1,
          DOWN: -1
        }
      };
      /**
       * Scans a line of the given image from point p1 to p2 and returns a result object containing
       * gray-scale values (0-255) of the underlying pixels in addition to the min
       * and max values.
       * @param {Object} imageWrapper
       * @param {Object} p1 The start point {x,y}
       * @param {Object} p2 The end point {x,y}
       * @returns {line, min, max}
       */

      Bresenham.getBarcodeLine = function (imageWrapper, p1, p2) {
        /* eslint-disable no-bitwise */
        var x0 = p1.x | 0;
        var y0 = p1.y | 0;
        var x1 = p2.x | 0;
        var y1 = p2.y | 0;
        /* eslint-disable no-bitwise */

        var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
        var error;
        var y;
        var tmp;
        var x;
        var line = [];
        var imageData = imageWrapper.data;
        var width = imageWrapper.size.x;
        var val;
        var min = 255;
        var max = 0;

        function read(a, b) {
          val = imageData[b * width + a];
          min = val < min ? val : min;
          max = val > max ? val : max;
          line.push(val);
        }

        if (steep) {
          tmp = x0;
          x0 = y0;
          y0 = tmp;
          tmp = x1;
          x1 = y1;
          y1 = tmp;
        }

        if (x0 > x1) {
          tmp = x0;
          x0 = x1;
          x1 = tmp;
          tmp = y0;
          y0 = y1;
          y1 = tmp;
        }

        var deltaX = x1 - x0;
        var deltaY = Math.abs(y1 - y0);
        error = deltaX / 2 | 0;
        y = y0;
        var yStep = y0 < y1 ? 1 : -1;

        for (x = x0; x < x1; x++) {
          if (steep) {
            read(y, x);
          } else {
            read(x, y);
          }

          error -= deltaY;

          if (error < 0) {
            y += yStep;
            error += deltaX;
          }
        }

        return {
          line: line,
          min: min,
          max: max
        };
      };
      /**
       * Converts the result from getBarcodeLine into a binary representation
       * also considering the frequency and slope of the signal for more robust results
       * @param {Object} result {line, min, max}
       */


      Bresenham.toBinaryLine = function (result) {
        var min = result.min;
        var max = result.max;
        var line = result.line;
        var slope;
        var slope2;
        var center = min + (max - min) / 2;
        var extrema = [];
        var currentDir;
        var dir;
        var threshold = (max - min) / 12;
        var rThreshold = -threshold;
        var i;
        var j; // 1. find extrema

        currentDir = line[0] > center ? Slope.DIR.UP : Slope.DIR.DOWN;
        extrema.push({
          pos: 0,
          val: line[0]
        });

        for (i = 0; i < line.length - 2; i++) {
          slope = line[i + 1] - line[i];
          slope2 = line[i + 2] - line[i + 1];

          if (slope + slope2 < rThreshold && line[i + 1] < center * 1.5) {
            dir = Slope.DIR.DOWN;
          } else if (slope + slope2 > threshold && line[i + 1] > center * 0.5) {
            dir = Slope.DIR.UP;
          } else {
            dir = currentDir;
          }

          if (currentDir !== dir) {
            extrema.push({
              pos: i,
              val: line[i]
            });
            currentDir = dir;
          }
        }

        extrema.push({
          pos: line.length,
          val: line[line.length - 1]
        });

        for (j = extrema[0].pos; j < extrema[1].pos; j++) {
          line[j] = line[j] > center ? 0 : 1;
        } // iterate over extrema and convert to binary based on avg between minmax


        for (i = 1; i < extrema.length - 1; i++) {
          if (extrema[i + 1].val > extrema[i].val) {
            threshold = extrema[i].val + (extrema[i + 1].val - extrema[i].val) / 3 * 2 | 0;
          } else {
            threshold = extrema[i + 1].val + (extrema[i].val - extrema[i + 1].val) / 3 | 0;
          }

          for (j = extrema[i].pos; j < extrema[i + 1].pos; j++) {
            line[j] = line[j] > threshold ? 0 : 1;
          }
        }

        return {
          line: line,
          threshold: threshold
        };
      };
      /**
       * Used for development only
       */


      Bresenham.debug = {
        printFrequency: function printFrequency(line, canvas) {
          var i;
          var ctx = canvas.getContext('2d'); // eslint-disable-next-line no-param-reassign

          canvas.width = line.length; // eslint-disable-next-line no-param-reassign

          canvas.height = 256;
          ctx.beginPath();
          ctx.strokeStyle = 'blue';

          for (i = 0; i < line.length; i++) {
            ctx.moveTo(i, 255);
            ctx.lineTo(i, 255 - line[i]);
          }

          ctx.stroke();
          ctx.closePath();
        },
        printPattern: function printPattern(line, canvas) {
          var ctx = canvas.getContext('2d');
          var i; // eslint-disable-next-line no-param-reassign

          canvas.width = line.length;
          ctx.fillColor = 'black';

          for (i = 0; i < line.length; i++) {
            if (line[i] === 1) {
              ctx.fillRect(i, 0, 1, 100);
            }
          }
        }
      };
/* harmony default export */ var bresenham = (Bresenham);
      // EXTERNAL MODULE: ./src/common/image_debug.ts
      var image_debug = __webpack_require__(9);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
      var classCallCheck = __webpack_require__(3);
      var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
      var createClass = __webpack_require__(4);
      var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
      var assertThisInitialized = __webpack_require__(1);
      var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
      var inherits = __webpack_require__(6);
      var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
      var possibleConstructorReturn = __webpack_require__(5);
      var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
      var getPrototypeOf = __webpack_require__(2);
      var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
      var defineProperty = __webpack_require__(0);
      var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

      // EXTERNAL MODULE: ./src/common/array_helper.ts
      var array_helper = __webpack_require__(10);

      // CONCATENATED MODULE: ./src/reader/barcode_reader.ts




      var BarcodeDirection;

      (function (BarcodeDirection) {
        BarcodeDirection[BarcodeDirection["Forward"] = 1] = "Forward";
        BarcodeDirection[BarcodeDirection["Reverse"] = -1] = "Reverse";
      })(BarcodeDirection || (BarcodeDirection = {}));

      ;
      ;
      ;
      ;
      ;
      ;
      var barcode_reader_BarcodeReader = /*#__PURE__*/function () {
        createClass_default()(BarcodeReader, null, [{
          key: "Exception",
          get: function get() {
            return {
              StartNotFoundException: 'Start-Info was not found!',
              CodeNotFoundException: 'Code could not be found!',
              PatternNotFoundException: 'Pattern could not be found!'
            };
          }
        }]);

        function BarcodeReader(config, supplements) {
          classCallCheck_default()(this, BarcodeReader);

          defineProperty_default()(this, "_row", []);

          defineProperty_default()(this, "config", {});

          defineProperty_default()(this, "supplements", []);

          defineProperty_default()(this, "SINGLE_CODE_ERROR", 0);

          defineProperty_default()(this, "FORMAT", 'unknown');

          defineProperty_default()(this, "CONFIG_KEYS", {});

          this._row = [];
          this.config = config || {};

          if (supplements) {
            this.supplements = supplements;
          }

          return this;
        }

        createClass_default()(BarcodeReader, [{
          key: "_nextUnset",
          value: function _nextUnset(line) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            for (var i = start; i < line.length; i++) {
              if (!line[i]) return i;
            }

            return line.length;
          }
        }, {
          key: "_matchPattern",
          value: function _matchPattern(counter, code, maxSingleError) {
            var error = 0;
            var singleError = 0;
            var sum = 0;
            var modulo = 0;
            var barWidth = 0;
            var count = 0;
            var scaled = 0;
            maxSingleError = maxSingleError || this.SINGLE_CODE_ERROR || 1;

            for (var i = 0; i < counter.length; i++) {
              sum += counter[i];
              modulo += code[i];
            }

            if (sum < modulo) {
              return Number.MAX_VALUE;
            }

            barWidth = sum / modulo;
            maxSingleError *= barWidth;

            for (var _i = 0; _i < counter.length; _i++) {
              count = counter[_i];
              scaled = code[_i] * barWidth;
              singleError = Math.abs(count - scaled) / scaled;

              if (singleError > maxSingleError) {
                return Number.MAX_VALUE;
              }

              error += singleError;
            }

            return error / modulo;
          }
        }, {
          key: "_nextSet",
          value: function _nextSet(line) {
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            for (var i = offset; i < line.length; i++) {
              if (line[i]) return i;
            }

            return line.length;
          }
        }, {
          key: "_correctBars",
          value: function _correctBars(counter, correction, indices) {
            var length = indices.length;
            var tmp = 0;

            while (length--) {
              tmp = counter[indices[length]] * (1 - (1 - correction) / 2);

              if (tmp > 1) {
                counter[indices[length]] = tmp;
              }
            }
          }
        }, {
          key: "decodePattern",
          value: function decodePattern(pattern) {
            // console.warn('* decodePattern', pattern);
            this._row = pattern; // console.warn('* decodePattern calling decode', typeof this, this.constructor, this.FORMAT, JSON.stringify(this));

            var result = this._decode(); // console.warn('* first result=', result);


            if (result === null) {
              this._row.reverse();

              result = this._decode(); // console.warn('* reversed result=', result);

              if (result) {
                result.direction = BarcodeDirection.Reverse;
                result.start = this._row.length - result.start;
                result.end = this._row.length - result.end;
              }
            } else {
              result.direction = BarcodeDirection.Forward;
            }

            if (result) {
              result.format = this.FORMAT;
            } // console.warn('* returning', result);


            return result;
          }
        }, {
          key: "_matchRange",
          value: function _matchRange(start, end, value) {
            var i;
            start = start < 0 ? 0 : start;

            for (i = start; i < end; i++) {
              if (this._row[i] !== value) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "_fillCounters",
          value: function _fillCounters() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._nextUnset(this._row);
            var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._row.length;
            var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var counters = [];
            var counterPos = 0;
            counters[counterPos] = 0;

            for (var i = offset; i < end; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counters[counterPos]++;
              } else {
                counterPos++;
                counters[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return counters;
          }
        }, {
          key: "_toCounters",
          value: function _toCounters(start, counters) {
            var numCounters = counters.length;
            var end = this._row.length;
            var isWhite = !this._row[start];
            var counterPos = 0;
            array_helper["a" /* default */].init(counters, 0);

            for (var i = start; i < end; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counters[counterPos]++;
              } else {
                counterPos++;

                if (counterPos === numCounters) {
                  break;
                } else {
                  counters[counterPos] = 1;
                  isWhite = !isWhite;
                }
              }
            }

            return counters;
          }
        }]);

        return BarcodeReader;
      }();
/* harmony default export */ var barcode_reader = (barcode_reader_BarcodeReader);
      // CONCATENATED MODULE: ./src/reader/code_128_reader.ts








      function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var code_128_reader_Code128Reader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(Code128Reader, _BarcodeReader);

        var _super = _createSuper(Code128Reader);

        function Code128Reader() {
          var _this;

          classCallCheck_default()(this, Code128Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_SHIFT", 98);

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_C", 99);

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_B", 100);

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_A", 101);

          defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_A", 103);

          defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_B", 104);

          defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_C", 105);

          defineProperty_default()(assertThisInitialized_default()(_this), "STOP_CODE", 106);

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_PATTERN", [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]);

          defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.64);

          defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.30);

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_128');

          defineProperty_default()(assertThisInitialized_default()(_this), "MODULE_INDICES", {
            bar: [0, 2, 4],
            space: [1, 3, 5]
          });

          return _this;
        }

        createClass_default()(Code128Reader, [{
          key: "_decodeCode",
          value: function _decodeCode(start, correction) {
            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: start,
              end: start,
              correction: {
                bar: 1,
                space: 1
              }
            };
            var counter = [0, 0, 0, 0, 0, 0];
            var offset = start;
            var isWhite = !this._row[offset];
            var counterPos = 0;

            for (var i = offset; i < this._row.length; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  if (correction) {
                    this._correct(counter, correction);
                  }

                  for (var code = 0; code < this.CODE_PATTERN.length; code++) {
                    var error = this._matchPattern(counter, this.CODE_PATTERN[code]);

                    if (error < bestMatch.error) {
                      bestMatch.code = code;
                      bestMatch.error = error;
                    }
                  }

                  bestMatch.end = i;

                  if (bestMatch.code === -1 || bestMatch.error > this.AVG_CODE_ERROR) {
                    return null;
                  }

                  if (this.CODE_PATTERN[bestMatch.code]) {
                    bestMatch.correction.bar = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
                    bestMatch.correction.space = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
                  }

                  return bestMatch;
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return null;
          }
        }, {
          key: "_correct",
          value: function _correct(counter, correction) {
            this._correctBars(counter, correction.bar, this.MODULE_INDICES.bar);

            this._correctBars(counter, correction.space, this.MODULE_INDICES.space);
          }
        }, {
          key: "_findStart",
          // TODO: _findStart and decodeCode share similar code, can we re-use some?
          value: function _findStart() {
            var counter = [0, 0, 0, 0, 0, 0];

            var offset = this._nextSet(this._row);

            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: 0,
              end: 0,
              correction: {
                bar: 1,
                space: 1
              }
            };
            var isWhite = false;
            var counterPos = 0;

            for (var i = offset; i < this._row.length; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  var sum = counter.reduce(function (prev, next) {
                    return prev + next;
                  }, 0);

                  for (var code = this.START_CODE_A; code <= this.START_CODE_C; code++) {
                    var error = this._matchPattern(counter, this.CODE_PATTERN[code]);

                    if (error < bestMatch.error) {
                      bestMatch.code = code;
                      bestMatch.error = error;
                    }
                  }

                  if (bestMatch.error < this.AVG_CODE_ERROR) {
                    bestMatch.start = i - sum;
                    bestMatch.end = i;
                    bestMatch.correction.bar = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
                    bestMatch.correction.space = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
                    return bestMatch;
                  }

                  for (var j = 0; j < 4; j++) {
                    counter[j] = counter[j + 2];
                  }

                  counter[4] = 0;
                  counter[5] = 0;
                  counterPos--;
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return null;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            var _this2 = this;

            var startInfo = this._findStart();

            if (startInfo === null) {
              return null;
            } // var self = this,
            //     done = false,
            //     result = [],
            //     multiplier = 0,
            //     checksum = 0,
            //     codeset,
            //     rawResult = [],
            //     decodedCodes = [],
            //     shiftNext = false,
            //     unshift,
            //     removeLastCharacter = true;


            var code = {
              code: startInfo.code,
              start: startInfo.start,
              end: startInfo.end,
              correction: {
                bar: startInfo.correction.bar,
                space: startInfo.correction.space
              }
            };
            var decodedCodes = [];
            decodedCodes.push(code);
            var checksum = code.code;

            var codeset = function (c) {
              switch (c) {
                case _this2.START_CODE_A:
                  return _this2.CODE_A;

                case _this2.START_CODE_B:
                  return _this2.CODE_B;

                case _this2.START_CODE_C:
                  return _this2.CODE_C;

                default:
                  return null;
              }
            }(code.code);

            var done = false;
            var shiftNext = false;
            var unshift = shiftNext;
            var removeLastCharacter = true;
            var multiplier = 0;
            var rawResult = [];
            var result = []; // TODO: i think this should be string only, but it creates problems if it is

            while (!done) {
              unshift = shiftNext;
              shiftNext = false;
              code = this._decodeCode(code.end, code.correction);

              if (code !== null) {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = true;
                }

                if (code.code !== this.STOP_CODE) {
                  rawResult.push(code.code);
                  multiplier++;
                  checksum += multiplier * code.code;
                }

                decodedCodes.push(code);

                switch (codeset) {
                  case this.CODE_A:
                    if (code.code < 64) {
                      result.push(String.fromCharCode(32 + code.code));
                    } else if (code.code < 96) {
                      result.push(String.fromCharCode(code.code - 64));
                    } else {
                      if (code.code !== this.STOP_CODE) {
                        removeLastCharacter = false;
                      }

                      switch (code.code) {
                        case this.CODE_SHIFT:
                          shiftNext = true;
                          codeset = this.CODE_B;
                          break;

                        case this.CODE_B:
                          codeset = this.CODE_B;
                          break;

                        case this.CODE_C:
                          codeset = this.CODE_C;
                          break;

                        case this.STOP_CODE:
                          done = true;
                          break;
                      }
                    }

                    break;

                  case this.CODE_B:
                    if (code.code < 96) {
                      result.push(String.fromCharCode(32 + code.code));
                    } else {
                      if (code.code !== this.STOP_CODE) {
                        removeLastCharacter = false;
                      }

                      switch (code.code) {
                        case this.CODE_SHIFT:
                          shiftNext = true;
                          codeset = this.CODE_A;
                          break;

                        case this.CODE_A:
                          codeset = this.CODE_A;
                          break;

                        case this.CODE_C:
                          codeset = this.CODE_C;
                          break;

                        case this.STOP_CODE:
                          done = true;
                          break;
                      }
                    }

                    break;

                  case this.CODE_C:
                    if (code.code < 100) {
                      result.push(code.code < 10 ? '0' + code.code : code.code);
                    } else {
                      if (code.code !== this.STOP_CODE) {
                        removeLastCharacter = false;
                      }

                      switch (code.code) {
                        case this.CODE_A:
                          codeset = this.CODE_A;
                          break;

                        case this.CODE_B:
                          codeset = this.CODE_B;
                          break;

                        case this.STOP_CODE:
                          done = true;
                          break;
                      }
                    }

                    break;
                }
              } else {
                done = true;
              }

              if (unshift) {
                codeset = codeset === this.CODE_A ? this.CODE_B : this.CODE_A;
              }
            }

            if (code === null) {
              return null;
            }

            code.end = this._nextUnset(this._row, code.end);

            if (!this._verifyTrailingWhitespace(code)) {
              return null;
            }

            checksum -= multiplier * rawResult[rawResult.length - 1];

            if (checksum % 103 !== rawResult[rawResult.length - 1]) {
              return null;
            }

            if (!result.length) {
              return null;
            } // remove last code from result (checksum)


            if (removeLastCharacter) {
              result.splice(result.length - 1, 1);
            }

            return {
              code: result.join(''),
              start: startInfo.start,
              end: code.end,
              codeset: codeset,
              startInfo: startInfo,
              decodedCodes: decodedCodes,
              endInfo: code,
              format: this.FORMAT
            };
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function _verifyTrailingWhitespace(endInfo) {
            var self = this,
              trailingWhitespaceEnd;
            trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

            if (trailingWhitespaceEnd < self._row.length) {
              if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
              }
            }

            return null;
          }
        }, {
          key: "calculateCorrection",
          value: function calculateCorrection(expected, normalized, indices) {
            var length = indices.length,
              sumNormalized = 0,
              sumExpected = 0;

            while (length--) {
              sumExpected += expected[indices[length]];
              sumNormalized += normalized[indices[length]];
            }

            return sumExpected / sumNormalized;
          }
        }]);

        return Code128Reader;
      }(barcode_reader);

/* harmony default export */ var code_128_reader = (code_128_reader_Code128Reader);
      // EXTERNAL MODULE: ./node_modules/lodash/merge.js
      var merge = __webpack_require__(17);
      var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

      // CONCATENATED MODULE: ./src/reader/ean_reader.ts








      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function ean_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function ean_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }


      // const CODE_L_START = 0;

      var CODE_G_START = 10;

      var START_PATTERN = [1, 1, 1];
      var MIDDLE_PATTERN = [1, 1, 1, 1, 1];

      var EXTENSION_START_PATTERN = [1, 1, 2];
      var CODE_PATTERN = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]];
      var CODE_FREQUENCY = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]; // const SINGLE_CODE_ERROR = 0.70;

      var AVG_CODE_ERROR = 0.48;

      var ean_reader_EANReader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(EANReader, _BarcodeReader);

        var _super = ean_reader_createSuper(EANReader);

        // TODO: does this need to be in the class?
        function EANReader(config, supplements) {
          var _this;

          classCallCheck_default()(this, EANReader);

          _this = _super.call(this, merge_default()({
            supplements: []
          }, config), supplements);

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_13');

          defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.70);

          defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [1, 1, 1]);

          return _this;
        }

        createClass_default()(EANReader, [{
          key: "_findPattern",
          value: function _findPattern(pattern, offset, isWhite, tryHarder) {
            var counter = new Array(pattern.length).fill(0);
            var bestMatch = {
              error: Number.MAX_VALUE,
              start: 0,
              end: 0
            };
            var epsilon = AVG_CODE_ERROR; // console.warn('* findPattern', pattern, offset, isWhite, tryHarder, epsilon);

            var counterPos = 0;

            if (!offset) {
              offset = this._nextSet(this._row);
            }

            var found = false;

            for (var i = offset; i < this._row.length; i++) {
              // console.warn(`* loop i=${offset} len=${this._row.length} isWhite=${isWhite} counterPos=${counterPos}`);
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos] += 1;
              } else {
                if (counterPos === counter.length - 1) {
                  var error = this._matchPattern(counter, pattern); // console.warn('* matchPattern', error, counter, pattern);


                  if (error < epsilon && bestMatch.error && error < bestMatch.error) {
                    found = true;
                    bestMatch.error = error;
                    bestMatch.start = i - counter.reduce(function (sum, value) {
                      return sum + value;
                    }, 0);
                    bestMatch.end = i; // console.warn('* return bestMatch', JSON.stringify(bestMatch));

                    return bestMatch;
                  }

                  if (tryHarder) {
                    for (var j = 0; j < counter.length - 2; j++) {
                      counter[j] = counter[j + 2];
                    }

                    counter[counter.length - 2] = 0;
                    counter[counter.length - 1] = 0;
                    counterPos--;
                  }
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            if (found) {// console.warn('* return bestMatch', JSON.stringify(bestMatch));
            } else {// console.warn('* return null');
            }

            return found ? bestMatch : null;
          } // TODO: findPattern and decodeCode appear to share quite similar code, can it be reduced?

        }, {
          key: "_decodeCode",
          value: function _decodeCode(start, coderange) {
            // console.warn('* decodeCode', start, coderange);
            var counter = [0, 0, 0, 0];
            var offset = start;
            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: start,
              end: start
            };
            var epsilon = AVG_CODE_ERROR;
            var isWhite = !this._row[offset];
            var counterPos = 0;

            if (!coderange) {
              // console.warn('* decodeCode before length');
              coderange = CODE_PATTERN.length; // console.warn('* decodeCode after length');
            }

            var found = false;

            for (var i = offset; i < this._row.length; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  for (var code = 0; code < coderange; code++) {
                    var error = this._matchPattern(counter, CODE_PATTERN[code]);

                    bestMatch.end = i;

                    if (error < bestMatch.error) {
                      bestMatch.code = code;
                      bestMatch.error = error;
                    }
                  }

                  if (bestMatch.error > epsilon) {
                    // console.warn('* return null');
                    return null;
                  } // console.warn('* return bestMatch', JSON.stringify(bestMatch));


                  return bestMatch;
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return found ? bestMatch : null;
          }
        }, {
          key: "_findStart",
          value: function _findStart() {
            // console.warn('* findStart');
            var offset = this._nextSet(this._row);

            var startInfo = null;

            while (!startInfo) {
              startInfo = this._findPattern(START_PATTERN, offset, false, true); // console.warn('* startInfo=', JSON.stringify(startInfo));

              if (!startInfo) {
                return null;
              }

              var leadingWhitespaceStart = startInfo.start - (startInfo.end - startInfo.start);

              if (leadingWhitespaceStart >= 0) {
                if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                  // console.warn('* returning startInfo');
                  return startInfo;
                }
              }

              offset = startInfo.end;
              startInfo = null;
            } // console.warn('* returning null');


            return null;
          }
        }, {
          key: "_calculateFirstDigit",
          value: function _calculateFirstDigit(codeFrequency) {
            // console.warn('* calculateFirstDigit', codeFrequency);
            for (var i = 0; i < CODE_FREQUENCY.length; i++) {
              if (codeFrequency === CODE_FREQUENCY[i]) {
                // console.warn('* returning', i);
                return i;
              }
            } // console.warn('* return null');


            return null;
          }
        }, {
          key: "_decodePayload",
          value: function _decodePayload(inCode, result, decodedCodes) {
            // console.warn('* decodePayload', inCode, result, decodedCodes);
            var outCode = _objectSpread({}, inCode);

            var codeFrequency = 0x0;

            for (var i = 0; i < 6; i++) {
              outCode = this._decodeCode(outCode.end); // console.warn('* decodeCode=', outCode);

              if (!outCode) {
                // console.warn('* return null');
                return null;
              }

              if (outCode.code >= CODE_G_START) {
                outCode.code -= CODE_G_START;
                codeFrequency |= 1 << 5 - i;
              } else {
                codeFrequency |= 0 << 5 - i;
              }

              result.push(outCode.code);
              decodedCodes.push(outCode);
            }

            var firstDigit = this._calculateFirstDigit(codeFrequency); // console.warn('* firstDigit=', firstDigit);


            if (firstDigit === null) {
              // console.warn('* return null');
              return null;
            }

            result.unshift(firstDigit);

            var middlePattern = this._findPattern(MIDDLE_PATTERN, outCode.end, true, false); // console.warn('* findPattern=', JSON.stringify(middlePattern));


            if (middlePattern === null || !middlePattern.end) {
              // console.warn('* return null');
              return null;
            }

            decodedCodes.push(middlePattern);

            for (var _i = 0; _i < 6; _i++) {
              middlePattern = this._decodeCode(middlePattern.end, CODE_G_START); // console.warn('* decodeCode=', JSON.stringify(middlePattern));

              if (!middlePattern) {
                // console.warn('* return null');
                return null;
              }

              decodedCodes.push(middlePattern);
              result.push(middlePattern.code);
            } // console.warn('* end code=', JSON.stringify(middlePattern));
            // console.warn('* end result=', JSON.stringify(result));
            // console.warn('* end decodedCodes=', decodedCodes);


            return middlePattern;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function _verifyTrailingWhitespace(endInfo) {
            // console.warn('* verifyTrailingWhitespace', JSON.stringify(endInfo));
            var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start);

            if (trailingWhitespaceEnd < this._row.length) {
              if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                // console.warn('* returning', JSON.stringify(endInfo));
                return endInfo;
              }
            } // console.warn('* return null');


            return null;
          }
        }, {
          key: "_findEnd",
          value: function _findEnd(offset, isWhite) {
            // console.warn('* findEnd', offset, isWhite);
            var endInfo = this._findPattern(this.STOP_PATTERN, offset, isWhite, false);

            return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
          }
        }, {
          key: "_checksum",
          value: function _checksum(result) {
            // console.warn('* _checksum', result);
            var sum = 0;

            for (var i = result.length - 2; i >= 0; i -= 2) {
              sum += result[i];
            }

            sum *= 3;

            for (var _i2 = result.length - 1; _i2 >= 0; _i2 -= 2) {
              sum += result[_i2];
            } // console.warn('* end checksum', sum % 10 === 0);


            return sum % 10 === 0;
          }
        }, {
          key: "_decodeExtensions",
          value: function _decodeExtensions(offset) {
            var start = this._nextSet(this._row, offset);

            var startInfo = this._findPattern(EXTENSION_START_PATTERN, start, false, false);

            if (startInfo === null) {
              return null;
            } // console.warn('* decodeExtensions', this.supplements);
            // console.warn('* there are ', this.supplements.length, ' supplements');


            for (var i = 0; i < this.supplements.length; i++) {
              // console.warn('* extensions loop', i, this.supplements[i], this.supplements[i]._decode);
              try {
                var result = this.supplements[i]._decode(this._row, startInfo.end); // console.warn('* decode result=', result);


                if (result !== null) {
                  return {
                    code: result.code,
                    start: start,
                    startInfo: startInfo,
                    end: result.end,
                    decodedCodes: result.decodedCodes,
                    format: this.supplements[i].FORMAT
                  };
                }
              } catch (err) {
                console.error('* decodeExtensions error in ', this.supplements[i], ': ', err);
              }
            } // console.warn('* end decodeExtensions');


            return null;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            // console.warn('* decode', row);
            // console.warn('* decode', start);
            var result = new Array();
            var decodedCodes = new Array();
            var resultInfo = {};

            var startInfo = this._findStart();

            if (!startInfo) {
              return null;
            }

            var code = {
              start: startInfo.start,
              end: startInfo.end
            };
            decodedCodes.push(code);
            code = this._decodePayload(code, result, decodedCodes);

            if (!code) {
              return null;
            }

            code = this._findEnd(code.end, false);

            if (!code) {
              return null;
            }

            decodedCodes.push(code); // Checksum

            if (!this._checksum(result)) {
              return null;
            } // console.warn('* this.supplements=', this.supplements);


            if (this.supplements.length > 0) {
              var supplement = this._decodeExtensions(code.end); // console.warn('* decodeExtensions returns', supplement);


              if (!supplement) {
                return null;
              }

              if (!supplement.decodedCodes) {
                return null;
              }

              var lastCode = supplement.decodedCodes[supplement.decodedCodes.length - 1];
              var endInfo = {
                start: lastCode.start + ((lastCode.end - lastCode.start) / 2 | 0),
                end: lastCode.end
              };

              if (!this._verifyTrailingWhitespace(endInfo)) {
                return null;
              }

              resultInfo = {
                supplement: supplement,
                code: result.join('') + supplement.code
              };
            }

            return _objectSpread(_objectSpread({
              code: result.join(''),
              start: startInfo.start,
              end: code.end,
              startInfo: startInfo,
              decodedCodes: decodedCodes
            }, resultInfo), {}, {
              format: this.FORMAT
            });
          }
        }]);

        return EANReader;
      }(barcode_reader);

/* harmony default export */ var ean_reader = (ean_reader_EANReader);
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
      var toConsumableArray = __webpack_require__(40);
      var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

      // CONCATENATED MODULE: ./src/reader/code_39_reader.ts









      function code_39_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_39_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function code_39_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%';
      var ALPHABET = new Uint16Array(toConsumableArray_default()(ALPHABETH_STRING).map(function (_char) {
        return _char.charCodeAt(0);
      }));
      var CHARACTER_ENCODINGS = new Uint16Array([0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064, 0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C, 0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016, 0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x094, 0x0A8, 0x0A2, 0x08A, 0x02A]);
      var ASTERISK = 0x094;

      var code_39_reader_Code39Reader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(Code39Reader, _BarcodeReader);

        var _super = code_39_reader_createSuper(Code39Reader);

        function Code39Reader() {
          var _this;

          classCallCheck_default()(this, Code39Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_39');

          return _this;
        }

        createClass_default()(Code39Reader, [{
          key: "_findStart",
          value: function _findStart() {
            var offset = this._nextSet(this._row);

            var patternStart = offset;
            var counter = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            var counterPos = 0;
            var isWhite = false;

            for (var i = offset; i < this._row.length; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  // find start pattern
                  if (this._toPattern(counter) === ASTERISK) {
                    var whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));

                    if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                      return {
                        start: patternStart,
                        end: i
                      };
                    }
                  }

                  patternStart += counter[0] + counter[1];

                  for (var j = 0; j < 7; j++) {
                    counter[j] = counter[j + 2];
                  }

                  counter[7] = 0;
                  counter[8] = 0;
                  counterPos--;
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return null;
          }
        }, {
          key: "_toPattern",
          value: function _toPattern(counters) {
            var numCounters = counters.length;
            var maxNarrowWidth = 0;
            var numWideBars = numCounters;
            var wideBarWidth = 0;

            while (numWideBars > 3) {
              maxNarrowWidth = this._findNextWidth(counters, maxNarrowWidth);
              numWideBars = 0;
              var pattern = 0;

              for (var i = 0; i < numCounters; i++) {
                if (counters[i] > maxNarrowWidth) {
                  pattern |= 1 << numCounters - 1 - i;
                  numWideBars++;
                  wideBarWidth += counters[i];
                }
              }

              if (numWideBars === 3) {
                for (var _i = 0; _i < numCounters && numWideBars > 0; _i++) {
                  if (counters[_i] > maxNarrowWidth) {
                    numWideBars--;

                    if (counters[_i] * 2 >= wideBarWidth) {
                      return -1;
                    }
                  }
                }

                return pattern;
              }
            }

            return -1;
          }
        }, {
          key: "_findNextWidth",
          value: function _findNextWidth(counters, current) {
            var minWidth = Number.MAX_VALUE;

            for (var i = 0; i < counters.length; i++) {
              if (counters[i] < minWidth && counters[i] > current) {
                minWidth = counters[i];
              }
            }

            return minWidth;
          }
        }, {
          key: "_patternToChar",
          value: function _patternToChar(pattern) {
            for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
              if (CHARACTER_ENCODINGS[i] === pattern) {
                return String.fromCharCode(ALPHABET[i]);
              }
            }

            return null;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function _verifyTrailingWhitespace(lastStart, nextStart, counters) {
            var patternSize = array_helper["a" /* default */].sum(counters);
            var trailingWhitespaceEnd = nextStart - lastStart - patternSize;

            if (trailingWhitespaceEnd * 3 >= patternSize) {
              return true;
            }

            return false;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            var counters = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            var result = [];
            start = this._findStart();

            if (!start) {
              return null;
            }

            var nextStart = this._nextSet(this._row, start.end);

            var decodedChar;
            var lastStart;

            do {
              counters = this._toCounters(nextStart, counters);

              var pattern = this._toPattern(counters);

              if (pattern < 0) {
                return null;
              }

              decodedChar = this._patternToChar(pattern);

              if (decodedChar === null) {
                return null;
              }

              result.push(decodedChar);
              lastStart = nextStart;
              nextStart += array_helper["a" /* default */].sum(counters);
              nextStart = this._nextSet(this._row, nextStart);
            } while (decodedChar !== '*');

            result.pop();

            if (!result.length) {
              return null;
            }

            if (!this._verifyTrailingWhitespace(lastStart, nextStart, counters)) {
              return null;
            }

            return {
              code: result.join(''),
              start: start.start,
              end: nextStart,
              startInfo: start,
              decodedCodes: result,
              format: this.FORMAT
            };
          }
        }]);

        return Code39Reader;
      }(barcode_reader);

/* harmony default export */ var code_39_reader = (code_39_reader_Code39Reader);
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
      var get = __webpack_require__(18);
      var get_default = /*#__PURE__*/__webpack_require__.n(get);

      // CONCATENATED MODULE: ./src/reader/code_39_vin_reader.ts









      function code_39_vin_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_39_vin_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function code_39_vin_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }


      var patterns = {
        IOQ: /[IOQ]/g,
        AZ09: /[A-Z0-9]{17}/
      };

      var code_39_vin_reader_Code39VINReader = /*#__PURE__*/function (_Code39Reader) {
        inherits_default()(Code39VINReader, _Code39Reader);

        var _super = code_39_vin_reader_createSuper(Code39VINReader);

        function Code39VINReader() {
          var _this;

          classCallCheck_default()(this, Code39VINReader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_39_vin');

          return _this;
        }

        createClass_default()(Code39VINReader, [{
          key: "_checkChecksum",
          // TODO (this was todo in original repo, no text was there. sorry.)
          value: function _checkChecksum(code) {
            return !!code;
          } // Cribbed from:
          // https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/VINResultParser.java

        }, {
          key: "_decode",
          value: function _decode(row, start) {
            var result = get_default()(getPrototypeOf_default()(Code39VINReader.prototype), "_decode", this).call(this, row, start);

            if (!result) {
              return null;
            }

            var code = result.code;

            if (!code) {
              return null;
            }

            code = code.replace(patterns.IOQ, '');

            if (!code.match(patterns.AZ09)) {
              if (true) {
                console.log('Failed AZ09 pattern code:', code);
              }

              return null;
            }

            if (!this._checkChecksum(code)) {
              return null;
            }

            result.code = code;
            return result;
          }
        }]);

        return Code39VINReader;
      }(code_39_reader);

/* harmony default export */ var code_39_vin_reader = (code_39_vin_reader_Code39VINReader);
      // CONCATENATED MODULE: ./src/reader/codabar_reader.ts








      function codabar_reader_createSuper(Derived) { var hasNativeReflectConstruct = codabar_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function codabar_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

      // const ALPHABETH_STRING = '0123456789-$:/.+ABCD';

      var codabar_reader_ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68];
      var codabar_reader_CHARACTER_ENCODINGS = [0x003, 0x006, 0x009, 0x060, 0x012, 0x042, 0x021, 0x024, 0x030, 0x048, 0x00c, 0x018, 0x045, 0x051, 0x054, 0x015, 0x01A, 0x029, 0x00B, 0x00E];
      var START_END = [0x01A, 0x029, 0x00B, 0x00E];
      var MIN_ENCODED_CHARS = 4;
      var MAX_ACCEPTABLE = 2.0;
      var PADDING = 1.5;
      ;
      ;

      var codabar_reader_NewCodabarReader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(NewCodabarReader, _BarcodeReader);

        var _super = codabar_reader_createSuper(NewCodabarReader);

        function NewCodabarReader() {
          var _this;

          classCallCheck_default()(this, NewCodabarReader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "_counters", []);

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'codabar');

          return _this;
        }

        createClass_default()(NewCodabarReader, [{
          key: "_computeAlternatingThreshold",
          value: function _computeAlternatingThreshold(offset, end) {
            var min = Number.MAX_VALUE;
            var max = 0;
            var counter = 0;

            for (var i = offset; i < end; i += 2) {
              counter = this._counters[i];

              if (counter > max) {
                max = counter;
              }

              if (counter < min) {
                min = counter;
              }
            }

            return (min + max) / 2.0 | 0;
          }
        }, {
          key: "_toPattern",
          value: function _toPattern(offset) {
            var numCounters = 7;
            var end = offset + numCounters;

            if (end > this._counters.length) {
              return -1;
            }

            var barThreshold = this._computeAlternatingThreshold(offset, end);

            var spaceThreshold = this._computeAlternatingThreshold(offset + 1, end);

            var bitmask = 1 << numCounters - 1;
            var threshold = 0;
            var pattern = 0;

            for (var i = 0; i < numCounters; i++) {
              threshold = (i & 1) === 0 ? barThreshold : spaceThreshold;

              if (this._counters[offset + i] > threshold) {
                pattern |= bitmask;
              }

              bitmask >>= 1;
            }

            return pattern;
          }
        }, {
          key: "_isStartEnd",
          value: function _isStartEnd(pattern) {
            for (var i = 0; i < START_END.length; i++) {
              if (START_END[i] === pattern) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_sumCounters",
          value: function _sumCounters(start, end) {
            var sum = 0;

            for (var i = start; i < end; i++) {
              sum += this._counters[i];
            }

            return sum;
          }
        }, {
          key: "_findStart",
          value: function _findStart() {
            var start = this._nextUnset(this._row);

            var end = start;

            for (var i = 1; i < this._counters.length; i++) {
              var pattern = this._toPattern(i);

              if (pattern !== -1 && this._isStartEnd(pattern)) {
                // TODO: Look for whitespace ahead
                start += this._sumCounters(0, i);
                end = start + this._sumCounters(i, i + 8);
                return {
                  start: start,
                  end: end,
                  startCounter: i,
                  endCounter: i + 8
                };
              }
            }

            return null;
          }
        }, {
          key: "_patternToChar",
          value: function _patternToChar(pattern) {
            for (var i = 0; i < codabar_reader_CHARACTER_ENCODINGS.length; i++) {
              if (codabar_reader_CHARACTER_ENCODINGS[i] === pattern) {
                return String.fromCharCode(codabar_reader_ALPHABET[i]);
              }
            }

            return null;
          }
        }, {
          key: "_calculatePatternLength",
          value: function _calculatePatternLength(offset) {
            var sum = 0;

            for (var i = offset; i < offset + 7; i++) {
              sum += this._counters[i];
            }

            return sum;
          }
        }, {
          key: "_verifyWhitespace",
          value: function _verifyWhitespace(startCounter, endCounter) {
            if (startCounter - 1 <= 0 || this._counters[startCounter - 1] >= this._calculatePatternLength(startCounter) / 2.0) {
              if (endCounter + 8 >= this._counters.length || this._counters[endCounter + 7] >= this._calculatePatternLength(endCounter) / 2.0) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_charToPattern",
          value: function _charToPattern(_char) {
            var charCode = _char.charCodeAt(0);

            for (var i = 0; i < codabar_reader_ALPHABET.length; i++) {
              if (codabar_reader_ALPHABET[i] === charCode) {
                return codabar_reader_CHARACTER_ENCODINGS[i];
              }
            }

            return 0x0;
          }
        }, {
          key: "_thresholdResultPattern",
          value: function _thresholdResultPattern(result, startCounter) {
            var categorization = {
              space: {
                narrow: {
                  size: 0,
                  counts: 0,
                  min: 0,
                  max: Number.MAX_VALUE
                },
                wide: {
                  size: 0,
                  counts: 0,
                  min: 0,
                  max: Number.MAX_VALUE
                }
              },
              bar: {
                narrow: {
                  size: 0,
                  counts: 0,
                  min: 0,
                  max: Number.MAX_VALUE
                },
                wide: {
                  size: 0,
                  counts: 0,
                  min: 0,
                  max: Number.MAX_VALUE
                }
              }
            };
            var pos = startCounter;
            var pattern;

            for (var i = 0; i < result.length; i++) {
              pattern = this._charToPattern(result[i]);

              for (var j = 6; j >= 0; j--) {
                var kind = (j & 1) === 2 ? categorization.bar : categorization.space;
                var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
                cat.size += this._counters[pos + j];
                cat.counts++;
                pattern >>= 1;
              }

              pos += 8;
            }

            ['space', 'bar'].forEach(function (key) {
              var newkind = categorization[key];
              newkind.wide.min = Math.floor((newkind.narrow.size / newkind.narrow.counts + newkind.wide.size / newkind.wide.counts) / 2);
              newkind.narrow.max = Math.ceil(newkind.wide.min);
              newkind.wide.max = Math.ceil((newkind.wide.size * MAX_ACCEPTABLE + PADDING) / newkind.wide.counts);
            });
            return categorization;
          }
        }, {
          key: "_validateResult",
          value: function _validateResult(result, startCounter) {
            var thresholds = this._thresholdResultPattern(result, startCounter);

            var pos = startCounter;
            var pattern;

            for (var i = 0; i < result.length; i++) {
              pattern = this._charToPattern(result[i]);

              for (var j = 6; j >= 0; j--) {
                var kind = (j & 1) === 0 ? thresholds.bar : thresholds.space;
                var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
                var size = this._counters[pos + j];

                if (size < cat.min || size > cat.max) {
                  return false;
                }

                pattern >>= 1;
              }

              pos += 8;
            }

            return true;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            this._counters = this._fillCounters();
            start = this._findStart();

            if (!start) {
              return null;
            }

            var nextStart = start.startCounter;
            var result = [];
            var pattern;

            do {
              pattern = this._toPattern(nextStart);

              if (pattern < 0) {
                return null;
              }

              var decodedChar = this._patternToChar(pattern);

              if (decodedChar === null) {
                return null;
              }

              result.push(decodedChar);
              nextStart += 8;

              if (result.length > 1 && this._isStartEnd(pattern)) {
                break;
              }
            } while (nextStart < this._counters.length); // verify end


            if (result.length - 2 < MIN_ENCODED_CHARS || !this._isStartEnd(pattern)) {
              return null;
            } // verify end white space


            if (!this._verifyWhitespace(start.startCounter, nextStart - 8)) {
              return null;
            }

            if (!this._validateResult(result, start.startCounter)) {
              return null;
            }

            nextStart = nextStart > this._counters.length ? this._counters.length : nextStart;

            var end = start.start + this._sumCounters(start.startCounter, nextStart - 8);

            return {
              code: result.join(''),
              start: start.start,
              end: end,
              startInfo: start,
              decodedCodes: result,
              format: this.FORMAT // TODO: i think it should not be required to return format from this, as barcode_reader force sets the format anyway

            };
          }
        }]);

        return NewCodabarReader;
      }(barcode_reader);

/* harmony default export */ var codabar_reader = (codabar_reader_NewCodabarReader);
      // CONCATENATED MODULE: ./src/reader/upc_reader.ts








      function upc_reader_createSuper(Derived) { var hasNativeReflectConstruct = upc_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function upc_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var upc_reader_UPCReader = /*#__PURE__*/function (_EANReader) {
        inherits_default()(UPCReader, _EANReader);

        var _super = upc_reader_createSuper(UPCReader);

        function UPCReader() {
          var _this;

          classCallCheck_default()(this, UPCReader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'upc_a');

          return _this;
        }

        createClass_default()(UPCReader, [{
          key: "_decode",
          value: function _decode(row, start) {
            var result = ean_reader.prototype._decode.call(this);

            if (result && result.code && result.code.length === 13 && result.code.charAt(0) === '0') {
              result.code = result.code.substring(1);
              return result;
            }

            return null;
          }
        }]);

        return UPCReader;
      }(ean_reader);

/* harmony default export */ var upc_reader = (upc_reader_UPCReader);
      // CONCATENATED MODULE: ./src/reader/ean_8_reader.ts








      function ean_8_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_8_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function ean_8_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var ean_8_reader_EAN8Reader = /*#__PURE__*/function (_EANReader) {
        inherits_default()(EAN8Reader, _EANReader);

        var _super = ean_8_reader_createSuper(EAN8Reader);

        function EAN8Reader() {
          var _this;

          classCallCheck_default()(this, EAN8Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_8');

          return _this;
        }

        createClass_default()(EAN8Reader, [{
          key: "_decodePayload",
          value: function _decodePayload(inCode, result, decodedCodes) {
            var code = inCode;

            for (var i = 0; i < 4; i++) {
              code = this._decodeCode(code.end, CODE_G_START);

              if (!code) {
                return null;
              }

              result.push(code.code);
              decodedCodes.push(code);
            }

            code = this._findPattern(MIDDLE_PATTERN, code.end, true, false);

            if (code === null) {
              return null;
            }

            decodedCodes.push(code);

            for (var _i = 0; _i < 4; _i++) {
              code = this._decodeCode(code.end, CODE_G_START);

              if (!code) {
                return null;
              }

              decodedCodes.push(code);
              result.push(code.code);
            }

            return code;
          }
        }]);

        return EAN8Reader;
      }(ean_reader);

/* harmony default export */ var ean_8_reader = (ean_8_reader_EAN8Reader);
      // CONCATENATED MODULE: ./src/reader/ean_2_reader.ts








      function ean_2_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_2_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function ean_2_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var ean_2_reader_EAN2Reader = /*#__PURE__*/function (_EANReader) {
        inherits_default()(EAN2Reader, _EANReader);

        var _super = ean_2_reader_createSuper(EAN2Reader);

        function EAN2Reader() {
          var _this;

          classCallCheck_default()(this, EAN2Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_2');

          return _this;
        }

        createClass_default()(EAN2Reader, [{
          key: "_decode",
          value: function _decode(row, start) {
            if (row) {
              this._row = row;
            }

            var codeFrequency = 0;
            var offset = start;
            var end = this._row.length;
            var result = [];
            var decodedCodes = [];
            var code = null;

            if (offset === undefined) {
              return null;
            }

            for (var i = 0; i < 2 && offset < end; i++) {
              code = this._decodeCode(offset);

              if (!code) {
                return null;
              }

              decodedCodes.push(code);
              result.push(code.code % 10);

              if (code.code >= CODE_G_START) {
                codeFrequency |= 1 << 1 - i;
              }

              if (i !== 1) {
                offset = this._nextSet(this._row, code.end);
                offset = this._nextUnset(this._row, offset);
              }
            }

            if (result.length !== 2 || parseInt(result.join('')) % 4 !== codeFrequency) {
              return null;
            }

            var startInfo = this._findStart();

            return {
              code: result.join(''),
              decodedCodes: decodedCodes,
              end: code.end,
              format: this.FORMAT,
              startInfo: startInfo,
              start: startInfo.start
            };
          }
        }]);

        return EAN2Reader;
      }(ean_reader);

      ;
/* harmony default export */ var ean_2_reader = (ean_2_reader_EAN2Reader);
      // CONCATENATED MODULE: ./src/reader/ean_5_reader.ts








      function ean_5_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function ean_5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }


      var CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];

      function determineCheckDigit(codeFrequency) {
        for (var i = 0; i < 10; i++) {
          if (codeFrequency === CHECK_DIGIT_ENCODINGS[i]) {
            return i;
          }
        }

        return null;
      }

      function extensionChecksum(result) {
        var length = result.length;
        var sum = 0;

        for (var i = length - 2; i >= 0; i -= 2) {
          sum += result[i];
        }

        sum *= 3;

        for (var _i = length - 1; _i >= 0; _i -= 2) {
          sum += result[_i];
        }

        sum *= 3;
        return sum % 10;
      }

      var ean_5_reader_EAN5Reader = /*#__PURE__*/function (_EANReader) {
        inherits_default()(EAN5Reader, _EANReader);

        var _super = ean_5_reader_createSuper(EAN5Reader);

        function EAN5Reader() {
          var _this;

          classCallCheck_default()(this, EAN5Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_5');

          return _this;
        }

        createClass_default()(EAN5Reader, [{
          key: "_decode",
          value: function _decode(row, start) {
            if (start === undefined) {
              return null;
            }

            if (row) {
              this._row = row;
            }

            var codeFrequency = 0;
            var offset = start;
            var end = this._row.length;
            var code = null;
            var result = [];
            var decodedCodes = [];

            for (var i = 0; i < 5 && offset < end; i++) {
              code = this._decodeCode(offset);

              if (!code) {
                return null;
              }

              decodedCodes.push(code);
              result.push(code.code % 10);

              if (code.code >= CODE_G_START) {
                codeFrequency |= 1 << 4 - i;
              }

              if (i !== 4) {
                offset = this._nextSet(this._row, code.end);
                offset = this._nextUnset(this._row, offset);
              }
            }

            if (result.length !== 5) {
              return null;
            }

            if (extensionChecksum(result) !== determineCheckDigit(codeFrequency)) {
              return null;
            }

            var startInfo = this._findStart();

            return {
              code: result.join(''),
              decodedCodes: decodedCodes,
              end: code.end,
              format: this.FORMAT,
              startInfo: startInfo,
              start: startInfo.start
            };
          }
        }]);

        return EAN5Reader;
      }(ean_reader);

      ;
/* harmony default export */ var ean_5_reader = (ean_5_reader_EAN5Reader);
      // CONCATENATED MODULE: ./src/reader/upc_e_reader.ts









      function upc_e_reader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function upc_e_reader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { upc_e_reader_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { upc_e_reader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function upc_e_reader_createSuper(Derived) { var hasNativeReflectConstruct = upc_e_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function upc_e_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var upc_e_reader_UPCEReader = /*#__PURE__*/function (_EANReader) {
        inherits_default()(UPCEReader, _EANReader);

        var _super = upc_e_reader_createSuper(UPCEReader);

        function UPCEReader() {
          var _this;

          classCallCheck_default()(this, UPCEReader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_FREQUENCY", [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]);

          defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]);

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'upc_e');

          return _this;
        }

        createClass_default()(UPCEReader, [{
          key: "_decodePayload",
          value: function _decodePayload(inCode, result, decodedCodes) {
            var outCode = upc_e_reader_objectSpread({}, inCode);

            var codeFrequency = 0x0;

            for (var i = 0; i < 6; i++) {
              outCode = this._decodeCode(outCode.end);

              if (!outCode) {
                return null;
              }

              if (outCode.code >= CODE_G_START) {
                outCode.code = outCode.code - CODE_G_START;
                codeFrequency |= 1 << 5 - i;
              }

              result.push(outCode.code);
              decodedCodes.push(outCode);
            }

            if (!this._determineParity(codeFrequency, result)) {
              return null;
            }

            return outCode;
          }
        }, {
          key: "_determineParity",
          value: function _determineParity(codeFrequency, result) {
            for (var nrSystem = 0; nrSystem < this.CODE_FREQUENCY.length; nrSystem++) {
              for (var i = 0; i < this.CODE_FREQUENCY[nrSystem].length; i++) {
                if (codeFrequency === this.CODE_FREQUENCY[nrSystem][i]) {
                  result.unshift(nrSystem);
                  result.push(i);
                  return true;
                }
              }
            }

            return false;
          }
        }, {
          key: "_convertToUPCA",
          value: function _convertToUPCA(result) {
            var upca = [result[0]];
            var lastDigit = result[result.length - 2];

            if (lastDigit <= 2) {
              upca = upca.concat(result.slice(1, 3)).concat([lastDigit, 0, 0, 0, 0]).concat(result.slice(3, 6));
            } else if (lastDigit === 3) {
              upca = upca.concat(result.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(result.slice(4, 6));
            } else if (lastDigit === 4) {
              upca = upca.concat(result.slice(1, 5)).concat([0, 0, 0, 0, 0, result[5]]);
            } else {
              upca = upca.concat(result.slice(1, 6)).concat([0, 0, 0, 0, lastDigit]);
            }

            upca.push(result[result.length - 1]);
            return upca;
          }
        }, {
          key: "_checksum",
          value: function _checksum(result) {
            return get_default()(getPrototypeOf_default()(UPCEReader.prototype), "_checksum", this).call(this, this._convertToUPCA(result));
          }
        }, {
          key: "_findEnd",
          value: function _findEnd(offset, isWhite) {
            return get_default()(getPrototypeOf_default()(UPCEReader.prototype), "_findEnd", this).call(this, offset, true);
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function _verifyTrailingWhitespace(endInfo) {
            var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

            if (trailingWhitespaceEnd < this._row.length) {
              if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
              }
            }

            return null;
          }
        }]);

        return UPCEReader;
      }(ean_reader);

/* harmony default export */ var upc_e_reader = (upc_e_reader_UPCEReader);
      // CONCATENATED MODULE: ./src/reader/i2of5_reader.ts








      function i2of5_reader_createSuper(Derived) { var hasNativeReflectConstruct = i2of5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function i2of5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

      // TODO: i2of5_reader and 2of5_reader share very similar code, make use of that


      var N = 1;
      var W = 3;

      var i2of5_reader_I2of5Reader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(I2of5Reader, _BarcodeReader);

        var _super = i2of5_reader_createSuper(I2of5Reader);

        function I2of5Reader(opts) {
          var _this;

          classCallCheck_default()(this, I2of5Reader);

          _this = _super.call(this, merge_default()({
            normalizeBarSpaceWidth: false
          }, opts));

          defineProperty_default()(assertThisInitialized_default()(_this), "barSpaceRatio", [1, 1]);

          defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.78);

          defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.38);

          defineProperty_default()(assertThisInitialized_default()(_this), "START_PATTERN", [N, N, N, N]);

          defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [N, N, W]);

          defineProperty_default()(assertThisInitialized_default()(_this), "CODE_PATTERN", [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]]);

          defineProperty_default()(assertThisInitialized_default()(_this), "MAX_CORRECTION_FACTOR", 5);

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'i2of5');

          if (opts.normalizeBarSpaceWidth) {
            _this.SINGLE_CODE_ERROR = 0.38;
            _this.AVG_CODE_ERROR = 0.09;
          }

          _this.config = opts;
          return possibleConstructorReturn_default()(_this, assertThisInitialized_default()(_this));
        }

        createClass_default()(I2of5Reader, [{
          key: "_matchPattern",
          value: function _matchPattern(counter, code) {
            if (this.config.normalizeBarSpaceWidth) {
              var counterSum = [0, 0];
              var codeSum = [0, 0];
              var correction = [0, 0];
              var correctionRatio = this.MAX_CORRECTION_FACTOR;
              var correctionRatioInverse = 1 / correctionRatio;

              for (var i = 0; i < counter.length; i++) {
                counterSum[i % 2] += counter[i];
                codeSum[i % 2] += code[i];
              }

              correction[0] = codeSum[0] / counterSum[0];
              correction[1] = codeSum[1] / counterSum[1];
              correction[0] = Math.max(Math.min(correction[0], correctionRatio), correctionRatioInverse);
              correction[1] = Math.max(Math.min(correction[1], correctionRatio), correctionRatioInverse);
              this.barSpaceRatio = correction;

              for (var _i = 0; _i < counter.length; _i++) {
                counter[_i] *= this.barSpaceRatio[_i % 2];
              }
            }

            return barcode_reader.prototype._matchPattern.call(this, counter, code);
          }
        }, {
          key: "_findPattern",
          value: function _findPattern(pattern, offset) {
            var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var tryHarder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var counter = new Array(pattern.length).fill(0);
            var counterPos = 0;
            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: 0,
              end: 0
            };
            var epsilon = this.AVG_CODE_ERROR;
            isWhite = isWhite || false;
            tryHarder = tryHarder || false;

            if (!offset) {
              offset = this._nextSet(this._row);
            }

            for (var i = offset; i < this._row.length; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  var sum = counter.reduce(function (prev, next) {
                    return prev + next;
                  }, 0);

                  var error = this._matchPattern(counter, pattern);

                  if (error < epsilon) {
                    bestMatch.error = error;
                    bestMatch.start = i - sum;
                    bestMatch.end = i;
                    return bestMatch;
                  }

                  if (tryHarder) {
                    for (var j = 0; j < counter.length - 2; j++) {
                      counter[j] = counter[j + 2];
                    }

                    counter[counter.length - 2] = 0;
                    counter[counter.length - 1] = 0;
                    counterPos--;
                  } else {
                    return null;
                  }
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return null;
          }
        }, {
          key: "_findStart",
          value: function _findStart() {
            var leadingWhitespaceStart = 0;

            var offset = this._nextSet(this._row);

            var startInfo = null;
            var narrowBarWidth = 1;

            while (!startInfo) {
              startInfo = this._findPattern(this.START_PATTERN, offset, false, true);

              if (!startInfo) {
                return null;
              }

              narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / 4);
              leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;

              if (leadingWhitespaceStart >= 0) {
                if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                  return startInfo;
                }
              }

              offset = startInfo.end;
              startInfo = null;
            }

            return null;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function _verifyTrailingWhitespace(endInfo) {
            var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

            if (trailingWhitespaceEnd < this._row.length) {
              if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
              }
            }

            return null;
          }
        }, {
          key: "_findEnd",
          value: function _findEnd() {
            this._row.reverse();

            var endInfo = this._findPattern(this.STOP_PATTERN);

            this._row.reverse();

            if (endInfo === null) {
              return null;
            } // reverse numbers


            var tmp = endInfo.start;
            endInfo.start = this._row.length - endInfo.end;
            endInfo.end = this._row.length - tmp;
            return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
          }
        }, {
          key: "_decodePair",
          value: function _decodePair(counterPair) {
            var codes = [];

            for (var i = 0; i < counterPair.length; i++) {
              var code = this._decodeCode(counterPair[i]);

              if (!code) {
                return null;
              }

              codes.push(code);
            }

            return codes;
          }
        }, {
          key: "_decodeCode",
          value: function _decodeCode(counter) {
            var epsilon = this.AVG_CODE_ERROR;
            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: 0,
              end: 0
            };

            for (var code = 0; code < this.CODE_PATTERN.length; code++) {
              var error = this._matchPattern(counter, this.CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            if (bestMatch.error < epsilon) {
              return bestMatch;
            }

            return null;
          }
        }, {
          key: "_decodePayload",
          value: function _decodePayload(counters, result, decodedCodes) {
            var pos = 0;
            var counterLength = counters.length;
            var counterPair = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
            var codes = null;

            while (pos < counterLength) {
              for (var i = 0; i < 5; i++) {
                counterPair[0][i] = counters[pos] * this.barSpaceRatio[0];
                counterPair[1][i] = counters[pos + 1] * this.barSpaceRatio[1];
                pos += 2;
              }

              codes = this._decodePair(counterPair);

              if (!codes) {
                return null;
              }

              for (var _i2 = 0; _i2 < codes.length; _i2++) {
                result.push(codes[_i2].code + '');
                decodedCodes.push(codes[_i2]);
              }
            }

            return codes;
          }
        }, {
          key: "_verifyCounterLength",
          value: function _verifyCounterLength(counters) {
            return counters.length % 10 === 0;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            var result = new Array();
            var decodedCodes = new Array();

            var startInfo = this._findStart();

            if (!startInfo) {
              return null;
            }

            decodedCodes.push(startInfo);

            var endInfo = this._findEnd();

            if (!endInfo) {
              return null;
            }

            var counters = this._fillCounters(startInfo.end, endInfo.start, false);

            if (!this._verifyCounterLength(counters)) {
              return null;
            }

            var code = this._decodePayload(counters, result, decodedCodes);

            if (!code) {
              return null;
            }

            if (result.length % 2 !== 0 || result.length < 6) {
              return null;
            }

            decodedCodes.push(endInfo);
            return {
              code: result.join(''),
              start: startInfo.start,
              end: endInfo.end,
              startInfo: startInfo,
              decodedCodes: decodedCodes,
              format: this.FORMAT
            };
          }
        }]);

        return I2of5Reader;
      }(barcode_reader);

/* harmony default export */ var i2of5_reader = (i2of5_reader_I2of5Reader);
      // CONCATENATED MODULE: ./src/reader/2of5_reader.ts








      function _2of5_reader_createSuper(Derived) { var hasNativeReflectConstruct = _2of5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function _2of5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }


      var _2of5_reader_N = 1;
      var _2of5_reader_W = 3;
      var _2of5_reader_START_PATTERN = [_2of5_reader_W, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N];
      var STOP_PATTERN = [_2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W];
      var _2of5_reader_CODE_PATTERN = [[_2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_W, _2of5_reader_N], [_2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W], [_2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W], [_2of5_reader_W, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_W], [_2of5_reader_W, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_W, _2of5_reader_W, _2of5_reader_N, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_W], [_2of5_reader_W, _2of5_reader_N, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N], [_2of5_reader_N, _2of5_reader_W, _2of5_reader_N, _2of5_reader_W, _2of5_reader_N]];
      var START_PATTERN_LENGTH = _2of5_reader_START_PATTERN.reduce(function (sum, val) {
        return sum + val;
      }, 0);

      var _2of5_reader_TwoOfFiveReader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(TwoOfFiveReader, _BarcodeReader);

        var _super = _2of5_reader_createSuper(TwoOfFiveReader);

        function TwoOfFiveReader() {
          var _this;

          classCallCheck_default()(this, TwoOfFiveReader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "barSpaceRatio", [1, 1]);

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", '2of5');

          defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.78);

          defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.30);

          return _this;
        }

        createClass_default()(TwoOfFiveReader, [{
          key: "_findPattern",
          value: function _findPattern(pattern, offset) {
            var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var tryHarder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var counter = [];
            var counterPos = 0;
            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: 0,
              end: 0
            };
            var sum = 0;
            var error = 0;
            var epsilon = this.AVG_CODE_ERROR;

            if (!offset) {
              offset = this._nextSet(this._row);
            }

            for (var i = 0; i < pattern.length; i++) {
              counter[i] = 0;
            }

            for (var _i = offset; _i < this._row.length; _i++) {
              if (this._row[_i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  sum = 0;

                  for (var j = 0; j < counter.length; j++) {
                    sum += counter[j];
                  }

                  error = this._matchPattern(counter, pattern);

                  if (error < epsilon) {
                    bestMatch.error = error;
                    bestMatch.start = _i - sum;
                    bestMatch.end = _i;
                    return bestMatch;
                  }

                  if (tryHarder) {
                    for (var _j = 0; _j < counter.length - 2; _j++) {
                      counter[_j] = counter[_j + 2];
                    }

                    counter[counter.length - 2] = 0;
                    counter[counter.length - 1] = 0;
                    counterPos--;
                  } else {
                    return null;
                  }
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return null;
          }
        }, {
          key: "_findStart",
          value: function _findStart() {
            var startInfo = null;

            var offset = this._nextSet(this._row);

            var narrowBarWidth = 1;
            var leadingWhitespaceStart = 0;

            while (!startInfo) {
              startInfo = this._findPattern(_2of5_reader_START_PATTERN, offset, false, true);

              if (!startInfo) {
                return null;
              }

              narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / START_PATTERN_LENGTH);
              leadingWhitespaceStart = startInfo.start - narrowBarWidth * 5;

              if (leadingWhitespaceStart >= 0) {
                if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                  return startInfo;
                }
              }

              offset = startInfo.end;
              startInfo = null;
            }

            return startInfo;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function _verifyTrailingWhitespace(endInfo) {
            var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

            if (trailingWhitespaceEnd < this._row.length) {
              if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
              }
            }

            return null;
          }
        }, {
          key: "_findEnd",
          value: function _findEnd() {
            // TODO: reverse, followed by some calcs, followed by another reverse? really?
            this._row.reverse();

            var offset = this._nextSet(this._row);

            var endInfo = this._findPattern(STOP_PATTERN, offset, false, true);

            this._row.reverse();

            if (endInfo === null) {
              return null;
            } // reverse numbers


            var tmp = endInfo.start;
            endInfo.start = this._row.length - endInfo.end;
            endInfo.end = this._row.length - tmp;
            return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
          }
        }, {
          key: "_verifyCounterLength",
          value: function _verifyCounterLength(counters) {
            return counters.length % 10 === 0;
          }
        }, {
          key: "_decodeCode",
          value: function _decodeCode(counter) {
            var epsilon = this.AVG_CODE_ERROR;
            var bestMatch = {
              error: Number.MAX_VALUE,
              code: -1,
              start: 0,
              end: 0
            };

            for (var code = 0; code < _2of5_reader_CODE_PATTERN.length; code++) {
              var error = this._matchPattern(counter, _2of5_reader_CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            if (bestMatch.error < epsilon) {
              return bestMatch;
            }

            return null;
          }
        }, {
          key: "_decodePayload",
          value: function _decodePayload(counters, result, decodedCodes) {
            var pos = 0;
            var counterLength = counters.length;
            var counter = [0, 0, 0, 0, 0];
            var code = null;

            while (pos < counterLength) {
              for (var i = 0; i < 5; i++) {
                counter[i] = counters[pos] * this.barSpaceRatio[0];
                pos += 2;
              }

              code = this._decodeCode(counter);

              if (!code) {
                return null;
              }

              result.push("".concat(code.code));
              decodedCodes.push(code);
            }

            return code;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            var startInfo = this._findStart();

            if (!startInfo) {
              return null;
            }

            var endInfo = this._findEnd();

            if (!endInfo) {
              return null;
            }

            var counters = this._fillCounters(startInfo.end, endInfo.start, false);

            if (!this._verifyCounterLength(counters)) {
              return null;
            }

            var decodedCodes = [];
            decodedCodes.push(startInfo);
            var result = [];

            var code = this._decodePayload(counters, result, decodedCodes);

            if (!code) {
              return null;
            }

            if (result.length < 5) {
              return null;
            }

            decodedCodes.push(endInfo);
            return {
              code: result.join(''),
              start: startInfo.start,
              end: endInfo.end,
              startInfo: startInfo,
              decodedCodes: decodedCodes,
              format: this.FORMAT
            };
          }
        }]);

        return TwoOfFiveReader;
      }(barcode_reader);

/* harmony default export */ var _2of5_reader = (_2of5_reader_TwoOfFiveReader);
      // CONCATENATED MODULE: ./src/reader/code_93_reader.ts









      function code_93_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_93_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function code_93_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }



      var code_93_reader_ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*';
      var code_93_reader_ALPHABET = new Uint16Array(toConsumableArray_default()(code_93_reader_ALPHABETH_STRING).map(function (_char) {
        return _char.charCodeAt(0);
      }));
      var code_93_reader_CHARACTER_ENCODINGS = new Uint16Array([0x114, 0x148, 0x144, 0x142, 0x128, 0x124, 0x122, 0x150, 0x112, 0x10A, 0x1A8, 0x1A4, 0x1A2, 0x194, 0x192, 0x18A, 0x168, 0x164, 0x162, 0x134, 0x11A, 0x158, 0x14C, 0x146, 0x12C, 0x116, 0x1B4, 0x1B2, 0x1AC, 0x1A6, 0x196, 0x19A, 0x16C, 0x166, 0x136, 0x13A, 0x12E, 0x1D4, 0x1D2, 0x1CA, 0x16E, 0x176, 0x1AE, 0x126, 0x1DA, 0x1D6, 0x132, 0x15E]);
      var code_93_reader_ASTERISK = 0x15E;

      var code_93_reader_Code93Reader = /*#__PURE__*/function (_BarcodeReader) {
        inherits_default()(Code93Reader, _BarcodeReader);

        var _super = code_93_reader_createSuper(Code93Reader);

        function Code93Reader() {
          var _this;

          classCallCheck_default()(this, Code93Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_93');

          return _this;
        }

        createClass_default()(Code93Reader, [{
          key: "_patternToChar",
          value: function _patternToChar(pattern) {
            for (var i = 0; i < code_93_reader_CHARACTER_ENCODINGS.length; i++) {
              if (code_93_reader_CHARACTER_ENCODINGS[i] === pattern) {
                return String.fromCharCode(code_93_reader_ALPHABET[i]);
              }
            }

            return null;
          }
        }, {
          key: "_toPattern",
          value: function _toPattern(counters) {
            var numCounters = counters.length;
            var sum = counters.reduce(function (prev, next) {
              return prev + next;
            }, 0);
            var pattern = 0;

            for (var i = 0; i < numCounters; i++) {
              var normalized = Math.round(counters[i] * 9 / sum);

              if (normalized < 1 || normalized > 4) {
                return -1;
              }

              if ((i & 1) === 0) {
                for (var j = 0; j < normalized; j++) {
                  pattern = pattern << 1 | 1;
                }
              } else {
                pattern <<= normalized;
              }
            }

            return pattern;
          }
        }, {
          key: "_findStart",
          value: function _findStart() {
            var offset = this._nextSet(this._row);

            var patternStart = offset;
            var counter = new Uint16Array([0, 0, 0, 0, 0, 0]);
            var counterPos = 0;
            var isWhite = false;

            for (var i = offset; i < this._row.length; i++) {
              if (this._row[i] ^ (isWhite ? 1 : 0)) {
                counter[counterPos]++;
              } else {
                if (counterPos === counter.length - 1) {
                  // find start pattern
                  if (this._toPattern(counter) === code_93_reader_ASTERISK) {
                    var whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));

                    if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                      return {
                        start: patternStart,
                        end: i
                      };
                    }
                  }

                  patternStart += counter[0] + counter[1];

                  for (var j = 0; j < 4; j++) {
                    counter[j] = counter[j + 2];
                  }

                  counter[4] = 0;
                  counter[5] = 0;
                  counterPos--;
                } else {
                  counterPos++;
                }

                counter[counterPos] = 1;
                isWhite = !isWhite;
              }
            }

            return null;
          }
        }, {
          key: "_verifyEnd",
          value: function _verifyEnd(lastStart, nextStart) {
            if (lastStart === nextStart || !this._row[nextStart]) {
              return false;
            }

            return true;
          }
        }, {
          key: "_decodeExtended",
          value: function _decodeExtended(charArray) {
            var length = charArray.length;
            var result = [];

            for (var i = 0; i < length; i++) {
              var _char2 = charArray[i];

              if (_char2 >= 'a' && _char2 <= 'd') {
                if (i > length - 2) {
                  return null;
                }

                var nextChar = charArray[++i];
                var nextCharCode = nextChar.charCodeAt(0);
                var decodedChar = void 0;

                switch (_char2) {
                  case 'a':
                    if (nextChar >= 'A' && nextChar <= 'Z') {
                      decodedChar = String.fromCharCode(nextCharCode - 64);
                    } else {
                      return null;
                    }

                    break;

                  case 'b':
                    if (nextChar >= 'A' && nextChar <= 'E') {
                      decodedChar = String.fromCharCode(nextCharCode - 38);
                    } else if (nextChar >= 'F' && nextChar <= 'J') {
                      decodedChar = String.fromCharCode(nextCharCode - 11);
                    } else if (nextChar >= 'K' && nextChar <= 'O') {
                      decodedChar = String.fromCharCode(nextCharCode + 16);
                    } else if (nextChar >= 'P' && nextChar <= 'S') {
                      decodedChar = String.fromCharCode(nextCharCode + 43);
                    } else if (nextChar >= 'T' && nextChar <= 'Z') {
                      decodedChar = String.fromCharCode(127);
                    } else {
                      return null;
                    }

                    break;

                  case 'c':
                    if (nextChar >= 'A' && nextChar <= 'O') {
                      decodedChar = String.fromCharCode(nextCharCode - 32);
                    } else if (nextChar === 'Z') {
                      decodedChar = ':';
                    } else {
                      return null;
                    }

                    break;

                  case 'd':
                    if (nextChar >= 'A' && nextChar <= 'Z') {
                      decodedChar = String.fromCharCode(nextCharCode + 32);
                    } else {
                      return null;
                    }

                    break;

                  default:
                    console.warn('* code_93_reader _decodeExtended hit default case, this may be an error', decodedChar);
                    return null;
                }

                result.push(decodedChar);
              } else {
                result.push(_char2);
              }
            }

            return result;
          }
        }, {
          key: "_matchCheckChar",
          value: function _matchCheckChar(charArray, index, maxWeight) {
            var arrayToCheck = charArray.slice(0, index);
            var length = arrayToCheck.length;
            var weightedSums = arrayToCheck.reduce(function (sum, _char3, i) {
              var weight = (i * -1 + (length - 1)) % maxWeight + 1;
              var value = code_93_reader_ALPHABET.indexOf(_char3.charCodeAt(0));
              return sum + weight * value;
            }, 0);
            var checkChar = code_93_reader_ALPHABET[weightedSums % 47];
            return checkChar === charArray[index].charCodeAt(0);
          }
        }, {
          key: "_verifyChecksums",
          value: function _verifyChecksums(charArray) {
            return this._matchCheckChar(charArray, charArray.length - 2, 20) && this._matchCheckChar(charArray, charArray.length - 1, 15);
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            start = this._findStart();

            if (!start) {
              return null;
            }

            var counters = new Uint16Array([0, 0, 0, 0, 0, 0]);
            var result = [];

            var nextStart = this._nextSet(this._row, start.end);

            var lastStart;
            var decodedChar;

            do {
              counters = this._toCounters(nextStart, counters);

              var pattern = this._toPattern(counters);

              if (pattern < 0) {
                return null;
              }

              decodedChar = this._patternToChar(pattern);

              if (decodedChar === null) {
                return null;
              }

              result.push(decodedChar);
              lastStart = nextStart;
              nextStart += array_helper["a" /* default */].sum(counters);
              nextStart = this._nextSet(this._row, nextStart);
            } while (decodedChar !== '*');

            result.pop();

            if (!result.length) {
              return null;
            }

            if (!this._verifyEnd(lastStart, nextStart)) {
              return null;
            }

            if (!this._verifyChecksums(result)) {
              return null;
            }

            result = result.slice(0, result.length - 2); // yes, this is an assign inside an if.

            if ((result = this._decodeExtended(result)) === null) {
              return null;
            }

            return {
              code: result.join(''),
              start: start.start,
              end: nextStart,
              startInfo: start,
              decodedCodes: result,
              format: this.FORMAT
            };
          }
        }]);

        return Code93Reader;
      }(barcode_reader);

/* harmony default export */ var code_93_reader = (code_93_reader_Code93Reader);
      // CONCATENATED MODULE: ./src/reader/code_32_reader.ts









      function code_32_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_32_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

      function code_32_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }


      var code_32_reader_patterns = {
        AEIO: /[AEIO]/g,
        AZ09: /[A-Z0-9]/
      };
      var code32set = '0123456789BCDFGHJKLMNPQRSTUVWXYZ';

      var code_32_reader_Code32Reader = /*#__PURE__*/function (_Code39Reader) {
        inherits_default()(Code32Reader, _Code39Reader);

        var _super = code_32_reader_createSuper(Code32Reader);

        function Code32Reader() {
          var _this;

          classCallCheck_default()(this, Code32Reader);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_32_reader');

          return _this;
        }

        createClass_default()(Code32Reader, [{
          key: "_decodeCode32",
          value: function _decodeCode32(code) {
            if (/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(code)) {
              return null;
            }

            var res = 0;

            for (var i = 0; i < code.length; i++) {
              res = res * 32 + code32set.indexOf(code[i]);
            }

            var code32 = '' + res;

            if (code32.length < 9) {
              code32 = ('000000000' + code32).slice(-9);
            }

            return 'A' + code32;
          } // TODO (this was todo in original repo, no text was there. sorry.)

        }, {
          key: "_checkChecksum",
          value: function _checkChecksum(code) {
            return !!code;
          }
        }, {
          key: "_decode",
          value: function _decode(row, start) {
            var result = get_default()(getPrototypeOf_default()(Code32Reader.prototype), "_decode", this).call(this, row, start);

            if (!result) {
              return null;
            }

            var code = result.code;

            if (!code) {
              return null;
            }

            code = code.replace(code_32_reader_patterns.AEIO, '');

            if (!this._checkChecksum(code)) {
              return null;
            }

            var code32 = this._decodeCode32(code);

            if (!code32) {
              return null;
            }

            result.code = code32;
            return result;
          }
        }]);

        return Code32Reader;
      }(code_39_reader);

/* harmony default export */ var code_32_reader = (code_32_reader_Code32Reader);
      // CONCATENATED MODULE: ./src/decoder/barcode_decoder.js

















      var READERS = {
        code_128_reader: code_128_reader,
        ean_reader: ean_reader,
        ean_5_reader: ean_5_reader,
        ean_2_reader: ean_2_reader,
        ean_8_reader: ean_8_reader,
        code_39_reader: code_39_reader,
        code_39_vin_reader: code_39_vin_reader,
        codabar_reader: codabar_reader,
        upc_reader: upc_reader,
        upc_e_reader: upc_e_reader,
        i2of5_reader: i2of5_reader,
        '2of5_reader': _2of5_reader,
        code_93_reader: code_93_reader,
        code_32_reader: code_32_reader
      };
/* harmony default export */ var barcode_decoder = ({
        registerReader: function registerReader(name, reader) {
          READERS[name] = reader;
        },
        create: function create(config, inputImageWrapper) {
          var _canvas = {
            ctx: {
              frequency: null,
              pattern: null,
              overlay: null
            },
            dom: {
              frequency: null,
              pattern: null,
              overlay: null
            }
          };
          var _barcodeReaders = [];
          initCanvas();
          initReaders();
          initConfig();

          function initCanvas() {
            if (true && typeof document !== 'undefined') {
              var $debug = document.querySelector('#debug.detection');
              _canvas.dom.frequency = document.querySelector('canvas.frequency');

              if (!_canvas.dom.frequency) {
                _canvas.dom.frequency = document.createElement('canvas');
                _canvas.dom.frequency.className = 'frequency';

                if ($debug) {
                  $debug.appendChild(_canvas.dom.frequency);
                }
              }

              _canvas.ctx.frequency = _canvas.dom.frequency.getContext('2d');
              _canvas.dom.pattern = document.querySelector('canvas.patternBuffer');

              if (!_canvas.dom.pattern) {
                _canvas.dom.pattern = document.createElement('canvas');
                _canvas.dom.pattern.className = 'patternBuffer';

                if ($debug) {
                  $debug.appendChild(_canvas.dom.pattern);
                }
              }

              _canvas.ctx.pattern = _canvas.dom.pattern.getContext('2d');
              _canvas.dom.overlay = document.querySelector('canvas.drawingBuffer');

              if (_canvas.dom.overlay) {
                _canvas.ctx.overlay = _canvas.dom.overlay.getContext('2d');
              }
            }
          }

          function initReaders() {
            config.readers.forEach(function (readerConfig) {
              var reader;
              var configuration = {};
              var supplements = [];

              if (typeof_default()(readerConfig) === 'object') {
                reader = readerConfig.format;
                configuration = readerConfig.config;
              } else if (typeof readerConfig === 'string') {
                reader = readerConfig;
              }

              if (true) {
                console.log('Before registering reader: ', reader);
              }

              if (configuration.supplements) {
                supplements = configuration.supplements.map(function (supplement) {
                  return new READERS[supplement]();
                });
              }

              try {
                var readerObj = new READERS[reader](configuration, supplements);

                _barcodeReaders.push(readerObj);
              } catch (err) {
                console.error('* Error constructing reader ', reader, err);
                throw err;
              }
            });

            if (true) {
              console.log("Registered Readers: ".concat(_barcodeReaders.map(function (reader) {
                return JSON.stringify({
                  format: reader.FORMAT,
                  config: reader.config
                });
              }).join(', ')));
            }
          }

          function initConfig() {
            if (true && typeof document !== 'undefined') {
              var i;
              var vis = [{
                node: _canvas.dom.frequency,
                prop: config.debug.showFrequency
              }, {
                node: _canvas.dom.pattern,
                prop: config.debug.showPattern
              }];

              for (i = 0; i < vis.length; i++) {
                if (vis[i].prop === true) {
                  vis[i].node.style.display = 'block';
                } else {
                  vis[i].node.style.display = 'none';
                }
              }
            }
          }
          /**
           * extend the line on both ends
           * @param {Array} line
           * @param {Number} angle
           */


          function getExtendedLine(line, angle, ext) {
            function extendLine(amount) {
              var extension = {
                y: amount * Math.sin(angle),
                x: amount * Math.cos(angle)
              };
              /* eslint-disable no-param-reassign */

              line[0].y -= extension.y;
              line[0].x -= extension.x;
              line[1].y += extension.y;
              line[1].x += extension.x;
              /* eslint-enable no-param-reassign */
            } // check if inside image


            extendLine(ext);

            while (ext > 1 && (!inputImageWrapper.inImageWithBorder(line[0]) || !inputImageWrapper.inImageWithBorder(line[1]))) {
              // eslint-disable-next-line no-param-reassign
              ext -= Math.ceil(ext / 2);
              extendLine(-ext);
            }

            return line;
          }

          function getLine(box) {
            return [{
              x: (box[1][0] - box[0][0]) / 2 + box[0][0],
              y: (box[1][1] - box[0][1]) / 2 + box[0][1]
            }, {
              x: (box[3][0] - box[2][0]) / 2 + box[2][0],
              y: (box[3][1] - box[2][1]) / 2 + box[2][1]
            }];
          }

          function tryDecode(line) {
            var result = null;
            var i;
            var barcodeLine = bresenham.getBarcodeLine(inputImageWrapper, line[0], line[1]);

            if (true && config.debug.showFrequency) {
              image_debug["a" /* default */].drawPath(line, {
                x: 'x',
                y: 'y'
              }, _canvas.ctx.overlay, {
                color: 'red',
                lineWidth: 3
              });
              bresenham.debug.printFrequency(barcodeLine.line, _canvas.dom.frequency);
            }

            bresenham.toBinaryLine(barcodeLine);

            if (true && config.debug.showPattern) {
              bresenham.debug.printPattern(barcodeLine.line, _canvas.dom.pattern);
            }

            for (i = 0; i < _barcodeReaders.length && result === null; i++) {
              result = _barcodeReaders[i].decodePattern(barcodeLine.line);
            }

            if (result === null) {
              return null;
            }

            return {
              codeResult: result,
              barcodeLine: barcodeLine
            };
          }
          /**
           * This method slices the given area apart and tries to detect a barcode-pattern
           * for each slice. It returns the decoded barcode, or null if nothing was found
           * @param {Array} box
           * @param {Array} line
           * @param {Number} lineAngle
           */


          function tryDecodeBruteForce(box, line, lineAngle) {
            var sideLength = Math.sqrt(Math.pow(box[1][0] - box[0][0], 2) + Math.pow(box[1][1] - box[0][1], 2));
            var i;
            var slices = 16;
            var result = null;
            var dir;
            var extension;
            var xdir = Math.sin(lineAngle);
            var ydir = Math.cos(lineAngle);

            for (i = 1; i < slices && result === null; i++) {
              // move line perpendicular to angle
              // eslint-disable-next-line no-mixed-operators
              dir = sideLength / slices * i * (i % 2 === 0 ? -1 : 1);
              extension = {
                y: dir * xdir,
                x: dir * ydir
              };
              /* eslint-disable no-param-reassign */

              line[0].y += extension.x;
              line[0].x -= extension.y;
              line[1].y += extension.x;
              line[1].x -= extension.y;
              /* eslint-enable no-param-reassign */

              result = tryDecode(line);
            }

            return result;
          }

          function getLineLength(line) {
            return Math.sqrt(Math.pow(Math.abs(line[1].y - line[0].y), 2) + Math.pow(Math.abs(line[1].x - line[0].x), 2));
          }

          function _decodeFromImage(imageWrapper) {
            var result = null;

            for (var i = 0; i < _barcodeReaders.length && result === null; i++) {
              result = _barcodeReaders[i].decodeImage ? _barcodeReaders[i].decodeImage(imageWrapper) : null;
            }

            return result;
          }
          /**
           * With the help of the configured readers (Code128 or EAN) this function tries to detect a
           * valid barcode pattern within the given area.
           * @param {Object} box The area to search in
           * @returns {Object} the result {codeResult, line, angle, pattern, threshold}
           */


          function _decodeFromBoundingBox(box) {
            var line;
            var ctx = _canvas.ctx.overlay;
            var result;

            if (true) {
              if (config.debug.drawBoundingBox && ctx) {
                image_debug["a" /* default */].drawPath(box, {
                  x: 0,
                  y: 1
                }, ctx, {
                  color: 'blue',
                  lineWidth: 2
                });
              }
            }

            line = getLine(box);
            var lineLength = getLineLength(line);
            var lineAngle = Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x);
            line = getExtendedLine(line, lineAngle, Math.floor(lineLength * 0.1));

            if (line === null) {
              return null;
            }

            result = tryDecode(line);

            if (result === null) {
              result = tryDecodeBruteForce(box, line, lineAngle);
            }

            if (result === null) {
              return null;
            }

            if (true && result && config.debug.drawScanline && ctx) {
              image_debug["a" /* default */].drawPath(line, {
                x: 'x',
                y: 'y'
              }, ctx, {
                color: 'red',
                lineWidth: 3
              });
            }

            return {
              codeResult: result.codeResult,
              line: line,
              angle: lineAngle,
              pattern: result.barcodeLine.line,
              threshold: result.barcodeLine.threshold
            };
          }

          return {
            decodeFromBoundingBox: function decodeFromBoundingBox(box) {
              return _decodeFromBoundingBox(box);
            },
            decodeFromBoundingBoxes: function decodeFromBoundingBoxes(boxes) {
              var i;
              var result;
              var barcodes = [];
              var multiple = config.multiple;

              for (i = 0; i < boxes.length; i++) {
                var box = boxes[i];
                result = _decodeFromBoundingBox(box) || {};
                result.box = box;

                if (multiple) {
                  barcodes.push(result);
                } else if (result.codeResult) {
                  return result;
                }
              }

              if (multiple) {
                return {
                  barcodes: barcodes
                };
              }
            },
            decodeFromImage: function decodeFromImage(inputImageWrapper) {
              var result = _decodeFromImage(inputImageWrapper);

              return result;
            },
            registerReader: function registerReader(name, reader) {
              if (READERS[name]) {
                throw new Error('cannot register existing reader', name);
              }

              READERS[name] = reader;
            },
            setReaders: function setReaders(readers) {
              // eslint-disable-next-line no-param-reassign
              config.readers = readers;
              _barcodeReaders.length = 0;
              initReaders();
            }
          };
        }
      });
// CONCATENATED MODULE: ./src/common/events.ts
/* harmony default export */ var events = ((function EventInterface() {
        var events = {};

        function getEvent(eventName) {
          if (!events[eventName]) {
            events[eventName] = {
              subscribers: []
            };
          }

          return events[eventName];
        }

        function clearEvents() {
          events = {};
        }

        function publishSubscription(subscription, data) {
          if (subscription.async) {
            setTimeout(function () {
              subscription.callback(data);
            }, 4);
          } else {
            subscription.callback(data);
          }
        }

        function _subscribe(event, callback, async) {
          var subscription;

          if (typeof callback === 'function') {
            subscription = {
              callback: callback,
              async: async
            };
          } else {
            subscription = callback;

            if (!subscription.callback) {
              throw new Error('Callback was not specified on options');
            }
          }

          getEvent(event).subscribers.push(subscription);
        }

        return {
          subscribe: function subscribe(event, callback, async) {
            return _subscribe(event, callback, async);
          },
          publish: function publish(eventName, data) {
            var event = getEvent(eventName);
            var subscribers = event.subscribers; // Publish one-time subscriptions

            subscribers.filter(function (subscriber) {
              return !!subscriber.once;
            }).forEach(function (subscriber) {
              publishSubscription(subscriber, data);
            }); // remove them from the subscriber

            event.subscribers = subscribers.filter(function (subscriber) {
              return !subscriber.once;
            }); // publish the rest

            event.subscribers.forEach(function (subscriber) {
              publishSubscription(subscriber, data);
            });
          },
          once: function once(event, callback) {
            var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            _subscribe(event, {
              callback: callback,
              async: async,
              once: true
            });
          },
          unsubscribe: function unsubscribe(eventName, callback) {
            if (eventName) {
              var _event = getEvent(eventName);

              if (_event && callback) {
                _event.subscribers = _event.subscribers.filter(function (subscriber) {
                  return subscriber.callback !== callback;
                });
              } else {
                _event.subscribers = [];
              }
            } else {
              clearEvents();
            }
          }
        };
      })());
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
      var regenerator = __webpack_require__(19);
      var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
      var asyncToGenerator = __webpack_require__(41);
      var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

      // EXTERNAL MODULE: ./node_modules/lodash/pick.js
      var pick = __webpack_require__(101);
      var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

      // CONCATENATED MODULE: ./src/common/mediaDevices.ts
      var ERROR_DESC = 'This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.';
      function enumerateDevices() {
        try {
          return navigator.mediaDevices.enumerateDevices();
        } catch (err) {
          var error = new Error("enumerateDevices is not defined. ".concat(ERROR_DESC));
          error.code = -1;
          return Promise.reject(error);
        }
      }
      function getUserMedia(constraints) {
        try {
          return navigator.mediaDevices.getUserMedia(constraints);
        } catch (err) {
          var error = new Error("getUserMedia is not defined. ".concat(ERROR_DESC));
          error.code = -1;
          return Promise.reject(error);
        }
      }
      // CONCATENATED MODULE: ./src/input/camera_access.ts




      var streamRef;

      function waitForVideo(video) {
        return new Promise(function (resolve, reject) {
          var attempts = 10;

          function checkVideo() {
            if (attempts > 0) {
              if (video.videoWidth > 10 && video.videoHeight > 10) {
                if (true) {
                  console.log("* dev: checkVideo found ".concat(video.videoWidth, "px x ").concat(video.videoHeight, "px"));
                }

                resolve();
              } else {
                window.setTimeout(checkVideo, 500);
              }
            } else {
              reject(new Error('Unable to play video stream. Is webcam working?'));
            }

            attempts--;
          }

          checkVideo();
        });
      }
      /**
       * Tries to attach the camera-stream to a given video-element
       * and calls the callback function when the content is ready
       * @param {Object} constraints
       * @param {Object} video
       */


      function initCamera(_x, _x2) {
        return _initCamera.apply(this, arguments);
      }

      function _initCamera() {
        _initCamera = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(video, constraints) {
          var stream;
          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return getUserMedia(constraints);

                case 2:
                  stream = _context2.sent;
                  streamRef = stream;
                  video.setAttribute('autoplay', 'true');
                  video.setAttribute('muted', 'true');
                  video.setAttribute('playsinline', 'true'); // not listed on MDN...
                  // eslint-disable-next-line no-param-reassign

                  video.srcObject = stream;
                  video.addEventListener('loadedmetadata', function () {
                    video.play();
                  });
                  return _context2.abrupt("return", waitForVideo(video));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _initCamera.apply(this, arguments);
      }

      function deprecatedConstraints(videoConstraints) {
        var normalized = pick_default()(videoConstraints, ['width', 'height', 'facingMode', 'aspectRatio', 'deviceId']);

        if (typeof videoConstraints.minAspectRatio !== 'undefined' && videoConstraints.minAspectRatio > 0) {
          normalized.aspectRatio = videoConstraints.minAspectRatio;
          console.log('WARNING: Constraint \'minAspectRatio\' is deprecated; Use \'aspectRatio\' instead');
        }

        if (typeof videoConstraints.facing !== 'undefined') {
          normalized.facingMode = videoConstraints.facing;
          console.log('WARNING: Constraint \'facing\' is deprecated. Use \'facingMode\' instead\'');
        }

        return normalized;
      } // TODO: #192 I don't think there's any good reason pickConstraints should return a Promise,
      // I think it was just that way so it could be chained to other functions that did return a Promise.
      // That's not necessary with async functions being a thing, so that should be fixed.


      function pickConstraints() {
        var videoConstraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var video = deprecatedConstraints(videoConstraints);

        if (video && video.deviceId && video.facingMode) {
          delete video.facingMode;
        }

        return Promise.resolve({
          audio: false,
          video: video
        });
      }

      function enumerateVideoDevices() {
        return _enumerateVideoDevices.apply(this, arguments);
      }

      function _enumerateVideoDevices() {
        _enumerateVideoDevices = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
          var devices;
          return regenerator_default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return enumerateDevices();

                case 2:
                  devices = _context3.sent;
                  return _context3.abrupt("return", devices.filter(function (device) {
                    return device.kind === 'videoinput';
                  }));

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _enumerateVideoDevices.apply(this, arguments);
      }

      function getActiveTrack() {
        if (!streamRef) {
          return null;
        }

        var tracks = streamRef.getVideoTracks();
        return tracks && (tracks === null || tracks === void 0 ? void 0 : tracks.length) ? tracks[0] : null;
      }
      /**
       * Used for accessing information about the active stream track and available video devices.
       */


      var QuaggaJSCameraAccess = {
        request: function request(video, videoConstraints) {
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
            var newConstraints;
            return regenerator_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return pickConstraints(videoConstraints);

                  case 2:
                    newConstraints = _context.sent;
                    return _context.abrupt("return", initCamera(video, newConstraints));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        },
        release: function release() {
          // TODO: i wonder if telling the Video element to pause() before calling MediaStreamTrack.stop() would alleviate some of the issues with the camera appearing to stay open on Android even after stopping.
          var tracks = streamRef && streamRef.getVideoTracks();

          if (tracks && tracks.length) {
            tracks[0].stop();
          }

          streamRef = null;
        },
        enumerateVideoDevices: enumerateVideoDevices,
        getActiveStreamLabel: function getActiveStreamLabel() {
          var track = getActiveTrack();
          return track ? track.label : '';
        },
        getActiveTrack: getActiveTrack
      };
/* harmony default export */ var camera_access = (QuaggaJSCameraAccess);
      // CONCATENATED MODULE: ./src/analytics/result_collector.ts


      function contains(codeResult, list) {
        return list && list.some(function (item) {
          var keys = Object.keys(item);
          return keys.every(function (key) {
            return item[key] === codeResult[key];
          });
        });
      }

      function passesFilter(codeResult, filter) {
        return typeof filter === 'function' ? filter(codeResult) : true;
      }

/* harmony default export */ var result_collector = ({
        create: function create(config) {
          var _config$capacity;

          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var results = [];
          var capacity = (_config$capacity = config.capacity) !== null && _config$capacity !== void 0 ? _config$capacity : 20;
          var capture = config.capture === true;

          function matchesConstraints(codeResult) {
            return !!capacity && codeResult && !contains(codeResult, config.blacklist) && passesFilter(codeResult, config.filter);
          }

          return {
            addResult: function addResult(data, imageSize, codeResult) {
              var result = {}; // this is 'any' to avoid having to construct a whole QuaggaJSCodeResult :|

              if (matchesConstraints(codeResult)) {
                capacity--;
                result.codeResult = codeResult;

                if (capture) {
                  canvas.width = imageSize.x;
                  canvas.height = imageSize.y;
                  image_debug["a" /* default */].drawImage(data, imageSize, ctx);
                  result.frame = canvas.toDataURL();
                }

                results.push(result);
              }
            },
            deleteResult: function deleteResult() {
              results = [1];
            },
            getResults: function getResults() {
              return results;
            }
          };
        }
      });
      // CONCATENATED MODULE: ./src/config/config.dev.ts
      var DevConfig = {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            // aspectRatio: 640/480, // optional
            facingMode: 'environment' // or user
            // deviceId: "38745983457387598375983759834"

          },
          area: {
            top: '0%',
            right: '0%',
            left: '0%',
            bottom: '0%'
          },
          singleChannel: false // true: only the red color-channel is read

        },
        locate: true,
        numOfWorkers: 0,
        decoder: {
          readers: ['code_128_reader'],
          debug: {
            drawBoundingBox: false,
            showFrequency: false,
            drawScanline: false,
            showPattern: false
          }
        },
        locator: {
          halfSample: true,
          patchSize: 'medium',
          // x-small, small, medium, large, x-large
          debug: {
            showCanvas: false,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: false,
              showTransformedBox: false,
              showBB: false
            }
          }
        }
      };
/* harmony default export */ var config_dev = (DevConfig);
      // CONCATENATED MODULE: ./src/config/config.node.ts
      var NodeConfig = {
        inputStream: {
          type: 'ImageStream',
          sequence: false,
          size: 800,
          area: {
            top: '0%',
            right: '0%',
            left: '0%',
            bottom: '0%'
          },
          singleChannel: false // true: only the red color-channel is read

        },
        locate: true,
        numOfWorkers: 0,
        decoder: {
          readers: ['code_128_reader']
        },
        locator: {
          halfSample: true,
          patchSize: 'medium' // x-small, small, medium, large, x-large

        }
      };
/* harmony default export */ var config_node = (NodeConfig);
      // CONCATENATED MODULE: ./src/config/config.prod.ts
      var ProdConfig = {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            // aspectRatio: 640/480, // optional
            facingMode: 'environment' // or user
            // deviceId: "38745983457387598375983759834"

          },
          area: {
            top: '0%',
            right: '0%',
            left: '0%',
            bottom: '0%'
          },
          singleChannel: false // true: only the red color-channel is read

        },
        locate: true,
        numOfWorkers: 4,
        decoder: {
          readers: ['code_128_reader']
        },
        locator: {
          halfSample: true,
          patchSize: 'medium' // x-small, small, medium, large, x-large

        }
      };
/* harmony default export */ var config_prod = (ProdConfig);
      // CONCATENATED MODULE: ./src/config/config.ts


      // @ts-ignore // TODO: this produces a bizarre typescript error
      // eslint-disable-next-line no-nested-ternary

      var QuaggaConfig = true ? config_dev : undefined;
/* harmony default export */ var config_config = (QuaggaConfig);
      // EXTERNAL MODULE: ./node_modules/gl-vec2/index.js
      var gl_vec2 = __webpack_require__(7);

      // CONCATENATED MODULE: ./src/QuaggaContext.ts


      var QuaggaContext_QuaggaContext = function QuaggaContext() {
        classCallCheck_default()(this, QuaggaContext);

        defineProperty_default()(this, "config", void 0);

        defineProperty_default()(this, "inputStream", void 0);

        defineProperty_default()(this, "framegrabber", void 0);

        defineProperty_default()(this, "inputImageWrapper", void 0);

        defineProperty_default()(this, "stopped", false);

        defineProperty_default()(this, "boxSize", void 0);

        defineProperty_default()(this, "resultCollector", void 0);

        defineProperty_default()(this, "decoder", void 0);

        defineProperty_default()(this, "workerPool", []);

        defineProperty_default()(this, "onUIThread", true);

        defineProperty_default()(this, "canvasContainer", new QuaggaContext_CanvasContainer());
      };
      var QuaggaContext_CanvasInfo = function CanvasInfo() {
        classCallCheck_default()(this, CanvasInfo);

        defineProperty_default()(this, "image", void 0);

        defineProperty_default()(this, "overlay", void 0);
      };
      var QuaggaContext_CanvasContainer = function CanvasContainer() {
        classCallCheck_default()(this, CanvasContainer);

        defineProperty_default()(this, "ctx", void 0);

        defineProperty_default()(this, "dom", void 0);

        this.ctx = new QuaggaContext_CanvasInfo();
        this.dom = new QuaggaContext_CanvasInfo();
      };
      // EXTERNAL MODULE: ./src/locator/barcode_locator.js
      var barcode_locator = __webpack_require__(28);

      // CONCATENATED MODULE: ./src/quagga/initBuffers.ts



      // TODO: need typescript def for BarcodeLocator
      function initBuffers_initBuffers(inputStream, imageWrapper, locator) {
        var inputImageWrapper = imageWrapper || new image_wrapper["a" /* default */]({
          x: inputStream.getWidth(),
          y: inputStream.getHeight(),
          type: 'XYSize'
        });

        if (true) {
          console.log("image wrapper size ".concat(inputImageWrapper.size));
        }

        var boxSize = [Object(gl_vec2["clone"])([0, 0]), Object(gl_vec2["clone"])([0, inputImageWrapper.size.y]), Object(gl_vec2["clone"])([inputImageWrapper.size.x, inputImageWrapper.size.y]), Object(gl_vec2["clone"])([inputImageWrapper.size.x, 0])];
        barcode_locator["a" /* default */].init(inputImageWrapper, locator);
        return {
          inputImageWrapper: inputImageWrapper,
          boxSize: boxSize
        };
      }
      // CONCATENATED MODULE: ./src/quagga/getViewPort.ts
      function getViewPort_getViewPort(target) {
        if (typeof document === 'undefined') {
          return null;
        } // Check if target is already a DOM element


        if (target instanceof HTMLElement && target.nodeName && target.nodeType === 1) {
          return target;
        } // Use '#interactive.viewport' as a fallback selector (backwards compatibility)


        var selector = typeof target === 'string' ? target : '#interactive.viewport';
        return document.querySelector(selector);
      }
      // CONCATENATED MODULE: ./src/quagga/initCanvas.ts


      function findOrCreateCanvas(selector, className) {
        var canvas = document.querySelector(selector);

        if (!canvas) {
          canvas = document.createElement('canvas');
          canvas.className = className;
        }

        return canvas;
      }

      function getCanvasAndContext(selector, className) {
        var canvas = findOrCreateCanvas(selector, className);
        var context = canvas.getContext('2d');
        return {
          canvas: canvas,
          context: context
        };
      }

      function initCanvases(canvasSize) {
        if (typeof document !== 'undefined') {
          var image = getCanvasAndContext('canvas.imgBuffer', 'imgBuffer');
          var overlay = getCanvasAndContext('canvas.drawingBuffer', 'drawingBuffer');
          image.canvas.width = overlay.canvas.width = canvasSize.x;
          image.canvas.height = overlay.canvas.height = canvasSize.y;
          return {
            dom: {
              image: image.canvas,
              overlay: overlay.canvas
            },
            ctx: {
              image: image.context,
              overlay: overlay.context
            }
          };
        }

        return null;
      }

      function initCanvas_initCanvas(context) {
        var _context$config, _context$config$input, _context$config2, _context$config2$inpu;

        var viewport = getViewPort_getViewPort(context === null || context === void 0 ? void 0 : (_context$config = context.config) === null || _context$config === void 0 ? void 0 : (_context$config$input = _context$config.inputStream) === null || _context$config$input === void 0 ? void 0 : _context$config$input.target);
        var type = context === null || context === void 0 ? void 0 : (_context$config2 = context.config) === null || _context$config2 === void 0 ? void 0 : (_context$config2$inpu = _context$config2.inputStream) === null || _context$config2$inpu === void 0 ? void 0 : _context$config2$inpu.type;
        if (!type) return null;
        var container = initCanvases(context.inputStream.getCanvasSize());
        if (!container) return {
          dom: {
            image: null,
            overlay: null
          },
          ctx: {
            image: null,
            overlay: null
          }
        };
        var dom = container.dom;

        if (typeof document !== 'undefined') {
          if (viewport) {
            if (type === 'ImageStream' && !viewport.contains(dom.image)) {
              viewport.appendChild(dom.image);
            }

            if (!viewport.contains(dom.overlay)) {
              viewport.appendChild(dom.overlay);
            }
          }
        }

        return container;
      }
      // CONCATENATED MODULE: ./src/input/exif_helper.js
      // NOTE: (SOME OF) THIS IS BROWSER ONLY CODE.  Node does not have 'atob' built in, nor XMLHttpRequest.
      // How exactly is this set of functions used in Quagga? Do we need the browser specific code? Do we
      // need to port any part of this that doesn't work in Node to node?
      // Tags scraped from https://github.com/exif-js/exif-js
      var ExifTags = {
        0x0112: 'orientation'
      };
      var AvailableTags = Object.keys(ExifTags).map(function (key) {
        return ExifTags[key];
      });
      function findTagsInObjectURL(src) {
        var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;

        if (/^blob:/i.test(src)) {
          return objectURLToBlob(src).then(readToBuffer).then(function (buffer) {
            return findTagsInBuffer(buffer, tags);
          });
        }

        return Promise.resolve(null);
      }
      function base64ToArrayBuffer(dataUrl) {
        var base64 = dataUrl.replace(/^data:([^;]+);base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);

        for (var i = 0; i < len; i++) {
          view[i] = binary.charCodeAt(i);
        }

        return buffer;
      }

      function readToBuffer(blob) {
        return new Promise(function (resolve) {
          var fileReader = new FileReader();

          fileReader.onload = function (e) {
            return resolve(e.target.result);
          };

          fileReader.readAsArrayBuffer(blob);
        });
      }

      function objectURLToBlob(url) {
        return new Promise(function (resolve, reject) {
          var http = new XMLHttpRequest();
          http.open('GET', url, true);
          http.responseType = 'blob';

          http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && (http.status === 200 || http.status === 0)) {
              resolve(this.response);
            }
          };

          http.onerror = reject;
          http.send();
        });
      }

      function findTagsInBuffer(file) {
        var selectedTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;
        var dataView = new DataView(file);
        var length = file.byteLength;
        var exifTags = selectedTags.reduce(function (result, selectedTag) {
          var exifTag = Object.keys(ExifTags).filter(function (tag) {
            return ExifTags[tag] === selectedTag;
          })[0];

          if (exifTag) {
            result[exifTag] = selectedTag;
          }

          return result;
        }, {});
        var offset = 2;
        var marker;

        if (dataView.getUint8(0) !== 0xFF || dataView.getUint8(1) !== 0xD8) {
          return false;
        }

        while (offset < length) {
          if (dataView.getUint8(offset) !== 0xFF) {
            return false;
          }

          marker = dataView.getUint8(offset + 1);

          if (marker === 0xE1) {
            return readEXIFData(dataView, offset + 4, exifTags);
          }

          offset += 2 + dataView.getUint16(offset + 2);
        }

        return false;
      }

      function readEXIFData(file, start, exifTags) {
        if (getStringFromBuffer(file, start, 4) !== 'Exif') {
          return false;
        }

        var tiffOffset = start + 6;
        var bigEnd;

        if (file.getUint16(tiffOffset) === 0x4949) {
          bigEnd = false;
        } else if (file.getUint16(tiffOffset) === 0x4D4D) {
          bigEnd = true;
        } else {
          return false;
        }

        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
          return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
          return false;
        }

        var tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, exifTags, bigEnd);
        return tags;
      }

      function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};

        for (var i = 0; i < entries; i++) {
          var entryOffset = dirStart + i * 12 + 2;
          var tag = strings[file.getUint16(entryOffset, !bigEnd)];

          if (tag) {
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
          }
        }

        return tags;
      }

      function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);

        switch (type) {
          case 3:
            if (numValues === 1) {
              return file.getUint16(entryOffset + 8, !bigEnd);
            }

        }

        return null;
      }

      function getStringFromBuffer(buffer, start, length) {
        var outstr = '';

        for (var n = start; n < start + length; n++) {
          outstr += String.fromCharCode(buffer.getUint8(n));
        }

        return outstr;
      }
      // CONCATENATED MODULE: ./src/input/image_loader.js

      var ImageLoader = {};

      ImageLoader.load = function (directory, callback, offset, size, sequence) {
        var htmlImagesSrcArray = new Array(size);
        var htmlImagesArray = new Array(htmlImagesSrcArray.length);
        var i;
        var img;
        var num;

        if (sequence === false) {
          htmlImagesSrcArray[0] = directory;
        } else {
          for (i = 0; i < htmlImagesSrcArray.length; i++) {
            num = offset + i;
            htmlImagesSrcArray[i] = "".concat(directory, "image-").concat("00".concat(num).slice(-3), ".jpg");
          }
        }

        htmlImagesArray.notLoaded = [];

        htmlImagesArray.addImage = function (image) {
          htmlImagesArray.notLoaded.push(image);
        };

        htmlImagesArray.loaded = function (loadedImg) {
          var notloadedImgs = htmlImagesArray.notLoaded;

          for (var x = 0; x < notloadedImgs.length; x++) {
            if (notloadedImgs[x] === loadedImg) {
              notloadedImgs.splice(x, 1);

              for (var y = 0; y < htmlImagesSrcArray.length; y++) {
                var imgName = htmlImagesSrcArray[y].substr(htmlImagesSrcArray[y].lastIndexOf('/'));

                if (loadedImg.src.lastIndexOf(imgName) !== -1) {
                  htmlImagesArray[y] = {
                    img: loadedImg
                  };
                  break;
                }
              }

              break;
            }
          }

          if (notloadedImgs.length === 0) {
            if (true) {
              console.log('Images loaded');
            }

            if (sequence === false) {
              findTagsInObjectURL(directory, ['orientation']).then(function (tags) {
                htmlImagesArray[0].tags = tags;
                callback(htmlImagesArray);
              })["catch"](function (e) {
                console.log(e);
                callback(htmlImagesArray);
              });
            } else {
              callback(htmlImagesArray);
            }
          }
        };

        for (i = 0; i < htmlImagesSrcArray.length; i++) {
          img = new Image();
          htmlImagesArray.addImage(img);
          addOnloadHandler(img, htmlImagesArray);
          img.src = htmlImagesSrcArray[i];
        }
      };

      function addOnloadHandler(img, htmlImagesArray) {
        img.onload = function () {
          htmlImagesArray.loaded(this);
        };
      }

/* harmony default export */ var image_loader = (ImageLoader);
      // CONCATENATED MODULE: ./src/input/input_stream/input_stream_browser.ts
      /* eslint-disable @typescript-eslint/no-explicit-any */

      var inputStreamFactory = {
        createVideoStream: function createVideoStream(video) {
          var _config = null;
          var _eventNames = ['canrecord', 'ended'];
          var _eventHandlers = {};

          var _calculatedWidth;

          var _calculatedHeight;

          var _topRight = {
            x: 0,
            y: 0,
            type: 'Point'
          };
          var _canvasSize = {
            x: 0,
            y: 0,
            type: 'XYSize'
          };

          function initSize() {
            var _config2, _config3;

            var width = video.videoWidth;
            var height = video.videoHeight; // eslint-disable-next-line no-nested-ternary

            _calculatedWidth = ((_config2 = _config) === null || _config2 === void 0 ? void 0 : _config2.size) ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width; // eslint-disable-next-line no-nested-ternary

            _calculatedHeight = ((_config3 = _config) === null || _config3 === void 0 ? void 0 : _config3.size) ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
            _canvasSize.x = _calculatedWidth;
            _canvasSize.y = _calculatedHeight;
          }

          var inputStream = {
            getRealWidth: function getRealWidth() {
              return video.videoWidth;
            },
            getRealHeight: function getRealHeight() {
              return video.videoHeight;
            },
            getWidth: function getWidth() {
              return _calculatedWidth;
            },
            getHeight: function getHeight() {
              return _calculatedHeight;
            },
            setWidth: function setWidth(width) {
              _calculatedWidth = width;
            },
            setHeight: function setHeight(height) {
              _calculatedHeight = height;
            },
            setInputStream: function setInputStream(config) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              _config = config; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

              this.setAttribute('src', typeof config.src !== 'undefined' ? config.src : '');
            },
            ended: function ended() {
              return video.ended;
            },
            getConfig: function getConfig() {
              return _config;
            },
            setAttribute: function setAttribute(name, value) {
              if (video) {
                video.setAttribute(name, value);
              }
            },
            pause: function pause() {
              video.pause();
            },
            play: function play() {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              video.play();
            },
            setCurrentTime: function setCurrentTime(time) {
              var _config4;

              if (((_config4 = _config) === null || _config4 === void 0 ? void 0 : _config4.type) !== 'LiveStream') {
                this.setAttribute('currentTime', time.toString());
              }
            },
            addEventListener: function addEventListener(event, f, bool) {
              if (_eventNames.indexOf(event) !== -1) {
                if (!_eventHandlers[event]) {
                  _eventHandlers[event] = [];
                }

                _eventHandlers[event].push(f);
              } else {
                video.addEventListener(event, f, bool);
              }
            },
            clearEventHandlers: function clearEventHandlers() {
              _eventNames.forEach(function (eventName) {
                var handlers = _eventHandlers[eventName];

                if (handlers && handlers.length > 0) {
                  handlers.forEach(function (handler) {
                    video.removeEventListener(eventName, handler);
                  });
                }
              });
            },
            trigger: function trigger(eventName, args) {
              var j; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

              var handlers = _eventHandlers[eventName];

              if (eventName === 'canrecord') {
                initSize();
              }

              if (handlers && handlers.length > 0) {
                for (j = 0; j < handlers.length; j++) {
                  handlers[j].apply(inputStream, args);
                }
              }
            },
            setTopRight: function setTopRight(topRight) {
              _topRight.x = topRight.x;
              _topRight.y = topRight.y;
            },
            getTopRight: function getTopRight() {
              return _topRight;
            },
            setCanvasSize: function setCanvasSize(size) {
              _canvasSize.x = size.x;
              _canvasSize.y = size.y;
            },
            getCanvasSize: function getCanvasSize() {
              return _canvasSize;
            },
            getFrame: function getFrame() {
              return video;
            }
          };
          return inputStream;
        },
        createLiveStream: function createLiveStream(video) {
          if (video) {
            video.setAttribute('autoplay', 'true');
          }

          var that = inputStreamFactory.createVideoStream(video);

          that.ended = function ended() {
            return false;
          };

          return that;
        },
        createImageStream: function createImageStream() {
          var _config = null;
          var width = 0;
          var height = 0;
          var frameIdx = 0;
          var paused = true;
          var loaded = false;
          var imgArray = null;
          var size = 0;
          var offset = 1;
          var baseUrl = null;
          var _ended = false;
          var calculatedWidth;
          var calculatedHeight;
          var _eventNames = ['canrecord', 'ended'];
          var _eventHandlers = {};
          var _topRight = {
            x: 0,
            y: 0,
            type: 'Point'
          };
          var _canvasSize = {
            x: 0,
            y: 0,
            type: 'XYSize'
          };

          function loadImages() {
            var _config7;

            loaded = false;
            image_loader.load(baseUrl, function (imgs) {
              var _config5, _config6;

              imgArray = imgs; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

              if (imgs[0].tags && imgs[0].tags.orientation) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                switch (imgs[0].tags.orientation) {
                  case 6:
                  case 8:
                    width = imgs[0].img.height;
                    height = imgs[0].img.width;
                    break;

                  default:
                    width = imgs[0].img.width;
                    height = imgs[0].img.height;
                }
              } else {
                width = imgs[0].img.width;
                height = imgs[0].img.height;
              } // eslint-disable-next-line no-nested-ternary


              calculatedWidth = ((_config5 = _config) === null || _config5 === void 0 ? void 0 : _config5.size) ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width; // eslint-disable-next-line no-nested-ternary

              calculatedHeight = ((_config6 = _config) === null || _config6 === void 0 ? void 0 : _config6.size) ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
              _canvasSize.x = calculatedWidth;
              _canvasSize.y = calculatedHeight;
              loaded = true;
              frameIdx = 0;
              setTimeout(function () {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                publishEvent('canrecord', []);
              }, 0);
            }, offset, size, (_config7 = _config) === null || _config7 === void 0 ? void 0 : _config7.sequence);
          }

          function publishEvent(eventName, args) {
            var j;
            var handlers = _eventHandlers[eventName];

            if (handlers && handlers.length > 0) {
              for (j = 0; j < handlers.length; j++) {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                handlers[j].apply(inputStream, args); // TODO: typescript complains that any[] is not valid for a second arg for apply?!
              }
            }
          } // TODO: any code shared with the first InputStream above should be shared not copied
          // TODO: publishEvent needs access to inputStream, but inputStream needs access to publishEvent
          // TODO: This is why it's a 'var', so it hoists back.  This is ugly, and should be changed.
          // eslint-disable-next-line no-var,vars-on-top


          var inputStream = {
            trigger: publishEvent,
            getWidth: function getWidth() {
              return calculatedWidth;
            },
            getHeight: function getHeight() {
              return calculatedHeight;
            },
            setWidth: function setWidth(newWidth) {
              calculatedWidth = newWidth;
            },
            setHeight: function setHeight(newHeight) {
              calculatedHeight = newHeight;
            },
            getRealWidth: function getRealWidth() {
              return width;
            },
            getRealHeight: function getRealHeight() {
              return height;
            },
            setInputStream: function setInputStream(stream) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              _config = stream; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

              if (stream.sequence === false) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                baseUrl = stream.src;
                size = 1;
              } else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                baseUrl = stream.src; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access

                size = stream.length;
              }

              loadImages();
            },
            ended: function ended() {
              return _ended;
            },
            setAttribute: function setAttribute() { },
            getConfig: function getConfig() {
              return _config;
            },
            pause: function pause() {
              paused = true;
            },
            play: function play() {
              paused = false;
            },
            setCurrentTime: function setCurrentTime(time) {
              frameIdx = time;
            },
            addEventListener: function addEventListener(event, f) {
              if (_eventNames.indexOf(event) !== -1) {
                if (!_eventHandlers[event]) {
                  _eventHandlers[event] = [];
                }

                _eventHandlers[event].push(f);
              }
            },
            clearEventHandlers: function clearEventHandlers() {
              Object.keys(_eventHandlers).forEach(function (ind) {
                return delete _eventHandlers[ind];
              });
            },
            setTopRight: function setTopRight(topRight) {
              _topRight.x = topRight.x;
              _topRight.y = topRight.y;
            },
            getTopRight: function getTopRight() {
              return _topRight;
            },
            setCanvasSize: function setCanvasSize(canvasSize) {
              _canvasSize.x = canvasSize.x;
              _canvasSize.y = canvasSize.y;
            },
            getCanvasSize: function getCanvasSize() {
              return _canvasSize;
            },
            getFrame: function getFrame() {
              var frame;

              if (!loaded) {
                return null;
              }

              if (!paused) {
                var _imgArray;

                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                frame = (_imgArray = imgArray) === null || _imgArray === void 0 ? void 0 : _imgArray[frameIdx];

                if (frameIdx < size - 1) {
                  frameIdx++;
                } else {
                  setTimeout(function () {
                    _ended = true;
                    publishEvent('ended', []);
                  }, 0);
                }
              } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


              return frame;
            }
          };
          return inputStream;
        }
      };
/* harmony default export */ var input_stream_browser = (inputStreamFactory);
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
      var slicedToArray = __webpack_require__(39);
      var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

      // EXTERNAL MODULE: ./node_modules/get-pixels/dom-pixels.js
      var dom_pixels = __webpack_require__(104);
      var dom_pixels_default = /*#__PURE__*/__webpack_require__.n(dom_pixels);

      // CONCATENATED MODULE: ./src/input/input_stream/input_stream_node.ts

      // TODO: It's pretty likely that this shares code with the browser version, investigate that

      var input_stream_node_inputStreamFactory = {
        createVideoStream: function createVideoStream() {
          throw new Error('createVideoStream not available');
        },
        createLiveStream: function createLiveStream() {
          throw new Error('createLiveStream not available');
        },
        createImageStream: function createImageStream() {
          var _config = null;
          var width = 0;
          var height = 0;
          var loaded = false; // TODO: frame should be a type NdArray, but NdArray doesn't have ts definitions
          // TODO: there is a ts-ndarray that might work, though

          var frame = null;
          var baseUrl;
          var _ended = false;
          var calculatedWidth;
          var calculatedHeight;
          var _eventNames = ['canrecord', 'ended'];
          var _eventHandlers = {};
          var _topRight = {
            x: 0,
            y: 0,
            type: 'Point'
          };
          var _canvasSize = {
            x: 0,
            y: 0,
            type: 'XYSize'
          };
          /* eslint-disable no-unused-vars */
          // false eslint errors? weird.
          // @ts-ignore

          var size = 0; // @ts-ignore

          var frameIdx = 0; // @ts-ignore

          var paused = false;
          /* eslint-enable no-unused-vars */

          function loadImages() {
            var _config2;

            loaded = false;
            /* eslint-disable new-cap */

            dom_pixels_default()(baseUrl, (_config2 = _config) === null || _config2 === void 0 ? void 0 : _config2.mime, function (err, pixels) {
              var _config3, _config4;

              if (err) {
                console.error('**** quagga loadImages error:', err);
                throw new Error('error decoding pixels in loadImages');
              }

              loaded = true;

              if (true) {
                console.log('* InputStreamNode pixels.shape', pixels.shape);
              } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


              frame = pixels; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access

              var _pixels$shape = slicedToArray_default()(pixels.shape, 2);

              width = _pixels$shape[0];
              height = _pixels$shape[1];
              // eslint-disable-next-line no-nested-ternary
              calculatedWidth = ((_config3 = _config) === null || _config3 === void 0 ? void 0 : _config3.size) ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width; // eslint-disable-next-line no-nested-ternary

              calculatedHeight = ((_config4 = _config) === null || _config4 === void 0 ? void 0 : _config4.size) ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
              _canvasSize.x = calculatedWidth;
              _canvasSize.y = calculatedHeight;
              setTimeout(function () {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                publishEvent('canrecord', []);
              }, 0);
            });
          }

          function publishEvent(eventName, args) {
            var handlers = _eventHandlers[eventName];

            if (handlers && handlers.length > 0) {
              for (var j = 0; j < handlers.length; j++) {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                handlers[j].apply(inputStream, args);
              }
            }
          } // eslint-disable-next-line no-var,vars-on-top


          var inputStream = {
            trigger: publishEvent,
            getWidth: function getWidth() {
              return calculatedWidth;
            },
            getHeight: function getHeight() {
              return calculatedHeight;
            },
            setWidth: function setWidth(w) {
              calculatedWidth = w;
            },
            setHeight: function setHeight(h) {
              calculatedHeight = h;
            },
            getRealWidth: function getRealWidth() {
              return width;
            },
            getRealHeight: function getRealHeight() {
              return height;
            },
            setInputStream: function setInputStream(stream) {
              var _config5;

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              _config = stream; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access

              baseUrl = (_config5 = _config) === null || _config5 === void 0 ? void 0 : _config5.src;
              size = 1;
              loadImages();
            },
            ended: function ended() {
              return _ended;
            },
            setAttribute: function setAttribute() { },
            getConfig: function getConfig() {
              return _config;
            },
            pause: function pause() {
              paused = true;
            },
            play: function play() {
              paused = false;
            },
            setCurrentTime: function setCurrentTime(time) {
              frameIdx = time;
            },
            addEventListener: function addEventListener(event, f) {
              if (_eventNames.indexOf(event) !== -1) {
                if (!_eventHandlers[event]) {
                  _eventHandlers[event] = [];
                }

                _eventHandlers[event].push(f);
              }
            },
            clearEventHandlers: function clearEventHandlers() {
              Object.keys(_eventHandlers).forEach(function (ind) {
                return delete _eventHandlers[ind];
              });
            },
            setTopRight: function setTopRight(topRight) {
              _topRight.x = topRight.x;
              _topRight.y = topRight.y;
            },
            getTopRight: function getTopRight() {
              return _topRight;
            },
            setCanvasSize: function setCanvasSize(sz) {
              _canvasSize.x = sz.x;
              _canvasSize.y = sz.y;
            },
            getCanvasSize: function getCanvasSize() {
              return _canvasSize;
            },
            getFrame: function getFrame() {
              if (!loaded) {
                return null;
              } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


              return frame;
            }
          };
          return inputStream;
        }
      };
/* harmony default export */ var input_stream_node = (input_stream_node_inputStreamFactory);
// CONCATENATED MODULE: ./src/input/input_stream_factory.ts


/* harmony default export */ var input_stream_factory = (input_stream_browser);

      // EXTERNAL MODULE: ./src/input/frame_grabber_node.js
      var frame_grabber_node = __webpack_require__(99);
      var frame_grabber_node_default = /*#__PURE__*/__webpack_require__.n(frame_grabber_node);

      // EXTERNAL MODULE: ./src/common/cv_utils.js + 1 modules
      var cv_utils = __webpack_require__(8);

      // CONCATENATED MODULE: ./src/input/frame_grabber.js


      var TO_RADIANS = Math.PI / 180;

      function adjustCanvasSize(canvas, targetSize) {
        if (canvas.width !== targetSize.x) {
          if (true) {
            console.log('WARNING: canvas-size needs to be adjusted');
          }

          canvas.width = targetSize.x;
        }

        if (canvas.height !== targetSize.y) {
          if (true) {
            console.log('WARNING: canvas-size needs to be adjusted');
          }

          canvas.height = targetSize.y;
        }
      }

      var FrameGrabber = {};

      FrameGrabber.create = function (inputStream, canvas) {
        var _that = {};

        var _streamConfig = inputStream.getConfig();

        var _videoSize = Object(cv_utils["imageRef"])(inputStream.getRealWidth(), inputStream.getRealHeight());

        var _canvasSize = inputStream.getCanvasSize();

        var _size = Object(cv_utils["imageRef"])(inputStream.getWidth(), inputStream.getHeight());

        var topRight = inputStream.getTopRight();
        var _sx = topRight.x;
        var _sy = topRight.y;

        var _canvas;

        var _ctx = null;
        var _data = null;
        _canvas = canvas || document.createElement('canvas');
        _canvas.width = _canvasSize.x;
        _canvas.height = _canvasSize.y;
        _ctx = _canvas.getContext('2d');
        _data = new Uint8Array(_size.x * _size.y);

        if (true) {
          console.log('FrameGrabber', JSON.stringify({
            size: _size,
            topRight: topRight,
            videoSize: _videoSize,
            canvasSize: _canvasSize
          }));
        }
        /**
         * Uses the given array as frame-buffer
         */


        _that.attachData = function (data) {
          _data = data;
        };
        /**
         * Returns the used frame-buffer
         */


        _that.getData = function () {
          return _data;
        };
        /**
         * Fetches a frame from the input-stream and puts into the frame-buffer.
         * The image-data is converted to gray-scale and then half-sampled if configured.
         */


        _that.grab = function () {
          var doHalfSample = _streamConfig.halfSample;
          var frame = inputStream.getFrame();
          var drawable = frame;
          var drawAngle = 0;
          var ctxData;

          if (drawable) {
            adjustCanvasSize(_canvas, _canvasSize);

            if (_streamConfig.type === 'ImageStream') {
              drawable = frame.img;

              if (frame.tags && frame.tags.orientation) {
                switch (frame.tags.orientation) {
                  case 6:
                    drawAngle = 90 * TO_RADIANS;
                    break;

                  case 8:
                    drawAngle = -90 * TO_RADIANS;
                    break;
                }
              }
            }

            if (drawAngle !== 0) {
              _ctx.translate(_canvasSize.x / 2, _canvasSize.y / 2);

              _ctx.rotate(drawAngle);

              _ctx.drawImage(drawable, -_canvasSize.y / 2, -_canvasSize.x / 2, _canvasSize.y, _canvasSize.x);

              _ctx.rotate(-drawAngle);

              _ctx.translate(-_canvasSize.x / 2, -_canvasSize.y / 2);
            } else {
              _ctx.drawImage(drawable, 0, 0, _canvasSize.x, _canvasSize.y);
            }

            ctxData = _ctx.getImageData(_sx, _sy, _size.x, _size.y).data;

            if (doHalfSample) {
              Object(cv_utils["grayAndHalfSampleFromCanvasData"])(ctxData, _size, _data);
            } else {
              Object(cv_utils["computeGray"])(ctxData, _data, _streamConfig);
            }

            return true;
          }

          return false;
        };

        _that.getSize = function () {
          return _size;
        };

        return _that;
      };

/* harmony default export */ var frame_grabber = (FrameGrabber);

      // CONCATENATED MODULE: ./src/quagga/qworker.ts


      function qworker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function qworker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { qworker_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { qworker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      /* Worker functions. These are straight from the original quagga.js file.
       * Not presently used, as worker support is non-functional.  Keeping them around temporarily
       * to refer to until it is re-implemented. We may be able to fix/use some of this.
       */
      // TODO: need a typescript interface for FrameGrabber
      var workerPool = [];
      function updateWorkers(frameGrabber) {
        var availableWorker;

        if (workerPool.length) {
          availableWorker = workerPool.filter(function (workerThread) {
            return !workerThread.busy;
          })[0];

          if (availableWorker) {
            frameGrabber.attachData(availableWorker.imageData);

            if (frameGrabber.grab()) {
              availableWorker.busy = true;
              availableWorker.worker.postMessage({
                cmd: 'process',
                imageData: availableWorker.imageData
              }, [availableWorker.imageData.buffer]);
            }

            return true;
          } else {
            return false;
          }
        }

        return null;
      }

      function configForWorker(config) {
        return qworker_objectSpread(qworker_objectSpread({}, config), {}, {
          inputStream: qworker_objectSpread(qworker_objectSpread({}, config.inputStream), {}, {
            target: null
          })
        });
      } // @ts-ignore


      function workerInterface(factory) {
        if (factory) {
          var Quagga = factory()["default"];

          if (!Quagga) {
            // @ts-ignore
            self.postMessage({
              'event': 'error',
              message: 'Quagga could not be created'
            });
            return;
          }
        } // @ts-ignore


        var imageWrapper; // @ts-ignore

        function onProcessed(result) {
          self.postMessage({
            'event': 'processed',
            // @ts-ignore
            imageData: imageWrapper.data,
            result: result // @ts-ignore

          }, [imageWrapper.data.buffer]);
        }

        function workerInterfaceReady() {
          self.postMessage({
            'event': 'initialized',
            // @ts-ignore
            imageData: imageWrapper.data // @ts-ignore

          }, [imageWrapper.data.buffer]);
        } // @ts-ignore


        self.onmessage = function (e) {
          if (e.data.cmd === 'init') {
            var config = e.data.config;
            config.numOfWorkers = 0;
            imageWrapper = new Quagga.ImageWrapper({
              x: e.data.size.x,
              y: e.data.size.y
            }, new Uint8Array(e.data.imageData));
            Quagga.init(config, workerInterfaceReady, imageWrapper);
            Quagga.onProcessed(onProcessed);
          } else if (e.data.cmd === 'process') {
            // @ts-ignore
            imageWrapper.data = new Uint8Array(e.data.imageData);
            Quagga.start();
          } else if (e.data.cmd === 'setReaders') {
            Quagga.setReaders(e.data.readers);
          } else if (e.data.cmd === 'registerReader') {
            Quagga.registerReader(e.data.name, e.data.reader);
          }
        };
      }

      function generateWorkerBlob() {
        var blob, factorySource;
        /* jshint ignore:start */
        // @ts-ignore

        if (typeof __factorySource__ !== 'undefined') {
          // @ts-ignore
          factorySource = __factorySource__; // eslint-disable-line no-undef
        }
        /* jshint ignore:end */


        blob = new Blob(['(' + workerInterface.toString() + ')(' + factorySource + ');'], {
          type: 'text/javascript'
        });
        return window.URL.createObjectURL(blob);
      }

      function initWorker(config, inputStream, cb) {
        var blobURL = generateWorkerBlob();
        var worker = new Worker(blobURL);
        var workerThread = {
          worker: worker,
          imageData: new Uint8Array(inputStream.getWidth() * inputStream.getHeight()),
          busy: true
        };

        workerThread.worker.onmessage = function (e) {
          if (e.data.event === 'initialized') {
            URL.revokeObjectURL(blobURL);
            workerThread.busy = false;
            workerThread.imageData = new Uint8Array(e.data.imageData);

            if (true) {
              console.log('Worker initialized');
            }

            cb(workerThread);
          } else if (e.data.event === 'processed') {
            workerThread.imageData = new Uint8Array(e.data.imageData);
            workerThread.busy = false; // TODO: how to thread publishResult into here?
            // publishResult(e.data.result, workerThread.imageData);
          } else if (e.data.event === 'error') {
            if (true) {
              console.log('Worker error: ' + e.data.message);
            }
          }
        };

        workerThread.worker.postMessage({
          cmd: 'init',
          size: {
            x: inputStream.getWidth(),
            y: inputStream.getHeight()
          },
          imageData: workerThread.imageData,
          config: configForWorker(config)
        }, [workerThread.imageData.buffer]);
      }
      function adjustWorkerPool(capacity, config, inputStream, cb) {
        var increaseBy = capacity - workerPool.length;

        if (increaseBy === 0 && cb) {
          cb();
        } else if (increaseBy < 0) {
          var workersToTerminate = workerPool.slice(increaseBy);
          workersToTerminate.forEach(function (workerThread) {
            workerThread.worker.terminate();

            if (true) {
              console.log('Worker terminated!');
            }
          });
          workerPool = workerPool.slice(0, increaseBy);

          if (cb) {
            cb();
          }
        } else {
          var workerInitialized = function workerInitialized(workerThread) {
            workerPool.push(workerThread);

            if (workerPool.length >= capacity && cb) {
              cb();
            }
          };

          if (config) {
            for (var i = 0; i < increaseBy; i++) {
              initWorker(config, inputStream, workerInitialized);
            }
          }
        }
      }
      function qworker_setReaders(readers) {
        workerPool.forEach(function (workerThread) {
          return workerThread.worker.postMessage({
            cmd: 'setReaders',
            readers: readers
          });
        });
      }
      function qworker_registerReader(name, reader) {
        workerPool.forEach(function (workerThread) {
          return workerThread.worker.postMessage({
            cmd: 'registerReader',
            name: name,
            reader: reader
          });
        });
      }
      // CONCATENATED MODULE: ./src/quagga/setupInputStream.ts
      // TODO: need to create an InputStream typescript interface, so we don't have an "any" in the next line
      function setupInputStream() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LiveStream';
        var viewport = arguments.length > 1 ? arguments[1] : undefined;
        var InputStream = arguments.length > 2 ? arguments[2] : undefined;

        switch (type) {
          case 'VideoStream':
            {
              var video = document.createElement('video');
              return {
                video: video,
                inputStream: InputStream.createVideoStream(video)
              };
            }

          case 'ImageStream':
            return {
              inputStream: InputStream.createImageStream()
            };

          case 'LiveStream':
            {
              var _video = null;

              if (viewport) {
                _video = viewport.querySelector('video');

                if (!_video) {
                  _video = document.createElement('video');
                  viewport.appendChild(_video);
                }
              }

              return {
                video: _video,
                inputStream: InputStream.createLiveStream(_video)
              };
            }

          default:
            console.error("* setupInputStream invalid type ".concat(type));
            return {
              video: null,
              inputStream: null
            };
        }
      }
      // CONCATENATED MODULE: ./src/quagga/transform.ts
      /* eslint-disable no-param-reassign */
      function moveBox(box, xOffset, yOffset) {
        var corner = box.length;

        while (corner--) {
          box[corner][0] += xOffset;
          box[corner][1] += yOffset;
        }
      }
      function moveLine(line, xOffset, yOffset) {
        line[0].x += xOffset;
        line[0].y += yOffset;
        line[1].x += xOffset;
        line[1].y += yOffset;
      }
      // CONCATENATED MODULE: ./src/quagga/quagga.ts

















      var InputStream = typeof window === 'undefined' ? input_stream_node : input_stream_factory;
      var quagga_FrameGrabber = typeof window === 'undefined' ? frame_grabber_node_default.a : frame_grabber;

      var quagga_Quagga = /*#__PURE__*/function () {
        function Quagga() {
          var _this = this;

          classCallCheck_default()(this, Quagga);

          defineProperty_default()(this, "context", new QuaggaContext_QuaggaContext());

          defineProperty_default()(this, "canRecord", function (callback) {
            var _this$context$config;

            if (!_this.context.config) {
              return;
            }

            barcode_locator["a" /* default */].checkImageConstraints(_this.context.inputStream, (_this$context$config = _this.context.config) === null || _this$context$config === void 0 ? void 0 : _this$context$config.locator);

            _this.initCanvas();

            _this.context.framegrabber = quagga_FrameGrabber.create(_this.context.inputStream, _this.context.canvasContainer.dom.image);

            if (_this.context.config.numOfWorkers === undefined) {
              _this.context.config.numOfWorkers = 0;
            }

            adjustWorkerPool(_this.context.config.numOfWorkers, _this.context.config, _this.context.inputStream, function () {
              var _this$context$config2;

              if (((_this$context$config2 = _this.context.config) === null || _this$context$config2 === void 0 ? void 0 : _this$context$config2.numOfWorkers) === 0) {
                _this.initializeData();
              }

              _this.ready(callback);
            });
          });

          defineProperty_default()(this, "update", function () {
            if (_this.context.onUIThread) {
              var workersUpdated = updateWorkers(_this.context.framegrabber);

              if (!workersUpdated) {
                var _this$context$inputIm;

                _this.context.framegrabber.attachData((_this$context$inputIm = _this.context.inputImageWrapper) === null || _this$context$inputIm === void 0 ? void 0 : _this$context$inputIm.data);

                if (_this.context.framegrabber.grab()) {
                  if (!workersUpdated) {
                    _this.locateAndDecode();
                  }
                }
              }
            } else {
              var _this$context$inputIm2;

              _this.context.framegrabber.attachData((_this$context$inputIm2 = _this.context.inputImageWrapper) === null || _this$context$inputIm2 === void 0 ? void 0 : _this$context$inputIm2.data);

              _this.context.framegrabber.grab();

              _this.locateAndDecode();
            }
          });
        }

        createClass_default()(Quagga, [{
          key: "initBuffers",
          value: function initBuffers(imageWrapper) {
            if (!this.context.config) {
              return;
            }

            var _initBuffers2 = initBuffers_initBuffers(this.context.inputStream, imageWrapper, this.context.config.locator),
              inputImageWrapper = _initBuffers2.inputImageWrapper,
              boxSize = _initBuffers2.boxSize;

            this.context.inputImageWrapper = inputImageWrapper;
            this.context.boxSize = boxSize;
          }
        }, {
          key: "initializeData",
          value: function initializeData(imageWrapper) {
            if (!this.context.config) {
              return;
            }

            this.initBuffers(imageWrapper);
            this.context.decoder = barcode_decoder.create(this.context.config.decoder, this.context.inputImageWrapper);
          }
        }, {
          key: "getViewPort",
          value: function getViewPort() {
            if (!this.context.config || !this.context.config.inputStream) {
              return null;
            }

            var target = this.context.config.inputStream.target;
            return getViewPort_getViewPort(target);
          }
        }, {
          key: "ready",
          value: function ready(callback) {
            this.context.inputStream.play();
            callback();
          }
        }, {
          key: "initCanvas",
          value: function initCanvas() {
            var container = initCanvas_initCanvas(this.context);

            if (!container) {
              return;
            }

            var ctx = container.ctx,
              dom = container.dom;
            this.context.canvasContainer.dom.image = dom.image;
            this.context.canvasContainer.dom.overlay = dom.overlay;
            this.context.canvasContainer.ctx.image = ctx.image;
            this.context.canvasContainer.ctx.overlay = ctx.overlay;
          }
        }, {
          key: "initInputStream",
          value: function initInputStream(callback) {
            if (!this.context.config || !this.context.config.inputStream) {
              return;
            }

            var _this$context$config$ = this.context.config.inputStream,
              inputType = _this$context$config$.type,
              constraints = _this$context$config$.constraints;

            var _setupInputStream = setupInputStream(inputType, this.getViewPort(), InputStream),
              video = _setupInputStream.video,
              inputStream = _setupInputStream.inputStream;

            if (inputType === 'LiveStream' && video) {
              camera_access.request(video, constraints).then(function () {
                return inputStream.trigger('canrecord');
              })["catch"](function (err) {
                return callback(err);
              });
            }

            inputStream.setAttribute('preload', 'auto');
            inputStream.setInputStream(this.context.config.inputStream);
            inputStream.addEventListener('canrecord', this.canRecord.bind(undefined, callback));
            this.context.inputStream = inputStream;
          }
        }, {
          key: "getBoundingBoxes",
          value: function getBoundingBoxes() {
            var _this$context$config3;

            return ((_this$context$config3 = this.context.config) === null || _this$context$config3 === void 0 ? void 0 : _this$context$config3.locate) ? barcode_locator["a" /* default */].locate() : [[Object(gl_vec2["clone"])(this.context.boxSize[0]), Object(gl_vec2["clone"])(this.context.boxSize[1]), Object(gl_vec2["clone"])(this.context.boxSize[2]), Object(gl_vec2["clone"])(this.context.boxSize[3])]];
          } // TODO: need a typescript type for result here.
          // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

        }, {
          key: "transformResult",
          value: function transformResult(result) {
            var _this2 = this;

            var topRight = this.context.inputStream.getTopRight();
            var xOffset = topRight.x;
            var yOffset = topRight.y;

            if (xOffset === 0 && yOffset === 0) {
              return;
            }

            if (result.barcodes) {
              // TODO: BarcodeInfo may not be the right type here.
              result.barcodes.forEach(function (barcode) {
                return _this2.transformResult(barcode);
              });
            }

            if (result.line && result.line.length === 2) {
              moveLine(result.line, xOffset, yOffset);
            }

            if (result.box) {
              moveBox(result.box, xOffset, yOffset);
            }

            if (result.boxes && result.boxes.length > 0) {
              for (var i = 0; i < result.boxes.length; i++) {
                moveBox(result.boxes[i], xOffset, yOffset);
              }
            }
          }
        }, {
          key: "addResult",
          value: function addResult(result, imageData) {
            var _this3 = this;

            if (!imageData || !this.context.resultCollector) {
              return;
            } // TODO: Figure out what data structure holds a "barcodes" result, if any...


            if (result.barcodes) {
              result.barcodes.filter(function (barcode) {
                return barcode.codeResult;
              }).forEach(function (barcode) {
                return _this3.addResult(barcode, imageData);
              });
            } else if (result.codeResult) {
              this.context.resultCollector.addResult(imageData, this.context.inputStream.getCanvasSize(), result.codeResult);
            }
          } // eslint-disable-next-line class-methods-use-this

        }, {
          key: "hasCodeResult",
          value: function hasCodeResult(result) {
            return !!(result && (result.barcodes ? result.barcodes.some(function (barcode) {
              return barcode.codeResult;
            }) : result.codeResult));
          } // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

        }, {
          key: "publishResult",
          value: function publishResult() {
            var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var imageData = arguments.length > 1 ? arguments[1] : undefined;
            var resultToPublish = result;

            if (result && this.context.onUIThread) {
              this.transformResult(result);
              this.addResult(result, imageData);
              resultToPublish = result.barcodes || result;
            }

            events.publish('processed', resultToPublish);

            if (this.hasCodeResult(result)) {
              events.publish('detected', resultToPublish);
            }
          }
        }, {
          key: "locateAndDecode",
          value: function locateAndDecode() {
            var boxes = this.getBoundingBoxes();

            if (boxes) {
              var _this$context$inputIm3;

              var decodeResult = this.context.decoder.decodeFromBoundingBoxes(boxes) || {};
              decodeResult.boxes = boxes;
              this.publishResult(decodeResult, (_this$context$inputIm3 = this.context.inputImageWrapper) === null || _this$context$inputIm3 === void 0 ? void 0 : _this$context$inputIm3.data);
            } else {
              var imageResult = this.context.decoder.decodeFromImage(this.context.inputImageWrapper);

              if (imageResult) {
                var _this$context$inputIm4;

                this.publishResult(imageResult, (_this$context$inputIm4 = this.context.inputImageWrapper) === null || _this$context$inputIm4 === void 0 ? void 0 : _this$context$inputIm4.data);
              } else {
                this.publishResult();
              }
            }
          }
        }, {
          key: "startContinuousUpdate",
          value: function startContinuousUpdate() {
            var _this$context$config4,
              _this4 = this;

            var next = null;
            var delay = 1000 / (((_this$context$config4 = this.context.config) === null || _this$context$config4 === void 0 ? void 0 : _this$context$config4.frequency) || 60);
            this.context.stopped = false;
            var context = this.context;

            var newFrame = function newFrame(timestamp) {
              next = next || timestamp;

              if (!context.stopped) {
                if (timestamp >= next) {
                  next += delay;

                  _this4.update();
                }

                window.requestAnimationFrame(newFrame);
              }
            };

            newFrame(performance.now());
          }
        }, {
          key: "start",
          value: function start() {
            var _this$context$config5, _this$context$config6;

            if (this.context.onUIThread && ((_this$context$config5 = this.context.config) === null || _this$context$config5 === void 0 ? void 0 : (_this$context$config6 = _this$context$config5.inputStream) === null || _this$context$config6 === void 0 ? void 0 : _this$context$config6.type) === 'LiveStream') {
              this.startContinuousUpdate();
            } else {
              this.update();
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            var _this$context$config7;

            this.context.stopped = true;
            adjustWorkerPool(0);

            if (((_this$context$config7 = this.context.config) === null || _this$context$config7 === void 0 ? void 0 : _this$context$config7.inputStream) && this.context.config.inputStream.type === 'LiveStream') {
              camera_access.release();
              this.context.inputStream.clearEventHandlers();
            }
          }
        }, {
          key: "setReaders",
          value: function setReaders(readers) {
            if (this.context.decoder) {
              this.context.decoder.setReaders(readers);
            }

            qworker_setReaders(readers);
          }
        }, {
          key: "registerReader",
          value: function registerReader(name, reader) {
            barcode_decoder.registerReader(name, reader);

            if (this.context.decoder) {
              this.context.decoder.registerReader(name, reader);
            }

            qworker_registerReader(name, reader);
          }
        }]);

        return Quagga;
      }();


      // CONCATENATED MODULE: ./src/quagga.js

      // eslint-disable-line no-unused-vars











      var instance = new quagga_Quagga();
      var _context = instance.context;
      var QuaggaJSStaticInterface = {
        init: function init(config, cb, imageWrapper) {
          var quaggaInstance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : instance;
          var promise;

          if (!cb) {
            promise = new Promise(function (resolve, reject) {
              cb = function cb(err) {
                err ? reject(err) : resolve();
              };
            });
          }

          quaggaInstance.context.config = merge_default()({}, config_config, config); // TODO #179: pending restructure in Issue #179, we are temp disabling workers

          if (quaggaInstance.context.config.numOfWorkers > 0) {
            quaggaInstance.context.config.numOfWorkers = 0;
          }

          if (imageWrapper) {
            quaggaInstance.context.onUIThread = false;
            quaggaInstance.initializeData(imageWrapper);

            if (cb) {
              cb();
            }
          } else {
            quaggaInstance.initInputStream(cb);
          }

          return promise;
        },
        start: function start() {
          instance.start();
        },
        stop: function stop() {
          instance.stop();
        },
        pause: function pause() {
          _context.stopped = true;
        },
        onDetected: function onDetected(callback) {
          if (!callback || typeof callback !== 'function' && (typeof_default()(callback) !== 'object' || !callback.callback)) {
            console.trace('* warning: Quagga.onDetected called with invalid callback, ignoring');
            return;
          }

          events.subscribe('detected', callback);
        },
        offDetected: function offDetected(callback) {
          events.unsubscribe('detected', callback);
        },
        onProcessed: function onProcessed(callback) {
          if (!callback || typeof callback !== 'function' && (typeof_default()(callback) !== 'object' || !callback.callback)) {
            console.trace('* warning: Quagga.onProcessed called with invalid callback, ignoring');
            return;
          }

          events.subscribe('processed', callback);
        },
        offProcessed: function offProcessed(callback) {
          events.unsubscribe('processed', callback);
        },
        setReaders: function setReaders(readers) {
          if (!readers) {
            console.trace('* warning: Quagga.setReaders called with no readers, ignoring');
            return;
          }

          instance.setReaders(readers);
        },
        registerReader: function registerReader(name, reader) {
          if (!name) {
            console.trace('* warning: Quagga.registerReader called with no name, ignoring');
            return;
          }

          if (!reader) {
            console.trace('* warning: Quagga.registerReader called with no reader, ignoring');
            return;
          }

          instance.registerReader(name, reader);
        },
        registerResultCollector: function registerResultCollector(resultCollector) {
          if (resultCollector && typeof resultCollector.addResult === 'function') {
            _context.resultCollector = resultCollector;
          }
        },

        get canvas() {
          return _context.canvasContainer;
        },

        decodeSingle: function decodeSingle(config, resultCallback) {
          var _this = this;

          var quaggaInstance = new quagga_Quagga();
          config = merge_default()({
            inputStream: {
              type: 'ImageStream',
              sequence: false,
              size: 800,
              src: config.src
            },
            numOfWorkers: true && config.debug ? 0 : 1,
            locator: {
              halfSample: false
            }
          }, config); // TODO #175: restructure worker support so that it will work with typescript using worker-loader
          // https://webpack.js.org/loaders/worker-loader/

          if (config.numOfWorkers > 0) {
            config.numOfWorkers = 0;
          } // workers require Worker and Blob support presently, so if no Blob or Worker then set
          // workers to 0.


          if (config.numOfWorkers > 0 && (typeof Blob === 'undefined' || typeof Worker === 'undefined')) {
            console.warn('* no Worker and/or Blob support - forcing numOfWorkers to 0');
            config.numOfWorkers = 0;
          }

          return new Promise(function (resolve, reject) {
            try {
              _this.init(config, function () {
                events.once('processed', function (result) {
                  quaggaInstance.stop();

                  if (resultCallback) {
                    resultCallback.call(null, result);
                  }

                  resolve(result);
                }, true);
                quaggaInstance.start();
              }, null, quaggaInstance);
            } catch (err) {
              reject(err);
            }
          });
        },

        // add the usually expected "default" for use with require, build step won't allow us to
        // write to module.exports so do it here.
        get default() {
          return QuaggaJSStaticInterface;
        },

        BarcodeReader: barcode_reader,
        CameraAccess: camera_access,
        ImageDebug: image_debug["a" /* default */],
        ImageWrapper: image_wrapper["a" /* default */],
        ResultCollector: result_collector
      };
/* harmony default export */ var quagga = __webpack_exports__["default"] = (QuaggaJSStaticInterface); // export BarcodeReader and other utilities for external plugins



      /***/
    })
/******/])["default"];
});