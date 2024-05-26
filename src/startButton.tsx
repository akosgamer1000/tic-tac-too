import { StatPanel } from "./statPanel";
import { Table } from "./table";
import { useState } from "react";
import { registerNew, userExist } from "./register";

export default function StartButton() {
    const [showTable, setShowTable] = useState(false); 
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [registered1, setRegistered1] = useState(false); 
    const [registered2, setRegistered2] = useState(false);

    const handleClick = async () => {
        const login1Value = (document.getElementById("login1") as HTMLInputElement).value;
        const login2Value = (document.getElementById("login2") as HTMLInputElement).value;
    
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
        } else {
            setShowTable(false);
        }
    };
    
    return (
        <div>
            <button onClick={handleClick}>Kezdés</button>
            {showTable && name1 && name2 && registered1 && registered2 && (
                <>
                    <StatPanel id={11} name={name1} />
                    <StatPanel id={22} name={name2} />
                    <Table />
                </>
            )}
        </div>
    );
}
