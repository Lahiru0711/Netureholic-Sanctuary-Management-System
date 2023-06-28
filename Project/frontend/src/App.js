import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import AdminHome from "./components/Home/AdminHome";
import Inventory from "./components/Logistics/Inventory";
import Create from "./components/Logistics/create";
import Edit from "./components/Logistics/edit";
import Footer from "./components/Footer";
import Fcreate from "./components/Feedback/Create";
import Allfeedbacks from "./components/Feedback/Allfeedbacks";
import Fedit from "./components/Feedback/Edit";
import Viewfeedback from "./components/Feedback/Viewfeedback";
import ViewReply from "./components/Feedback/ViewReply";
import Report from "./components/Feedback/Report";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminhome" element={[<Header />, <AdminHome />]} />
          <Route path="/create" element={[<Header />, <Create />]} />
          <Route path="/edit" element={[<Header />, <Edit />]} />
          <Route path="/inventory" element={[<Header />, <Inventory />]} />
          <Route path="/fcreate" element={[<Fcreate />]} />
          <Route path="/fview" element={[<Header />, <Allfeedbacks />]} />
          <Route path="/fedit/:id" element={[<Header />, <Fedit />]} />
          <Route
            path="/feedback/get/:id"
            element={[<Header />, <Viewfeedback />]}
          />
          <Route path="/frview" element={[<ViewReply />]} />
          <Route path="/freport" element={[<Header />, <Report />]} />
        </Routes>
        <div>
          <br />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
