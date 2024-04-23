import ButtonProps from "./ButtonProps";
import {playerId} from "./playerId"

export function handleClick(Props : ButtonProps)
{
    switch(playerId.playerId) {
        case 1: 
        Props.src="img/1.jpg"
        break
        case 2: 
        Props.src="img/2.jpg"
        break
        default:
            Props.src="img/white.jpg"
            break
            
    }
}