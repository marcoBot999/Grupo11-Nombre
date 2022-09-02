const express = require('express');
const router = express.Router();
const comprasController=require("../controller/comprasController")

//Ingresar al carro de compras//
router.get("/",comprasController.compras);

//Ingresar al datelle de producto//
router.get("/product-detail/:id", comprasController.detail);

//Creación de producto//
router.get("/creacion-de-producto",comprasController.creacion)
router.post("/compras/create",comprasController.store)

//Edición de producto//
router.get("/edicion-de-producto",comprasController.edicion)


module.exports = router;