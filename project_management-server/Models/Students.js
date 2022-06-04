const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
	},
	Studentemail: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	Role: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	



});

module.exports = User = mongoose.model("students", StudentSchema);