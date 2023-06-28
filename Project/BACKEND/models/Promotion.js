
const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const promotionSchema = new Schema({

PID :{
    type: String,
    require:true
},

P_description :{
    type: String,
    require:true
},

P_name :{
    type: String,
    require:true
},

P_duration :{
    type: String,
    require:true
},

P_status :{
    type: String,
    require:true
},


})
const Promotion = mongoose.model("Promotion",promotionSchema);
module.exports = Promotion;

