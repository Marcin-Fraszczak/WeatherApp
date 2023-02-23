"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findIcon": () => (/* binding */ findIcon)
/* harmony export */ });
/*
Condition codes from weatherapi.com to decide which icon will be used
 */
var findIcon = function findIcon(code, timeOfDay) {
  var translator = {
    1000: "clear-".concat(timeOfDay),
    1003: "partly-cloudy-".concat(timeOfDay),
    1006: "cloudy",
    1009: "cloudy",
    1030: "cloudy",
    1063: "rain",
    1066: "snow",
    1069: "sleet",
    1072: "sleet",
    1087: "thunderstorm",
    1114: "snow",
    1117: "snow",
    1135: "cloudy",
    1147: "cloudy",
    1150: "rain",
    1153: "rain",
    1168: "rain",
    1171: "rain",
    1180: "rain",
    1183: "rain",
    1186: "rain",
    1189: "rain",
    1192: "rain",
    1195: "rain",
    1198: "rain",
    1201: "rain",
    1204: "sleet",
    1207: "sleet",
    1210: "snow",
    1213: "snow",
    1216: "snow",
    1219: "snow",
    1222: "snow",
    1225: "snow",
    1237: "snow",
    1240: "rain",
    1243: "rain",
    1246: "rain",
    1249: "sleet",
    1252: "sleet",
    1255: "snow",
    1258: "snow",
    1261: "sleet",
    1264: "sleet",
    1273: "thunderstorm",
    1276: "thunderstorm",
    1279: "thunderstorm",
    1282: "thunderstorm"
  };
  return "assets/icons/".concat(translator[code], ".svg");
};

/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forecast": () => (/* binding */ Forecast)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);



/*
Weather module as a class
 */
var Forecast = /*#__PURE__*/function () {
  function Forecast(el) {
    var _this = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Forecast);
    this.el = el;
    this.city = el.querySelector("span.city__name");
    this.temperature = el.querySelector("span.temperature__value");
    this.pressure = el.querySelector("span.pressure__value");
    this.humidity = el.querySelector("span.humidity__value");
    this.wind = el.querySelector("span.wind-speed__value");
    this.icon = el.querySelector("div.weather__icon").querySelector("img");
    this.forecast = el.querySelector("ul.weather__forecast").querySelectorAll("li");
    this.closeButton = el.querySelector(".btn--close");
    this.closeButton.addEventListener("click", function () {
      _this.el.parentElement.removeChild(_this.el);
    });
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Forecast, [{
    key: "updateData",
    value: function updateData(city, temp, press, humid, wind, cond, timeOfDay) {
      this.city.textContent = city;
      this.temperature.textContent = temp;
      this.pressure.textContent = press + "hPa";
      this.humidity.textContent = humid + "%";
      this.wind.textContent = wind + "m/s";
      this.icon.src = (0,_conditions__WEBPACK_IMPORTED_MODULE_2__.findIcon)(cond, timeOfDay);
    }
  }, {
    key: "updateForecast",
    value: function updateForecast(forecastList) {
      this.forecast.forEach(function (day, index) {
        day.querySelector(".day").textContent = forecastList[index]["day"];
        day.querySelector(".temperature__value").textContent = forecastList[index]['temp'];
        day.querySelector("img").src = (0,_conditions__WEBPACK_IMPORTED_MODULE_2__.findIcon)(forecastList[index]['condition'], "day");
      });
    }
  }]);
  return Forecast;
}();

/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractData": () => (/* binding */ extractData),
/* harmony export */   "normalize": () => (/* binding */ normalize)
/* harmony export */ });
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* functions to help with data manipulation */


function extractData(data, rawCity) {
  var city = data['location']['name'];
  city = checkSimilarity(city, rawCity);
  var time0fDay = dayOrNight(data['location']['localtime']);
  var condition = data['current']['condition']['code'];
  var temp = data['current']['temp_c'];
  var pressure = data['current']['pressure_mb'];
  var humidity = data['current']['humidity'];
  var wind = convertWindSpeed(data['current']['wind_kph']);
  var future = futureForecast(data['forecast']['forecastday'].slice(1));
  var weatherTab = document.querySelector("div.module__weather");
  var clonedWeatherTab = weatherTab.cloneNode(true);
  weatherTab.parentElement.appendChild(clonedWeatherTab);
  var forecast = new _forecastClass__WEBPACK_IMPORTED_MODULE_0__.Forecast(clonedWeatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
  forecast.updateForecast(future);
  clonedWeatherTab.hidden = false;
}
var checkSimilarity = function checkSimilarity(city, rawCity) {
  if (!rawCity) {
    return city;
  } else if (city.toLowerCase() === normalize(rawCity).toLowerCase()) {
    return capitalize(rawCity);
  } else {
    return city;
  }
};
var normalize = function normalize(input) {
  var result = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  result = result.replace(/\u0142/g, "l");
  return result;
};
var capitalize = function capitalize(s) {
  if (typeof s !== 'string') return '';
  var result = s.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return result.join(" ");
};
var dayOrNight = function dayOrNight(date) {
  var hour = new Date(date).getHours();
  if (6 < hour && hour < 20) {
    return "day";
  } else {
    return "night";
  }
};
var convertWindSpeed = function convertWindSpeed(kph) {
  return Math.round(kph / 3.6 * 10) / 10;
};
var futureForecast = function futureForecast(arr) {
  return arr.map(function (day) {
    return {
      day: getWeekday(day['date']),
      temp: day['day']['avgtemp_c'],
      condition: day['day']['condition']['code']
    };
  });
};
var getWeekday = function getWeekday(date) {
  return capitalize(new Date(date).toLocaleString('PL', {
    weekday: 'long'
  }));
};

/***/ }),

/***/ 32:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 33:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 36:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 34:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 35:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da9825400fbd9c62d48f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU07SUFDN0MsQ0FBQztFQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFNdUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlSLElBQUksRUFBSztFQUN6QixPQUFPVixVQUFVLENBQUMsSUFBSVksSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQ1MsY0FBYyxDQUFDLElBQUksRUFBRTtJQUFDQyxPQUFPLEVBQUU7RUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDOzs7Ozs7Ozs7OztBQzNFYztBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKK0M7QUFDL0M7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZEQUFhO0FBQy9DO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCa0M7QUFDbkI7QUFDZixNQUFNLHNEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmtDO0FBQ1M7QUFDNUI7QUFDZixZQUFZLDJEQUFXO0FBQ3ZCLFNBQVMsc0RBQU87QUFDaEI7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvY29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9mb3JlY2FzdENsYXNzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5Db25kaXRpb24gY29kZXMgZnJvbSB3ZWF0aGVyYXBpLmNvbSB0byBkZWNpZGUgd2hpY2ggaWNvbiB3aWxsIGJlIHVzZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRJY29uID0gKGNvZGUsIHRpbWVPZkRheSkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0b3IgPSB7XG4gICAgICAgIDEwMDA6IGBjbGVhci0ke3RpbWVPZkRheX1gLFxuICAgICAgICAxMDAzOiBgcGFydGx5LWNsb3VkeS0ke3RpbWVPZkRheX1gLFxuICAgICAgICAxMDA2OiBgY2xvdWR5YCxcbiAgICAgICAgMTAwOTogYGNsb3VkeWAsXG4gICAgICAgIDEwMzA6IGBjbG91ZHlgLFxuICAgICAgICAxMDYzOiBgcmFpbmAsXG4gICAgICAgIDEwNjY6IGBzbm93YCxcbiAgICAgICAgMTA2OTogYHNsZWV0YCxcbiAgICAgICAgMTA3MjogYHNsZWV0YCxcbiAgICAgICAgMTA4NzogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDExMTQ6IGBzbm93YCxcbiAgICAgICAgMTExNzogYHNub3dgLFxuICAgICAgICAxMTM1OiBgY2xvdWR5YCxcbiAgICAgICAgMTE0NzogYGNsb3VkeWAsXG4gICAgICAgIDExNTA6IGByYWluYCxcbiAgICAgICAgMTE1MzogYHJhaW5gLFxuICAgICAgICAxMTY4OiBgcmFpbmAsXG4gICAgICAgIDExNzE6IGByYWluYCxcbiAgICAgICAgMTE4MDogYHJhaW5gLFxuICAgICAgICAxMTgzOiBgcmFpbmAsXG4gICAgICAgIDExODY6IGByYWluYCxcbiAgICAgICAgMTE4OTogYHJhaW5gLFxuICAgICAgICAxMTkyOiBgcmFpbmAsXG4gICAgICAgIDExOTU6IGByYWluYCxcbiAgICAgICAgMTE5ODogYHJhaW5gLFxuICAgICAgICAxMjAxOiBgcmFpbmAsXG4gICAgICAgIDEyMDQ6IGBzbGVldGAsXG4gICAgICAgIDEyMDc6IGBzbGVldGAsXG4gICAgICAgIDEyMTA6IGBzbm93YCxcbiAgICAgICAgMTIxMzogYHNub3dgLFxuICAgICAgICAxMjE2OiBgc25vd2AsXG4gICAgICAgIDEyMTk6IGBzbm93YCxcbiAgICAgICAgMTIyMjogYHNub3dgLFxuICAgICAgICAxMjI1OiBgc25vd2AsXG4gICAgICAgIDEyMzc6IGBzbm93YCxcbiAgICAgICAgMTI0MDogYHJhaW5gLFxuICAgICAgICAxMjQzOiBgcmFpbmAsXG4gICAgICAgIDEyNDY6IGByYWluYCxcbiAgICAgICAgMTI0OTogYHNsZWV0YCxcbiAgICAgICAgMTI1MjogYHNsZWV0YCxcbiAgICAgICAgMTI1NTogYHNub3dgLFxuICAgICAgICAxMjU4OiBgc25vd2AsXG4gICAgICAgIDEyNjE6IGBzbGVldGAsXG4gICAgICAgIDEyNjQ6IGBzbGVldGAsXG4gICAgICAgIDEyNzM6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjc2OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI3OTogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyODI6IGB0aHVuZGVyc3Rvcm1gLFxuICAgIH1cbiAgICByZXR1cm4gYGFzc2V0cy9pY29ucy8ke3RyYW5zbGF0b3JbY29kZV19LnN2Z2Bcbn0iLCJpbXBvcnQge2ZpbmRJY29ufSBmcm9tIFwiLi9jb25kaXRpb25zXCI7XG4vKlxuV2VhdGhlciBtb2R1bGUgYXMgYSBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgRm9yZWNhc3Qge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbFxuICAgICAgICB0aGlzLmNpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jaXR5X19uYW1lXCIpXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi50ZW1wZXJhdHVyZV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnByZXNzdXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uaHVtaWRpdHlfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMud2luZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLndpbmQtc3BlZWRfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaWNvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJkaXYud2VhdGhlcl9faWNvblwiKS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSBlbC5xdWVyeVNlbGVjdG9yKFwidWwud2VhdGhlcl9fZm9yZWNhc3RcIikucXVlcnlTZWxlY3RvckFsbChcImxpXCIpXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWwpXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzcywgaHVtaWQsIHdpbmQsIGNvbmQsIHRpbWVPZkRheSkge1xuICAgICAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSBjaXR5XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB0ZW1wXG4gICAgICAgIHRoaXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBwcmVzcyArIFwiaFBhXCJcbiAgICAgICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGh1bWlkICsgXCIlXCJcbiAgICAgICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gd2luZCArIFwibS9zXCJcbiAgICAgICAgdGhpcy5pY29uLnNyYyA9IGZpbmRJY29uKGNvbmQsIHRpbWVPZkRheSlcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JlY2FzdChmb3JlY2FzdExpc3QpIHtcbiAgICAgICAgdGhpcy5mb3JlY2FzdC5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi5kYXlcIikudGV4dENvbnRlbnQgPSBmb3JlY2FzdExpc3RbaW5kZXhdW1wiZGF5XCJdXG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZV9fdmFsdWVcIikudGV4dENvbnRlbnQgPSBmb3JlY2FzdExpc3RbaW5kZXhdWyd0ZW1wJ11cbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IGZpbmRJY29uKGZvcmVjYXN0TGlzdFtpbmRleF1bJ2NvbmRpdGlvbiddLCBcImRheVwiKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBmdW5jdGlvbnMgdG8gaGVscCB3aXRoIGRhdGEgbWFuaXB1bGF0aW9uICovXG5pbXBvcnQge0ZvcmVjYXN0fSBmcm9tIFwiLi9mb3JlY2FzdENsYXNzXCI7XG5cbmV4cG9ydCB7bm9ybWFsaXplLCBleHRyYWN0RGF0YX1cblxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhLCByYXdDaXR5KSB7XG4gICAgbGV0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjaXR5ID0gY2hlY2tTaW1pbGFyaXR5KGNpdHksIHJhd0NpdHkpXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5jb25zdCBjaGVja1NpbWlsYXJpdHkgPSAoY2l0eSwgcmF3Q2l0eSkgPT4ge1xuICAgIGlmICghcmF3Q2l0eSkge1xuICAgICAgICByZXR1cm4gY2l0eVxuICAgIH0gZWxzZSBpZiAoY2l0eS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemUocmF3Q2l0eSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZShyYXdDaXR5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfVxufVxuXG5jb25zdCBub3JtYWxpemUgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gaW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICBsZXQgcmVzdWx0ID0gcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGE5ODI1NDAwZmJkOWM2MmQ0OGZcIikiXSwibmFtZXMiOlsiZmluZEljb24iLCJjb2RlIiwidGltZU9mRGF5IiwidHJhbnNsYXRvciIsImNvbmNhdCIsIkZvcmVjYXN0IiwiZWwiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNpdHkiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGVyYXR1cmUiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImljb24iLCJmb3JlY2FzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInVwZGF0ZURhdGEiLCJ0ZW1wIiwicHJlc3MiLCJodW1pZCIsImNvbmQiLCJ0ZXh0Q29udGVudCIsInNyYyIsInVwZGF0ZUZvcmVjYXN0IiwiZm9yZWNhc3RMaXN0IiwiZm9yRWFjaCIsImRheSIsImluZGV4Iiwibm9ybWFsaXplIiwiZXh0cmFjdERhdGEiLCJkYXRhIiwicmF3Q2l0eSIsImNoZWNrU2ltaWxhcml0eSIsInRpbWUwZkRheSIsImRheU9yTmlnaHQiLCJjb25kaXRpb24iLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlIiwiZnV0dXJlRm9yZWNhc3QiLCJzbGljZSIsIndlYXRoZXJUYWIiLCJkb2N1bWVudCIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImhpZGRlbiIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZSIsImlucHV0IiwicmVzdWx0IiwicmVwbGFjZSIsInMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJkYXRlIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImtwaCIsIk1hdGgiLCJyb3VuZCIsImFyciIsImdldFdlZWtkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiXSwic291cmNlUm9vdCI6IiJ9