const mongoose = require("mongoose");

const StudentGroupsSchema = new mongoose.Schema({
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
	phoneNumber:{
        type: String,
		required: true,
    },
    GroupID:{type:String , default:'pending'},
	



});

module.exports = StudentGrp = mongoose.model("studentsGroups", StudentGroupsSchema);