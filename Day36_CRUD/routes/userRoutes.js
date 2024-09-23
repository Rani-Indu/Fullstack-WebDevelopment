const express = require("express");

// const {home} = require("../controllers/userController.js")
// const {home, createUser} = require("../controllers/userController")
// const {home, createUser, getUsers} = require("../controllers/userController")
// const {home, createUser, getUsers, deleteUser} = require("../controllers/userController")
const {home, createUser, getUsers, deleteUser, editUser} = require("../controllers/userController")

const router = express.Router()
router.get('/', home)
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.delete('/deleteUser/:id', deleteUser)
router.put('/editUser/:id', editUser)

module.exports = router;

// const userRoutes = require('./router/userRoutes.js')



// difference between .put and .patch