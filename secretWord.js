import PromptSync from "prompt-sync"
import promptWord from "./question.js";
const prompt = PromptSync()
let word = promptWord()
export default function wordLength() {
  //word length to be able to create '-' /space to show how long is the word for player gusses
    if ( word && word.length > 0 ) {
      let secretWord = new Array( word.length ).fill( "-" )
      return secretWord
    }
  }
