const {Model, DataTypes} = require('sequelize')

class Eventos extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            participantes_esp: DataTypes.INTEGER,
            tipo_evento: DataTypes.STRING,
            quant_salas: DataTypes.INTEGER,
            pago: DataTypes.BOOLEAN,
            valor_evento: DataTypes.DOUBLE
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.belongsTo(models.Administradores, {foreignKey: 'administrado_id', as: 'administrador'})
        this.hasMany(models.Cupons, {foreignKey: 'evento_id', as: 'cupons'})
        this.hasMany(models.Atividades, {foreignKey: 'evento_id', as: 'atividades'})
        this.hasMany(models.Participantes, {foreignKey: 'evento_id', as: 'participantes'})
        this.hasMany(models.Ministrantes, {foreignKey: 'evento_id', as: 'ministrantes'})
    }
}

module.exports = Eventos