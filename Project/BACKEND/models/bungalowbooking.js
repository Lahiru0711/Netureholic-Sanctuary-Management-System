const mongoose = require('mongoose');

//create schema

const Schema = mongoose.Schema;
const bungalowScheme = new Schema({
     
    Booking_BID : {
        type : String,
        required : true
    },
    B_ID : {
        type : String,
        required : true
    },
    B_name :{
        type : String,
        required : true
    },
    B_status :{
        type : String,
        required : true
    },
    VID : {
        type  : String,
        required : true
    },
    V_contact : {
        type : String,
        required : true
    },
 
})

const bungalow = mongoose.model("bungalow",bungalowScheme);
http://localhost:8070/bungalow
module.exports = bungalow;