class Game {
  constructor(){
    this.playerOneScore = 0
    this.playerTwoScore = 0
    this.scores = ["0", "15", "30", "40"]

  }
  pointWinner(winner) {
    winner === 1 ? this.playerOneScore++ : this.playerTwoScore++
  }
  getScores() {
    return `${this.scores[this.playerOneScore]} : ${this.scores[this.playerTwoScore]}`
  }
}


module.exports = Game
