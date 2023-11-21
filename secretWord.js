import Question from "./question.js"


Question

export default class SecretWord {
  constructor ( word ) {
    if ( word && word.length > 0 ) {
      this.word = new Array( word.length ).fill( "-" );
    } else {
      throw new Error( "Inget ord angivet eller ogiltigt ord." );
    }
  }

  get length () {
    return this.word.length;
  }
}