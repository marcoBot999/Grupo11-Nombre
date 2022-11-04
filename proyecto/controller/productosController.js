const path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
            where:{
                id_product: req.params.id
            }
        })
		.then((resultado)=>{
			return res.render("product-detail",{ resultado })
		})

       
    },

    //Ingresar un producto//
    create: async function (req, res) {
        try{
            await db.ProductCategory.findAll()
        .then(function(categorias){
            res.render("creacion-de-producto-form",  {categorias:categorias})
        }) 
        }catch(error) {
            console.log(error);
        }
    },

    store: async function (req, res) {
        try{
            const productNew = {
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                id_product_category:req.body.category,
                img: "image-default.png"
            }
            if (req.file) {
                productNew.img = req.file.filename;
            }
            
            await db.Product.create(productNew)
            .then(function () {
                res.redirect("/");
            })

        }catch (error) {
            console.log(error);
        }
        
        
    },

    //Editar un producto//
    edit: (req,res)=>{
        // al descomentar hay un error

        // const {name,description,price,id_product_category} = req.body

        // db.Product.findByPk(req.params.id)
        // .then(producto=>{
        //     const productImg = producto.img
        //     db.Product.update({
        //         name,
        //         description,
        //         price,
        //         id_product_category,
        //         img = req.file ? req.file.filename : productImg
        //     },{
        //         where: req.params.id
        //     })
        //     .then(
        //         res.redirect("/productos/product-detail/" + req.params.id)
        //     )
        // })
    }
    ,
    update: async function (req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        try {

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
    
    
            let newData = db.Product.findAll()
            .then((resultado)=>{
                
                return res.render("index",{resultado})

            });
    
            db.Product.create(newData)
    
            const data = JSON.stringify(products, null, ' ');
            fs.writeFileSync(productsFilePath, data);
    
            res.redirect("/productos/product-detail/" + req.params.id);

        } catch (error) {
            console.log(error);
        }   
        
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