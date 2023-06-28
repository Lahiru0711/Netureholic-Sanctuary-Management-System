const { getInfo } = require("../controller/safariController");
const { addInfo } = require("../controller/safariController");
const { getInfoById } = require("../controller/safariController");
const { updateInfo } = require("../controller/safariController");
const { deleteInfo } = require("../controller/safariController");
const Safari = require("../models/Safari");
const router = require("express").Router();


//create
router.route("/add").post(addInfo);
   
//read
router.route("/").get(getInfo);
  
//update
router.route("/update/:id").put(updateInfo);
  
//delete
router.route("/delete/:id").delete(deleteInfo);
   
//get a staff details
router.route("/get/:id").get(getInfoById);
  
router.route("/displays/:Vehicle_No").get((req,res)=>{
    let Vehicle_No  = req.params.Vehicle_No;
    Safari.find({Vehicle_No :Vehicle_No}).then((safaris)=>{
        res.json(safaris)
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;
