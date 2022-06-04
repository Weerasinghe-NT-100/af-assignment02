const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({

	LeaderItnumber: {
		type: String,
		required: true,
	},
	Leaderemail: {
		type: String,
		required: true,
		unique: true,
	},
	GroupMemberITnumbers: {
		type: String,
		required: true,
	},
	Topic:{
        type: String,
		required: true,
    },

    TopicFeild:{
        type: String,
		required: true,
    },

    status:{type:String , default:'not yet approved'},
	



});

module.exports = StudentGrp = mongoose.model("Topic", TopicSchema);