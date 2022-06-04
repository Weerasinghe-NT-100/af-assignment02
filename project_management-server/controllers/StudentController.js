const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require('../Models/Students');

var jwtSecret = "sathmini";



 const registerStudents = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, Studentemail, password , Role  } = req.body;

    
    if(!fullname || !Studentemail  || !password   )
    return res
    .status(400)
    .json({errorMessage : "plz fill"});


    try {
       
        let user = await User.findOne({ Studentemail });

        if (user) {
            res.status(400).json({ errors: [{ msg: "students already exists" }] });
        }
        user = new User({
            fullname,
            Studentemail,
            password,
            Role,
            
        });

        //Encrypt Password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token, Role: user.Role });
            
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};


const authUser =  async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
}


const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json([{ msg: "Invalid Credentials" }]);
    }

    const { Studentemail, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ Studentemail });

        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
            if (err) throw err;
            res.json({ token , user: user.fullname , Role: user.Role });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};



 const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                 
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const users = await User.findById(id);
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



 const createStudent = async (req, res) => {
    const users = req.body;

    const newuser = new User({ ...users, creator: req.userId })

    try {
        await newuser.save();

        res.status(201).json(newuser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { fullname, Studentemail, password , Role  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No   id: ${id}`);

    const updatedUser = { fullname, Studentemail, password , Role  , _id:id};

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}


 const deleteStudent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

module.exports ={getUsers,getUser ,deleteStudent , createStudent , updateStudent , registerStudents , authUser , loginUser};