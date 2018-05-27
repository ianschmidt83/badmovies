var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var API_KEY = require('./config.js').API_KEY;
var axios = require('axios');

var apiHelpers = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
	// console.log('req genre id', req.query.id)
	var genreId = req.query.id;

	var address = 
	  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&page=1&primary_release_date.lte=2017&vote_average.lte=3&with_genres=${genreId}`
	// console.log(address);

	axios.get(address).then(
	  (response) => {
		// console.log('response', response.data.results)
		res.send(response.data.results);
	  }
	)

    // get the search genre     

    // https://www.themoviedb.org/account/signup

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
});

app.get('/genres', function(req, res) {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(
          (response) => {
            // console.log(response.data);
            res.send(response.data.genres);
          }
        )
/*
"genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
]
*/
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
