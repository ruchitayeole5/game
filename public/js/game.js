/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/game.js":
/*!******************************!*\
  !*** ./resources/js/game.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var count = 0;
var counter = 25;
var bird = document.getElementById('bird');
var horse = document.getElementById('horse');
var squirrel = document.getElementById('squirrel');
var monkey = document.getElementById('monkey');
var tiger = document.getElementById('tiger');
var eagle = document.getElementById('eagle');
var cursor = document.getElementById('target');
var forest = document.getElementById('forest');
var animal = document.getElementsByClassName("animal");
var elems = document.getElementsByClassName("animal");
document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
$(document).mousedown(function (event) {
  var audio = $(".game-container .gun")[0];
  audio.pause();
  audio.currentTime = 0;
  audio.play(); //console.log('clicked');
});

function setRandomHorse() {
  horse.className = "animate";
  horse.style.display = 'block';
}

function setRandom() {
  bird.className = "animate";
  squirrel.className = "animate";
  bird.style.display = 'block';
  squirrel.style.display = 'block';
}

function setRandomTiger() {
  tiger.className = "animate";
  tiger.style.display = 'block';
}

function setRandomEagle() {
  eagle.className = "animate";
  eagle.style.display = 'block';
}

var loop = setInterval(function () {
  setRandomHorse();
}, 5000);
var loop1 = setInterval(function () {
  setRandom();
}, 2000);
var setTiger = setInterval(function () {
  setRandomTiger();
}, 10000);
var setEagle = setInterval(function () {
  setRandomEagle();
}, 15000);

function clickEffect(e) {
  var d = document.createElement("img");
  d.src = '../../images/explosion1.png';
  d.style.height = '20%';
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  forest.appendChild(d);
  d.addEventListener('animationend', function () {
    d.parentElement.removeChild(d);
  }.bind(this));
}

document.addEventListener('click', clickEffect);

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', function () {
    this.style.display = 'none';

    if (counter != 0) {
      count++;
      document.getElementById('score').innerHTML = "Score:" + count;
    }
  });
}

var tt = setInterval(function () {
  startTime();
}, 1000);

function startTime() {
  if (counter == 0) {
    clearInterval(tt);
    clearInterval(loop);
    clearInterval(loop1);
    clearInterval(setTiger);
    clearInterval(setEagle);
    document.getElementById("dashboard").className = "result";
    document.getElementById('value').innerHTML = "Final Score:" + count;
    count = 0;
    document.getElementById('score').innerHTML = "Score:" + count;
    forest.style.opacity = '0.3';
  } else {
    counter--;
    document.getElementById('timer').innerHTML = "Timer:" + counter;
  }
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleNotFoundError: Module not found: Error: Can't resolve '../../images/forest.png' in 'D:\\Sites\\game\\resources\\sass'\n    at factory.create (D:\\Sites\\game\\node_modules\\webpack\\lib\\Compilation.js:925:10)\n    at factory (D:\\Sites\\game\\node_modules\\webpack\\lib\\NormalModuleFactory.js:401:22)\n    at resolver (D:\\Sites\\game\\node_modules\\webpack\\lib\\NormalModuleFactory.js:130:21)\n    at asyncLib.parallel (D:\\Sites\\game\\node_modules\\webpack\\lib\\NormalModuleFactory.js:224:22)\n    at D:\\Sites\\game\\node_modules\\neo-async\\async.js:2830:7\n    at D:\\Sites\\game\\node_modules\\neo-async\\async.js:6877:13\n    at normalResolver.resolve (D:\\Sites\\game\\node_modules\\webpack\\lib\\NormalModuleFactory.js:214:25)\n    at doResolve (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:184:12)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn0 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at resolver.doResolve (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:37:5)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn0 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn0 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:42:38)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn43 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn0 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:42:38)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn1 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\Resolver.js:238:5)\n    at _fn0 (eval at create (D:\\Sites\\game\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at fs.stat (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\DirectoryExistsPlugin.js:22:13)\n    at process.nextTick (D:\\Sites\\game\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:73:15)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./resources/js/game.js ./resources/sass/app.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Sites\game\resources\js\game.js */"./resources/js/game.js");
module.exports = __webpack_require__(/*! D:\Sites\game\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });