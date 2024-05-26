export async function update() {
    var name1 = (document.getElementById("12") as HTMLElement).innerHTML.replace("Név: ", "");
    var name2 = (document.getElementById("23") as HTMLElement).innerHTML.replace("Név: ", "");

    var winContent1 = (document.getElementById("13") as HTMLElement).innerHTML;
    var winNumericPart1 = winContent1.match(/\d+/);
    var win1 = winNumericPart1 ? winNumericPart1[0] : "0";

    var winContent2 = (document.getElementById("24") as HTMLElement).innerHTML;
    var winNumericPart2 = winContent2.match(/\d+/);
    var win2 = winNumericPart2 ? winNumericPart2[0] : "0";

    var lossContent1 = (document.getElementById("14") as HTMLElement).innerHTML;
    var lossNumericPart1 = lossContent1.match(/\d+/);
    var loss1 = lossNumericPart1 ? lossNumericPart1[0] : "0";

    var lossContent2 = (document.getElementById("25") as HTMLElement).innerHTML;
    var lossNumericPart2 = lossContent2.match(/\d+/);
    var loss2 = lossNumericPart2 ? lossNumericPart2[0] : "0";

    var wrContent1 = (document.getElementById("15") as HTMLElement).innerHTML;
    var wrNumericPart1 = wrContent1.match(/\d+(\.\d+)?/);  
    var wr1 = wrNumericPart1 ? wrNumericPart1[0] : "0";

    var wrContent2 = (document.getElementById("26") as HTMLElement).innerHTML;
    var wrNumericPart2 = wrContent2.match(/\d+(\.\d+)?/);  
    var wr2 = wrNumericPart2 ? wrNumericPart2[0] : "0";

    const data1 = {
        name: name1,
        win: win1,
        loss: loss1,
        winrate: wr1,
    };

    const data2 = {
        name: name2,
        win: win2,
        loss: loss2,
        winrate: wr2,
    };

  

    await Promise.all([
       
        fetch(`http://localhost:3000/update/${name1}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        }),
        fetch(`http://localhost:3000/update/${name2}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
    ]);
}
