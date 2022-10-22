const { HasMany } = require("sequelize")

module.exports=(sequelize,DataTypes) =>{

    let alias= "Type_user" 
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
    const type_user= sequelize.define(alias,cols,config)

    type_user.associate=function(models){
        type_user.hasMany(models.Users,{
            as:"Users",
            foreignKey:"id_type_user"
        })
    }

    return type_user
}