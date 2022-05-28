const router=require("express").Router();
let StudentTopic=require("../Models/StudentTopic.js");

http://localhost:8071/studentTopic/add

router.route("/add").post(async(req,res)=>{

    const GroupId=req.body.GroupId;
    const GroupDetails=req.body.GroupDetails;
    const ResearchTopic=req.body.ResearchTopic;

    const newTopic=new StudentTopic({
         
        GroupId,
        GroupDetails,
        ResearchTopic

    })

    newTopic.save().then(()=>{
        res.json("Topic is added");
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8071/studentTopic

router.route("/").get((req,res)=>{
    StudentTopic.find().then((StudentTopic)=>{
        res.json(StudentTopic)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8071/studentTopic/delete/5fsadfsad54asdfsad

router.route("/delete/:id").delete(async(req,res)=>{

    let topicid=req.params.id;
    await StudentTopic.findByIdAndDelete(topicid)
    .then(()=>{
        res.status(200).send({status:"Topic deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete topic",error:err.message});
    })
})

module.exports=router;