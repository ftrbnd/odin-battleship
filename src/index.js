import Gameboard from "./classes/Gameboard";
import Player from "./classes/Player";
import Ship from "./classes/Ship";

function game() {
    const playerOne = Player('P1');
    const playerTwo = Player('P2');

    const SIDE_LENGTH = 10;
    const boardOne = Gameboard(SIDE_LENGTH, SIDE_LENGTH);
    const boardTwo = Gameboard(SIDE_LENGTH, SIDE_LENGTH);

    const shipLengths = [5, 4, 3, 2, 2];
    while (shipLengths.length > 0) {
        const length = shipLengths.pop();
        const newShip = Ship(length);

        const x = Math.floor(Math.random() * SIDE_LENGTH);
        const y = Math.floor(Math.random() * SIDE_LENGTH);
        const isVertical = Math.random() < 0.5;

        const placedShip = boardOne.placeShip(newShip, x, y, isVertical, length);
        if (!placedShip) {
            shipLengths.push(length);
        }
    }

    console.log('Final board: ', boardOne.getBoard());
}

game();