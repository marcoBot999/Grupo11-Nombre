const express = require('express');
const router = express.Router();
const comprasController=require("../controller/comprasController")

router.get("/product-detail",comprasController.detail);
router.get("/compras",comprasController.compras);


module.exports = router;