const Shops = require('./Shops')
module.exports = ( sequelize, DataTypes) =>{
    const Users = sequelize.define("Users",{
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        phone_number:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        block_status:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        nid:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        bkash_number:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },{
        indexes: [
            {
                unique: true,
                fields: ['username', 'email']
            }
        ]
    })

    Users.associate = ( models) =>{
        Users.hasMany( models.Shops, {
            onDelete: "cascade",
            allowNull:false,
        }),
        Users.hasMany( models.Reviews, {
            onDelete: "CASCADE",
            allowNull:false,
        }),
        Users.hasMany( models.Orders, {
            onDelete: "CASCADE",
            allowNull:false,
        })
    }



    return Users
}