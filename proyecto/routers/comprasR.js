const express = require('express');
const router = express.Router();
const comprasController=require("../controller/comprasController")


router.get("/compras",comprasController.compras);
router.get("/product-detail",comprasController.detail);
router.get("/creacion-de-producto",comprasController.creacion)
router.get("/edicion-de-producto",comprasController.edicion)


module.exports = router;