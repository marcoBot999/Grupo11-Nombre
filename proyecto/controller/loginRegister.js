const path = require("path");

const loginRegisterController = {
    //Mostrar formulario de login//
    login:(req,res)=>{
        res.render("login")
    }, 
    //Mostrar formulario de registro//
    register:(req,res)=>{
        res.render("register")
    }
}

module.exports = loginRegisterController