const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bungalow_1 = new Schema({
  B1_pID: {
    type: String,
  },
  B1_pName: {
    type: String,
  },
  B1_quantity: {
    type: Number,
  },
  B1_unitPrice: {
    type: Number,
  },
  B1_demand: {
    type: String,
  },
});

const newbungalow_1 = mongoose.model("bungalow_1", bungalow_1); //create database collection

module.exports = newbungalow_1;
