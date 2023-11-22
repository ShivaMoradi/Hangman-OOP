import Player from "./player.js";
import Gallow from "./gallow.js";
import SecretWord from "./secretWord.js";
import Question from "./question.js";
import Module from "node:module";
import Scores from "./highScoreList.js";
const require = Module.createRequire( import.meta.url );
const prompt = require( 'prompt-sync' )( { sigint: true } );

export default class Game{
  constructor () {
    console.log( "Welcome to the Hangman game! start the gane:" )
    let player = new Player()
    let highScoreList = new Scores()
    let question = new Question()
    let word = prompt( "Type the secret word: " )
    new SecretWord()
    console.log( "The secret word has " + word.length )
    let gallow = new Gallow()

    }
  }
  

Player
Gallow
SecretWord
Question
Scores

 
