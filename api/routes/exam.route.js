const express = require("express");
const router = express.Router();

const controller = require("../controllers/exam.controller");

router.get("/", controller.index);

router.get("/statistics/:id", controller.statistics);

module.exports = router;