export async function registerNew(newName: string) {

    const data = {
        name: newName,
        win: 0,
        loss: 0,
        winrate: 0
    }
    try {
        console.log(data)
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


export async function userExist(name: string): Promise<boolean> {


    const response = await fetch(`http://localhost:3000/stats/${name}`);
    if (response.ok) {
        return true
    }


    return false;



}