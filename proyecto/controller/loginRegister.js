const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
let db = require("../database/models");


const loginRegisterController = {

    //Mostrar formulario de registro//
    register: async function (req, res) {
        try {
            res.render("register")
        } catch (error) {
            console.log(error);
        }
    },

    //Procesar el registro//
    processRegister: async function (req, res) {
        let db = require("../database/models")
        let errors = validationResult(req)
        try {
            if (errors.isEmpty()) {
                let userNew = {
                    id_user: Date.now(),
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    birthday: req.body.birthday,
                    address: req.body.address,
                    password: bcrypt.hashSync(req.body.password, 10),
                    img: "img_user_default.png",
                    id_type_user: req.body.type
                };

                if (req.file) {
                    userNew.img = req.file.filename;
                }

                let encontrarEmail = await db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                })

                if (encontrarEmail) {
                    res.render('register', {
                        errors: {
                            email: {
                                msg: "Este email ya esta registrado"
                            }
                        },
                        old: req.body
                    })
                } else {

                    await db.User.create(userNew);

                    res.redirect("/user/login");
                }


            } else {
                res.render('register', {
                    errors: errors.mapped(),
                    old: req.body
                })
            }

        } catch (error) {
            console.log(error);
        }
    },

    //Mostrar formulario de login//
    login: async function (req, res) {
        try {

            res.render("login")
        } catch (error) {
            console.log(error);
        }

    },

    //Loguearse//
    processLogin: async function (req, res) {
        let errors = validationResult(req)
        try {
            if (errors.isEmpty()) {

                let userToLog = await db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                })


                if (userToLog) {

                    let isOkThePass = bcrypt.compareSync(req.body.password, userToLog.password)


                    if (isOkThePass) {
                        delete userToLog.password;
                        req.session.userLogged = userToLog;
                        if (req.body.recordarme) {
                            res.cookie('recordarEmail', req.body.email, { maxAge: 90000 })
                        }
                        return res.redirect("perfil/" + userToLog.id_user);
                    } else {
                        return res.render("login", {
                            errors: {
                                email: {
                                    msg: "Las credenciales son inválidas"
                                }
                            }
                        })
                    }
                } else {
                    res.render("login", {
                        errors: {
                            email: {
                                msg: "Este email no está registrado"
                            }
                        }
                    })
                }
            } else {
                res.render('login', {
                    errors: errors.mapped(),
                    old: req.body
                })
            }

        } catch (error) {
            console.log(error);
        }
    },
    perfil: (req, res) => {
        db.User.findOne({
            where: {
                id_user: req.params.id
            }
        })
            .then((user) => {
                return res.render("perfil", { user })
            })

    },
    logout: (req, res) => {
        res.clearCookie('recordarEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    edit: async function (req, res) {
        try {
            let userEdit = db.User.findByPk(req.params.id);

            let tipos = db.TypeUser.findAll();

            Promise.all([userEdit, tipos])
                .then(function ([userToEdit, tipos]) {
                    return res.render("edicion-perfil.ejs", { userToEdit, tipos });
                })
        } catch (error) {
            console.log(error);
        }
    },

    update: async function (req, res) {

        try {
            const userEdit = {
                id_user: req.params.id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                birthday: req.body.birthday,
                address: req.body.address,
                id_type_user: req.body.type,
            }

            if (req.file) {
                userEdit.img = req.file.filename;
            }

            if (req.password) {
                userEdit.password = req.file.password;
            }

            await db.User.update(userEdit,
                {
                    where: {
                        id_user: req.params.id
                    }
                })
            delete userEdit.password;
            req.session.userLogged = userEdit;
            res.redirect("/user/perfil/" + req.params.id);


        } catch (error) {
            console.log(error);
        }
    },

    delete: async function (req, res) {
        try {
            await db.User.destroy({
                where: {
                    id_user: req.params.id
                }
            })
            res.clearCookie('recordarEmail');
            req.session.destroy();
            res.redirect("/")
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = loginRegisterController