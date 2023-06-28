const { getInfo } = require("../controller/bungalowController");
const { addInfo } = require("../controller/bungalowController");
const { getInfoById } = require("../controller/bungalowController");
const { updateInfo } = require("../controller/bungalowController");
const { deleteInfo } = require("../controller/bungalowController");
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
   
module.exports = router;
