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

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showInput": () => (/* binding */ showInput)
/* harmony export */ });
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);



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
    (0,_app__WEBPACK_IMPORTED_MODULE_1__.getData)("http://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.key, "&q=").concat(city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.days), rawInput);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("702c3c2f07a28a9cdb1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41OWI2MjhiYWEzZjI1MDZmMmNiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDOEI7QUFDcEM7QUFDTztBQUUxQjtBQUVmLElBQU1PLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3pERixhQUFhLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRUwscURBQVMsQ0FBQztBQUVsRCxTQUFTTSxXQUFXQSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtFQUNoQyxJQUFNQyxJQUFJLEdBQUdELE9BQU8sSUFBSUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNoRCxJQUFNRyxTQUFTLEdBQUdaLG9EQUFVLENBQUNTLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUMzRCxJQUFNSSxTQUFTLEdBQUdKLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7RUFDdEQsSUFBTUssSUFBSSxHQUFHTCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO0VBQ3RDLElBQU1NLFFBQVEsR0FBR04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztFQUMvQyxJQUFNTyxRQUFRLEdBQUdQLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUM7RUFDNUMsSUFBTVEsSUFBSSxHQUFHbkIsMERBQWdCLENBQUNXLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUMxRCxJQUFNUyxNQUFNLEdBQUduQix3REFBYyxDQUFDVSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUV2RSxJQUFNQyxVQUFVLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ2hFLElBQUllLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUM7RUFDakRGLFVBQVUsQ0FBQ0csYUFBYSxDQUFDQyxXQUFXLENBQUNILGdCQUFnQixDQUFDO0VBQ3RELElBQU1JLFFBQVEsR0FBRyxJQUFJNUIsb0RBQVEsQ0FBQ3dCLGdCQUFnQixDQUFDO0VBQy9DSSxRQUFRLENBQUNDLFVBQVUsQ0FBQ2YsSUFBSSxFQUFFRyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVKLFNBQVMsRUFBRUQsU0FBUyxDQUFDO0VBQy9FYSxRQUFRLENBQUNFLGNBQWMsQ0FBQ1QsTUFBTSxDQUFDO0VBQy9CRyxnQkFBZ0IsQ0FBQ08sTUFBTSxHQUFHLEtBQUs7QUFDbkM7QUFBQyxTQUVjekIsT0FBT0EsQ0FBQTBCLEVBQUEsRUFBQUMsR0FBQTtFQUFBLE9BQUFDLFFBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFBQSxTQUFBRixTQUFBO0VBQUFBLFFBQUEsR0FBQUcsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBdEIsU0FBQUUsUUFBdUJDLEdBQUcsRUFBRTNCLElBQUk7SUFBQSxJQUFBNEIsSUFBQSxFQUFBQyxRQUFBLEVBQUEvQixJQUFBO0lBQUEsT0FBQTBCLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQ3RCTixJQUFJLEdBQUdsQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7VUFDM0NpQyxJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUFBSixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNORyxLQUFLLENBQUNWLEdBQUcsQ0FBQztRQUFBO1VBQTNCRSxRQUFRLEdBQUFHLFFBQUEsQ0FBQU0sSUFBQTtVQUFBTixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNLTCxRQUFRLENBQUNVLElBQUksRUFBRTtRQUFBO1VBQTVCekMsSUFBSSxHQUFBa0MsUUFBQSxDQUFBTSxJQUFBO1VBQ1ZWLElBQUksQ0FBQ08sU0FBUyxDQUFDSyxNQUFNLENBQUMsU0FBUyxDQUFDO1VBQ2hDM0MsV0FBVyxDQUFDQyxJQUFJLEVBQUVFLElBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBZ0MsUUFBQSxDQUFBUyxJQUFBO01BQUE7SUFBQSxHQUFBZixPQUFBO0VBQUEsQ0FDMUI7RUFBQSxPQUFBTixRQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBRUQ5QixPQUFPLG1EQUFBa0QsTUFBQSxDQUFtRHBELGtEQUFhLFNBQUFvRCxNQUFBLENBQU1wRCxtREFBYyxZQUFBb0QsTUFBQSxDQUFTcEQsbURBQWMsRUFBRzs7Ozs7Ozs7Ozs7OztBQ3RDbEY7QUFDTjtBQUNaO0FBRWpCLFNBQVNDLFNBQVNBLENBQUNvRCxDQUFDLEVBQUU7RUFDbEIsSUFBTUMsV0FBVyxHQUFHbEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0VBQzNEaUQsV0FBVyxDQUFDM0IsTUFBTSxHQUFHLEtBQUs7RUFDMUIyQixXQUFXLENBQUNoRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVpRCxRQUFRLENBQUM7RUFDaEQsSUFBSUMsV0FBVyxHQUFHRixXQUFXLENBQUNqRCxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQzFEbUQsV0FBVyxDQUFDbEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMrQyxDQUFDLEVBQUs7SUFDekNDLFdBQVcsQ0FBQ2pELGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ29ELEtBQUssR0FBRyxFQUFFO0lBQzdDSCxXQUFXLENBQUMzQixNQUFNLEdBQUcsSUFBSTtFQUM3QixDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVM0QixRQUFRQSxDQUFDRixDQUFDLEVBQUU7RUFDakJBLENBQUMsQ0FBQ0ssY0FBYyxFQUFFO0VBQ2xCLElBQU1DLFlBQVksR0FBR04sQ0FBQyxDQUFDTyxNQUFNLENBQUN2RCxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ3BELElBQU13RCxRQUFRLEdBQUdGLFlBQVksQ0FBQ0YsS0FBSztFQUNuQ0UsWUFBWSxDQUFDRixLQUFLLEdBQUcsRUFBRTtFQUN2QixJQUFJSSxRQUFRLEVBQUU7SUFDVixJQUFJbkQsSUFBSSxHQUFHbUQsUUFBUSxDQUFDQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7SUFDcEVyRCxJQUFJLEdBQUdBLElBQUksQ0FBQ3FELE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO0lBQ25DN0QsNkNBQU8sbURBQUFrRCxNQUFBLENBQW1EcEQsa0RBQWEsU0FBQW9ELE1BQUEsQ0FBTTFDLElBQUksWUFBQTBDLE1BQUEsQ0FBU3BELG1EQUFjLEdBQUk2RCxRQUFRLENBQUM7RUFDekg7QUFDSjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvZm9ybUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9yZWNhc3R9IGZyb20gXCIuL2ZvcmVjYXN0Q2xhc3NcIlxuaW1wb3J0IHtjb252ZXJ0V2luZFNwZWVkLCBmdXR1cmVGb3JlY2FzdCwgZGF5T3JOaWdodH0gZnJvbSBcIi4vaGVscGVyc1wiXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCJcbmltcG9ydCB7c2hvd0lucHV0fSBmcm9tIFwiLi9mb3JtRnVuY3Rpb25zXCJcblxuZXhwb3J0IHtnZXREYXRhfVxuXG5jb25zdCBhZGRDaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2l0eVwiKVxuYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KVxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhLCByYXdDaXR5KSB7XG4gICAgY29uc3QgY2l0eSA9IHJhd0NpdHkgfHwgZGF0YVsnbG9jYXRpb24nXVsnbmFtZSddXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCwgY2l0eSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIGV4dHJhY3REYXRhKGRhdGEsIGNpdHkpXG59XG5cbmdldERhdGEoYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWdbJ2tleSddfSZxPSR7Y29uZmlnWydjaXR5J119JmRheXM9JHtjb25maWdbJ2RheXMnXX1gKVxuXG4iLCJpbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCI7XG5pbXBvcnQge2dldERhdGF9IGZyb20gXCIuL2FwcFwiXG5leHBvcnQge3Nob3dJbnB1dH1cblxuZnVuY3Rpb24gc2hvd0lucHV0KGUpIHtcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG4gICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gZmFsc2VcbiAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldElucHV0KVxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUgPSBcIlwiXG4gICAgICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgcmF3SW5wdXQgPSBpbnB1dEVsZW1lbnQudmFsdWVcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiXG4gICAgaWYgKHJhd0lucHV0KSB7XG4gICAgICAgIGxldCBjaXR5ID0gcmF3SW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgICAgIGdldERhdGEoYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWdbJ2tleSddfSZxPSR7Y2l0eX0mZGF5cz0ke2NvbmZpZ1snZGF5cyddfWAsIHJhd0lucHV0KVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MDJjM2MyZjA3YTI4YTljZGIxYlwiKSJdLCJuYW1lcyI6WyJGb3JlY2FzdCIsImNvbnZlcnRXaW5kU3BlZWQiLCJmdXR1cmVGb3JlY2FzdCIsImRheU9yTmlnaHQiLCJjb25maWciLCJzaG93SW5wdXQiLCJnZXREYXRhIiwiYWRkQ2l0eUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJleHRyYWN0RGF0YSIsImRhdGEiLCJyYXdDaXR5IiwiY2l0eSIsInRpbWUwZkRheSIsImNvbmRpdGlvbiIsInRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImZ1dHVyZSIsInNsaWNlIiwid2VhdGhlclRhYiIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmb3JlY2FzdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVGb3JlY2FzdCIsImhpZGRlbiIsIl94IiwiX3gyIiwiX2dldERhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwidXJsIiwiYm9keSIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZldGNoIiwic2VudCIsImpzb24iLCJyZW1vdmUiLCJzdG9wIiwiY29uY2F0IiwiZSIsImZvcm1FbGVtZW50IiwiZ2V0SW5wdXQiLCJjbG9zZUJ1dHRvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEVsZW1lbnQiLCJ0YXJnZXQiLCJyYXdJbnB1dCIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9