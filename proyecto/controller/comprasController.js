const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const comprasController = {
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
        res.render("creacion-de-producto-form");
    },

    store: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
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
        fs.writeFileSync(productsFilePath, data);

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
            }
        });

        const data = JSON.stringify(products, null, ' ');
        fs.writeFileSync(productsFilePath, data);

        res.redirect("/compras/product-detail/" + req.params.id);
    },




    delete: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        products = products.filter((p) => p.id != req.params.id);
        let data = JSON.stringify(products, null, ' ');
        fs.writeFileSync(productsFilePath, data);
        res.redirect("/");
    }

}

module.exports = comprasController;