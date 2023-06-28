
const router = require("express").Router();
let Promotion = require("../models/Promotion");

//Insert

router.route("/add").post((req,res)=>{
 
    const PID = req.body.PID;
    const P_description = req.body.P_description;
    const P_name = req.body.P_name;
    const P_duration = req.body.P_duration;
    const P_status = req.body.P_status;
    const VID = req.body.VID;

    const newPromotion = new Promotion({
       PID,
       P_description,
       P_name,
       P_duration,
       P_status
    

    })

    newPromotion.save().then(()=>{
        res.json("Promotion Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//Read

router.route("/").get((req,res)=>{

    Promotion.find().then((promotions)=>{
          res.json(promotions)
    }).catch((err)=>{
         console.log(err)
    })
})

//Update

router.route("/update/:promoid").put(async(req,res) => {
    let promoId = req.params.promoid;
    const {PID, P_description, P_name, P_duration, P_status, VID} = req.body;

    const updatePromotion = {
       PID,
       P_description,
       P_name,
       P_duration,   
       P_status
    }

    const update = await Promotion.findByIdAndUpdate(promoId, updatePromotion)
    .then(() => {
        res.status(200).send({status: "Promotion updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


//Delete

router.route("/delete/:promoid").delete(async(req,res) =>{
    let promoId = req.params.promoid;
    await Promotion.findByIdAndDelete(promoId)
    .then(() => {
     res.status(200).send({status: "Promotion deleted"});   
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete promotion", error: err.message});
    })
})

//Read one promotion data


router.route("/get/:promoid").get(async(req,res) =>{
    let promoId = req.params.promoid;
    const promo = await Promotion.findById(promoId)
    .then((promotion) => {
     res.status(200).send({status: "Promotion fetched", promotion})   
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get promotion", error: err.message});
    })
})



module.exports = router;
