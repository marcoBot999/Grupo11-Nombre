
let db = require("../../database/models");
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))


const userApiController = {
    list: (req, res) => {
        db.User.findAll(
            {
                attributes: ["id_user", 'firstname', "lastname", "email", "detail", "url_img", "img"]
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
    lastUser: (req, res) => {
        db.User.findAll(
            {
                attributes: ["id_user", 'firstname', "lastname", "email", "detail", "img", "url_img"]
            }
        )
            .then(user => {

                console.log(user);
                let lastUser = user.pop()
                console.log(lastUser);
                res
                    .status(200)
                    .json({
                        data: lastUser
                    })
            })
    }
}

module.exports = userApiController