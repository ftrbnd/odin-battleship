import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import { displayBoard, populateBoards } from "./ui/Gameboard.display";

function game(p1, p2, board_length = 10) {
    const boardOne = Gameboard(board_length, board_length);
    populateBoards(board_length, boardOne);
    displayBoard(boardOne, 'board1', p1);
    
    const boardTwo = Gameboard(board_length, board_length);
    populateBoards(board_length, boardTwo);
    displayBoard(boardTwo, 'board2', p2);
}

function setup() {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');
    
    const startGameButton = document.querySelector('button#start');
    startGameButton.addEventListener('click', () => {
        game(playerOne, playerTwo);
        startGameButton.style.pointerEvents = 'none';
    });
}

setup();