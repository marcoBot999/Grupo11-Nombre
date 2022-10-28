const UserModel = require("../models/modelUser.js")

function userLoggedMiddleware(req, res, next) {
    //Variable local para usar, y mostrar elementos al usuario logeado

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.recordarEmail;
    let userFromCookie = UserModel.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware