//Express
const express = require("express");
const app = express();

//Handlerbars
const handlebars = require('express-handlebars')

//BodyParser
const bodyParser = require('body-parser')

//Arquivos de rota
const adm = require('./routes/adm')

//Path
const path = require("path")

//Session
const session = require("express-session")

//Menssagens Flash
const flash = require("connect-flash")

//Database
require('./database/index')

//Configurações
//Sessão
app.use(session({
    secret: "qualquer",
    resave: false,
    saveUninitialized: true
}))
/*app.use(passport.initialize())
app.use(passport.session())*/
app.use(flash())

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    next()
})

//handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parse
//app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//css 
app.use(express.static(path.join(__dirname, "../Public")));

app.use('/anhangueraeventos', adm)

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando na URL http://localhost:8081");
});