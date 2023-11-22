import SecretWord from "./secretWord.js";
import HighScoreList from "./highScoreList.js";
SecretWord
HighScoreList
export default class Player{

  // guss the char
  // if the word include gussed char, (loop ) to guss next char untill word or gallow are complete
  //if the char isn't in word then go to the gallow
  
  playerGussChar ( SecretWordInstance, char ) {
    if ( SecretWordInstance.word.includes( char ) ) {
      for ( let i = 0; i < SecretWordInstance.word.length; i++ ) {
        if ( SecretWordInstance.word[ i ] === char ) {
          SecretWordInstance.word[ i ] = char
          console.log( "Congratulation! You gussed a correct Letter! Win!" )
        }
      else {
//create highScore list
const highScoresList= [
  { name: 'P1', score: 1000 },
  { name: 'P2', score: 800 },
  { name: 'P3', score: 600 },
  {name: 'P4' , score: 200}	
]
          gallowSlots()
        }
      }
    }
  }
}
