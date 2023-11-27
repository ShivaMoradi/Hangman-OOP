import Player from "./player.js";
import Question from "./question.js";
import Module from "node:module";
import Scores from "./highScoreList.js";
import SecretWord from "./secretWord.js";
const require = Module.createRequire( import.meta.url );
const prompt = require( 'prompt-sync' )( { sigint: true } );

export default class Game{
  constructor () {
    console.log( "Welcome to the Hangman game! start the Game" )
    this.startGame()
  }
    
  startGame () {
const word = []
  this.question = new Question()
  console.log( "The secret word has " + word.length )
  this.secretWord = new SecretWord( this.word )
  console.log("Secretword created: " + this.word)
  this.player = new Player()
  this.score = new Scores()
}

  }
  



 
