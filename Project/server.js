const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const sale = require("./models/Sale");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//create a connection
mongoose.connect(URL,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

//open the connection
const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb Connection success!");
})

const saleRouter = require("./routes/sales.js")
app.use("/sale",saleRouter);


app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`)
})