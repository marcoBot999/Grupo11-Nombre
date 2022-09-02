const express = require('express');
const router = express.Router();
const loginRegisterController=require("../controller/loginRegister.js")

//Ingresar al login//
router.get("/login",loginRegisterController.login);
router.post("/login",function(req,res){res.redirect("/")})

//Ingresar al registro//
router.get("/register",loginRegisterController.register);
router.post("/register",function(req,res){res.redirect("/")})


module.exports = router;