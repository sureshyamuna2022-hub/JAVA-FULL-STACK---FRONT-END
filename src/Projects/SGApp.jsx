import { useState } from "react";
 
function SGApp() {
 
  const [marks, setMarks] = useState("");

  const [grade, setGrade] = useState("");
 
  const checkGrade = () => {
 
    if (marks === "") {

      setGrade("Please Enter Marks");

      return;

    }
 
    const studentMarks = Number(marks);
 
    if (studentMarks < 0 || studentMarks > 100) {

      setGrade("Marks should be between 0 and 100");

      return;

    }
 
    let result = "";
 
    switch (true) {
 
     case studentMarks >= 90:

     result = "Grade A+";

     break;
 
      case studentMarks >= 80:

        result = "Grade A";

        break;
 
      case studentMarks >= 70:

        result = "Grade B";

        break;
 
      case studentMarks >= 60:

        result = "Grade C";

        break;
 
      case studentMarks >= 50:

        result = "Grade D";

        break;
 
      default:

        result = "Fail";

    }
 
    setGrade(result);

  };
 
  return (
 
    <div className="container mt-5">
 
      <div className="row justify-content-center">
 
        <div className="col-md-5">
 
          <div className="card shadow">
 
            <div className="card-header bg-primary text-white text-center">
 
              <h2>Student Grade System</h2>
 
            </div>
 
            <div className="card-body">
 
              <label className="form-label">

                Enter Student Marks
</label>
 
              <input

                type="number"

                className="form-control"

                placeholder="Enter Marks"

                value={marks}

                onChange={(e) => setMarks(e.target.value)}

              />
 
              <button

                className="btn btn-success w-100 mt-3"

                onClick={checkGrade}
>

                Check Grade
</button>
 
              <h3 className="text-center text-danger mt-4">

                {grade}
</h3>
 
            </div>
 
          </div>
 
        </div>
 
      </div>
 
    </div>
 
  );

}
 
export default SGApp;