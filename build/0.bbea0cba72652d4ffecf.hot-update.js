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
  city = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkSimilarity)(data, rawCity);
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

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showInput": () => (/* binding */ showInput)
/* harmony export */ });
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);




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
    var city = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInput);
    (0,_app__WEBPACK_IMPORTED_MODULE_1__.getData)("https://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.key, "&q=").concat(city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.days), rawInput);
  }
}

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkSimilarity": () => (/* binding */ checkSimilarity),
/* harmony export */   "convertWindSpeed": () => (/* binding */ convertWindSpeed),
/* harmony export */   "dayOrNight": () => (/* binding */ dayOrNight),
/* harmony export */   "futureForecast": () => (/* binding */ futureForecast),
/* harmony export */   "normalize": () => (/* binding */ normalize)
/* harmony export */ });
/* functions to help with data manipulation */

var capitalize = function capitalize(s) {
  if (typeof s !== 'string') return '';
  var result = s.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return result.join(" ");
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
var normalize = function normalize(input) {
  var result = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  result = result.replace(/\u0142/g, "l");
  return result;
};
var checkSimilarity = function checkSimilarity(city, rawInput) {
  if (city.toLowerCase() === normalize(rawInput).toLowerCase()) {
    return capitalize(rawInput);
  } else {
    return city;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95abc017c06f4e21bf6e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlXLElBQUksRUFBRW9ELFFBQVEsRUFBSztFQUN4QyxJQUFJcEQsSUFBSSxDQUFDMkUsV0FBVyxFQUFFLEtBQUtoQyxTQUFTLENBQUNTLFFBQVEsQ0FBQyxDQUFDdUIsV0FBVyxFQUFFLEVBQUU7SUFDMUQsT0FBT3RCLFVBQVUsQ0FBQ0QsUUFBUSxDQUFDO0VBQy9CLENBQUMsTUFBTTtJQUNILE9BQU9wRCxJQUFJO0VBQ2Y7QUFDSixDQUFDOzs7Ozs7OztVQ3hERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9mb3JtRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvcmVjYXN0fSBmcm9tIFwiLi9mb3JlY2FzdENsYXNzXCJcbmltcG9ydCB7Y29udmVydFdpbmRTcGVlZCwgZnV0dXJlRm9yZWNhc3QsIGRheU9yTmlnaHQsIGNoZWNrU2ltaWxhcml0eX0gZnJvbSBcIi4vaGVscGVyc1wiXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCJcbmltcG9ydCB7c2hvd0lucHV0fSBmcm9tIFwiLi9mb3JtRnVuY3Rpb25zXCJcblxuZXhwb3J0IHtnZXREYXRhfVxuXG5jb25zdCBhZGRDaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2l0eVwiKVxuYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KVxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhLCByYXdDaXR5KSB7XG4gICAgbGV0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjaXR5ID0gY2hlY2tTaW1pbGFyaXR5KGRhdGEsIHJhd0NpdHkpXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCwgY2l0eSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIGV4dHJhY3REYXRhKGRhdGEsIGNpdHkpXG59XG5cbmdldERhdGEoYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7Y29uZmlnWydrZXknXX0mcT0ke2NvbmZpZ1snY2l0eSddfSZkYXlzPSR7Y29uZmlnWydkYXlzJ119YClcblxuIiwiaW1wb3J0IHtjb25maWd9IGZyb20gXCIuL0FQSWNvbmZpZ1wiO1xuaW1wb3J0IHtnZXREYXRhfSBmcm9tIFwiLi9hcHBcIlxuaW1wb3J0IHtub3JtYWxpemV9IGZyb20gXCIuL2hlbHBlcnNcIlxuXG5leHBvcnQge3Nob3dJbnB1dH1cblxuZnVuY3Rpb24gc2hvd0lucHV0KGUpIHtcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG4gICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gZmFsc2VcbiAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldElucHV0KVxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUgPSBcIlwiXG4gICAgICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgcmF3SW5wdXQgPSBpbnB1dEVsZW1lbnQudmFsdWVcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiXG4gICAgaWYgKHJhd0lucHV0KSB7XG4gICAgICAgIGxldCBjaXR5ID0gbm9ybWFsaXplKHJhd0lucHV0KVxuICAgICAgICBnZXREYXRhKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2NvbmZpZ1sna2V5J119JnE9JHtjaXR5fSZkYXlzPSR7Y29uZmlnWydkYXlzJ119YCwgcmF3SW5wdXQpXG4gICAgfVxufSIsIi8qIGZ1bmN0aW9ucyB0byBoZWxwIHdpdGggZGF0YSBtYW5pcHVsYXRpb24gKi9cbmV4cG9ydCB7XG4gICAgY29udmVydFdpbmRTcGVlZCxcbiAgICBmdXR1cmVGb3JlY2FzdCxcbiAgICBkYXlPck5pZ2h0LFxuICAgIGNoZWNrU2ltaWxhcml0eSxcbiAgICBub3JtYWxpemUsXG59XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIGxldCByZXN1bHQgPSBzLnNwbGl0KFwiIFwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgIHJldHVybiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpXG59XG5cbmNvbnN0IGdldFdlZWtkYXkgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBjYXBpdGFsaXplKG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdQTCcsIHt3ZWVrZGF5OiAnbG9uZyd9KSlcbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn1cblxuY29uc3Qgbm9ybWFsaXplID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGlucHV0Lm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9cXHUwMTQyL2csIFwibFwiKVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgY2hlY2tTaW1pbGFyaXR5ID0gKGNpdHksIHJhd0lucHV0KSA9PiB7XG4gICAgaWYgKGNpdHkudG9Mb3dlckNhc2UoKSA9PT0gbm9ybWFsaXplKHJhd0lucHV0KS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKHJhd0lucHV0KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1YWJjMDE3YzA2ZjRlMjFiZjZlXCIpIl0sIm5hbWVzIjpbIkZvcmVjYXN0IiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZUZvcmVjYXN0IiwiZGF5T3JOaWdodCIsImNoZWNrU2ltaWxhcml0eSIsImNvbmZpZyIsInNob3dJbnB1dCIsImdldERhdGEiLCJhZGRDaXR5QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJjaXR5IiwidGltZTBmRGF5IiwiY29uZGl0aW9uIiwidGVtcCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiZnV0dXJlIiwic2xpY2UiLCJ3ZWF0aGVyVGFiIiwiY2xvbmVkV2VhdGhlclRhYiIsImNsb25lTm9kZSIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZvcmVjYXN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUZvcmVjYXN0IiwiaGlkZGVuIiwiX3giLCJfeDIiLCJfZ2V0RGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJ1cmwiLCJib2R5IiwicmVzcG9uc2UiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZmV0Y2giLCJzZW50IiwianNvbiIsInJlbW92ZSIsInN0b3AiLCJjb25jYXQiLCJub3JtYWxpemUiLCJlIiwiZm9ybUVsZW1lbnQiLCJnZXRJbnB1dCIsImNsb3NlQnV0dG9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RWxlbWVudCIsInRhcmdldCIsInJhd0lucHV0IiwiY2FwaXRhbGl6ZSIsInMiLCJyZXN1bHQiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJnZXRXZWVrZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJkYXkiLCJob3VyIiwiZ2V0SG91cnMiLCJpbnB1dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=