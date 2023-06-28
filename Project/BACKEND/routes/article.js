
const router = require("express").Router();
let Article = require("../models/Article");

//Insert

router.route("/add").post((req,res)=>{
 
    const AID = req.body.AID;
    const category = req.body.category;
    const name = req.body.name;
    const description = req.body.description;
    const status = req.body.status;
    const EID = req.body.EID;
    const stars = req.body.stars;

    const newArticle = new Article({
       AID,
       category,
       name,
       description,
       status,
       EID,
       stars
    })

    newArticle.save().then(()=>{
        res.json("Article Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//Read

router.route("/").get((req,res)=>{

    Article.find().then((articles)=>{
          res.json(articles)
    }).catch((err)=>{
         console.log(err)
    })
})

//Update

router.route("/update/:artid").put(async(req,res) =>{
    let artId = req.params.artid;
    const {AID, category, name, description, status, EID,stars} = req.body;

    const updateArticle = {
       AID,
       category,
       name,
       description,   
       status,
       EID,
       stars
    }

    const update = await Article.findByIdAndUpdate(artId, updateArticle)
    .then(() => {
        res.status(200).send({status: "Article updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


//Delete

router.route("/delete/:artid").delete(async(req,res) =>{
    let artId = req.params.artid;
    await Article.findByIdAndDelete(artId)
    .then(() => {
     res.status(200).send({status: "Article deleted"});   
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete article", error: err.message});
    })
})

//Read one article data


router.route("/get/:artid").get(async(req,res) =>{
    let artId = req.params.artid;
    const art = await Article.findById(artId)
    .then((article) => {
     res.status(200).send({status: "Article fetched", article})   
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get article", error: err.message});
    })

    
})

router.route("/displays/:AID").get((req,res)=>{

    let AID  = req.params.AID;

    Article.find({AID :AID}).then((article)=>{

        res.json(article)

    }).catch((err)=>{

        console.log(err);

    })
})


module.exports = router;

