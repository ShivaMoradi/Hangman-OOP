import SecretWord from "./secretWord.js";
import Gallow from "./gallow.js";
import Scores from "./highScoreList.js";
export default class Player{
  constructor () {
    // guss the char
    // if the word include gussed char, (loop ) to guss next char untill word or gallow are complete
    //if the char isn't in word then go to the gallow
    this.playerGussChar()
  }  
  
  playerGussChar ( word, char ) {
    new SecretWord()

  if ( word.includes( char ) ) {
    for ( let i = 0; i < word.length; i++ ) {
      if ( word[ i ] === char ) {
        word[ i ] = char
        console.log( "Congratulation! You gussed a correct Letter! Win!" )
      }
      else {
        new Scores()
        this.wordLength
        new Gallow()
      }
     
      }
  }
  console.log( "play again" )

  }
}

