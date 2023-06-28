import './App.css';
import AddSales from './components/AddSales';
import AllSales from './components/AllSales';
import UpdateSales from './components/UpdateSales';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React, { useState } from "react";
import validator from 'validator'
import background from './components/Image/lion.jpeg';

function App() {

  return (
    
    <div class = "back" style={{ backgroundImage: `url(${background})` }}>
    <div className='App'>

        <BrowserRouter>
          <Routes>
          <Route path="/sale" exact element={<AllSales/>} />
          <Route path="/sale/add" exact element={<AddSales/>} />
          <Route path="/UpdateSale" exact element={<UpdateSales/>} />
          </Routes>
        </BrowserRouter>

    </div>
    </div>
  );
}

const Email = () => {
  
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  
  return (
    <div style={{
      margin: 'auto',
      marginLeft: '300px',
    }}>
      <pre>
        <span>Enter Email: </span><input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </pre>
    </div>
  );
}

export default App;
