import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import { displayBoard, populateBoards } from "./ui/Gameboard.display";

function setup(board_length = 10) {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const boardOne = Gameboard(board_length, board_length);
    const boardTwo = Gameboard(board_length, board_length);
    
    const startGameButton = document.querySelector('button#start');
    startGameButton.addEventListener('click', () => {
        populateBoards(board_length, boardOne, boardTwo);
        displayBoard(boardOne, 'board1', playerOne);

        startGameButton.style.pointerEvents = 'none';
        player1DoneButton.style.pointerEvents = 'auto';
    });

    const player1DoneButton = document.querySelector('.playerone button');
    player1DoneButton.style.pointerEvents = 'none';

    player1DoneButton.addEventListener('click', () => {
        document.querySelector('#board1').style.display = 'none';
        document.querySelector('#board2').style.display = 'grid';

        displayBoard(boardTwo, 'board2', playerTwo);
        player1DoneButton.style.pointerEvents = 'none';
        player2DoneButton.style.pointerEvents = 'auto';
    });

    const player2DoneButton = document.querySelector('.playertwo button');
    player2DoneButton.style.pointerEvents = 'none';
    
    player2DoneButton.addEventListener('click', () => {
        document.querySelector('#board2').style.display = 'none';
        document.querySelector('#board1').style.display = 'grid';

        displayBoard(boardOne, 'board1', playerOne);
        player2DoneButton.style.pointerEvents = 'none';
        player1DoneButton.style.pointerEvents = 'auto';
    });
}

setup();