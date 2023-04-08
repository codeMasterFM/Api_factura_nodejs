CREATE DATABASE FACTURA;
USE FACTURA;
CREATE TABLE CLIENTE(
IDClientes INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
NOMBRE VARCHAR(40) 
)

CREATE TABLE PRODUCTOS (
 IDProductos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 NOMBRE VARCHAR(30),
 PRECIO FLOAT,
 CANTIDAD_EXISTENTE INT
);

CREATE TABLE FACTURA (
IDFactura INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
IDClientes INT ,
FOREIGN KEY(IDClientes) REFERENCES CLIENTE(IDClientes),
SUBTOTAL FLOAT,
TOTAL FLOAT,
FECHA DATE
);

CREATE TABLE PRODUCTO_FACTURA (
IDProducto_factura  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
IDProductos INT ,
IDFactura INT ,
FOREIGN KEY (IDProductos) REFERENCES PRODUCTOS(IDProductos),
FOREIGN KEY (IDFactura) REFERENCES FACTURA(IDFactura)

);