import { StatPanel } from "./statPanel";
import { Table } from "./table"
import { useState } from "react";
import { registerNew, userExist } from "./register";
export default function StartButton() {
    const [showTable, setShowTable] = useState(false); // State to manage Table visibility
    var name1 = ""
    var name2 = ""
    const handleClick = () => {
        console.log("beleptem")
        name1 = (document.getElementById("login1") as HTMLInputElement).value
        name2 = (document.getElementById("login2") as HTMLInputElement).value
        setShowTable(!showTable);
        if (!userExist(name1)) {

            registerNew(name1);
        }
        if (!userExist(name2)) {
            registerNew(name2)
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Kezdés</button>
            {showTable && (
                <>

                    <StatPanel id={11} name={name1} />
                    <StatPanel id={22} name={name2} />
                    <Table />
                </>
            )}
        </div>
    );
}