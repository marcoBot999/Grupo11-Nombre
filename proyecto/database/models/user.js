module.exports=(sequelize,DataTypes) =>{

    let alias= "User" 

    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true ,
            autoIncrement:true,
        },
        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        birthday:{
            type:DataTypes.DATE
        },
        adress:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        id_type_user:{
            type:DataTypes.INTEGER
        },
    }
    
    let config={
        tableName : "users",
        timestamps: false,

    }

    
    let user = sequelize.define(alias,cols,config)

    user.associate=function(models){
        user.belongsToMany(models.user_products,{
            as:"products_user",
            through:"userProduct",
            foreignKey:"id_user",
            otherKey:"id_product",
            timestamps:"false"
        })
    }

    user.associate = function (models) {
        user.belongsTo(models.typeUser,{
            as: "types_user",
            foreignKey: "id_type_user"
        })
    }



    return user
}