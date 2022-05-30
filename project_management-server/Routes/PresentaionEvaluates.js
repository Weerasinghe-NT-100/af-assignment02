const router=require("express").Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let PresentaionSchemas=require("../Models/PresentaionEvaluate.js")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'C:/Users/Asela/OneDrive/Documents/Research Project Management Tool/af-assignment02/research-project-management-tool/src/Docus');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});


let upload = multer({ storage});


http://localhost:8071/presentationScheme/add

router.route("/add").post(upload.single('Pmark'),async(req,res)=>{

    const Nevaluate=req.body.Nevaluate;
    const Pmark=req.file.filename;

    const newEvaluate=new PresentaionSchemas({
        
        Nevaluate,
        Pmark
    })

    newEvaluate.save().then(()=>{
        res.json("Marks are added");
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8071/presentationScheme

router.route("/").get((req,res)=>{
    PresentaionSchemas.find().then((PresentaionSchemas)=>{
        res.json(PresentaionSchemas)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:id").get(async(req,res)=>{
    const Evaluateid=req.params.id;
    const EvaluateScheme=await PresentaionSchemas.findById(Evaluateid)
    .then((marks)=>{
        res.status(200).send({status:"Movie found",marks})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message})
    })
})

module.exports=router;