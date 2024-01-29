import Module from "node:module";
const require = Module.createRequire( import.meta.url );
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";



export default class Game {
  constructor () {
    this.runGame()
  }
  
  async runGame () {
    let secretWord = await wordLength()
    let gussedWord = new playerGussChar()    
    }
    }