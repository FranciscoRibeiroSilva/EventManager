const Administradores = require('../models/Administradores')
const EventoController = require('../controllers/EventoController')

module.exports = {

    testeTetas(req, res){
        const id = req.user
        res.send(id)
    },
    //administradores
    async listaAdms(req, res){
        const adms = await Administradores.findAll()
        res.render('admi/listarAdms',{adms})
    },

    formAdm(req, res){
        res.render('admi/adminForms/FormAdm',)
    },
    login(req, res){
        res.render('index')
    },
    async homepage(req, res){
        const adm = await EventoController.listEvent(req)
        res.render('admi/homepage',{adm})
    },
    formEvento(req, res){
        res.render('admi/adminForms/FormEvento')
    },
    gerenciaEvento(req, res){
        const {id} = req.params
        res.render('admi/gerenciaDeEvento',{id})
    },



    sobre(req, res){
        res.render('admi/sobre')
    },


    formAtividade(req, res){
        res.render('admin/adminForms/FormAtividade')
    },
    formMinistrantes(req, res){
        res.render('admi/adminForms/FormMinistrantes')
    },
    formModAtividade(req, res){
        res.render('admi/adminForms/FormModAtividade')
    },
    formCupon(req, res){
        res.render('admi/adminForms/FormCupons')
    },
    gerenciaCupons(req, res){
        res.render('admi/gerenciaCupons')
    },
    gerenciaAtividades(req, res){
        res.render('admi/gerenciaDeAtividades')
    },
    gerenciaMinistrante(req, res){
        res.render('admi/gerenciaMinistrantes')
    },
    listaUsuarios(req, res){
        res.render('admi/listarUsuarios')
    },
    logoutAdm(req, res){
        req.logout()
        req.flash('error_msg', 'deslogado')
        res.redirect('/login')
    },


    //participantes
    certificado(req, res){
        res.render('user/Certificado')
    },
    certificadoPorAtividade(req, res){
        res.render('user/CertificadoPorAtividade')
    },
    loginParticipante(req, res){
        res.render('user/indexPar')
    },
    listarAtividades(req, res){
        res.render('user/listaAtividades')
    },
    listaEventos(req, res){
        res.render('user/listarEventos')
    },
    loginPar(req, res){
        res.render('user/loginPar')
    },
    loginUsuario(req, res){
        res.render('user/loginUsuario')
    },

    //inicial
    inicial(req, res){
        res.render('inicial')
    }

}