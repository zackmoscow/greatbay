DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  description VARCHAR(100) NULL,
  bid INT NULL,
  PRIMARY KEY (id)
);
