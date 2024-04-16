import { useEffect, useState } from 'react'
import {Table} from './table'

import './App.css'

function App() {
    const[playerId, setPlayerId] = useState(0);

    
    const handleClick = (event: MouseEvent) => {
        setPlayerId(2/playerId)
        event.
    }

    return <div>
        <Table />
    </div>
}

export default App
