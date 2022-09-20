const express = require('express');
const router = express.Router();
const loginRegisterController = require("../controller/loginRegister.js");
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

//Ingresar al login//
router.get("/login", loginRegisterController.login);
router.post("/login", loginRegisterController.login2);


//Ingresar al registro//
router.get("/register", loginRegisterController.register);
router.post("/register", upload.single("img"), loginRegisterController.register2);


module.exports = router;