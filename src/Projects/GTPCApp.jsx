import React,{useState} from "react";

function GTPCApp(){
    const [grams, setGrams]=useState("")
    const [povan, setPovan]=useState("")

    const convert=()=>{
        if(grams===""){
            alert("please Enter Grams weight")
            return;
        }
        const answer=Number(grams)/8;
        setPovan(answer.toFixed(2))
    }

    const clearData=()=>{
        setGrams("")
        setPovan("")
    }
    return(
        <>
        <div className="container mt-5">
            <div className="card shadow p-4 col-md-5 mx-auto">

                <h2 className="text-center text-primary"> Gram to Povan claculator</h2>

                <input type="number" className="form-control mb-3" placeholder="Enter Grams"
                 value={grams} onChange={(e)=>setGrams(e.target.value)}/>

                 <button className="btn btn-info mb-2" onClick={convert}>convert</button>
                 <button className="btn btn-danger" onClick={clearData}>Clear</button>

                <div className="alert alert-light mt-4 text-center">
                  <h4>povan : {povan}</h4>  
                </div>


            </div>

        </div>
        </>
    )
}
export default GTPCApp
// using bootstrap