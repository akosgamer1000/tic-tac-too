import { Player } from "./player"


export function loginOrRegister(playerName: string): Player {
    var playerStat : Player = new Player(0, "",0,0,0) 


    async function load() {
        try {
            var response = await fetch(`http://localhost:3000/name/${playerName}`)
            if (!response.ok) {
                throw new Error()
            }


            var statResponse = await fetch(`http://localhost:3000/stats/${playerName}`)
            var statJson = await statResponse.json();
            playerStat.name = statJson.name
            playerStat.win = statJson.win
            playerStat.loss = statJson.loss
            playerStat.winrate = statJson.winrate

        }
        catch {

            const registerNewName = async () => {
                const data = {
                    name: playerName,
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
        }
    }
    load()


    return playerStat
} 