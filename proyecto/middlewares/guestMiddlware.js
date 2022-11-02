function guestMiddleware(req, res, next) {
    //Evitar entrar al formulario de registro y login si ya está loggeado
    if (req.session.userLogged) {
        return res.redirect("/user/perfil")
    }
    next()
}

module.exports = guestMiddleware