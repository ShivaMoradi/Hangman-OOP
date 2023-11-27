import SecretWord from "./secretWord.js";
import Gallow from "./gallow.js";
import Scores from "./highScoreList.js";
import Game from "./game.js";
import Question from "./question.js";
export default class Player{
  constructor ( playerName, score ) {
    this.playerName = playerName
    this.score = score
    // guss the char
    // if the word include gussed char, (loop ) to guss next char untill word or gallow are complete
    //if the char isn't in word then go to the gallow
    this.playerGussChar()
  }  
  playerGussChar () {
    new SecretWord ()
    let char = new Question().word
    console.log("you gussed: " + char)
    if ( answer.includes( char ) ) {
      for ( let i = 0; i < wordLength; i++ ) {
        this.word[ i ] = char
          console.log( "Congratulation! You gussed a correct Letters! Win!" )
      }
    }
    else {
      for (wordLength of word){
        let gallow = new Gallow()
      }
       
      }
   let score = new Scores()
    console.log( "play again" )
    this.game = new Game()
  }
    }
   


