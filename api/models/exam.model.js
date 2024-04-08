const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: String,
  students: [
    {
      studentId: String, 
      timeCompleted: Date,
      result: Number
    }
  ],
  status: String, 
  timeStart: Date, 
  timeFinish: Date,
  questions: [ 
    {
      idQuestion: String, 
      titleQuestion: String,
      answers: Array, 
      correctAnswer: Number, 
      explaination: String, 
    }
  ]

}, {
  timestamps: true
})

const Exam = mongoose.model('Exam', examSchema, "exams");

module.exports = Exam;