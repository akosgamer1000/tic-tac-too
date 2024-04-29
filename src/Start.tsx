import { LoginBlock } from "./loginBlock"
import  StartButton from "./startButton"

export function Start() {
    return <div>
        <LoginBlock szam={1}></LoginBlock>
        <LoginBlock szam={2}></LoginBlock>
        <StartButton></StartButton>
    </div>
}