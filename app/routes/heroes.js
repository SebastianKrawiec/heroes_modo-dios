const express = require("express");
const router = express.Router();
const heroesController = require("../controller/heroesController")

router.get("/", heroesController.index);
router.get("(/detalle/:id)", heroesController.index);
router.get("(/bio/:id/:ok?)", heroesController.bios);
module.exports = router;