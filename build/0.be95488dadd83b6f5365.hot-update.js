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
var formElement = document.querySelector(".module__form");
var addCityButton = document.querySelector("#add-city");

/*
Showing and hiding the form
 */
addCityButton.addEventListener("click", showInput);
function showInput(e) {
  formElement.hidden = false;
  formElement.addEventListener("submit", getInput);
  var closeButton = formElement.querySelector(".btn--close");
  closeButton.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.hidden = true;
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
/******/ 	__webpack_require__.h = () => ("f1052ae0ac2ad53df489")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ3NGLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUNoQzNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFrQyxRQUFBLENBQUFTLElBQUE7TUFBQTtJQUFBLEdBQUFiLE9BQUE7RUFBQSxDQUNwQjtFQUFBLFNBTmVjLE9BQU9BLENBQUFDLEVBQUE7SUFBQSxPQUFBbkIsUUFBQSxDQUFBb0IsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxPQUFQSCxPQUFPO0FBQUEsS0FNcEIvRixHQUFHLENBQUM7Ozs7Ozs7O1VDaE1QIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLypcblBhcmFtZXRyaXplZCBjb25maWcgZm9yIGZldGNoaW5nXG4gKi9cbmNvbnN0IGtleSA9ICc0NjE5MmIxYTY5MmY0NDg2YTBkMTgxODQ3MjMyMjAyICdcbmxldCBkYXlzID0gNlxubGV0IGNpdHkgPSBcImF1dG86aXBcIlxuY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtjaXR5fSZkYXlzPSR7ZGF5c31gXG5cblxuLypcbkNvbGxlY3RpbmcgRE9NIGVsZW1lbnRzIGZvciBmdXR1cmUgdXNlXG4gKi9cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG5jb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG5jb25zdCBhZGRDaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2l0eVwiKVxuXG5cbi8qXG5TaG93aW5nIGFuZCBoaWRpbmcgdGhlIGZvcm1cbiAqL1xuYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KVxuXG5mdW5jdGlvbiBzaG93SW5wdXQoZSkge1xuICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IGZhbHNlXG4gICAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbnB1dClcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHJhd0lucHV0ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlXG4gICAgY29uc29sZS5sb2cocmF3SW5wdXQpXG59XG5cblxuLypcbldlYXRoZXIgbW9kdWxlIGFzIGEgY2xhc3NcbiAqL1xuY2xhc3MgRm9yZWNhc3Qge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbFxuICAgICAgICB0aGlzLmNpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jaXR5X19uYW1lXCIpXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi50ZW1wZXJhdHVyZV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnByZXNzdXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uaHVtaWRpdHlfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMud2luZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLndpbmQtc3BlZWRfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaWNvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJkaXYud2VhdGhlcl9faWNvblwiKS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSBlbC5xdWVyeVNlbGVjdG9yKFwidWwud2VhdGhlcl9fZm9yZWNhc3RcIikucXVlcnlTZWxlY3RvckFsbChcImxpXCIpXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWwpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzcywgaHVtaWQsIHdpbmQsIGNvbmQsIHRpbWVPZkRheSkge1xuICAgICAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSBjaXR5XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB0ZW1wXG4gICAgICAgIHRoaXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBwcmVzcyArIFwiaFBhXCJcbiAgICAgICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGh1bWlkICsgXCIlXCJcbiAgICAgICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gd2luZCArIFwibS9zXCJcbiAgICAgICAgdGhpcy5pY29uLnNyYyA9IGZpbmRJY29uKGNvbmQsIHRpbWVPZkRheSlcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JlY2FzdChmb3JlY2FzdExpc3QpIHtcbiAgICAgICAgdGhpcy5mb3JlY2FzdC5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi5kYXlcIikudGV4dENvbnRlbnQgPSBmb3JlY2FzdExpc3RbaW5kZXhdW1wiZGF5XCJdXG4gICAgICAgICAgICBkYXkucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZV9fdmFsdWVcIikudGV4dENvbnRlbnQgPSBmb3JlY2FzdExpc3RbaW5kZXhdWyd0ZW1wJ11cbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IGZpbmRJY29uKGZvcmVjYXN0TGlzdFtpbmRleF1bJ2NvbmRpdGlvbiddLCBcImRheVwiKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG4vKlxuQ29uZGl0aW9uIGNvZGVzIGZyb20gd2VhdGhlcmFwaS5jb20gdG8gZGVjaWRlIHdoaWNoIGljb24gd2lsbCBiZSB1c2VkXG4gKi9cbmNvbnN0IGZpbmRJY29uID0gKGNvZGUsIHRpbWVPZkRheSkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0b3IgPSB7XG4gICAgICAgIDEwMDA6IGBjbGVhci0ke3RpbWVPZkRheX1gLFxuICAgICAgICAxMDAzOiBgcGFydGx5LWNsb3VkeS0ke3RpbWVPZkRheX1gLFxuICAgICAgICAxMDA2OiBgY2xvdWR5YCxcbiAgICAgICAgMTAwOTogYGNsb3VkeWAsXG4gICAgICAgIDEwMzA6IGBjbG91ZHlgLFxuICAgICAgICAxMDYzOiBgcmFpbmAsXG4gICAgICAgIDEwNjY6IGBzbm93YCxcbiAgICAgICAgMTA2OTogYHNsZWV0YCxcbiAgICAgICAgMTA3MjogYHNsZWV0YCxcbiAgICAgICAgMTA4NzogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDExMTQ6IGBzbm93YCxcbiAgICAgICAgMTExNzogYHNub3dgLFxuICAgICAgICAxMTM1OiBgY2xvdWR5YCxcbiAgICAgICAgMTE0NzogYGNsb3VkeWAsXG4gICAgICAgIDExNTA6IGByYWluYCxcbiAgICAgICAgMTE1MzogYHJhaW5gLFxuICAgICAgICAxMTY4OiBgcmFpbmAsXG4gICAgICAgIDExNzE6IGByYWluYCxcbiAgICAgICAgMTE4MDogYHJhaW5gLFxuICAgICAgICAxMTgzOiBgcmFpbmAsXG4gICAgICAgIDExODY6IGByYWluYCxcbiAgICAgICAgMTE4OTogYHJhaW5gLFxuICAgICAgICAxMTkyOiBgcmFpbmAsXG4gICAgICAgIDExOTU6IGByYWluYCxcbiAgICAgICAgMTE5ODogYHJhaW5gLFxuICAgICAgICAxMjAxOiBgcmFpbmAsXG4gICAgICAgIDEyMDQ6IGBzbGVldGAsXG4gICAgICAgIDEyMDc6IGBzbGVldGAsXG4gICAgICAgIDEyMTA6IGBzbm93YCxcbiAgICAgICAgMTIxMzogYHNub3dgLFxuICAgICAgICAxMjE2OiBgc25vd2AsXG4gICAgICAgIDEyMTk6IGBzbm93YCxcbiAgICAgICAgMTIyMjogYHNub3dgLFxuICAgICAgICAxMjI1OiBgc25vd2AsXG4gICAgICAgIDEyMzc6IGBzbm93YCxcbiAgICAgICAgMTI0MDogYHJhaW5gLFxuICAgICAgICAxMjQzOiBgcmFpbmAsXG4gICAgICAgIDEyNDY6IGByYWluYCxcbiAgICAgICAgMTI0OTogYHNsZWV0YCxcbiAgICAgICAgMTI1MjogYHNsZWV0YCxcbiAgICAgICAgMTI1NTogYHNub3dgLFxuICAgICAgICAxMjU4OiBgc25vd2AsXG4gICAgICAgIDEyNjE6IGBzbGVldGAsXG4gICAgICAgIDEyNjQ6IGBzbGVldGAsXG4gICAgICAgIDEyNzM6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjc2OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI3OTogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyODI6IGB0aHVuZGVyc3Rvcm1gLFxuICAgIH1cbiAgICByZXR1cm4gYGFzc2V0cy9pY29ucy8ke3RyYW5zbGF0b3JbY29kZV19LnN2Z2Bcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhKSB7XG4gICAgY29uc3QgY2l0eSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNvbnN0IHRpbWUwZkRheSA9IGRheU9yTmlnaHQoZGF0YVsnbG9jYXRpb24nXVsnbG9jYWx0aW1lJ10pXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YVsnY3VycmVudCddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgY29uc3QgdGVtcCA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcF9jJ11cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGFbJ2N1cnJlbnQnXVsncHJlc3N1cmVfbWInXVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YVsnY3VycmVudCddWydodW1pZGl0eSddXG4gICAgY29uc3Qgd2luZCA9IGNvbnZlcnRXaW5kU3BlZWQoZGF0YVsnY3VycmVudCddWyd3aW5kX2twaCddKVxuICAgIGNvbnN0IGZ1dHVyZSA9IGZ1dHVyZUZvcmVjYXN0KGRhdGFbJ2ZvcmVjYXN0J11bJ2ZvcmVjYXN0ZGF5J10uc2xpY2UoMSkpXG5cbiAgICBjb25zdCB3ZWF0aGVyVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2R1bGVfX3dlYXRoZXJcIilcbiAgICBsZXQgY2xvbmVkV2VhdGhlclRhYiA9IHdlYXRoZXJUYWIuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxuICAgIHdlYXRoZXJUYWIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGNsb25lZFdlYXRoZXJUYWIpXG4gICAgZm9yZWNhc3QudXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbiwgdGltZTBmRGF5KVxuICAgIGZvcmVjYXN0LnVwZGF0ZUZvcmVjYXN0KGZ1dHVyZSlcbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnXG4gICAgcmV0dXJuIHNbMF0udG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcbn1cblxuY29uc3QgZ2V0V2Vla2RheSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUobmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ1BMJywge3dlZWtkYXk6ICdsb25nJ30pKVxufVxuXG5jb25zdCBjb252ZXJ0V2luZFNwZWVkID0gKGtwaCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtwaCAvIDMuNiAqIDEwKSAvIDEwXG59XG5cbmNvbnN0IGZ1dHVyZUZvcmVjYXN0ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKGRheSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGdldFdlZWtkYXkoZGF5WydkYXRlJ10pLFxuICAgICAgICAgICAgdGVtcDogZGF5WydkYXknXVsnYXZndGVtcF9jJ10sXG4gICAgICAgICAgICBjb25kaXRpb246IGRheVsnZGF5J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGRheU9yTmlnaHQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoZGF0ZSkuZ2V0SG91cnMoKVxuICAgIGlmICg2IDwgaG91ciAmJiBob3VyIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIFwiZGF5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJuaWdodFwiXG4gICAgfVxufVxuXG4oYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICBleHRyYWN0RGF0YShkYXRhKVxufSkodXJsKVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMTA1MmFlMGFjMmFkNTNkZjQ4OVwiKSJdLCJuYW1lcyI6WyJrZXkiLCJkYXlzIiwiY2l0eSIsInVybCIsImNvbmNhdCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3ZWF0aGVyVGFiIiwiZm9ybUVsZW1lbnQiLCJhZGRDaXR5QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJoaWRkZW4iLCJnZXRJbnB1dCIsImNsb3NlQnV0dG9uIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwicmF3SW5wdXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJGb3JlY2FzdCIsImVsIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0ZW1wZXJhdHVyZSIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiaWNvbiIsImZvcmVjYXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwiX2NyZWF0ZUNsYXNzIiwidXBkYXRlRGF0YSIsInRlbXAiLCJwcmVzcyIsImh1bWlkIiwiY29uZCIsInRpbWVPZkRheSIsInRleHRDb250ZW50Iiwic3JjIiwiZmluZEljb24iLCJ1cGRhdGVGb3JlY2FzdCIsImZvcmVjYXN0TGlzdCIsImZvckVhY2giLCJkYXkiLCJpbmRleCIsImNvZGUiLCJ0cmFuc2xhdG9yIiwiZXh0cmFjdERhdGEiLCJkYXRhIiwidGltZTBmRGF5IiwiZGF5T3JOaWdodCIsImNvbmRpdGlvbiIsImNvbnZlcnRXaW5kU3BlZWQiLCJmdXR1cmUiLCJmdXR1cmVGb3JlY2FzdCIsInNsaWNlIiwiY2xvbmVkV2VhdGhlclRhYiIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiY2FwaXRhbGl6ZSIsInMiLCJ0b1VwcGVyQ2FzZSIsImdldFdlZWtkYXkiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImtwaCIsIk1hdGgiLCJyb3VuZCIsImFyciIsIm1hcCIsImhvdXIiLCJnZXRIb3VycyIsIl9nZXREYXRhIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwicmVtb3ZlIiwic3RvcCIsImdldERhdGEiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==