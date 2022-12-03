module.exports = (sequelize, dataTypes) => {

    let alias = "User"

    let cols = {
        id_user: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        birthday: {
            type: dataTypes.DATE
        },
        address: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        detail: {
            type: dataTypes.VIRTUAL,
            get() {
                return '/api/user/detalle/' + this.id_user;
            },
        },
        url_img: {
            type: dataTypes.VIRTUAL,
            get() {
                return '/images/user-images/' + this.img;
            },
        }
    }

    let config = {
        tableName: "users",
        timestamps: false,
    }


    let User = sequelize.define(alias, cols, config)

    User.associate = function (models) {
        User.belongsToMany(models.Product, {
            as: "products",
            through: "User_Product",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: "false"
        })

        User.belongsTo(models.TypeUser, {
            as: "typesUsers",
            foreignKey: "id_type_user"
        })
    }

    return User

}