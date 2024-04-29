import { StatPanel } from "./statPanel";
import { Table } from "./table"
import { useState } from "react";
export default function StartButton() {
    const [showTable, setShowTable] = useState(false); // State to manage Table visibility
    const name1 = document.getElementById("login1") as HTMLInputElement
    const name2 = document.getElementById("login2") as HTMLInputElement
  
    const handleClick = () => {
        setShowTable(!showTable);
       
    };

    return (
        <div>
            <button onClick={handleClick}>Kezdés</button>
            {showTable && (
  <>
  
    <StatPanel id={11} name={name1.value}/>
    <StatPanel id={22} name={name2.value}/>
    <Table/>
  </>
)}
        </div>
    );
}