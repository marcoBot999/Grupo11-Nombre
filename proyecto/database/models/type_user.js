module.exports=(sequelize,DataTypes) =>{

    let alias= "Types_users" 
    let cols={
        id_type_user: {type:DataTypes.INTEGER,
        primaryKey:true ,
    autoincrement:true},
        type_name:{type:DataTypes.STRING},


    }
    let config={
        tableName : "type_user",
        timestamps: false,

    }
    const user_category= sequelize.define(alias,cols,config)

    return user_category
}