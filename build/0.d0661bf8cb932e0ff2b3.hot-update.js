self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _forecastClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);






/*
Parametrized config for fetching
 */
var key = '46192b1a692f4486a0d181847232202 ';
var days = 6;
var city = "auto:ip";
var addCityButton = document.querySelector("#add-city");
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
  var inputElement = e.target.querySelector("input");
  var rawInput = inputElement.value;
  inputElement.value = "";
  if (rawInput) {
    city = rawInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    city = city.replace(/\u0142/g, "l");
    getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days), rawInput);
  }
}
function extractData(data, rawCity) {
  var city = rawCity || data['location']['name'];
  var time0fDay = _helpers__WEBPACK_IMPORTED_MODULE_4__["default"].dayOrNight(data['location']['localtime']);
  var condition = data['current']['condition']['code'];
  var temp = data['current']['temp_c'];
  var pressure = data['current']['pressure_mb'];
  var humidity = data['current']['humidity'];
  var wind = _helpers__WEBPACK_IMPORTED_MODULE_4__["default"].convertWindSpeed(data['current']['wind_kph']);
  var future = _helpers__WEBPACK_IMPORTED_MODULE_4__["default"].futureForecast(data['forecast']['forecastday'].slice(1));
  var weatherTab = document.querySelector("div.module__weather");
  var clonedWeatherTab = weatherTab.cloneNode(true);
  clonedWeatherTab.hidden = false;
  weatherTab.parentElement.appendChild(clonedWeatherTab);
  var forecast = new _forecastClass__WEBPACK_IMPORTED_MODULE_3__.Forecast(clonedWeatherTab);
  forecast.updateData(city, temp, pressure, humidity, wind, condition, time0fDay);
  forecast.updateForecast(future);
}
function getData(_x, _x2) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, city) {
    var body, response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = document.querySelector("body");
          body.classList.add("loading");
          _context.next = 4;
          return fetch(url);
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          body.classList.remove("loading");
          extractData(data, city);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}
getData("http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city, "&days=").concat(days));

/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findIcon": () => (/* binding */ findIcon)
/* harmony export */ });
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

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forecast": () => (/* binding */ Forecast)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);



/*
Weather module as a class
 */
var Forecast = /*#__PURE__*/function () {
  function Forecast(el) {
    var _this = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Forecast);
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
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Forecast, [{
    key: "updateData",
    value: function updateData(city, temp, press, humid, wind, cond, timeOfDay) {
      this.city.textContent = city;
      this.temperature.textContent = temp;
      this.pressure.textContent = press + "hPa";
      this.humidity.textContent = humid + "%";
      this.wind.textContent = wind + "m/s";
      this.icon.src = (0,_conditions__WEBPACK_IMPORTED_MODULE_2__.findIcon)(cond, timeOfDay);
    }
  }, {
    key: "updateForecast",
    value: function updateForecast(forecastList) {
      this.forecast.forEach(function (day, index) {
        day.querySelector(".day").textContent = forecastList[index]["day"];
        day.querySelector(".temperature__value").textContent = forecastList[index]['temp'];
        day.querySelector("img").src = (0,_conditions__WEBPACK_IMPORTED_MODULE_2__.findIcon)(forecastList[index]['condition'], "day");
      });
    }
  }]);
  return Forecast;
}();

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* functions to help with data manipulation */
var helpers = {
  capitalize: capitalize,
  getWeekday: getWeekday,
  convertWindSpeed: convertWindSpeed,
  futureForecast: futureForecast,
  dayOrNight: dayOrNight
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helpers);
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

/***/ }),

/***/ 31:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(32)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 30:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(31)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 24:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ 25:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 26:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 29:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 27:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 28:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0aa79bacf7830d0d319d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9jb25kaXRpb25zLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2ZvcmVjYXN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5kSWNvbn0gZnJvbSBcIi4vY29uZGl0aW9uc1wiXG5pbXBvcnQge0ZvcmVjYXN0fSBmcm9tIFwiLi9mb3JlY2FzdENsYXNzXCJcbmltcG9ydCBoZWxwZXJzIGZyb20gXCIuL2hlbHBlcnNcIlxuXG4vKlxuUGFyYW1ldHJpemVkIGNvbmZpZyBmb3IgZmV0Y2hpbmdcbiAqL1xuY29uc3Qga2V5ID0gJzQ2MTkyYjFhNjkyZjQ0ODZhMGQxODE4NDcyMzIyMDIgJ1xubGV0IGRheXMgPSA2XG5sZXQgY2l0eSA9IFwiYXV0bzppcFwiXG5cbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jaXR5XCIpXG5hZGRDaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpXG5cbmZ1bmN0aW9uIHNob3dJbnB1dChlKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHVsZV9fZm9ybVwiKVxuICAgIGZvcm1FbGVtZW50LmhpZGRlbiA9IGZhbHNlXG4gICAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbnB1dClcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tY2xvc2VcIilcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlID0gXCJcIlxuICAgICAgICBmb3JtRWxlbWVudC5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHJhd0lucHV0ID0gaW5wdXRFbGVtZW50LnZhbHVlXG4gICAgaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIlxuICAgIGlmIChyYXdJbnB1dCkge1xuICAgICAgICBjaXR5ID0gcmF3SW5wdXQubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xcdTAxNDIvZywgXCJsXCIpXG4gICAgICAgIGdldERhdGEoYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtjaXR5fSZkYXlzPSR7ZGF5c31gLCByYXdJbnB1dClcbiAgICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEsIHJhd0NpdHkpIHtcbiAgICBjb25zdCBjaXR5ID0gcmF3Q2l0eSB8fCBkYXRhWydsb2NhdGlvbiddWyduYW1lJ11cbiAgICBjb25zdCB0aW1lMGZEYXkgPSBoZWxwZXJzLmRheU9yTmlnaHQoZGF0YVsnbG9jYXRpb24nXVsnbG9jYWx0aW1lJ10pXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YVsnY3VycmVudCddWydjb25kaXRpb24nXVsnY29kZSddXG4gICAgY29uc3QgdGVtcCA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcF9jJ11cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGFbJ2N1cnJlbnQnXVsncHJlc3N1cmVfbWInXVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YVsnY3VycmVudCddWydodW1pZGl0eSddXG4gICAgY29uc3Qgd2luZCA9IGhlbHBlcnMuY29udmVydFdpbmRTcGVlZChkYXRhWydjdXJyZW50J11bJ3dpbmRfa3BoJ10pXG4gICAgY29uc3QgZnV0dXJlID0gaGVscGVycy5mdXR1cmVGb3JlY2FzdChkYXRhWydmb3JlY2FzdCddWydmb3JlY2FzdGRheSddLnNsaWNlKDEpKVxuXG4gICAgY29uc3Qgd2VhdGhlclRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubW9kdWxlX193ZWF0aGVyXCIpXG4gICAgbGV0IGNsb25lZFdlYXRoZXJUYWIgPSB3ZWF0aGVyVGFiLmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZFdlYXRoZXJUYWIuaGlkZGVuID0gZmFsc2VcbiAgICB3ZWF0aGVyVGFiLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkV2VhdGhlclRhYilcbiAgICBjb25zdCBmb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChjbG9uZWRXZWF0aGVyVGFiKVxuICAgIGZvcmVjYXN0LnVwZGF0ZURhdGEoY2l0eSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24sIHRpbWUwZkRheSlcbiAgICBmb3JlY2FzdC51cGRhdGVGb3JlY2FzdChmdXR1cmUpXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwsIGNpdHkpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICBleHRyYWN0RGF0YShkYXRhLCBjaXR5KVxufVxuXG5nZXREYXRhKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7Y2l0eX0mZGF5cz0ke2RheXN9YClcblxuIiwiLypcbkNvbmRpdGlvbiBjb2RlcyBmcm9tIHdlYXRoZXJhcGkuY29tIHRvIGRlY2lkZSB3aGljaCBpY29uIHdpbGwgYmUgdXNlZFxuICovXG5leHBvcnQgY29uc3QgZmluZEljb24gPSAoY29kZSwgdGltZU9mRGF5KSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRvciA9IHtcbiAgICAgICAgMTAwMDogYGNsZWFyLSR7dGltZU9mRGF5fWAsXG4gICAgICAgIDEwMDM6IGBwYXJ0bHktY2xvdWR5LSR7dGltZU9mRGF5fWAsXG4gICAgICAgIDEwMDY6IGBjbG91ZHlgLFxuICAgICAgICAxMDA5OiBgY2xvdWR5YCxcbiAgICAgICAgMTAzMDogYGNsb3VkeWAsXG4gICAgICAgIDEwNjM6IGByYWluYCxcbiAgICAgICAgMTA2NjogYHNub3dgLFxuICAgICAgICAxMDY5OiBgc2xlZXRgLFxuICAgICAgICAxMDcyOiBgc2xlZXRgLFxuICAgICAgICAxMDg3OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTExNDogYHNub3dgLFxuICAgICAgICAxMTE3OiBgc25vd2AsXG4gICAgICAgIDExMzU6IGBjbG91ZHlgLFxuICAgICAgICAxMTQ3OiBgY2xvdWR5YCxcbiAgICAgICAgMTE1MDogYHJhaW5gLFxuICAgICAgICAxMTUzOiBgcmFpbmAsXG4gICAgICAgIDExNjg6IGByYWluYCxcbiAgICAgICAgMTE3MTogYHJhaW5gLFxuICAgICAgICAxMTgwOiBgcmFpbmAsXG4gICAgICAgIDExODM6IGByYWluYCxcbiAgICAgICAgMTE4NjogYHJhaW5gLFxuICAgICAgICAxMTg5OiBgcmFpbmAsXG4gICAgICAgIDExOTI6IGByYWluYCxcbiAgICAgICAgMTE5NTogYHJhaW5gLFxuICAgICAgICAxMTk4OiBgcmFpbmAsXG4gICAgICAgIDEyMDE6IGByYWluYCxcbiAgICAgICAgMTIwNDogYHNsZWV0YCxcbiAgICAgICAgMTIwNzogYHNsZWV0YCxcbiAgICAgICAgMTIxMDogYHNub3dgLFxuICAgICAgICAxMjEzOiBgc25vd2AsXG4gICAgICAgIDEyMTY6IGBzbm93YCxcbiAgICAgICAgMTIxOTogYHNub3dgLFxuICAgICAgICAxMjIyOiBgc25vd2AsXG4gICAgICAgIDEyMjU6IGBzbm93YCxcbiAgICAgICAgMTIzNzogYHNub3dgLFxuICAgICAgICAxMjQwOiBgcmFpbmAsXG4gICAgICAgIDEyNDM6IGByYWluYCxcbiAgICAgICAgMTI0NjogYHJhaW5gLFxuICAgICAgICAxMjQ5OiBgc2xlZXRgLFxuICAgICAgICAxMjUyOiBgc2xlZXRgLFxuICAgICAgICAxMjU1OiBgc25vd2AsXG4gICAgICAgIDEyNTg6IGBzbm93YCxcbiAgICAgICAgMTI2MTogYHNsZWV0YCxcbiAgICAgICAgMTI2NDogYHNsZWV0YCxcbiAgICAgICAgMTI3MzogYHRodW5kZXJzdG9ybWAsXG4gICAgICAgIDEyNzY6IGB0aHVuZGVyc3Rvcm1gLFxuICAgICAgICAxMjc5OiBgdGh1bmRlcnN0b3JtYCxcbiAgICAgICAgMTI4MjogYHRodW5kZXJzdG9ybWAsXG4gICAgfVxuICAgIHJldHVybiBgYXNzZXRzL2ljb25zLyR7dHJhbnNsYXRvcltjb2RlXX0uc3ZnYFxufSIsImltcG9ydCB7ZmluZEljb259IGZyb20gXCIuL2NvbmRpdGlvbnNcIjtcbi8qXG5XZWF0aGVyIG1vZHVsZSBhcyBhIGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JlY2FzdCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsXG4gICAgICAgIHRoaXMuY2l0eSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNpdHlfX25hbWVcIilcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnRlbXBlcmF0dXJlX192YWx1ZVwiKVxuICAgICAgICB0aGlzLnByZXNzdXJlID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ucHJlc3N1cmVfX3ZhbHVlXCIpXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBlbC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5odW1pZGl0eV9fdmFsdWVcIilcbiAgICAgICAgdGhpcy53aW5kID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4ud2luZC1zcGVlZF9fdmFsdWVcIilcbiAgICAgICAgdGhpcy5pY29uID0gZWwucXVlcnlTZWxlY3RvcihcImRpdi53ZWF0aGVyX19pY29uXCIpLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJ1bC53ZWF0aGVyX19mb3JlY2FzdFwiKS5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1jbG9zZVwiKVxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGNpdHksIHRlbXAsIHByZXNzLCBodW1pZCwgd2luZCwgY29uZCwgdGltZU9mRGF5KSB7XG4gICAgICAgIHRoaXMuY2l0eS50ZXh0Q29udGVudCA9IGNpdHlcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHRlbXBcbiAgICAgICAgdGhpcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IHByZXNzICsgXCJoUGFcIlxuICAgICAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gaHVtaWQgKyBcIiVcIlxuICAgICAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSB3aW5kICsgXCJtL3NcIlxuICAgICAgICB0aGlzLmljb24uc3JjID0gZmluZEljb24oY29uZCwgdGltZU9mRGF5KVxuICAgIH1cblxuICAgIHVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0TGlzdCkge1xuICAgICAgICB0aGlzLmZvcmVjYXN0LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiLmRheVwiKS50ZXh0Q29udGVudCA9IGZvcmVjYXN0TGlzdFtpbmRleF1bXCJkYXlcIl1cbiAgICAgICAgICAgIGRheS5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlX192YWx1ZVwiKS50ZXh0Q29udGVudCA9IGZvcmVjYXN0TGlzdFtpbmRleF1bJ3RlbXAnXVxuICAgICAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gZmluZEljb24oZm9yZWNhc3RMaXN0W2luZGV4XVsnY29uZGl0aW9uJ10sIFwiZGF5XCIpXG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8qIGZ1bmN0aW9ucyB0byBoZWxwIHdpdGggZGF0YSBtYW5pcHVsYXRpb24gKi9cbmNvbnN0IGhlbHBlcnMgPSB7XG4gICAgY2FwaXRhbGl6ZSxcbiAgICBnZXRXZWVrZGF5LFxuICAgIGNvbnZlcnRXaW5kU3BlZWQsXG4gICAgZnV0dXJlRm9yZWNhc3QsXG4gICAgZGF5T3JOaWdodFxufVxuZXhwb3J0IGRlZmF1bHQgaGVscGVyc1xuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcbiAgICByZXR1cm4gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxufVxuXG5jb25zdCBnZXRXZWVrZGF5ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnUEwnLCB7d2Vla2RheTogJ2xvbmcnfSkpXG59XG5cbmNvbnN0IGNvbnZlcnRXaW5kU3BlZWQgPSAoa3BoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa3BoIC8gMy42ICogMTApIC8gMTBcbn1cblxuY29uc3QgZnV0dXJlRm9yZWNhc3QgPSAoYXJyKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZ2V0V2Vla2RheShkYXlbJ2RhdGUnXSksXG4gICAgICAgICAgICB0ZW1wOiBkYXlbJ2RheSddWydhdmd0ZW1wX2MnXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF5WydkYXknXVsnY29uZGl0aW9uJ11bJ2NvZGUnXVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgZGF5T3JOaWdodCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRIb3VycygpXG4gICAgaWYgKDYgPCBob3VyICYmIGhvdXIgPCAyMCkge1xuICAgICAgICByZXR1cm4gXCJkYXlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCJcbiAgICB9XG59IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLFxuICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpLFxuICAgICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLy8gVE9ETyhCYWJlbCA4KTogUmVtb3ZlIHRoaXMgZmlsZS5cblxudmFyIHJ1bnRpbWUgPSByZXF1aXJlKFwiLi4vaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWVcIikoKTtcbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcblxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9wYWNrYWdlcy9ydW50aW1lL3J1bnRpbWUuanMjTDczNj1cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBhYTc5YmFjZjc4MzBkMGQzMTlkXCIpIl0sIm5hbWVzIjpbImZpbmRJY29uIiwiRm9yZWNhc3QiLCJoZWxwZXJzIiwia2V5IiwiZGF5cyIsImNpdHkiLCJhZGRDaXR5QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dJbnB1dCIsImUiLCJmb3JtRWxlbWVudCIsImhpZGRlbiIsImdldElucHV0IiwiY2xvc2VCdXR0b24iLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRFbGVtZW50IiwidGFyZ2V0IiwicmF3SW5wdXQiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwiZ2V0RGF0YSIsImNvbmNhdCIsImV4dHJhY3REYXRhIiwiZGF0YSIsInJhd0NpdHkiLCJ0aW1lMGZEYXkiLCJkYXlPck5pZ2h0IiwiY29uZGl0aW9uIiwidGVtcCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJ3aW5kIiwiY29udmVydFdpbmRTcGVlZCIsImZ1dHVyZSIsImZ1dHVyZUZvcmVjYXN0Iiwic2xpY2UiLCJ3ZWF0aGVyVGFiIiwiY2xvbmVkV2VhdGhlclRhYiIsImNsb25lTm9kZSIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZvcmVjYXN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUZvcmVjYXN0IiwiX3giLCJfeDIiLCJfZ2V0RGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJ1cmwiLCJib2R5IiwicmVzcG9uc2UiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZmV0Y2giLCJzZW50IiwianNvbiIsInJlbW92ZSIsInN0b3AiLCJjb2RlIiwidGltZU9mRGF5IiwidHJhbnNsYXRvciIsImVsIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0ZW1wZXJhdHVyZSIsImljb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJfY3JlYXRlQ2xhc3MiLCJwcmVzcyIsImh1bWlkIiwiY29uZCIsInRleHRDb250ZW50Iiwic3JjIiwiZm9yZWNhc3RMaXN0IiwiZm9yRWFjaCIsImRheSIsImluZGV4IiwiY2FwaXRhbGl6ZSIsImdldFdlZWtkYXkiLCJzIiwidG9VcHBlckNhc2UiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImtwaCIsIk1hdGgiLCJyb3VuZCIsImFyciIsIm1hcCIsImhvdXIiLCJnZXRIb3VycyJdLCJzb3VyY2VSb290IjoiIn0=