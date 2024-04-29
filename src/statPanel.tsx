import { useEffect, useState } from "react";
import { StatPanelProps } from "./StatPanelprops";

export function StatPanel(Props: StatPanelProps) {
    const [statResult, setStatResult] = useState<any>(null);

    useEffect(() => {
        console.log("kaosdkasdkaskdakdksaaskdask")
        async function load() {
            try {
                var response = await fetch(`http://localhost:3000/name/:${Props.name}`)
                var result = response.json()
                if (result==null) {
                    throw new Error()
                }

                var statResponse = await fetch(`http://localhost:3000/stats/${Props.name}`)
                var statResult = statResponse.json();
                setStatResult(statResult)
            }
            catch {
                console.log("itt vagyok")
                const registerNewName = async () => {
                    const data = {
                        name: Props.name,
                        win: 0,
                        lose: 0,
                        winrate: 0
                    }
                    try {
                        const response = await fetch('http://localhost:3000/register', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                            
                        });

                        if (!response.ok) {
                            throw new Error('Nem siker');
                        }

                        console.log('Siker');
                    } catch (error) {
                        console.error('Hiba:', error);
                    }
                };
                registerNewName()
                load()
            }
        }
        load()
    } )

    return <ul>
        <li id={(Props.id+1).toString()}>Név: {statResult.name} </li>
        <li  id={(Props.id+2).toString()}>Nyert: {statResult.win}</li>
        <li id={(Props.id+3).toString()}>Vesztett: {statResult.loss}</li>
        <li id={(Props.id+4).toString()}>Arány: {(statResult.win/(statResult.win+statResult.loss))*100}</li>
    </ul>
}