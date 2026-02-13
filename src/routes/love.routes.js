const express = require("express");
const upload = require("../config/multer");
const { createLoveLetter } = require("../controllers/love.controller");

const router = express.Router();

router.post("/create", upload.single("photo"), createLoveLetter);

module.exports = router;
