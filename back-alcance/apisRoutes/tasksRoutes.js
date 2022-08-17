const express = require("express");
const router = express.Router();
const tasksController = require('../apisController/tasksController')

router.get('/', tasksController.listTask);
router.post('/', tasksController.createTask);
router.put('/:id', tasksController.editTask);
router.delete('/:id', tasksController.deleteTask);
router.get('/:id', tasksController.findOneTask)


module.exports = router;