const express = require("express");
const { manageScreen1Headlines, getScreen1Headlines } = require("../controllers/headlinesController.js");

const router = express.Router();

router.post("/manage", manageScreen1Headlines);
router.get("/manage", getScreen1Headlines);

module.exports = router;
