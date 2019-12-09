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

INSERT INTO items (name, description, bid)
VALUES ("Tutoring", "A one hour session to help you with your bootcamp homework", 20), ("MacBook Pro", "Used MacBook Pro from 2015", 800), ("Water Bottle", "Cheap and Disposable", 1);