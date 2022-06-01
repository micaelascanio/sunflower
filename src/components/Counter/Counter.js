import {useState} from 'react';
import './Counter.css'

export default function App () {
    const [counter, setCounter] = useState(0)

    const add = () => {
        setCounter (previous => previous + 1)
    }

    const rest = () => {
        setCounter (previous => previous - 1) 
    }

    /*const clean = () => {
        setCounter (initialValue)
    }*/

    return (
        <div className="Counter">
            <h3>Selector</h3>
            <div>
                <button onClick = {add}>+</button>
                <h2>{counter}</h2>
                <button onClick = {rest}>-</button>
            </div>
        </div>
    )
}


