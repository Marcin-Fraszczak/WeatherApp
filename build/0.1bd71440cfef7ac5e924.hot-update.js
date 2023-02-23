self["webpackHotUpdatees6_async_await"](0,{

/***/ 36:
/***/ (() => {

var config = {
  key: '46192b1a692f4486a0d181847232202 ',
  city: 'auto:ip',
  days: 6
};

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_APIconfig__WEBPACK_IMPORTED_MODULE_4__);





var key = '46192b1a692f4486a0d181847232202 ';
var days = 6;
var city = "auto:ip";
var addCityButton = document.querySelector("#add-city");
addCityButton.addEventListener("click", showInput);
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
    city = rawInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    city = city.replace(/\u0142/g, "l");
    getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.key, "&q=").concat(city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_4__.config.days), rawInput);
  }
}
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

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertWindSpeed": () => (/* binding */ convertWindSpeed),
/* harmony export */   "dayOrNight": () => (/* binding */ dayOrNight),
/* harmony export */   "futureForecast": () => (/* binding */ futureForecast)
/* harmony export */ });
/* functions to help with data manipulation */

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20f5e3cb33598dcaf1be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxnQkFBZ0JBLENBQUl5RSxHQUFHLEVBQUs7RUFDOUIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNGLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUMxQyxDQUFDO0FBRUQsSUFBTXhFLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSTJFLEdBQUcsRUFBSztFQUM1QixPQUFPQSxHQUFHLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDbEIsT0FBTztNQUNIQSxHQUFHLEVBQUVWLFVBQVUsQ0FBQ1UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQzVCbkQsSUFBSSxFQUFFbUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztNQUM3QnBELFNBQVMsRUFBRW9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNO0lBQzdDLENBQUM7RUFDTCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTTVFLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJbUUsSUFBSSxFQUFLO0VBQ3pCLElBQUlVLElBQUksR0FBRyxJQUFJVCxJQUFJLENBQUNELElBQUksQ0FBQyxDQUFDVyxRQUFRLEVBQUU7RUFDcEMsSUFBSSxDQUFDLEdBQUdELElBQUksSUFBSUEsSUFBSSxHQUFHLEVBQUUsRUFBRTtJQUN2QixPQUFPLEtBQUs7RUFDaEIsQ0FBQyxNQUFNO0lBQ0gsT0FBTyxPQUFPO0VBQ2xCO0FBQ0osQ0FBQzs7Ozs7Ozs7VUNyQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9BUEljb25maWcuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29uZmlnID0ge1xuICAgIGtleTogJzQ2MTkyYjFhNjkyZjQ0ODZhMGQxODE4NDcyMzIyMDIgJyxcbiAgICBjaXR5OiAnYXV0bzppcCcsXG4gICAgZGF5czogNlxufSIsImltcG9ydCB7Rm9yZWNhc3R9IGZyb20gXCIuL2ZvcmVjYXN0Q2xhc3NcIlxuaW1wb3J0IHtjb252ZXJ0V2luZFNwZWVkLCBmdXR1cmVGb3JlY2FzdCwgZGF5T3JOaWdodH0gZnJvbSBcIi4vaGVscGVyc1wiXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCJcblxuY29uc3Qga2V5ID0gJzQ2MTkyYjFhNjkyZjQ0ODZhMGQxODE4NDcyMzIyMDIgJ1xubGV0IGRheXMgPSA2XG5sZXQgY2l0eSA9IFwiYXV0bzppcFwiXG5cbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jaXR5XCIpXG5hZGRDaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpXG5cbmZ1bmN0aW9uIHNob3dJbnB1dChlKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHVsZV9fZm9ybVwiKVxuICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IGZhbHNlXG4gICAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbnB1dClcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlID0gXCJcIlxuICAgICAgICBmb3JtRWxlbWVudC5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHJhd0lucHV0ID0gaW5wdXRFbGVtZW50LnZhbHVlXG4gICAgaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIlxuICAgIGlmIChyYXdJbnB1dCkge1xuICAgICAgICBjaXR5ID0gcmF3SW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgICAgIGdldERhdGEoYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWdbJ2tleSddfSZxPSR7Y2l0eX0mZGF5cz0ke2NvbmZpZ1snZGF5cyddfWAsIHJhd0lucHV0KVxuICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSwgcmF3Q2l0eSkge1xuICAgIGNvbnN0IGNpdHkgPSByYXdDaXR5IHx8IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNvbnN0IHRpbWUwZkRheSA9IGRheU9yTmlnaHQoZGF0YVsnbG9jYXRpb24nXVsnbG9jYWx0aW1lJ10pXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YVsnY3VycmVudCddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgY29uc3QgdGVtcCA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcF9jJ11cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGFbJ2N1cnJlbnQnXVsncHJlc3N1cmVfbWInXVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YVsnY3VycmVudCddWydodW1pZGl0eSddXG4gICAgY29uc3Qgd2luZCA9IGNvbnZlcnRXaW5kU3BlZWQoZGF0YVsnY3VycmVudCddWyd3aW5kX2twaCddKVxuICAgIGNvbnN0IGZ1dHVyZSA9IGZ1dHVyZUZvcmVjYXN0KGRhdGFbJ2ZvcmVjYXN0J11bJ2ZvcmVjYXN0ZGF5J10uc2xpY2UoMSkpXG5cbiAgICBjb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbiAgICBsZXQgY2xvbmVkV2VhdGhlclRhYiA9IHdlYXRoZXJUYWIuY2xvbmVOb2RlKHRydWUpXG4gICAgd2VhdGhlclRhYi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lZFdlYXRoZXJUYWIpXG4gICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QoY2xvbmVkV2VhdGhlclRhYilcbiAgICBmb3JlY2FzdC51cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCwgY29uZGl0aW9uLCB0aW1lMGZEYXkpXG4gICAgZm9yZWNhc3QudXBkYXRlRm9yZWNhc3QoZnV0dXJlKVxuICAgIGNsb25lZFdlYXRoZXJUYWIuaGlkZGVuID0gZmFsc2Vcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCwgY2l0eSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIGV4dHJhY3REYXRhKGRhdGEsIGNpdHkpXG59XG5cbmdldERhdGEoYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWdbJ2tleSddfSZxPSR7Y29uZmlnWydjaXR5J119JmRheXM9JHtjb25maWdbJ2RheXMnXX1gKVxuXG4iLCIvKiBmdW5jdGlvbnMgdG8gaGVscCB3aXRoIGRhdGEgbWFuaXB1bGF0aW9uICovXG5leHBvcnQge1xuICAgIGNvbnZlcnRXaW5kU3BlZWQsXG4gICAgZnV0dXJlRm9yZWNhc3QsXG4gICAgZGF5T3JOaWdodFxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICByZXR1cm4gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG5cbmNvbnN0IGNvbnZlcnRXaW5kU3BlZWQgPSAoa3BoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa3BoIC8gMy42ICogMTApIC8gMTBcbn1cblxuY29uc3QgZnV0dXJlRm9yZWNhc3QgPSAoYXJyKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZ2V0V2Vla2RheShkYXlbJ2RhdGUnXSksXG4gICAgICAgICAgICB0ZW1wOiBkYXlbJ2RheSddWydhdmd0ZW1wX2MnXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF5WydkYXknXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgZGF5T3JOaWdodCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRIb3VycygpXG4gICAgaWYgKDYgPCBob3VyICYmIGhvdXIgPCAyMCkge1xuICAgICAgICByZXR1cm4gXCJkYXlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCJcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjBmNWUzY2IzMzU5OGRjYWYxYmVcIikiXSwibmFtZXMiOlsiY29uZmlnIiwia2V5IiwiY2l0eSIsImRheXMiLCJGb3JlY2FzdCIsImNvbnZlcnRXaW5kU3BlZWQiLCJmdXR1cmVGb3JlY2FzdCIsImRheU9yTmlnaHQiLCJhZGRDaXR5QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJmb3JtRWxlbWVudCIsImhpZGRlbiIsImdldElucHV0IiwiY2xvc2VCdXR0b24iLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRFbGVtZW50IiwidGFyZ2V0IiwicmF3SW5wdXQiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwiZ2V0RGF0YSIsImNvbmNhdCIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJ0aW1lMGZEYXkiLCJjb25kaXRpb24iLCJ0ZW1wIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsIndpbmQiLCJmdXR1cmUiLCJzbGljZSIsIndlYXRoZXJUYWIiLCJjbG9uZWRXZWF0aGVyVGFiIiwiY2xvbmVOb2RlIiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZm9yZWNhc3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRm9yZWNhc3QiLCJfeCIsIl94MiIsIl9nZXREYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInVybCIsImJvZHkiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwicmVtb3ZlIiwic3RvcCIsImNhcGl0YWxpemUiLCJzIiwidG9VcHBlckNhc2UiLCJnZXRXZWVrZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJtYXAiLCJkYXkiLCJob3VyIiwiZ2V0SG91cnMiXSwic291cmNlUm9vdCI6IiJ9