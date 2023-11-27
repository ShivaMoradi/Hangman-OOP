import fs from 'fs';
//create Score list
export default class Scores {
  constructor () {
    this.calculateScore()
    this.ScoresList()
    this.saveScores()
    this.updateScoresList()
  }
  ScoresList () {
    try {
      const data = fs.readFileSync( 'scores-list.txt', 'utf8' )
      return JSON.parse( data )
    } catch ( err ) {
      console.log( 'no previous high score-list found' )
      return [];
    }
  }
  saveScores () {
    try {
      const data = JSON.stringify( this.ScoresList, null, 2 )
      fs.writeFileSync( 'Scores-list.txt', data )
      console.log( 'Score-list saved' )
      console.log( "Player score is ", yourScore )
    } catch ( err ) {
      console.error( 'Something is wrong! Saving failed', err )
    }
  }
  updateScoresList ( playerName, score ) {
    this.ScoresList.push( { name: playerName, score: score } )
    this.ScoresList.sort( ( a, b ) => b.score - a.score )
    this.saveScores()
  }
  calculateScore ( yourScore ) {
    new Player()
    yourScore = this.word[ i ].length
    this.saveScores()
  }

}
