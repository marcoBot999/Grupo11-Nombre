module.exports=(sequelize,DataTypes) =>{

    let alias= "Productos" 
    let cols={
        id_products: {type:DataTypes.INTEGER,
        primaryKey:true ,
    autoincrement:true},
        name:{type:DataTypes.STRING},
        description:{type:DataTypes.STRING},
        price:{type:DataTypes.INTEGER},
        id_product_category:{type:DataTypes.INTEGER},

    }
    let config={
        tableName : "products",
        timestamps: false,

    }
    const producto= sequelize.define(alias,cols,config)

    return producto
}