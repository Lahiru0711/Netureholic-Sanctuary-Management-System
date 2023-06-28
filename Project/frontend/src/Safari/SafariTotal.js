//import { useState } from "react";
import React, {useEffect,useState} from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf" ;
//import "./styles.css";

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit : 'in',
  format: [15,8]
};



function SafariTotal() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 * number2);

  function calculateTotal() {
    setTotal(number1 * number2);
  }

  return (
    <div className="App">
      <div ref = {ref}>
      <h1>Safari Slip</h1>
        <br/><br/>
        
         
          <br/><br/> <br/><br/>
      <div className="number-inputs">
        <label for="name"><b>Hour Price</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
          <br/><br/>
        <label for="name"><b>Total Hours</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

     

          <br/><br/>
      <label for="salary"><b>Total Safari Price</b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
      
        <br/> <br/>
      <h3>{total}</h3>


      </div>

      <button onClick={calculateTotal} className="btn btn-success">calculate</button>
      

        <div>
        <br/>
        </div>

      <div>
          
          <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => <button onClick={toPdf} type="button" class="btn btn-success">Report</button>}
      </Pdf>
          
          
           




      </div>

    </div>
);
}

export default SafariTotal;