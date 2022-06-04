const mongoose = require("mongoose");

const SupervisorSchema = new mongoose.Schema({

	Grp_ID: {
		type: String,
		required: true,
	},
	Grp_leaderItNUMBER: {
		type: String,
		required: true,
		unique: true,
	},
	Grp_leaderemail: {
		type: String,
		required: true,
	},
	supervisor:{
        type: String,
		required: true,
    },

   

    status:{type:String , default:'not yet added'},
	



});

module.exports = supervisor  = mongoose.model("Supervisor", SupervisorSchema);