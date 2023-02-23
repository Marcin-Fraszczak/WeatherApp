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
var checkSimilarity = function checkSimilarity(city, rawInput) {
  console.log(city, rawInput);
  if (city.toLowerCase() === normalize(rawInput).toLowerCase()) {
    return capitalize(rawInput);
  } else {
    return city;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d88db1c1fcb8065930a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Ozs7Ozs7VUN6REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBkYXRhIG1hbmlwdWxhdGlvbiAqL1xuZXhwb3J0IHtcbiAgICBjb252ZXJ0V2luZFNwZWVkLFxuICAgIGZ1dHVyZUZvcmVjYXN0LFxuICAgIGRheU9yTmlnaHQsXG4gICAgY2hlY2tTaW1pbGFyaXR5LFxuICAgIG5vcm1hbGl6ZSxcbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnXG4gICAgbGV0IHJlc3VsdCA9IHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgICAgcmV0dXJuIHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQuam9pbihcIiBcIilcbn1cblxuY29uc3QgZ2V0V2Vla2RheSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUobmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ1BMJywge3dlZWtkYXk6ICdsb25nJ30pKVxufVxuXG5jb25zdCBjb252ZXJ0V2luZFNwZWVkID0gKGtwaCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtwaCAvIDMuNiAqIDEwKSAvIDEwXG59XG5cbmNvbnN0IGZ1dHVyZUZvcmVjYXN0ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKGRheSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGdldFdlZWtkYXkoZGF5WydkYXRlJ10pLFxuICAgICAgICAgICAgdGVtcDogZGF5WydkYXknXVsnYXZndGVtcF9jJ10sXG4gICAgICAgICAgICBjb25kaXRpb246IGRheVsnZGF5J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGRheU9yTmlnaHQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoZGF0ZSkuZ2V0SG91cnMoKVxuICAgIGlmICg2IDwgaG91ciAmJiBob3VyIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIFwiZGF5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJuaWdodFwiXG4gICAgfVxufVxuXG5jb25zdCBub3JtYWxpemUgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gaW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjaGVja1NpbWlsYXJpdHkgPSAoY2l0eSwgcmF3SW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjaXR5LCByYXdJbnB1dClcbiAgICBpZiAoY2l0eS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemUocmF3SW5wdXQpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIGNhcGl0YWxpemUocmF3SW5wdXQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNpdHlcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDg4ZGIxYzFmY2I4MDY1OTMwYThcIikiXSwibmFtZXMiOlsiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZUZvcmVjYXN0IiwiZGF5T3JOaWdodCIsImNoZWNrU2ltaWxhcml0eSIsIm5vcm1hbGl6ZSIsImNhcGl0YWxpemUiLCJzIiwicmVzdWx0Iiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJnZXRXZWVrZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJrcGgiLCJNYXRoIiwicm91bmQiLCJhcnIiLCJkYXkiLCJ0ZW1wIiwiY29uZGl0aW9uIiwiaG91ciIsImdldEhvdXJzIiwiaW5wdXQiLCJyZXBsYWNlIiwiY2l0eSIsInJhd0lucHV0IiwiY29uc29sZSIsImxvZyIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==