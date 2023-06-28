const router = require("express").Router();
let Sale = require("../models/Sale");

//create (add sales)
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const contactNo1 = Number(req.body.contactNo1);
    const contactNo2 = Number(req.body.contactNo2)
    const adultsCount = Number(req.body.adultsCount);
    const childrenCount = Number(req.body.childrenCount);
    const email = req.body.email;
    const date = req.body.date;

    const newSale = new Sale({
        name,
        contactNo1,
        contactNo2,
        adultsCount,
        childrenCount,
        email,
        date
    })

    newSale.save().then(()=>{
        res.json("Sale Added")
    }).catch((err)=>{
        console.log(err);

    })

})

//Retrieve sales

router.route("/").get((req,res)=>{
    Sale.find().then((sales)=>{
        res.json(sales)
    }).catch((err)=>{
        console.log(err)
    })
})


//update sales  
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {name, contactNo1, contactNo2, adultsCount, childrenCount, email, date} = req.body;  //d structure

    const updateSale = {
        name,
        contactNo1,
        contactNo2,
        adultsCount,
        childrenCount,
        email,
        date
    }

    const update = await Sale.findByIdAndUpdate(userId, updateSale)
    .then(() => {
        res.status(200).send({status: "Sale updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })
})

//delete sales
router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Sale.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Sale deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })
})

//retrieve data of a single sale
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const sale = await Sale.findById(userId)
    .then((sale) => {
        res.status(200).send({status: "Sale fetched", sale})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with getting sale", error: err.message});
    })
})


router.route("/displays/:name").get((req,res)=>{



    let name  = req.params.name;



    Sale.find({name :name}).then((sale)=>{



        res.json(sale)



    }).catch((err)=>{



        console.log(err);



    })

})





module.exports = router;