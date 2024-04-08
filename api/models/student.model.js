const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	fullName: String,
	studentId: String,
	dob: Date,
	exams: [{
		idExam: String,
		timeCompleted: Date,
		result: Number
	}]
})

const Student = mongoose.model('Student', studentSchema, "students");

module.exports = Student;