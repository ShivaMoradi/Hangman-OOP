import fs from 'fs';
//create Score list
export default class Score {
  constructor () {
    this.ScoresList()
    this.saveScores()
    this.updateScoresList()
  }
  
  readScoresListFile () {
    try {
      const data = fs.readFileSync( 'Score_list.csv', 'utf8' )
      return JSON.parse( data )
    } catch ( err ) {
      console.log( 'no previous high score-list found' )
      return  [];
    }
  }
  saveScores () {
    try {
      const data = JSON.stringify( this.ScoresList, null, 2 )
      fs.writeFileSync( 'Score_list.csv', data )
      console.log( 'Score-list saved' )
      console.log( "Player score is ", yourScore )
    } catch ( err ) {
      console.error( 'Something is wrong! Saving failed', err )
    }
  }
  updateScoresList ( playerName, score ) {
    this.ScoresList.push( { playerName, score } )
    this.ScoresList.sort( ( a, b ) => b.score - a.score )
    this.saveScores( ScoresList )
  }
   
  

}
