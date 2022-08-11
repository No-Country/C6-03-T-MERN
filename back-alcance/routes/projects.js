const express = require("express");
const router = express.Router();
const controller = require("../controllers/projects.js");

router.get("/create", controller.create);
router.get("/list", controller.list);

module.exports = router;