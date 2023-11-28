import PromptSync from "prompt-sync"
const prompt = PromptSync()

export default function promptWord(){
  
  let word = prompt( "Type the secret word: " )
  return word

}
