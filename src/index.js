import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import Ship from "./classes/Ship";

function game() {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const ROWS = 8, COLS = 8;
    const boardOne = Gameboard(ROWS, COLS);
    const boardTwo = Gameboard(ROWS, COLS);

    // TODO: Fix placeShip() so that a boat doesn't get placed onto an
    // already populated coordinate
}

game();