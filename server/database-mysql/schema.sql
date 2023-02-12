DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE users (
  userId int NOT NULL AUTO_INCREMENT UNIQUE,
  fullName varchar(50) NOT NULL,
  adresseMail varchar(50) NOT NULL,
  passeword varchar(50) NOT NULL,
  PRIMARY KEY (userId)
);



CREATE TABLE skill (
  skillId int NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  skillTitle varchar(50) NOT NULL,
  discription varchar(250),
  userId int,
  foreign key (userId) references  users(userId)
  
  );

CREATE TABLE step (
  stepId int NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  stepTitle varchar(50) NOT NULL,
  checked BOOLEAN,
  skillId int ,
  foreign key (skillId) references  skill(skillId)
  );


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/