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
        },
        detail: {
            type: dataTypes.VIRTUAL,
            get() {
                return '/api/productos/' + this.id_product;
            },
        },
        url_img: {
            type: dataTypes.VIRTUAL,
            get() {
                return '/images/' + this.img;
            },
        }
    }

    let config = {
        tableName: "Products",
        timestamps: false,
    }

    let Product = sequelize.define(alias, cols, config);

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

    return Product;
}