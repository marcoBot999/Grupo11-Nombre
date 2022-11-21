let db = require("../../database/models");
const { findAll } = require("../../models/userModel");


const productosController = {
    list: async function (req, res) {
            try {
                let productos = await db.Product.findAll();
    
                let categorias = await db.ProductCategory.findAll();
            
                let componentes = await db.Product.findAll({
                    where:{id_product_category:1}
                })

                let portatiles = await db.Product.findAll({
                    where:{id_product_category:2}
                })
                let pcArmadas = await db.Product.findAll({
                    where:{id_product_category:3}
                })
                let perifericos = await db.Product.findAll({
                    where:{id_product_category:4}
                })
                
                

                Promise.all([productos, categorias,componentes,portatiles,pcArmadas,perifericos])
                    return res.status(200).json({ 
                        total: productos.length,
                        data : productos, 
                        componentes:componentes.length,
                        portatiles: portatiles.length,
                        pcArmadas: pcArmadas.length,
                        perifericos: perifericos.length,
                        status:200
                    });
                
                    
                    
            } catch (error) {
                console.log(error);
            }
    },
    detail: (req, res) => {

        db.Product.findByPk(req.params.id,{ include: ["productsCategorys"]})
        .then((product) => {
            res.status(200).json({ 
                data : product,
                status:200
            });
        });
    },
    store:(req,res)=>{
        
        db.Product.create(req.body,{ include: ["productsCategorys"]})
        .then((product) => {
            res.status(200).json({ 
                data : product,
                status:200,
                created: "ok"
            });
        });
    },
    edit:()=>{

    },
    delete:()=>{

    }
}

module.exports = productosController;