const studentRoutes = require("./student.route");
const examRoutes = require("./exam.route");
const reusultRoutes = require("./result.route");

module.exports = (app) => {

  app.use("/api/students", studentRoutes);

  app.use("/api/exams", examRoutes);

  app.use("/api/results", reusultRoutes);
}