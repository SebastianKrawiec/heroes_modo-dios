const express = require('express');
const router = express.Router();
const creditoController = require("../controller/creditosController")

router.get('/', creditoController.index);

module.exports = router;