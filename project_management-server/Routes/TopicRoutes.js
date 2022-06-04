const express = require("express");
const router = express.Router();

const {AllTopic, EditTopicByID , createTopic  ,FindTopicById} = require("../Controllers/TopicController");


router.post("/createTopic",createTopic);
router.get("/AllTopic",AllTopic);
router.get("/FindTopicById/:id",FindTopicById);
router.patch("/EditTopicByID/:id",EditTopicByID);




module.exports = router;