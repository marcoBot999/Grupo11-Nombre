module.exports = (sequelize, dataTypes) => {

    let alias = "ProductCategory"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name_category: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "Product_Category",
        timestamps: false,

    }


    let ProductCategory = sequelize.define(alias, cols, config)

    //Category.associate = function (models) {
    //Category.belongsTo(models.ProductCategory, {
    // as: "category",
    //foreignKey: "id_product_category"
    // })
    //}

    ProductCategory.associate = function (models) {
        ProductCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_product_category"
        })
    }

    return ProductCategory
}