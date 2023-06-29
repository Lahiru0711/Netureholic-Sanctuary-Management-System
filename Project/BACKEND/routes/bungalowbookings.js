const router = require("express").Router();
const bungalow = require("../models/bungalowbooking");
let bungalowId = require("../models/bungalowbooking");

HTTP://localhost:8070/bungalow/add


//router related to data insert
router.route("/add").post((req,res)=>{

    const Booking_BID =req.body.Booking_BID;
    const B_ID =req.body.B_ID;
    const B_name =req.body.B_name;   
    const B_status =req.body.B_status;
    const VID = req.body.VID;
    const V_contact =req.body.V_contact;
   

    const newbungalow = new bungalow({
        Booking_BID,
        B_ID,
        B_name,
        B_status,
        VID,
        V_contact
    })

    newbungalow.save().then(()=>{
        res.json("booking added")
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/bungalow

//fetch all bungalows (read)
router.route("/").get((req,res)=>{

    bungalow.find().then((bungalow)=>{
        res.json(bungalow)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/bungalow/update/gjhgkhhhh

//use this async fuunction to update 2 records aftre update a forst record
router.route("/update/:id").put(async(req,res) => {
    let bungalowId = req.params.id;
    const {Booking_BID,B_ID,B_name,B_status,VID,V_contact} = req.body;

    const updatebungalow = {
        Booking_BID,
        B_ID,
        B_name,
        B_status,
        VID,
        V_contact
    
    }

    const update = await bungalow.findByIdAndUpdate(bungalowId,updatebungalow).then(() => {
        res.status(200).send({status  : "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req,res) => {
    let bungalowId = req.params.id;

    await bungalow.findByIdAndDelete(bungalowId)    
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});  
    })
})

//get single bungalow details
router.route("/get/:id").get(async (req,res) => {
    let bungalowId = req.params.id;
    const bungalow = await bungalow.findById(bungalowId)
        .then((bungalow) => {
            res.status(200).send({status: "bungalow fetched", bungalow})
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with get bungalow", error : err.message});
        })
})

module.exports = router;