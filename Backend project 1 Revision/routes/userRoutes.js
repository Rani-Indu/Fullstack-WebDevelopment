const express = require("express")

// abhi just ek method export kiya hai controller se,we need to require it
// const {home} = require("../controllers/userController")
// const {home, createUser } = require("../controllers/userController")
// const {home, createUser, getUsers } = require("../controllers/userController")
const {home, createUser, getUsers, deleteUser} = require("../controllers/userController")



// routing ek special feature hai so humko ek router banana padega
// router bane ga express se , jaise express se app ban rahi thi, waise hi router bhi banta hai
const router = express.Router();
router.get("/", home)
router.post("/createuser", createUser)
// kuch send nahi karna hai so get request
router.get("/getUsers", getUsers)
router.delete("deleteUser/:id", deleteUser)

module.exports = router
// next app.js ke andar ish router ko le jao