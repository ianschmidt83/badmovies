var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var API_KEY = require('./config.js').API_KEY;
var axios = require('axios');

var apiHelpers = require('./apiHelpers.js');
var db = require('./database.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
	var address = 
	  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&page=1&primary_release_date.lte=2017&vote_average.lte=3&with_genres=${req.query.id}`

	axios.get(address).then(
	  (response) => {
  		res.send(response.data.results);
	  }
	)
});

app.get('/genres', function(req, res) {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(
          (response) => {
            res.send(response.data.genres);
          }
        )
});

app.get('/favorites', function (req, res) {
  db.getAllFavorites(function (err, result) {
    res.send(result);
  })
})

app.post('/save', function(req, res) {
  db.saveFavorite(req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      db.getAllFavorites(function (err, result) {
        res.send(result);
      })
    }
  });
});

app.post('/delete', function(req, res) {
  db.deleteFavorite(req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      db.getAllFavorites(function (err, result) {
        res.send(result);
      })
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
