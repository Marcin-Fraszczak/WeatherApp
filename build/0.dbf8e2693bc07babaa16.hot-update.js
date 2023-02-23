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
var body = document.querySelector("body");
var weatherTab = document.querySelector("div.module__weather");
var form = document.querySelector(".module__form");
var addCityButton = document.querySelector("#add-city");
addCityButton.addEventListener("click", showInput);
function showInput(e) {
  form.hidden = false;
  var closeButton = form.querySelector(".btn--close");
  closeButton.addEventListener("click", function () {
    form.hidden = true;
  });
}
var Forecast = /*#__PURE__*/function () {
  function Forecast(el) {
    var _this = this;
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
    this.closeButton.addEventListener("click", function () {
      _this.el.parentElement.removeChild(_this.el);
    });
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
  var clonedWeatherTab = weatherTab.cloneNode(true);
  clonedWeatherTab.hidden = false;
  weatherTab.parentElement.appendChild(clonedWeatherTab);
  var forecast = new Forecast(clonedWeatherTab);
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
          body.classList.add("loading");
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          // console.log(data)
          body.classList.remove("loading");
          extractData(data);
        case 9:
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
/******/ 	__webpack_require__.h = () => ("9f25100c2d4208a865d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEMsSUFBSSxDQUFDLEdBQUdELElBQUksSUFBSUEsSUFBSSxHQUFHLEVBQUUsRUFBRTtJQUN2QixPQUFPLEtBQUs7RUFDaEIsQ0FBQyxNQUFNO0lBQ0gsT0FBTyxPQUFPO0VBQ2xCO0FBQ0osQ0FBQztBQUVEO0VBQUEsSUFBQUUsSUFBQSxHQUFBQyxtRkFBQSxlQUFBQyxzRUFBQSxDQUFDLFNBQUFFLFFBQU8zRSxHQUFHO0lBQUEsSUFBQTRFLFFBQUEsRUFBQS9CLElBQUE7SUFBQSxPQUFBNEIsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFDUC9FLElBQUksQ0FBQ2dGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUFBSixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNORyxLQUFLLENBQUNwRixHQUFHLENBQUM7UUFBQTtVQUEzQjRFLFFBQVEsR0FBQUcsUUFBQSxDQUFBTSxJQUFBO1VBQUFOLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ0tMLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFO1FBQUE7VUFBNUJ6QyxJQUFJLEdBQUFrQyxRQUFBLENBQUFNLElBQUE7VUFDVjtVQUNBbkYsSUFBSSxDQUFDZ0YsU0FBUyxDQUFDSyxNQUFNLENBQUMsU0FBUyxDQUFDO1VBQ2hDM0MsV0FBVyxDQUFDQyxJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQWtDLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWIsT0FBQTtFQUFBLENBQ3BCO0VBQUEsaUJBQUFjLEVBQUE7SUFBQSxPQUFBbEIsSUFBQSxDQUFBbUIsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxLQUFFM0YsR0FBRyxDQUFDOzs7Ozs7OztVQ3pLUCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5QYXJhbWV0cml6ZWQgY29uZmlnIGZvciBmZXRjaGluZ1xuICovXG5jb25zdCBrZXkgPSAnNDYxOTJiMWE2OTJmNDQ4NmEwZDE4MTg0NzIzMjIwMiAnXG5sZXQgZGF5cyA9IDZcbmxldCBjaXR5ID0gXCJhdXRvOmlwXCJcbmNvbnN0IHVybCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7Y2l0eX0mZGF5cz0ke2RheXN9YFxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbmNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG5jb25zdCBhZGRDaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2l0eVwiKVxuYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KVxuXG5mdW5jdGlvbiBzaG93SW5wdXQoZSkge1xuICAgIGZvcm0uaGlkZGVuID0gZmFsc2VcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm0uaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmNsYXNzIEZvcmVjYXN0IHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLmVsID0gZWxcbiAgICAgICAgdGhpcy5jaXR5ID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uY2l0eV9fbmFtZVwiKVxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4udGVtcGVyYXR1cmVfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5wcmVzc3VyZV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmh1bWlkaXR5X192YWx1ZVwiKVxuICAgICAgICB0aGlzLndpbmQgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi53aW5kLXNwZWVkX192YWx1ZVwiKVxuICAgICAgICB0aGlzLmljb24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiZGl2LndlYXRoZXJfX2ljb25cIikucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgICAgICB0aGlzLmZvcmVjYXN0ID0gZWwucXVlcnlTZWxlY3RvcihcInVsLndlYXRoZXJfX2ZvcmVjYXN0XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKVxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcihcIi5idG4tLWNsb3NlXCIpXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3MsIGh1bWlkLCB3aW5kLCBjb25kLCB0aW1lT2ZEYXkpIHtcbiAgICAgICAgdGhpcy5jaXR5LnRleHRDb250ZW50ID0gY2l0eVxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gdGVtcFxuICAgICAgICB0aGlzLnByZXNzdXJlLnRleHRDb250ZW50ID0gcHJlc3MgKyBcImhQYVwiXG4gICAgICAgIHRoaXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBodW1pZCArIFwiJVwiXG4gICAgICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IHdpbmQgKyBcIm0vc1wiXG4gICAgICAgIHRoaXMuaWNvbi5zcmMgPSBmaW5kSWNvbihjb25kLCB0aW1lT2ZEYXkpXG4gICAgfVxuXG4gICAgdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3RMaXN0KSB7XG4gICAgICAgIHRoaXMuZm9yZWNhc3QuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5XCIpLnRleHRDb250ZW50ID0gZm9yZWNhc3RMaXN0W2luZGV4XVtcImRheVwiXVxuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVfX3ZhbHVlXCIpLnRleHRDb250ZW50ID0gZm9yZWNhc3RMaXN0W2luZGV4XVsndGVtcCddXG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPSBmaW5kSWNvbihmb3JlY2FzdExpc3RbaW5kZXhdWydjb25kaXRpb24nXSwgXCJkYXlcIilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IGZpbmRJY29uID0gKGNvZGUsIHRpbWVPZkRheSkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0b3IgPSB7XG4gICAgICAgIDEwMDA6IGBjbGVhci0ke3RpbWVPZkRheX1gLFxuICAgICAgICAxMDAzOiBgcGFydGx5LWNsb3VkeS0ke3RpbWVPZkRheX1gLFxuICAgICAgICAxMDA2OiBgY2xvdWR5YCxcbiAgICAgICAgMTAwOTogYGNsb3VkeWAsXG4gICAgICAgIDEwMzA6IGBjbG91ZHlgLFxuICAgICAgICAxMDYzOiBgcmFpbmAsXG4gICAgICAgIDEwNjY6IGBzbm93YCxcbiAgICAgICAgMTA2OTogYHNsZWV0YCxcbiAgICAgICAgMTA3MjogYHNsZWV0YCxcbiAgICAgICAgMTA4NzogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDExMTQ6IGBzbm93YCxcbiAgICAgICAgMTExNzogYHNub3dgLFxuICAgICAgICAxMTM1OiBgY2xvdWR5YCxcbiAgICAgICAgMTE0NzogYGNsb3VkeWAsXG4gICAgICAgIDExNTA6IGByYWluYCxcbiAgICAgICAgMTE1MzogYHJhaW5gLFxuICAgICAgICAxMTY4OiBgcmFpbmAsXG4gICAgICAgIDExNzE6IGByYWluYCxcbiAgICAgICAgMTE4MDogYHJhaW5gLFxuICAgICAgICAxMTgzOiBgcmFpbmAsXG4gICAgICAgIDExODY6IGByYWluYCxcbiAgICAgICAgMTE4OTogYHJhaW5gLFxuICAgICAgICAxMTkyOiBgcmFpbmAsXG4gICAgICAgIDExOTU6IGByYWluYCxcbiAgICAgICAgMTE5ODogYHJhaW5gLFxuICAgICAgICAxMjAxOiBgcmFpbmAsXG4gICAgICAgIDEyMDQ6IGBzbGVldGAsXG4gICAgICAgIDEyMDc6IGBzbGVldGAsXG4gICAgICAgIDEyMTA6IGBzbm93YCxcbiAgICAgICAgMTIxMzogYHNub3dgLFxuICAgICAgICAxMjE2OiBgc25vd2AsXG4gICAgICAgIDEyMTk6IGBzbm93YCxcbiAgICAgICAgMTIyMjogYHNub3dgLFxuICAgICAgICAxMjI1OiBgc25vd2AsXG4gICAgICAgIDEyMzc6IGBzbm93YCxcbiAgICAgICAgMTI0MDogYHJhaW5gLFxuICAgICAgICAxMjQzOiBgcmFpbmAsXG4gICAgICAgIDEyNDY6IGByYWluYCxcbiAgICAgICAgMTI0OTogYHNsZWV0YCxcbiAgICAgICAgMTI1MjogYHNsZWV0YCxcbiAgICAgICAgMTI1NTogYHNub3dgLFxuICAgICAgICAxMjU4OiBgc25vd2AsXG4gICAgICAgIDEyNjE6IGBzbGVldGAsXG4gICAgICAgIDEyNjQ6IGBzbGVldGAsXG4gICAgICAgIDEyNzM6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjc2OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI3OTogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyODI6IGB0aHVuZGVyc3Rvcm1gLFxuICAgIH1cbiAgICByZXR1cm4gYGFzc2V0cy9pY29ucy8ke3RyYW5zbGF0b3JbY29kZV19LnN2Z2Bcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhKSB7XG4gICAgY29uc3QgY2l0eSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNvbnN0IHRpbWUwZkRheSA9IGRheU9yTmlnaHQoZGF0YVsnbG9jYXRpb24nXVsnbG9jYWx0aW1lJ10pXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YVsnY3VycmVudCddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgY29uc3QgdGVtcCA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcF9jJ11cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGFbJ2N1cnJlbnQnXVsncHJlc3N1cmVfbWInXVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YVsnY3VycmVudCddWydodW1pZGl0eSddXG4gICAgY29uc3Qgd2luZCA9IGNvbnZlcnRXaW5kU3BlZWQoZGF0YVsnY3VycmVudCddWyd3aW5kX2twaCddKVxuICAgIGNvbnN0IGZ1dHVyZSA9IGZ1dHVyZUZvcmVjYXN0KGRhdGFbJ2ZvcmVjYXN0J11bJ2ZvcmVjYXN0ZGF5J10uc2xpY2UoMSkpXG5cbiAgICBjb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbiAgICBsZXQgY2xvbmVkV2VhdGhlclRhYiA9IHdlYXRoZXJUYWIuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxuICAgIHdlYXRoZXJUYWIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGNsb25lZFdlYXRoZXJUYWIpXG4gICAgZm9yZWNhc3QudXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbiwgdGltZTBmRGF5KVxuICAgIGZvcmVjYXN0LnVwZGF0ZUZvcmVjYXN0KGZ1dHVyZSlcbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnXG4gICAgcmV0dXJuIHNbMF0udG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcbn1cblxuY29uc3QgZ2V0V2Vla2RheSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUobmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ1BMJywge3dlZWtkYXk6ICdsb25nJ30pKVxufVxuXG5jb25zdCBjb252ZXJ0V2luZFNwZWVkID0gKGtwaCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtwaCAvIDMuNiAqIDEwKSAvIDEwXG59XG5cbmNvbnN0IGZ1dHVyZUZvcmVjYXN0ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKGRheSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGdldFdlZWtkYXkoZGF5WydkYXRlJ10pLFxuICAgICAgICAgICAgdGVtcDogZGF5WydkYXknXVsnYXZndGVtcF9jJ10sXG4gICAgICAgICAgICBjb25kaXRpb246IGRheVsnZGF5J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGRheU9yTmlnaHQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoZGF0ZSkuZ2V0SG91cnMoKVxuICAgIGlmICg2IDwgaG91ciAmJiBob3VyIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIFwiZGF5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJuaWdodFwiXG4gICAgfVxufVxuXG4oYXN5bmMgKHVybCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgZXh0cmFjdERhdGEoZGF0YSlcbn0pKHVybClcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWYyNTEwMGMyZDQyMDhhODY1ZDBcIikiXSwibmFtZXMiOlsia2V5IiwiZGF5cyIsImNpdHkiLCJ1cmwiLCJjb25jYXQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2VhdGhlclRhYiIsImZvcm0iLCJhZGRDaXR5QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJoaWRkZW4iLCJjbG9zZUJ1dHRvbiIsIkZvcmVjYXN0IiwiZWwiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRlbXBlcmF0dXJlIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsIndpbmQiLCJpY29uIiwiZm9yZWNhc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiX2NyZWF0ZUNsYXNzIiwidmFsdWUiLCJ1cGRhdGVEYXRhIiwidGVtcCIsInByZXNzIiwiaHVtaWQiLCJjb25kIiwidGltZU9mRGF5IiwidGV4dENvbnRlbnQiLCJzcmMiLCJmaW5kSWNvbiIsInVwZGF0ZUZvcmVjYXN0IiwiZm9yZWNhc3RMaXN0IiwiZm9yRWFjaCIsImRheSIsImluZGV4IiwiY29kZSIsInRyYW5zbGF0b3IiLCJleHRyYWN0RGF0YSIsImRhdGEiLCJ0aW1lMGZEYXkiLCJkYXlPck5pZ2h0IiwiY29uZGl0aW9uIiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZSIsImZ1dHVyZUZvcmVjYXN0Iiwic2xpY2UiLCJjbG9uZWRXZWF0aGVyVGFiIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjYXBpdGFsaXplIiwicyIsInRvVXBwZXJDYXNlIiwiZ2V0V2Vla2RheSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5Iiwia3BoIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwibWFwIiwiaG91ciIsImdldEhvdXJzIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZmV0Y2giLCJzZW50IiwianNvbiIsInJlbW92ZSIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==