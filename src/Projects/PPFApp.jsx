import React, { useState } from "react";
 
function PPFApp() {
    const [amount, setAmount] = useState("")
    const [maturity, setMaturity] = useState("")
    const [interest, setInterest] = useState("")
 
    const rate = 7.1;
    const years = 15;
 
    const calculatePPF=()=>{
        if(amount===""){
            alert("Please Enter Investment Amount")
            return
        }
        if(amount<500){
            alert("Minimum Investment is ₹ 500")
            return
        }
        if(amount>150000){
            alert("Maximum Investment is ₹ 1,50,000")
            return
        }
 
        const principal=Number(amount)
 
        const maturityValue=principal*Math.pow((1+rate/100), years)
        const interestEarned=maturityValue-principal
 
        setMaturity(maturityValue.toFixed(2))
        setInterest(interestEarned.toFixed(2))
    }
 
    const clearData=()=>{
        setAmount("")
        setMaturity("")
        setInterest("")
    }
 
    return (
        <>
            <div className="container mt-5">
                <div className="card shadow col-md-6 mx-auto">
                    <div className="card-header bg-primary text-white text-center">
                        <h2>PPF Calculator</h2>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label>Inverstment Amount : </label>
                            <input type="number" className="form-control" placeholder="Enter Amount"
                                value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label>Interest Rate : </label>
                            <input type="text" className="form-control" value="7.1%" readOnly/>
                        </div>
                        <div className="mb-3">
                            <label>Years : </label>
                            <input type="text" className="form-control" value="15" readOnly/>
                        </div>
 
                        <button onClick={calculatePPF} className="btn btn-success w-100">Calculate</button>
                        <br/>  <br/>
                        <button onClick={clearData} className="btn btn-danger w-100">Clear</button>
 
                        <div className="alert alert-info mt-4">
                            <h5>Interest Earned : ₹ {interest}</h5>
                            <h5>Maturity Amount : ₹ {maturity}</h5>
                        </div>
                    </div>
                </div>
            </div>
 
        </>
    )
}
export default PPFApp