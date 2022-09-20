const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

const loginRegisterController = require("../controller/loginRegister.js");

//validaciones
const validaciones = [
    body("firstname").notEmpty().withMessage("debes agregar un nombre"),
    body("lastname").notEmpty().withMessage("debes agregar un apellido"),
    body("email").isEmail().withMessage("debes ingresar un email"),
    body("address").notEmpty().withMessage("debes agregar una dirección"),
    body("password").notEmpty().withMessage("debes agregar una contraseña"),
    body("password").isLength({min:8}).withMessage("la contraseña debe tener mínimo 8 caracteres"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,).withMessage("la contraseña debe tener un numero, una mayúscula y una minúscula "),
    body("confirmPassword").custom(async (confirmPassword, {req}) => {
        const password = req.body.password
        if(password !== confirmPassword){
          throw new Error("Las contraseñas deben ser las mismas")
        }
    })
     
]


var storage = multer.diskStorage({
    //ESTO ES DONDE SE VA A GUARDAR LA IMAGEN NUEVA AUTOMATICAMENTE
    destination: function (req, file, cb) {
        cb(null, "public/images/user-images");
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
router.post("/register", upload.single("img"), validaciones, loginRegisterController.register2);

router.get("/perfil", loginRegisterController.perfil);

module.exports = router;