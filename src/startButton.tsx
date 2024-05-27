import { StatPanel } from "./statPanel";
import { StatPanelProps } from "./StatPanelprops";
import { Table } from "./table";
import { createElement, createRef, useState } from "react";
import { registerNew, userExist } from "./register";
import ReactDOM from "react-dom";

export default function StartButton() {
    const [showTable, setShowTable] = useState(false); 
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [registered1, setRegistered1] = useState(false); 
    const [registered2, setRegistered2] = useState(false);

    const handleClick = async () => {
        const login1Value = (document.getElementById("login1") as HTMLInputElement).value;
        const login2Value = (document.getElementById("login2") as HTMLInputElement).value;

        const jatekos1 = (document.getElementById("Stat1"));
        const jatekos2 = (document.getElementById("Stat2"));
        
        if (login1Value && login2Value) {
            setName1(login1Value);
            setName2(login2Value);
    
            async function checkAndRegister(name: string) {
                const exists = await userExist(name);
                console.log(exists + "ez az exists")
                if (!exists) {
                    await registerNew(name);
                }
                return true; 
            }
    
           
            const [registered1, registered2] = await Promise.all([
                checkAndRegister(login1Value),
                checkAndRegister(login2Value),
            ]);
    
            setRegistered1(registered1);
            setRegistered2(registered2);
    
            setShowTable(true);

            const container1 = document.createElement('div');
            jatekos1!.appendChild(container1);
            ReactDOM.render(<StatPanel name={login1Value} id={11} class="neon"/>, container1);

            const container2 = document.createElement('div');
            jatekos2!.appendChild(container2);
            ReactDOM.render(<StatPanel name={login2Value} id={22} class="neon"/>, container2);

            document.getElementById("Start")!.style.visibility="hidden"


        } else {
            setShowTable(false);
        }
    };
    
    return (
        <div>
            <button onClick={handleClick} id="Start">Kezdés</button>
            {showTable && name1 && name2 && registered1 && registered2 && (
                <>
                    <Table />
                </>

            )}
        </div>
    );
}
