import Gallow from "./gallow.js"
import promptWord from "./question.js"
import PromptSync from "prompt-sync"
import Score from "./highScoreList.js"
const prompt = PromptSync()

//let ScoresList = [ "", "" ]

export default class Player {
  constructor () {
    this.gussedChar = []
    this.playerName = ''
    this.playerGussChar()
    this.calculateScore()
  }

  async playerGussChar () {
    const theWord = promptWord()
    const gallow = new Gallow()
    this.playerName = prompt( "Write your name as a player or exit to stop playing: " );
    if ( this.playerName.toLowerCase() === 'exit' ) {
      console.log( "Game exited. " )
      return 
    }else {
      console.log( "Player name is: " + this.playerName );
    }
    for ( let i = 0; i < theWord.length; i++ ) {
      const char = prompt( "Guess a char:" );
      
      if ( char.length !== 1 ) {
        console.log( "Please enter a single character." );
      } else {
        console.log( "You guessed: " + char );
      }

      if ( theWord.includes( char ) ) {
        this.gussedChar.push( char );
      } else {
        console.log( "Incorrect guess! Gallow Slots: " + gallow.gallowSlots() );
      }

      if ( this.gussedChar.length === theWord.length ) {
        console.log( "Congratulations! You guessed the word: " + this.gussedChar.join( "" ) );
        return
      }
    }
  }

  calculateScore () {
    const score = this.gussedChar.length
    console.log( "Your score is: " + score + ", " + this.playerName )
    let allScore = new Score()
  }
  }
  