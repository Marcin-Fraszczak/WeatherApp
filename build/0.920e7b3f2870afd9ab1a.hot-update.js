"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




/*
Parametrized config for fetching
 */
var key = '46192b1a692f4486a0d181847232202 ';
var days = 6;
var city = "auto:ip";
var url = "http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days);
var weatherTab = document.querySelector("div.module__weather");
weatherTab.hidden = false;
var form = document.querySelector(".module__form");
var addCityButton = document.querySelector("#add-city");
addCityButton.addEventListener("click", showInput);
function showInput(e) {
  form.hidden = false;
}
var Forecast = /*#__PURE__*/function () {
  function Forecast(el) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Forecast);
    this.el = el;
    this.city = el.querySelector("span.city__name");
    this.temperature = el.querySelector("span.temperature__value");
    this.pressure = el.querySelector("span.pressure__value");
    this.humidity = el.querySelector("span.humidity__value");
    this.wind = el.querySelector("span.wind-speed__value");
    this.icon = el.querySelector("div.weather__icon").querySelector("img");
    this.forecast = el.querySelector("ul.weather__forecast").querySelectorAll("li");
    this.closeButton = el.querySelector(".btn--close");
    // this.closeButton.addEventListener("click", closeObject)
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Forecast, [{
    key: "updateData",
    value: function updateData(city, temp, press, humid, wind, cond, timeOfDay) {
      this.city.textContent = city;
      this.temperature.textContent = temp;
      this.pressure.textContent = press + "hPa";
      this.humidity.textContent = humid + "%";
      this.wind.textContent = wind + "m/s";
      this.icon.src = findIcon(cond, timeOfDay);
    }
  }, {
    key: "updateForecast",
    value: function updateForecast(forecastList) {
      this.forecast.forEach(function (day, index) {
        day.querySelector(".day").textContent = forecastList[index]["day"];
        day.querySelector(".temperature__value").textContent = forecastList[index]['temp'];
        day.querySelector("img").src = findIcon(forecastList[index]['condition'], "day");
      });
    }
  }]);
  return Forecast;
}();
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
function extractData(data) {
  var city = data['location']['name'];
  var time0fDay = dayOrNight(data['location']['localtime']);
  var condition = data['current']['condition']['code'];
  var temp = data['current']['temp_c'];
  var pressure = data['current']['pressure_mb'];
  var humidity = data['current']['humidity'];
  var wind = convertWindSpeed(data['current']['wind_kph']);
  var future = futureForecast(data['forecast']['forecastday'].slice(1));
  var weatherTab = document.querySelector("div.module__weather");
  var forecast = new Forecast(weatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
  forecast.updateForecast(future);
}
var capitalize = function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s[0].toUpperCase() + s.slice(1);
};
var getWeekday = function getWeekday(date) {
  return capitalize(new Date(date).toLocaleString('PL', {
    weekday: 'long'
  }));
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
var dayOrNight = function dayOrNight(date) {
  var hour = new Date(date).getHours();
  if (6 < hour && hour < 20) {
    return "day";
  } else {
    return "night";
  }
};
(function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(url) {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(url);
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          data = _context.sent;
          // console.log(data)
          extractData(data);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
})()(url);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb84b39b8de270b9a7ae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBSSxJQUFBO1VBQ1Y7VUFDQXBDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUErQixRQUFBLENBQUFNLElBQUE7TUFBQTtJQUFBLEdBQUFWLE9BQUE7RUFBQSxDQUNwQjtFQUFBLGlCQUFBVyxFQUFBO0lBQUEsT0FBQWYsSUFBQSxDQUFBZ0IsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxLQUFFakYsR0FBRyxDQUFDOzs7Ozs7OztVQy9KUCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5QYXJhbWV0cml6ZWQgY29uZmlnIGZvciBmZXRjaGluZ1xuICovXG5jb25zdCBrZXkgPSAnNDYxOTJiMWE2OTJmNDQ4NmEwZDE4MTg0NzIzMjIwMiAnXG5sZXQgZGF5cyA9IDZcbmxldCBjaXR5ID0gXCJhdXRvOmlwXCJcbmNvbnN0IHVybCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7Y2l0eX0mZGF5cz0ke2RheXN9YFxuXG5cbmNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxud2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG5jb25zdCBhZGRDaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2l0eVwiKVxuYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KVxuXG5mdW5jdGlvbiBzaG93SW5wdXQoZSkge1xuICAgIGZvcm0uaGlkZGVuID0gZmFsc2Vcbn1cblxuY2xhc3MgRm9yZWNhc3Qge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbFxuICAgICAgICB0aGlzLmNpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jaXR5X19uYW1lXCIpXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi50ZW1wZXJhdHVyZV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnByZXNzdXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uaHVtaWRpdHlfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMud2luZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLndpbmQtc3BlZWRfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaWNvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJkaXYud2VhdGhlcl9faWNvblwiKS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSBlbC5xdWVyeVNlbGVjdG9yKFwidWwud2VhdGhlcl9fZm9yZWNhc3RcIikucXVlcnlTZWxlY3RvckFsbChcImxpXCIpXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICAgICAgLy8gdGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VPYmplY3QpXG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzcywgaHVtaWQsIHdpbmQsIGNvbmQsIHRpbWVPZkRheSkge1xuICAgICAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSBjaXR5XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB0ZW1wXG4gICAgICAgIHRoaXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBwcmVzcyArIFwiaFBhXCJcbiAgICAgICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGh1bWlkICsgXCIlXCJcbiAgICAgICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gd2luZCArIFwibS9zXCJcbiAgICAgICAgdGhpcy5pY29uLnNyYyA9IGZpbmRJY29uKGNvbmQsIHRpbWVPZkRheSlcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JlY2FzdChmb3JlY2FzdExpc3QpIHtcbiAgICAgICAgdGhpcy5mb3JlY2FzdC5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi5kYXlcIikudGV4dENvbnRlbnQgPSBmb3JlY2FzdExpc3RbaW5kZXhdW1wiZGF5XCJdXG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZV9fdmFsdWVcIikudGV4dENvbnRlbnQgPSBmb3JlY2FzdExpc3RbaW5kZXhdWyd0ZW1wJ11cbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IGZpbmRJY29uKGZvcmVjYXN0TGlzdFtpbmRleF1bJ2NvbmRpdGlvbiddLCBcImRheVwiKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgZmluZEljb24gPSAoY29kZSwgdGltZU9mRGF5KSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRvciA9IHtcbiAgICAgICAgMTAwMDogYGNsZWFyLSR7dGltZU9mRGF5fWAsXG4gICAgICAgIDEwMDM6IGBwYXJ0bHktY2xvdWR5LSR7dGltZU9mRGF5fWAsXG4gICAgICAgIDEwMDY6IGBjbG91ZHlgLFxuICAgICAgICAxMDA5OiBgY2xvdWR5YCxcbiAgICAgICAgMTAzMDogYGNsb3VkeWAsXG4gICAgICAgIDEwNjM6IGByYWluYCxcbiAgICAgICAgMTA2NjogYHNub3dgLFxuICAgICAgICAxMDY5OiBgc2xlZXRgLFxuICAgICAgICAxMDcyOiBgc2xlZXRgLFxuICAgICAgICAxMDg3OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTExNDogYHNub3dgLFxuICAgICAgICAxMTE3OiBgc25vd2AsXG4gICAgICAgIDExMzU6IGBjbG91ZHlgLFxuICAgICAgICAxMTQ3OiBgY2xvdWR5YCxcbiAgICAgICAgMTE1MDogYHJhaW5gLFxuICAgICAgICAxMTUzOiBgcmFpbmAsXG4gICAgICAgIDExNjg6IGByYWluYCxcbiAgICAgICAgMTE3MTogYHJhaW5gLFxuICAgICAgICAxMTgwOiBgcmFpbmAsXG4gICAgICAgIDExODM6IGByYWluYCxcbiAgICAgICAgMTE4NjogYHJhaW5gLFxuICAgICAgICAxMTg5OiBgcmFpbmAsXG4gICAgICAgIDExOTI6IGByYWluYCxcbiAgICAgICAgMTE5NTogYHJhaW5gLFxuICAgICAgICAxMTk4OiBgcmFpbmAsXG4gICAgICAgIDEyMDE6IGByYWluYCxcbiAgICAgICAgMTIwNDogYHNsZWV0YCxcbiAgICAgICAgMTIwNzogYHNsZWV0YCxcbiAgICAgICAgMTIxMDogYHNub3dgLFxuICAgICAgICAxMjEzOiBgc25vd2AsXG4gICAgICAgIDEyMTY6IGBzbm93YCxcbiAgICAgICAgMTIxOTogYHNub3dgLFxuICAgICAgICAxMjIyOiBgc25vd2AsXG4gICAgICAgIDEyMjU6IGBzbm93YCxcbiAgICAgICAgMTIzNzogYHNub3dgLFxuICAgICAgICAxMjQwOiBgcmFpbmAsXG4gICAgICAgIDEyNDM6IGByYWluYCxcbiAgICAgICAgMTI0NjogYHJhaW5gLFxuICAgICAgICAxMjQ5OiBgc2xlZXRgLFxuICAgICAgICAxMjUyOiBgc2xlZXRgLFxuICAgICAgICAxMjU1OiBgc25vd2AsXG4gICAgICAgIDEyNTg6IGBzbm93YCxcbiAgICAgICAgMTI2MTogYHNsZWV0YCxcbiAgICAgICAgMTI2NDogYHNsZWV0YCxcbiAgICAgICAgMTI3MzogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyNzY6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjc5OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI4MjogYHRodW5kZXJzdG9ybWAsXG4gICAgfVxuICAgIHJldHVybiBgYXNzZXRzL2ljb25zLyR7dHJhbnNsYXRvcltjb2RlXX0uc3ZnYFxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEpIHtcbiAgICBjb25zdCBjaXR5ID0gZGF0YVsnbG9jYXRpb24nXVsnbmFtZSddXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KHdlYXRoZXJUYWIpXG4gICAgZm9yZWNhc3QudXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbiwgdGltZTBmRGF5KVxuICAgIGZvcmVjYXN0LnVwZGF0ZUZvcmVjYXN0KGZ1dHVyZSlcbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnXG4gICAgcmV0dXJuIHNbMF0udG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcbn1cblxuY29uc3QgZ2V0V2Vla2RheSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUobmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ1BMJywge3dlZWtkYXk6ICdsb25nJ30pKVxufVxuXG5jb25zdCBjb252ZXJ0V2luZFNwZWVkID0gKGtwaCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtwaCAvIDMuNiAqIDEwKSAvIDEwXG59XG5cbmNvbnN0IGZ1dHVyZUZvcmVjYXN0ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKGRheSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGdldFdlZWtkYXkoZGF5WydkYXRlJ10pLFxuICAgICAgICAgICAgdGVtcDogZGF5WydkYXknXVsnYXZndGVtcF9jJ10sXG4gICAgICAgICAgICBjb25kaXRpb246IGRheVsnZGF5J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGRheU9yTmlnaHQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoZGF0ZSkuZ2V0SG91cnMoKVxuICAgIGlmICg2IDwgaG91ciAmJiBob3VyIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIFwiZGF5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJuaWdodFwiXG4gICAgfVxufVxuXG4oYXN5bmMgKHVybCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGV4dHJhY3REYXRhKGRhdGEpXG59KSh1cmwpXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiODRiMzliOGRlMjcwYjlhN2FlXCIpIl0sIm5hbWVzIjpbImtleSIsImRheXMiLCJjaXR5IiwidXJsIiwiY29uY2F0Iiwid2VhdGhlclRhYiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGRlbiIsImZvcm0iLCJhZGRDaXR5QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJGb3JlY2FzdCIsImVsIiwiX2NsYXNzQ2FsbENoZWNrIiwidGVtcGVyYXR1cmUiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImljb24iLCJmb3JlY2FzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ1dHRvbiIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwidXBkYXRlRGF0YSIsInRlbXAiLCJwcmVzcyIsImh1bWlkIiwiY29uZCIsInRpbWVPZkRheSIsInRleHRDb250ZW50Iiwic3JjIiwiZmluZEljb24iLCJ1cGRhdGVGb3JlY2FzdCIsImZvcmVjYXN0TGlzdCIsImZvckVhY2giLCJkYXkiLCJpbmRleCIsImNvZGUiLCJ0cmFuc2xhdG9yIiwiZXh0cmFjdERhdGEiLCJkYXRhIiwidGltZTBmRGF5IiwiZGF5T3JOaWdodCIsImNvbmRpdGlvbiIsImNvbnZlcnRXaW5kU3BlZWQiLCJmdXR1cmUiLCJmdXR1cmVGb3JlY2FzdCIsInNsaWNlIiwiY2FwaXRhbGl6ZSIsInMiLCJ0b1VwcGVyQ2FzZSIsImdldFdlZWtkYXkiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImtwaCIsIk1hdGgiLCJyb3VuZCIsImFyciIsIm1hcCIsImhvdXIiLCJnZXRIb3VycyIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=