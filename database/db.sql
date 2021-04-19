

CREATE DATABASE labtp4;

use labtp4;

CREATE TABLE empleados(
id INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
apellido CHAR(50),
nombre CHAR(50),
dni CHAR(50),
sector CHAR(50),
fechaIngreso CHAR(50),
activo CHAR(50)
);

SHOW TABLES;


describe empleados;