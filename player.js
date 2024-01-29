import Gallow from "./gallow.js"
import Score from "./highScoreList.js"
import promptWord from "./question.js"
import PromptSync from "prompt-sync"
const prompt = PromptSync()

export default class Player {
  constructor () {
    this.gussedChar = []
    this.playerName = ''
    this.playerGussChar() 
  }

  async playerGussChar () {
    const theWord = promptWord()
    const gallow = new Gallow()
    this.playerName = prompt( "Write your name as a player or exit to stop playing: " )
    if ( this.playerName.toLowerCase() === 'exit' ) {
      console.log( "Game exited. " )
      return 
    }else {
      console.log( "Player name is: " + this.playerName )
    }
    for ( let i = 0; i < theWord.length; i++ ) {
      const char = prompt( "Guess a char:" )
      
      if ( char.length !== 1 ) {
        console.log( "Please enter a single character." )
      } else {
        console.log( "You guessed: " + char )
        
      }

      if ( theWord.includes( char ) ) {
        this.gussedChar.push( char )
        //let positions = getCharPositions(char )
        //this.applyGussedChars( char, positions )
        

      } else {
        console.log( "Incorrect guess! Gallow Slots: " + gallow.gallowSlots() )
      }

      if ( this.gussedChar.length === theWord.length ) {
        console.log( "Congratulations! You guessed the word: " + this.gussedChar.join( "" ) )
        const score = this.gussedChar.length
        const playerScore = new Score( this.playerName, score )
        this.calculateScore()
        playerScore.saveScores()
      }
    }
    
  }
 /* getCharPositions ( char ) {
    let positions = []
    for ( let i = 0; i < this.gussedChar.length; i++ ) {
      if ( this.gussedChar[ i ] == char ) {
        positions.push( i )
      }
    }
    return positions
  }
  applyGussedChars ( char, positions ) {
    for ( let index of positions ) {
      this.gussedChar[ index ] = char
    }
  }*/
  calculateScore () {
    const score = this.gussedChar.length
    const playerName = this.playerName
    console.log( "Your score is: " + score + ", " + playerName )
  }
  }
  