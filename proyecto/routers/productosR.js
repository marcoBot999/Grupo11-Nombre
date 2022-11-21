const express = require('express');
const router = express.Router();
const productosController = require("../controller/productosController")
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

//Validaciones
const validacionesProd = [
  body("name").notEmpty().withMessage("Debes agregar un nombre para el producto"),
  body("name").isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres"),
  body("description").notEmpty().withMessage("Debes agregar una descripción"),
  body("description").isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),
]

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
router.post("/creacion-de-producto", upload.single("img"), validacionesProd, productosController.store);

//Edición de producto//
router.get("/edicion-de-producto/:id", productosController.edit);
router.put("/edicion-de-producto/:id", upload.single("img"), productosController.update);

//Eliminar el producto//
router.delete("/delete/:id", productosController.delete);

module.exports = router;