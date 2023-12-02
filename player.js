import SecretWord from "./secretWord.js";
import Gallow from "./gallow.js";
import Scores from "./highScoreList.js";
import Game from "./game.js";
import Question from "./question.js";

let word =[]
export default class Player {
  constructor ( playerName, score ) {
    this.playerName = playerName
    this.score = score
    // guss the char
    // if the word include gussed char, (loop ) to guss next char untill word or gallow are complete
    //if the char isn't in word then go to the gallow
    this.playerGussChar()
    new Question()
  }
  playerGussChar () {
    this.gusschar()
    console.log( "you gussed: " + char )
    if ( word.question.includes( char ) ) {
      for ( let i = 0; i < wordLength; i++ ) {
        word[ i ] = char
        console.log( "Congratulation! You gussed a correct Letters! Win!" )
      }
    }
    else {
      new SecretWord()
      for ( wordLength of word.secretWord ) {
        let gallow = new Gallow()
      }
       
    }
    let score = new Scores()
    console.log( "play again" )
    this.game = new Game()
  }
  gusschar () {
    this.promptWord.toUpperCase
  }
  
  promptWord () {
    let char = prompt( "Guss a char: " )
  }
}