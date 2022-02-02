module.exports = (sequelize, DataTypes) =>{
    const Shops = sequelize.define("Shops",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        rating:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        subscription:{
            type:DataTypes.STRING,
            allowNull:false,
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