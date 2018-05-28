const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  var queryStr = `SELECT * FROM faves;`

  connection.query(queryStr, (err, result) => {
  	callback(err, result);
  })
};

const saveFavorite = function(movie, callback) {

  var queryStr = `INSERT INTO faves (id, title, imgUrl, date, rating)
  				  VALUES (${movie.id}, '${movie.title}', '${movie.poster_path}', 
  				  			'${movie.release_date}', ${movie.vote_average});`

  connection.query(queryStr, (err, result) => {
  	callback(err, result);
  })
};

const deleteFavorite = function(movie, callback) {
  // delete a movie from favorites in the database
  var queryStr = `DELETE FROM faves WHERE id = ${movie.id};`

  connection.query(queryStr, (err, result) => {
  	callback(err, result);
  })
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};