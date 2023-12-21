//import SecretWord from "./secretWord.js";
import promptWord from "./question.js";
import Gallow from "./gallow.js";
import Scores from "./highScoreList.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let word = []

export default class Player {
  constructor ( playerName, score ) {
    this.playerName = playerName
    this.score = score

    // if the word include gussed char, (loop ) to guss next char untill word or gallow are complete
    //if the char isn't in word then go to the gallow
  }
  playerGussChar () {
    let char = prompt( "Guss a char: " )
    console.log( "you gussed: " + char )
    if ( promptWord.includes( char ) ) {
      for ( let i = 0; i < word.length; i++ ) {
        this.word[ i ] = char
      }
      console.log( "Congratulation! You gussed a correct Letters! Win!" + word )

    }
    else {
      for ( let i = 0; i < this.word.length; i++ ) {
        this.gallow = new Gallow()
      }

    }
    let score = new Scores()
    console.log( "play again" )
    this.game = new Game()
  }
 

}