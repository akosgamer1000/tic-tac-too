import Button from "./Button"

export function Table() {
    return <table>
        <tr>
            <td><Button src="img/white.jpg" id={1} /></td>
            <td><Button src="img/white.jpg" id={2} /></td>
            <td><Button src="img/white.jpg" id={3} /></td>
        </tr>
        <tr>
            <td><Button src="img/white.jpg" id={4} /></td>
            <td><Button src="img/white.jpg" id={5} /></td>
            <td><Button src="img/white.jpg" id={6} /></td>
        </tr>
        <tr>
            <td><Button src="img/white.jpg" id={7} /></td>
            <td><Button src="img/white.jpg" id={8} /></td>
            <td><Button src="img/white.jpg" id={9} /></td>
        </tr>
    </table>
}