import ButtonProps from "./ButtonProps"

import handleClick from "./App"
export default function Button(Props : ButtonProps) {
    return <button onClick={handleClick} className={Props.id.toString()}> <img src={Props.src} /></button>
}