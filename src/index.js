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

    let nextTurn = true;
    startGameButton.addEventListener('click', () => {
        /**
         * display ships to choose from
         * highlight current ship
         * clicking on a grid will attempt to place it
         *   - can succeed
         *   - can fail - ask to place again
         */

        populateBoards(board_length, boardOne, boardTwo);
        // ^ replace in future to let players place their own ships
        
        displayBoard(boardOne, 'board1', true);
        displayEnemyBoard(boardTwo, 'enemy1', playerTwo, true);

        startGameButton.style.pointerEvents = 'none';
        player1DoneButton.style.pointerEvents = 'auto';

        window.addEventListener('keydown', e => {
            if (e.code == 'KeyN') {
                nextTurn ?
                    playerOneDone(boardOne, boardTwo, playerOne, player1DoneButton, player2DoneButton)
                    :
                    playerTwoDone(boardTwo, boardOne, playerTwo, player2DoneButton, player1DoneButton);
                nextTurn = !nextTurn;
            }
        });
    });

    player1DoneButton.addEventListener('click', () => {
        playerOneDone(boardOne, boardTwo, playerOne, player1DoneButton, player2DoneButton);
    });
    
    player2DoneButton.addEventListener('click', () => {
        playerTwoDone(boardTwo, boardOne, playerTwo, player2DoneButton, player1DoneButton);
    });
}

function playerOneDone(board, enemyBoard, player, button, enemyButton) {
    toggleDisplayNames();

    document.querySelector('#board1').style.display = 'none';
    document.querySelector('#enemy1').style.display = 'none';
    document.querySelector('#board2').style.display = 'grid';
    document.querySelector('#enemy2').style.display = 'grid';

    displayBoard(enemyBoard, 'board2', true);
    displayEnemyBoard(board, 'enemy2', player, true);

    button.style.pointerEvents = 'none';
    enemyButton.style.pointerEvents = 'auto';
}

function playerTwoDone(board, enemyBoard, player, button, enemyButton) {
    toggleDisplayNames();

    document.querySelector('#board2').style.display = 'none';
    document.querySelector('#enemy2').style.display = 'none';
    document.querySelector('#board1').style.display = 'grid';
    document.querySelector('#enemy1').style.display = 'grid';

    displayBoard(enemyBoard, 'board1', true);
    displayEnemyBoard(board, 'enemy1', player, true);

    button.style.pointerEvents = 'none';
    enemyButton.style.pointerEvents = 'auto';
}

function toggleDisplayNames() {
    const player1Name = document.getElementById('board1').previousElementSibling.previousElementSibling.previousElementSibling;
    const player2Name = document.getElementById('board2').previousElementSibling.previousElementSibling.previousElementSibling;

    player1Name.classList.toggle('current-turn');
    player2Name.classList.toggle('current-turn');
}

setup();

/**
 * TODO:
 * let players place their own ships
 * clean up functions - use localStorage?
 * add game over announcement
 * allow skip turns?
 * show individual boats
 */