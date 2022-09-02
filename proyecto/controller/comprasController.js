const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const comprasController = {
    compras:(req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("compras")
    },
    
    detail: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const producto = products.find((p) => p.id == req.params.id);
        res.render("product-detail", { p: producto});
    },


    
    creacion:(req,res) =>{
        res.render("creacion-de-producto")
    },
    edicion:(req,res) =>{
        res.render("edicion-de-producto")
    }
}

module.exports = comprasController