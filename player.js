import SecretWord from "./secretWord.js"
SecretWord
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
          console.log( "Faild: try again!" )
          gallowSlots()
        }
      }
    }
  }
}