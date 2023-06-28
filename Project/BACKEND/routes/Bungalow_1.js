const router = require("express").Router();
const bungalow_1 = require("../models/bungalow_1");

//route for creating database insertion
router.route("/B1_create").post(async (req, res) => {
  const { B1_pID, B1_pName,B1_demand } = req.body;

  const B1_quantity = Number(req.body.B1_quantity);

  const B1_unitPrice = Number(req.body.B1_unitPrice);

  // create a new object using database schema
  const newbungalow_1 = new bungalow_1({
    B1_pID,
    B1_pName,
    B1_quantity,
    B1_unitPrice,
    B1_demand
  });

  const isAvailable = await bungalow_1.findOne({
    B1_pID: { $regex: new RegExp(B1_pID, "i") },
  });

  if (isAvailable) {
    return res.status(401).json({
      success: false,
      error: "Alredy Exist in the database",
    });
  }

  await newbungalow_1
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await bungalow_1.find()
    .then((Bungalow_1) => res.json(Bungalow_1))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/B1_get/:id").get(async (req, res) => {
  const { id } = req.params;

  await bungalow_1.findById(id)
    .then((logistics) => res.json(logistics))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/B1_delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await bungalow_1.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/B1_update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { B1_pID, B1_pName, B1_quantity, B1_unitPrice, B1_demand } = req.body;

  //find the document by and update the relavant data
  await bungalow_1.findByIdAndUpdate(id, {
    B1_pID,
    B1_pName,
    B1_quantity,
    B1_unitPrice,
    B1_demand,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
