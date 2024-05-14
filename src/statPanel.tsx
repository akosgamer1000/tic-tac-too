
import { StatPanelProps } from "./StatPanelprops";
import { useState, useEffect } from "react"

export function StatPanel(Props: StatPanelProps) {
    
    const [statResult, setStatResult] = useState<any>("")
    useEffect(()=>{
        async function load() {

            var statResponse = await fetch(`http://localhost:3000/stats/${Props.name}`)
            var statResultJson = await statResponse.json();
            setStatResult(statResultJson)
        }
        load()
    },[])

    return (<ul>
        <li id={(Props.id+1).toString()}>Név: {statResult.name} </li>
        <li  id={(Props.id+2).toString()}>Nyert: {statResult.win}</li>
        <li id={(Props.id+3).toString()}>Vesztett: {statResult.loss}</li>
        <li id={(Props.id+4).toString()}>Arány: {(statResult.win/(statResult.win+statResult.loss))*100}</li>
    </ul>)
}