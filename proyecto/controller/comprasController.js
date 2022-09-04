const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const comprasController = {
    //Mostrar los productos//
    compras: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("compras")
    },
    //Detalle de un producto//
    detail: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const producto = products.find((p) => p.id == req.params.id);
        res.render("product-detail", { p: producto });
    },


    //Ingresar un producto//
    creacion: (req, res) => {
        res.render("creacion-de-producto")

    },

    store: (req, res) => {

        const productNew = {
            id: Date.now(),
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            img: "image-default.png"
        };

        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        products.push(productNew);

        const data = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, data);

        res.redirect("creacion-de-producto")
    },

    //Editar un producto//
    edicion: (req, res) => {
        res.render("edicion-de-producto")
    }

}

module.exports = comprasController