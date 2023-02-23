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
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);






var addCityButton = document.querySelector("#add-city");
addCityButton.addEventListener("click", _formFunctions__WEBPACK_IMPORTED_MODULE_3__.showInput);
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
          (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.extractData)(data, city);
          body.classList.remove("loading");
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}
getData("https://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_2__.config.key, "&q=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_2__.config.city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_2__.config.days));

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkSimilarity": () => (/* binding */ checkSimilarity),
/* harmony export */   "convertWindSpeed": () => (/* binding */ convertWindSpeed),
/* harmony export */   "dayOrNight": () => (/* binding */ dayOrNight),
/* harmony export */   "extractData": () => (/* binding */ extractData),
/* harmony export */   "futureForecast": () => (/* binding */ futureForecast),
/* harmony export */   "normalize": () => (/* binding */ normalize)
/* harmony export */ });
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* functions to help with data manipulation */


function extractData(data, rawCity) {
  var city = data['location']['name'];
  city = checkSimilarity(city, rawCity);
  var time0fDay = dayOrNight(data['location']['localtime']);
  var condition = data['current']['condition']['code'];
  var temp = data['current']['temp_c'];
  var pressure = data['current']['pressure_mb'];
  var humidity = data['current']['humidity'];
  var wind = convertWindSpeed(data['current']['wind_kph']);
  var future = futureForecast(data['forecast']['forecastday'].slice(1));
  var weatherTab = document.querySelector("div.module__weather");
  var clonedWeatherTab = weatherTab.cloneNode(true);
  weatherTab.parentElement.appendChild(clonedWeatherTab);
  var forecast = new _forecastClass__WEBPACK_IMPORTED_MODULE_0__.Forecast(clonedWeatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
  forecast.updateForecast(future);
  clonedWeatherTab.hidden = false;
}
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
var checkSimilarity = function checkSimilarity(city, rawCity) {
  if (!rawCity) {
    return city;
  } else if (city.toLowerCase() === normalize(rawCity).toLowerCase()) {
    return capitalize(rawCity);
  } else {
    return city;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44cc5297808ae516d980")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MGU1NmY2OWNhNTY5YzU0YWM0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNPO0FBQ0o7QUFFdEI7QUFHZixJQUFNSSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN6REYsYUFBYSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLHFEQUFTLENBQUM7QUFBQSxTQUduQ0UsT0FBT0EsQ0FBQUssRUFBQSxFQUFBQyxHQUFBO0VBQUEsT0FBQUMsUUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUFBLFNBQUFGLFNBQUE7RUFBQUEsUUFBQSxHQUFBRyxtRkFBQSxlQUFBQyxzRUFBQSxDQUF0QixTQUFBRSxRQUF1QkMsR0FBRyxFQUFFQyxJQUFJO0lBQUEsSUFBQUMsSUFBQSxFQUFBQyxRQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBUCxzRUFBQSxVQUFBUyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUN0QlAsSUFBSSxHQUFHZCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7VUFDM0NhLElBQUksQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1VBQUFKLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ05HLEtBQUssQ0FBQ1osR0FBRyxDQUFDO1FBQUE7VUFBM0JHLFFBQVEsR0FBQUksUUFBQSxDQUFBTSxJQUFBO1VBQUFOLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ0tOLFFBQVEsQ0FBQ1csSUFBSSxFQUFFO1FBQUE7VUFBNUJWLElBQUksR0FBQUcsUUFBQSxDQUFBTSxJQUFBO1VBQ1Y1QixxREFBVyxDQUFDbUIsSUFBSSxFQUFFSCxJQUFJLENBQUM7VUFDdkJDLElBQUksQ0FBQ1EsU0FBUyxDQUFDSyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFSLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWpCLE9BQUE7RUFBQSxDQUNuQztFQUFBLE9BQUFOLFFBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFFRFQsT0FBTyxvREFBQStCLE1BQUEsQ0FBb0RsQyxrREFBYSxTQUFBa0MsTUFBQSxDQUFNbEMsbURBQWMsWUFBQWtDLE1BQUEsQ0FBU2xDLG1EQUFjLEVBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0SDtBQUN5QztBQVExQjtBQUdmLFNBQVNFLFdBQVdBLENBQUNtQixJQUFJLEVBQUVvQixPQUFPLEVBQUU7RUFDaEMsSUFBSXZCLElBQUksR0FBR0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNuQ0gsSUFBSSxHQUFHcUIsZUFBZSxDQUFDckIsSUFBSSxFQUFFdUIsT0FBTyxDQUFDO0VBQ3JDLElBQU1DLFNBQVMsR0FBR0osVUFBVSxDQUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQzNELElBQU1zQixTQUFTLEdBQUd0QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ3RELElBQU11QixJQUFJLEdBQUd2QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO0VBQ3RDLElBQU13QixRQUFRLEdBQUd4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDO0VBQy9DLElBQU15QixRQUFRLEdBQUd6QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDO0VBQzVDLElBQU0wQixJQUFJLEdBQUdYLGdCQUFnQixDQUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDMUQsSUFBTTJCLE1BQU0sR0FBR1gsY0FBYyxDQUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXZFLElBQU1DLFVBQVUsR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ2hFLElBQUk2QyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDO0VBQ2pERixVQUFVLENBQUNHLGFBQWEsQ0FBQ0MsV0FBVyxDQUFDSCxnQkFBZ0IsQ0FBQztFQUN0RCxJQUFNSSxRQUFRLEdBQUcsSUFBSXBCLG9EQUFRLENBQUNnQixnQkFBZ0IsQ0FBQztFQUMvQ0ksUUFBUSxDQUFDQyxVQUFVLENBQUN0QyxJQUFJLEVBQUUwQixJQUFJLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVKLFNBQVMsRUFBRUQsU0FBUyxDQUFDO0VBQy9FYSxRQUFRLENBQUNFLGNBQWMsQ0FBQ1QsTUFBTSxDQUFDO0VBQy9CRyxnQkFBZ0IsQ0FBQ08sTUFBTSxHQUFHLEtBQUs7QUFDbkM7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsQ0FBQyxFQUFLO0VBQ3RCLElBQUksT0FBT0EsQ0FBQyxLQUFLLFFBQVEsRUFBRSxPQUFPLEVBQUU7RUFDcEMsSUFBSUMsTUFBTSxHQUFHRCxDQUFDLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUNsQyxPQUFPQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHRCxJQUFJLENBQUNmLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDaEQsQ0FBQyxDQUFDO0VBQ0YsT0FBT1ksTUFBTSxDQUFDSyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzNCLENBQUM7QUFFRCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsSUFBSSxFQUFLO0VBQ3pCLE9BQU9ULFVBQVUsQ0FBQyxJQUFJVSxJQUFJLENBQUNELElBQUksQ0FBQyxDQUFDRSxjQUFjLENBQUMsSUFBSSxFQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRCxJQUFNbkMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSW9DLEdBQUcsRUFBSztFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO0FBQzFDLENBQUM7QUFFRCxJQUFNbkMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJc0MsR0FBRyxFQUFLO0VBQzVCLE9BQU9BLEdBQUcsQ0FBQ1osR0FBRyxDQUFDLFVBQUFhLEdBQUcsRUFBSTtJQUNsQixPQUFPO01BQ0hBLEdBQUcsRUFBRVQsVUFBVSxDQUFDUyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDNUJoQyxJQUFJLEVBQUVnQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDO01BQzdCakMsU0FBUyxFQUFFaUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU07SUFDN0MsQ0FBQztFQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFNdEMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUk4QixJQUFJLEVBQUs7RUFDekIsSUFBSVMsSUFBSSxHQUFHLElBQUlSLElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUNVLFFBQVEsRUFBRTtFQUNwQyxJQUFJLENBQUMsR0FBR0QsSUFBSSxJQUFJQSxJQUFJLEdBQUcsRUFBRSxFQUFFO0lBQ3ZCLE9BQU8sS0FBSztFQUNoQixDQUFDLE1BQU07SUFDSCxPQUFPLE9BQU87RUFDbEI7QUFDSixDQUFDO0FBRUQsSUFBTXJDLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJdUMsS0FBSyxFQUFLO0VBQ3pCLElBQUlsQixNQUFNLEdBQUdrQixLQUFLLENBQUN2QyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUN3QyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO0VBQ25FbkIsTUFBTSxHQUFHQSxNQUFNLENBQUNtQixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztFQUN2QyxPQUFPbkIsTUFBTTtBQUNqQixDQUFDO0FBRUQsSUFBTXRCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSXJCLElBQUksRUFBRXVCLE9BQU8sRUFBSztFQUN2QyxJQUFJLENBQUNBLE9BQU8sRUFBRTtJQUNWLE9BQU92QixJQUFJO0VBQ2YsQ0FBQyxNQUFNLElBQUlBLElBQUksQ0FBQytELFdBQVcsRUFBRSxLQUFLekMsU0FBUyxDQUFDQyxPQUFPLENBQUMsQ0FBQ3dDLFdBQVcsRUFBRSxFQUFFO0lBQ2hFLE9BQU90QixVQUFVLENBQUNsQixPQUFPLENBQUM7RUFDOUIsQ0FBQyxNQUFNO0lBQ0gsT0FBT3ZCLElBQUk7RUFDZjtBQUNKLENBQUM7Ozs7Ozs7O1VDakZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCJcbmltcG9ydCB7c2hvd0lucHV0fSBmcm9tIFwiLi9mb3JtRnVuY3Rpb25zXCJcbmltcG9ydCB7ZXh0cmFjdERhdGF9IGZyb20gXCIuL2hlbHBlcnNcIlxuXG5leHBvcnQge2dldERhdGF9XG5cblxuY29uc3QgYWRkQ2l0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNpdHlcIilcbmFkZENpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbnB1dClcblxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCwgY2l0eSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgZXh0cmFjdERhdGEoZGF0YSwgY2l0eSlcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG59XG5cbmdldERhdGEoYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7Y29uZmlnWydrZXknXX0mcT0ke2NvbmZpZ1snY2l0eSddfSZkYXlzPSR7Y29uZmlnWydkYXlzJ119YClcblxuIiwiLyogZnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBkYXRhIG1hbmlwdWxhdGlvbiAqL1xuaW1wb3J0IHtGb3JlY2FzdH0gZnJvbSBcIi4vZm9yZWNhc3RDbGFzc1wiO1xuXG5leHBvcnQge1xuICAgIGNvbnZlcnRXaW5kU3BlZWQsXG4gICAgZnV0dXJlRm9yZWNhc3QsXG4gICAgZGF5T3JOaWdodCxcbiAgICBjaGVja1NpbWlsYXJpdHksXG4gICAgbm9ybWFsaXplLFxuICAgIGV4dHJhY3REYXRhLFxufVxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhLCByYXdDaXR5KSB7XG4gICAgbGV0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjaXR5ID0gY2hlY2tTaW1pbGFyaXR5KGNpdHksIHJhd0NpdHkpXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICBsZXQgcmVzdWx0ID0gcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG5cbmNvbnN0IGNvbnZlcnRXaW5kU3BlZWQgPSAoa3BoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa3BoIC8gMy42ICogMTApIC8gMTBcbn1cblxuY29uc3QgZnV0dXJlRm9yZWNhc3QgPSAoYXJyKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZ2V0V2Vla2RheShkYXlbJ2RhdGUnXSksXG4gICAgICAgICAgICB0ZW1wOiBkYXlbJ2RheSddWydhdmd0ZW1wX2MnXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF5WydkYXknXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgZGF5T3JOaWdodCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRIb3VycygpXG4gICAgaWYgKDYgPCBob3VyICYmIGhvdXIgPCAyMCkge1xuICAgICAgICByZXR1cm4gXCJkYXlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCJcbiAgICB9XG59XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChpbnB1dCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBpbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFx1MDE0Mi9nLCBcImxcIilcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNoZWNrU2ltaWxhcml0eSA9IChjaXR5LCByYXdDaXR5KSA9PiB7XG4gICAgaWYgKCFyYXdDaXR5KSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfSBlbHNlIGlmIChjaXR5LnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZShyYXdDaXR5KS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKHJhd0NpdHkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNpdHlcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDRjYzUyOTc4MDhhZTUxNmQ5ODBcIikiXSwibmFtZXMiOlsiY29uZmlnIiwic2hvd0lucHV0IiwiZXh0cmFjdERhdGEiLCJnZXREYXRhIiwiYWRkQ2l0eUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfeCIsIl94MiIsIl9nZXREYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInVybCIsImNpdHkiLCJib2R5IiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZldGNoIiwic2VudCIsImpzb24iLCJyZW1vdmUiLCJzdG9wIiwiY29uY2F0IiwiRm9yZWNhc3QiLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlRm9yZWNhc3QiLCJkYXlPck5pZ2h0IiwiY2hlY2tTaW1pbGFyaXR5Iiwibm9ybWFsaXplIiwicmF3Q2l0eSIsInRpbWUwZkRheSIsImNvbmRpdGlvbiIsInRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImZ1dHVyZSIsInNsaWNlIiwid2VhdGhlclRhYiIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmb3JlY2FzdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVGb3JlY2FzdCIsImhpZGRlbiIsImNhcGl0YWxpemUiLCJzIiwicmVzdWx0Iiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJqb2luIiwiZ2V0V2Vla2RheSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5Iiwia3BoIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwiZGF5IiwiaG91ciIsImdldEhvdXJzIiwiaW5wdXQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9