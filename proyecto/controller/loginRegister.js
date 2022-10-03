const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const UserModel = require("../models/User.js")

const loginRegisterController = {

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
                img: "img_user_default.png"
            };


            if (req.file) {
                userNew.img = req.file.filename;
            }

            let usuarioDB = UserModel.findByField("email", req.body.email)
            //el usuario esta en la base de datos?
             if (usuarioDB) {
                res.render('register', {
                    errors: {
                        email:{
                            msg: "este email ya esta registrado"
                        }
                    },
                    old: req.body
                })
            }else{
                users.push(userNew);

            const data = JSON.stringify(users, null, ' ');
            fs.writeFileSync(usersFilePath, data);

            res.redirect("/user/login");
            }

            
        } else {
            res.render('register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
        console.log(req.body);


    },
    //Mostrar formulario de login//
    login: (req, res) => {
        
        res.render("login")
    },

    //Loguearse//
    processLogin: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            let userToLog = UserModel.findByField("email",req.body.email)
            if(userToLog){
                let isOkThePass = bcrypt.compareSync(req.body.password,userToLog.password)
                if (isOkThePass) {
                    delete userToLog.password
                    req.session.userLogged = userToLog
                    return res.redirect("perfil");
                }else{
                    return res.render("login",{
                        errors:{
                            email:{
                                msg: "las credenciales son invalidas"
                            }
                        }
                    })
                }
                
            }else{
                res.render("login",{
                    errors:{
                        email:{
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
        
    },
    
    perfil: (req, res) => {
        return res.render("perfil", {
            user: req.session.userLogged
        })
    },
    logout:(req,res)=>{
        req.session.destroy();
		return res.redirect('/')
    }
}


module.exports = loginRegisterController