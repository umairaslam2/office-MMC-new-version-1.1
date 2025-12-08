const express = require("express");
const { getScreen3Images, manageScreen3Images } = require("../controllers/screen3ImagesController.js");
const { dynamicMiddleware } = require("../middleware/uploadMiddleware.js");

const router = express.Router();

router.post("/manage", dynamicMiddleware, manageScreen3Images);
router.get("/manage", getScreen3Images);

module.exports = router;
