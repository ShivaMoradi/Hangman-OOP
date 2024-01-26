import fs from 'fs';
import calculateScore from "./player.js";
//Score_list.header = ["playerName", "score"]
let ScoresList = [ "", ]
//let Score_list = ids.join( "," );

export default class Score {
  constructor () {
    let myScore = new calculateScore()
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
      const data = JSON.stringify( this.ScoresList, null, 2 );
      fs.writeFileSync( 'Score_list.csv', data );
      console.log( 'Score-list saved successfully!' );
    } catch ( err ) {
      console.error( 'Error saving Score-list:', err.message );
      console.error( 'Error code:', err.code );
    }
  }

  updateScoresList ( playerName, score ) {
    this.ScoresList.push( { playerName, score } )
    this.ScoresList.sort( ( a, b ) => b.score - a.score )
    this.saveScores( ScoresList )
  }
   
  

}
