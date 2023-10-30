const whoWon = require('../RPS.js');

describe("whoWon", () => {
    test("should return 'tie' when both players choose the same option", () => {
        const player1Choice = 'rock';
        const player2Choice = 'rock';
        const result = whoWon(player1Choice, player2Choice);
        expect(result).toEqual('tie');
    });
    it("should return 'Invalid choice' when an invalid choice is made", () => {
        const player1Choice = 'rock';
        const player2Choice = 'invalid_choice';
        const result = whoWon(player1Choice, player2Choice);
        expect(result).toEqual('Invalid choice');
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
        let output = whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
        let output = whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });
});
