import { useState } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

function SalaryCal() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  const [total, setTotal] = useState(number1 + number2 - ((200 * number3) + number4));

  function calculateTotal() {
    setTotal(number1 + number2 - (200 * number3));
  }

  return (
    <div className="App">
      <h1>Salary Slip</h1>
        <br/><br/>
        <label for="name"><b>Name</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  placeholder="Name" required
        />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <label for="ID"><b>ID</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  placeholder="ID"
        />
          <br/><br/> <br/><br/>
      <div className="number-inputs">
        <label for="name"><b>Basic Salary</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number1} required
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
          <br/><br/>
        <label for="name"><b>OT salary</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
           <br/><br/>
        <label for="name"><b>Leaves</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number3}
          onChange={(e) => setNumber3(+e.target.value)}
          placeholder="0"
        />

        <br/><br/>
        <label for="name"><b>Loan</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number4}
          onChange={(e) => setNumber4(+e.target.value)}
          placeholder="0"
        />

      </div>

          <br/><br/>
      <label for="salary"><b>Total Salary</b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
      <button onClick={calculateTotal} className="btn btn-success">calculate</button>
        <br/> <br/>
    
      <h3>{total}</h3>

      <div>
          <a href="/post">
          <button type="button" class="btn btn-success">Report</button>
            </a>
      </div>
    </div>
  );
}

export default SalaryCal;