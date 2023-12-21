import Module from "node:module";
//import Scores from "./highScoreList.js";
const require = Module.createRequire( import.meta.url );
import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";
//import ScoresList from "./highScoreList.js"
import gallowSlots from "./gallow.js";


export default async function Game () {
  let word = await promptWord()
  let secretWord = await wordLength()
  console.log( "The secret word has " + secretWord )

  let char = new playerGussChar()
  if ( word.includes( char ) ) {

    for ( let i = 0; i < word.length; i++ ) {
      let gussedWord = char
      return gussedWord;
    }
    console.log( "Congratulation! You gussed a correct Letters! Win!" + gussedWord)

  }
  else {
    let slot = new gallowSlots()
    for ( let i = 0; i <word.length; i++ ) {
      return slot;

    }
    console.log( "Game Over!"  + gallow.slot())


  }

  


  //new Scores()
}







