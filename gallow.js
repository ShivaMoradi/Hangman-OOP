export default class Gallow {

  // create a step by step gallow for the Hangman game
  //if the char isn't in word then put a part of gallow (untill) gallow are complete

  slot = [
    `

    |
    |
    |
    |
    |
    |
    `,
    `
    _________
    |         
    |         
    |        
    |        
    |
    |
    `,
    `
    _________
    |         |
    |         
    |        
    |       
    |
    |
    `,
    `
    _________
    |         |
    |         0
    |        
    |        
    |
    |
    `,
    `
    _________
    |         |
    |         0
    |         |
    |        
    |
    |
    `,
    `
    _________
    |         |
    |         0
    |        /|
    |         
    |
    |
    `,
    `
    _________
    |         |
    |         0
    |        /|\\
    |        
    |
    |
    `,
    `
    _________
    |         |
    |         0
    |        /|\\
    |        / 
    |
    |
    `,
    `
    _________
    |         |
    |         0
    |        /|\\
    |        / \\
    |
    |
    `
  ]
  gallowSlots () {
    return this.slot.shift()
  }

  
}

 

