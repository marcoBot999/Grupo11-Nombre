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

//Ingresar al carro de compras//
router.get("/", comprasController.compras);

//Ingresar al datelle de producto//
router.get("/product-detail/:id", comprasController.detail);

//Creación de producto//
router.get("/creacion-de-producto", comprasController.creacion)
router.post("/creacion-de-producto", upload.single("fotoProducto"), comprasController.store)

//Edición de producto//
router.get("/edicion-de-producto", comprasController.edicion)


module.exports = router;