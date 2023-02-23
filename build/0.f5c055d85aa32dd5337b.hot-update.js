"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractData": () => (/* binding */ extractData),
/* harmony export */   "normalize": () => (/* binding */ normalize)
/* harmony export */ });
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* functions to help with data manipulation */


function extractData(data, rawCity) {
  console.log(data);
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
var checkSimilarity = function checkSimilarity(city, rawCity) {
  if (!rawCity) {
    return city;
  } else if (city.toLowerCase() === normalize(rawCity).toLowerCase()) {
    return capitalize(rawCity);
  } else {
    return city;
  }
};
var normalize = function normalize(input) {
  var result = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  result = result.replace(/\u0142/g, "l");
  return result;
};
var capitalize = function capitalize(s) {
  if (typeof s !== 'string') return '';
  var result = s.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return result.join(" ");
};
var dayOrNight = function dayOrNight(date) {
  var hour = new Date(date).getHours();
  if (6 < hour && hour < 20) {
    return "day";
  } else {
    return "night";
  }
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
var getWeekday = function getWeekday(date) {
  return capitalize(new Date(date).toLocaleString('PL', {
    weekday: 'long'
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39bdd65a4c43366ff30c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3QyxDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJVCxJQUFJLEVBQUs7RUFDekIsT0FBT1YsVUFBVSxDQUFDLElBQUlZLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUNVLGNBQWMsQ0FBQyxJQUFJLEVBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQU0sQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQzs7Ozs7Ozs7VUM1RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBkYXRhIG1hbmlwdWxhdGlvbiAqL1xuaW1wb3J0IHtGb3JlY2FzdH0gZnJvbSBcIi4vZm9yZWNhc3RDbGFzc1wiO1xuXG5leHBvcnQge25vcm1hbGl6ZSwgZXh0cmFjdERhdGF9XG5cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSwgcmF3Q2l0eSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgbGV0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjaXR5ID0gY2hlY2tTaW1pbGFyaXR5KGNpdHksIHJhd0NpdHkpXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5jb25zdCBjaGVja1NpbWlsYXJpdHkgPSAoY2l0eSwgcmF3Q2l0eSkgPT4ge1xuICAgIGlmICghcmF3Q2l0eSkge1xuICAgICAgICByZXR1cm4gY2l0eVxuICAgIH0gZWxzZSBpZiAoY2l0eS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemUocmF3Q2l0eSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZShyYXdDaXR5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfVxufVxuXG5jb25zdCBub3JtYWxpemUgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gaW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICBsZXQgcmVzdWx0ID0gcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOWJkZDY1YTRjNDMzNjZmZjMwY1wiKSJdLCJuYW1lcyI6WyJGb3JlY2FzdCIsIm5vcm1hbGl6ZSIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJjb25zb2xlIiwibG9nIiwiY2l0eSIsImNoZWNrU2ltaWxhcml0eSIsInRpbWUwZkRheSIsImRheU9yTmlnaHQiLCJjb25kaXRpb24iLCJ0ZW1wIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsIndpbmQiLCJjb252ZXJ0V2luZFNwZWVkIiwiZnV0dXJlIiwiZnV0dXJlRm9yZWNhc3QiLCJzbGljZSIsIndlYXRoZXJUYWIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZWRXZWF0aGVyVGFiIiwiY2xvbmVOb2RlIiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZm9yZWNhc3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRm9yZWNhc3QiLCJoaWRkZW4iLCJ0b0xvd2VyQ2FzZSIsImNhcGl0YWxpemUiLCJpbnB1dCIsInJlc3VsdCIsInJlcGxhY2UiLCJzIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJqb2luIiwiZGF0ZSIsImhvdXIiLCJEYXRlIiwiZ2V0SG91cnMiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJkYXkiLCJnZXRXZWVrZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5Il0sInNvdXJjZVJvb3QiOiIifQ==