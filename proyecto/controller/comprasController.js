const path = require("path");
const listaProductos = require("../data/productos.json")

const comprasController = {
    compras:(req,res)=>{
        res.render("compras")
    },
    detail: (req, res) => {
        const listaProductos = require("../data/productos.json")
        let producto = listaProductos.find((producto) => producto.id == req.params.prodId);
        res.render("product-detail", { producto: producto });
    },
    creacion:(req,res) =>{
        res.render("creacion-de-producto")
    },
    edicion:(req,res) =>{
        res.render("edicion-de-producto")
    }
}

module.exports = comprasController