const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const app = express();

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.use(session({
    secret: "session Unlimited Gaming", resave: false, saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, "/public")));
// Capturan y procesan la informacion de los formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(userLoggedMiddleware);



//Template Engine
app.set("view engine", "ejs");

const indexRouter = require("./routers/indexRouter");
const loginRegister = require("./routers/loginRegisterR");
const productosRouter = require("./routers/productosR");
const apiProductosRouter = require("./routers/api/productosR");


app.use("/", indexRouter);
app.use("/user", loginRegister);
app.use("/productos", productosRouter);
app.use("/api/productos", apiProductosRouter);


app.listen(3000, () => {
    console.log("funcionando");
})