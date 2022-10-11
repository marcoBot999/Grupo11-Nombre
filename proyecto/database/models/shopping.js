module.exports=(sequelize,DataTypes) =>{

    let alias= "Shoppings" 
    let cols={
        id_shopping: {type:DataTypes.INTEGER,
        primaryKey:true ,
    autoincrement:true},
        id_user:{type:DataTypes.INTEGER},
        cantidad_de_productos:{type:DataTypes.INTEGER},
        precio_total:{type:DataTypes.INTEGER},


    }
    let config={
        tableName : "shopping",
        timestamps: false,

    }
    const shopping= sequelize.define(alias,cols,config)

    return shopping
}