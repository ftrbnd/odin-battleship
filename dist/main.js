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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = (rows = 8, cols = 8) => {\r\n    rows = rows <= 8 ? 8 : rows; // enforce minimum board size\r\n    cols = cols <= 8 ? 8 : cols;\r\n\r\n    let board = [];\r\n    for (let r = 0; r < rows; r++) {\r\n        board.push([]);\r\n        for (let c = 0; c < cols; c++) {\r\n            board[r].push('_');\r\n        }\r\n    }\r\n\r\n    const getRows = () => rows;\r\n    const getColumns = () => cols;\r\n    const getBoard = () => board;\r\n\r\n    const shipCoords = [];\r\n\r\n    const placeShip = (ship, x, y, isVertical, marker) => {\r\n        const prevBoard = JSON.parse(JSON.stringify(board));\r\n        const coords = [];\r\n\r\n        if (isVertical) {\r\n            for (let i = 0; i < ship.getLength(); i++) {\r\n                if (x < 0 || x >= rows || board[x][y] != '_') {\r\n                    board = prevBoard;\r\n                    return false;\r\n                }\r\n\r\n                coords.push([x, y]);\r\n                board[x++][y] = marker;\r\n            }\r\n        } else {\r\n            for (let i = 0; i < ship.getLength(); i++) {\r\n                if (y < 0 || y >= cols || board[x][y] != '_') {\r\n                    board = prevBoard;\r\n                    return false;\r\n                }\r\n                \r\n                coords.push([x, y]);\r\n                board[x][y++] = marker;\r\n            }\r\n        }\r\n\r\n        shipCoords.push([ship, coords]);\r\n        return true;\r\n    };\r\n\r\n    const receiveAttack = (x, y) => {\r\n        if (board[x][y] == 'S') { // hit\r\n            board[x][y] = 'H';\r\n            \r\n            for (const shipAndCoords of shipCoords) {\r\n                const ship = shipAndCoords[0], coords = shipAndCoords[1];\r\n\r\n                for (const coord of coords)\r\n                    if (x == coord[0] && y == coord[1])\r\n                        ship.hit(1);\r\n            }\r\n        } else { // miss\r\n            board[x][y] = 'M';\r\n        }\r\n    };\r\n\r\n    const allShipsSunk = () => {\r\n        for (const [ship] of shipCoords) {\r\n            if (!ship.isSunk()) return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    return {\r\n        getRows,\r\n        getColumns,\r\n        getBoard,\r\n        placeShip,\r\n        receiveAttack,\r\n        allShipsSunk\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Gameboard.js?");

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (name) => {\r\n    name = name.trim() || 'Player';\r\n\r\n    const getName = () => name;\r\n\r\n    const setName = (n) => {\r\n        name = n.trim() || 'Player';\r\n    }\r\n\r\n    return {\r\n        getName,\r\n        setName\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Player.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Gameboard */ \"./src/classes/Gameboard.js\");\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player */ \"./src/classes/Player.js\");\n/* harmony import */ var _classes_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Ship */ \"./src/classes/Ship.js\");\n\r\n\r\n\r\n\r\nfunction game() {\r\n    const playerOne = (0,_classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('P1');\r\n    const playerTwo = (0,_classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('P2');\r\n\r\n    const SIDE_LENGTH = 10;\r\n    const boardOne = (0,_classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SIDE_LENGTH, SIDE_LENGTH);\r\n    const boardTwo = (0,_classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SIDE_LENGTH, SIDE_LENGTH);\r\n    populateBoards(SIDE_LENGTH, boardOne, boardTwo);\r\n\r\n    displayBoard(boardOne, 'board1');\r\n    // displayBoard(boardTwo, 'board2');\r\n\r\n    console.log('Board 1: ', boardOne.getBoard());\r\n    console.log('Board 2: ', boardTwo.getBoard());\r\n}\r\n\r\nfunction populateBoards(sideLength, ...boards) {\r\n    for (const board of boards) {\r\n        const shipLengths = [5, 4, 3, 2, 2];\r\n        \r\n        while (shipLengths.length > 0) {\r\n            const length = shipLengths.pop();\r\n            const newShip = (0,_classes_Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(length);\r\n\r\n            const x = Math.floor(Math.random() * sideLength);\r\n            const y = Math.floor(Math.random() * sideLength);\r\n            const isVertical = Math.random() < 0.5;\r\n\r\n            const placedShip = board.placeShip(newShip, x, y, isVertical, length);\r\n            if (!placedShip) {\r\n                shipLengths.push(length);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction displayBoard(board, id) {\r\n    const boardDiv = document.getElementById(id);\r\n    boardDiv.style.display = 'grid';\r\n    boardDiv.style.gridTemplateRows = `repeat(${board.getRows()}, 64px)`;\r\n    boardDiv.style.gridTemplateColumns = `repeat(${board.getRows()}, 64px)`;\r\n\r\n    for (let r = 0; r < board.getRows(); r++) {\r\n        for (let c = 0; c < board.getColumns(); c++) {\r\n            const cell = document.createElement('div');\r\n            cell.classList.add('cell');\r\n            cell.setAttribute('id', `cell-${r}-${c}`);\r\n\r\n            cell.textContent = board.getBoard()[r][c];\r\n\r\n            boardDiv.appendChild(cell)\r\n        }\r\n\r\n    }\r\n}\r\n\r\ngame();\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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