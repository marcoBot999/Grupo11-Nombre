const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

const loginRegisterController = require("../controller/loginRegister.js");

//Validaciones
const validaciones = [
    body("firstname").notEmpty().withMessage("Debes agregar un nombre"),
    body("firstname").isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
    body("lastname").notEmpty().withMessage("Debes agregar un apellido"),
    body("lastname").isLength({ min: 2 }).withMessage("El apellido debe tener al menos 2 caracteres"),
    body("email").isEmail().withMessage("Debes ingresar un email"),
    body("address").notEmpty().withMessage("Debes agregar una dirección"),
    body("password").notEmpty().withMessage("Debes agregar una contraseña"),
    body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener mínimo 8 caracteres"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,).withMessage("La contraseña debe tener un número, una mayúscula y una minúscula "),
    body("confirmPassword").custom(async (confirmPassword, { req }) => {
        const password = req.body.password
        if (password !== confirmPassword) {
            throw new Error("Las contraseñas deben ser las mismas")
        }
    })
]

//Validaciones Login
const validacionesLog = [
    body("email").isEmail().withMessage("Debes ingresar un email"),
    body("password").notEmpty().withMessage("Debes agregar una contraseña"),
    body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener mínimo 8 caracteres"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,).withMessage("La contraseña debe tener un número, una mayúscula y una minúscula "),
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

//Para subir el archivo//
const upload = multer({ storage });

const guestMiddlware = require("../middlewares/guestMiddlware")
const authMiddlware = require("../middlewares/authMiddleware")

//Ingresar al login//
router.get("/login", guestMiddlware, loginRegisterController.login);
router.post("/login", validacionesLog, loginRegisterController.processLogin);


//Ingresar al registro//
router.get("/register", guestMiddlware, loginRegisterController.register);
//Procesar el registro//
router.post("/register", upload.single("img"), validaciones, loginRegisterController.processRegister);

//Mostrar perfil
router.get("/perfil/:id", authMiddlware, loginRegisterController.perfil);

//Cerrar sesión //video 2 horas --- 1:21:00 ---
router.get('/logout', loginRegisterController.logout);

//Editar el perfil
router.get('/edicion-perfil/:id', loginRegisterController.edit);
router.put('/edicion-perfil/:id', upload.single("img"), loginRegisterController.update);

//Eliminar el usuario//
router.delete("/delete/:id", loginRegisterController.delete);


module.exports = router;