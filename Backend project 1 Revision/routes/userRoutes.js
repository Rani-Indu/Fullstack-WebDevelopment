const express = require("express")

// abhi just ek method export kiya hai controller se,we need to require it
// const {home} = require("../controllers/userController")
const {home, createUser } = require("../controllers/userController")



// routing ek special feature hai so humko ek router banana padega
// router bane ga express se , jaise express se app ban rahi thi, waise hi router bhi banta hai
const router = express.Router();
router.get("/", home)
router.post("/createuser", createUser)

module.exports = router
// next app.js ke andar ish router ko le jao