module.exports = (sequelize, DataTypes) =>{
    const Transaction = sequelize.define("Transaction",{
        amount_paid:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        liability:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    })

    return Transaction
}