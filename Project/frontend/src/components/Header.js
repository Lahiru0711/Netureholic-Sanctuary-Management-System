import React  from 'react';
import styled, { withTheme } from 'styled-components';


import '../Pictures/HeadingBackground.jpeg';
const Header = ()=>{
    return(
    
      
        <MainContainer>
          
         <h1>NatureHolic </h1>
        
        </MainContainer>
    )
    
}
export default Header;
//main container
    
const MainContainer = styled.header`
  
background-color:#eda324;
  width:100%;
  height: 4rem;
  h1{
    transform:translate(-130%,-50%);
    color:#ffffff;
    text-shadow: 0 0 1px white, 0 0 1px black;
    font-weigth:3;
    position:absolute;
    top:6%;
    font: 2rem Helvetica (sans-serif);
    left:60%;
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