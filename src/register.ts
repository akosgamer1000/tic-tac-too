export async function registerNew(newName: string) {

    const data = {
        name: newName,
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

}


export async function userExist(name : string) : Promise<boolean> {
    var response = await fetch(`http://localhost:3000/stats/${name}`)
    var resultJson = await response.json();
    return resultJson
  
}