import Module from "node:module";
const require = Module.createRequire( import.meta.url );
//import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";
import Score from "./highScoreList.js";



export default class Game {
  constructor () {
    this.runGame()
  }
  
  async runGame () {
    let secretWord = await wordLength()
    let gussedWord = new playerGussChar()
    
    //let save_list = new saveScores()


    
    }

    }

