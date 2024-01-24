import Module from "node:module";
const require = Module.createRequire( import.meta.url );
//import promptWord from "./question.js";
import wordLength from "./secretWord.js";
import playerGussChar from "./player.js";
//import ScoresList from "./highScoreList.js"
import slot from "./gallow.js";
import Gallow from "./gallow.js";


export default async function Game () {
  let secretWord = await wordLength()
  Gallow;
  slot;
  let gussedWord = new playerGussChar()

}