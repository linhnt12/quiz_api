const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  idExam: String,
  idStudent: String,
  timeCompleted: Date,
  result: Number,
  answersStudent: [
    {
      idQuestion: String,
      answer: Number
    }
  ]
}, {
  timestamps: true
})

const Result = mongoose.model('Result', resultSchema, "results");

module.exports = Result;