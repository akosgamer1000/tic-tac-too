import { LoginBlock } from "./loginBlock"
import  StartButton from "./startButton"

export function Start() {

    return <div className="layout">
        <div id="main">
            <StartButton></StartButton>
        </div>
        <LoginBlock szam={1} className="Stat1"></LoginBlock>
        <LoginBlock szam={2} className="Stat2"></LoginBlock>
    </div>
}