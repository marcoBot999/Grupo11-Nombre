const express = require('express');
const router = express.Router();
const productosController = require("../../controller/api/productosController")

router.get("/", productosController.list);

router.get("/:id", productosController.detail);

router.post("/", productosController.store);

router.put("/edit-product/:id", productosController.edit);

router.delete("/delete-product/:id", productosController.delete);

module.exports = router;