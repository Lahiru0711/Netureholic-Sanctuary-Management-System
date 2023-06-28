import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { NavLink, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";


const B1_edit = () => {
  const [B1_pID, setPid] = useState("");
  const [B1_pName, setPname] = useState("");
  const [B1_quantity, setQuantity] = useState("");
  const [B1_unitPrice, setUnitPrice] = useState("");
  const [B1_demand, setDemand] = useState("high");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/Bungalow_1/B1_get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setPid(json.B1_pID);
          setPname(json.B1_pName);
          setQuantity(json.B1_quantity);
          setUnitPrice(json.B1_unitPrice);
          setDemand(json.B1_demand);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/Bungalow_1/B1_update/${id}`,
        {
          B1_pID,
          B1_pName,
          B1_quantity,
          B1_unitPrice,
          B1_demand,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated");
        setPid("");
        setPname("");
        setQuantity("");
        setUnitPrice("");
        setDemand("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setPid("");
      setPname("");
      setQuantity("");
      setUnitPrice("");
      setDemand("");
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Box
          sx={{
            px: 20,
            py: 4,
            color: "red",
            border: 1,
            borderColor: "primary.main",
          }}
        >
          <div className=" inline-flex  mx-auto">
            <div className=" mt-2 -translate-x-8">
              <NavLink to="/B1_inventory">
                <Button variant="contained" color="primary">
                  Back
                </Button>
              </NavLink>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Update Item <br />
        </div>
        <form onSubmit={editHandler}>
          <div class="container px-36 py-24 mx-auto ">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                P.ID
              </h1>
              <TextField
                id="outlined-basic"
                label="PID"
                variant="outlined"
                type="text"
                value={B1_pID}
                onChange={(e) => setPid(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                P.Name
              </h1>
              <TextField
                id="outlined-basic"
                label="PName"
                variant="outlined"
                type="text"
                value={B1_pName}
                onChange={(e) => setPname(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Qty
              </h1>
              <TextField
                id="outlined-basic"
                label="Qty"
                variant="outlined"
                type="text"
                value={B1_quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Unit Price
              </h1>
              <TextField
                id="outlined-basic"
                label="Unit Price"
                variant="outlined"
                type="text"
                value={B1_unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Demand
              </h1>
              <TextField
                id="outlined-basic"
                label="Demand"
                variant="outlined"
                type="text"
                value={B1_demand}
                onChange={(e) => setDemand(e.target.value)}
              />
            </div>
          </div>
          <div className=" text-center mx-auto">
            <div className=" -translate-y-10">
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={loading}
              >
                <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                {loading ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    </>
  );
};

export default B1_edit;
