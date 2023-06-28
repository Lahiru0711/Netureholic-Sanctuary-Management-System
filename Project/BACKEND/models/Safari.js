const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const safariSchema = new Schema({

    Booking_ID : {
        type : String,
        // required: true
    },
    Vehicle_No : {
        type : String,
        // required: true
    },

    Guide_name : {
        type : String,
        // required: true
    },
 
    V_NIC : {
        type : String,
        match : /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/,
        // required : true,
    },
    V_name : {
        type : String,
        // required : true,  
    },
    V_contact : {
        type : String,
       match: /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
       required : true,
    },
    
},   
    // {
    //     timestamps:true,   
    // }

)

const Safari = mongoose.model("Safari",safariSchema );

module.exports = Safari;