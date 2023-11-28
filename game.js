//import Player from "./player.js";
import Module from "node:module";
//import Scores from "./highScoreList.js";
import wordLength from "./secretWord.js";
const require = Module.createRequire( import.meta.url );
import PromptSync from "prompt-sync"
import promptWord from "./question.js";
const prompt = PromptSync()

export default function startGame () {
  console.log( "Welcome to the Hangman game! start the Game" )
      let word= promptWord()
    console.log( "The secret word is:" + word )

  let secretWord= wordLength()
    console.log( "The secret word has " + secretWord )
    /*new Player()
    new Scores()*/
  }
