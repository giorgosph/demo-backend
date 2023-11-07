const express = require("express");
const router = express.Router();

const sectionController = require("../controllers/sectionController");

router.get("/", sectionController.getAllContent);
router.get("/:id", sectionController.getContent);
router.get("/section/:abbr", sectionController.getContentBySection);

module.exports = router;