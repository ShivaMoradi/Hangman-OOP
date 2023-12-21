import SecretWord from "./secretWord.js";
import promptWord from "./question.js";
import Gallow from "./gallow.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default class Player {
  constructor ( playerName, score ) {
    this.playerName = playerName
    this.score = score
this.playerGussChar()
    // if the word include gussed char, (loop ) to guss next char untill word or gallow are complete
    //if the char isn't in word then go to the gallow
  }
  playerGussChar () {
    Gallow;

    let char = prompt( "Guss a char: " )
    console.log( "you gussed: " + char )
    if ( promptWord.includes( char ) ) {
      for ( let i = 0; i < SecretWord.length; i++ ) {
        gussedWord[ i ] = char
        return gussedWord[i];
      }
      console.log( "Congratulation! You gussed a correct Letters! Win!" + gussedWord[i] )

    }
    else {
      for ( let i = 0; i < this.SecretWord.length; i++ ) {
        console.log( this.gallow.slot() )      
       
      }
      console.log( "Game Over!")


    }
  
  }
 

}