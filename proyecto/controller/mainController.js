const path = require("path");

const mainController = {
    index:(req,res)=>{
        res.render("index")
    },
    compras:(req,res)=>{
        res.render("compras")
    }
}

module.exports = mainController