import React  from 'react';
import styled, { withTheme } from 'styled-components';

const Header = ()=>{
    return(
    
      
        <MainContainer>
          
         <h1>Natureholic</h1>
         <h6>Call now</h6> 
         <h6>011-23456300</h6>
       
        </MainContainer>
    )
    
}
export default Header;
//main container
    
const MainContainer = styled.header`
  
background-color:#eda46f;
  width:100%;
  height: 4rem;
  h1{
    transform:translate(-130%,-50%);
    color:#66a3ff;
    text-shadow: 0 0 1px white, 0 0 1px black;
    font-weigth:3;
    position:absolute;
    top:6%;
    font: 2rem Helvetica (sans-serif);
    left:50%;
  }
 
  h6{
    transform:translate(92%,-340%);
    color:#66a3ff;
   
  }
  h7{
  
    color:#1a75ff;
    transform:translate(79%,-340%);
  }
`;