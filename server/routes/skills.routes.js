const router = require('express').Router();
const itemController = require("../controllers/skills.controller");

router.get("/relation", itemController.selectAllWithRelation);
router.get("/", itemController.selectAll);
router.get("/:id", itemController.selectOne);
router.post("/", itemController.addSkill);
router.put("/:id", itemController.updateSkill);
router.delete("/:id", itemController.deleteSkill);


module.exports = router;
