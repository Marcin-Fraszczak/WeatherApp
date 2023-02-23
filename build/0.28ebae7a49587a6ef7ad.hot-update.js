"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);






var addCityButton = document.querySelector("#add-city");
addCityButton.addEventListener("click", _formFunctions__WEBPACK_IMPORTED_MODULE_5__.showInput);
function extractData(data, rawCity) {
  var city = rawCity || data['location']['name'];
  var time0fDay = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.dayOrNight)(data['location']['localtime']);
  var condition = data['current']['condition']['code'];
  var temp = data['current']['temp_c'];
  var pressure = data['current']['pressure_mb'];
  var humidity = data['current']['humidity'];
  var wind = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.convertWindSpeed)(data['current']['wind_kph']);
  var future = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.futureForecast)(data['forecast']['forecastday'].slice(1));
  var weatherTab = document.querySelector("div.module__weather");
  var clonedWeatherTab = weatherTab.cloneNode(true);
  weatherTab.parentElement.appendChild(clonedWeatherTab);
  var forecast = new _forecastClass__WEBPACK_IMPORTED_MODULE_2__.Forecast(clonedWeatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
  forecast.updateForecast(future);
  clonedWeatherTab.hidden = false;
}
function getData(_x, _x2) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, city) {
    var body, response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = document.querySelector("body");
          body.classList.add("loading");
          _context.next = 4;
          return fetch(url);
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          body.classList.remove("loading");
          extractData(data, city);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}
getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.key, "&q=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.days));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("880c337ac94cf61acde0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxHQUFBbUMsUUFBQSxDQUFBTSxJQUFBO1VBQ1ZWLElBQUksQ0FBQ08sU0FBUyxDQUFDSyxNQUFNLENBQUMsU0FBUyxDQUFDO1VBQ2hDNUMsV0FBVyxDQUFDQyxJQUFJLEVBQUVFLElBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBaUMsUUFBQSxDQUFBUyxJQUFBO01BQUE7SUFBQSxHQUFBZixPQUFBO0VBQUEsQ0FDMUI7RUFBQSxPQUFBTixRQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBRURMLE9BQU8sbURBQUF5QixNQUFBLENBQW1EckQsa0RBQWEsU0FBQXFELE1BQUEsQ0FBTXJELG1EQUFjLFlBQUFxRCxNQUFBLENBQVNyRCxtREFBYyxFQUFHOzs7Ozs7OztVQ3BDckgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvcmVjYXN0fSBmcm9tIFwiLi9mb3JlY2FzdENsYXNzXCJcbmltcG9ydCB7Y29udmVydFdpbmRTcGVlZCwgZnV0dXJlRm9yZWNhc3QsIGRheU9yTmlnaHR9IGZyb20gXCIuL2hlbHBlcnNcIlxuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuL0FQSWNvbmZpZ1wiXG5pbXBvcnQge3Nob3dJbnB1dCwgZ2V0SW5wdXR9IGZyb20gXCIuL2Zvcm1GdW5jdGlvbnNcIlxuXG5jb25zdCBhZGRDaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2l0eVwiKVxuYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KVxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhLCByYXdDaXR5KSB7XG4gICAgY29uc3QgY2l0eSA9IHJhd0NpdHkgfHwgZGF0YVsnbG9jYXRpb24nXVsnbmFtZSddXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwsIGNpdHkpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICBleHRyYWN0RGF0YShkYXRhLCBjaXR5KVxufVxuXG5nZXREYXRhKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7Y29uZmlnWydrZXknXX0mcT0ke2NvbmZpZ1snY2l0eSddfSZkYXlzPSR7Y29uZmlnWydkYXlzJ119YClcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODgwYzMzN2FjOTRjZjYxYWNkZTBcIikiXSwibmFtZXMiOlsiRm9yZWNhc3QiLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlRm9yZWNhc3QiLCJkYXlPck5pZ2h0IiwiY29uZmlnIiwic2hvd0lucHV0IiwiZ2V0SW5wdXQiLCJhZGRDaXR5QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJjaXR5IiwidGltZTBmRGF5IiwiY29uZGl0aW9uIiwidGVtcCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiZnV0dXJlIiwic2xpY2UiLCJ3ZWF0aGVyVGFiIiwiY2xvbmVkV2VhdGhlclRhYiIsImNsb25lTm9kZSIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZvcmVjYXN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUZvcmVjYXN0IiwiaGlkZGVuIiwiZ2V0RGF0YSIsIl94IiwiX3gyIiwiX2dldERhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwidXJsIiwiYm9keSIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZldGNoIiwic2VudCIsImpzb24iLCJyZW1vdmUiLCJzdG9wIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==