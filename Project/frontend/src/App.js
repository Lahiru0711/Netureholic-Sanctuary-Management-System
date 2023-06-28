import './App.css';
import Header from './components/Header';
import AddArticle from "./components/AddArticle"
import AllArticles from './components/AllArticles';
//import New from './components/New'; 
import UpdateArticles from './components/UpdateArticles';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddPromotion from './components/AddPromotion';
import AllPromotions from './components/AllPromotions';
import UpdatePromotions from './components/UpdatePromotions';

import background from './components/images/lionking.jpg';

import Report from './components/Report';


function App() {
  return (
    <div class = "back" style={{ backgroundImage: `url(${background})` }}>
    
  <Router> 
      <Routes>
      
      <Route path = "AllArticles" element ={[<Header/>,<AllArticles/>]}/>
      <Route path = "AddArticle" element ={[<Header/>,<AddArticle/>]}/>
      <Route path = "UpdateArticles" element ={[<Header/>,<UpdateArticles/>]}/>


      <Route path = "AllPromotions" element ={[<Header/>,<AllPromotions/>]}/>
      <Route path = "AddPromotion" element ={[<Header/>,<AddPromotion/>]}/>
      <Route path = "UpdatePromotions" element ={[<Header/>,<UpdatePromotions/>]}/>

     
      
      <Route path = "Report" element ={[<Header/>,<Report/>]}/>
      


    </Routes> 
  </Router>  
  </div>
  );
}

export default App;
 