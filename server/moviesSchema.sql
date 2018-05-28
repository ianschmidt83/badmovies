DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE faves (
  id int NOT NULL,
  title varchar(200) NOT NULL,
  imgUrl varchar(200) NOT NULL,
  date varchar(20) NOT NULL,
  rating DECIMAL(2,1) NOT NULL,
  PRIMARY KEY (id)
);

