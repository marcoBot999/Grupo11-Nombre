module.exports=(sequelize,DataTypes) =>{

    let alias= "User_product" 

    let cols={
        id_user_product: {
            type: DataTypes.INTEGER,
            primaryKey:true ,
            autoIncrement:true,
        },
        id_user:{
            type:DataTypes.STRING
        },
        id_product:{
            type:DataTypes.STRING
        }
    }
    
    let config={
        tableName : "user_products",
        timestamps: false,

    }
    
    

    let user_products = sequelize.define(alias,cols,config)

    return user_products
}