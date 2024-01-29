import fs from 'fs';
import { json } from 'express';

export default class Score {
  constructor ( playerName, score) {
    this.playerName = playerName

    this.score = score
    this.ScoresList = this.readScoresListFile();

    
  }
  
  readScoresListFile () {
    try {
      const data = fs.readFileSync( 'Score_list.txt', 'utf8' )
      return JSON.parse( data )
    } catch ( err ) {
      console.log( 'no previous high score-list found' )
      return 
    }
  }
  saveScores () {

    try {
      this.ScoresList.push( { playerName: this.playerName, score: this.score } )
      fs.writeFileSync( 'Score_list.txt', JSON.stringify( this.ScoresList, null, 2 ) )
      
        console.log( 'Score-list saved successfully!' )
    }
    
    catch ( err ) {
      console.error( 'Error saving score list:', err )
    }
  }
  
 /* calculateScore () {
    const playerInstance = new Player()
    const score = playerInstance.gussedChar.length
    const playerName = playerInstance.playerName
    console.log( "Your score is: " + score + ", " + playerName )
    this.ScoresList = this.readScoresListFile();
    this.ScoresList.push( { playerName, score } )
  }*/
}