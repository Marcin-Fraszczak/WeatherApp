"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




/*
Parametrized config for fetching
 */
var key = '46192b1a692f4486a0d181847232202 ';
var days = 6;
var city = "auto:ip";
var url = "http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days);

/*
Collecting DOM elements for future use
 */
var body = document.querySelector("body");
var weatherTab = document.querySelector("div.module__weather");
var addCityButton = document.querySelector("#add-city");

/*
Showing and hiding the form
 */
addCityButton.addEventListener("click", showInput);
function showInput(e) {
  var formElement = document.querySelector(".module__form");
  formElement.hidden = false;
  formElement.addEventListener("submit", getInput);
  var closeButton = formElement.querySelector(".btn--close");
  closeButton.addEventListener("click", function (e) {
    formElement.hidden = true;
  });
}
function getInput(e) {
  e.preventDefault();
  var rawInput = e.target.querySelector("input").value;
  console.log(rawInput);
}

/*
Weather module as a class
 */
var Forecast = /*#__PURE__*/function () {
  function Forecast(el) {
    var _this = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Forecast);
    this.el = el;
    this.city = el.querySelector("span.city__name");
    this.temperature = el.querySelector("span.temperature__value");
    this.pressure = el.querySelector("span.pressure__value");
    this.humidity = el.querySelector("span.humidity__value");
    this.wind = el.querySelector("span.wind-speed__value");
    this.icon = el.querySelector("div.weather__icon").querySelector("img");
    this.forecast = el.querySelector("ul.weather__forecast").querySelectorAll("li");
    this.closeButton = el.querySelector(".btn--close");
    this.closeButton.addEventListener("click", function () {
      _this.el.parentElement.removeChild(_this.el);
    });
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Forecast, [{
    key: "updateData",
    value: function updateData(city, temp, press, humid, wind, cond, timeOfDay) {
      this.city.textContent = city;
      this.temperature.textContent = temp;
      this.pressure.textContent = press + "hPa";
      this.humidity.textContent = humid + "%";
      this.wind.textContent = wind + "m/s";
      this.icon.src = findIcon(cond, timeOfDay);
    }
  }, {
    key: "updateForecast",
    value: function updateForecast(forecastList) {
      this.forecast.forEach(function (day, index) {
        day.querySelector(".day").textContent = forecastList[index]["day"];
        day.querySelector(".temperature__value").textContent = forecastList[index]['temp'];
        day.querySelector("img").src = findIcon(forecastList[index]['condition'], "day");
      });
    }
  }]);
  return Forecast;
}();
/*
Condition codes from weatherapi.com to decide which icon will be used
 */
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
  return "assets/icons/".concat(translator[code], ".svg");
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
  var weatherTab = document.querySelector("div.module__weather");
  var clonedWeatherTab = weatherTab.cloneNode(true);
  clonedWeatherTab.hidden = false;
  weatherTab.parentElement.appendChild(clonedWeatherTab);
  var forecast = new Forecast(clonedWeatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
  forecast.updateForecast(future);
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
  var _getData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(url) {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body.classList.add("loading");
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          body.classList.remove("loading");
          extractData(data);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  function getData(_x) {
    return _getData.apply(this, arguments);
  }
  return getData;
})()(url);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8a8866f5aa6d3999663")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBUyxDQUFDO1VBQ2hDM0MsV0FBVyxDQUFDQyxJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQWtDLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWIsT0FBQTtFQUFBLENBQ3BCO0VBQUEsU0FOZWMsT0FBT0EsQ0FBQUMsRUFBQTtJQUFBLE9BQUFuQixRQUFBLENBQUFvQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBLE9BQVBILE9BQU87QUFBQSxLQU1wQi9GLEdBQUcsQ0FBQzs7Ozs7Ozs7VUNoTVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuUGFyYW1ldHJpemVkIGNvbmZpZyBmb3IgZmV0Y2hpbmdcbiAqL1xuY29uc3Qga2V5ID0gJzQ2MTkyYjFhNjkyZjQ0ODZhMGQxODE4NDcyMzIyMDIgJ1xubGV0IGRheXMgPSA2XG5sZXQgY2l0eSA9IFwiYXV0bzppcFwiXG5jb25zdCB1cmwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2NpdHl9JmRheXM9JHtkYXlzfWBcblxuXG4vKlxuQ29sbGVjdGluZyBET00gZWxlbWVudHMgZm9yIGZ1dHVyZSB1c2VcbiAqL1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5jb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jaXR5XCIpXG5cblxuLypcblNob3dpbmcgYW5kIGhpZGluZyB0aGUgZm9ybVxuICovXG5hZGRDaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpXG5cbmZ1bmN0aW9uIHNob3dJbnB1dChlKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHVsZV9fZm9ybVwiKVxuICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IGZhbHNlXG4gICAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbnB1dClcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldElucHV0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgcmF3SW5wdXQgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWVcbiAgICBjb25zb2xlLmxvZyhyYXdJbnB1dClcbn1cblxuXG4vKlxuV2VhdGhlciBtb2R1bGUgYXMgYSBjbGFzc1xuICovXG5jbGFzcyBGb3JlY2FzdCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsXG4gICAgICAgIHRoaXMuY2l0eSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNpdHlfX25hbWVcIilcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnRlbXBlcmF0dXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLnByZXNzdXJlID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ucHJlc3N1cmVfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5odW1pZGl0eV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy53aW5kID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ud2luZC1zcGVlZF9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5pY29uID0gZWwucXVlcnlTZWxlY3RvcihcImRpdi53ZWF0aGVyX19pY29uXCIpLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJ1bC53ZWF0aGVyX19mb3JlY2FzdFwiKS5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzLCBodW1pZCwgd2luZCwgY29uZCwgdGltZU9mRGF5KSB7XG4gICAgICAgIHRoaXMuY2l0eS50ZXh0Q29udGVudCA9IGNpdHlcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHRlbXBcbiAgICAgICAgdGhpcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IHByZXNzICsgXCJoUGFcIlxuICAgICAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gaHVtaWQgKyBcIiVcIlxuICAgICAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSB3aW5kICsgXCJtL3NcIlxuICAgICAgICB0aGlzLmljb24uc3JjID0gZmluZEljb24oY29uZCwgdGltZU9mRGF5KVxuICAgIH1cblxuICAgIHVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0TGlzdCkge1xuICAgICAgICB0aGlzLmZvcmVjYXN0LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiLmRheVwiKS50ZXh0Q29udGVudCA9IGZvcmVjYXN0TGlzdFtpbmRleF1bXCJkYXlcIl1cbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlX192YWx1ZVwiKS50ZXh0Q29udGVudCA9IGZvcmVjYXN0TGlzdFtpbmRleF1bJ3RlbXAnXVxuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gZmluZEljb24oZm9yZWNhc3RMaXN0W2luZGV4XVsnY29uZGl0aW9uJ10sIFwiZGF5XCIpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8qXG5Db25kaXRpb24gY29kZXMgZnJvbSB3ZWF0aGVyYXBpLmNvbSB0byBkZWNpZGUgd2hpY2ggaWNvbiB3aWxsIGJlIHVzZWRcbiAqL1xuY29uc3QgZmluZEljb24gPSAoY29kZSwgdGltZU9mRGF5KSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRvciA9IHtcbiAgICAgICAgMTAwMDogYGNsZWFyLSR7dGltZU9mRGF5fWAsXG4gICAgICAgIDEwMDM6IGBwYXJ0bHktY2xvdWR5LSR7dGltZU9mRGF5fWAsXG4gICAgICAgIDEwMDY6IGBjbG91ZHlgLFxuICAgICAgICAxMDA5OiBgY2xvdWR5YCxcbiAgICAgICAgMTAzMDogYGNsb3VkeWAsXG4gICAgICAgIDEwNjM6IGByYWluYCxcbiAgICAgICAgMTA2NjogYHNub3dgLFxuICAgICAgICAxMDY5OiBgc2xlZXRgLFxuICAgICAgICAxMDcyOiBgc2xlZXRgLFxuICAgICAgICAxMDg3OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTExNDogYHNub3dgLFxuICAgICAgICAxMTE3OiBgc25vd2AsXG4gICAgICAgIDExMzU6IGBjbG91ZHlgLFxuICAgICAgICAxMTQ3OiBgY2xvdWR5YCxcbiAgICAgICAgMTE1MDogYHJhaW5gLFxuICAgICAgICAxMTUzOiBgcmFpbmAsXG4gICAgICAgIDExNjg6IGByYWluYCxcbiAgICAgICAgMTE3MTogYHJhaW5gLFxuICAgICAgICAxMTgwOiBgcmFpbmAsXG4gICAgICAgIDExODM6IGByYWluYCxcbiAgICAgICAgMTE4NjogYHJhaW5gLFxuICAgICAgICAxMTg5OiBgcmFpbmAsXG4gICAgICAgIDExOTI6IGByYWluYCxcbiAgICAgICAgMTE5NTogYHJhaW5gLFxuICAgICAgICAxMTk4OiBgcmFpbmAsXG4gICAgICAgIDEyMDE6IGByYWluYCxcbiAgICAgICAgMTIwNDogYHNsZWV0YCxcbiAgICAgICAgMTIwNzogYHNsZWV0YCxcbiAgICAgICAgMTIxMDogYHNub3dgLFxuICAgICAgICAxMjEzOiBgc25vd2AsXG4gICAgICAgIDEyMTY6IGBzbm93YCxcbiAgICAgICAgMTIxOTogYHNub3dgLFxuICAgICAgICAxMjIyOiBgc25vd2AsXG4gICAgICAgIDEyMjU6IGBzbm93YCxcbiAgICAgICAgMTIzNzogYHNub3dgLFxuICAgICAgICAxMjQwOiBgcmFpbmAsXG4gICAgICAgIDEyNDM6IGByYWluYCxcbiAgICAgICAgMTI0NjogYHJhaW5gLFxuICAgICAgICAxMjQ5OiBgc2xlZXRgLFxuICAgICAgICAxMjUyOiBgc2xlZXRgLFxuICAgICAgICAxMjU1OiBgc25vd2AsXG4gICAgICAgIDEyNTg6IGBzbm93YCxcbiAgICAgICAgMTI2MTogYHNsZWV0YCxcbiAgICAgICAgMTI2NDogYHNsZWV0YCxcbiAgICAgICAgMTI3MzogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyNzY6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjc5OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI4MjogYHRodW5kZXJzdG9ybWAsXG4gICAgfVxuICAgIHJldHVybiBgYXNzZXRzL2ljb25zLyR7dHJhbnNsYXRvcltjb2RlXX0uc3ZnYFxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEpIHtcbiAgICBjb25zdCBjaXR5ID0gZGF0YVsnbG9jYXRpb24nXVsnbmFtZSddXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRXZWF0aGVyVGFiLmhpZGRlbiA9IGZhbHNlXG4gICAgd2VhdGhlclRhYi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lZFdlYXRoZXJUYWIpXG4gICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QoY2xvbmVkV2VhdGhlclRhYilcbiAgICBmb3JlY2FzdC51cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCwgY29uZGl0aW9uLCB0aW1lMGZEYXkpXG4gICAgZm9yZWNhc3QudXBkYXRlRm9yZWNhc3QoZnV0dXJlKVxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICByZXR1cm4gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG5cbmNvbnN0IGNvbnZlcnRXaW5kU3BlZWQgPSAoa3BoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa3BoIC8gMy42ICogMTApIC8gMTBcbn1cblxuY29uc3QgZnV0dXJlRm9yZWNhc3QgPSAoYXJyKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZ2V0V2Vla2RheShkYXlbJ2RhdGUnXSksXG4gICAgICAgICAgICB0ZW1wOiBkYXlbJ2RheSddWydhdmd0ZW1wX2MnXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF5WydkYXknXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgZGF5T3JOaWdodCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRIb3VycygpXG4gICAgaWYgKDYgPCBob3VyICYmIGhvdXIgPCAyMCkge1xuICAgICAgICByZXR1cm4gXCJkYXlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCJcbiAgICB9XG59XG5cbihhc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybCkge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIGV4dHJhY3REYXRhKGRhdGEpXG59KSh1cmwpXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI4YTg4NjZmNWFhNmQzOTk5NjYzXCIpIl0sIm5hbWVzIjpbImtleSIsImRheXMiLCJjaXR5IiwidXJsIiwiY29uY2F0IiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndlYXRoZXJUYWIiLCJhZGRDaXR5QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJmb3JtRWxlbWVudCIsImhpZGRlbiIsImdldElucHV0IiwiY2xvc2VCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInJhd0lucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiRm9yZWNhc3QiLCJlbCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGVtcGVyYXR1cmUiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImljb24iLCJmb3JlY2FzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJfY3JlYXRlQ2xhc3MiLCJ1cGRhdGVEYXRhIiwidGVtcCIsInByZXNzIiwiaHVtaWQiLCJjb25kIiwidGltZU9mRGF5IiwidGV4dENvbnRlbnQiLCJzcmMiLCJmaW5kSWNvbiIsInVwZGF0ZUZvcmVjYXN0IiwiZm9yZWNhc3RMaXN0IiwiZm9yRWFjaCIsImRheSIsImluZGV4IiwiY29kZSIsInRyYW5zbGF0b3IiLCJleHRyYWN0RGF0YSIsImRhdGEiLCJ0aW1lMGZEYXkiLCJkYXlPck5pZ2h0IiwiY29uZGl0aW9uIiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZSIsImZ1dHVyZUZvcmVjYXN0Iiwic2xpY2UiLCJjbG9uZWRXZWF0aGVyVGFiIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjYXBpdGFsaXplIiwicyIsInRvVXBwZXJDYXNlIiwiZ2V0V2Vla2RheSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5Iiwia3BoIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwibWFwIiwiaG91ciIsImdldEhvdXJzIiwiX2dldERhdGEiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZldGNoIiwic2VudCIsImpzb24iLCJyZW1vdmUiLCJzdG9wIiwiZ2V0RGF0YSIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9