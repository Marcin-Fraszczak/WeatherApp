"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "showInput": () => (/* binding */ showInput)
/* harmony export */ });
/* harmony import */ var _APIconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);



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
  var inputElement = e.target.querySelector("input");
  var rawInput = inputElement.value;
  inputElement.value = "";
  if (rawInput) {
    var city = rawInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    city = city.replace(/\u0142/g, "l");
    (0,_app__WEBPACK_IMPORTED_MODULE_1__.getData)("http://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.key, "&q=").concat(city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.days), rawInput);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("59b628baa3f2506f2cb6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ODBjMzM3YWM5NGNmNjFhY2RlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDTjtBQUNGO0FBRTNCLFNBQVNFLFNBQVNBLENBQUNFLENBQUMsRUFBRTtFQUNsQixJQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUMzREYsV0FBVyxDQUFDRyxNQUFNLEdBQUcsS0FBSztFQUMxQkgsV0FBVyxDQUFDSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVOLFFBQVEsQ0FBQztFQUNoRCxJQUFJTyxXQUFXLEdBQUdMLFdBQVcsQ0FBQ0UsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUMxREcsV0FBVyxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0wsQ0FBQyxFQUFLO0lBQ3pDQyxXQUFXLENBQUNFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ksS0FBSyxHQUFHLEVBQUU7SUFDN0NOLFdBQVcsQ0FBQ0csTUFBTSxHQUFHLElBQUk7RUFDN0IsQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTTCxRQUFRQSxDQUFDQyxDQUFDLEVBQUU7RUFDakJBLENBQUMsQ0FBQ1EsY0FBYyxFQUFFO0VBQ2xCLElBQU1DLFlBQVksR0FBR1QsQ0FBQyxDQUFDVSxNQUFNLENBQUNQLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDcEQsSUFBTVEsUUFBUSxHQUFHRixZQUFZLENBQUNGLEtBQUs7RUFDbkNFLFlBQVksQ0FBQ0YsS0FBSyxHQUFHLEVBQUU7RUFDdkIsSUFBSUksUUFBUSxFQUFFO0lBQ1YsSUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztJQUNwRUYsSUFBSSxHQUFHQSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO0lBQ25DakIsNkNBQU8sbURBQUFrQixNQUFBLENBQW1EbkIsa0RBQWEsU0FBQW1CLE1BQUEsQ0FBTUgsSUFBSSxZQUFBRyxNQUFBLENBQVNuQixtREFBYyxHQUFJZSxRQUFRLENBQUM7RUFDekg7QUFDSjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9mb3JtRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd9IGZyb20gXCIuL0FQSWNvbmZpZ1wiO1xuaW1wb3J0IHtnZXREYXRhfSBmcm9tIFwiLi9hcHBcIlxuZXhwb3J0IHtzaG93SW5wdXQsIGdldElucHV0fVxuXG5mdW5jdGlvbiBzaG93SW5wdXQoZSkge1xuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGVfX2Zvcm1cIilcbiAgICBmb3JtRWxlbWVudC5oaWRkZW4gPSBmYWxzZVxuICAgIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5wdXQpXG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLWNsb3NlXCIpXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldElucHV0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCByYXdJbnB1dCA9IGlucHV0RWxlbWVudC52YWx1ZVxuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCJcbiAgICBpZiAocmF3SW5wdXQpIHtcbiAgICAgICAgbGV0IGNpdHkgPSByYXdJbnB1dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAgICAgY2l0eSA9IGNpdHkucmVwbGFjZSgvXFx1MDE0Mi9nLCBcImxcIilcbiAgICAgICAgZ2V0RGF0YShgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2NvbmZpZ1sna2V5J119JnE9JHtjaXR5fSZkYXlzPSR7Y29uZmlnWydkYXlzJ119YCwgcmF3SW5wdXQpXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU5YjYyOGJhYTNmMjUwNmYyY2I2XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImdldERhdGEiLCJzaG93SW5wdXQiLCJnZXRJbnB1dCIsImUiLCJmb3JtRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGRlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZUJ1dHRvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEVsZW1lbnQiLCJ0YXJnZXQiLCJyYXdJbnB1dCIsImNpdHkiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==