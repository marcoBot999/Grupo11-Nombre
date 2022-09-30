const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const loginRegisterController = {
    //Mostrar formulario de login//
    login: (req, res) => {
        res.render("login")
    },

    //Loguearse//
    processLogin: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

            //const userNew = {
            //id: Date.now(),

            //email: req.body.email,
            //  password: req.body.password,
            // };

            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users[i].password)); {
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [
                        { msg: 'Credenciales inválidas' }
                    ]
                });
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            res.redirect("/");

        } else {
            res.render('login', {
                errors: errors.mapped(),
                old: req.body
            })
        }

        //res.redirect("/")
    },

    //Mostrar formulario de registro//
    register: (req, res) => {
        res.render("register")
    },
    //Procesar el registro//
    processRegister: (req, res) => {

        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

            const userNew = {
                id: Date.now(),
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                birthday: req.body.birthday,
                address: req.body.address,
                password: bcrypt.hashSync(req.body.password, 10),
                confirmPassword: bcrypt.hashSync(req.body.confirmPassword, password),
                img: "img_user_default.png"
            };


            if (req.file) {
                userNew.img = req.file.filename;
            }

            users.push(userNew);

            const data = JSON.stringify(users, null, ' ');
            fs.writeFileSync(usersFilePath, data);

            res.redirect("/");
        } else {
            res.render('register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
        console.log(req.body);


    },
    perfil: (req, res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        let usuario = users.find((p) => p.id == req.params.id);
        res.render("perfil", { user: usuario })

    }
}



module.exports = loginRegisterController