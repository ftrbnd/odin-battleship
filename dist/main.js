/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Gameboard.js":
/*!**********************************!*\
  !*** ./src/classes/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = (rows = 8, cols = 8) => {\r\n    rows = rows <= 8 ? 8 : rows; // enforce minimum board size\r\n    cols = cols <= 8 ? 8 : cols;\r\n\r\n    let board = [];\r\n    for (let r = 0; r < rows; r++) {\r\n        board.push([]);\r\n        for (let c = 0; c < cols; c++) {\r\n            board[r].push('_');\r\n        }\r\n    }\r\n\r\n    const getRows = () => rows;\r\n    const getColumns = () => cols;\r\n\r\n    const shipCoords = [];\r\n\r\n    const placeShip = (ship, x, y, isVertical) => {\r\n        const prevBoard = JSON.parse(JSON.stringify(board));\r\n        const coords = [];\r\n\r\n        if (isVertical) {\r\n            for (let i = 0; i < ship.getLength(); i++) {\r\n                if (x < 0 || x >= board.length) {\r\n                    board = prevBoard;\r\n                    throw new RangeError(`Cannot vertically place ship on row ${x}!`);\r\n                }\r\n\r\n                coords.push([x, y]);\r\n                board[x++][y] = 'S';\r\n            }\r\n        } else {\r\n            for (let i = 0; i < ship.getLength(); i++) {\r\n                if (y < 0 || y >= board[0].length) {\r\n                    board = prevBoard;\r\n                    throw new RangeError(`Cannot horizontally place ship on column ${y}!`);\r\n                }\r\n                \r\n                coords.push([x, y]);\r\n                board[x][y++] = 'S';\r\n            }\r\n        }\r\n\r\n        shipCoords.push([ship, coords]);\r\n    };\r\n\r\n    const receiveAttack = (x, y) => {\r\n        if (board[x][y] == 'S') { // hit\r\n            board[x][y] = 'H';\r\n            \r\n            for (const shipAndCoords of shipCoords) {\r\n                const ship = shipAndCoords[0], coords = shipAndCoords[1];\r\n\r\n                for (const coord of coords)\r\n                    if (x == coord[0] && y == coord[1])\r\n                        ship.hit(1);\r\n            }\r\n        } else { // miss\r\n            board[x][y] = 'M';\r\n        }\r\n    };\r\n\r\n    const allShipsSunk = () => {\r\n        for (const [ship] of shipCoords) {\r\n            if (!ship.isSunk()) return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    return {\r\n        board,\r\n        getRows,\r\n        getColumns,\r\n        placeShip,\r\n        receiveAttack,\r\n        allShipsSunk\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Gameboard.js?");

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (name) => {\r\n    name = name.trim() || 'Player';\r\n    const getName = () => name;\r\n\r\n    return {\r\n        getName\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Player.js?");

/***/ }),

/***/ "./src/classes/Ship.js":
/*!*****************************!*\
  !*** ./src/classes/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, hits = 0) => {\r\n    length = length <= 0 ? 1 : length;\r\n    hits = hits <= 0 ? 0 : hits;\r\n\r\n    const getLength = () => length;\r\n    const getHits = () => hits;\r\n\r\n    const hit = (amount) => {\r\n        hits += amount <= 0 ? 0 : amount;\r\n    };\r\n\r\n    const isSunk = () => {\r\n        return hits >= length;\r\n    };\r\n\r\n    return {\r\n        getLength,\r\n        getHits,\r\n        hit,\r\n        isSunk\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Gameboard */ \"./src/classes/Gameboard.js\");\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player */ \"./src/classes/Player.js\");\n/* harmony import */ var _classes_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Ship */ \"./src/classes/Ship.js\");\n\r\n\r\n\r\n\r\nfunction game() {\r\n    const playerOne = (0,_classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('P1');\r\n    const playerTwo = (0,_classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('P2');\r\n\r\n    const ROWS = 8, COLS = 8;\r\n    const boardOne = (0,_classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ROWS, COLS);\r\n    const boardTwo = (0,_classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ROWS, COLS);\r\n\r\n    // TODO: Fix placeShip() so that a boat doesn't get placed onto an\r\n    // already populated coordinate\r\n}\r\n\r\ngame();\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;