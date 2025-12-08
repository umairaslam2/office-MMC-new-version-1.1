const express = require("express");
const { addOrEditFaculty, deleteFaculty, getAllFaculty } = require("../controllers/facultyController.js");

const router = express.Router();

router.post("/add", addOrEditFaculty);
router.get("/get", getAllFaculty);
router.delete("/:id", deleteFaculty);

module.exports = router;
