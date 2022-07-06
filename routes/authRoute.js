const express = require("express");
const router = express.Router();
const {
  registerValidation,
  logInValidation,
} = require("../middleware/fieldsValidation");
const tokenValidation = require("../middleware/authorization");
const {
  registerUserController,
  loginUserController,
  verifyUserController,
} = require("../controllers/authControllers");



router.post("/register", registerValidation, registerUserController);



router.post("/login", logInValidation, loginUserController);



router.get("/verify", tokenValidation, verifyUserController);

module.exports = router;
