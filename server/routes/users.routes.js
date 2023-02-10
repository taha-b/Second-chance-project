const router = require('express').Router();
const signUpController = require("../controllers/users.controller");
const usersController = require('../controllers/users.controller')

router.post("/", signUpController.addNewUser);
router.get("/",usersController.getAlltUsers)


module.exports = router;