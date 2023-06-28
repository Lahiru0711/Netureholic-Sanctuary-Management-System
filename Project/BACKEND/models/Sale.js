const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    contactNo1 : {
        type : Number,
        required : true
    },
    contactNo2 : {
        type : Number,
        required : true
    },
    adultsCount : {
        type : Number,
        required : true
    },
    childrenCount : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
})

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
