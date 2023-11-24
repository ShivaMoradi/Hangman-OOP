import Question from "./question.js"
new Question()
export default class SecretWord {
  constructor ( word ) {
      word =[]
    if ( word && word.length > 0 ) {
      this.word = new Array( word.length ).fill( "-" )
      return this.word.length
    } 
   
  }
}
