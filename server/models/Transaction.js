module.exports = (sequelize, DataTypes) =>{
    const Transaction = sequelize.define("Transaction",{
        amount_paid:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        liability:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    })

    return Transaction
}