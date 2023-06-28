let Safari = require("../models/Safari"); 

//create
exports.addInfo = async(req,res)=>{
    const {Booking_ID, Vehicle_No, Guide_name, V_NIC, V_name, V_contact} = req.body;

    if (!Booking_ID || !Vehicle_No || !Guide_name || !V_NIC || !V_name ||!V_contact ) {
        
        throw new Error("Please fill all the feilds");
    }else {
    const create = new Safari({
        Booking_ID, Vehicle_No, Guide_name, V_NIC, V_name, V_contact
    });

    console.log(create)
     await create.save()
    .then((addSafari)=>{
        res.status(200).json({addSafari, message: "added"});
    }).catch((err)=>{
        console.log(err)
    })
   
}
    
}

//read
exports.getInfo = (async(req,res)=>{
    const info = await Safari.find()
    .then((info)=>{
        res.json(info)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
exports.updateInfo = async(req,res)=>{
    let safariID = req.params.id;
    const { Booking_ID, Vehicle_No, Guide_name, V_NIC, V_name, V_contact} = req.body;
   
    if (!Booking_ID || !Vehicle_No || !Guide_name || !V_NIC || !V_name ||!V_contact ) {
        res.status(400);
        throw new Error("Please fill all the feilds");
    }else {

    const update ={
        Booking_ID, Vehicle_No, Guide_name, V_NIC, V_name, V_contact
    }

    const addSafari = await Safari.findByIdAndUpdate(safariID, update)
    .then(() => {
        res.status(200).send({status: "Safari booking updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
}   
   
}


//delete
exports.deleteInfo = async (req,res) => {
    let safariID = req.params.id;

    await Safari.findByIdAndDelete(safariID)
    .then(()=> {
        res.status(200).send({status: "Safari booking deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
} 

//get one's details
exports.getInfoById = (async (req, res) => {
    let safariID = req.params.id;
    const safari = await Safari.findById(safariID)
    .then((Safari) => {
        res.status(200).send({status: "User fetched",Safari})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })

})
