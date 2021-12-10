// Each player can have either of these points in one game 0 15 30 40

// If you have 40 and you win the ball you win the game, however there are special rules.

// If both have 40 the players are deuce.

// a. If the game is in deuce, the winner of a ball will have advantage and game ball.
// b. If the player with advantage wins the ball they win the game
// c. If the player without advantage wins they are back at deuce.
const Game = require('./index')

test("players start on 0", () => {
  const game = new Game()
  expect(game.getScores()).toBe("0 : 0")

})

describe("players scores increase as expected", () => {
  let game
  beforeEach(() => {
    game = new Game()
  })

  test("both on 0, playerOne wins the point, score should be 15 0", () => {
    game.pointWinner(1)
    expect(game.getScores()).toBe("15 : 0")
  })
  test("both on 0, playerTwo wins the point, score should be 0 15", () => {
    game.pointWinner(2)
    expect(game.getScores()).toBe("0 : 15")
  })
  test("both on 15, playerOne wins the point, score should be 30 15", () => {
    game.playerOneScore = 1
    game.playerTwoScore = 1
    game.pointWinner(1)

    expect(game.getScores()).toBe("30 : 15")
  })

 
})