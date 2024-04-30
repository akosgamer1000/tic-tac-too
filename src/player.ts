export class Player {
    id : number
    name : string
    win : number
    loss : number
    winrate : number
    constructor(id : number, name : string, win : number, loss : number, winrate : number) {
        this.id = id,
        this.name = name,
        this.win = win,
        this.loss = loss,
        this.winrate = winrate
    }

}