const Exam = require("../models/exam.model");

const searchHelper = require("../../helpers/search");

// [GET] /api/exams
module.exports.index = async (req, res) => {
  const find = {};

  // Search by Title
  let objectSearch = searchHelper(req.query);

  if (req.query.keyword) {
    find.title = objectSearch.regex;
  }
  // End search by Title

  // Search by Status
  if (req.query.status) {
    find.status = req.query.status;
  }
  // End search by Status

  // Search by Date
  if (req.query.startDate && req.query.endDate) {
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate + 'T23:59:59.999Z');

    find.timeStart = {
      $gte: startDate,
      $lte: endDate
    }
  }
  // Search by Date

  const exams = await Exam.find(find).select("-questions");

  res.json({
    code: 200,
    exams: exams
  })
}

// [GET] /api/exams/statistics/:id
module.exports.statistics = async (req, res) => {
  try {
    const id = req.params.id;

    const exam = await Exam.findOne({
      _id: id
    }).select("-questions");
    
    const students = exam.students;
    const average = ((students.reduce((sum, item) => sum + item.result, 0))/students.length).toFixed(2);

    res.json({
      code: 200,
      exam: exam,
      studentsCount: students.length,
      average: average
    })

  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!"
    })
  }
}