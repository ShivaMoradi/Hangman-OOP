import Module from "node:module";
const require = Module.createRequire( import.meta.url );
//import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";
//import ScoresList from "./highScoreList.js"
import slot from "./gallow.js";
import Gallow from "./gallow.js";


export default async function Game () {
  let secretWord = await wordLength()
  Gallow;
  slot;

  //for ( let i = 0; i < theWord.length; i++ ) {
    // Display current state of guessed word or gallow slots
  
  let gussedWord = new playerGussChar()


   // let gussedWord = gussedChar
    //console.log( "Gallow Slots: " + gallow.gallowSlots );
/*
      if ( theWord.includes( char ) ) {
        gussedWord += char
        console.log( "Correct guess! Guessed Word: " + gussedWord );
      } else {

        slot [i] = slot[i] + 1; 
        console.log( "Incorrect guess! Gallow Slots: " + slot[i] );
    }*/
  //}

  //console.log( "Game Over!" );
}