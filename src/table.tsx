import Button from "./Button"
import { player } from "./playerId"



export function Table() {
    return <table onClick={() => {
        if (player.playerId == 1) { player.playerId = 2 }
        else if(player.playerId == 2) {player.playerId = 1 }
    }}>
        <tr>
            <td><Button src="" id={1} /></td>
            <td><Button src="" id={2} /></td>
            <td><Button src="" id={3} /></td>
        </tr>
        <tr>
            <td><Button src="" id={4} /></td>
            <td><Button src="" id={5} /></td>
            <td><Button src="" id={6} /></td>
        </tr>
        <tr>
            <td><Button src="" id={7} /></td>
            <td><Button src="" id={8} /></td>
            <td><Button src="" id={9} /></td>
        </tr>
    </table>
}