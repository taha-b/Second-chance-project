const router = require('express').Router();
const userController = require("../controllers/info.controller")

router.get("/:id", userController.getUserSkillById);
router.put("/:id", userController.updateUserSkill);


module.exports = router;
