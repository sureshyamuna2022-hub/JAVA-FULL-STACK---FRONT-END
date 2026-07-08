import React, { useState } from "react";

function EMIApp() {
    const [loanAmount, setLoanAmount] = useState("");
    const [rate, setRate] = useState("");
    const [years, setYears] = useState("");

    const [emi, setEmi] = useState("");
    const [totalInterest, setTotalInterest] = useState("");
    const [totalPayment, setTotalPayment] = useState("");

    const calculateEMI = () => {

        if (loanAmount === "" || rate === "" || years === "") {
            alert("Please Enter All Fields");
            return;
        }

        if (loanAmount <= 0 || rate <= 0 || years <= 0) {
            alert("Values must be greater than 0");
            return;
        }

        const P = Number(loanAmount);
        const R = Number(rate) / 12 / 100;
        const N = Number(years) * 12;

        const EMI =
            (P * R * Math.pow(1 + R, N)) /
            (Math.pow(1 + R, N) - 1);

        const totalPay = EMI * N;
        const interest = totalPay - P;

        setEmi(EMI.toFixed(2));
        setTotalInterest(interest.toFixed(2));
        setTotalPayment(totalPay.toFixed(2));
    };

    const clearData = () => {
        setLoanAmount("");
        setRate("");
        setYears("");
        setEmi("");
        setTotalInterest("");
        setTotalPayment("");
    };

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow col-md-6 mx-auto">
                    <div className="card-header bg-primary text-white text-center">
                        <h2>EMI Calculator</h2>
                    </div>

                    <div className="card-body">

                        <div className="mb-3">
                            <label>Loan Amount :</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Loan Amount"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Interest Rate (% per year) :</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Interest Rate"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Loan Tenure (Years) :</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Years"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={calculateEMI}
                            className="btn btn-success w-100"
                        >
                            Calculate
                        </button>

                        <br />
                        <br />

                        <button
                            onClick={clearData}
                            className="btn btn-danger w-100"
                        >
                            Clear
                        </button>

                        <div className="alert alert-info mt-4">
                            <h5>Monthly EMI : ₹ {emi}</h5>
                            <h5>Total Interest : ₹ {totalInterest}</h5>
                            <h5>Total Payment : ₹ {totalPayment}</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default  EMIApp;