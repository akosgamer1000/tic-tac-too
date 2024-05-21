import { StatPanelProps } from "./StatPanelprops";
import { useState, useEffect } from "react";

interface StatResult {
    name: string;
    win: number;
    loss: number;
}

export function StatPanel(props: StatPanelProps) {
    const [statResult, setStatResult] = useState<StatResult | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
    }, [props.name]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (statResult) {
        const winRate = (statResult.win / (statResult.win + statResult.loss)) * 100;
        return (
            <ul>
                <li id={(props.id + 1).toString()}>Név: {statResult.name}</li>
                <li id={(props.id + 2).toString()}>Nyert: {statResult.win}</li>
                <li id={(props.id + 3).toString()}>Vesztett: {statResult.loss}</li>
                <li id={(props.id + 4).toString()}>Arány: {winRate.toFixed(2)}%</li>
            </ul>
        );
    }

    return <div>Error loading data</div>;}