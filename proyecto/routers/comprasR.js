const express = require('express');
const router = express.Router();
const comprasController = require("../controller/comprasController")
const multer = require("multer");

var storage = multer.diskStorage({
  //ESTO ES DONDE SE VA A GUARDAR LA IMAGEN NUEVA AUTOMATICAMENTE
  destination: function (req, file, cb) {
    cb(null, "/images");
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
router.get("/shopping-cart", comprasController.shoppingCart);

//Detalle de producto//
router.get("/product-detail/:id", comprasController.detail);

//Creación de producto//
router.get("/creacion-de-producto", comprasController.create);
router.post("/creacion-de-producto", upload.single("fotoProducto"), comprasController.store);

//Edición de producto//
router.get("/edicion-de-producto/:id", comprasController.edit);
router.put("/edicion-de-producto/:id", comprasController.update);

//Eliminar el producto//
router.delete("/delete/:id", comprasController.delete);

module.exports = router;