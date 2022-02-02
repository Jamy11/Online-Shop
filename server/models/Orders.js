const Shops = require('./Shops')
module.exports = ( sequelize, DataTypes) =>{
    const Orders = sequelize.define("Orders",{
        amount_paid:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        total_cost:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
    })

    Orders.associate = ( models) =>{
   
        Orders.hasMany( models.OrderItems, {
            onDelete: "CASCADE",
        }),
        Orders.hasMany( models.Transaction, {
            onDelete: "CASCADE",
        })
    }


    return Orders
}