const fs = require( 'fs' );

export default class HighScoreList {
  constructor () {
    this.highScores = this.highScoresList()
  }
  highScoresList () {
    try {
      const data = fs.readFileSync( 'high_scores.txt', 'utf8' )
      return JSON.parse( data )
    } catch ( err ) {
      console.log( 'no previous high score-list found' )
      return [];
    }
  }
  saveHighScores () {
    try {
      const data = JSON.stringify( this.highScoresList, null, 2 )
      fs.writeFileSync( 'high_scores.txt', data )
      console.log( 'High score-list saved' )
    } catch ( err ) {
      console.error( 'Something is wrong to save', err )
    }
  }
  updateHighScoresList ( playerName, score ) {
    this.highScoresList.push( { name: playerName, score: score } )
    this.highScoresList.sort( ( a, b ) => b.score - a.score )
    this.saveHighScores(); 
  }
}
saveInitialHighScores()


