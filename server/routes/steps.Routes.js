const router = require('express').Router();
const stepsController = require("../controllers/steps.controller")

router.get("/", stepsController.getSteps);
router.post("/", stepsController.addStep);
router.put("/:id", stepsController.updateStep);
router.delete("/:id", stepsController.deleteStep);



module.exports = router;
