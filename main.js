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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = (rows = 8, cols = 8) => {\n    rows = rows <= 8 ? 8 : rows; // enforce minimum board size\n    cols = cols <= 8 ? 8 : cols;\n\n    let board = [];\n    for (let r = 0; r < rows; r++) {\n        board.push([]);\n        for (let c = 0; c < cols; c++) {\n            board[r].push('_');\n        }\n    }\n\n    const getRows = () => rows;\n    const getColumns = () => cols;\n    const getBoard = () => board;\n\n    const shipCoords = [];\n\n    const placeShip = (ship, x, y, isVertical, marker) => {\n        const prevBoard = JSON.parse(JSON.stringify(board));\n        const coords = [];\n\n        if (isVertical) {\n            for (let i = 0; i < ship.getLength(); i++) {\n                if (x < 0 || x >= rows || board[x][y] != '_') {\n                    board = prevBoard;\n                    return false;\n                }\n\n                coords.push([x, y]);\n                board[x++][y] = marker;\n            }\n        } else {\n            for (let i = 0; i < ship.getLength(); i++) {\n                if (y < 0 || y >= cols || board[x][y] != '_') {\n                    board = prevBoard;\n                    return false;\n                }\n                \n                coords.push([x, y]);\n                board[x][y++] = marker;\n            }\n        }\n\n        shipCoords.push([ship, coords]);\n        return true;\n    };\n\n    const receiveAttack = (x, y) => {\n        if (board[x][y] == 'S') { // hit\n            board[x][y] = 'H';\n            \n            for (const shipAndCoords of shipCoords) {\n                const ship = shipAndCoords[0], coords = shipAndCoords[1];\n\n                for (const coord of coords)\n                    if (x == coord[0] && y == coord[1])\n                        ship.hit(1);\n            }\n        } else { // miss\n            board[x][y] = 'M';\n        }\n    };\n\n    const allShipsSunk = () => {\n        for (const [ship] of shipCoords) {\n            if (!ship.isSunk()) return false;\n        }\n        return true;\n    }\n\n    return {\n        getRows,\n        getColumns,\n        getBoard,\n        placeShip,\n        receiveAttack,\n        allShipsSunk\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Gameboard.js?");

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (name) => {\n    name = name.trim() || 'Player';\n\n    const getName = () => name;\n\n    const setName = (n) => {\n        name = n.trim() || 'Player';\n    }\n\n    return {\n        getName,\n        setName\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Player.js?");

/***/ }),

/***/ "./src/classes/Ship.js":
/*!*****************************!*\
  !*** ./src/classes/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, hits = 0) => {\n    length = length <= 0 ? 1 : length;\n    hits = hits <= 0 ? 0 : hits;\n\n    const getLength = () => length;\n    const getHits = () => hits;\n\n    const hit = (amount) => {\n        hits += amount <= 0 ? 0 : amount;\n    };\n\n    const isSunk = () => {\n        return hits >= length;\n    };\n\n    return {\n        getLength,\n        getHits,\n        hit,\n        isSunk\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://odin-battleship/./src/classes/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Gameboard */ \"./src/classes/Gameboard.js\");\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player */ \"./src/classes/Player.js\");\n/* harmony import */ var _classes_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Ship */ \"./src/classes/Ship.js\");\n\n\n\n\nfunction game() {\n    const playerOne = (0,_classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('P1');\n    const playerTwo = (0,_classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('P2');\n\n    const SIDE_LENGTH = 10;\n    const boardOne = (0,_classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SIDE_LENGTH, SIDE_LENGTH);\n    const boardTwo = (0,_classes_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SIDE_LENGTH, SIDE_LENGTH);\n    populateBoards(SIDE_LENGTH, boardOne, boardTwo);\n\n    displayBoard(boardOne, 'board1');\n    // displayBoard(boardTwo, 'board2');\n\n    console.log('Board 1: ', boardOne.getBoard());\n    console.log('Board 2: ', boardTwo.getBoard());\n}\n\nfunction populateBoards(sideLength, ...boards) {\n    for (const board of boards) {\n        const shipLengths = [5, 4, 3, 3, 2];\n        \n        while (shipLengths.length > 0) {\n            const length = shipLengths.pop();\n            const newShip = (0,_classes_Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(length);\n\n            const x = Math.floor(Math.random() * sideLength);\n            const y = Math.floor(Math.random() * sideLength);\n            const isVertical = Math.random() < 0.5;\n\n            const placedShip = board.placeShip(newShip, x, y, isVertical, length);\n            if (!placedShip) {\n                shipLengths.push(length);\n            }\n        }\n    }\n}\n\nfunction displayBoard(board, id) {\n    const boardDiv = document.getElementById(id);\n    boardDiv.style.display = 'grid';\n    boardDiv.style.gridTemplateRows = `repeat(${board.getRows()}, 64px)`;\n    boardDiv.style.gridTemplateColumns = `repeat(${board.getRows()}, 64px)`;\n\n    for (let r = 0; r < board.getRows(); r++) {\n        for (let c = 0; c < board.getColumns(); c++) {\n            const cell = document.createElement('div');\n            cell.classList.add('cell');\n            cell.setAttribute('id', `cell-${r}-${c}`);\n\n            cell.textContent = board.getBoard()[r][c];\n\n            boardDiv.appendChild(cell)\n        }\n\n    }\n}\n\ngame();\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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