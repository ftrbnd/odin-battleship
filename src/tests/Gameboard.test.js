import Gameboard from "../classes/Gameboard";
import Ship from "../classes/Ship";

test("Minimum board size enforcement", () => {
    const board = Gameboard(-2, 5);

    expect(board.getRows()).toBe(8);
    expect(board.getColumns()).toBe(8);
});

test("Place ship on board of size 1", () => {
    const board = Gameboard();
    const ship = Ship(1);

    board.placeShip(ship, 3, 4, true);
    expect(board.allShipsSunk()).toBeFalsy();
});

test("Place ship on board vertically", () => {
    const board = Gameboard();
    const ship = Ship(4);

    board.placeShip(ship, 3, 4, true);
    expect(board.allShipsSunk()).toBeFalsy();
});

test("Place ship on board horizontally", () => {
    const board = Gameboard();
    const ship = Ship(3);

    board.placeShip(ship, 3, 4, false);
    expect(board.allShipsSunk()).toBeFalsy();
});

test("Place ship on board out of range", () => {
    const board = Gameboard();
    const ship = Ship(10);

    expect(board.placeShip(ship, 3, 4, true)).toMatch(/Cannot place ship/);
});

test("Place ship on board and cause sink", () => {
    const board = Gameboard();
    const ship = Ship(2);

    board.placeShip(ship, 3, 4, true);
    board.receiveAttack(3, 4);
    board.receiveAttack(4, 4);
    expect(board.allShipsSunk()).toBeTruthy();
});