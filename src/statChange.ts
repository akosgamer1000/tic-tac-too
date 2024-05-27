import { calcWinrate } from "./calcWinrate"

export function statChange(id: number) {
    switch (id) {
        case 1:
            // Handle win increment for element with id "13"
            var winContent = (document.getElementById("13") as HTMLElement).innerHTML;
            var winNumericPart = winContent.match(/\d+/);
            var win = winNumericPart ? parseInt(winNumericPart[0]) : NaN;
            win++;
            console.log(win);
            document.getElementById("13")!.textContent = `Nyert: ${win}`;

         
            var lossContent = (document.getElementById("25") as HTMLElement).innerHTML;
            var lossNumericPart = lossContent.match(/\d+/);
            var loss = lossNumericPart ? parseInt(lossNumericPart[0]) : NaN;
            loss++;
            document.getElementById("25")!.textContent = `Vesztett: ${loss}`;

            
            document.getElementById("15")!.textContent = `Arány: ${calcWinrate(1)} %`;
            document.getElementById("26")!.textContent = `Arány: ${calcWinrate(2)} %`;
            break;

        case 2:
        
            var winContent2 = (document.getElementById("24") as HTMLElement).innerHTML;
            var winNumericPart2 = winContent2.match(/\d+/);
            var win2 = winNumericPart2 ? parseInt(winNumericPart2[0]) : NaN;
            win2++;
            document.getElementById("24")!.textContent = `Nyert: ${win2}`;

            
            var lossContent2 = (document.getElementById("14") as HTMLElement).innerHTML;
            var lossNumericPart2 = lossContent2.match(/\d+/);
            var loss2 = lossNumericPart2 ? parseInt(lossNumericPart2[0]) : NaN;
            loss2++;
            document.getElementById("14")!.textContent = `Vesztett: ${loss2}`;

            
            document.getElementById("26")!.textContent = `Arány: ${calcWinrate(2)} %`;
            document.getElementById("15")!.textContent = `Arány: ${calcWinrate(1)} %`;
            break;
    }
}
