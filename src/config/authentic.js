const localStrategy = require('passport-local')
const sequelize = require('sequelize')
const administrador = require('../models/Administradores')
const bcrypt = require('bcryptjs')

module.exports  = function(passport){
    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'senha'
    },async(email, senha, done) =>{

        const usuario = await administrador.findOne({where:{email}})
        if(!usuario){
            return done(null, false, {message: 'Usuario não encotrador'})
        }

        bcrypt.compare(senha, usuario.senha, (erro, batem) => {
            if(batem){
                return done(null, usuario)
            }
            else{
                return done(null, false, {message: 'Senhas incorreta'})
            }
        })
        /*if(senha == usuario.senha){
            return done(null, usuario)
        }
        else{
            return done(null, false, {message: 'senhas não batem'})
        }*/
    }))

    passport.serializeUser((usuario, done)=>{
        done(null, usuario.id)
    })

    passport.deserializeUser(async(id, done)=>{
        await administrador.findByPk(id).then((usuario)=>{
            done(null,usuario)
        }), function(error){
            done(err,null)
        }
    })
}