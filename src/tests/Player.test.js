import Player from "../classes/Player";

test("Enforce name requirement", () => {
    const player = Player('');

    expect(player.getName()).toBe('Player');
});

test("Setting player name", () => {
    const player = Player('P1');
    player.setName('CustomName');

    expect(player.getName()).toBe('CustomName');
});