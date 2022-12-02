const express = require('express');
const router = express.Router();
const productosController = require("../../controller/api/productosController")

router.get("/", productosController.list);

router.get("/categorias", productosController.category);

router.post("/", productosController.store);

router.get("/:id", productosController.detail);

router.put("/edit-product/:id", productosController.edit);

router.delete("/delete-product/:id", productosController.delete);



module.exports = router;