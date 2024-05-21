import { StatPanel } from "./statPanel";
import { Table } from "./table"
import { useState } from "react";
import { registerNew, userExist } from "./register";

export default function StartButton() {
    const [showTable, setShowTable] = useState(false); // State to manage Table visibility
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");

    const handleClick = () => {
        const login1Value = (document.getElementById("login1") as HTMLInputElement).value;
        const login2Value = (document.getElementById("login2") as HTMLInputElement).value;

        if (login1Value && login2Value) {
            setName1(login1Value);
            setName2(login2Value);
            setShowTable(true);
        } else {
            setShowTable(false);
        }

      
    };

    return (
        <div>
            <button onClick={handleClick}>Kezdés</button>
            {showTable && name1 && name2 && (
                <>
                    <StatPanel id={11} name={name1} />
                    <StatPanel id={22} name={name2} />
                    <Table />
                </>
            )}
        </div>
    );
}
