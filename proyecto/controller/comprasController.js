const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const comprasController = {
    //Mostrar los productos//
    compras:(req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("compras")
    },
     //Detalle de un producto//
    detail: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const producto = products.find((p) => p.id == req.params.id);
        res.render("product-detail", { p: producto});
    },


     //Ingresar un producto//
    creacion:(req,res) =>{
        res.render("creacion-de-producto")
        
    },

    store: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        console.log(req.file);

        console.log(req.body);
        res.redirect("creacion-de-producto")

    },

    //Editar un producto//
    edicion:(req,res) =>{
        res.render("edicion-de-producto")
    }

}

module.exports = comprasController