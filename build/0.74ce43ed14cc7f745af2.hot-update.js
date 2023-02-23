"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "showInput": () => (/* binding */ showInput)
/* harmony export */ });
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


function showInput(e) {
  var formElement = document.querySelector(".module__form");
  formElement.hidden = false;
  formElement.addEventListener("submit", getInput);
  var closeButton = formElement.querySelector(".btn--close");
  closeButton.addEventListener("click", function (e) {
    formElement.querySelector("input").value = "";
    formElement.hidden = true;
  });
}
function getInput(e) {
  e.preventDefault();
  var inputElement = e.target.querySelector("input");
  var rawInput = inputElement.value;
  inputElement.value = "";
  if (rawInput) {
    var city = rawInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    city = city.replace(/\u0142/g, "l");
    getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.key, "&q=").concat(city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.days), rawInput);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28ebae7a49587a6ef7ad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixZQUFZLENBQUNGLEtBQUs7RUFDbkNFLFlBQVksQ0FBQ0YsS0FBSyxHQUFHLEVBQUU7RUFDdkIsSUFBSUksUUFBUSxFQUFFO0lBQ1YsSUFBSW5ELElBQUksR0FBR21ELFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO0lBQ3BFckQsSUFBSSxHQUFHQSxJQUFJLENBQUNxRCxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztJQUNuQ25DLE9BQU8sbURBQUF5QixNQUFBLENBQW1EckQsa0RBQWEsU0FBQXFELE1BQUEsQ0FBTTNDLElBQUksWUFBQTJDLE1BQUEsQ0FBU3JELG1EQUFjLEdBQUk2RCxRQUFRLENBQUM7RUFDekg7QUFDSjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvZm9ybUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9yZWNhc3R9IGZyb20gXCIuL2ZvcmVjYXN0Q2xhc3NcIlxuaW1wb3J0IHtjb252ZXJ0V2luZFNwZWVkLCBmdXR1cmVGb3JlY2FzdCwgZGF5T3JOaWdodH0gZnJvbSBcIi4vaGVscGVyc1wiXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCJcbmltcG9ydCB7c2hvd0lucHV0LCBnZXRJbnB1dH0gZnJvbSBcIi4vZm9ybUZ1bmN0aW9uc1wiXG5cbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jaXR5XCIpXG5hZGRDaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEsIHJhd0NpdHkpIHtcbiAgICBjb25zdCBjaXR5ID0gcmF3Q2l0eSB8fCBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjb25zdCB0aW1lMGZEYXkgPSBkYXlPck5pZ2h0KGRhdGFbJ2xvY2F0aW9uJ11bJ2xvY2FsdGltZSddKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgIGNvbnN0IHRlbXAgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBfYyddXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhWydjdXJyZW50J11bJ3ByZXNzdXJlX21iJ11cbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGFbJ2N1cnJlbnQnXVsnaHVtaWRpdHknXVxuICAgIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZFNwZWVkKGRhdGFbJ2N1cnJlbnQnXVsnd2luZF9rcGgnXSlcbiAgICBjb25zdCBmdXR1cmUgPSBmdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgbGV0IGNsb25lZFdlYXRoZXJUYWIgPSB3ZWF0aGVyVGFiLmNsb25lTm9kZSh0cnVlKVxuICAgIHdlYXRoZXJUYWIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGNsb25lZFdlYXRoZXJUYWIpXG4gICAgZm9yZWNhc3QudXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbiwgdGltZTBmRGF5KVxuICAgIGZvcmVjYXN0LnVwZGF0ZUZvcmVjYXN0KGZ1dHVyZSlcbiAgICBjbG9uZWRXZWF0aGVyVGFiLmhpZGRlbiA9IGZhbHNlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEodXJsLCBjaXR5KSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgZXh0cmFjdERhdGEoZGF0YSwgY2l0eSlcbn1cblxuZ2V0RGF0YShgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2NvbmZpZ1sna2V5J119JnE9JHtjb25maWdbJ2NpdHknXX0mZGF5cz0ke2NvbmZpZ1snZGF5cyddfWApXG5cbiIsImltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi9BUEljb25maWdcIjtcblxuZXhwb3J0IHtzaG93SW5wdXQsIGdldElucHV0fVxuXG5mdW5jdGlvbiBzaG93SW5wdXQoZSkge1xuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGVfX2Zvcm1cIilcbiAgICBmb3JtRWxlbWVudC5oaWRkZW4gPSBmYWxzZVxuICAgIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5wdXQpXG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLWNsb3NlXCIpXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldElucHV0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCByYXdJbnB1dCA9IGlucHV0RWxlbWVudC52YWx1ZVxuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCJcbiAgICBpZiAocmF3SW5wdXQpIHtcbiAgICAgICAgbGV0IGNpdHkgPSByYXdJbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAgICAgY2l0eSA9IGNpdHkucmVwbGFjZSgvXFx1MDE0Mi9nLCBcImxcIilcbiAgICAgICAgZ2V0RGF0YShgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2NvbmZpZ1sna2V5J119JnE9JHtjaXR5fSZkYXlzPSR7Y29uZmlnWydkYXlzJ119YCwgcmF3SW5wdXQpXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI4ZWJhZTdhNDk1ODdhNmVmN2FkXCIpIl0sIm5hbWVzIjpbIkZvcmVjYXN0IiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZUZvcmVjYXN0IiwiZGF5T3JOaWdodCIsImNvbmZpZyIsInNob3dJbnB1dCIsImdldElucHV0IiwiYWRkQ2l0eUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJleHRyYWN0RGF0YSIsImRhdGEiLCJyYXdDaXR5IiwiY2l0eSIsInRpbWUwZkRheSIsImNvbmRpdGlvbiIsInRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImZ1dHVyZSIsInNsaWNlIiwid2VhdGhlclRhYiIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmb3JlY2FzdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVGb3JlY2FzdCIsImhpZGRlbiIsImdldERhdGEiLCJfeCIsIl94MiIsIl9nZXREYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInVybCIsImJvZHkiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwicmVtb3ZlIiwic3RvcCIsImNvbmNhdCIsImUiLCJmb3JtRWxlbWVudCIsImNsb3NlQnV0dG9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RWxlbWVudCIsInRhcmdldCIsInJhd0lucHV0Iiwibm9ybWFsaXplIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=