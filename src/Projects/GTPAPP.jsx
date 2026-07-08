import React, { useState } from "react";
 
function GTPApp() {
    const [grams, setGrams] = useState("")
    const [pavan, setPavan] = useState("")
 
    const convert = () => {
        if (grams === "") {
            alert("Please Enter Grams Details")
            return;
        }
        const answer = Number(grams) / 8;
        setPavan(answer.toFixed(2))
    }
 
    const clearData = () => {
        setGrams("")
        setPavan("")
    }
    return (
        <>
            <div className="container mt-5">
                <div className="card shadow p-4 col-md-5 mx-auto">
 
                    <h2 className="text-center  text-primary">Gram to Pavan Calculator</h2>
 
                    <input type="number" className="form-control mb-3" placeholder="Enter Grams"
                        value={grams} onChange={(e) => setGrams(e.target.value)} />
 
   
                        <button className="btn btn-success mb-2" onClick={convert}>Convert</button>
                        <button className="btn btn-danger" onClick={clearData}>Clear</button>
               
 
                    <div className="alert alert-info mt-4 text-center">
                        <h4>Pavan : {pavan}</h4>
                    </div>
 
                </div>
 
            </div>
        </>
    )
}
export default GTPApp