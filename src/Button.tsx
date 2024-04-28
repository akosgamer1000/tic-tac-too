import ButtonProps from "./ButtonProps"

import { handleClick } from "./handleClick"

export default function Button(Props : ButtonProps) {
    return <button onClick={() => {handleClick(Props.id.toString())}} >  <img id={Props.id.toString()} src={Props.src} /></button>
}
