
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
    
    }
    
  
 

}