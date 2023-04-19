import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import { displayBoard, populateBoards } from "./ui/Gameboard.display";

function game(board_length = 10) {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const boardOne = Gameboard(board_length, board_length);
    const boardTwo = Gameboard(board_length, board_length);
    
    populateBoards(board_length, boardOne, boardTwo);
    displayBoard(boardOne, 'board1', playerOne);
    displayBoard(boardTwo, 'board2', playerTwo);

    console.log('Board 1: ', boardOne.getBoard());
    console.log('Board 2: ', boardTwo.getBoard());
}

game();