import { loginBlockProps } from "./loginBlockProps";

export function LoginBlock(szam : loginBlockProps) {

    return <div className= {`${szam.className}`} id={`Stat${szam.szam}`}>
        <label className="neon"> <b>{szam.szam}. játékos</b></label>
        <br></br>
        <input id={`login${szam.szam}`} type="text" />
    </div>
}