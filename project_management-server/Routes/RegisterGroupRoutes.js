const express = require("express");
const router = express.Router();

const {AllStudentGroup, EditGroupsByID , createStudentGroup  ,FindGroupsById} = require("../Controllers/GroupRegisterStudent");


router.post("/createStudentGroup",createStudentGroup);
router.get("/AllStudentGroup",AllStudentGroup);
router.get("/FindGroupsById/:id",FindGroupsById);
router.patch("/EditGroupsByID/:id",EditGroupsByID);




module.exports = router;