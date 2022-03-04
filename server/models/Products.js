module.exports = (sequelize, DataTypes) =>{
    const Products = sequelize.define("Products",{
        name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        price:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        discount:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        image:{
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