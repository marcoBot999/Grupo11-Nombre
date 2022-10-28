module.exports=(sequelize,DataTypes) =>{

    let alias= "User" 

    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true ,
            autoIncrement:true,
        },
        type_name:{
            type:DataTypes.INTEGER
        },
    }
    
    let config={
        tableName : "users",
        timestamps: false,

    }
    
   

    let user= sequelize.define(alias,cols,config)

    type_user.associate=function(models){
        type_user.hasMany(models.Users,{
            as:"Users",
            foreignKey:"id_type_user"
        })
    }

    return user
}
