

const mongoose = require('mongoose');
const TopicRegister = require("../Models/TopicRegister");


const AllTopic = async (req, res) => { 
    try {
        const groups = await TopicRegister.find();
                 
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const EditTopicByID = async (req, res) => {
    const { id } = req.params;
    const {  LeaderItnumber, Leaderemail , GroupMemberITnumbers,Topic,TopicFeild,status} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No   id: ${id}`);

    const updated = {LeaderItnumber, Leaderemail , GroupMemberITnumbers,Topic,TopicFeild,status ,_id:id};

    await TopicRegister.findByIdAndUpdate(id, updated, { new: true });

    res.json(updated);
}


const createTopic = async (req, res) => {
    const groups = req.body;
    const newGroups = new TopicRegister({ ...groups, creator: req.userId })
    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const FindTopicById = async (req, res) => { 
    const { id } = req.params;

    try {
        const groups = await TopicRegister.findById(id);
        
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={AllTopic, EditTopicByID , createTopic  ,FindTopicById};








