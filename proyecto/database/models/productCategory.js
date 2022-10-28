module.exports=(sequelize,DataTypes) =>{

    let alias= "category" 

    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true ,
            autoIncrement:true,
        },
        name_category:{
            type:DataTypes.INTEGER
        }
    }
    
    let config={
        tableName : "product_category",
        timestamps: false,

    }
    
    
    let category= sequelize.define(alias,cols,config)

    category.associate=function(models){
        category.belongsTo(models.productCategory,{
            as:"category",
            foreignKey:"id_product_category"
        })
    }

    return category
}