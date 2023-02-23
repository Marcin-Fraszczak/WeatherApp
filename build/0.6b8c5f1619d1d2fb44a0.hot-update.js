self["webpackHotUpdatees6_async_await"](0,{

/***/ 31:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/js/forecastClass.js: Unexpected token (21:4)\n\n\u001b[0m \u001b[90m 19 |\u001b[39m         \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m     updateData(city\u001b[33m,\u001b[39m temp\u001b[33m,\u001b[39m press\u001b[33m,\u001b[39m humid\u001b[33m,\u001b[39m wind\u001b[33m,\u001b[39m cond\u001b[33m,\u001b[39m timeOfDay) {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcity\u001b[33m.\u001b[39mtextContent \u001b[33m=\u001b[39m city\u001b[0m\n    at instantiate (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:364:12)\n    at Parser.raise (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:3256:19)\n    at Parser.unexpected (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:3286:16)\n    at Parser.parseIdentifierName (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:12029:18)\n    at Parser.parseIdentifier (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:12012:23)\n    at Parser.parseMember (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:10929:28)\n    at Parser.parseSubscript (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:10906:21)\n    at Parser.parseSubscripts (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:10878:19)\n    at Parser.parseExprSubscripts (/home/fryta/projects/JS/ONL_FSB_E_23_JavaScript_Warsztat/node_modules/@babel/parser/lib/index.js:10869:17)");

/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractData": () => (/* binding */ extractData),
/* harmony export */   "normalize": () => (/* binding */ normalize)
/* harmony export */ });
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_forecastClass__WEBPACK_IMPORTED_MODULE_0__);
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
/******/ 	__webpack_require__.h = () => ("29b6cf71f7f14350d86b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFFRCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSVQsSUFBSSxFQUFLO0VBQ3pCLE9BQU9WLFVBQVUsQ0FBQyxJQUFJWSxJQUFJLENBQUNGLElBQUksQ0FBQyxDQUFDVSxjQUFjLENBQUMsSUFBSSxFQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7Ozs7Ozs7O1VDM0VEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGZ1bmN0aW9ucyB0byBoZWxwIHdpdGggZGF0YSBtYW5pcHVsYXRpb24gKi9cbmltcG9ydCB7Rm9yZWNhc3R9IGZyb20gXCIuL2ZvcmVjYXN0Q2xhc3NcIjtcblxuZXhwb3J0IHtub3JtYWxpemUsIGV4dHJhY3REYXRhfVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEsIHJhd0NpdHkpIHtcbiAgICBsZXQgY2l0eSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXVxuICAgIGNpdHkgPSBjaGVja1NpbWlsYXJpdHkoY2l0eSwgcmF3Q2l0eSlcbiAgICBjb25zdCB0aW1lMGZEYXkgPSBkYXlPck5pZ2h0KGRhdGFbJ2xvY2F0aW9uJ11bJ2xvY2FsdGltZSddKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgIGNvbnN0IHRlbXAgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBfYyddXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhWydjdXJyZW50J11bJ3ByZXNzdXJlX21iJ11cbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGFbJ2N1cnJlbnQnXVsnaHVtaWRpdHknXVxuICAgIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZFNwZWVkKGRhdGFbJ2N1cnJlbnQnXVsnd2luZF9rcGgnXSlcbiAgICBjb25zdCBmdXR1cmUgPSBmdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgbGV0IGNsb25lZFdlYXRoZXJUYWIgPSB3ZWF0aGVyVGFiLmNsb25lTm9kZSh0cnVlKVxuICAgIHdlYXRoZXJUYWIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGNsb25lZFdlYXRoZXJUYWIpXG4gICAgZm9yZWNhc3QudXBkYXRlRGF0YShjaXR5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbiwgdGltZTBmRGF5KVxuICAgIGZvcmVjYXN0LnVwZGF0ZUZvcmVjYXN0KGZ1dHVyZSlcbiAgICBjbG9uZWRXZWF0aGVyVGFiLmhpZGRlbiA9IGZhbHNlXG59XG5cbmNvbnN0IGNoZWNrU2ltaWxhcml0eSA9IChjaXR5LCByYXdDaXR5KSA9PiB7XG4gICAgaWYgKCFyYXdDaXR5KSB7XG4gICAgICAgIHJldHVybiBjaXR5XG4gICAgfSBlbHNlIGlmIChjaXR5LnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZShyYXdDaXR5KS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKHJhd0NpdHkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNpdHlcbiAgICB9XG59XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChpbnB1dCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBpbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFx1MDE0Mi9nLCBcImxcIilcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIGxldCByZXN1bHQgPSBzLnNwbGl0KFwiIFwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgIHJldHVybiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpXG59XG5cbmNvbnN0IGRheU9yTmlnaHQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoZGF0ZSkuZ2V0SG91cnMoKVxuICAgIGlmICg2IDwgaG91ciAmJiBob3VyIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIFwiZGF5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJuaWdodFwiXG4gICAgfVxufVxuXG5jb25zdCBjb252ZXJ0V2luZFNwZWVkID0gKGtwaCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtwaCAvIDMuNiAqIDEwKSAvIDEwXG59XG5cbmNvbnN0IGZ1dHVyZUZvcmVjYXN0ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKGRheSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGdldFdlZWtkYXkoZGF5WydkYXRlJ10pLFxuICAgICAgICAgICAgdGVtcDogZGF5WydkYXknXVsnYXZndGVtcF9jJ10sXG4gICAgICAgICAgICBjb25kaXRpb246IGRheVsnZGF5J11bJ2NvbmRpdGlvbiddWydjb2RlJ11cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGdldFdlZWtkYXkgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBjYXBpdGFsaXplKG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdQTCcsIHt3ZWVrZGF5OiAnbG9uZyd9KSlcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI5YjZjZjcxZjdmMTQzNTBkODZiXCIpIl0sIm5hbWVzIjpbIkZvcmVjYXN0Iiwibm9ybWFsaXplIiwiZXh0cmFjdERhdGEiLCJkYXRhIiwicmF3Q2l0eSIsImNpdHkiLCJjaGVja1NpbWlsYXJpdHkiLCJ0aW1lMGZEYXkiLCJkYXlPck5pZ2h0IiwiY29uZGl0aW9uIiwidGVtcCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZSIsImZ1dHVyZUZvcmVjYXN0Iiwic2xpY2UiLCJ3ZWF0aGVyVGFiIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVkV2VhdGhlclRhYiIsImNsb25lTm9kZSIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZvcmVjYXN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUZvcmVjYXN0IiwiaGlkZGVuIiwidG9Mb3dlckNhc2UiLCJjYXBpdGFsaXplIiwiaW5wdXQiLCJyZXN1bHQiLCJyZXBsYWNlIiwicyIsInNwbGl0IiwibWFwIiwid29yZCIsInRvVXBwZXJDYXNlIiwiam9pbiIsImRhdGUiLCJob3VyIiwiRGF0ZSIsImdldEhvdXJzIiwia3BoIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwiZGF5IiwiZ2V0V2Vla2RheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSJdLCJzb3VyY2VSb290IjoiIn0=