import { loginBlockProps } from "./loginBlockProps";

export function LoginBlock(szam : loginBlockProps) {
    return <div>
        <label > <b>{szam.szam}. játékos</b></label>
        <input id={`login${szam.szam}`} type="text" />
    </div>
}