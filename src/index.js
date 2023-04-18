import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import Ship from "./classes/Ship";

function game() {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const SIDE_LENGTH = 8;
    const boardOne = Gameboard(SIDE_LENGTH, SIDE_LENGTH);
    const boardTwo = Gameboard(SIDE_LENGTH, SIDE_LENGTH);

    for (const length of [5, 4, 3, 3, 2]) {
        const newShip = Ship(length);

        const x = Math.floor(Math.random() * SIDE_LENGTH);
        const y = Math.floor(Math.random() * SIDE_LENGTH);
        const isVertical = Math.random() < 0.5;

        console.log(`length: ${length}, coords: [${x}, ${y}], ${isVertical ? 'vertically' : 'horizontally'}`);
        console.log(boardOne.placeShip(newShip, x, y, isVertical));
        // TODO: Fix placeShip() so that a boat doesn't get placed onto an
        // already-populated coordinate
        // ALSO: some coordinates aren't being placed?
    }
    console.log(boardOne.board);
}

game();