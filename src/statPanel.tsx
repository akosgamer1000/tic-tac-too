import { Player } from "./player";


export function StatPanel(Props: Player) {
    

    return <ul>
        <li id={(Props.id+1).toString()}>Név: {Props.name} </li>
        <li  id={(Props.id+2).toString()}>Nyert: {Props.win}</li>
        <li id={(Props.id+3).toString()}>Vesztett: {Props.loss}</li>
        <li id={(Props.id+4).toString()}>Arány: {Props.winrate}</li>
    </ul>
}