module.exports = (sequelize, dataTypes) => {

    let alias = "UserProduct"

    let cols = {
        id_user_product: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user: {
            type: dataTypes.STRING
        },
        id_product: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "User_Product",
        timestamps: false,
    }

    let UserProducts = sequelize.define(alias, cols, config)
    return UserProducts
}