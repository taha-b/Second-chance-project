const router = require('express').Router();
const signUpController = require("../controllers/users.controller");
const usersController = require('../controllers/users.controller')

router.post("/", signUpController.addNewUser);
router.get("/",usersController.getAlltUsers)
router.get("/:email",usersController.login)



module.exports = router;