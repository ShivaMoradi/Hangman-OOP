import Gallow from "./gallow.js"
import promptWord from "./question.js"
import PromptSync from "prompt-sync"
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
    this.playerName = prompt( "Write your name as a player: " )
    console.log( "Player name is: " + this.playerName )
    const theWord = promptWord()
    const gallow = new Gallow()

    for ( let i = 0; i < theWord.length; i++ ) {
      const char = prompt( "Guess a char: " )

      if ( char.length !== 1 ) {
        console.log( "Please enter a single character." )
      } else {
        console.log( "You guessed: " + char )
      }

      if ( theWord.includes( char ) ) {
        this.gussedChar.push( char )
      } else {
          console.log( "Incorrect guess! Gallow Slots: " + gallow.gallowSlots() )
        
      }

      if ( this.gussedChar.length === theWord.length ) {
        console.log( "Congratulations! You guessed the word: " + this.gussedChar.join( "" ) )
      }
    }
  }
  calculateScore () {
   const score = this.gussedChar.length
    console.log( "Your score is: " + score + ", " + this.playerName )
  }
 
  }

