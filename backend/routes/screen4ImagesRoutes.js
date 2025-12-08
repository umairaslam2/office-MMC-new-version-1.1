const express = require("express");
const { getScreen4Images, manageScreen4Images } = require("../controllers/screen4ImagesController.js");
const { dynamicMiddleware } = require("../middleware/uploadMiddleware.js");

const router = express.Router();

router.post("/manage", dynamicMiddleware, manageScreen4Images);
router.get("/manage", getScreen4Images);

module.exports = router;
