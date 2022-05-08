const Shops = require('./Shops')
module.exports = ( sequelize, DataTypes) =>{
    const OrderItems = sequelize.define("OrderItems",{
        qunatity:{
            type:DataTypes.STRING,
            allowNull:true,
        },        
        price:{
            type:DataTypes.STRING,
            allowNull:true,
        },        
    })

    OrderItems.associate = ( models) =>{


        // foreign key access
        OrderItems.belongsTo( models.Orders, {
            foreignKey: 'OrderUniqueId',
        })
    }

    return OrderItems
}