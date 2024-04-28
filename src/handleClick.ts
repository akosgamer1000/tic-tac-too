

import {player} from "./playerId"
import { isWin } from "./winning"


var gameOver : boolean = false;
var clickedButtons : string[] = [];
export function handleClick(id : string)
{
    if (!gameOver && !clickedButtons.includes(id)) {
        var element = document.getElementById(id.toString()) as HTMLImageElement
        switch(player.playerId) {
            case 1: 
                element.src="img/1.jpg"
                player.clicksOfP1.push(id)
                clickedButtons.push(id)
                if (isWin(1)) {gameOver = true;}
                break
            case 2: 
                element.src="img/2.jpg"
                player.clicksOfP2.push(id)
                clickedButtons.push(id)
                if (isWin(2)) {gameOver = true;}
                break
            default:
                element.src="img/white.jpg"
                break
            
        }
    }
}