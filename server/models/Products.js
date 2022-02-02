module.exports = (sequelize, DataTypes) =>{
    const Products = sequelize.define("Products",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        discount:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        image:{
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

    Products.associate = (models )=>{
        Products.hasMany( models.Reviews, {
            onDelete: "CASCADE"
        }),
        Products.hasMany( models.OrderItems, {
            onDelete: "CASCADE"
        })
    }

    return Products
}