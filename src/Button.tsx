import ButtonProps from "./ButtonProps"

export default function Button(Props : ButtonProps) {
    return <button className={Props.id.toString()}> <img src={Props.src} /></button>
}