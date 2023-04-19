import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import Ship from "./classes/Ship";

function game() {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const SIDE_LENGTH = 10;
    const boardOne = Gameboard(SIDE_LENGTH, SIDE_LENGTH);
    const boardTwo = Gameboard(SIDE_LENGTH, SIDE_LENGTH);
    populateBoards(SIDE_LENGTH, boardOne, boardTwo);

    displayBoard(boardOne, 'board1');
    // displayBoard(boardTwo, 'board2');

    console.log('Board 1: ', boardOne.getBoard());
    console.log('Board 2: ', boardTwo.getBoard());
}

function populateBoards(sideLength, ...boards) {
    for (const board of boards) {
        const shipLengths = [5, 4, 3, 2, 2];
        
        while (shipLengths.length > 0) {
            const length = shipLengths.pop();
            const newShip = Ship(length);

            const x = Math.floor(Math.random() * sideLength);
            const y = Math.floor(Math.random() * sideLength);
            const isVertical = Math.random() < 0.5;

            const placedShip = board.placeShip(newShip, x, y, isVertical, length);
            if (!placedShip) {
                shipLengths.push(length);
            }
        }
    }
}

function displayBoard(board, id) {
    const boardDiv = document.getElementById(id);
    boardDiv.style.display = 'grid';
    boardDiv.style.gridTemplateRows = `repeat(${board.getRows()}, 64px)`;
    boardDiv.style.gridTemplateColumns = `repeat(${board.getRows()}, 64px)`;

    for (let r = 0; r < board.getRows(); r++) {
        for (let c = 0; c < board.getColumns(); c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `cell-${r}-${c}`);

            cell.textContent = board.getBoard()[r][c];

            boardDiv.appendChild(cell)
        }

    }
}

game();