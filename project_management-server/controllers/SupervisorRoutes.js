

const mongoose = require('mongoose');
const Supervisor = require("../Models/Supervisor");


const AllSupervisorRequest = async (req, res) => { 
    try {
        const sup = await Supervisor.find();
                 
        res.status(200).json(sup);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const SupervisorRequestByID = async (req, res) => {
    const { id } = req.params;
    const {  Grp_ID, Grp_leaderItNUMBER , Grp_leaderemail,supervisor,status} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No   id: ${id}`);

    const updated = {Grp_ID, Grp_leaderItNUMBER , Grp_leaderemail,supervisor,status ,_id:id};

    await Supervisor.findByIdAndUpdate(id, updated, { new: true });

    res.json(updated);
}


const createSupervisorRequest = async (req, res) => {
    const sup = req.body;
    const newsup = new Supervisor({ ...sup, creator: req.userId })
    try {
        await newsup.save();

        res.status(201).json(newsup );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const FindSupervisorRequestById = async (req, res) => { 
    const { id } = req.params;

    try {
        const sup = await Supervisor.findById(id);
        
        res.status(200).json(sup);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={AllSupervisorRequest, SupervisorRequestByID , createSupervisorRequest  ,FindSupervisorRequestById};






