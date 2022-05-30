const router=require("express").Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let MarkingScheme=require("../Models/MarkingScheme.js")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'C:/Users/Asela/OneDrive/Documents/Research Project Management Tool/af-assignment02/research-project-management-tool/src/Docus');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});


let upload = multer({ storage});


http://localhost:8071/markingScheme/add

router.route("/add").post(upload.single('markingPaper'),async(req,res)=>{

    const EvaluationDocumentName=req.body.EvaluationDocumentName;
    const markingPaper=req.file.filename;

    const newMarkingScheme=new MarkingScheme({
         
        EvaluationDocumentName,
        markingPaper

    })

    newMarkingScheme.save().then(()=>{
        res.json("Topic is added");
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8071/markingScheme

router.route("/").get((req,res)=>{
    MarkingScheme.find().then((MarkingScheme)=>{
        res.json(MarkingScheme)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:id").get(async(req,res)=>{
    const MarkingSchemeid=req.params.id;
    const Markingscheme=await MarkingScheme.findById(MarkingSchemeid)
    .then((marking)=>{
        res.status(200).send({status:"Movie found",marking})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message})
    })
})

module.exports=router;