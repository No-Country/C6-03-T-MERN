const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");

router.get("/", usersController.loginView);
router.post("/", usersController.userLogin);
router.get("/register", usersController.registerView);
router.post("/register", usersController.userRegister);
router.get("/list", usersController.userList);
router.get("/:id/detail", usersController.findOneUser);
router.put('/:id', usersController.userEdit);
router.delete('/:id', usersController.userDelete);


module.exports = router;
