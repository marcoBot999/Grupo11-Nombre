module.exports = (sequelize, dataTypes) => {

    let alias = "TypeUser"

    let cols = {
        id_type_user: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type_name: {
            type: dataTypes.INTEGER
        },
    }

    let config = {
        tableName: "Type_User",
        timestamps: false,
    }

    let TypeUser = sequelize.define(alias, cols, config)

    TypeUser.associate = function (models) {
        TypeUser.hasMany(models.User, {
            as: "Users",
            foreignKey: "id_type_user",
        })
    }

    return TypeUser
}
