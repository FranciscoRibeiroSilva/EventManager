const Eventos = require('../models/Eventos')
const Usuario = require('../models/Usuarios')
const EventosUsuarios = require('../models/EventosUsuarios')

module.exports = {
    async createEvent(req, res){
        const {nome, data_inicio, data_termino, pago, valor_evento} = req.body
        const usuario_id = req.user.id

        event = await Eventos.create({nome, data_inicio, data_termino, pago, valor_evento, usuario_id})

        if(!event){
            req.flash('error_msg', 'Erro ao criar evento')
        }
        
        req.flash('success_msg', 'Evento adicionado com sucesso')
        res.redirect('/homepage')
    },
    async listAllEvents(req, res){
        const eventos = await Eventos.findAll()

        if(!eventos){
            req.flash('error_msg', 'Erro eventos indisponíveis no momento')
            res.redirect('/homepage')
        }

        return eventos
    },
    async subscrevEvent(req, res){
        const {evento_id} = req.params
        const usuario_id = req.user.id

        const subs = await EventosUsuarios.create({evento_id, usuario_id})

        return res.json(subs)
        /*
        const event = await Eventos.findByPk(evento_id)
        if(!event){
            return res.send('sem evento')
        }

        const usuario = await Usuario.findByPk(usuario_id)
        if(!event){
            return res.send('sem usuario')
        }
        
        await event.addUsuarios(usuario)
        res.send('sucesso')
        */
    }
}