import React,{useState} from "react";

const AFCounterApp=()=>{
    const [num, setNum]=useState(0)
    return(
        <>
        <h2>CounterApp - Arrow Function</h2>
        <p>{num} - Count the Number</p>

        <p>
            <button onClick={()=>setNum(num+1)}>Increment</button>
            <button onClick={()=>setNum(num-1)}>Decrement</button>
        </p>
        </>
    )
}
export default AFCounterApp