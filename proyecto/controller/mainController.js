const fs = require("fs")
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require("../database/models")

const mainController = {
	//Mostrar el index//
    index:(req,res)=>{
		
		db.Product.findAll()
		.then((resultado)=>{
			return res.render("index",{resultado})
		})
		
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