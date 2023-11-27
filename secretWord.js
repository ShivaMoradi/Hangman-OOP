import Question from "./question.js"
new Question()
export default class SecretWord {
  constructor () {
    this.wordLength()
  }
  //word length to be able to create '-' /space to show how long is the word for player gusses
  wordLength ( word ) {
    word = []
    if ( word && word.length > 0 ) {
      this.word = new Array( word.length ).fill( "-" )
      return this.word
    }
  }
}