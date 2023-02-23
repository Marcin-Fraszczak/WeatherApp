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
  var city = data['location']['name'];
  city = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkSimilarity)(city, rawCity);
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
getData("https://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.key, "&q=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.days));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc6449c9ac20e421280d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FDS0wsUUFBUSxDQUFDVSxJQUFJLEVBQUU7UUFBQTtVQUE1QnpDLElBQUksR0FBQWtDLFFBQUEsQ0FBQU0sSUFBQTtVQUNWVixJQUFJLENBQUNPLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUNoQzNDLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFRSxJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQWdDLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWYsT0FBQTtFQUFBLENBQzFCO0VBQUEsT0FBQU4sUUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUVEOUIsT0FBTyxvREFBQWtELE1BQUEsQ0FBb0RwRCxrREFBYSxTQUFBb0QsTUFBQSxDQUFNcEQsbURBQWMsWUFBQW9ELE1BQUEsQ0FBU3BELG1EQUFjLEVBQUc7Ozs7Ozs7O1VDdkN0SCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9yZWNhc3R9IGZyb20gXCIuL2ZvcmVjYXN0Q2xhc3NcIlxuaW1wb3J0IHtjb252ZXJ0V2luZFNwZWVkLCBmdXR1cmVGb3JlY2FzdCwgZGF5T3JOaWdodCwgY2hlY2tTaW1pbGFyaXR5fSBmcm9tIFwiLi9oZWxwZXJzXCJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi9BUEljb25maWdcIlxuaW1wb3J0IHtzaG93SW5wdXR9IGZyb20gXCIuL2Zvcm1GdW5jdGlvbnNcIlxuXG5leHBvcnQge2dldERhdGF9XG5cbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jaXR5XCIpXG5hZGRDaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEsIHJhd0NpdHkpIHtcbiAgICBsZXQgY2l0eSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNpdHkgPSBjaGVja1NpbWlsYXJpdHkoY2l0eSwgcmF3Q2l0eSlcbiAgICBjb25zdCB0aW1lMGZEYXkgPSBkYXlPck5pZ2h0KGRhdGFbJ2xvY2F0aW9uJ11bJ2xvY2FsdGltZSddKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgIGNvbnN0IHRlbXAgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBfYyddXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhWydjdXJyZW50J11bJ3ByZXNzdXJlX21iJ11cbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGFbJ2N1cnJlbnQnXVsnaHVtaWRpdHknXVxuICAgIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZFNwZWVkKGRhdGFbJ2N1cnJlbnQnXVsnd2luZF9rcGgnXSlcbiAgICBjb25zdCBmdXR1cmUgPSBmdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgbGV0IGNsb25lZFdlYXRoZXJUYWIgPSB3ZWF0aGVyVGFiLmNsb25lTm9kZSh0cnVlKVxuICAgIHdlYXRoZXJUYWIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGNsb25lZFdlYXRoZXJUYWIpXG4gICAgZm9yZWNhc3QudXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbiwgdGltZTBmRGF5KVxuICAgIGZvcmVjYXN0LnVwZGF0ZUZvcmVjYXN0KGZ1dHVyZSlcbiAgICBjbG9uZWRXZWF0aGVyVGFiLmhpZGRlbiA9IGZhbHNlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEodXJsLCBjaXR5KSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgZXh0cmFjdERhdGEoZGF0YSwgY2l0eSlcbn1cblxuZ2V0RGF0YShgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWdbJ2tleSddfSZxPSR7Y29uZmlnWydjaXR5J119JmRheXM9JHtjb25maWdbJ2RheXMnXX1gKVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYzY0NDljOWFjMjBlNDIxMjgwZFwiKSJdLCJuYW1lcyI6WyJGb3JlY2FzdCIsImNvbnZlcnRXaW5kU3BlZWQiLCJmdXR1cmVGb3JlY2FzdCIsImRheU9yTmlnaHQiLCJjaGVja1NpbWlsYXJpdHkiLCJjb25maWciLCJzaG93SW5wdXQiLCJnZXREYXRhIiwiYWRkQ2l0eUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJleHRyYWN0RGF0YSIsImRhdGEiLCJyYXdDaXR5IiwiY2l0eSIsInRpbWUwZkRheSIsImNvbmRpdGlvbiIsInRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImZ1dHVyZSIsInNsaWNlIiwid2VhdGhlclRhYiIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmb3JlY2FzdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVGb3JlY2FzdCIsImhpZGRlbiIsIl94IiwiX3gyIiwiX2dldERhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwidXJsIiwiYm9keSIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZldGNoIiwic2VudCIsImpzb24iLCJyZW1vdmUiLCJzdG9wIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==