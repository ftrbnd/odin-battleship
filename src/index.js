import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import { displayBoard, populateBoards } from "./ui/Gameboard.display";

function game() {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const SIDE_LENGTH = 10;
    const boardOne = Gameboard(SIDE_LENGTH, SIDE_LENGTH);
    const boardTwo = Gameboard(SIDE_LENGTH, SIDE_LENGTH);
    populateBoards(SIDE_LENGTH, boardOne, boardTwo);

    displayBoard(boardOne, 'board1');
    displayBoard(boardTwo, 'board2');

    console.log('Board 1: ', boardOne.getBoard());
    console.log('Board 2: ', boardTwo.getBoard());
}

game();