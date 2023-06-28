/*

import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MarketingNavbar = () => {
/*
    const [ marketingnavbar, setMarketingNavbar ] = useState(false);
    const showMarketingNavbar = () => setMarketingNavbar(!marketingnavbar);   */
    

    /*
    const link = Link();
    const handleClick = (path) => {
        link.push(path);
    }
  

    return(
    <NavbarContainer>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">

          <li onClick={() => handleClick("/")} className="nav-item active">
          <a className="nav-link" href="#">Home</a>
                    </li>


          <li onClick={() => handleClick("/article/")} className="nav-item active">
          <a className="nav-link" href="http://localhost:3000">Articles</a>
                    </li>


         <li onClick={() => handleClick("/article/add")} className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/add">Create Articles</a>
          </li>

          <li onClick={() => handleClick("/article/update/:artid")} className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/update">Update Articles</a>
          </li>

          <li onClick={() => handleClick("/promotion/")} className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/">Promotions</a>
                    </li>
          
         <li onClick={() => handleClick("/promotion/add")} className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/add">Create Promotions</a>
          </li>

          <li onClick={() => handleClick("/promotion/update/:promoid")} className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/update">Update Promotions</a>
          </li>



          </ul>
        </div>
      </nav>
      </NavbarContainer>
    );
}

export default MarketingNavbar;
//main navbar container
  
const NavbarContainer = styled.div` 
background: black;
.nav-link{
color:white !important;
&:hover{
    background-image: linear-gradient(to right top, black, black);
    height: 30px;  /* this doesn't work */
   
/*
}
 ul{
     margin-left="67%"
 }
`;   
*/