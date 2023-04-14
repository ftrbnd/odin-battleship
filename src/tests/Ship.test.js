import Ship from "../classes/Ship";

test("Test getLength() on a ship of length 5", () => {
    const ship = Ship(5);

    expect(ship.getLength()).toBe(5);
});

test("getLength() on a ship with given length less than 1 returns 1", () => {
    const ship = Ship(-5);

    expect(ship.getLength()).toBe(1);
});

test("hit(1)", () => {
    const ship = Ship(5);
    ship.hit(1);

    expect(ship.getHits()).toBe(1);
});

test("hit(-4)", () => {
    const ship = Ship(5);
    ship.hit(-4);

    expect(ship.getHits()).toBe(0);
});

test("isSunk() on a sunken ship", () => {
    const ship = Ship(3);
    ship.hit(3);

    expect(ship.isSunk()).toBeTruthy();
});

test("isSunk() on a not sunken ship", () => {
    const ship = Ship(3);
    ship.hit(1);

    expect(ship.isSunk()).toBeFalsy();
});