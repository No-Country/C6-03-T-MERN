const express = require("express");
const router = express.Router();
const projectsController = require("../apisController/projectsController.js");
const kanbanController = require("../apisController/kanbanController");

router.get("/list", projectsController.listProject);
router.post("/create", projectsController.createProject);
router.get("/:id", projectsController.findOneProject);
router.put('/:id', projectsController.editProject);
router.delete('/:id', projectsController.deleteProject);
router.post("/:id", kanbanController.createKanban)

module.exports = router;