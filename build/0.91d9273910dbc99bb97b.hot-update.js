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
    value: function updateData(city, temp, press, humid, wind, cond, timeofDay) {
      this.city.textContent = city;
      this.temperature.textContent = temp;
      this.pressure.textContent = press + "hPa";
      this.humidity.textContent = humid + "%";
      this.wind.textContent = wind + "m/s";
      this.icon.src = iconPath;
    }
  }]);
  return Forecast;
}();
var conditionObject = {
  1000: 'clear-day',
  1003: 'partly-cloudy-day',
  cloudy: 1006
};
console.log(conditionObject.keys());
function extractData(data) {
  var city = data['location']['name'];
  var time0fDay = dayOrNight(data['location']['localtime']);
  var condition = data['current']['condition']['code'];
  var temp = data['current']['temp_c'];
  var pressure = data['current']['pressure_mb'];
  var humidity = data['current']['humidity'];
  var wind = convertWindSpeed(data['current']['wind_kph']);
  var future = futureForecast(data['forecast']['forecastday'].slice(1));

  // console.log(future)

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
          console.log(data);
          extractData(data);
        case 8:
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
/******/ 	__webpack_require__.h = () => ("d7d6240d8f9e0f440c65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUEsSUFBQThELFFBQUEsRUFBQTdCLElBQUE7SUFBQSxPQUFBMEIsc0VBQUEsVUFBQUssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FDZ0JDLEtBQUssQ0FBQ3BFLEdBQUcsQ0FBQztRQUFBO1VBQTNCOEQsUUFBUSxHQUFBRyxRQUFBLENBQUFJLElBQUE7VUFBQUosUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FDS0wsUUFBUSxDQUFDUSxJQUFJLEVBQUU7UUFBQTtVQUE1QnJDLElBQUksR0FBQWdDLFFBQUEsQ0FBQUksSUFBQTtVQUNWeEMsT0FBTyxDQUFDQyxHQUFHLENBQUNHLElBQUksQ0FBQztVQUNqQkQsV0FBVyxDQUFDQyxJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQWdDLFFBQUEsQ0FBQU0sSUFBQTtNQUFBO0lBQUEsR0FBQVYsT0FBQTtFQUFBLENBQ3BCO0VBQUEsaUJBQUFXLEVBQUE7SUFBQSxPQUFBZixJQUFBLENBQUFnQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEtBQUUxRSxHQUFHLENBQUM7Ozs7Ozs7O1VDakdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga2V5ID0gJzQ2MTkyYjFhNjkyZjQ0ODZhMGQxODE4NDcyMzIyMDIgJ1xubGV0IGRheXMgPSA2XG5sZXQgY2l0eSA9IFwiYXV0bzppcFwiXG5jb25zdCB1cmwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2NpdHl9JmRheXM9JHtkYXlzfWBcbmxldCBpY29uID0gJ2Nsb3VkeSdcbmxldCBpY29uUGF0aCA9IGBhc3NldHMvaWNvbnMvJHtpY29ufS5zdmdgXG5cbmNvbnN0IHNlYXJjaFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX19mb3JtXCIpXG4vLyBzZWFyY2hUYWIuaGlkZGVuID0gZmFsc2VcbmNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxud2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsXG4gICAgICAgIHRoaXMuY2l0eSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNpdHlfX25hbWVcIilcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnRlbXBlcmF0dXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLnByZXNzdXJlID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ucHJlc3N1cmVfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5odW1pZGl0eV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy53aW5kID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ud2luZC1zcGVlZF9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5pY29uID0gZWwucXVlcnlTZWxlY3RvcihcImRpdi53ZWF0aGVyX19pY29uXCIpLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJ1bC53ZWF0aGVyX19mb3JlY2FzdFwiKVxuICAgIH1cbiAgICB1cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzLCBodW1pZCwgd2luZCwgY29uZCwgdGltZW9mRGF5KSB7XG4gICAgICAgIHRoaXMuY2l0eS50ZXh0Q29udGVudCA9IGNpdHlcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHRlbXBcbiAgICAgICAgdGhpcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IHByZXNzICsgXCJoUGFcIlxuICAgICAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gaHVtaWQgKyBcIiVcIlxuICAgICAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSB3aW5kICsgXCJtL3NcIlxuXG4gICAgICAgIHRoaXMuaWNvbi5zcmMgPSBpY29uUGF0aFxuXG4gICAgfVxufVxuXG5jb25zdCBjb25kaXRpb25PYmplY3QgPSB7XG4gICAgMTAwMDogJ2NsZWFyLWRheScsXG4gICAgMTAwMzogJ3BhcnRseS1jbG91ZHktZGF5JyxcbiAgICBjbG91ZHk6IDEwMDZcbn1cbmNvbnNvbGUubG9nKGNvbmRpdGlvbk9iamVjdC5rZXlzKCkpXG5cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSkge1xuICAgIGNvbnN0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjb25zdCB0aW1lMGZEYXkgPSBkYXlPck5pZ2h0KGRhdGFbJ2xvY2F0aW9uJ11bJ2xvY2FsdGltZSddKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgIGNvbnN0IHRlbXAgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBfYyddXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhWydjdXJyZW50J11bJ3ByZXNzdXJlX21iJ11cbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGFbJ2N1cnJlbnQnXVsnaHVtaWRpdHknXVxuICAgIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZFNwZWVkKGRhdGFbJ2N1cnJlbnQnXVsnd2luZF9rcGgnXSlcbiAgICBjb25zdCBmdXR1cmUgPSBmdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgLy8gY29uc29sZS5sb2coZnV0dXJlKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3Qod2VhdGhlclRhYilcbiAgICBmb3JlY2FzdC51cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCwgY29uZGl0aW9uLCB0aW1lMGZEYXkpXG59XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIHJldHVybiBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXG59XG5cbmNvbnN0IGdldFdlZWtkYXkgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBjYXBpdGFsaXplKG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdQTCcsIHt3ZWVrZGF5OiAnbG9uZyd9KSlcbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn1cblxuKGFzeW5jICh1cmwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBleHRyYWN0RGF0YShkYXRhKVxufSkodXJsKVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkN2Q2MjQwZDhmOWUwZjQ0MGM2NVwiKSJdLCJuYW1lcyI6WyJrZXkiLCJkYXlzIiwiY2l0eSIsInVybCIsImNvbmNhdCIsImljb24iLCJpY29uUGF0aCIsInNlYXJjaFRhYiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndlYXRoZXJUYWIiLCJoaWRkZW4iLCJGb3JlY2FzdCIsImVsIiwiX2NsYXNzQ2FsbENoZWNrIiwidGVtcGVyYXR1cmUiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImZvcmVjYXN0IiwiX2NyZWF0ZUNsYXNzIiwidmFsdWUiLCJ1cGRhdGVEYXRhIiwidGVtcCIsInByZXNzIiwiaHVtaWQiLCJjb25kIiwidGltZW9mRGF5IiwidGV4dENvbnRlbnQiLCJzcmMiLCJjb25kaXRpb25PYmplY3QiLCJjbG91ZHkiLCJjb25zb2xlIiwibG9nIiwia2V5cyIsImV4dHJhY3REYXRhIiwiZGF0YSIsInRpbWUwZkRheSIsImRheU9yTmlnaHQiLCJjb25kaXRpb24iLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlIiwiZnV0dXJlRm9yZWNhc3QiLCJzbGljZSIsImNhcGl0YWxpemUiLCJzIiwidG9VcHBlckNhc2UiLCJnZXRXZWVrZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJtYXAiLCJkYXkiLCJob3VyIiwiZ2V0SG91cnMiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9