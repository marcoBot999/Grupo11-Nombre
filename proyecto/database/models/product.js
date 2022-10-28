module.exports=(sequelize,DataTypes) =>{

    let alias= "Product" 

    let cols={
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true ,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        id_product_category:{
            type:DataTypes.INTEGER
        }
    }
    
    let config={
        tableName : "products",
        timestamps: false,

    }
    
    let product = sequelize.define(alias,cols,config)

    product.associate=function(models){
        user_products.belongsToMany(models.user_products,{
            as:"user_to_products",
            through:"userProduct",
            foreignKey:"id_product",
            otherKey:"id_user",
            timestamps:"false"
        })
    }

    product.associate=function(models){
        product.hasMany(models.productCategory,{
            as:"category",
            foreignKey:"id_product_category"
        })
    }

    return product

}