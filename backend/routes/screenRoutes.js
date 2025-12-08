const express = require("express");
const { manageScreen, getScreen } = require("../controllers/screenController.js");

const router = express.Router();

router.post("/manage", manageScreen);
router.get("/manage", getScreen);

module.exports = router;
