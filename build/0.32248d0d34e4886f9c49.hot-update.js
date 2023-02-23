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
    getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days), rawInput);
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
getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days));

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertWindSpeed": () => (/* binding */ convertWindSpeed),
/* harmony export */   "dayOrNight": () => (/* binding */ dayOrNight),
/* harmony export */   "futureForecast": () => (/* binding */ futureForecast),
/* harmony export */   "getWeekday": () => (/* binding */ getWeekday)
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
/******/ 	__webpack_require__.h = () => ("1bd71440cfef7ac5e924")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMjI0OGQwZDM0ZTQ4ODZmOWM0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzBDO0FBRWxGLElBQU1LLEdBQUcsR0FBRyxrQ0FBa0M7QUFDOUMsSUFBSUMsSUFBSSxHQUFHLENBQUM7QUFDWixJQUFJQyxJQUFJLEdBQUcsU0FBUztBQUVwQixJQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN6REYsYUFBYSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQztBQUVsRCxTQUFTQSxTQUFTQSxDQUFDQyxDQUFDLEVBQUU7RUFDbEIsSUFBTUMsV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDM0RJLFdBQVcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7RUFDMUJELFdBQVcsQ0FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSyxRQUFRLENBQUM7RUFDaEQsSUFBSUMsV0FBVyxHQUFHSCxXQUFXLENBQUNKLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDMURPLFdBQVcsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNFLENBQUMsRUFBSztJQUN6Q0MsV0FBVyxDQUFDSixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNRLEtBQUssR0FBRyxFQUFFO0lBQzdDSixXQUFXLENBQUNDLE1BQU0sR0FBRyxJQUFJO0VBQzdCLENBQUMsQ0FBQztBQUNOO0FBRUEsU0FBU0MsUUFBUUEsQ0FBQ0gsQ0FBQyxFQUFFO0VBQ2pCQSxDQUFDLENBQUNNLGNBQWMsRUFBRTtFQUNsQixJQUFNQyxZQUFZLEdBQUdQLENBQUMsQ0FBQ1EsTUFBTSxDQUFDWCxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ3BELElBQU1ZLFFBQVEsR0FBR0YsWUFBWSxDQUFDRixLQUFLO0VBQ25DRSxZQUFZLENBQUNGLEtBQUssR0FBRyxFQUFFO0VBQ3ZCLElBQUlJLFFBQVEsRUFBRTtJQUNWZixJQUFJLEdBQUdlLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO0lBQ2hFakIsSUFBSSxHQUFHQSxJQUFJLENBQUNpQixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztJQUNuQ0MsT0FBTyxtREFBQUMsTUFBQSxDQUFtRHJCLEdBQUcsU0FBQXFCLE1BQUEsQ0FBTW5CLElBQUksWUFBQW1CLE1BQUEsQ0FBU3BCLElBQUksR0FBSWdCLFFBQVEsQ0FBQztFQUNyRztBQUNKO0FBS0EsU0FBU0ssV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUU7RUFDaEMsSUFBTXRCLElBQUksR0FBR3NCLE9BQU8sSUFBSUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNoRCxJQUFNRSxTQUFTLEdBQUcxQixvREFBVSxDQUFDd0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQzNELElBQU1HLFNBQVMsR0FBR0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUN0RCxJQUFNSSxJQUFJLEdBQUdKLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7RUFDdEMsSUFBTUssUUFBUSxHQUFHTCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDO0VBQy9DLElBQU1NLFFBQVEsR0FBR04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztFQUM1QyxJQUFNTyxJQUFJLEdBQUdqQywwREFBZ0IsQ0FBQzBCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUMxRCxJQUFNUSxNQUFNLEdBQUdqQyx3REFBYyxDQUFDeUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFdkUsSUFBTUMsVUFBVSxHQUFHN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7RUFDaEUsSUFBSTZCLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUM7RUFDakRGLFVBQVUsQ0FBQ0csYUFBYSxDQUFDQyxXQUFXLENBQUNILGdCQUFnQixDQUFDO0VBQ3RELElBQU1JLFFBQVEsR0FBRyxJQUFJM0Msb0RBQVEsQ0FBQ3VDLGdCQUFnQixDQUFDO0VBQy9DSSxRQUFRLENBQUNDLFVBQVUsQ0FBQ3JDLElBQUksRUFBRXlCLElBQUksRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUosU0FBUyxFQUFFRCxTQUFTLENBQUM7RUFDL0VhLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDVCxNQUFNLENBQUM7RUFDL0JHLGdCQUFnQixDQUFDeEIsTUFBTSxHQUFHLEtBQUs7QUFDbkM7QUFBQyxTQUdjVSxPQUFPQSxDQUFBcUIsRUFBQSxFQUFBQyxHQUFBO0VBQUEsT0FBQUMsUUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUFBLFNBQUFGLFNBQUE7RUFBQUEsUUFBQSxHQUFBRyxtRkFBQSxlQUFBQyxzRUFBQSxDQUF0QixTQUFBRSxRQUF1QkMsR0FBRyxFQUFFaEQsSUFBSTtJQUFBLElBQUFpRCxJQUFBLEVBQUFDLFFBQUEsRUFBQTdCLElBQUE7SUFBQSxPQUFBd0Isc0VBQUEsVUFBQU8sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFDdEJOLElBQUksR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztVQUMzQzhDLElBQUksQ0FBQ08sU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1VBQUFKLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ05HLEtBQUssQ0FBQ1YsR0FBRyxDQUFDO1FBQUE7VUFBM0JFLFFBQVEsR0FBQUcsUUFBQSxDQUFBTSxJQUFBO1VBQUFOLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ0tMLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFO1FBQUE7VUFBNUJ2QyxJQUFJLEdBQUFnQyxRQUFBLENBQUFNLElBQUE7VUFDVlYsSUFBSSxDQUFDTyxTQUFTLENBQUNLLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFDaEN6QyxXQUFXLENBQUNDLElBQUksRUFBRXJCLElBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBcUQsUUFBQSxDQUFBUyxJQUFBO01BQUE7SUFBQSxHQUFBZixPQUFBO0VBQUEsQ0FDMUI7RUFBQSxPQUFBTixRQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBRUR6QixPQUFPLG1EQUFBQyxNQUFBLENBQW1EckIsR0FBRyxTQUFBcUIsTUFBQSxDQUFNbkIsSUFBSSxZQUFBbUIsTUFBQSxDQUFTcEIsSUFBSSxFQUFHOzs7Ozs7Ozs7Ozs7OztBQ2pFdkY7QUFLYztBQUdkLElBQU1nRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsQ0FBQyxFQUFLO0VBQ3RCLElBQUksT0FBT0EsQ0FBQyxLQUFLLFFBQVEsRUFBRSxPQUFPLEVBQUU7RUFDcEMsT0FBT0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0QsQ0FBQyxDQUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsSUFBTXBDLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJd0UsSUFBSSxFQUFLO0VBQ3pCLE9BQU9ILFVBQVUsQ0FBQyxJQUFJSSxJQUFJLENBQUNELElBQUksQ0FBQyxDQUFDRSxjQUFjLENBQUMsSUFBSSxFQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRCxJQUFNMUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSTJFLEdBQUcsRUFBSztFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO0FBQzFDLENBQUM7QUFFRCxJQUFNMUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJNkUsR0FBRyxFQUFLO0VBQzVCLE9BQU9BLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtJQUNsQixPQUFPO01BQ0hBLEdBQUcsRUFBRWpGLFVBQVUsQ0FBQ2lGLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUM1QmxELElBQUksRUFBRWtELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7TUFDN0JuRCxTQUFTLEVBQUVtRCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTTtJQUM3QyxDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU05RSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSXFFLElBQUksRUFBSztFQUN6QixJQUFJVSxJQUFJLEdBQUcsSUFBSVQsSUFBSSxDQUFDRCxJQUFJLENBQUMsQ0FBQ1csUUFBUSxFQUFFO0VBQ3BDLElBQUksQ0FBQyxHQUFHRCxJQUFJLElBQUlBLElBQUksR0FBRyxFQUFFLEVBQUU7SUFDdkIsT0FBTyxLQUFLO0VBQ2hCLENBQUMsTUFBTTtJQUNILE9BQU8sT0FBTztFQUNsQjtBQUNKLENBQUM7Ozs7Ozs7O1VDdENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvcmVjYXN0fSBmcm9tIFwiLi9mb3JlY2FzdENsYXNzXCJcbmltcG9ydCB7Z2V0V2Vla2RheSwgY29udmVydFdpbmRTcGVlZCwgZnV0dXJlRm9yZWNhc3QsIGRheU9yTmlnaHR9IGZyb20gXCIuL2hlbHBlcnNcIlxuXG5jb25zdCBrZXkgPSAnNDYxOTJiMWE2OTJmNDQ4NmEwZDE4MTg0NzIzMjIwMiAnXG5sZXQgZGF5cyA9IDZcbmxldCBjaXR5ID0gXCJhdXRvOmlwXCJcblxuY29uc3QgYWRkQ2l0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNpdHlcIilcbmFkZENpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbnB1dClcblxuZnVuY3Rpb24gc2hvd0lucHV0KGUpIHtcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG4gICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gZmFsc2VcbiAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldElucHV0KVxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUgPSBcIlwiXG4gICAgICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgcmF3SW5wdXQgPSBpbnB1dEVsZW1lbnQudmFsdWVcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiXG4gICAgaWYgKHJhd0lucHV0KSB7XG4gICAgICAgIGNpdHkgPSByYXdJbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAgICAgY2l0eSA9IGNpdHkucmVwbGFjZSgvXFx1MDE0Mi9nLCBcImxcIilcbiAgICAgICAgZ2V0RGF0YShgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2NpdHl9JmRheXM9JHtkYXlzfWAsIHJhd0lucHV0KVxuICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSwgcmF3Q2l0eSkge1xuICAgIGNvbnN0IGNpdHkgPSByYXdDaXR5IHx8IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNvbnN0IHRpbWUwZkRheSA9IGRheU9yTmlnaHQoZGF0YVsnbG9jYXRpb24nXVsnbG9jYWx0aW1lJ10pXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YVsnY3VycmVudCddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgY29uc3QgdGVtcCA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcF9jJ11cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGFbJ2N1cnJlbnQnXVsncHJlc3N1cmVfbWInXVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YVsnY3VycmVudCddWydodW1pZGl0eSddXG4gICAgY29uc3Qgd2luZCA9IGNvbnZlcnRXaW5kU3BlZWQoZGF0YVsnY3VycmVudCddWyd3aW5kX2twaCddKVxuICAgIGNvbnN0IGZ1dHVyZSA9IGZ1dHVyZUZvcmVjYXN0KGRhdGFbJ2ZvcmVjYXN0J11bJ2ZvcmVjYXN0ZGF5J10uc2xpY2UoMSkpXG5cbiAgICBjb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbiAgICBsZXQgY2xvbmVkV2VhdGhlclRhYiA9IHdlYXRoZXJUYWIuY2xvbmVOb2RlKHRydWUpXG4gICAgd2VhdGhlclRhYi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lZFdlYXRoZXJUYWIpXG4gICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QoY2xvbmVkV2VhdGhlclRhYilcbiAgICBmb3JlY2FzdC51cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCwgY29uZGl0aW9uLCB0aW1lMGZEYXkpXG4gICAgZm9yZWNhc3QudXBkYXRlRm9yZWNhc3QoZnV0dXJlKVxuICAgIGNsb25lZFdlYXRoZXJUYWIuaGlkZGVuID0gZmFsc2Vcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCwgY2l0eSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIGV4dHJhY3REYXRhKGRhdGEsIGNpdHkpXG59XG5cbmdldERhdGEoYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtjaXR5fSZkYXlzPSR7ZGF5c31gKVxuXG4iLCIvKiBmdW5jdGlvbnMgdG8gaGVscCB3aXRoIGRhdGEgbWFuaXB1bGF0aW9uICovXG5leHBvcnQge1xuICAgIGdldFdlZWtkYXksXG4gICAgY29udmVydFdpbmRTcGVlZCxcbiAgICBmdXR1cmVGb3JlY2FzdCxcbiAgICBkYXlPck5pZ2h0XG59XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIHJldHVybiBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXG59XG5cbmNvbnN0IGdldFdlZWtkYXkgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBjYXBpdGFsaXplKG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdQTCcsIHt3ZWVrZGF5OiAnbG9uZyd9KSlcbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYmQ3MTQ0MGNmZWY3YWM1ZTkyNFwiKSJdLCJuYW1lcyI6WyJGb3JlY2FzdCIsImdldFdlZWtkYXkiLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlRm9yZWNhc3QiLCJkYXlPck5pZ2h0Iiwia2V5IiwiZGF5cyIsImNpdHkiLCJhZGRDaXR5QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJmb3JtRWxlbWVudCIsImhpZGRlbiIsImdldElucHV0IiwiY2xvc2VCdXR0b24iLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRFbGVtZW50IiwidGFyZ2V0IiwicmF3SW5wdXQiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwiZ2V0RGF0YSIsImNvbmNhdCIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJ0aW1lMGZEYXkiLCJjb25kaXRpb24iLCJ0ZW1wIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsIndpbmQiLCJmdXR1cmUiLCJzbGljZSIsIndlYXRoZXJUYWIiLCJjbG9uZWRXZWF0aGVyVGFiIiwiY2xvbmVOb2RlIiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZm9yZWNhc3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRm9yZWNhc3QiLCJfeCIsIl94MiIsIl9nZXREYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInVybCIsImJvZHkiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwicmVtb3ZlIiwic3RvcCIsImNhcGl0YWxpemUiLCJzIiwidG9VcHBlckNhc2UiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImtwaCIsIk1hdGgiLCJyb3VuZCIsImFyciIsIm1hcCIsImRheSIsImhvdXIiLCJnZXRIb3VycyJdLCJzb3VyY2VSb290IjoiIn0=