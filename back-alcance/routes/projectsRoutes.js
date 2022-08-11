const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectsController.js");

router.get("/list", projectsController.listProject);
router.post("/create", projectsController.createProject);
router.get("/:id/detail", projectsController.findOneProject);
router.put('/:id', projectsController.editProject);
router.delete('/:id', projectsController.deleteProject);

module.exports = router;