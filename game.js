import Module from "node:module";
const require = Module.createRequire( import.meta.url );
//import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import Player from "./player.js";



export default async function Game () {
  let secretWord = await wordLength()
  //let gussedWord = new playerGussChar()
  let player = new Player()
  await player.playerGussChar()


}