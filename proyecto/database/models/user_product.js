module.exports=(sequelize,DataTypes) =>{

    let alias= "Users_products" 
    let cols={
        id_user_product: {type:DataTypes.INTEGER,
        primaryKey:true ,
    autoincrement:true},
        id_user:{type:DataTypes.INTEGER},
        id_product:{type:DataTypes.INTEGER}


    }
    let config={
        tableName : "user_product",
        timestamps: false,

    }
    const user_product= sequelize.define(alias,cols,config)
    
    user_product.associate=function(models){}

    return user_product
}