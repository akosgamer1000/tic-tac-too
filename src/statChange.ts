import { calcWinrate } from "./calcWinrate"

export function statChange(id : number) {
    switch(id) {
        case 1:
            var win = parseInt((document.getElementById("13") as HTMLElement).innerHTML)
            win++
            document.getElementById("13")!.textContent = `Nyert: ${win}`
            var loss = parseInt((document.getElementById("25") as HTMLElement).innerHTML)
            loss++
            document.getElementById("25")!.textContent = `Vesztett: ${loss}`
            document.getElementById("15")!.textContent = `Arány: ${calcWinrate(1)}`
            document.getElementById("26")!.textContent = `Arány: ${calcWinrate(2)}`
            break
        case 2:
            var win = parseInt((document.getElementById("24") as HTMLElement).innerHTML)
            win++
            document.getElementById("24")!.textContent = `Nyert: ${win}`
            var loss = parseInt((document.getElementById("14") as HTMLElement).innerHTML)
            loss--
            document.getElementById("14")!.textContent = `Vesztett: ${loss}`
            document.getElementById("26")!.textContent = `Arány: ${calcWinrate(2)}`
            document.getElementById("15")!.textContent = `Arány: ${calcWinrate(1)}`
            
    }

}