const express = require('express');
const router = express.Router();
const comprasController=require("../controller/comprasController")


router.get("/compras",comprasController.compras);
router.get("/product-detail",comprasController.detail);


module.exports = router;