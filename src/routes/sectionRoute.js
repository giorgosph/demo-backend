const express = require("express");
const router = express.Router();

const sectionController = require("../controllers/sectionController");

router.get("/", sectionController.getContent);

module.exports = router;