const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const products = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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

        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        console.log("//////////")
        console.log(req.body)
        console.log("//////////")
        const userNew = {
            id: Date.now(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            birthday: req.body.birthday,
            address: req.body.address,
            //password: req.body.password,
            img: "img_user_default.png"
        };

        if (req.file) {
            userNew.img = req.file.filename;
        }

        users.push(userNew);

        const data = JSON.stringify(users, null, ' ');
        fs.writeFileSync(usersFilePath, data);

        res.redirect("/");


    }
}



module.exports = loginRegisterController