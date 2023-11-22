import Player from "./player.js";
import Gallow from "./gallow.js";
import SecretWord from "./secretWord.js";
import Question from "./question.js";
import Module from "node:module";
const require = Module.createRequire( import.meta.url );
const prompt = require( 'prompt-sync' )( { sigint: true } );
const fs = require( 'fs' );




export default class Game{

  constructor () {
    console.log( "Welcome to the Hangman game! start the gane:" )
    // creat gallow
    let gallow = new Gallow()
     // 10. ask for  word                         bass
    let question = new Question( "Type the secret word, don't show your opponent: " )
    let secretWord = new SecretWord(question.answer)
    console.log( "The secret word has " + secretWord.length )
    let player = new Player()
  // player guss  a charector
    }
  }
  

Player
Gallow
SecretWord
Question

 
