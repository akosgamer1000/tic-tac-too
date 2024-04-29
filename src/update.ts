

export async function update() {
    var p1name = (document.getElementById("12") as HTMLElement).innerHTML
    var p2name = (document.getElementById("23") as HTMLElement).innerHTML
    var p1win = (parseInt((document.getElementById("13") as HTMLElement).innerHTML)).toString()
    var p2win = (parseInt((document.getElementById("24") as HTMLElement).innerHTML)).toString()
    var p1loss = (parseInt((document.getElementById("14") as HTMLElement).innerHTML)).toString()
    var p2loss = (parseInt((document.getElementById("25") as HTMLElement).innerHTML)).toString()
    var p1wr =  (parseFloat((document.getElementById("15") as HTMLElement).innerHTML)).toString() 
    var p2wr =   (parseFloat((document.getElementById("26") as HTMLElement).innerHTML)).toString() 
    const data1 = {
        p1name,
     
        p1win,
   
        p1loss,
     
        p1wr,
    
    };

    const data2 = {
     
        p2name,
     
        p2win,
      
        p2loss,
      
        p2wr
    };

    
    await Promise.all([
        fetch(`http://localhost:3000/${p1name}`, {
            method: 'PUT', // or 'POST' depending on your backend API
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        }),
        fetch(`http://localhost:3000/${p2name}`, {
            method: 'PUT', // or 'POST' depending on your backend API
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
    ]);
}