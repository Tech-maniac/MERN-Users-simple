const express = require("express");

const {getUser, postUser,getHomepage} = require("../controllers/users");

const router = express.Router();

//create routes : 
router.route("/").get(getHomepage);
router.route("/displayUser").get(getUser);
router.route("/createUser").post(postUser);

module.exports = router;


