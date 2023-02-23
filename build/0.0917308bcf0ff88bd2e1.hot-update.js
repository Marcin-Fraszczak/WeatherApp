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




var key = '46192b1a692f4486a0d181847232202 ';
var days = 6;
var city = "auto:ip";
var url = "http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days);
var icon = 'cloudy';
var iconPath = "assets/icons/".concat(icon, ".svg");
var searchTab = document.querySelector("div.module__form");
// searchTab.hidden = false
var weatherTab = document.querySelector("div.module__weather");
weatherTab.hidden = false;
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
    this.forecast = el.querySelector("ul.weather__forecast");
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Forecast, [{
    key: "updateData",
    value: function updateData(city, temp, press, humid, wind, cond, timeOfDay) {
      this.city.textContent = city;
      this.temperature.textContent = temp;
      this.pressure.textContent = press + "hPa";
      this.humidity.textContent = humid + "%";
      this.wind.textContent = wind + "m/s";
      icon = findIcon(cond, timeOfDay);
      this.icon.src = "assets/icons/".concat(icon, ".svg");
    }
  }, {
    key: "updateForecast",
    value: function updateForecast() {}
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
  return translator[code];
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
  console.log(future);
  var weatherTab = document.querySelector("div.module__weather");
  var forecast = new Forecast(weatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
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
/******/ 	__webpack_require__.h = () => ("bf618db748e2dc599af4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOTE3MzA4YmNmMGZmODhiZDJlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxHQUFHLEdBQUcsa0NBQWtDO0FBQzlDLElBQUlDLElBQUksR0FBRyxDQUFDO0FBQ1osSUFBSUMsSUFBSSxHQUFHLFNBQVM7QUFDcEIsSUFBTUMsR0FBRyxxREFBQUMsTUFBQSxDQUFxREosR0FBRyxTQUFBSSxNQUFBLENBQU1GLElBQUksWUFBQUUsTUFBQSxDQUFTSCxJQUFJLENBQUU7QUFDMUYsSUFBSUksSUFBSSxHQUFHLFFBQVE7QUFDbkIsSUFBSUMsUUFBUSxtQkFBQUYsTUFBQSxDQUFtQkMsSUFBSSxTQUFNO0FBRXpDLElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDNUQ7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ2hFQyxVQUFVLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBQUEsSUFFbkJDLFFBQVE7RUFDVixTQUFBQSxTQUFZQyxFQUFFLEVBQUU7SUFBQUMsaUZBQUEsT0FBQUYsUUFBQTtJQUNaLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDWCxJQUFJLEdBQUdXLEVBQUUsQ0FBQ0osYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQy9DLElBQUksQ0FBQ00sV0FBVyxHQUFHRixFQUFFLENBQUNKLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUM5RCxJQUFJLENBQUNPLFFBQVEsR0FBR0gsRUFBRSxDQUFDSixhQUFhLENBQUMsc0JBQXNCLENBQUM7SUFDeEQsSUFBSSxDQUFDUSxRQUFRLEdBQUdKLEVBQUUsQ0FBQ0osYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQ3hELElBQUksQ0FBQ1MsSUFBSSxHQUFHTCxFQUFFLENBQUNKLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztJQUN0RCxJQUFJLENBQUNKLElBQUksR0FBR1EsRUFBRSxDQUFDSixhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0EsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN0RSxJQUFJLENBQUNVLFFBQVEsR0FBR04sRUFBRSxDQUFDSixhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDNUQ7RUFBQ1csOEVBQUEsQ0FBQVIsUUFBQTtJQUFBWixHQUFBO0lBQUFxQixLQUFBLEVBRUQsU0FBQUMsV0FBV3BCLElBQUksRUFBRXFCLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVQLElBQUksRUFBRVEsSUFBSSxFQUFFQyxTQUFTLEVBQUU7TUFDeEQsSUFBSSxDQUFDekIsSUFBSSxDQUFDMEIsV0FBVyxHQUFHMUIsSUFBSTtNQUM1QixJQUFJLENBQUNhLFdBQVcsQ0FBQ2EsV0FBVyxHQUFHTCxJQUFJO01BQ25DLElBQUksQ0FBQ1AsUUFBUSxDQUFDWSxXQUFXLEdBQUdKLEtBQUssR0FBRyxLQUFLO01BQ3pDLElBQUksQ0FBQ1AsUUFBUSxDQUFDVyxXQUFXLEdBQUdILEtBQUssR0FBRyxHQUFHO01BQ3ZDLElBQUksQ0FBQ1AsSUFBSSxDQUFDVSxXQUFXLEdBQUdWLElBQUksR0FBRyxLQUFLO01BQ3BDYixJQUFJLEdBQUd3QixRQUFRLENBQUNILElBQUksRUFBRUMsU0FBUyxDQUFDO01BQ2hDLElBQUksQ0FBQ3RCLElBQUksQ0FBQ3lCLEdBQUcsbUJBQUExQixNQUFBLENBQW1CQyxJQUFJLFNBQU07SUFDOUM7RUFBQztJQUFBTCxHQUFBO0lBQUFxQixLQUFBLEVBRUQsU0FBQVUsZUFBQSxFQUFpQixDQUVqQjtFQUFDO0VBQUEsT0FBQW5CLFFBQUE7QUFBQTtBQUdMLElBQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUcsSUFBSSxFQUFFTCxTQUFTLEVBQUs7RUFDbEMsSUFBTU0sVUFBVSxHQUFHO0lBQ2YsSUFBSSxXQUFBN0IsTUFBQSxDQUFXdUIsU0FBUyxDQUFFO0lBQzFCLElBQUksbUJBQUF2QixNQUFBLENBQW1CdUIsU0FBUyxDQUFFO0lBQ2xDLElBQUksVUFBVTtJQUNkLElBQUksVUFBVTtJQUNkLElBQUksVUFBVTtJQUNkLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksU0FBUztJQUNiLElBQUksU0FBUztJQUNiLElBQUksZ0JBQWdCO0lBQ3BCLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksVUFBVTtJQUNkLElBQUksVUFBVTtJQUNkLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksU0FBUztJQUNiLElBQUksU0FBUztJQUNiLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksU0FBUztJQUNiLElBQUksU0FBUztJQUNiLElBQUksUUFBUTtJQUNaLElBQUksUUFBUTtJQUNaLElBQUksU0FBUztJQUNiLElBQUksU0FBUztJQUNiLElBQUksZ0JBQWdCO0lBQ3BCLElBQUksZ0JBQWdCO0lBQ3BCLElBQUksZ0JBQWdCO0lBQ3BCLElBQUk7RUFDUixDQUFDO0VBQ0QsT0FBT00sVUFBVSxDQUFDRCxJQUFJLENBQUM7QUFDM0IsQ0FBQztBQUdELFNBQVNFLFdBQVdBLENBQUNDLElBQUksRUFBRTtFQUN2QixJQUFNakMsSUFBSSxHQUFHaUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNyQyxJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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QUFBLENBQUMsU0FBQUUsUUFBTzlELEdBQUc7SUFBQSxJQUFBK0QsUUFBQSxFQUFBL0IsSUFBQTtJQUFBLE9BQUE0QixzRUFBQSxVQUFBSyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNnQkMsS0FBSyxDQUFDckUsR0FBRyxDQUFDO1FBQUE7VUFBM0IrRCxRQUFRLEdBQUFHLFFBQUEsQ0FBQUksSUFBQTtVQUFBSixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNLTCxRQUFRLENBQUNRLElBQUksRUFBRTtRQUFBO1VBQTVCdkMsSUFBSSxHQUFBa0MsUUFBQSxDQUFBSSxJQUFBO1VBQ1Y7VUFDQXZDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFrQyxRQUFBLENBQUFNLElBQUE7TUFBQTtJQUFBLEdBQUFWLE9BQUE7RUFBQSxDQUNwQjtFQUFBLGlCQUFBVyxFQUFBO0lBQUEsT0FBQWYsSUFBQSxDQUFBZ0IsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxLQUFFM0UsR0FBRyxDQUFDOzs7Ozs7OztVQ3BKUCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9ICc0NjE5MmIxYTY5MmY0NDg2YTBkMTgxODQ3MjMyMjAyICdcbmxldCBkYXlzID0gNlxubGV0IGNpdHkgPSBcImF1dG86aXBcIlxuY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtjaXR5fSZkYXlzPSR7ZGF5c31gXG5sZXQgaWNvbiA9ICdjbG91ZHknXG5sZXQgaWNvblBhdGggPSBgYXNzZXRzL2ljb25zLyR7aWNvbn0uc3ZnYFxuXG5jb25zdCBzZWFyY2hUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fZm9ybVwiKVxuLy8gc2VhcmNoVGFiLmhpZGRlbiA9IGZhbHNlXG5jb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbndlYXRoZXJUYWIuaGlkZGVuID0gZmFsc2VcblxuY2xhc3MgRm9yZWNhc3Qge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbFxuICAgICAgICB0aGlzLmNpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jaXR5X19uYW1lXCIpXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi50ZW1wZXJhdHVyZV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnByZXNzdXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uaHVtaWRpdHlfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMud2luZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLndpbmQtc3BlZWRfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaWNvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJkaXYud2VhdGhlcl9faWNvblwiKS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSBlbC5xdWVyeVNlbGVjdG9yKFwidWwud2VhdGhlcl9fZm9yZWNhc3RcIilcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzLCBodW1pZCwgd2luZCwgY29uZCwgdGltZU9mRGF5KSB7XG4gICAgICAgIHRoaXMuY2l0eS50ZXh0Q29udGVudCA9IGNpdHlcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHRlbXBcbiAgICAgICAgdGhpcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IHByZXNzICsgXCJoUGFcIlxuICAgICAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gaHVtaWQgKyBcIiVcIlxuICAgICAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSB3aW5kICsgXCJtL3NcIlxuICAgICAgICBpY29uID0gZmluZEljb24oY29uZCwgdGltZU9mRGF5KVxuICAgICAgICB0aGlzLmljb24uc3JjID0gYGFzc2V0cy9pY29ucy8ke2ljb259LnN2Z2BcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JlY2FzdCgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5jb25zdCBmaW5kSWNvbiA9IChjb2RlLCB0aW1lT2ZEYXkpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdG9yID0ge1xuICAgICAgICAxMDAwOiBgY2xlYXItJHt0aW1lT2ZEYXl9YCxcbiAgICAgICAgMTAwMzogYHBhcnRseS1jbG91ZHktJHt0aW1lT2ZEYXl9YCxcbiAgICAgICAgMTAwNjogYGNsb3VkeWAsXG4gICAgICAgIDEwMDk6IGBjbG91ZHlgLFxuICAgICAgICAxMDMwOiBgY2xvdWR5YCxcbiAgICAgICAgMTA2MzogYHJhaW5gLFxuICAgICAgICAxMDY2OiBgc25vd2AsXG4gICAgICAgIDEwNjk6IGBzbGVldGAsXG4gICAgICAgIDEwNzI6IGBzbGVldGAsXG4gICAgICAgIDEwODc6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMTE0OiBgc25vd2AsXG4gICAgICAgIDExMTc6IGBzbm93YCxcbiAgICAgICAgMTEzNTogYGNsb3VkeWAsXG4gICAgICAgIDExNDc6IGBjbG91ZHlgLFxuICAgICAgICAxMTUwOiBgcmFpbmAsXG4gICAgICAgIDExNTM6IGByYWluYCxcbiAgICAgICAgMTE2ODogYHJhaW5gLFxuICAgICAgICAxMTcxOiBgcmFpbmAsXG4gICAgICAgIDExODA6IGByYWluYCxcbiAgICAgICAgMTE4MzogYHJhaW5gLFxuICAgICAgICAxMTg2OiBgcmFpbmAsXG4gICAgICAgIDExODk6IGByYWluYCxcbiAgICAgICAgMTE5MjogYHJhaW5gLFxuICAgICAgICAxMTk1OiBgcmFpbmAsXG4gICAgICAgIDExOTg6IGByYWluYCxcbiAgICAgICAgMTIwMTogYHJhaW5gLFxuICAgICAgICAxMjA0OiBgc2xlZXRgLFxuICAgICAgICAxMjA3OiBgc2xlZXRgLFxuICAgICAgICAxMjEwOiBgc25vd2AsXG4gICAgICAgIDEyMTM6IGBzbm93YCxcbiAgICAgICAgMTIxNjogYHNub3dgLFxuICAgICAgICAxMjE5OiBgc25vd2AsXG4gICAgICAgIDEyMjI6IGBzbm93YCxcbiAgICAgICAgMTIyNTogYHNub3dgLFxuICAgICAgICAxMjM3OiBgc25vd2AsXG4gICAgICAgIDEyNDA6IGByYWluYCxcbiAgICAgICAgMTI0MzogYHJhaW5gLFxuICAgICAgICAxMjQ2OiBgcmFpbmAsXG4gICAgICAgIDEyNDk6IGBzbGVldGAsXG4gICAgICAgIDEyNTI6IGBzbGVldGAsXG4gICAgICAgIDEyNTU6IGBzbm93YCxcbiAgICAgICAgMTI1ODogYHNub3dgLFxuICAgICAgICAxMjYxOiBgc2xlZXRgLFxuICAgICAgICAxMjY0OiBgc2xlZXRgLFxuICAgICAgICAxMjczOiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI3NjogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyNzk6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjgyOiBgdGh1bmRlcnN0b3JtYCxcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zbGF0b3JbY29kZV1cbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhKSB7XG4gICAgY29uc3QgY2l0eSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNvbnN0IHRpbWUwZkRheSA9IGRheU9yTmlnaHQoZGF0YVsnbG9jYXRpb24nXVsnbG9jYWx0aW1lJ10pXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YVsnY3VycmVudCddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgY29uc3QgdGVtcCA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcF9jJ11cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGFbJ2N1cnJlbnQnXVsncHJlc3N1cmVfbWInXVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YVsnY3VycmVudCddWydodW1pZGl0eSddXG4gICAgY29uc3Qgd2luZCA9IGNvbnZlcnRXaW5kU3BlZWQoZGF0YVsnY3VycmVudCddWyd3aW5kX2twaCddKVxuICAgIGNvbnN0IGZ1dHVyZSA9IGZ1dHVyZUZvcmVjYXN0KGRhdGFbJ2ZvcmVjYXN0J11bJ2ZvcmVjYXN0ZGF5J10uc2xpY2UoMSkpXG5cbiAgICBjb25zb2xlLmxvZyhmdXR1cmUpXG5cbiAgICBjb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdCh3ZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnXG4gICAgcmV0dXJuIHNbMF0udG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcbn1cblxuY29uc3QgZ2V0V2Vla2RheSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUobmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ1BMJywge3dlZWtkYXk6ICdsb25nJ30pKVxufVxuXG5jb25zdCBjb252ZXJ0V2luZFNwZWVkID0gKGtwaCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtwaCAvIDMuNiAqIDEwKSAvIDEwXG59XG5cbmNvbnN0IGZ1dHVyZUZvcmVjYXN0ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKGRheSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGdldFdlZWtkYXkoZGF5WydkYXRlJ10pLFxuICAgICAgICAgICAgdGVtcDogZGF5WydkYXknXVsnYXZndGVtcF9jJ10sXG4gICAgICAgICAgICBjb25kaXRpb246IGRheVsnZGF5J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGRheU9yTmlnaHQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoZGF0ZSkuZ2V0SG91cnMoKVxuICAgIGlmICg2IDwgaG91ciAmJiBob3VyIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIFwiZGF5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJuaWdodFwiXG4gICAgfVxufVxuXG4oYXN5bmMgKHVybCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGV4dHJhY3REYXRhKGRhdGEpXG59KSh1cmwpXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJmNjE4ZGI3NDhlMmRjNTk5YWY0XCIpIl0sIm5hbWVzIjpbImtleSIsImRheXMiLCJjaXR5IiwidXJsIiwiY29uY2F0IiwiaWNvbiIsImljb25QYXRoIiwic2VhcmNoVGFiIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2VhdGhlclRhYiIsImhpZGRlbiIsIkZvcmVjYXN0IiwiZWwiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0ZW1wZXJhdHVyZSIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiZm9yZWNhc3QiLCJfY3JlYXRlQ2xhc3MiLCJ2YWx1ZSIsInVwZGF0ZURhdGEiLCJ0ZW1wIiwicHJlc3MiLCJodW1pZCIsImNvbmQiLCJ0aW1lT2ZEYXkiLCJ0ZXh0Q29udGVudCIsImZpbmRJY29uIiwic3JjIiwidXBkYXRlRm9yZWNhc3QiLCJjb2RlIiwidHJhbnNsYXRvciIsImV4dHJhY3REYXRhIiwiZGF0YSIsInRpbWUwZkRheSIsImRheU9yTmlnaHQiLCJjb25kaXRpb24iLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlIiwiZnV0dXJlRm9yZWNhc3QiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJjYXBpdGFsaXplIiwicyIsInRvVXBwZXJDYXNlIiwiZ2V0V2Vla2RheSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5Iiwia3BoIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwibWFwIiwiZGF5IiwiaG91ciIsImdldEhvdXJzIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==