"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




/*
Parametrized config for fetching
 */
var key = '46192b1a692f4486a0d181847232202 ';
var days = 6;
var city = "auto:ip";
var url = "http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days);
var searchTab = document.querySelector("div.module__form");
searchTab.hidden = false;
var weatherTab = document.querySelector("div.module__weather");
weatherTab.hidden = false;
var addCityButton = document.querySelector("#add-city");
addCityButton.addEventListener("click", showInput);
function showInput(e) {}
var Forecast = /*#__PURE__*/function () {
  function Forecast(el) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Forecast);
    this.el = el;
    this.city = el.querySelector("span.city__name");
    this.temperature = el.querySelector("span.temperature__value");
    this.pressure = el.querySelector("span.pressure__value");
    this.humidity = el.querySelector("span.humidity__value");
    this.wind = el.querySelector("span.wind-speed__value");
    this.icon = el.querySelector("div.weather__icon").querySelector("img");
    this.forecast = el.querySelector("ul.weather__forecast").querySelectorAll("li");
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
  var forecast = new Forecast(weatherTab);
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
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(url) {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(url);
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          data = _context.sent;
          // console.log(data)
          extractData(data);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
})()(url);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("271b4bc94b4bef020794")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNjU5ZTFhYmRiYzFmYmU1OWMxNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUcsa0NBQWtDO0FBQzlDLElBQUlDLElBQUksR0FBRyxDQUFDO0FBQ1osSUFBSUMsSUFBSSxHQUFHLFNBQVM7QUFDcEIsSUFBTUMsR0FBRyxxREFBQUMsTUFBQSxDQUFxREosR0FBRyxTQUFBSSxNQUFBLENBQU1GLElBQUksWUFBQUUsTUFBQSxDQUFTSCxJQUFJLENBQUU7QUFHMUYsSUFBTUksU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1REYsU0FBUyxDQUFDRyxNQUFNLEdBQUcsS0FBSztBQUN4QixJQUFNQyxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ2hFRSxVQUFVLENBQUNELE1BQU0sR0FBRyxLQUFLO0FBQ3pCLElBQU1FLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3pERyxhQUFhLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsU0FBUyxDQUFDO0FBRWxELFNBQVNBLFNBQVNBLENBQUNDLENBQUMsRUFBRSxDQUV0QjtBQUFDLElBRUtDLFFBQVE7RUFDVixTQUFBQSxTQUFZQyxFQUFFLEVBQUU7SUFBQUMsaUZBQUEsT0FBQUYsUUFBQTtJQUNaLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDYixJQUFJLEdBQUdhLEVBQUUsQ0FBQ1IsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQy9DLElBQUksQ0FBQ1UsV0FBVyxHQUFHRixFQUFFLENBQUNSLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUM5RCxJQUFJLENBQUNXLFFBQVEsR0FBR0gsRUFBRSxDQUFDUixhQUFhLENBQUMsc0JBQXNCLENBQUM7SUFDeEQsSUFBSSxDQUFDWSxRQUFRLEdBQUdKLEVBQUUsQ0FBQ1IsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQ3hELElBQUksQ0FBQ2EsSUFBSSxHQUFHTCxFQUFFLENBQUNSLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztJQUN0RCxJQUFJLENBQUNjLElBQUksR0FBR04sRUFBRSxDQUFDUixhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0EsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN0RSxJQUFJLENBQUNlLFFBQVEsR0FBR1AsRUFBRSxDQUFDUixhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQ2dCLGdCQUFnQixDQUFDLElBQUksQ0FBQztFQUNuRjtFQUFDQyw4RUFBQSxDQUFBVixRQUFBO0lBQUFkLEdBQUE7SUFBQXlCLEtBQUEsRUFFRCxTQUFBQyxXQUFXeEIsSUFBSSxFQUFFeUIsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFVSxJQUFJLEVBQUVDLFNBQVMsRUFBRTtNQUN4RCxJQUFJLENBQUM3QixJQUFJLENBQUM4QixXQUFXLEdBQUc5QixJQUFJO01BQzVCLElBQUksQ0FBQ2UsV0FBVyxDQUFDZSxXQUFXLEdBQUdMLElBQUk7TUFDbkMsSUFBSSxDQUFDVCxRQUFRLENBQUNjLFdBQVcsR0FBR0osS0FBSyxHQUFHLEtBQUs7TUFDekMsSUFBSSxDQUFDVCxRQUFRLENBQUNhLFdBQVcsR0FBR0gsS0FBSyxHQUFHLEdBQUc7TUFDdkMsSUFBSSxDQUFDVCxJQUFJLENBQUNZLFdBQVcsR0FBR1osSUFBSSxHQUFHLEtBQUs7TUFDcEMsSUFBSSxDQUFDQyxJQUFJLENBQUNZLEdBQUcsR0FBR0MsUUFBUSxDQUFDSixJQUFJLEVBQUVDLFNBQVMsQ0FBQztJQUM3QztFQUFDO0lBQUEvQixHQUFBO0lBQUF5QixLQUFBLEVBRUQsU0FBQVUsZUFBZUMsWUFBWSxFQUFFO01BQ3pCLElBQUksQ0FBQ2QsUUFBUSxDQUFDZSxPQUFPLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxLQUFLLEVBQUs7UUFDbENELEdBQUcsQ0FBQy9CLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ3lCLFdBQVcsR0FBR0ksWUFBWSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEVELEdBQUcsQ0FBQy9CLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDeUIsV0FBVyxHQUFHSSxZQUFZLENBQUNHLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRkQsR0FBRyxDQUFDL0IsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDMEIsR0FBRyxHQUFHQyxRQUFRLENBQUNFLFlBQVksQ0FBQ0csS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDO01BQ3BGLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBekIsUUFBQTtBQUFBO0FBR0wsSUFBTW9CLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJTSxJQUFJLEVBQUVULFNBQVMsRUFBSztFQUNsQyxJQUFNVSxVQUFVLEdBQUc7SUFDZixJQUFJLFdBQUFyQyxNQUFBLENBQVcyQixTQUFTLENBQUU7SUFDMUIsSUFBSSxtQkFBQTNCLE1BQUEsQ0FBbUIyQixTQUFTLENBQUU7SUFDbEMsSUFBSSxVQUFVO0lBQ2QsSUFBSSxVQUFVO0lBQ2QsSUFBSSxVQUFVO0lBQ2QsSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxTQUFTO0lBQ2IsSUFBSSxTQUFTO0lBQ2IsSUFBSSxnQkFBZ0I7SUFDcEIsSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxVQUFVO0lBQ2QsSUFBSSxVQUFVO0lBQ2QsSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxTQUFTO0lBQ2IsSUFBSSxTQUFTO0lBQ2IsSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxTQUFTO0lBQ2IsSUFBSSxTQUFTO0lBQ2IsSUFBSSxRQUFRO0lBQ1osSUFBSSxRQUFRO0lBQ1osSUFBSSxTQUFTO0lBQ2IsSUFBSSxTQUFTO0lBQ2IsSUFBSSxnQkFBZ0I7SUFDcEIsSUFBSSxnQkFBZ0I7SUFDcEIsSUFBSSxnQkFBZ0I7SUFDcEIsSUFBSTtFQUNSLENBQUM7RUFDRCx1QkFBQTNCLE1BQUEsQ0FBdUJxQyxVQUFVLENBQUNELElBQUksQ0FBQztBQUMzQyxDQUFDO0FBR0QsU0FBU0UsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3ZCLElBQU16QyxJQUFJLEdBQUd5QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ3JDLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDM0QsSUFBTUcsU0FBUyxHQUFHSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ3RELElBQU1oQixJQUFJLEdBQUdnQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO0VBQ3RDLElBQU16QixRQUFRLEdBQUd5QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDO0VBQy9DLElBQU14QixRQUFRLEdBQUd3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDO0VBQzVDLElBQU12QixJQUFJLEdBQUcyQixnQkFBZ0IsQ0FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0VBQzFELElBQU1LLE1BQU0sR0FBR0MsY0FBYyxDQUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUV2RSxJQUFNekMsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztFQUNoRSxJQUFNZSxRQUFRLEdBQUcsSUFBSVIsUUFBUSxDQUFDTCxVQUFVLENBQUM7RUFDekNhLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDeEIsSUFBSSxFQUFFeUIsSUFBSSxFQUFFVCxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFMEIsU0FBUyxFQUFFRixTQUFTLENBQUM7RUFDL0V0QixRQUFRLENBQUNhLGNBQWMsQ0FBQ2EsTUFBTSxDQUFDO0FBQ25DO0FBRUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLENBQUMsRUFBSztFQUN0QixJQUFJLE9BQU9BLENBQUMsS0FBSyxRQUFRLEVBQUUsT0FBTyxFQUFFO0VBQ3BDLE9BQU9BLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdELENBQUMsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLElBQUksRUFBSztFQUN6QixPQUFPSixVQUFVLENBQUMsSUFBSUssSUFBSSxDQUFDRCxJQUFJLENBQUMsQ0FBQ0UsY0FBYyxDQUFDLElBQUksRUFBRTtJQUFDQyxPQUFPLEVBQUU7RUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRUQsSUFBTVgsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSVksR0FBRyxFQUFLO0VBQzlCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7QUFDMUMsQ0FBQztBQUVELElBQU1WLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSWEsR0FBRyxFQUFLO0VBQzVCLE9BQU9BLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFVBQUF6QixHQUFHLEVBQUk7SUFDbEIsT0FBTztNQUNIQSxHQUFHLEVBQUVnQixVQUFVLENBQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDNUJYLElBQUksRUFBRVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztNQUM3QlEsU0FBUyxFQUFFUixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTTtJQUM3QyxDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJVSxJQUFJLEVBQUs7RUFDekIsSUFBSVMsSUFBSSxHQUFHLElBQUlSLElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUNVLFFBQVEsRUFBRTtFQUNwQyxJQUFJLENBQUMsR0FBR0QsSUFBSSxJQUFJQSxJQUFJLEdBQUcsRUFBRSxFQUFFO0lBQ3ZCLE9BQU8sS0FBSztFQUNoQixDQUFDLE1BQU07SUFDSCxPQUFPLE9BQU87RUFDbEI7QUFDSixDQUFDO0FBRUQ7RUFBQSxJQUFBRSxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUMsU0FBQUUsUUFBT25FLEdBQUc7SUFBQSxJQUFBb0UsUUFBQSxFQUFBNUIsSUFBQTtJQUFBLE9BQUF5QixzRUFBQSxVQUFBSyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNnQkMsS0FBSyxDQUFDMUUsR0FBRyxDQUFDO1FBQUE7VUFBM0JvRSxRQUFRLEdBQUFHLFFBQUEsQ0FBQUksSUFBQTtVQUFBSixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNLTCxRQUFRLENBQUNRLElBQUksRUFBRTtRQUFBO1VBQTVCcEMsSUFBSSxHQUFBK0IsUUFBQSxDQUFBSSxJQUFBO1VBQ1Y7VUFDQXBDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUErQixRQUFBLENBQUFNLElBQUE7TUFBQTtJQUFBLEdBQUFWLE9BQUE7RUFBQSxDQUNwQjtFQUFBLGlCQUFBVyxFQUFBO0lBQUEsT0FBQWYsSUFBQSxDQUFBZ0IsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxLQUFFaEYsR0FBRyxDQUFDOzs7Ozs7OztVQzlKUCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5QYXJhbWV0cml6ZWQgY29uZmlnIGZvciBmZXRjaGluZ1xuICovXG5jb25zdCBrZXkgPSAnNDYxOTJiMWE2OTJmNDQ4NmEwZDE4MTg0NzIzMjIwMiAnXG5sZXQgZGF5cyA9IDZcbmxldCBjaXR5ID0gXCJhdXRvOmlwXCJcbmNvbnN0IHVybCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7Y2l0eX0mZGF5cz0ke2RheXN9YFxuXG5cbmNvbnN0IHNlYXJjaFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX19mb3JtXCIpXG5zZWFyY2hUYWIuaGlkZGVuID0gZmFsc2VcbmNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxud2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxuY29uc3QgYWRkQ2l0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNpdHlcIilcbmFkZENpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbnB1dClcblxuZnVuY3Rpb24gc2hvd0lucHV0KGUpIHtcblxufVxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsXG4gICAgICAgIHRoaXMuY2l0eSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNpdHlfX25hbWVcIilcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnRlbXBlcmF0dXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLnByZXNzdXJlID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ucHJlc3N1cmVfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5odW1pZGl0eV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy53aW5kID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ud2luZC1zcGVlZF9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5pY29uID0gZWwucXVlcnlTZWxlY3RvcihcImRpdi53ZWF0aGVyX19pY29uXCIpLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJ1bC53ZWF0aGVyX19mb3JlY2FzdFwiKS5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzLCBodW1pZCwgd2luZCwgY29uZCwgdGltZU9mRGF5KSB7XG4gICAgICAgIHRoaXMuY2l0eS50ZXh0Q29udGVudCA9IGNpdHlcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHRlbXBcbiAgICAgICAgdGhpcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IHByZXNzICsgXCJoUGFcIlxuICAgICAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gaHVtaWQgKyBcIiVcIlxuICAgICAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSB3aW5kICsgXCJtL3NcIlxuICAgICAgICB0aGlzLmljb24uc3JjID0gZmluZEljb24oY29uZCwgdGltZU9mRGF5KVxuICAgIH1cblxuICAgIHVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0TGlzdCkge1xuICAgICAgICB0aGlzLmZvcmVjYXN0LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiLmRheVwiKS50ZXh0Q29udGVudCA9IGZvcmVjYXN0TGlzdFtpbmRleF1bXCJkYXlcIl1cbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlX192YWx1ZVwiKS50ZXh0Q29udGVudCA9IGZvcmVjYXN0TGlzdFtpbmRleF1bJ3RlbXAnXVxuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gZmluZEljb24oZm9yZWNhc3RMaXN0W2luZGV4XVsnY29uZGl0aW9uJ10sIFwiZGF5XCIpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBmaW5kSWNvbiA9IChjb2RlLCB0aW1lT2ZEYXkpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdG9yID0ge1xuICAgICAgICAxMDAwOiBgY2xlYXItJHt0aW1lT2ZEYXl9YCxcbiAgICAgICAgMTAwMzogYHBhcnRseS1jbG91ZHktJHt0aW1lT2ZEYXl9YCxcbiAgICAgICAgMTAwNjogYGNsb3VkeWAsXG4gICAgICAgIDEwMDk6IGBjbG91ZHlgLFxuICAgICAgICAxMDMwOiBgY2xvdWR5YCxcbiAgICAgICAgMTA2MzogYHJhaW5gLFxuICAgICAgICAxMDY2OiBgc25vd2AsXG4gICAgICAgIDEwNjk6IGBzbGVldGAsXG4gICAgICAgIDEwNzI6IGBzbGVldGAsXG4gICAgICAgIDEwODc6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMTE0OiBgc25vd2AsXG4gICAgICAgIDExMTc6IGBzbm93YCxcbiAgICAgICAgMTEzNTogYGNsb3VkeWAsXG4gICAgICAgIDExNDc6IGBjbG91ZHlgLFxuICAgICAgICAxMTUwOiBgcmFpbmAsXG4gICAgICAgIDExNTM6IGByYWluYCxcbiAgICAgICAgMTE2ODogYHJhaW5gLFxuICAgICAgICAxMTcxOiBgcmFpbmAsXG4gICAgICAgIDExODA6IGByYWluYCxcbiAgICAgICAgMTE4MzogYHJhaW5gLFxuICAgICAgICAxMTg2OiBgcmFpbmAsXG4gICAgICAgIDExODk6IGByYWluYCxcbiAgICAgICAgMTE5MjogYHJhaW5gLFxuICAgICAgICAxMTk1OiBgcmFpbmAsXG4gICAgICAgIDExOTg6IGByYWluYCxcbiAgICAgICAgMTIwMTogYHJhaW5gLFxuICAgICAgICAxMjA0OiBgc2xlZXRgLFxuICAgICAgICAxMjA3OiBgc2xlZXRgLFxuICAgICAgICAxMjEwOiBgc25vd2AsXG4gICAgICAgIDEyMTM6IGBzbm93YCxcbiAgICAgICAgMTIxNjogYHNub3dgLFxuICAgICAgICAxMjE5OiBgc25vd2AsXG4gICAgICAgIDEyMjI6IGBzbm93YCxcbiAgICAgICAgMTIyNTogYHNub3dgLFxuICAgICAgICAxMjM3OiBgc25vd2AsXG4gICAgICAgIDEyNDA6IGByYWluYCxcbiAgICAgICAgMTI0MzogYHJhaW5gLFxuICAgICAgICAxMjQ2OiBgcmFpbmAsXG4gICAgICAgIDEyNDk6IGBzbGVldGAsXG4gICAgICAgIDEyNTI6IGBzbGVldGAsXG4gICAgICAgIDEyNTU6IGBzbm93YCxcbiAgICAgICAgMTI1ODogYHNub3dgLFxuICAgICAgICAxMjYxOiBgc2xlZXRgLFxuICAgICAgICAxMjY0OiBgc2xlZXRgLFxuICAgICAgICAxMjczOiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI3NjogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyNzk6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjgyOiBgdGh1bmRlcnN0b3JtYCxcbiAgICB9XG4gICAgcmV0dXJuIGBhc3NldHMvaWNvbnMvJHt0cmFuc2xhdG9yW2NvZGVdfS5zdmdgXG59XG5cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSkge1xuICAgIGNvbnN0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjb25zdCB0aW1lMGZEYXkgPSBkYXlPck5pZ2h0KGRhdGFbJ2xvY2F0aW9uJ11bJ2xvY2FsdGltZSddKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgIGNvbnN0IHRlbXAgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBfYyddXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhWydjdXJyZW50J11bJ3ByZXNzdXJlX21iJ11cbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGFbJ2N1cnJlbnQnXVsnaHVtaWRpdHknXVxuICAgIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZFNwZWVkKGRhdGFbJ2N1cnJlbnQnXVsnd2luZF9rcGgnXSlcbiAgICBjb25zdCBmdXR1cmUgPSBmdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3Qod2VhdGhlclRhYilcbiAgICBmb3JlY2FzdC51cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCwgY29uZGl0aW9uLCB0aW1lMGZEYXkpXG4gICAgZm9yZWNhc3QudXBkYXRlRm9yZWNhc3QoZnV0dXJlKVxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICByZXR1cm4gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG5cbmNvbnN0IGNvbnZlcnRXaW5kU3BlZWQgPSAoa3BoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa3BoIC8gMy42ICogMTApIC8gMTBcbn1cblxuY29uc3QgZnV0dXJlRm9yZWNhc3QgPSAoYXJyKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZ2V0V2Vla2RheShkYXlbJ2RhdGUnXSksXG4gICAgICAgICAgICB0ZW1wOiBkYXlbJ2RheSddWydhdmd0ZW1wX2MnXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF5WydkYXknXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgZGF5T3JOaWdodCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRIb3VycygpXG4gICAgaWYgKDYgPCBob3VyICYmIGhvdXIgPCAyMCkge1xuICAgICAgICByZXR1cm4gXCJkYXlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCJcbiAgICB9XG59XG5cbihhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgZXh0cmFjdERhdGEoZGF0YSlcbn0pKHVybClcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjcxYjRiYzk0YjRiZWYwMjA3OTRcIikiXSwibmFtZXMiOlsia2V5IiwiZGF5cyIsImNpdHkiLCJ1cmwiLCJjb25jYXQiLCJzZWFyY2hUYWIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRkZW4iLCJ3ZWF0aGVyVGFiIiwiYWRkQ2l0eUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93SW5wdXQiLCJlIiwiRm9yZWNhc3QiLCJlbCIsIl9jbGFzc0NhbGxDaGVjayIsInRlbXBlcmF0dXJlIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsIndpbmQiLCJpY29uIiwiZm9yZWNhc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2NyZWF0ZUNsYXNzIiwidmFsdWUiLCJ1cGRhdGVEYXRhIiwidGVtcCIsInByZXNzIiwiaHVtaWQiLCJjb25kIiwidGltZU9mRGF5IiwidGV4dENvbnRlbnQiLCJzcmMiLCJmaW5kSWNvbiIsInVwZGF0ZUZvcmVjYXN0IiwiZm9yZWNhc3RMaXN0IiwiZm9yRWFjaCIsImRheSIsImluZGV4IiwiY29kZSIsInRyYW5zbGF0b3IiLCJleHRyYWN0RGF0YSIsImRhdGEiLCJ0aW1lMGZEYXkiLCJkYXlPck5pZ2h0IiwiY29uZGl0aW9uIiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZSIsImZ1dHVyZUZvcmVjYXN0Iiwic2xpY2UiLCJjYXBpdGFsaXplIiwicyIsInRvVXBwZXJDYXNlIiwiZ2V0V2Vla2RheSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5Iiwia3BoIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwibWFwIiwiaG91ciIsImdldEhvdXJzIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==