module.exports = (sequelize, dataTypes) => {

    let alias = "Product";

    let cols = {
        id_product: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        id_product_category: {
            type: dataTypes.INTEGER
        },
        img: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "Products",
        timestamps: false,

    }

    let Product = sequelize.define(alias, cols, config);

    //Product.associate = function (models) {
    //User_Products.belongsToMany(models.User_Products, {
    //as: "user_to_products",
    // through: "userProduct",
    //foreignKey: "id_product",
    //otherKey: "id_user",
    //timestamps: "false"
    //})
    // }

    Product.associate = function (models) {
        Product.belongsToMany(models.User, {
            as: "users",
            through: "User_Product",
            foreignKey: "id_product",
            otherKey: "id_user",
            timestamps: "false",
        })

        Product.belongsTo(models.ProductCategory, {
            as: "productsCategorys",
            foreignKey: "id_product_category",
        })
    }

    //Product.associate = function (models) {
    //Product.hasMany(models.ProductCategory, {
    //as: "category",
    // foreignKey: "id_product_category"
    // })
    // }

    return Product;

}