const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countriesController");


router.get("/", countriesController);

module.exports = router;
