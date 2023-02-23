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
/******/ 	__webpack_require__.h = () => ("375a889de7906e82f5f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlULElBQUksRUFBSztFQUN6QixPQUFPVixVQUFVLENBQUMsSUFBSVksSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQ1UsY0FBYyxDQUFDLElBQUksRUFBRTtJQUFDQyxPQUFPLEVBQUU7RUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDOzs7Ozs7OztVQzNFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmdW5jdGlvbnMgdG8gaGVscCB3aXRoIGRhdGEgbWFuaXB1bGF0aW9uICovXG5pbXBvcnQge0ZvcmVjYXN0fSBmcm9tIFwiLi9mb3JlY2FzdENsYXNzXCI7XG5cbmV4cG9ydCB7bm9ybWFsaXplLCBleHRyYWN0RGF0YX1cblxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhLCByYXdDaXR5KSB7XG4gICAgbGV0IGNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjaXR5ID0gY2hlY2tTaW1pbGFyaXR5KGNpdHksIHJhd0NpdHkpXG4gICAgY29uc3QgdGltZTBmRGF5ID0gZGF5T3JOaWdodChkYXRhWydsb2NhdGlvbiddWydsb2NhbHRpbWUnXSlcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhWydjdXJyZW50J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICBjb25zdCB0ZW1wID0gZGF0YVsnY3VycmVudCddWyd0ZW1wX2MnXVxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YVsnY3VycmVudCddWydwcmVzc3VyZV9tYiddXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhWydjdXJyZW50J11bJ2h1bWlkaXR5J11cbiAgICBjb25zdCB3aW5kID0gY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gZnV0dXJlRm9yZWNhc3QoZGF0YVsnZm9yZWNhc3QnXVsnZm9yZWNhc3RkYXknXS5zbGljZSgxKSlcblxuICAgIGNvbnN0IHdlYXRoZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm1vZHVsZV9fd2VhdGhlclwiKVxuICAgIGxldCBjbG9uZWRXZWF0aGVyVGFiID0gd2VhdGhlclRhYi5jbG9uZU5vZGUodHJ1ZSlcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG4gICAgY2xvbmVkV2VhdGhlclRhYi5oaWRkZW4gPSBmYWxzZVxufVxuXG5jb25zdCBjaGVja1NpbWlsYXJpdHkgPSAoY2l0eSwgcmF3Q2l0eSkgPT4ge1xuICAgIGlmICghcmF3Q2l0eSkge1xuICAgICAgICByZXR1cm4gY2l0eVxuICAgIH0gZWxzZSBpZiAoY2l0eS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemUocmF3Q2l0eSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZShyYXdDaXR5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfVxufVxuXG5jb25zdCBub3JtYWxpemUgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gaW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICBsZXQgcmVzdWx0ID0gcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKVxufVxuXG5jb25zdCBkYXlPck5pZ2h0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGRhdGUpLmdldEhvdXJzKClcbiAgICBpZiAoNiA8IGhvdXIgJiYgaG91ciA8IDIwKSB7XG4gICAgICAgIHJldHVybiBcImRheVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibmlnaHRcIlxuICAgIH1cbn1cblxuY29uc3QgY29udmVydFdpbmRTcGVlZCA9IChrcGgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrcGggLyAzLjYgKiAxMCkgLyAxMFxufVxuXG5jb25zdCBmdXR1cmVGb3JlY2FzdCA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChkYXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBnZXRXZWVrZGF5KGRheVsnZGF0ZSddKSxcbiAgICAgICAgICAgIHRlbXA6IGRheVsnZGF5J11bJ2F2Z3RlbXBfYyddLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlbJ2RheSddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNzVhODg5ZGU3OTA2ZTgyZjVmNFwiKSJdLCJuYW1lcyI6WyJGb3JlY2FzdCIsIm5vcm1hbGl6ZSIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJjaXR5IiwiY2hlY2tTaW1pbGFyaXR5IiwidGltZTBmRGF5IiwiZGF5T3JOaWdodCIsImNvbmRpdGlvbiIsInRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwid2luZCIsImNvbnZlcnRXaW5kU3BlZWQiLCJmdXR1cmUiLCJmdXR1cmVGb3JlY2FzdCIsInNsaWNlIiwid2VhdGhlclRhYiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb25lZFdlYXRoZXJUYWIiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmb3JlY2FzdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVGb3JlY2FzdCIsImhpZGRlbiIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZSIsImlucHV0IiwicmVzdWx0IiwicmVwbGFjZSIsInMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJkYXRlIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImtwaCIsIk1hdGgiLCJyb3VuZCIsImFyciIsImRheSIsImdldFdlZWtkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiXSwic291cmNlUm9vdCI6IiJ9