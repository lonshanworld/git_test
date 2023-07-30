
const express = require("express");
const router = express.Router();
const {getchatId} = require("../../controllers/chatcontroller");

const {protectAuth} = require("../../middleware/tokenauthmiddleware");

router.get("/",[protectAuth],getchatId);





module.exports = router;