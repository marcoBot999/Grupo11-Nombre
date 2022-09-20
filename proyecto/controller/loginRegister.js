const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult} = require("express-validator")

const loginRegisterController = {
    //Mostrar formulario de login//
    login: (req, res) => {
        res.render("login")
    },

    //Loguearse//
    login2: function (req, res) {
        res.redirect("/")
    },

    //Mostrar formulario de registro//
    register: (req, res) => {
        res.render("register")
    },
    //Registrarse//
    register2: (req, res) => {

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
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
                img: "img_user_default.png"
            };


            if (req.file) {
                userNew.img = req.file.filename;
            }

            users.push(userNew);

            const data = JSON.stringify(users, null, ' ');
            fs.writeFileSync(usersFilePath, data);

            res.redirect("/");
        }else{
            res.render('register', { 
                errors: errors.array(),
                old: req.body 
            })
        }
        console.log(req.body);
        

    },
    perfil:(req,res)=>{
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        let usuario = users.find((p) => p.id == req.params.id);
        res.render("perfil", { user: usuario })
        
    }
}



module.exports = loginRegisterController