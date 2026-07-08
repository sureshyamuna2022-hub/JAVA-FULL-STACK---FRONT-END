import React, {useState} from "react";

function CounterApp(){
    const [count, setCount]=useState(0)
    return(
        <>
        <h2>CounterApp - Functional Component</h2>
        <p>Count Value : {count}</p>

        <p>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </p>
        </>
    )
}
export default CounterApp