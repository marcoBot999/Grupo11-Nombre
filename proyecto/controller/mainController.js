const fs = require("fs")
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
	//Mostrar el index//
    index:(req,res)=>{
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
		const componentes = products.filter((p)=> p.category =="Componentes")
		const portatiles = products.filter((p)=> p.category =="Portatiles")
		const pcArmada = products.filter((p)=> p.category =="Pc Armadas")
		const perifericos = products.filter((p)=> p.category =="Perifericos")
		res.render("index",{
			productos: products,
			componentes:componentes, 
			portatiles:portatiles,
			pcArmada:pcArmada,
			perifericos:perifericos
		})
    },
	//Buscador//
    search: (req, res) => {

		let search = req.query.keywords;
		search = search.toLowerCase();
		
		const resultado = products.filter((p) => p.name.toLowerCase().includes(search));

		res.render("results", { productos: resultado, search: search })
	},
}

module.exports = mainController