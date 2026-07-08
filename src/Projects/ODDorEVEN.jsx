import { useState } from "react";

function ODDorEVEN() {

    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    const checkNumber = () => {

    if (number === "") {
    setResult("Please Enter a Number");
    }

    else if (Number(number) % 2 === 0) {
    setResult(number + " is Even Number");
    }

    else {

        setResult(number + " is Odd Number");

        }

    };
    
     const clearData=()=>{
        setNumber("")
        setResult("")
    }

    return (

<div className="container mt-5">

    <div className="row justify-content-center">

       <div className="col-md-5">

           <div className="card shadow">

                <div className="card-header bg-primary text-white text-center">

                <h3>Odd or Even Number</h3>

                   </div>

                       <div className="card-body">

                            <label className="form-label">Enter Number </label>
 
                            <input type="number"className="form-control" placeholder="Enter Number"
                                value={number} onChange={(e) => setNumber(e.target.value)} />

                             <button className="btn btn-success5 mt-3 w-100" onClick={checkNumber}> Check Number</button>
                             <button className="btn btn-danger mt-3 w-100" onClick={clearData}>Clear</button>
                            <h4 className="text-center text-danger mt-4">  {result}
                            </h4>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ODDorEVEN;