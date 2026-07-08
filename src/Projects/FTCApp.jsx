import React,{useState} from "react";

function FTCApp(){
    const [fahrenheit, setFahrenheit]=useState("")
    const [celsius, setCelsius]=useState("")

    const reset=()=>{
        setFahrenheit("")
        setCelsius("")
    }

    const convertTemperature=()=>{
        if(fahrenheit===""){
            alert("please Enter fahrenheit value")
            
        }
       let C= ((parseFloat(fahrenheit)-32)*5)/9;
       setCelsius(C.toFixed(2))
    }
   return(
    <>
    <div className="container">
        <h1>Fahrenheit to celsius</h1>

        <input
        type="number"
        placeholder="Enter the Fahrenheit value"
        value={fahrenheit}
        onChange={(event)=>setFahrenheit(event.target.value)}/>

        <p>
            <button onClick={convertTemperature}>Convert</button> &nbsp;

        <button onClick={reset}>Reset</button>

         </p>

        <h2>{celsius} °C</h2>

    </div>
    </>
   )
}
export default FTCApp