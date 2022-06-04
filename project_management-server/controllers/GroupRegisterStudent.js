

const mongoose = require('mongoose');
const StudentGroup = require("../Models/StudentGroup");


const AllStudentGroup = async (req, res) => { 
    try {
        const groups = await StudentGroup.find();
                 
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const EditGroupsByID = async (req, res) => {
    const { id } = req.params;
    const {  LeaderItnumber, Leaderemail , GroupMemberITnumbers,phoneNumber,GroupID} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No   id: ${id}`);

    const updated = {LeaderItnumber, Leaderemail , GroupMemberITnumbers,phoneNumber,GroupID ,_id:id};

    await StudentGroup.findByIdAndUpdate(id, updated, { new: true });

    res.json(updated);
}


const createStudentGroup = async (req, res) => {
    const groups = req.body;
    const newGroups = new StudentGroup({ ...groups, creator: req.userId })
    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const FindGroupsById = async (req, res) => { 
    const { id } = req.params;

    try {
        const groups = await StudentGroup.findById(id);
        
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={AllStudentGroup, EditGroupsByID , createStudentGroup  ,FindGroupsById};








