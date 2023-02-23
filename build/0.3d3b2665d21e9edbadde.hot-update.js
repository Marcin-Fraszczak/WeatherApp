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
    formElement.querySelector("input").value = "";
    formElement.hidden = true;
  });
}
function getInput(e) {
  e.preventDefault();
  var rawInput = e.target.querySelector("input").value;
  // city = rawInput || "auto:ip"
  if (rawInput) {
    city = rawInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(city);
    // getData(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}`)
  }
}

function removePolishChars(str) {}

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
function getData(_x) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(url) {
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
  return _getData.apply(this, arguments);
}
getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("792b5c9d98e90734ad7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUN0QjdGLElBQUksQ0FBQzhGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUFBSixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNORyxLQUFLLENBQUNsRyxHQUFHLENBQUM7UUFBQTtVQUEzQjBGLFFBQVEsR0FBQUcsUUFBQSxDQUFBTSxJQUFBO1VBQUFOLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ0tMLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFO1FBQUE7VUFBNUI3QyxJQUFJLEdBQUFzQyxRQUFBLENBQUFNLElBQUE7VUFDVmpHLElBQUksQ0FBQzhGLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUNoQy9DLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFzQyxRQUFBLENBQUFTLElBQUE7TUFBQTtJQUFBLEdBQUFiLE9BQUE7RUFBQSxDQUNwQjtFQUFBLE9BQUFOLFFBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFFREosT0FBTyxtREFBQWhGLE1BQUEsQ0FBbURKLEdBQUcsU0FBQUksTUFBQSxDQUFNRixJQUFJLFlBQUFFLE1BQUEsQ0FBU0gsSUFBSSxFQUFHOzs7Ozs7OztVQzVNdkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuUGFyYW1ldHJpemVkIGNvbmZpZyBmb3IgZmV0Y2hpbmdcbiAqL1xuY29uc3Qga2V5ID0gJzQ2MTkyYjFhNjkyZjQ0ODZhMGQxODE4NDcyMzIyMDIgJ1xubGV0IGRheXMgPSA2XG5sZXQgY2l0eSA9IFwiYXV0bzppcFwiXG5jb25zdCB1cmwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2NpdHl9JmRheXM9JHtkYXlzfWBcblxuXG4vKlxuQ29sbGVjdGluZyBET00gZWxlbWVudHMgZm9yIGZ1dHVyZSB1c2VcbiAqL1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5jb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jaXR5XCIpXG5cblxuLypcblNob3dpbmcgYW5kIGhpZGluZyB0aGUgZm9ybVxuICovXG5hZGRDaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpXG5cbmZ1bmN0aW9uIHNob3dJbnB1dChlKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHVsZV9fZm9ybVwiKVxuICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IGZhbHNlXG4gICAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbnB1dClcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlID0gXCJcIlxuICAgICAgICBmb3JtRWxlbWVudC5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHJhd0lucHV0ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlXG4gICAgLy8gY2l0eSA9IHJhd0lucHV0IHx8IFwiYXV0bzppcFwiXG4gICAgaWYgKHJhd0lucHV0KSB7XG4gICAgICAgIGNpdHkgPSByYXdJbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAgICAgY29uc29sZS5sb2coY2l0eSlcbiAgICAgICAgLy8gZ2V0RGF0YShgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2NpdHl9JmRheXM9JHtkYXlzfWApXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQb2xpc2hDaGFycyhzdHIpIHtcblxufVxuXG5cbi8qXG5XZWF0aGVyIG1vZHVsZSBhcyBhIGNsYXNzXG4gKi9cbmNsYXNzIEZvcmVjYXN0IHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLmVsID0gZWxcbiAgICAgICAgdGhpcy5jaXR5ID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uY2l0eV9fbmFtZVwiKVxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4udGVtcGVyYXR1cmVfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5wcmVzc3VyZV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmh1bWlkaXR5X192YWx1ZVwiKVxuICAgICAgICB0aGlzLndpbmQgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi53aW5kLXNwZWVkX192YWx1ZVwiKVxuICAgICAgICB0aGlzLmljb24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiZGl2LndlYXRoZXJfX2ljb25cIikucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgICAgICB0aGlzLmZvcmVjYXN0ID0gZWwucXVlcnlTZWxlY3RvcihcInVsLndlYXRoZXJfX2ZvcmVjYXN0XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKVxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcihcIi5idG4tLWNsb3NlXCIpXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3MsIGh1bWlkLCB3aW5kLCBjb25kLCB0aW1lT2ZEYXkpIHtcbiAgICAgICAgdGhpcy5jaXR5LnRleHRDb250ZW50ID0gY2l0eVxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gdGVtcFxuICAgICAgICB0aGlzLnByZXNzdXJlLnRleHRDb250ZW50ID0gcHJlc3MgKyBcImhQYVwiXG4gICAgICAgIHRoaXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBodW1pZCArIFwiJVwiXG4gICAgICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IHdpbmQgKyBcIm0vc1wiXG4gICAgICAgIHRoaXMuaWNvbi5zcmMgPSBmaW5kSWNvbihjb25kLCB0aW1lT2ZEYXkpXG4gICAgfVxuXG4gICAgdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3RMaXN0KSB7XG4gICAgICAgIHRoaXMuZm9yZWNhc3QuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5XCIpLnRleHRDb250ZW50ID0gZm9yZWNhc3RMaXN0W2luZGV4XVtcImRheVwiXVxuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVfX3ZhbHVlXCIpLnRleHRDb250ZW50ID0gZm9yZWNhc3RMaXN0W2luZGV4XVsndGVtcCddXG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPSBmaW5kSWNvbihmb3JlY2FzdExpc3RbaW5kZXhdWydjb25kaXRpb24nXSwgXCJkYXlcIilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuLypcbkNvbmRpdGlvbiBjb2RlcyBmcm9tIHdlYXRoZXJhcGkuY29tIHRvIGRlY2lkZSB3aGljaCBpY29uIHdpbGwgYmUgdXNlZFxuICovXG5jb25zdCBmaW5kSWNvbiA9IChjb2RlLCB0aW1lT2ZEYXkpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdG9yID0ge1xuICAgICAgICAxMDAwOiBgY2xlYXItJHt0aW1lT2ZEYXl9YCxcbiAgICAgICAgMTAwMzogYHBhcnRseS1jbG91ZHktJHt0aW1lT2ZEYXl9YCxcbiAgICAgICAgMTAwNjogYGNsb3VkeWAsXG4gICAgICAgIDEwMDk6IGBjbG91ZHlgLFxuICAgICAgICAxMDMwOiBgY2xvdWR5YCxcbiAgICAgICAgMTA2MzogYHJhaW5gLFxuICAgICAgICAxMDY2OiBgc25vd2AsXG4gICAgICAgIDEwNjk6IGBzbGVldGAsXG4gICAgICAgIDEwNzI6IGBzbGVldGAsXG4gICAgICAgIDEwODc6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMTE0OiBgc25vd2AsXG4gICAgICAgIDExMTc6IGBzbm93YCxcbiAgICAgICAgMTEzNTogYGNsb3VkeWAsXG4gICAgICAgIDExNDc6IGBjbG91ZHlgLFxuICAgICAgICAxMTUwOiBgcmFpbmAsXG4gICAgICAgIDExNTM6IGByYWluYCxcbiAgICAgICAgMTE2ODogYHJhaW5gLFxuICAgICAgICAxMTcxOiBgcmFpbmAsXG4gICAgICAgIDExODA6IGByYWluYCxcbiAgICAgICAgMTE4MzogYHJhaW5gLFxuICAgICAgICAxMTg2OiBgcmFpbmAsXG4gICAgICAgIDExODk6IGByYWluYCxcbiAgICAgICAgMTE5MjogYHJhaW5gLFxuICAgICAgICAxMTk1OiBgcmFpbmAsXG4gICAgICAgIDExOTg6IGByYWluYCxcbiAgICAgICAgMTIwMTogYHJhaW5gLFxuICAgICAgICAxMjA0OiBgc2xlZXRgLFxuICAgICAgICAxMjA3OiBgc2xlZXRgLFxuICAgICAgICAxMjEwOiBgc25vd2AsXG4gICAgICAgIDEyMTM6IGBzbm93YCxcbiAgICAgICAgMTIxNjogYHNub3dgLFxuICAgICAgICAxMjE5OiBgc25vd2AsXG4gICAgICAgIDEyMjI6IGBzbm93YCxcbiAgICAgICAgMTIyNTogYHNub3dgLFxuICAgICAgICAxMjM3OiBgc25vd2AsXG4gICAgICAgIDEyNDA6IGByYWluYCxcbiAgICAgICAgMTI0MzogYHJhaW5gLFxuICAgICAgICAxMjQ2OiBgcmFpbmAsXG4gICAgICAgIDEyNDk6IGBzbGVldGAsXG4gICAgICAgIDEyNTI6IGBzbGVldGAsXG4gICAgICAgIDEyNTU6IGBzbm93YCxcbiAgICAgICAgMTI1ODogYHNub3dgLFxuICAgICAgICAxMjYxOiBgc2xlZXRgLFxuICAgICAgICAxMjY0OiBgc2xlZXRgLFxuICAgICAgICAxMjczOiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI3NjogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyNzk6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjgyOiBgdGh1bmRlcnN0b3JtYCxcbiAgICB9XG4gICAgcmV0dXJuIGBhc3NldHMvaWNvbnMvJHt0cmFuc2xhdG9yW2NvZGVdfS5zdmdgXG59XG5cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSkge1xuICAgIGNvbnN0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjb25zdCB0aW1lMGZEYXkgPSBkYXlPck5pZ2h0KGRhdGFbJ2xvY2F0aW9uJ11bJ2xvY2FsdGltZSddKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgIGNvbnN0IHRlbXAgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBfYyddXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhWydjdXJyZW50J11bJ3ByZXNzdXJlX21iJ11cbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGFbJ2N1cnJlbnQnXVsnaHVtaWRpdHknXVxuICAgIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZFNwZWVkKGRhdGFbJ2N1cnJlbnQnXVsnd2luZF9rcGgnXSlcbiAgICBjb25zdCBmdXR1cmUgPSBmdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgbGV0IGNsb25lZFdlYXRoZXJUYWIgPSB3ZWF0aGVyVGFiLmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZFdlYXRoZXJUYWIuaGlkZGVuID0gZmFsc2VcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG59XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIHJldHVybiBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXG59XG5cbmNvbnN0IGdldFdlZWtkYXkgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBjYXBpdGFsaXplKG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdQTCcsIHt3ZWVrZGF5OiAnbG9uZyd9KSlcbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICBleHRyYWN0RGF0YShkYXRhKVxufVxuXG5nZXREYXRhKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7Y2l0eX0mZGF5cz0ke2RheXN9YClcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzkyYjVjOWQ5OGU5MDczNGFkN2ZcIikiXSwibmFtZXMiOlsia2V5IiwiZGF5cyIsImNpdHkiLCJ1cmwiLCJjb25jYXQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2VhdGhlclRhYiIsImFkZENpdHlCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0lucHV0IiwiZSIsImZvcm1FbGVtZW50IiwiaGlkZGVuIiwiZ2V0SW5wdXQiLCJjbG9zZUJ1dHRvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyYXdJbnB1dCIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlUG9saXNoQ2hhcnMiLCJzdHIiLCJGb3JlY2FzdCIsImVsIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0ZW1wZXJhdHVyZSIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiaWNvbiIsImZvcmVjYXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIl9jcmVhdGVDbGFzcyIsInVwZGF0ZURhdGEiLCJ0ZW1wIiwicHJlc3MiLCJodW1pZCIsImNvbmQiLCJ0aW1lT2ZEYXkiLCJ0ZXh0Q29udGVudCIsInNyYyIsImZpbmRJY29uIiwidXBkYXRlRm9yZWNhc3QiLCJmb3JlY2FzdExpc3QiLCJmb3JFYWNoIiwiZGF5IiwiaW5kZXgiLCJjb2RlIiwidHJhbnNsYXRvciIsImV4dHJhY3REYXRhIiwiZGF0YSIsInRpbWUwZkRheSIsImRheU9yTmlnaHQiLCJjb25kaXRpb24iLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlIiwiZnV0dXJlRm9yZWNhc3QiLCJzbGljZSIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImNhcGl0YWxpemUiLCJzIiwidG9VcHBlckNhc2UiLCJnZXRXZWVrZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJtYXAiLCJob3VyIiwiZ2V0SG91cnMiLCJnZXREYXRhIiwiX3giLCJfZ2V0RGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwicmVtb3ZlIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=