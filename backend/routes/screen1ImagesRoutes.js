const express = require("express");
const { getScreen1Images, manageScreen1Images } = require("../controllers/screen1ImagesController.js");
const { dynamicMiddleware } = require("../middleware/uploadMiddleware.js");

const router = express.Router();

router.post("/manage", dynamicMiddleware, manageScreen1Images);
router.get("/manage", getScreen1Images);

module.exports = router;
