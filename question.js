import PromptSync from "prompt-sync";
const prompt = PromptSync();

let word = null; // Store the word once prompted
console.log( "Welcome to the Hangman game! start the Game" )

export default function promptWord () {

  if ( word !== null ) {
    return word; // Return the stored word if already prompted
  }

  word = prompt( "Enter a word: " )
  let theWord = []
  theWord = word
  return theWord
}
