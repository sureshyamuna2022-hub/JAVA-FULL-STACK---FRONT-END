import React,{useState} from "react";

function FCStateExample(){
    const [msg, setMsg]=useState("Weclome to Maxina")
return(
    <>
    <h2>Functional Component - useState() HOOK</h2>
    <p>{msg}</p>

    <p> <button onClick={()=>setMsg("Thanks to visit Maxina")}>Click</button> </p>

    </>
)
}
export default FCStateExample