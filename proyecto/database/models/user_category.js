module.exports=(sequelize,DataTypes) =>{

    let alias= "Users_category" 
    let cols={
        id_user_category: {type:DataTypes.INTEGER,
        primaryKey:true ,
    autoincrement:true},
        buyer:{type:DataTypes.BOOLEAN},
        seller:{type:DataTypes.BOOLEAN}


    }
    let config={
        tableName : "shopping",
        timestamps: false,

    }
    const user_category= sequelize.define(alias,cols,config)

    return user_category
}