"use strict";
self["webpackHotUpdatees6_async_await"](0,{

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
/******/ 	__webpack_require__.h = () => ("70e56f69ca569c54ac40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixDQUFDOzs7Ozs7OztVQzFERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmdW5jdGlvbnMgdG8gaGVscCB3aXRoIGRhdGEgbWFuaXB1bGF0aW9uICovXG5leHBvcnQge1xuICAgIGNvbnZlcnRXaW5kU3BlZWQsXG4gICAgZnV0dXJlRm9yZWNhc3QsXG4gICAgZGF5T3JOaWdodCxcbiAgICBjaGVja1NpbWlsYXJpdHksXG4gICAgbm9ybWFsaXplLFxufVxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICBsZXQgcmVzdWx0ID0gcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG5cbmNvbnN0IGNvbnZlcnRXaW5kU3BlZWQgPSAoa3BoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa3BoIC8gMy42ICogMTApIC8gMTBcbn1cblxuY29uc3QgZnV0dXJlRm9yZWNhc3QgPSAoYXJyKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZ2V0V2Vla2RheShkYXlbJ2RhdGUnXSksXG4gICAgICAgICAgICB0ZW1wOiBkYXlbJ2RheSddWydhdmd0ZW1wX2MnXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF5WydkYXknXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgZGF5T3JOaWdodCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRIb3VycygpXG4gICAgaWYgKDYgPCBob3VyICYmIGhvdXIgPCAyMCkge1xuICAgICAgICByZXR1cm4gXCJkYXlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCJcbiAgICB9XG59XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChpbnB1dCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBpbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFx1MDE0Mi9nLCBcImxcIilcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNoZWNrU2ltaWxhcml0eSA9IChjaXR5LCByYXdDaXR5KSA9PiB7XG4gICAgaWYgKCFyYXdDaXR5KSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfSBlbHNlIGlmIChjaXR5LnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZShyYXdDaXR5KS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKHJhd0NpdHkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNpdHlcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzBlNTZmNjljYTU2OWM1NGFjNDBcIikiXSwibmFtZXMiOlsiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZUZvcmVjYXN0IiwiZGF5T3JOaWdodCIsImNoZWNrU2ltaWxhcml0eSIsIm5vcm1hbGl6ZSIsImNhcGl0YWxpemUiLCJzIiwicmVzdWx0Iiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJnZXRXZWVrZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJkYXkiLCJ0ZW1wIiwiY29uZGl0aW9uIiwiaG91ciIsImdldEhvdXJzIiwiaW5wdXQiLCJyZXBsYWNlIiwiY2l0eSIsInJhd0NpdHkiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=