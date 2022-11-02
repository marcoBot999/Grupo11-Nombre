let fs = require("fs")

const User ={
    fileName: "./data/usuarios.json",
    getData:function () {
        return JSON.parse(fs.readFileSync(this.fileName,"utf-8"))
    },

    findAll: function () {
        return this.getData()
    },

    findByPk:function (id) {
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser=> oneUser.id === id)
        return userFound
    },

    findByField:function (field,text) {
        //User.findByField("email","uncorreo@gmail.com") busca por un nombre de campo.
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser=> oneUser[field] === text)
        return userFound
    },
    delete:function (id) {
        let users = this.findAll()
        let finalUsers = users.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName , JSON.stringify(finalUsers, null, " "))
        return true;
    }
}

module.exports =  User