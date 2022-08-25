const path = require("path");

const loginRegisterController = {
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register")
    }
}

module.exports = loginRegisterController