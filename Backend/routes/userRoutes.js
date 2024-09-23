const express = require("express");
// const{home} = require("../controllers/userController.js")
// const{home, createUser} = require("../controllers/userController.js")
// const{home, createUser, getUser} = require("../controllers/userController.js")
// const{home, createUser, getUser, deleteUser} = require("../controllers/userController.js")
const{home, createUser, getUser, deleteUser,editUser } = require("../controllers/userController.js")


const router = express.Router();

router.get("/", home)
router.get("/getUser", getUser)
router.post("/createUser", createUser)
router.delete("/deleteUser/:id", deleteUser)
router.put("/editUser/:id", editUser)
module.exports = router;
