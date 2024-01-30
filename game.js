import Module from "node:module";
const require = Module.createRequire( import.meta.url );
import playerGussChar from "./player.js";
import PromptSync from "prompt-sync";
import wordLength from "./secretWord.js";

const prompt = PromptSync();



export default class Game {
  constructor () {
    this.runGame()
  }
  
  async runGame () {

    let secretWord = await wordLength()
    let gussedWord = new playerGussChar()
    
     
    }
  }
