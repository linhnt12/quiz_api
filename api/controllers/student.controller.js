const Student = require("../models/student.model");

const searchHelper = require("../../helpers/search");

// [GET] /api/students
module.exports.index = async (req, res) => {
  var find = {};

  // Search
  let objectSearch = searchHelper(req.query);

  if (req.query.keyword) {
    find = {
      $or: [{
        fullName: objectSearch.regex
      }, {
        studentId: objectSearch.regex
      }]
    }
  }
  // End Search

  const student = await Student.find(find);

  res.json({
    code: 200,
    student: student
  })
}

// [GET] /api/students/detail/:id
module.exports.detail = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Student.findOne({
      studentId: id
    })

    res.json({
      code: 200,
      student: student
    });
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!",
    });
  }
}