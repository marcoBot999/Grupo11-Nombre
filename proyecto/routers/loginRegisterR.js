const express = require('express');
const router = express.Router();
const loginRegisterController=require("../controller/loginRegister.js")

router.get("/login",loginRegisterController.login);
router.get("/register",loginRegisterController.register);


module.exports = router;