const express = require('express');
const router = express.Router();
const loginRegisterController=require("../controller/loginRegister.js")

router.get("/login",loginRegisterController.login);
router.post("/login",function(req,res){res.redirect("/")})
router.get("/register",loginRegisterController.register);
router.post("/register",function(req,res){res.redirect("/")})


module.exports = router;