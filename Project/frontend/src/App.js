import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import AdminHome from "./components/Home/AdminHome";
import Inventory from "./components/Logistics/Inventory";
import Create from "./components/Logistics/create";
import Edit from "./components/Logistics/edit";
import Footer from "./components/Footer";

import B1_Inventory from "./components/bungalow_1/B1_Inventory";
import B1_create from "./components/bungalow_1/B1_create";
import B1_edit from "./components/bungalow_1/B1_edit";
import B1_report from "./components/bungalow_1/B1_Report";


import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Report from "./components/Logistics/Report";

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminhome" element={[<Header />, <AdminHome />]} />
          <Route path="/create" element={[<Header />, <Create />]} />
          <Route path="/edit/:id" element={[<Header />, <Edit />]} />
          <Route path="/inventory" element={[<Header />, <Inventory />]} />
          <Route path="/B1_inventory" element={[<Header />, <B1_Inventory />]} />
          <Route path="/B1_create" element={[<Header />, <B1_create />]} />
          <Route path="/B1_edit/:id" element={[<Header />, <B1_edit />]} />
          <Route path="/report" element={[<Header />, <Report />]} />
          <Route path="/B1_Report" element={[<Header />, <B1_report />]} />
        </Routes>
        <div>
          <br />
          <Footer />
        </div>
      </Router>
      <>
        {showButton && (
          <button
            onClick={scrollTop}
            className=" fixed bottom-14 right-10 text-4xl bg-lime-500 cursor-pointer rounded-md shadow-xl hover:bg-sky-800 p-1"
          >
            <div className=" -translate-y-2 text-gray-100">
              <ArrowUpwardIcon />
            </div>
          </button>
        )}
      </>
    </div>
  );
};

export default App;
