import promptWord from "./question.js";

let word = promptWord()
export default async function wordLength() {
  //word length to be able to create '-' /space to show how long is the word for player gusses
    if ( word && word.length > 0 ) {
      let secretWord = new Array( word.length ).fill( "-" )
      console.log( "The secret word has " + secretWord )
  }
  
}

