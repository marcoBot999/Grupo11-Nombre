let fs = require("fs")
let db = require("../database/models")

const User ={
    fileName: "./data/usuarios.json",
    //get data
    getData:function () {
        db.User.findAll()
		.then((resultado)=>{
			return res.render("index",{resultado})
		})
    },

    findAll: function () {
        return this.getData()
    },

    findByPk:function () {
        
        db.User.findByPk(req.params.id).then((resultado) => {
            return resultado
        })
    },

    findByField:function (field,text) {
        //User.findByField("email","uncorreo@gmail.com") busca por un nombre de campo.
        db.User.findAll({
            where:{
                field: req.body.field
            }
        })
        .then((field)=>{
			field === text
		})
        return text

    },
    delete:function (id) {
        db.User.destroy({
            where:{
                id_user:id
            }
        })

        return true;
    }
}

module.exports =  User