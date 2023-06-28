import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';

import AddBungalow from './pages/AddBungalow';
import AllBungalow from './pages/AllBungalow';
import UpdateBungalow from './pages/UpdateBungalow';
import AddSafari from './pages/AddSafari';
import AllSafari from './pages/AllSafari';
import UpdateSafari from './pages/UpdateSafari';
import Post from './Report/POST';
import Example from './Safari/Print';
import {BrowserRouter as Router, Route} from "react-router-dom"
import SafariTotal from './Safari/SafariTotal';

function App() {
  return (
    <Router>
  
    <div>
      <Header/>
      <HeaderNav/>
      
      <Route path = "/print" exact component={Example} />
      <Route path = "/SafariTotal" exact component={SafariTotal} />
      <Route path = "/post" exact component={Post} />
      <Route path = "/bun/add" exact component={AddBungalow} />
      <Route path = "/update/:id" exact component={UpdateBungalow} />
      <Route path = "/bun" exact component={AllBungalow} />
      <Route path = "/Safari/add" exact component={AddSafari} />
      <Route path = "/Safari/update/:id" exact component={UpdateSafari} />
      <Route path = "/Safari" exact component={AllSafari} />
      
      
    </div>
    </Router>
  );
}

export default App;
