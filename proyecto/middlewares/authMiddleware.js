function authMiddleware(req,res,next) {
    //permite validar que el usuario esté registrado, y no deja entrar al perfil
    if (!req.session.userLogged) {
        return res.redirect("/user/login")
    }
    next()
}

module.exports = authMiddleware