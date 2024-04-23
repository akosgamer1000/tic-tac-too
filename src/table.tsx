import Button from "./Button"
import { playerId } from "./playerId"



export function Table() {
    return <table onClick={() => {
        if (playerId.playerId == 1) { playerId.playerId == 2 }
        else if(playerId.playerId == 2) {playerId.playerId == 1 }
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