module.exports=(sequelize,DataTypes) =>{

    let alias= "Products_Shoppings" 
    let cols={
        id_products_shopping: {type:DataTypes.INTEGER,
        primaryKey:true ,
    autoincrement:true},
        id_products:{type:DataTypes.INTEGER},
        id_shopping:{type:DataTypes.INTEGER}


    }
    let config={
        tableName : "shopping",
        timestamps: false,

    }
    const product_shopping= sequelize.define(alias,cols,config)

    return product_shopping
}