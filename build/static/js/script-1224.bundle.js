/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/modules/UIController.ts":
/*!****************************************!*\
  !*** ./src/ts/modules/UIController.ts ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar UIController = /** @class */ (function () {\n    function UIController() {\n        this.classNameLoad = \"is-load\";\n        this.classNameActive = \"is-active\";\n    }\n    UIController.prototype.loadDOM = function (dom) {\n        dom.classList.add(this.classNameLoad);\n    };\n    UIController.prototype.activateDOM = function (dom) {\n        dom.classList.add(this.classNameActive);\n    };\n    UIController.prototype.deactivateDOM = function (dom) {\n        dom.classList.remove(this.classNameActive);\n    };\n    return UIController;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (UIController);\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/modules/UIController.ts?");

/***/ }),

/***/ "./src/ts/modules/WebGLController.ts":
/*!*******************************************!*\
  !*** ./src/ts/modules/WebGLController.ts ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar WebGLController = /** @class */ (function () {\n    function WebGLController() {\n        this.gl = null;\n    }\n    WebGLController.prototype.initWebGLContext = function (canvas) {\n        this.gl = canvas.getContext(\"webgl\");\n    };\n    WebGLController.prototype.getWebGLContext = function () {\n        return this.gl;\n    };\n    WebGLController.prototype.initTexture = function () {\n        var texture = this.gl.createTexture();\n        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);\n        var level = 0;\n        var internalFormat = this.gl.RGBA;\n        var width = 1;\n        var height = 1;\n        var border = 0;\n        var srcFormat = this.gl.RGBA;\n        var srcType = this.gl.UNSIGNED_BYTE;\n        var pixel = new Uint8Array([0, 0, 0, 255]);\n        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);\n        this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);\n        return texture;\n    };\n    WebGLController.prototype.updateTexture = function (texture, video) {\n        var level = 0;\n        var internalFormat = this.gl.RGBA;\n        var srcFormat = this.gl.RGBA;\n        var srcType = this.gl.UNSIGNED_BYTE;\n        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);\n        this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, video);\n    };\n    WebGLController.prototype.createShader = function (type, source) {\n        var shader;\n        switch (type) {\n            case \"vertex\":\n                shader = this.gl.createShader(this.gl.VERTEX_SHADER);\n                break;\n            case \"fragment\":\n                shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);\n                break;\n            default:\n                return;\n        }\n        this.gl.shaderSource(shader, source);\n        this.gl.compileShader(shader);\n        if (this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {\n            return shader;\n        }\n        else {\n            alert(this.gl.getShaderInfoLog(shader));\n            console.log(this.gl.getShaderInfoLog(shader));\n        }\n    };\n    WebGLController.prototype.createProgram = function (vertexShader, fragmentShader) {\n        var program = this.gl.createProgram();\n        this.gl.attachShader(program, vertexShader);\n        this.gl.attachShader(program, fragmentShader);\n        this.gl.linkProgram(program);\n        if (this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {\n            this.gl.useProgram(program);\n            return program;\n        }\n        else {\n            return null;\n        }\n    };\n    WebGLController.prototype.createVbo = function (vboArray) {\n        var vbo = this.gl.createBuffer();\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);\n        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vboArray), this.gl.STATIC_DRAW);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);\n        return vbo;\n    };\n    WebGLController.prototype.createIbo = function (iboArray) {\n        var ibo = this.gl.createBuffer();\n        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, ibo);\n        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Int16Array(iboArray), this.gl.STATIC_DRAW);\n        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);\n        return ibo;\n    };\n    return WebGLController;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebGLController);\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/modules/WebGLController.ts?");

/***/ }),

/***/ "./src/ts/script-1224.ts":
/*!*******************************!*\
  !*** ./src/ts/script-1224.ts ***!
  \*******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UIController */ \"./src/ts/modules/UIController.ts\");\n/* harmony import */ var _modules_WebGLController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/WebGLController */ \"./src/ts/modules/WebGLController.ts\");\n\n\nvar uc, wc;\nvar startTime;\nvar time = 0.0;\nvar tempTime = 0.0;\nvar canvas;\nvar canvasWidth, canvasHeight;\nvar mouseX, mouseY;\nvar gl;\nvar uniformLocation = new Array();\nvar texture;\nvar video;\nvar isRunning;\nvar isVideoReady = false;\nvar sectionUI, buttonUI;\nuc = new _modules_UIController__WEBPACK_IMPORTED_MODULE_0__.default();\nwc = new _modules_WebGLController__WEBPACK_IMPORTED_MODULE_1__.default();\nvar vertexShaderSource = \"\\n  attribute vec3 position;\\n  void main(void){\\n    gl_Position = vec4(position, 1.0);\\n  }\\n\";\nvar fragmentShaderSource = \"\\n  precision mediump float;\\n  uniform float time;\\n  uniform vec2  mouse;\\n  uniform vec2  resolution;\\n  uniform sampler2D map;\\n\\n  void main(){\\n    vec2 uv = gl_FragCoord.xy/resolution.xy;\\n    vec2 uvTop = vec2(uv.x, uv.y / 2.0 + 0.5);\\n    vec4 colorTop = texture2D(map, uvTop);\\n    vec2 uvBottom = vec2(uv.x, uv.y / 2.0);\\n    vec4 alphaBottom = texture2D( map, uvBottom );\\n    gl_FragColor = vec4( colorTop.r, colorTop.g, colorTop.b, alphaBottom.b);\\n  }\\n\";\nwindow.onload = function () {\n    video = setupVideo('../static/video/video-1224.mp4');\n    sectionUI = document.getElementById('ui');\n    buttonUI = document.getElementById('ui_button');\n    buttonUI.addEventListener('click', function () {\n        video.pause();\n        video.muted = false;\n        video.currentTime = 0;\n        video.play();\n        sectionUI.classList.remove('is-active');\n        canvas.classList.add('is-active');\n    });\n    canvas = document.getElementById(\"canvas\");\n    canvasWidth = 1280;\n    canvasHeight = 360;\n    canvas.width = canvasWidth;\n    canvas.height = canvasHeight;\n    canvas.addEventListener(\"mousemove\", mouseMove, true);\n    wc.initWebGLContext(canvas);\n    gl = wc.getWebGLContext();\n    var program = wc.createProgram(wc.createShader(\"vertex\", vertexShaderSource), wc.createShader(\"fragment\", fragmentShaderSource));\n    isRunning = program != null;\n    uniformLocation[0] = gl.getUniformLocation(program, \"time\");\n    uniformLocation[1] = gl.getUniformLocation(program, \"mouse\");\n    uniformLocation[2] = gl.getUniformLocation(program, \"resolution\");\n    uniformLocation[3] = gl.getUniformLocation(program, \"map\");\n    var position = [-1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0];\n    var index = [0, 2, 1, 1, 2, 3];\n    var vPosition = wc.createVbo(position);\n    var vIndex = wc.createIbo(index);\n    var vAttLocation = gl.getAttribLocation(program, \"position\");\n    gl.bindBuffer(gl.ARRAY_BUFFER, vPosition);\n    gl.enableVertexAttribArray(vAttLocation);\n    gl.vertexAttribPointer(vAttLocation, 3, gl.FLOAT, false, 0, 0);\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vIndex);\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\n    mouseX = 0.5;\n    mouseY = 0.5;\n    startTime = new Date().getTime();\n    texture = wc.initTexture();\n    render();\n};\nwindow.addEventListener(\"pageshow\", function (event) {\n    if (event.persisted) {\n        location.reload();\n    }\n});\nfunction mouseMove(e) {\n    mouseX = e.offsetX / canvasWidth;\n    mouseY = e.offsetY / canvasHeight;\n}\nfunction render() {\n    if (!isRunning) {\n        return;\n    }\n    time = (new Date().getTime() - startTime) * 0.001;\n    if (isVideoReady) {\n        wc.updateTexture(texture, video);\n    }\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    gl.activeTexture(gl.TEXTURE0);\n    gl.bindTexture(gl.TEXTURE_2D, texture);\n    gl.uniform1f(uniformLocation[0], time + tempTime);\n    gl.uniform2fv(uniformLocation[1], [mouseX, mouseY]);\n    gl.uniform2fv(uniformLocation[2], [canvasWidth, canvasHeight]);\n    gl.uniform1i(uniformLocation[3], 0);\n    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);\n    gl.flush();\n    // setTimeout(render, fps);\n    requestAnimationFrame(render);\n}\nfunction setupVideo(url) {\n    var video = document.createElement(\"video\");\n    var playing = false;\n    var timeupdate = false;\n    video.autoplay = true;\n    video.muted = true;\n    video.loop = true;\n    video.setAttribute(\"preload\", \"auto\");\n    video.setAttribute(\"playsinline\", \"\");\n    video.setAttribute(\"webkit-playsinline\", \"\");\n    video.addEventListener(\"playing\", function () {\n        playing = true;\n        checkReady();\n    }, true);\n    video.addEventListener(\"timeupdate\", function () {\n        timeupdate = true;\n        checkReady();\n    }, true);\n    video.src = url;\n    video.play();\n    function checkReady() {\n        if (playing && timeupdate) {\n            isVideoReady = true;\n        }\n    }\n    return video;\n}\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/script-1224.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/ts/script-1224.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;