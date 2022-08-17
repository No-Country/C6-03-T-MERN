const express = require("express");
const router = express.Router();
const kanbanController = require("../apisController/kanbanController.js");

router.post("/", kanbanController.createKanban);
router.get("/list", kanbanController.listKanban);
router.get("/:id", kanbanController.findOneKanban);
router.put('/:id', kanbanController.editKanban);
router.delete('/:id', kanbanController.deleteKanban);


module.exports = router;