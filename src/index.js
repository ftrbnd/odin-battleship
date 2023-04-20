import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import { displayBoard, displayEmptyBoards, displayEnemyBoard, populateBoards } from "./ui/Gameboard.display";

function setup(board_length = 10) {
    const playerOne = Player('P1'), playerTwo = Player('P2');
    const boardOne = Gameboard(board_length), boardTwo = Gameboard(board_length);
    
    const startGameButton = document.querySelector('button#start');
    const player1DoneButton = document.querySelector('.playerone button');
    const player2DoneButton = document.querySelector('.playertwo button');
    
    player1DoneButton.style.pointerEvents = 'none';
    player2DoneButton.style.pointerEvents = 'none';

    displayEmptyBoards(boardOne, boardTwo, 'board1', playerOne);
    displayEmptyBoards(boardTwo, boardOne, 'board2', playerTwo);

    startGameButton.addEventListener('click', () => {
        populateBoards(board_length, boardOne, boardTwo);
        // ^ replace in future to let players place their own ships
        
        displayBoard(boardOne, 'board1', true);
        displayEnemyBoard(boardTwo, 'enemy1', playerTwo, true);

        startGameButton.style.pointerEvents = 'none';
        player1DoneButton.style.pointerEvents = 'auto';
    });

    player1DoneButton.addEventListener('click', () => {
        document.querySelector('#board1').style.display = 'none';
        document.querySelector('#enemy1').style.display = 'none';
        document.querySelector('#board2').style.display = 'grid';
        document.querySelector('#enemy2').style.display = 'grid';

        displayBoard(boardTwo, 'board2', true);
        displayEnemyBoard(boardOne, 'enemy2', playerOne, true);

        player1DoneButton.style.pointerEvents = 'none';
        player2DoneButton.style.pointerEvents = 'auto';
    });
    
    player2DoneButton.addEventListener('click', () => {
        document.querySelector('#board2').style.display = 'none';
        document.querySelector('#enemy2').style.display = 'none';

        document.querySelector('#board1').style.display = 'grid';
        document.querySelector('#enemy1').style.display = 'grid';

        displayBoard(boardOne, 'board1', true);
        displayEnemyBoard(boardTwo, 'enemy1', playerTwo, true);

        player2DoneButton.style.pointerEvents = 'none';
        player1DoneButton.style.pointerEvents = 'auto';
    });
}

setup();

/**
 * TODO:
 * only let players click on one cell
 */