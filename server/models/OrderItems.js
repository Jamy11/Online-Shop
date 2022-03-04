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

    return OrderItems
}