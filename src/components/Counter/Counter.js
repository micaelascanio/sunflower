import {useState} from 'react';
import './Counter.css'



const CounterButton = ({ onAdd, stock, initial = 0 }) => {

    const [counter, setCounter] = useState(initial)
    
        const add = () => {
            
        if (counter < stock) setCounter (counter + 1)
        }
    
        const rest = () => {
            if (counter > 0) setCounter (counter - 1) 
        }
    
        
    
     return (
            <div>
                <div className="Counter">
                    <button onClick = {rest}  className="buttonCounter"> - </button>
                    <h2> {counter} </h2>
                    <button onClick = {add} className="buttonCounter"> + </button>
                    <button onClick = {() => onAdd (counter)} className="buttonCounter"> Add to cart </button>
                </div>
            </div>
        )
    
    }


export default CounterButton