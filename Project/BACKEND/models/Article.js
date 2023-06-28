
const mongoose = require('mongoose');

//creat schema

const Schema  = mongoose.Schema;

const articleSchema = new Schema({

AID :{
    type: String,
    require:true
},

category :{
    type: String,
    require:true
},

name :{
    type: String,
    require:true
},

description :{
    type: String,
    require:true
},

status :{
    type: String,
    require:true
},

EID :{
    type: String,
    require:true
},

stars :{
    type: String,
    require:true
},

}) 
const Article = mongoose.model("Article",articleSchema);
module.exports = Article;

