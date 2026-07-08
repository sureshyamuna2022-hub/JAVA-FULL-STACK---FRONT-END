import React, { useState } from "react";
import { use } from "react";

function SICApp() {
    const [principal, setPrincipal] = useState("")
    const [rate, setRate] = useState("")
    const [time, setTime] = useState("")
    const [interest, setInterest] = useState("")

    const calucateSI = () => {
        if (principal === "" || rate === "" || time === "") {
            alert("please Full All Fields")
            return
        }
        const si = (Number(principal) * Number(rate) * Number(time)) / 100;
        setInterest(si.toFixed(2));
    }
    const clearData = () => {
        setPrincipal("")
        setRate("")
        setTime("")
        setInterest("")
    }
    return (
        <>
            <div className="container">
                <h1>Simple Interest Claculator</h1>
                <input type="number" placeholder="principal Amount"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)} />
                    
                <input type="number" placeholder="Rate Of Interest (%)"
                    value={rate} onChange={(e) => setRate(e.target.value)} />

                <input type="number" placeholder="Time(Years)" value={time}
                    onChange={(e) => setTime(e.target.value)} /> <br></br>

                <p>
                    <button onClick={calucateSI}>Calucate</button>
                    <button onClick={clearData}>Clear</button>
                </p>

                <h2>Simple Interest : RS- {interest}</h2>

            </div>
        </>
    )

}
export default SICApp