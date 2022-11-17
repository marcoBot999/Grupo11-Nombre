const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require("express-validator");
let db = require("../database/models")

const productosController = {
    //Mostrar el carro de compras//
    shoppingCart: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("carro-compras");
    },
    //Detalle de un producto//
    detail: (req, res) => {

        db.Product.findOne({
            where: {
                id_product: req.params.id
            }
        })
            .then((resultado) => {
                return res.render("product-detail", { resultado })
            })
    },

    //Ingresar un producto//
    create: async function (req, res) {
        try {
            await db.ProductCategory.findAll()
                .then(function (categorias) {
                    res.render("creacion-de-producto-form", { categorias: categorias })
                })
        } catch (error) {
            console.log(error);
        }
    },

    store: async function (req, res) {
        let errors = validationResult(req)

        try {
            if (errors.isEmpty()) {
                const productNew = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    id_product_category: req.body.category,
                    img: "image-default.png"
                }
                if (req.file) {
                    productNew.img = req.file.filename;
                }

                await db.Product.create(productNew)
                    .then(function () {
                        res.redirect("/");
                    })
            }
            else {
                res.render('creacion-de-producto-form', {
                    errors: errors.mapped(),
                    old: req.body
                })
            }


        } catch (error) {
            console.log(error);
        }
    },

    //Editar un producto//
    edit: async function (req, res) {
        try {
            let productEdit = db.Product.findByPk(req.params.id);

            let categorias = db.ProductCategory.findAll();

            Promise.all([productEdit, categorias])
                .then(function ([pToEdit, categorias]) {
                    return res.render("edicion-de-producto-form.ejs", { pToEdit, categorias });
                })
        } catch (error) {
            console.log(error);
        }
    }
    ,
    update: async function (req, res) {

        try {

            const pToEdit = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                id_product_category: req.body.category,

            }

            await db.Product.update(pToEdit,
                {
                    where: {
                        id_product: req.params.id
                    }
                })
                .then(function () {
                    res.redirect("/productos/product-detail/" + req.params.id);
                })

        } catch (error) {
            console.log(error);
        }
    },

    delete: async function (req, res) {
        try {
            await db.Product.destroy({
                where: {
                    id_product: req.params.id
                }
            })
            res.redirect("/")
        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = productosController;