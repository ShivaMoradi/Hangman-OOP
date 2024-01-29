import Module from "node:module";
const require = Module.createRequire( import.meta.url );
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";
import PromptSync from "prompt-sync";
import promptWord from "./question.js";
const prompt = PromptSync();



export default class Game {
  constructor () {
    this.runGame()
  }
  
  async runGame () {
    let play = "y";

    while ( play.toLowerCase() === "y" ) {
      let secretWord = await wordLength()
      let gussedWord = new playerGussChar()
      let play = prompt( "Do you want to play again?y/n :  " )
      if ( play.toLowerCase() == "y" ) {
        console.log( "Welcome back! " )
        this.gussedWord
      }

      /*if ( play.toLowerCase() == "y" ) {
        while ( play.toLowerCase() === "y" )
          console.log( "Welcome back! " )
  
        let create_word = promptWord()
        let newWord_space = await wordLength()
        let new_game = new playerGussChar() 
      }
      else {
        console.log( "Exit!" )
  
      }   */
    }
  }
}