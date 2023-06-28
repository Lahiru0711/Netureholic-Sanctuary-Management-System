let Bungalow = require("../models/Bungalow"); 

//create
exports.addInfo = async(req,res)=>{
    const {Booking_ID, Bungalow_ID, VID, V_name, V_contact} = req.body;

    if (!Booking_ID || !Bungalow_ID || !VID ||!V_name ||!V_contact ) {
        
        throw new Error("Please fill all the feilds");
    }else {
    const create = new Bungalow({
        Booking_ID, Bungalow_ID, VID, V_name, V_contact
    });

    console.log(create)
     await create.save()
    .then((addBungalow)=>{
        res.status(200).json({addBungalow, message: "added"});
    }).catch((err)=>{
        console.log(err)
    })
   
}
    
}

//read
exports.getInfo = (async(req,res)=>{
    const info = await Bungalow.find()
    .then((info)=>{
        res.json(info)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
exports.updateInfo = async(req,res)=>{
    let bungalowID = req.params.id;
    const { Booking_ID, Bungalow_ID, VID, V_name, V_contact} = req.body;
   
    if (!Booking_ID || !Bungalow_ID || !VID ||!V_name ||!V_contact ) {
        res.status(400);
        throw new Error("Please fill all the feilds");
    }else {

    const update ={
        Booking_ID, Bungalow_ID, VID, V_name, V_contact
    }

    const addStaff = await Bungalow.findByIdAndUpdate(bungalowID, update)
    .then(() => {
        res.status(200).send({status: "Bungalow booking updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
}   
   
}


//delete
exports.deleteInfo = async (req,res) => {
    let bungalowID = req.params.id;

    await Bungalow.findByIdAndDelete(bungalowID)
    .then(()=> {
        res.status(200).send({status: "Bungalow booking deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
} 

//get one's details
exports.getInfoById = (async (req, res) => {
    let bungalowID = req.params.id;
    const bungalow = await Bungalow.findById(bungalowID)
    .then((Bungalow) => {
        res.status(200).send({status: "User fetched",Bungalow})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })

})
