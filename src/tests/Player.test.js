import Player from "../classes/Player";

test("Enforce name requirement", () => {
    const player = Player('');

    expect(player.getName()).toBe('Player');
});