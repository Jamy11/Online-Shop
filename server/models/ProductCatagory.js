module.exports = (sequelize, DataTypes) =>{
    const ProductCatagory = sequelize.define("ProductCatagory",{
        name:{
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

    ProductCatagory.associate = (models) =>{
        ProductCatagory.hasMany(models.Products, {
            onDelete: "CASCADE"
        })
    }

    return ProductCatagory
}