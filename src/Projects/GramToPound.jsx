import React, { useState } from "react";
// import './GramtoPound.css'

function GramToPound() {
  const [grams, setGrams] = useState("");
  const [pounds, setPounds] = useState("");

  const convertWeight = () => {
    if (grams === "") {
      alert("Please enter the gram value");
      return;
    }

    let result = parseFloat(grams) * 0.00220462;
    setPounds(result.toFixed(4));
  };

  const reset = () => {
    setGrams("");
    setPounds("");
  };

  return (
    <div className="container">
      <h1>Gram to Pound </h1>

      <input
        type="number"
        placeholder="Enter Weight in Grams"
        value={grams}
        onChange={(e) => setGrams(e.target.value)}
      />

      <p>
        <button onClick={convertWeight}>Convert</button>
        &nbsp;
        <button onClick={reset}>Reset</button>
      </p>

      <h2>{pounds} lb</h2>
    </div>
  );
}

export default GramToPound;