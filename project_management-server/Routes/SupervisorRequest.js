const express = require("express");
const router = express.Router();

const {AllSupervisorRequest, SupervisorRequestByID , createSupervisorRequest  ,FindSupervisorRequestById} = require("../Controllers/SupervisorRoutes");


router.post("/createSupervisorRequest",createSupervisorRequest);
router.get("/AllSupervisorRequest",AllSupervisorRequest);
router.get("/FindSupervisorRequestById/:id",FindSupervisorRequestById);
router.patch("/SupervisorRequestByID/:id",SupervisorRequestByID);




module.exports = router;