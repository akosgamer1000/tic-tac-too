import { StatPanelProps } from "./StatPanelprops";
import { useState, useEffect } from "react";

interface StatResult {
    name: string;
    win: number;
    loss: number;
}

export function StatPanel(props: StatPanelProps) {
    const [statResult, setStatResult] = useState<any>("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        async function load() {
            try {
                const statResponse = await fetch(`http://localhost:3000/stats/${props.name}`);
                const statResultJson: StatResult = await statResponse.json();

                setStatResult(statResultJson);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching stats:", error);
                setIsLoading(false);
            }
        }

        load();

    },[])
   

    if (isLoading) {
        return <div className="neon">Loading...</div>;
    }

    if (statResult != "") {
        var winRate = (statResult[0].win / (statResult[0].win + statResult[0].loss)) * 100;
        if (statResult[0].win == 0 && statResult[0].loss == 0) {
            winRate = 0;
        }
             

        return (
            <ul>
                <li id={(props.id + 1 ).toString()} className="neon">Név: {statResult[0].name}</li>
                <li id={(props.id + 2).toString()} className="neon">Nyert: {statResult[0].win}</li>
                <li id={(props.id + 3).toString()} className="neon">Vesztett: {statResult[0].loss}</li>
                <li id={(props.id + 4).toString()} className="neon">Arány: {winRate.toFixed(2)} %</li>
            </ul>
        );
        
    }

    return <div className="neon">Nincs megjeleníthető adat</div>;}