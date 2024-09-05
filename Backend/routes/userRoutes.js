const express = require("express");
// const{home} = require("../controllers/userController.js")
// const{home, createUser} = require("../controllers/userController.js")
const{home, createUser, getUser} = require("../controllers/userController.js")


const router = express.Router();
router.get("/", home)
router.get("/getUser", getUser)
router.post("/createUser", createUser)
module.exports = router;
