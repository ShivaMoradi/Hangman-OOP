import Module from "node:module";
const require = Module.createRequire( import.meta.url );
import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";
//import ScoresList from "./highScoreList.js"
import slot from "./gallow.js";
import Gallow from "./gallow.js";


export default async function Game () {
  let word = await promptWord()
  let secretWord = await wordLength()
  console.log( "The secret word has " + secretWord )
  Gallow;
  slot;

  for ( let i = 0; i < word.length; i++ ) {
    // Display current state of guessed word or gallow slots
    let char = []
     char = new playerGussChar()
    let gussedWord = char
   // console.log( "Guessed Word: " + gussedWord );
    //console.log( "Gallow Slots: " + gallow.gallowSlots );

      if ( word.includes( char ) ) {
        gussedWord += char
        console.log( "Correct guess! Guessed Word: " + gussedWord );
      } else {
        let gallowSlots= new Gallow()
        slot [i] = slot[i] + 1; 
        console.log( "Incorrect guess! Gallow Slots: " + gallowSlots );
    }
  }
  console.log( "Game Over!" );
}








