module.exports = (sequelize, DataTypes) =>{
    const Shops = sequelize.define("Shops",{
        name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        rating:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        subscription:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    },{
        indexes: [
            {
                unique: true,
                fields: ['name']
            }
        ]
    })

    return Shops
}