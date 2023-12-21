import Module from "node:module";
//import Scores from "./highScoreList.js";
const require = Module.createRequire( import.meta.url );
import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import Player from "./player.js";


export default async function Game () {
  let word = await promptWord()
    let secretWord = wordLength()
  console.log( "The secret word has " + secretWord )

  this.Player = new Player()
  
   //new Scores()
  }
  



  
    
   
  
