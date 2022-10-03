function userLoggedMiddleware(req, res, next) {
    //variable local para usar, y mostrar elementos al usuario logeado

    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
    }
    next();
}

module.exports = userLoggedMiddleware