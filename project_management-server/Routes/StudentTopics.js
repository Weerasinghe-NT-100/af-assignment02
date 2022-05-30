const router=require("express").Router();
const nodemailer = require("nodemailer");
let StudentTopic=require("../Models/StudentTopic.js");

http://localhost:8071/studentTopic/add

router.route("/add").post(async(req,res)=>{

    const GroupId=req.body.GroupId;
    const LeaderEmail=req.body.LeaderEmail;
    const GroupDetails=req.body.GroupDetails;
    const ResearchTopic=req.body.ResearchTopic;

    const newTopic=new StudentTopic({
         
        GroupId,
        LeaderEmail,
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

router.route("/sendemail/:email").get(async(req,res)=>{

    const {email}=req.params;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thathyaniweerasinghe@gmail.com',
          pass: 'anucdexfymdzcarb'
        }
      });

      StudentTopic.findOne({ LeaderEmail: email }).then(newStaff => {
        if(newStaff){
           var mailOptions = {
        from: 'thathyaniweerasinghe@gmail.com',
        to: `${email}`,
        subject: 'Confirming that the research topic has been accepted.',
        text: 'I, as the supervisor, would like to inform you that I have accepted your proposed title for the 4th year project reserach.Congrats on your work going forward.Thank you.Kind Regards,Weerasinghe N.T',
        html:'<p>I, as the supervisor, would like to inform you that I have accepted your proposed title for the 4th year project reserach.</p><b>Congrats on your work going forward.</b><p>Thank you</p><p>Kind Regards,</p><p>Weerasinghe N.T</p>'
      };
       
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send({status:"Email is sent"});
        }
      });     
        }
        else{
            res.send("Email has a error");
        }
    })
       
     
       

})

module.exports=router;