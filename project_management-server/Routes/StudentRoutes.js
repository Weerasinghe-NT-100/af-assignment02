const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const { check } = require("express-validator");
const {getUsers,getUser ,deleteStudent , createStudent , updateStudent , registerStudents , authUser , loginUser} = require("../controllers/StudentController");


var jwtSecret = "sathmini";


router.post("/createStudent",createStudent);
router.get("/getAllUsers",getUsers);
router.get("/getUserById/:id",getUser);
router.delete("/deleteStudent/:id",deleteStudent);
router.patch("/updateStudent/:id",updateStudent);


router.post("/signup",
	[
		check("fullname", "Name is required").not().isEmpty(),
		check("Studentemail", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	registerStudents);

router.get("/auth", auth,authUser);

router.post(
	"/signin",
	[
		check("Studentemail", "Please include a valid email").isEmail(),
		check("password", "Password is required").exists(),
	],
	loginUser);


module.exports = router;