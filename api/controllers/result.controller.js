const Result = require("../models/result.model");
const Student = require("../models/student.model");
const Exam = require("../models/exam.model");

// [GET] /api/students/detail/:id
module.exports.index = async (req, res) => {
  const results = await Result.find();

  res.json({
    code: 200,
    results: results,
  });
}

// [GET] /api/students/detail/:id
module.exports.detail = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Result.findOne({
      _id: id
    })

    const idStudent = result.idStudent;
    const idExam = result.idExam;

    const student = await Student.findOne({
      studentId: idStudent
    }).select("-exams");

    const exam = await Exam.findOne({
      _id: idExam
    }).select("questions");

    res.json({
      code: 200,
      student: student,
      exam: exam,
      result: result,
    });
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!",
    });
  }
}