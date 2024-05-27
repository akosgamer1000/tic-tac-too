export function calcWinrate(id: number): number {
    var wr = 0;
    switch(id) {
        case 1:
            var winContent = (document.getElementById("13") as HTMLElement).innerHTML;
            var winNumericPart = winContent.match(/\d+/);
            var win = winNumericPart ? parseInt(winNumericPart[0]) : 0;

            var lossContent = (document.getElementById("14") as HTMLElement).innerHTML;
            var lossNumericPart = lossContent.match(/\d+/);
            var loss = lossNumericPart ? parseInt(lossNumericPart[0]) : 0;

            wr = win + loss === 0 ? 0 : (win / (win + loss)) * 100;
            break;
        case 2:
            var winContent2 = (document.getElementById("24") as HTMLElement).innerHTML;
            var winNumericPart2 = winContent2.match(/\d+/);
            var win2 = winNumericPart2 ? parseInt(winNumericPart2[0]) : 0;

            var lossContent2 = (document.getElementById("25") as HTMLElement).innerHTML;
            var lossNumericPart2 = lossContent2.match(/\d+/);
            var loss2 = lossNumericPart2 ? parseInt(lossNumericPart2[0]) : 0;

            wr =  win2 + loss2 === 0 ? 0 : (win2 / (win2 + loss2)) * 100;
            break;
    }
    return parseFloat(wr.toFixed(2))
}
