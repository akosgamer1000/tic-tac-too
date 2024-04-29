export function calcWinrate(id : number) : number {
    var wr = 0;
    switch(id) {
        case 1:
            var win = parseInt((document.getElementById("13") as HTMLElement).innerHTML)
            var loss = parseInt((document.getElementById("14") as HTMLElement).innerHTML)
            wr = (win/(win+loss))*100
            break
        case 2:
            var win = parseInt((document.getElementById("24") as HTMLElement).innerHTML)
            var loss = parseInt((document.getElementById("25") as HTMLElement).innerHTML)
            wr = (win/(win+loss))*100
        }
    return wr
}