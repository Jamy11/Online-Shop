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
    })

    Products.associate = (models )=>{
        Products.hasMany( models.Reviews, {
            onDelete: "CASCADE"
        }),
        Products.hasMany( models.OrderItems, {
            onDelete: "CASCADE"
        }),
        Products.belongsTo( models.Users, {
            foreignKey: 'id',
        }),
        Products.belongsTo( models.Shops, {
            foreignKey: 'id',
        }),
        Products.belongsTo( models.ProductCatagory, {
            foreignKey: 'id',
        })
    }

    return Products
}