CREATE DATABASE unlimited_gaming;

USE unlimited_gaming;

CREATE TABLE type_user(
id_type_user BIGINT NOT NULL,
type_name VARCHAR (50) NOT NULL,
 PRIMARY KEY (id_type_user)
);

CREATE TABLE users (
    id_user BIGINT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(23) NOT NULL,
    birthday DATE NOT NULL,
    address VARCHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL,
    img VARCHAR(50) NOT NULL,
    id_type_user BIGINT NOT NULL,
    PRIMARY KEY (id_user),
    FOREIGN KEY (id_type_user) REFERENCES type_user(id_type_user)
);

CREATE TABLE product_category(
id_product_category BIGINT NOT NULL,
name_category VARCHAR (50) NOT NULL,
 PRIMARY KEY (id_product_category)
);

CREATE TABLE IF NOT EXISTS products (
    id_product BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL (5,2) UNSIGNED NOT NULL,
    img VARCHAR(70) NOT NULL,
    id_product_category BIGINT NOT NULL,
    PRIMARY KEY (id_product),
    FOREIGN KEY (id_product_category) REFERENCES product_category(id_product_category)
);

CREATE TABLE user_product(
id_user_product BIGINT NOT NULL AUTO_INCREMENT,
id_product BIGINT NOT NULL,
id_user BIGINT NOT NULL,
 PRIMARY KEY (id_user_product),
 FOREIGN KEY (id_product) REFERENCES products(id_product),
 FOREIGN KEY (id_user) REFERENCES users(id_user)
);
