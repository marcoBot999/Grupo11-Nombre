const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let db=  require("../database/models")


const productosController = {
    //Mostrar el carro de compras//
    shoppingCart: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("carro-compras");
    },
    //Detalle de un producto//
    detail: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let producto = products.find((p) => p.id == req.params.id);
        res.render("product-detail", { p: producto });
    },

    //Ingresar un producto//
    create: (req, res) => {
        db.ProductCategory.findAll()
        .then(function(categorias){
            res.render("creacion-de-producto-form",  {categorias:ProductCategory})}) 
    },

    store: (req, res) => {
       /* const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const productNew = {
            id: Date.now(),
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            img: "image-default.png"
        };

        if (req.file) {
            productNew.img = req.file.filename;
        }


        products.push(productNew);

        const data = JSON.stringify(products, null, ' ');
        fs.writeFileSync(productsFilePath, data);*/
        db.Product.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            id_product_category:req.body.category,
        })

        res.redirect("/");
    },

    //Editar un producto//
    edit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const productoToEdit = products.find((p) => p.id == req.params.id);

        res.render("edicion-de-producto-form", { pToEdit: productoToEdit });

    },

    update: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        console.log(req.body);
        console.log(req.params.id);

        products.forEach((p) => {
            if (p.id == req.params.id) {
                p.name = req.body.name;
                p.price = req.body.price;
                p.discount = req.body.discount;
                p.description = req.body.description;
                console.log("//////////////////////////", req.file);
                if (req.file) {

                    p.img = req.file.filename;
                    //eliminar imagen existente cuando viene una imagen nueva, siempre que no sea la imagen por defecto
                }
            }
        });



        const data = JSON.stringify(products, null, ' ');
        fs.writeFileSync(productsFilePath, data);

        res.redirect("/productos/product-detail/" + req.params.id);
    },




    delete: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        products = products.filter((p) => p.id != req.params.id);
        let data = JSON.stringify(products, null, ' ');
        fs.writeFileSync(productsFilePath, data);
        res.redirect("/");
        //eliminar imagen existente cuando viene una imagen nueva, siempre que no sea la imagen por defecto
    }

}

module.exports = productosController;