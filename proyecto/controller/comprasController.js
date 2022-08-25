const path = require("path");

const comprasController = {
    compras:(req,res)=>{
        res.render("compras")
    },
    detail:(req,res)=>{
        res.render("product-detail")
    }
}

module.exports = comprasController