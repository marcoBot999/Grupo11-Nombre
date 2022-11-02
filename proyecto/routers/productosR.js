const express = require('express');
const router = express.Router();
const productosController = require("../controller/productosController")
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  //ESTO ES DONDE SE VA A GUARDAR LA IMAGEN NUEVA AUTOMATICAMENTE
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },

  //CONFIGURAMOS EL NOMBRE DE COMO SE VA A GUARDAR
  filename: function (req, file, cb) {
    console.log({ file });

    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});


const upload = multer({ storage });

//Carro de compras//
router.get("/shopping-cart", productosController.shoppingCart);

//Detalle de producto//
router.get("/product-detail/:id", productosController.detail);

//Creación de producto//
router.get("/creacion-de-producto", productosController.create);
router.post("/creacion-de-producto", upload.single("img"), productosController.store);

//Edición de producto//
router.get("/edicion-de-producto/:id", productosController.edit);
router.put("/edicion-de-producto/:id", upload.single("img"), productosController.update);

//Eliminar el producto//
router.delete("/delete/:id", productosController.delete);

module.exports = router;