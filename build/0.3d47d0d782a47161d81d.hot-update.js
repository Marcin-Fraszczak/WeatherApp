"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    (0,_app__WEBPACK_IMPORTED_MODULE_1__.getData)("https://api.weatherapi.com/v1/forecast.json?key=".concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.key, "&q=").concat(city, "&days=").concat(_APIconfig__WEBPACK_IMPORTED_MODULE_0__.config.days), rawInput);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bbea0cba72652d4ffecf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZDQ3ZDBkNzgyYTQ3MTYxZDgxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQztBQUNOO0FBQ1o7QUFFakIsU0FBU0UsU0FBU0EsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ2xCLElBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0VBQzNERixXQUFXLENBQUNHLE1BQU0sR0FBRyxLQUFLO0VBQzFCSCxXQUFXLENBQUNJLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsUUFBUSxDQUFDO0VBQ2hELElBQUlDLFdBQVcsR0FBR04sV0FBVyxDQUFDRSxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQzFESSxXQUFXLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDTCxDQUFDLEVBQUs7SUFDekNDLFdBQVcsQ0FBQ0UsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDSyxLQUFLLEdBQUcsRUFBRTtJQUM3Q1AsV0FBVyxDQUFDRyxNQUFNLEdBQUcsSUFBSTtFQUM3QixDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVNFLFFBQVFBLENBQUNOLENBQUMsRUFBRTtFQUNqQkEsQ0FBQyxDQUFDUyxjQUFjLEVBQUU7RUFDbEIsSUFBTUMsWUFBWSxHQUFHVixDQUFDLENBQUNXLE1BQU0sQ0FBQ1IsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNwRCxJQUFNUyxRQUFRLEdBQUdGLFlBQVksQ0FBQ0YsS0FBSztFQUNuQ0UsWUFBWSxDQUFDRixLQUFLLEdBQUcsRUFBRTtFQUN2QixJQUFJSSxRQUFRLEVBQUU7SUFDVixJQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO0lBQ3BFRixJQUFJLEdBQUdBLElBQUksQ0FBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7SUFDbkNqQiw2Q0FBTyxvREFBQWtCLE1BQUEsQ0FBb0RuQixrREFBYSxTQUFBbUIsTUFBQSxDQUFNSCxJQUFJLFlBQUFHLE1BQUEsQ0FBU25CLG1EQUFjLEdBQUllLFFBQVEsQ0FBQztFQUMxSDtBQUNKOzs7Ozs7OztVQ3pCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2Zvcm1GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4vQVBJY29uZmlnXCI7XG5pbXBvcnQge2dldERhdGF9IGZyb20gXCIuL2FwcFwiXG5leHBvcnQge3Nob3dJbnB1dH1cblxuZnVuY3Rpb24gc2hvd0lucHV0KGUpIHtcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlX19mb3JtXCIpXG4gICAgZm9ybUVsZW1lbnQuaGlkZGVuID0gZmFsc2VcbiAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldElucHV0KVxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUgPSBcIlwiXG4gICAgICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgcmF3SW5wdXQgPSBpbnB1dEVsZW1lbnQudmFsdWVcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiXG4gICAgaWYgKHJhd0lucHV0KSB7XG4gICAgICAgIGxldCBjaXR5ID0gcmF3SW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgICAgIGdldERhdGEoYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7Y29uZmlnWydrZXknXX0mcT0ke2NpdHl9JmRheXM9JHtjb25maWdbJ2RheXMnXX1gLCByYXdJbnB1dClcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmJlYTBjYmE3MjY1MmQ0ZmZlY2ZcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiZ2V0RGF0YSIsInNob3dJbnB1dCIsImUiLCJmb3JtRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGRlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRJbnB1dCIsImNsb3NlQnV0dG9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RWxlbWVudCIsInRhcmdldCIsInJhd0lucHV0IiwiY2l0eSIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9