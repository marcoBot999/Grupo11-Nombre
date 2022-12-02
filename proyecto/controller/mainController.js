const fs = require("fs")
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require("../database/models")

const mainController = {
	//Mostrar el index//
    index: async function(req,res){
		try {

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

			Promise.all([componentes,portatiles,pcArmadas,perifericos])
                return res.render("index", { componentes,portatiles,pcArmadas,perifericos });


        } catch (error) {
            console.log(error);
        }
		
		
	},
	//Buscador//
    search: (req, res) => {

		let search = req.query.keywords;
		search = search.toLowerCase();
		
		const resultado = products.filter((p) => p.name.toLowerCase().includes(search));

		res.render("results", { productos: resultado, search: search })
	}
}

module.exports = mainController