const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");

router.post("/", usersController.loginProcess);
router.post("/register", usersController.registerProcess);
router.get("/list", usersController.userList);
router.get("/:id/detail", usersController.findOneUser);
router.put('/:id', usersController.userEdit);
router.delete('/:id', usersController.userDelete);


module.exports = router;
