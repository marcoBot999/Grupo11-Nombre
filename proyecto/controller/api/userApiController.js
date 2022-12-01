
let db = require("../../database/models");
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))


const userApiController = {
    list: (req, res) => {
        db.User.findAll(
            {
                attributes: ["id_user", 'firstname', "lastname", "email", "detail", "url_img"]
            }
        )
            .then(lista => {
                return res.json(
                    {
                        total: lista.length,
                        data: lista,
                    })

            })
    }, detail: (req, res) => {

        db.User.findByPk(req.params.id,
            {
                attributes: ['firstname', "lastname", "email", "id_user"]
            })
            .then((lista) => {
                res.json({
                    data: lista,

                });
            });
    },
    read: (req, res) => {
        fetch("http://localhost:3000/api/user/")
            .then(response => response.json())
            .then(users => {
                res.render("users", { users })

            })
    }
}

module.exports = userApiController