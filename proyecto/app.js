const express = require("express");
const path = require("path")
const methodOverride = require('method-override')
const session = require('express-session');


const app = express();

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")


app.use(userLoggedMiddleware);

app.use(express.static(path.join(__dirname, "/public")));
// capturan y procesal la informacion de los formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use(session({ 
    secret: "session Unlimited Gaming", resave:false, saveUninitialized:false 
}));

//Template Engine
app.set("view engine", "ejs")

const indexRouter = require("./routers/indexRouter")
const loginRegister = require("./routers/loginRegisterR")
const comprasRouter = require("./routers/comprasR")


app.use("/", indexRouter)
app.use("/user", loginRegister)
app.use("/compras", comprasRouter)


app.listen(3000, () => {
    console.log("funcionando");
})