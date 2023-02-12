const router = require('express').Router();
const itemController = require("../controllers/skills.controller");

router.get("/", itemController.selectAll);
router.get("/relation/:id", itemController.selectAllWithRelation);
router.get("/:id", itemController.selectOne);
router.post("/", itemController.addSkill);
router.put("/:id", itemController.updateSkill);
router.delete("/:id", itemController.deleteSkill);


module.exports = router;
