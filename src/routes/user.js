const express = require("express")
const router = express.Router();
const CadastroUsers = require('../models/Usuarios')
const Atividades = require('../models/Atividades')

router.get('/geraCertificado', (req, res)=>{
    CadastroUsers.findAll().then(function(certis){
    res.render('user/Certificado', {certise: certis})
    })
})

router.get('/formPartic', (req, res)=>{
    res.render('user/userForms/FormParticipante')
})

router.get('/certiAtiv', (req, res)=>{
    Atividades.findAll().then(function(ativis){
    res.render('user/CertificadoPorAtividade', {atividades: ativis})
})
})

//adiciona usuarios
router.post('/addUsuario', (req, res)=>{
    var erros = []
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome.length <2){
        erros.push({ texto: "NOME INVALIDO"})
    }
    if (!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null || req.body.cpf.length < 11) {
        erros.push({ texto: "CPF INVALIDO" })
    }
    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null || req.body.email.length < 12) {
        erros.push({ texto: "EMAIL INVALIDO" })
    }
    if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null || req.body.senha.length < 6) {
        erros.push({ texto: "INSIRA UMA SENHA VÁLIDA" })
    }
    if (req.body.categoria == "Escolher op") { 
        erros.push({ texto: "ESCOLHA SUA FORMAÇÃO" }) }
        if (erros.length > 0) {
            res.render('user/userForms/FormParticipante', { erros: erros })
            }
    else{
    CadastroUsers.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        senha: req.body.senha,
        categoria: req.body.categoria
    }).then(function(){
        res.send('usuarios adicionado')
    }).catch(function(err){
        req.flash("error_msg", "Erro ao adicionar usuario")
        //res.redirect('/anhangueraeventos/gerenciaDeAtividades')
    })
}
})


module.exports = router